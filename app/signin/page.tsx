"use client";

import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter()

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

   const handleSubmit = async(e: React.FormEvent) => {
    console.log("Form submitted")
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      identifier : identifier,
      password,
      redirect: false, 
      callbackUrl:"/explore",
    })
    console.log("SIGNIN RESULT:", result)
    setLoading(false)

    if (result?.error) {
      setError("Invalid credentials")
    } else {
      router.push(result?.url || "/")
    }
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center px-6">

      <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg w-full max-w-md">
      <form  onSubmit={handleSubmit}> 
        {error && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl p-2 text-center">
                {error}
              </div>
        )}     
        {/* Heading */}
        <h1 className="text-center mb-8 text-3xl font-bold bg-linear-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Sign In
        </h1>

        {/* Email Input */}
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          placeholder="Email or username"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#262626] outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Password Input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-lg bg-[#262626] outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Sign In Button */}
        <button type="submit" disabled={loading} className="w-full bg-green-500 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
          {loading ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                "Sign In"
              )}
        </button> 
  
      </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* GitHub Login */}
        <button
          onClick={() => signIn("github")}
          className="w-full bg-black border border-gray-600 py-2 rounded-lg hover:bg-[#111] transition"
        >
          Continue with GitHub
        </button>
        <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition mt-2"
      >
        Continue with Google
      </button>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/signup">
          <span className="text-green-400 cursor-pointer">
            Sign up
          </span>
          </Link>

        
        </p>

      </div>
    </div>
  );
}