export default function Pill({ href, icon, children, download }) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel="noreferrer"
      download={download}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {icon}
      {children}
    </a>
  );
}