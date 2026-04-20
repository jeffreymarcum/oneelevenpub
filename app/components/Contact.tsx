"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-stone-900 text-stone-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400 mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We&apos;d love to hear from you.
          </h2>
          <p className="text-stone-400 leading-relaxed mb-8">
            Whether you are a writer with a manuscript, a bookseller looking to
            stock our titles, or simply a reader who wants to share what a book
            meant to you — our door is open.
          </p>
          <div className="flex flex-col gap-3 text-sm text-stone-400">
            <p>
              <span className="text-amber-400 font-semibold">General: </span>
              hello@oneelevenpublishing.com
            </p>
            <p>
              <span className="text-amber-400 font-semibold">
                Submissions:{" "}
              </span>
              submissions@oneelevenpublishing.com
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Rights: </span>
              rights@oneelevenpublishing.com
            </p>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="flex flex-col items-start gap-4 rounded-lg bg-stone-800 p-8">
            <span className="text-3xl">✉️</span>
            <h3 className="text-xl font-bold text-amber-400">
              Message received!
            </h3>
            <p className="text-stone-300 leading-relaxed">
              Thank you for reaching out. We read every message and will be in
              touch shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-sm font-semibold text-stone-400 hover:text-stone-100 transition-colors underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-wider text-stone-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="bg-stone-800 text-stone-100 placeholder-stone-500 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-stone-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-stone-800 text-stone-100 placeholder-stone-500 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="subject"
                className="text-xs font-semibold uppercase tracking-wider text-stone-400"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="bg-stone-800 text-stone-100 placeholder-stone-500 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wider text-stone-400"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us more..."
                className="bg-stone-800 text-stone-100 placeholder-stone-500 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start px-8 py-3 bg-amber-400 text-stone-900 font-semibold rounded hover:bg-amber-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
