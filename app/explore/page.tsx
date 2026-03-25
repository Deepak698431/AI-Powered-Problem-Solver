// app/explore/page.tsx
"use client";

import { useState } from "react";
import { problems } from "@/lib/problem";
import { useSession  } from "next-auth/react";
import { Router } from "lucide-react";
import Link from "next/link";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProblems = problems.filter((p) => {
    const matchesSearch = p.problem_statement.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.difficulty === filter;
    return matchesSearch && matchesFilter;
  });
  const { data: session } = useSession();

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-6 py-10">
      

      {/* HEADER */}
      {session ? <div>
        <h1 className="text-3xl font-bold mb-6">Explore Problems</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search problems..."
          className="bg-[#1a1a1a] px-4 py-2 rounded-lg outline-none w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters */}
        <div className="flex gap-2">
          {["All", "Easy", "Medium", "Hard"].map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-lg border ${
                filter === level
                  ? "bg-green-500 border-green-500"
                  : "border-gray-600 hover:bg-gray-800"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-[#262626] text-gray-400">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Title</th>
              <th className="p-4">Difficulty</th>
            </tr>
          </thead>

          <tbody>
            {filteredProblems.map((problem) => (
              <tr
                key={problem.id}
                onClick={()=>window.open(`/question/${problem.id}` , "_blank")}
                className="border-t  border-gray-700 hover:bg-[#222] cursor-pointer transition"
              >
                <td className="p-4">{problem.id}</td>
                <td className="p-4 ">{problem.problem_statement}</td>
                <td
                  className={`p-4 font-semibold ${
                    problem.difficulty === "Easy"
                      ? "text-green-400"
                      : problem.difficulty === "Medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {problem.difficulty}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
      </div>
   : <div>
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-black text-white">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center max-w-md w-full">

          {/* 🔐 Icon */}
          <div className="text-5xl mb-4">🔒</div>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">
            Login Required
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-6">
            You must be signed in to access this page.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/signin">
            <button
              className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 w-full rounded-lg"
            >
              Sign In
            </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="border border-gray-400 hover:bg-white hover:text-black transition px-4 py-2 rounded-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
    }
    </div>
  );
}