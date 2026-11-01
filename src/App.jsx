import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsExperience from "./components/SkillsExperience";
import Contact from "./components/Contact";

export default function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    window.scrollTo(0, 0);
    setEntered(true);
  };

  return (
    <>
      <AnimatePresence>
        {!entered && <Intro key="intro" onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <motion.main
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl space-y-4 p-4 md:p-8"
        >
          <Hero />
          <SkillsExperience />
          <Projects />
          <Contact />
        </motion.main>
      )}
    </>
  );
}