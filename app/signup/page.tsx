"use client";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react"
import Link from "next/link";


export default function SignUpPage() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Something went wrong")
      } else {
        setSuccess("Account created successfully 🎉")
        setTimeout(() => {
          router.push(`/verify?username=${username}`)
        }, 1500)
      }

    } catch (err) {
      setError("Server error. Try again.")
    }

    setLoading(false)

  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-6">

      {/* Card */}
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl p-2 text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/30 rounded-xl p-2 text-center">
                {success}
              </div>
            )}

        {/* Logo + Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold bg-linear-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Join and start your coding journey
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-[#262626] text-white outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg bg-[#262626] text-white outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-[#262626] text-white outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          {/* Signup Button */}
          <button
          disabled={loading}
          type="submit"
            className="w-full bg-green-500 py-2 rounded-lg font-semibold hover:bg-green-600 transition active:scale-95"
          >
            {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Create Account"}
          </button>
        </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* GitHub Auth */}
        <button
          onClick={() => {
            setLoading(true);
            signIn("github", { callbackUrl: "/" });
          }}
          className="w-full flex items-center justify-center gap-2 bg-black border text-white border-gray-700 py-2 rounded-lg hover:bg-[#686666] transition"
        >
          {loading ? "Redirecting..." : "Continue with GitHub"}
        </button>
        { /* Google */}
        <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition mt-2"
        >
        Continue with Google
        </button>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="text-green-400 hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}