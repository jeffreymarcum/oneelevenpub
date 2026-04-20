const books = [
  {
    title: "The Weight of Silence",
    author: "A.J. Harrington",
    genre: "Literary Fiction",
    description:
      "A searingly intimate portrait of a family fractured by grief and the long journey back toward one another.",
    color: "bg-amber-800",
  },
  {
    title: "Cartography of Loss",
    author: "Mireille Fontaine",
    genre: "Memoir",
    description:
      "A celebrated journalist returns to her childhood home in West Africa and pieces together a story of belonging and exile.",
    color: "bg-stone-700",
  },
  {
    title: "The Unmapped Shore",
    author: "Declan Walsh",
    genre: "Historical Novel",
    description:
      "Set against the turbulent backdrop of 19th-century Ireland, a tale of ambition, betrayal, and unlikely friendship.",
    color: "bg-teal-800",
  },
  {
    title: "Signal & Noise",
    author: "Dr. Priya Anand",
    genre: "Non-Fiction",
    description:
      "A groundbreaking look at how misinformation spreads — and what we can do to reclaim clarity in the digital age.",
    color: "bg-indigo-800",
  },
  {
    title: "Good Bones",
    author: "Nadia Osei",
    genre: "Debut Novel",
    description:
      "A young architect's return to her grandmother's crumbling house unearths secrets buried deeper than the foundations.",
    color: "bg-rose-900",
  },
  {
    title: "Year of Small Fires",
    author: "Tomás Reyes",
    genre: "Short Stories",
    description:
      "Fifteen luminous stories that illuminate the hidden worlds of ordinary people living extraordinary interior lives.",
    color: "bg-emerald-900",
  },
];

export default function Books() {
  return (
    <section id="books" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-600 mb-4">
          Our Catalogue
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Featured Titles
        </h2>
        <p className="text-stone-600 max-w-xl mb-14">
          Each book we publish is chosen not merely for its commercial promise,
          but for the conversation it invites — and the lives it might touch.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <article
              key={book.title}
              className="group flex flex-col rounded-lg overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow"
            >
              {/* Spine-style cover */}
              <div
                className={`${book.color} h-48 flex items-end p-5 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_white,_transparent)]" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-1">
                    {book.genre}
                  </p>
                  <h3 className="text-white font-bold text-xl leading-snug">
                    {book.title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col gap-2 flex-1 bg-stone-50">
                <p className="text-sm font-semibold text-stone-500">
                  {book.author}
                </p>
                <p className="text-stone-700 text-sm leading-relaxed flex-1">
                  {book.description}
                </p>
                <button className="mt-4 self-start text-xs font-semibold tracking-wide uppercase text-amber-700 hover:text-amber-500 transition-colors">
                  Learn More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
