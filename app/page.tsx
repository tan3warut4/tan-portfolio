import Image from "next/image";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <Techstack />
      <Experience />
    </div>
  );
}
