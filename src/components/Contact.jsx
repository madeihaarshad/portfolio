import { FaRegEnvelope, FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import Pill from "./Pill";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-100" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-violet-100" />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold md:text-4xl">Let’s work together</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-200" />
        <p className="mx-auto mt-5 max-w-lg text-slate-600">{profile.availability}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Pill href={`mailto:${profile.email}`} icon={<FaRegEnvelope />}>Email</Pill>
          <Pill href={profile.linkedin} icon={<FaLinkedinIn />}>LinkedIn</Pill>
          <Pill href={profile.github} icon={<FaGithub />}>GitHub</Pill>
          <Pill href={profile.resume} icon={<FaDownload />} download>Résumé</Pill>
        </div>
      </div>
    </section>
  );
}