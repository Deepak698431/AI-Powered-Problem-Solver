// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-6 py-12">

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight">
          About Our Platform 🚀
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          We help developers prepare for coding interviews with real-world problems,
          AI-powered feedback, and structured learning.
        </p>
      </section>

      {/* MISSION */}
      <section className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="text-gray-400 mt-4">
          Our goal is to make interview preparation simple, effective, and accessible
          to everyone. We combine problem-solving, AI insights, and structured practice
          to help you land your dream job.
        </p>
      </section>

      {/* FEATURES */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "DSA Practice",
              desc: "Solve hundreds of curated problems from beginner to advanced level.",
            },
            {
              title: "AI Mock Interviews",
              desc: "Practice real interview scenarios with AI-based feedback.",
            },
            {
              title: "Progress Tracking",
              desc: "Track your growth and improve your weak areas.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Built With 💻</h2>
        <p className="text-gray-400 mt-4">
          This platform is powered by modern technologies like Next.js, Tailwind CSS,
          and AI tools to deliver a fast and seamless experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Next.js", "Tailwind CSS", "Node.js", "AI/ML"].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm hover:bg-[#262626] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold">
          Start Your Journey Today
        </h2>
        <p className="text-gray-400 mt-2">
          Practice smarter. Crack interviews faster.
        </p>

        <a href="/explore">
          <button className="mt-6 bg-green-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
            Explore Problems
          </button>
        </a>
      </section>

    </div>
  );
}