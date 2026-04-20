import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
