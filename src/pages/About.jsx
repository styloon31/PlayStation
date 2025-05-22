import AboutPageS from "../components/AboutPageS";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <Navbar />
      <AboutPageS />
    </main>
  );
}
