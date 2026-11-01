import { FaBriefcase, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { techStack, experience } from "../data/portfolio";

export default function SkillsExperience() {
  return (
    <section className="grid items-stretch gap-4 md:grid-cols-2">
      {/* EXPERIENCE: highlighted */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-6 text-white shadow-xl md:p-8"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet-500/30 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-2xl" />

        <div className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-lg">
            <FaBriefcase />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
              Professional
            </p>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
        </div>

        <div className="relative mt-6 flex flex-1 flex-col gap-4">
          {experience.map((e) => (
            <div
              key={e.role}
              className="flex flex-1 flex-col rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold">{e.role}</h3>
                  <p className="text-sm text-blue-100">{e.employer}</p>
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  {e.duration}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm text-slate-100">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
      >
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-violet-100" />

        <div className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg text-blue-600">
            <FaLaptopCode />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Skills
            </p>
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
        </div>

        <div className="relative mt-6 flex flex-1 flex-col justify-between gap-4">
          {techStack.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {group.title}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}