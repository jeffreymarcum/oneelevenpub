import { useState } from 'react'

import './App.css'

function App() {
  const [logoAvailable, setLogoAvailable] = useState(true)

  const publicationTracks = [
    'Literary fiction and modern myth',
    'Adventure memoir and mountain essays',
    'Poetry collections and limited editions',
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <nav className="topnav" aria-label="Main">
          <a href="#catalog">Catalog</a>
          <a href="#submissions">Submissions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="catalog">
          <div className="hero-brand" aria-label="One Eleven Publishing logo">
            {logoAvailable ? (
              <img
                src="/logo.png"
                alt="One Eleven Publishing"
                className="hero-logo"
                onError={() => setLogoAvailable(false)}
              />
            ) : (
              <div className="hero-fallback" aria-hidden="true">
                <span>111</span>
                <strong>One Eleven Publishing</strong>
              </div>
            )}
          </div>
          <p className="kicker">Independent imprint</p>
          <h1>Stories Worth the Summit</h1>
          <p className="intro">
            One Eleven Publishing curates bold voices, crafted books, and timeless
            editions inspired by wilderness, wonder, and human resilience.
          </p>
          <div className="hero-actions">
            <button type="button">Explore titles</button>
            <button type="button" className="ghost">
              Download media kit
            </button>
          </div>
        </section>

        <section className="metrics" aria-label="Publishing highlights">
          <article>
            <h2>24</h2>
            <p>Books launched in the last 18 months</p>
          </article>
          <article>
            <h2>9</h2>
            <p>International rights partnerships</p>
          </article>
          <article>
            <h2>111</h2>
            <p>Collector copies in every first-run release</p>
          </article>
        </section>

        <section className="tracks" id="submissions">
          <div>
            <p className="kicker">What we publish</p>
            <h3>Curated categories, intentional pacing</h3>
          </div>
          <ul>
            {publicationTracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact">
        <p>One Eleven Publishing | Est. 2026</p>
        <a href="mailto:hello@oneelevenpublishing.com">hello@oneelevenpublishing.com</a>
      </footer>
    </div>
  )
}

export default App
