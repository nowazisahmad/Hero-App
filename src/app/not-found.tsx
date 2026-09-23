import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0f0e] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-37 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 text-center max-w-xl">
        {/* 404 */}
        <h1 className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Content */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Page not found</h2>

        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Looks like you took a wrong turn. The page youre looking for doesnt
          exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
          bg-cyan-500 hover:bg-cyan-400 text-black font-semibold
          transition-all duration-300 hover:-translate-y-1
          hover:shadow-lg hover:shadow-cyan-500/20"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}