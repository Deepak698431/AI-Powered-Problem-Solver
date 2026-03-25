"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-6 py-10">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Level Up Your Coding Skills 🚀
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Practice DSA, prepare for interviews, and become a better developer.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/explore">
            <button className="bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
              Start Coding
            </button>
          </Link>
          <Link href="/about">
            <button className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
        {[
          { title: "Problems", value: "2000+" },
          { title: "Users", value: "1M+" },
          { title: "Submissions", value: "50M+" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-md hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold">{item.value}</h2>
            <p className="text-gray-400 mt-2">{item.title}</p>
          </div>
        ))}
      </section>

      {/* PROBLEM CATEGORIES */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Explore Topics</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Arrays",
            "Strings",
            "Dynamic Programming",
            "Graphs",
            "Trees",
            "Backtracking",
            "Greedy",
            "Binary Search",
          ].map((topic, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:bg-[#262626] transition "
            >
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Crack Your Dream Job?
        </h2>
        <p className="text-gray-400 mt-2">
          Join thousands of developers practicing daily.
        </p>

        <Link href="/signin">
          <button className="mt-6 bg-green-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
            Get Started
          </button>
        </Link>
      </section>

    </div>
  );
}