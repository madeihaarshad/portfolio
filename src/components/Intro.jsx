import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { profile } from "../data/portfolio";

const HAIR = "#4a2c1d";
const HAIR_LIGHT = "#6b4129";
const SKIN = "#f9d9bf";
const BLAZER = "#c9a77c";
const BLAZER_DARK = "#b08b5e";
const TROUSERS = "#334155";

function Girl() {
  return (
    <svg viewBox="0 0 240 420" className="h-72 w-auto drop-shadow-xl md:h-[26rem]">
      {/* ground shadow */}
      <ellipse cx="120" cy="408" rx="56" ry="7" fill="#0f172a" opacity="0.12" />

      {/* trousers */}
      <path d="M90 232 L150 232 L150 252 L148 394 L124 394 L120 270 L116 394 L92 394 L90 252 Z" fill={TROUSERS} />
      <path d="M120 262 L120 300" stroke="#1e293b" strokeWidth="2" opacity="0.5" />
      <path d="M104 290 L104 390" stroke="#475569" strokeWidth="1.5" opacity="0.6" />
      <path d="M136 290 L136 390" stroke="#475569" strokeWidth="1.5" opacity="0.6" />

      {/* shoes */}
      <path d="M90 394 L118 394 L118 402 Q104 410 86 403 Z" fill="#1f2937" />
      <path d="M150 394 L122 394 L122 402 Q136 410 154 403 Z" fill="#1f2937" />

      {/* torso: breathing */}
      <motion.g
        animate={{ scaleY: [1, 1.015, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformBox: "view-box", transformOrigin: "120px 244px" }}
      >
        {/* blazer body */}
        <path d="M80 172 Q120 158 160 172 L166 252 Q120 262 74 252 Z" fill={BLAZER} />

        {/* blouse (V-neck) */}
        <path d="M102 164 L120 224 L138 164 Q120 156 102 164 Z" fill="#ffffff" />
        <path d="M104 166 Q120 176 136 166" fill="none" stroke="#e2e8f0" strokeWidth="2" />

        {/* lapels */}
        <path d="M100 162 L119 214 L96 226 L86 182 Z" fill={BLAZER_DARK} />
        <path d="M140 162 L121 214 L144 226 L154 182 Z" fill={BLAZER_DARK} />
        <path d="M119 214 L114 254" stroke="#9c7848" strokeWidth="2" opacity="0.7" />
        <path d="M121 214 L126 254" stroke="#9c7848" strokeWidth="2" opacity="0.7" />
        <circle cx="120" cy="238" r="2.4" fill="#7c5c34" />

        {/* pendant */}
        <path d="M110 166 Q120 190 130 166" fill="none" stroke="#d4af37" strokeWidth="1.5" />
        <circle cx="120" cy="187" r="2.6" fill="#d4af37" />

        {/* left arm holding laptop */}
        <path d="M82 178 Q64 214 98 234" fill="none" stroke={BLAZER} strokeWidth="17" strokeLinecap="round" />
        <path d="M92 230 L104 238" stroke={BLAZER_DARK} strokeWidth="3" strokeLinecap="round" opacity="0.6" />

        {/* closed laptop, held like a book */}
        <g transform="rotate(-8 122 216)">
          <rect x="88" y="194" width="64" height="46" rx="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="88" y="236" width="64" height="5" rx="2.5" fill="#94a3b8" />
          <rect x="94" y="200" width="52" height="3" rx="1.5" fill="#e2e8f0" />
          <circle cx="120" cy="217" r="5.5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
        </g>

        {/* hand wrapped around laptop */}
        <circle cx="104" cy="235" r="8" fill={SKIN} />
        <circle cx="111" cy="239" r="6" fill={SKIN} />
        <ellipse cx="94" cy="214" rx="4.5" ry="9" fill={SKIN} />
      </motion.g>

      {/* head group: gentle tilt */}
      <motion.g
        animate={{ rotate: [-1.8, 1.8, -1.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformBox: "view-box", transformOrigin: "120px 152px" }}
      >
        {/* open hair: back layer */}
        <path
          d="M72 92 Q66 22 120 20 Q174 22 168 92 Q192 160 178 232 Q160 242 152 214 L152 130 L88 130 L88 214 Q80 242 62 232 Q48 160 72 92 Z"
          fill={HAIR}
        />

        {/* neck */}
        <rect x="111" y="132" width="18" height="30" rx="8" fill={SKIN} />
        <path d="M111 146 Q120 156 129 146 L129 154 Q120 162 111 154 Z" fill="#e8b996" opacity="0.5" />

        {/* ears + pearl earrings */}
        <ellipse cx="82" cy="100" rx="5" ry="9" fill={SKIN} />
        <ellipse cx="158" cy="100" rx="5" ry="9" fill={SKIN} />
        <circle cx="82" cy="111" r="2.4" fill="#fff" stroke="#e2e8f0" />
        <circle cx="158" cy="111" r="2.4" fill="#fff" stroke="#e2e8f0" />

        {/* face */}
        <ellipse cx="120" cy="98" rx="38" ry="44" fill={SKIN} />

        {/* side-parted fringe */}
        <path
          d="M80 92 Q80 42 124 40 Q162 44 160 94 Q150 64 126 60 Q98 60 80 92 Z"
          fill={HAIR}
        />
        <path d="M100 48 Q122 42 142 52" stroke={HAIR_LIGHT} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* eyebrows */}
        <path d="M95 84 Q104 79 113 83" fill="none" stroke={HAIR} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M127 83 Q136 79 145 84" fill="none" stroke={HAIR} strokeWidth="2.6" strokeLinecap="round" />

        {/* eyes: blink */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1] }}
          transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 3, times: [0, 0.4, 0.7, 1] }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <ellipse cx="104" cy="100" rx="8.5" ry="9.5" fill="#fff" />
          <ellipse cx="136" cy="100" rx="8.5" ry="9.5" fill="#fff" />
          <circle cx="105" cy="101" r="6.2" fill="#7a4a2a" />
          <circle cx="135" cy="101" r="6.2" fill="#7a4a2a" />
          <circle cx="105" cy="101" r="3.4" fill="#1e1410" />
          <circle cx="135" cy="101" r="3.4" fill="#1e1410" />
          <circle cx="107.4" cy="98.4" r="2" fill="#fff" />
          <circle cx="137.4" cy="98.4" r="2" fill="#fff" />
        </motion.g>

        {/* upper lids + lashes */}
        <path d="M95 96 Q104 88 113 96" fill="none" stroke="#2a1a12" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M127 96 Q136 88 145 96" fill="none" stroke="#2a1a12" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M95 96 L91 93" stroke="#2a1a12" strokeWidth="2" strokeLinecap="round" />
        <path d="M145 96 L149 93" stroke="#2a1a12" strokeWidth="2" strokeLinecap="round" />

        {/* nose */}
        <path d="M120 108 Q117 114 121 115" fill="none" stroke="#d9a785" strokeWidth="2" strokeLinecap="round" />

        {/* blush */}
        <ellipse cx="94" cy="118" rx="8" ry="4.5" fill="#fda4af" opacity="0.5" />
        <ellipse cx="146" cy="118" rx="8" ry="4.5" fill="#fda4af" opacity="0.5" />

        {/* smile */}
        <path d="M110 125 Q120 134 130 125" fill="#c2415d" stroke="#c2415d" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M113 126 Q120 129 127 126" fill="#fff" />

        {/* open hair: front locks over shoulders */}
        <path d="M78 108 Q60 170 68 232 Q82 240 92 226 Q84 172 92 128 Z" fill={HAIR} />
        <path d="M162 108 Q180 170 172 232 Q158 240 148 226 Q156 172 148 128 Z" fill={HAIR} />
        <path d="M76 160 Q70 190 74 216" stroke={HAIR_LIGHT} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M164 160 Q170 190 166 216" stroke={HAIR_LIGHT} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
      </motion.g>

      {/* waving right arm (in front of hair) */}
      <motion.g
        animate={{ rotate: [0, -28, 6, -28, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        style={{ transformBox: "view-box", transformOrigin: "158px 180px" }}
      >
        <path d="M158 180 L190 148" fill="none" stroke={BLAZER} strokeWidth="17" strokeLinecap="round" />
        <path d="M183 154 L190 161" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <circle cx="194" cy="142" r="9" fill={SKIN} />
        <path d="M188 146 L186 139 M194 134 L194 128 M200 138 L203 132" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

export default function Intro({ onEnter }) {
  const [rolling, setRolling] = useState(false);

  return (
    <motion.section
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50 px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-100/80 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-violet-100/80 blur-2xl" />

      {/* girl: floats, then rolls away on click */}
      <motion.div
        className="relative"
        animate={
          rolling
            ? { x: "120vw", rotate: 900, transition: { duration: 1.5, ease: "easeIn" } }
            : { x: 0, rotate: 0 }
        }
        onAnimationComplete={() => rolling && onEnter()}
      >
        <motion.div
          animate={rolling ? { y: 0 } : { y: [0, -10, 0] }}
          transition={{ duration: 2.6, repeat: rolling ? 0 : Infinity, ease: "easeInOut" }}
        >
          <Girl />
        </motion.div>
      </motion.div>

      {/* text + button */}
      <motion.div
        className="relative mt-4 max-w-md text-center"
        animate={{ opacity: rolling ? 0 : 1, y: rolling ? 20 : 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: rolling ? 0 : 0.3 }}
      >
        <p className="text-sm font-semibold text-slate-500">Hi, I’m</p>
        <h1 className="mt-1 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg font-semibold text-slate-700">
          Backend &amp; Full-Stack Developer
        </p>
        <p className="mt-2 text-sm text-slate-500">
          I build reliable backends and polished web apps.
        </p>

        <button
          onClick={() => setRolling(true)}
          disabled={rolling}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-default"
        >
          View complete portfolio <FaArrowRight className="text-xs" />
        </button>
      </motion.div>
    </motion.section>
  );
}