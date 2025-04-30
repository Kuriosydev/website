"use client"
import { useState } from "react";
import Link from "next/link";

export default function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const payload = {
            identifier,
            password
        };

        try {
            const response = await fetch("https://cms.kurixel.com/api/auth/local", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Login successful!");
                setTimeout(() => {
                    window.location.href = "/dashboard";
                  }, 2000);
            } else {
                setMessage(data.error?.message || "Login failed");
            }
        } catch (error) {
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center w-full h-auto bg-[#FFCE49] undefined dark:bg-black dark:text-white">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
                <h2 className="font-luckiest text-5xl md:text-7xl font-normal text-center md:tracking-wider text-[#8F0E00] dark:text-[#FFCE49] mt-10 font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-base font-medium">Email</label>
                        <input
                            type="email"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-base font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <div className="flex flex-col gap-2 mt-4 text-center">
                    <Link href="/register" className="text-blue-600 hover:underline text-sm">
                        Register
                    </Link>
                    <Link href="/forgot-password" className="text-blue-600 hover:underline text-sm">
                        Forgot Password?
                    </Link>
                </div>
                {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
            </div>
        </div>
    );
}
