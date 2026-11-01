import {
  FaLinkedinIn,
  FaGithub,
  FaRegUser,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const highlights = [
  { value: "7+", label: "Projects built" },
  { value: "MERN · Python · Java", label: "Core stack" },
  { value: "Live", label: "Deployed apps" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-violet-100/80 blur-2xl" />

      <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 p-8 md:flex-row md:p-14">
        {/* text */}
        <div className="max-w-xl text-center md:text-left">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to remote &amp; part-time roles
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {profile.name.split(" ")[0]}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-4 leading-relaxed text-slate-600"
          >
            {profile.summary}
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View my work <FaArrowDown className="text-xs" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <FaDownload className="text-xs" /> Résumé
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-600 hover:shadow-md"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-900 hover:shadow-md"
            >
              <FaGithub />
            </a>
          </motion.div>

          {/* highlights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur"
              >
                <p className="text-sm font-bold text-slate-900 md:text-base">
                  {h.value}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-300 via-violet-300 to-pink-200 opacity-60 blur-xl" />
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-xl md:h-80 md:w-80">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <FaRegUser className="text-4xl" />
                <span className="text-sm font-semibold">Photo placeholder</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}