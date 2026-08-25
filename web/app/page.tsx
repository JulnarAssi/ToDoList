import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Architecture from "./components/Architecture";
import Toolbox from "./components/Toolbox";
import Demo from "./components/Demo";
import ExecutionTrace from "./components/ExecutionTrace";
import Calendar from "./components/Calendar";
import Highlights from "./components/Highlights";
import Team from "./components/Team";
import Academy from "./components/Academy";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <Toolbox />
        <Demo />
        <ExecutionTrace />
        <Calendar />
        <Highlights />
        <Team />
        <Academy />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
