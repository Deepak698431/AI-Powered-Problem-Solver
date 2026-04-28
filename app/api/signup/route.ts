import dbConnect from "@/lib/dbConnect";
import userModel from "@/models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

// app/api/signup/route.ts

// ... other imports
export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    // 1. Check existing user... (keep your existing logic here)

    // 2. Generate Verification Data
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1); // Expires in 1 hour

    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create the user with the REQUIRED fields
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      verifyCode: verifyCode,          // ✅ Matches your schema 'path'
      verifyCode_Expiry: expiryDate,   // ✅ Matches your schema 'path'
      isVerified: false,
    });

    await newUser.save();

    // 4. (Optional) Send the verification email here...

    return NextResponse.json(
      { message: "User registered successfully! Please verify your email." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error details:", error.errors); // Log specific validation errors
    return NextResponse.json(
      { message: error.message || "Error registering user" },
      { status: 500 }
    );
  }
}