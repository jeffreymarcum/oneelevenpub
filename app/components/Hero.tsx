export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 bg-stone-900 text-stone-50 overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d6d3d1 0px, #d6d3d1 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-400 mb-4">
          One Eleven Publishing
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Stories That
          <br />
          <em className="not-italic text-amber-400">Matter</em>
        </h1>
        <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-xl mx-auto mb-10">
          We discover, develop, and champion voices that shape culture — from
          debut novels to landmark non-fiction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#books"
            className="px-8 py-3 bg-amber-400 text-stone-900 font-semibold rounded hover:bg-amber-300 transition-colors"
          >
            Our Books
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-stone-400 text-stone-100 font-semibold rounded hover:bg-stone-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 animate-bounce text-stone-400">
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
