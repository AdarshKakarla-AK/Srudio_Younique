import { useEffect, useState } from "react";
import { INSTAGRAM_URL, WA_GENERAL } from "../content";

/* ---------- custom cursor ---------- */
export function Cursor() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = document.getElementById("cursor");
    const label = document.getElementById("cursor-label");
    if (!el) return;
    let x = -100, y = -100, tx = -100, ty = -100, scale = 1, tScale = 1, text = "";
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest?.("[data-cursor]") as HTMLElement | null;
      const v = t?.dataset.cursor ?? "";
      if (v !== text) {
        text = v;
        if (label) label.textContent = v;
        tScale = v ? 3.4 : 1;
        el.dataset.active = v ? "1" : "";
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    let raf = 0;
    const loop = () => {
      x += (tx - x) * 0.2; y += (ty - y) * 0.2; scale += (tScale - scale) * 0.18;
      el.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div id="cursor" className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block" data-active="">
      <div id="cursor-dot" className="grid h-8 w-8 place-items-center rounded-full border-[1.5px] border-[#211A1E] bg-transparent transition-[background-color] duration-300">
        <span id="cursor-label" className="font-sans text-[7px] font-semibold tracking-[0.14em] text-[#FBF3E4]" />
      </div>
    </div>
  );
}

/* ---------- magnetic CTAs (fine pointer only, motion-safe) ---------- */
export function Magnetics() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-magnet]"));
    const cleanups = els.map((el) => {
      let raf = 0;
      const pull = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${(dx * 0.14).toFixed(1)}px, ${(dy * 0.18).toFixed(1)}px)`;
        });
      };
      const release = () => {
        cancelAnimationFrame(raf);
        el.style.transition = "transform .5s cubic-bezier(.34,1.56,.64,1)";
        el.style.transform = "";
        window.setTimeout(() => { el.style.transition = ""; }, 500);
      };
      el.addEventListener("mousemove", pull);
      el.addEventListener("mouseleave", release);
      return () => { el.removeEventListener("mousemove", pull); el.removeEventListener("mouseleave", release); cancelAnimationFrame(raf); };
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
  return null;
}

/* ---------- loader ---------- */
export function Loader({ done }: { done: boolean }) {
  return (
    <div className={`fixed inset-0 z-[150] grid place-items-center bg-[#FBF3E4] transition-all duration-700 ${done ? "pointer-events-none -translate-y-full" : ""}`} aria-hidden={done}>
      <div className="text-center">
        <p className="font-hand text-2xl text-[#C2255C]">a little dream…</p>
        <h1 className="font-serif-d text-5xl md:text-7xl leading-[0.95]">Studio<br /><em className="font-light">YouNique</em></h1>
        <svg viewBox="0 0 220 30" className={`mx-auto mt-4 h-6 w-52 thread-draw ${!done ? "thread-on" : ""}`}>
          <path d="M4 18 C 60 6, 120 26, 216 12" fill="none" stroke="#C2255C" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <p className="mt-2 text-[11px] tracking-[0.35em] text-[#4A3A40]">STITCHED WITH LOVE</p>
      </div>
    </div>
  );
}

/* ---------- nav ---------- */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["Collection", "#wardrobe"], ["Custom", "#custom"], ["Story", "#story"], ["Visit", "#visit"]];
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? "bg-[#FBF3E4]/90 backdrop-blur-md shadow-[0_1px_0_rgba(33,26,30,.12)]" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8" aria-label="Primary">
          <a href="#top" className="leading-none" data-cursor="HELLO">
            <span className="font-hand text-2xl md:text-3xl">Studio</span>
            <span className="font-serif-d block text-lg md:text-xl font-semibold tracking-tight -mt-1">YouNique</span>
          </a>
          <div className="hidden items-center gap-7 text-[12px] font-medium tracking-[0.22em] md:flex">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="hover:text-[#C2255C] transition-colors" data-cursor="GO">{l.toUpperCase()}</a>
            ))}
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="rounded-full bg-[#211A1E] px-5 py-2.5 text-[#FBF3E4] hover:bg-[#C2255C] transition-colors" data-cursor="CHAT">WHATSAPP</a>
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-[#211A1E] md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <span className="block w-5 space-y-1.5">{[0, 1].map(i => <span key={i} className={`block h-[2px] bg-[#211A1E] transition-transform ${open && i === 0 ? "translate-y-[7px] rotate-45" : open ? "-translate-y-[3px] -rotate-45" : ""}`} />)}</span>
          </button>
        </nav>
      </header>
      <div className={`fixed inset-0 z-[95] bg-[#211A1E] text-[#FBF3E4] transition-all duration-500 md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {[...links, ["WhatsApp", WA_GENERAL]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="font-serif-d border-b border-white/15 py-4 text-4xl">{l}</a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-hand pt-4 text-2xl text-[#F4A9C0]">instagram → @studio_younique_boutique</a>
        </div>
      </div>
    </>
  );
}
