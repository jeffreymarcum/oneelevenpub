export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-lg font-bold text-stone-100 mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            One Eleven Publishing
          </p>
          <p className="text-sm">Bringing thoughtful stories and ideas to life.</p>
        </div>

        <nav className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-stone-100 transition-colors">
            About
          </a>
          <a href="#books" className="hover:text-stone-100 transition-colors">
            Books
          </a>
          <a href="#contact" className="hover:text-stone-100 transition-colors">
            Contact
          </a>
        </nav>

        <p className="text-xs">
          © {new Date().getFullYear()} One Eleven Publishing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
