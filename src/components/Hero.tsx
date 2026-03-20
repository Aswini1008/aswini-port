import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

/* ─────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
      color: string;
    }

    const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#1d4ed8", "#7dd3fc"];
    const count = 110;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connect nearby
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ─────────────────────────────────────────────
   GIRL SVG ILLUSTRATION (inline, dark-friendly)
───────────────────────────────────────────── */
const GirlIllustration = () => (
  <svg
    viewBox="0 0 420 480"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-[380px] drop-shadow-2xl"
  >
    {/* Desk */}
    <rect x="40" y="360" width="340" height="18" rx="6" fill="#1e293b" />
    <rect x="60" y="378" width="12" height="60" rx="4" fill="#0f172a" />
    <rect x="348" y="378" width="12" height="60" rx="4" fill="#0f172a" />

    {/* Monitor */}
    <rect x="110" y="210" width="200" height="148" rx="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="2.5" />
    <rect x="118" y="218" width="184" height="132" rx="6" fill="#020617" />
    {/* Code lines on monitor */}
    <rect x="130" y="232" width="80" height="5" rx="2" fill="#3b82f6" opacity="0.9" />
    <rect x="130" y="244" width="120" height="5" rx="2" fill="#60a5fa" opacity="0.7" />
    <rect x="140" y="256" width="70" height="5" rx="2" fill="#34d399" opacity="0.8" />
    <rect x="140" y="268" width="100" height="5" rx="2" fill="#f472b6" opacity="0.7" />
    <rect x="130" y="280" width="90" height="5" rx="2" fill="#60a5fa" opacity="0.6" />
    <rect x="140" y="292" width="60" height="5" rx="2" fill="#34d399" opacity="0.7" />
    <rect x="130" y="304" width="110" height="5" rx="2" fill="#3b82f6" opacity="0.5" />
    <rect x="140" y="316" width="75" height="5" rx="2" fill="#f472b6" opacity="0.6" />
    {/* Cursor blink */}
    <rect x="220" y="304" width="2" height="10" rx="1" fill="#60a5fa">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
    {/* Monitor stand */}
    <rect x="198" y="358" width="24" height="10" rx="3" fill="#1e293b" />
    <rect x="184" y="368" width="52" height="6" rx="3" fill="#1e293b" />

    {/* Chair */}
    <rect x="155" y="390" width="110" height="10" rx="5" fill="#1e3a5f" />
    <rect x="200" y="400" width="20" height="38" rx="4" fill="#1e3a5f" />
    <rect x="140" y="424" width="140" height="10" rx="5" fill="#1e3a5f" />

    {/* Body / torso */}
    <rect x="172" y="300" width="76" height="72" rx="20" fill="#3b82f6" />
    {/* Collar */}
    <path d="M200 300 Q210 315 220 300" fill="none" stroke="#1d4ed8" strokeWidth="2" />

    {/* Arms */}
    {/* Left arm (on desk, typing) */}
    <path d="M172 330 Q148 350 158 370" stroke="#fcd5b5" strokeWidth="22" strokeLinecap="round" fill="none" />
    {/* Right arm */}
    <path d="M248 330 Q272 350 262 370" stroke="#fcd5b5" strokeWidth="22" strokeLinecap="round" fill="none" />
    {/* Hands */}
    <ellipse cx="158" cy="374" rx="12" ry="9" fill="#fcd5b5" />
    <ellipse cx="262" cy="374" rx="12" ry="9" fill="#fcd5b5" />

    {/* Neck */}
    <rect x="202" y="278" width="16" height="26" rx="7" fill="#fcd5b5" />

    {/* Head */}
    <ellipse cx="210" cy="248" rx="48" ry="50" fill="#fcd5b5" />

    {/* Hair – long dark hair */}
    <ellipse cx="210" cy="220" rx="50" ry="34" fill="#1a0a00" />
    {/* Hair sides */}
    <path d="M162 230 Q148 270 155 320 Q170 330 178 310 Q165 280 168 250Z" fill="#1a0a00" />
    <path d="M258 230 Q272 270 265 320 Q250 330 242 310 Q255 280 252 250Z" fill="#1a0a00" />
    {/* Hair highlights */}
    <path d="M175 215 Q185 208 195 220" stroke="#3d1a00" strokeWidth="3" fill="none" opacity="0.6" />
    <path d="M220 210 Q232 205 240 218" stroke="#3d1a00" strokeWidth="3" fill="none" opacity="0.6" />

    {/* Glasses */}
    <rect x="183" y="242" width="26" height="18" rx="6" fill="none" stroke="#60a5fa" strokeWidth="2" />
    <rect x="213" y="242" width="26" height="18" rx="6" fill="none" stroke="#60a5fa" strokeWidth="2" />
    <line x1="209" y1="251" x2="213" y2="251" stroke="#60a5fa" strokeWidth="2" />
    <line x1="183" y1="251" x2="177" y2="249" stroke="#60a5fa" strokeWidth="2" />
    <line x1="239" y1="251" x2="245" y2="249" stroke="#60a5fa" strokeWidth="2" />
    {/* Eyes */}
    <ellipse cx="196" cy="251" rx="5" ry="6" fill="#1a0a00" />
    <ellipse cx="226" cy="251" rx="5" ry="6" fill="#1a0a00" />
    <circle cx="198" cy="249" r="1.5" fill="white" />
    <circle cx="228" cy="249" r="1.5" fill="white" />

    {/* Nose */}
    <path d="M208 260 Q210 267 212 260" stroke="#e0a882" strokeWidth="1.5" fill="none" />

    {/* Smile */}
    <path d="M198 272 Q210 282 222 272" stroke="#c47a5a" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Earrings */}
    <circle cx="162" cy="260" r="4" fill="#3b82f6" />
    <circle cx="258" cy="260" r="4" fill="#3b82f6" />

    {/* Keyboard */}
    <rect x="148" y="366" width="124" height="14" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x={155 + i * 18} y="369" width="12" height="5" rx="1.5" fill="#334155" />
    ))}
    {[0,1,2,3,4].map(i => (
      <rect key={i} x={164 + i * 18} y="376" width="12" height="3" rx="1.5" fill="#334155" />
    ))}

    {/* Coffee mug */}
    <rect x="60" y="344" width="34" height="28" rx="5" fill="#be123c" />
    <path d="M94 352 Q106 352 106 360 Q106 368 94 368" stroke="#be123c" strokeWidth="4" fill="none" />
    <rect x="66" y="338" width="22" height="8" rx="2" fill="#1e293b" />
    {/* Steam */}
    <path d="M71 334 Q74 326 71 318" stroke="#94a3b8" strokeWidth="1.5" fill="none" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M80 332 Q83 322 80 314" stroke="#94a3b8" strokeWidth="1.5" fill="none" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.3s" repeatCount="indefinite" />
    </path>

    {/* Floating code badge */}
    <g transform="translate(320, 200)">
      <rect x="0" y="0" width="72" height="28" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="10" y="19" fontFamily="monospace" fontSize="11" fill="#34d399">{"</> JSX"}</text>
      <animate attributeName="transform" values="translate(320,200);translate(320,190);translate(320,200)" dur="3s" repeatCount="indefinite" />
    </g>

    {/* Stars / sparkles */}
    {[[350, 130], [70, 150], [390, 300]].map(([cx, cy], i) => (
      <g key={i}>
        <polygon
          points={`${cx},${cy-8} ${cx+2},${cy-2} ${cx+8},${cy} ${cx+2},${cy+2} ${cx},${cy+8} ${cx-2},${cy+2} ${cx-8},${cy} ${cx-2},${cy-2}`}
          fill="#3b82f6"
          opacity="0.5"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur={`${4 + i}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        </polygon>
      </g>
    ))}
  </svg>
);

/* ─────────────────────────────────────────────
   HERO COMPONENT
───────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center px-6 lg:px-20 pt-20 lg:pt-0"
      style={{ background: "linear-gradient(135deg, #020617 0%, #0a0f1e 50%, #030b1a 100%)" }}
    >
      {/* Animated particle background */}
      <ParticleCanvas />

      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center" style={{ zIndex: 2 }}>

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400 text-sm mb-4 tracking-[0.25em] font-semibold uppercase"
          >
            ✦ Software Engineer
          </motion.p>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Aswini
            </span>
          </h1>

          <div className="mt-4 text-xl sm:text-2xl text-slate-300 font-medium h-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React.js Developer",
                2000,
                "Node.js Backend Engineer",
                2000,
                "Java Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-slate-400 max-w-lg leading-relaxed text-base">
            I design and build scalable web applications with a focus on clean
            architecture, performance, and real-world usability. Passionate about
            solving problems and creating efficient digital systems.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer px-7 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                boxShadow: "0 0 20px rgba(59,130,246,0.35)",
              }}
            >
              Contact
            </Link>
            <Link
              to="projects"
              smooth
              duration={500}
              className="cursor-pointer px-7 py-3 rounded-full font-semibold text-white border border-slate-600 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
          </div>

          <div className="mt-8 flex gap-5">
            {[
              { href: "https://github.com/Aswini1008", icon: <FaGithub size={22} /> },
              { href: "https://www.linkedin.com/in/aswini-sm", icon: <FaLinkedin size={22} /> },
              { href: "https://www.instagram.com/_.aswini._10", icon: <FaInstagram size={22} /> },
            ].map(({ href, icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#60a5fa" }}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          {/* Glowing ring behind illustration */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(29,78,216,0.08) 60%, transparent 80%)",
                filter: "blur(20px)",
              }}
            />
            <div
              className="absolute w-[320px] h-[320px] rounded-full border border-blue-500/20"
              style={{ animation: "spin 18s linear infinite" }}
            />
            <div
              className="absolute w-[280px] h-[280px] rounded-full border border-blue-400/10"
              style={{ animation: "spin 12s linear infinite reverse" }}
            />

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <GirlIllustration />
            </motion.div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;