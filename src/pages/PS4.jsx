import { Link } from "react-router-dom";
import { Star, Download } from "lucide-react";
import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";
import Ps4Section from "../components/Ps4Section";
import Navbar from "../components/Navbar";

export default function PS4() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#121212]">
      <Navbar />
      <Ps4Section />
    </main>
  );
}
