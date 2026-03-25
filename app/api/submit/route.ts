import { NextRequest, NextResponse } from "next/server";
import { TestCases } from "@/lib/testCases";
import dbConnect from "@/lib/dbConnect";
import userModel from "@/models/user";
import { getServerSession } from "next-auth";
import { number } from "zod";
import { authOptions } from "../auth/[...nextauth]/route";
import { runCode } from "@/lib/runCode";

export async function POST(req: NextRequest) {
  const { code, language, questionId } = await req.json();

  await dbConnect();

  // ✅ get session ONCE
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  console.log("Question-id" , questionId);


const testCasesObj = TestCases[0]; // ✅ VERY IMPORTANT

  // ✅ find correct test cases using questionId
  const cleanId = parseInt(questionId, 10);

const key = Object.keys(testCasesObj).find((k) => {
  const extracted = parseInt(k.split("_")[0], 10);
  return extracted === cleanId;
});

  console.log("Key" , key)
  if (!key) {
    return NextResponse.json({ error: "Invalid questionId" }, { status: 400 });
  }

//   const testCases = testCasesObj[key] as any[];
const testCases = (testCasesObj as any)[key];
console.log("test cases =", testCases);
  let allPassed = true;
  const results = [];

  // ✅ correct loop
  for (const test of testCases) {
    const output = await runCode(code, language, test.input);

    const passed = output.trim() === String(test.expected).trim();

    if (!passed) allPassed = false;

    results.push({
      input: test.input,
      expected: test.expected,
      output,
      passed,
    });
  }

  // ✅ store in DB if passed
  if (allPassed) {
    await userModel.findOneAndUpdate(
      { email: session.user.email },
      {
        $addToSet: { solvedQuestions : questionId },
      }
    );
  }

  return NextResponse.json({
    success: allPassed,
    results,
  });
}