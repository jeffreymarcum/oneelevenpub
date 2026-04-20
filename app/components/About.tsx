const values = [
  {
    icon: "✦",
    title: "Authentic Voices",
    description:
      "We seek stories that feel true — raw, honest, and deeply human — regardless of genre or medium.",
  },
  {
    icon: "◈",
    title: "Author-First",
    description:
      "Our authors are partners. We invest in long-term relationships that extend well beyond the first book.",
  },
  {
    icon: "❋",
    title: "Craft & Quality",
    description:
      "Every title in our catalogue is shaped by meticulous editing, beautiful design, and thoughtful production.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-600 mb-4">
          About Us
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              A home for bold,
              <br />
              enduring ideas.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              One Eleven Publishing was founded with a single conviction: the
              right book in the right hands can change a life. We are an
              independent publishing house dedicated to cultivating writers whose
              work challenges, inspires, and endures.
            </p>
            <p className="text-stone-600 leading-relaxed">
              From literary fiction to narrative non-fiction, our catalogue
              spans every shelf but shares a common thread — a relentless
              commitment to the power of the written word.
            </p>
          </div>

          {/* Values grid */}
          <div className="flex flex-col gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5">
                <span className="text-2xl text-amber-500 mt-1 shrink-0">
                  {v.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-1">
                    {v.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
