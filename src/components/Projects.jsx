import { FaLink, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function Projects() {
  const isOdd = projects.length % 2 === 1;

  return (
    <section
      id="projects"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-100" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-blue-100" />

      <h2 className="relative text-2xl font-bold">Selected Projects</h2>

      <div className="relative mt-5 grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            className={`flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
              isOdd && i === projects.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <h3 className="text-base font-bold">{p.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              {p.description}
            </p>
            <p className="mt-2 text-xs text-slate-500">{p.tech.join(" · ")}</p>

            <div className="mt-auto flex gap-5 pt-3 text-sm font-semibold text-slate-600">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600"
                >
                  <FaLink /> Live Site
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-900"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {!p.live && !p.github && (
                <span className="text-xs font-medium text-slate-400">
                  Source not public
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}