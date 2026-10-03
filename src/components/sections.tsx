import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOURS, IMAGES, INSTAGRAM_URL, LOOKS, MAPS_URL, MEMORIES, PHONE_DISPLAY, WA_CUSTOM, WA_GENERAL, WARDROBE, waLink } from "../content";
import { Arrow, Dots, Flower, Heart, Img, Squiggle, Star } from "./decor";

gsap.registerPlugin(ScrollTrigger);
const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useAnims() {
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-rv]").forEach((el) => {
        gsap.fromTo(el, { y: 44, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-para]").forEach((el) => {
        gsap.to(el, {
          yPercent: parseFloat(el.dataset.para || "-10"), ease: "none",
          scrollTrigger: { trigger: el.closest("section") || el, scrub: 1, start: "top bottom", end: "bottom top" },
        });
      });
      const track = document.getElementById("look-track");
      const pin = document.getElementById("look-pin");
      if (track && pin && window.innerWidth > 768) {
        const getX = () => -(track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: getX, ease: "none",
          scrollTrigger: { trigger: pin, scrub: 1, pin: true, end: () => "+=" + (track.scrollWidth - window.innerWidth), invalidateOnRefresh: true },
        });
      }
    });
    return () => ctx.revert();
  }, []);
}

/* ============ 01 HERO ============ */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <Dots className="absolute left-[6%] top-32 h-24 w-24 opacity-20" />
      <div className="mesh-pink absolute -right-10 top-24 h-64 w-64 rounded-full opacity-60" />
      <Flower className="floaty absolute right-[8%] top-[16%] hidden h-14 w-14 md:block" c="#F4A9C0" />
      <Star className="floaty absolute left-[42%] top-24 h-8 w-8" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-12 md:px-8">
        <div className="relative md:col-span-5 md:pt-10">
          <p data-rv className="wedge-tag inline-block bg-[#211A1E] px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-[#FBF3E4]">BOUTIQUE · CUSTOM · OCCASION</p>
          <h1 data-rv className="font-serif-d mt-5 text-[13.5vw] leading-[0.92] tracking-tight md:text-[5.2rem]">
            A little<br /><em className="font-light italic">dream,</em><br />stitched<br />
            <span className="u-sketch">with love.<svg viewBox="0 0 200 24" preserveAspectRatio="none"><path d="M3 14 C 30 4, 55 22, 82 12 S 135 4, 160 14 S 188 18, 197 10" fill="none" stroke="#C2255C" strokeWidth="5" strokeLinecap="round" /></svg></span>
          </h1>
          <p data-rv className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#4A3A40]">Where every thread tells <strong>your story</strong> — dresses, kurtis, anarkalis, lehengas, sarees & made-to-you pieces.</p>
          <div data-rv className="mt-7 flex flex-wrap gap-3">
            <a href="#wardrobe" data-cursor="EXPLORE →" data-magnet className="rounded-full bg-[#C2255C] px-7 py-3.5 text-[13px] font-semibold tracking-[0.18em] text-white shadow-lg transition-transform hover:scale-105">EXPLORE THE COLLECTION</a>
            <a href="#custom" data-cursor="YOU ♥" data-magnet className="rounded-full border-[1.5px] border-[#211A1E] px-7 py-3.5 text-[13px] font-semibold tracking-[0.18em] transition-colors hover:bg-[#211A1E] hover:text-[#FBF3E4]">CUSTOMIZE YOUR LOOK</a>
          </div>
          <div data-rv className="mt-6 flex items-center gap-3">
            <Arrow className="h-8 w-24" />
            <p className="font-hand text-2xl text-[#C2255C]">psst — everything can be customised!</p>
          </div>
        </div>
        <div className="relative md:col-span-7">
          <div className="grid grid-cols-12 items-end gap-3 md:gap-4">
            <div data-para="-8" className="col-span-7">
              <div className="img-frame img-zoom arch ring-frame aspect-[3/4] shadow-2xl" data-cursor="VIEW">
                <Img src={IMAGES.heroMain.src} fallback={IMAGES.heroMain.fb} alt="Rani pink celebration lehenga by Studio YouNique" eager />
                <span className="absolute left-3 top-6 -rotate-90 text-[10px] tracking-[0.4em] text-white/90">YOUNIQUE · 01</span>
              </div>
              <p className="font-hand mt-2 text-xl">the festive muse ✿</p>
            </div>
            <div className="col-span-5 space-y-3 pb-10">
              <div data-para="10" className="img-frame img-zoom blob-a ring-frame aspect-square shadow-xl" data-cursor="VIEW">
                <Img src={IMAGES.heroSide.src} fallback={IMAGES.heroSide.fb} alt="Sunshine yellow floral dress" eager />
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-[#BFDDF0] p-3 ring-frame">
                <Img src={IMAGES.heroSmall.src} fallback={IMAGES.heroSmall.fb} alt="Indigo motif maxi dress" className="h-14 w-14 rounded-full object-cover" />
                <div><p className="text-[11px] tracking-[0.25em] font-semibold">NEW DROP</p><p className="font-serif-d text-lg leading-none">Pastel Reverie</p></div>
                <Heart className="ml-auto h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="sticker absolute -left-4 top-6 rotate-[-8deg] rounded-full bg-[#FBD44E] px-4 py-2 text-[12px] font-bold tracking-widest ring-frame">CUSTOM ♥ MADE</div>
          <div className="sticker absolute -right-2 bottom-16 rotate-[6deg] rounded-full bg-white px-4 py-2 text-[12px] font-bold tracking-widest ring-frame">EST. WITH LOVE ✿</div>
        </div>
      </div>
      <div className="mt-8 border-y-[1.5px] border-[#211A1E] bg-[#211A1E] py-2.5 text-[#FBF3E4] overflow-hidden">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[12px] tracking-[0.3em]">
          {[0, 1].map(k => <span key={k}>CUSTOM CLOTHING ✿ DRESSES ✿ KURTIS ✿ ANARKALIS ✿ LEHENGAS ✿ SAREES ✿ INDO-WESTERN ✿ OCCASION ✿ BRIDAL ✿&nbsp;</span>)}
        </div>
      </div>
      <a href="#world" aria-label="Scroll to discover more" className="scroll-cue absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[#211A1E] md:flex">
        <span className="text-[10px] font-semibold tracking-[0.35em]">SCROLL</span>
        <svg viewBox="0 0 24 36" className="h-9 w-6" aria-hidden="true"><rect x="1.5" y="1.5" width="21" height="33" rx="10.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3" fill="#C2255C" /></svg>
      </a>
    </section>
  );
}

/* ============ 02 WORLD ============ */
export function World() {
  return (
    <section id="world" className="relative overflow-hidden bg-[#FFFDF7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p data-rv className="font-hand text-3xl text-[#0E7C86]">welcome to our world —</p>
        <h2 data-rv className="font-serif-d max-w-5xl text-[11vw] leading-[0.95] md:text-7xl">Every thread <em className="text-[#C2255C]">tells</em> your story.</h2>
        <Squiggle className="mt-3 h-5 w-64" />
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <div data-para="-6" className="md:col-span-4 md:rotate-[-2deg]">
            <div className="img-frame img-zoom rounded-2xl ring-frame aspect-[3/4]" data-cursor="VIEW"><Img src={IMAGES.worldA.src} fallback={IMAGES.worldA.fb} alt="Heritage print dress by Studio YouNique" /></div>
            <p className="font-hand mt-2 text-2xl">for the bold & blooming →</p>
          </div>
          <div data-para="8" className="md:col-span-4 md:mt-14 md:rotate-[1.5deg]">
            <div className="img-frame img-zoom blob-b ring-frame aspect-[4/5]" data-cursor="VIEW"><Img src={IMAGES.worldB.src} fallback={IMAGES.worldB.fb} alt="Fresh styles collection collage" /></div>
            <div className="mt-3 rounded-2xl bg-[#F9DCE2] p-5 ring-frame"><p className="font-serif-d text-2xl leading-tight">“A little dream, stitched with love.”</p><p className="mt-2 text-sm text-[#4A3A40]">Designed for moments that deserve to feel uniquely yours.</p></div>
          </div>
          <div data-para="-10" className="md:col-span-4 md:rotate-[2deg]">
            <div className="img-frame img-zoom arch ring-frame aspect-[3/4]" data-cursor="VIEW"><Img src={IMAGES.worldC.src} fallback={IMAGES.worldC.fb} alt="Kids festive lehenga in pink and gold" /></div>
            <div className="mt-3 flex items-center gap-2"><Dots className="h-10 w-24 opacity-30" /><p className="font-hand text-2xl">hand-finished, heart-first ♥</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 03 WARDROBE ============ */
export function Wardrobe({ onOpen }: { onOpen: (i: number) => void }) {
  const [active, setActive] = useState(0);
  const item = WARDROBE[active];
  const imgRef = useRef<HTMLImageElement>(null);
  const pick = (i: number) => {
    setActive(i);
    if (!reduced() && imgRef.current) gsap.fromTo(imgRef.current, { scale: 1.12, opacity: 0.3, clipPath: "inset(8% 6% 8% 6%)" }, { scale: 1.02, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power3.out" });
  };
  return (
    <section id="wardrobe" className="relative overflow-hidden py-20 md:py-28 transition-colors duration-700" style={{ background: item.soft }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p data-rv className="font-hand text-3xl" style={{ color: item.accent }}>pick your mood —</p>
            <h2 data-rv className="font-serif-d text-5xl md:text-7xl leading-[0.95]">The Interactive<br />Wardrobe</h2></div>
          <p data-rv className="max-w-xs text-sm text-[#4A3A40]">Tap a category — the muse, the colours & the details change around her. Like a fashion installation.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div data-rv className="flex flex-wrap content-start gap-2.5 lg:col-span-4">
            {WARDROBE.map((w, i) => (
              <button key={w.id} onClick={() => pick(i)} data-cursor="WEAR"
                className={`min-h-[44px] rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-[0.16em] transition-all border-[1.5px] ${i === active ? "text-white scale-105 shadow-lg" : "bg-white/70 border-[#211A1E] hover:-translate-y-0.5"}`}
                style={i === active ? { background: w.accent, borderColor: w.accent } : undefined}
                aria-pressed={i === active}>{w.label.toUpperCase()}</button>
            ))}
            <div className="mt-4 w-full rounded-2xl bg-white/80 p-5 ring-frame">
              <p className="text-[11px] tracking-[0.3em] font-semibold" style={{ color: item.accent }}>{item.tag}</p>
              <p className="font-serif-d mt-1 text-3xl leading-tight">{item.name}</p>
              <p className="mt-2 text-sm text-[#4A3A40]">{item.note}</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => onOpen(active)} data-cursor="DISCOVER" className="flex-1 rounded-full bg-[#211A1E] py-3 text-[12px] font-semibold tracking-[0.2em] text-white hover:bg-[#C2255C]">VIEW PIECE</button>
                <a href={waLink(`Hi Studio YouNique! I love the ${item.name} (${item.label}) — is it available / customisable?`)} target="_blank" rel="noreferrer" data-cursor="CHAT" className="flex-1 rounded-full border-[1.5px] border-[#211A1E] py-3 text-center text-[12px] font-semibold tracking-[0.2em] hover:bg-[#211A1E] hover:text-white">ENQUIRE</a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="img-frame ring-frame aspect-[4/3] md:aspect-[16/10] rounded-[28px] shadow-2xl" data-cursor="DISCOVER" onClick={() => onOpen(active)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onOpen(active)} aria-label={`View ${item.name}`}>
                <Img imgRef={imgRef} src={item.img} fallback={item.fb} alt={item.name} style={item.pos ? { objectPosition: item.pos } : undefined} />
                <span className="wedge-tag absolute left-0 top-6 px-5 py-2 text-[11px] font-bold tracking-[0.25em] text-white" style={{ background: item.accent }}>{item.tag}</span>
                <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold tracking-[0.2em]">DISCOVER +</span>
              </div>
              <Flower className="floaty absolute -top-6 -right-4 h-16 w-16" c={item.accent} />
              <div className="sticker absolute -bottom-5 left-6 rotate-[-4deg] rounded-2xl bg-[#211A1E] px-5 py-3 text-white ring-frame"><span className="font-hand text-xl">{item.label} — made to be yours ♥</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 04 CUSTOM ============ */
const STEPS = [
  { t: "IDEA", d: "A screenshot, a memory, a scribble — bring it.", w: () => WARDROBE[6] },
  { t: "DESIGN", d: "We sketch, drape & pick fabrics with you.", w: () => WARDROBE[5] },
  { t: "CRAFT", d: "Cut, stitched & finished by hand.", w: () => WARDROBE[2] },
  { t: "YOU", d: "Fitted to your body, made for your moment.", w: () => WARDROBE[3] },
];
export function Custom() {
  return (
    <section id="custom" className="relative overflow-hidden bg-[#211A1E] py-20 md:py-28 text-[#FBF3E4]">
      <div className="dotgrid-light absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p data-rv className="font-hand text-3xl text-[#FBD44E]">this is the heart of it —</p>
        <h2 data-rv className="font-serif-d text-[13vw] md:text-8xl leading-[0.9]">MADE TO<br />BE <em className="text-[#F4A9C0]">YOURS.</em></h2>
        <p data-rv className="mt-4 max-w-xl text-[15px] text-white/80">From an idea in your mind to something you can wear — we create pieces that feel uniquely yours.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => {
            const pic = s.w();
            return (
              <div key={s.t} data-rv className="relative">
                <div className="img-frame img-zoom aspect-[3/4] rounded-2xl border-[1.5px] border-white/25" data-cursor="YOU ♥"><Img src={pic.img} fallback={pic.fb} alt={`${s.t} — ${pic.name}`} />
                  <span className="absolute left-3 top-3 rounded-full bg-[#FBD44E] px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-[#211A1E]">0{i + 1}</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <p className="font-serif-d text-2xl">{s.t}</p>
                  {i < 3 && <Arrow className="h-6 w-16 opacity-80" color="#FBD44E" />}
                </div>
                <p className="text-sm text-white/70">{s.d}</p>
              </div>
            );
          })}
        </div>
        <div data-rv className="mt-10 flex flex-wrap gap-3">
          <a href={WA_CUSTOM} target="_blank" rel="noreferrer" data-cursor="START →" data-magnet className="rounded-full bg-[#C2255C] px-8 py-4 text-[13px] font-semibold tracking-[0.18em] text-white hover:scale-105 transition-transform">START YOUR CUSTOM PIECE</a>
          <p className="font-hand self-center text-2xl text-[#F4A9C0]">← threads connecting ideas to clothing…</p>
        </div>
      </div>
    </section>
  );
}

/* ============ 05 LOOKBOOK ============ */
export function Lookbook({ onLook }: { onLook: (i: number) => void }) {
  return (
    <section className="relative bg-[#FBD44E]/25">
      <div id="look-pin" className="relative overflow-hidden">
        <div className="px-5 md:px-8 pt-16 pb-4 max-w-7xl mx-auto flex items-end justify-between">
          <h2 className="font-serif-d text-5xl md:text-7xl leading-[0.95]">The<br />Lookbook <span className="font-hand text-3xl md:text-4xl text-[#C2255C]">— scroll →</span></h2>
          <Arrow className="hidden md:block h-10 w-32" />
        </div>
        <div id="look-track" className="flex gap-5 px-5 md:px-8 pb-16 pt-6 w-max items-stretch overflow-x-auto md:overflow-visible no-scrollbar snap-x">
          {LOOKS.map((l) => (
            <article key={l.n} onClick={() => onLook(l.w)} data-cursor="VIEW LOOK"
              className="group relative w-[78vw] md:w-[38vw] shrink-0 snap-center cursor-pointer" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onLook(l.w)} aria-label={`View look ${l.n}`}>
              <div className="img-frame img-zoom ring-frame aspect-[3/4] rounded-[24px]">
                <Img src={l.img} fallback={l.fb} alt={`${l.title} fashion look`} />
                <span className="absolute left-4 top-4 rounded-full bg-[#211A1E] px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] text-white">LOOK {l.n}</span>
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-[#FBF3E4]/95 px-5 py-3 opacity-0 translate-y-3 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="font-serif-d text-xl">{l.title}</span><span className="text-[12px] font-bold tracking-widest">VIEW →</span>
                </span>
              </div>
              <p className="mt-2 flex justify-between text-sm"><span className="font-serif-d text-xl">{l.title}</span><span className="text-[#4A3A40]">{l.sub}</span></p>
            </article>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-cursor="FOLLOW"
            className="grid w-[70vw] md:w-[26vw] shrink-0 place-items-center rounded-[24px] bg-[#211A1E] text-center text-[#FBF3E4] ring-frame aspect-[3/4]">
            <div><p className="font-hand text-3xl text-[#F4A9C0]">see more on</p><p className="font-serif-d text-4xl">Instagram →</p><p className="mt-2 text-xs tracking-[0.3em]">@STUDIO_YOUNIQUE_BOUTIQUE</p></div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ 06 MEMORIES ============ */
export function Memories() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
        <p data-rv className="font-hand text-3xl text-[#C2255C]">worn with love —</p>
        <h2 data-rv className="font-serif-d text-5xl md:text-7xl">Styled Memories</h2>
        <p data-rv className="font-serif-d mt-2 text-xl italic text-[#4A3A40]">“Some outfits become memories.”</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 text-left">
          {MEMORIES.map((m, i) => (
            <figure key={i} data-rv data-para={i % 2 ? "6" : "-6"} className="rounded-2xl bg-white p-2.5 pb-4 shadow-lg ring-frame" style={{ transform: `rotate(${m.rot})` }}>
              <div className="img-frame img-zoom aspect-[3/4] rounded-xl" data-cursor="♥"><Img src={m.img} fallback={m.fb} alt="Studio YouNique styled memory" /></div>
              <figcaption className="font-hand px-1 pt-2 text-xl leading-tight">{m.note}</figcaption>
            </figure>
          ))}
        </div>
        <p data-rv className="font-hand mt-8 text-2xl">your photo could live here → tag us @studio_younique_boutique ♥</p>
      </div>
    </section>
  );
}

/* ============ 07 STORY ============ */
export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#F9DCE2] py-20 md:py-28">
      <Heart className="floaty absolute left-[6%] top-16 h-10 w-10" />
      <Flower className="floaty absolute right-[8%] top-24 h-14 w-14" c="#fff" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <div className="relative" data-rv>
          <div className="img-frame img-zoom arch ring-frame aspect-[3/4] shadow-2xl" data-cursor="LOVE"><Img src={IMAGES.story.src} fallback={IMAGES.story.fb} alt="Family in custom Studio YouNique occasion wear" /></div>
          <div className="sticker absolute -right-3 top-8 rotate-[7deg] rounded-full bg-white px-4 py-2 text-[12px] font-bold tracking-widest ring-frame">FAMILY · FESTIVE · YOU</div>
        </div>
        <div>
          <p data-rv className="font-hand text-3xl text-[#C2255C]">our little story —</p>
          <h2 data-rv className="font-serif-d text-5xl md:text-6xl leading-[1]">A little dream,<br />stitched with love.</h2>
          <p data-rv className="font-serif-d mt-5 text-2xl italic leading-snug">Welcome to Studio YouNique — where every thread tells your story.</p>
          <p data-rv className="mt-4 max-w-md text-[15px] text-[#4A3A40]">A warm little studio for custom clothing & occasion wear — feminine, handcrafted, and made around you. No mass-market racks. Just pieces with your name woven in.</p>
          <div data-rv className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold tracking-[0.2em]">
            {["INDIVIDUALITY", "CRAFT", "WARMTH", "YOU"].map(t => <span key={t} className="rounded-full border-[1.5px] border-[#211A1E] bg-white px-4 py-2">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 08 VISIT ============ */
export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-[#CFE6F5] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <div className="relative mx-auto w-full max-w-md text-center" data-rv>
          <div className="blob-a grid aspect-square place-items-center bg-[#FBF3E4] p-10 shadow-2xl ring-frame">
            <div>
              <p className="font-hand text-3xl text-[#0E7C86]">come say hi —</p>
              <p className="font-serif-d text-6xl leading-[0.9]">VISIT<br />US</p>
              <p className="mt-3 text-sm font-semibold tracking-[0.2em]">{HOURS}</p>
              <p className="font-serif-d mt-1 text-2xl">{PHONE_DISPLAY}</p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" data-cursor="GO →" data-magnet className="mt-4 inline-block rounded-full bg-[#211A1E] px-7 py-3 text-[12px] font-bold tracking-[0.2em] text-white hover:bg-[#C2255C]">GET DIRECTIONS</a>
            </div>
          </div>
          <Arrow className="absolute -right-6 top-1/2 hidden h-10 w-28 md:block" color="#C2255C" />
        </div>
        <div>
          <h2 data-rv className="font-serif-d text-5xl md:text-6xl leading-[0.95]">The Studio<br />awaits <em className="text-[#C2255C]">you.</em></h2>
          <p data-rv className="mt-4 max-w-md text-[15px] text-[#33414f]">Try, twirl, tailor — walk in with an idea, walk out with your outfit. Open every day, {HOURS}.</p>
          <div data-rv className="mt-6 grid gap-3">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" data-cursor="CHAT" className="rounded-2xl bg-[#211A1E] p-5 text-white flex items-center justify-between hover:bg-[#C2255C] transition-colors"><span><span className="block text-[11px] tracking-[0.3em] opacity-70">FASTEST REPLY</span><span className="font-serif-d text-2xl">WhatsApp us →</span></span><span className="font-hand text-2xl">say hi!</span></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-cursor="FOLLOW" className="rounded-2xl bg-white p-5 ring-frame flex items-center justify-between hover:-translate-y-1 transition-transform"><span><span className="block text-[11px] tracking-[0.3em] text-[#C2255C] font-bold">DAILY DROPS</span><span className="font-serif-d text-2xl">Instagram →</span></span><Star className="h-9 w-9" /></a>
            <div className="img-frame img-zoom h-44 rounded-2xl ring-frame" data-cursor="VISIT"><Img src={IMAGES.visit.src} fallback={IMAGES.visit.fb} alt="Studio YouNique new arrivals banner" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 09 FINALE ============ */
export function Finale() {
  return (
    <footer className="relative overflow-hidden bg-[#211A1E] pt-20 text-[#FBF3E4]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <p data-rv className="font-hand text-3xl text-[#F4A9C0]">the end of this little magazine —</p>
        <h2 data-rv className="font-serif-d text-[12vw] md:text-8xl leading-[0.92]">YOUR STORY.<br />YOUR STYLE.<br /><em className="text-[#FBD44E]">YOUR YOUNIQUE.</em></h2>
        <div data-rv className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#wardrobe" data-cursor="GO" className="rounded-full bg-[#FBF3E4] px-7 py-3.5 text-[12px] font-bold tracking-[0.2em] text-[#211A1E] hover:bg-[#FBD44E]">EXPLORE COLLECTION</a>
          <a href={WA_CUSTOM} target="_blank" rel="noreferrer" data-cursor="YOU ♥" data-magnet className="rounded-full bg-[#C2255C] px-7 py-3.5 text-[12px] font-bold tracking-[0.2em] text-white hover:scale-105 transition-transform">CUSTOMIZE YOUR LOOK</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-cursor="FOLLOW" className="rounded-full border-[1.5px] border-white/40 px-7 py-3.5 text-[12px] font-bold tracking-[0.2em] hover:border-[#FBD44E] hover:text-[#FBD44E]">INSTAGRAM</a>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 py-8 text-[12px] tracking-[0.2em] text-white/60 md:flex-row">
          <p><span className="font-hand text-xl normal-case tracking-normal text-[#F4A9C0]">Studio YouNique</span> · {HOURS} · {PHONE_DISPLAY}</p>
          <p>© {new Date().getFullYear()} STUDIO YOUNIQUE · STITCHED WITH LOVE ✿</p>
        </div>
      </div>
    </footer>
  );
}

/* ============ MODAL ============ */
export function PieceModal({ index, onClose, onNav }: { index: number | null; onClose: () => void; onNav: (d: 1 | -1) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const f = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") onNav(1); if (e.key === "ArrowLeft") onNav(-1); };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [onClose, onNav]);
  useEffect(() => { if (index !== null) closeRef.current?.focus(); }, [index]);
  if (index === null) return null;
  const item = WARDROBE[index];
  return (
    <div className="modal-bg fixed inset-0 z-[120] grid place-items-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.name}>
      <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[24px] bg-[#FBF3E4] ring-frame md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
        <div className="img-frame min-h-[320px] md:min-h-[540px]"><Img src={item.img} fallback={item.fb} alt={item.name} style={item.pos ? { objectPosition: item.pos } : undefined} /></div>
        <div className="relative p-7 md:p-9">
          <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-[#211A1E] text-xl hover:bg-[#211A1E] hover:text-white">✕</button>
          <p className="text-[11px] font-bold tracking-[0.3em]" style={{ color: item.accent }}>{item.tag} · {item.label.toUpperCase()}</p>
          <h3 className="font-serif-d mt-2 text-4xl leading-tight">{item.name}</h3>
          <p className="mt-3 text-[15px] text-[#4A3A40]">{item.note} Sizes & fabrics customised to you — share your idea on WhatsApp and we'll sketch it together.</p>
          <div className="mt-5 rounded-2xl p-4 text-sm" style={{ background: item.soft }}><strong>Customisation:</strong> size, length, sleeves, neckline, fabric & colour — all made-to-you.</div>
          <div className="mt-6 flex gap-3">
            <a href={waLink(`Hi Studio YouNique! I'm interested in "${item.name}" (${item.label}). Please share details.`)} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-[#1FA855] py-3.5 text-center text-[12px] font-bold tracking-[0.18em] text-white hover:brightness-110">ENQUIRE ON WHATSAPP</a>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={() => onNav(-1)} className="min-h-[44px] px-4 font-bold" aria-label="Previous">← PREV</button>
            <span className="text-xs tracking-[0.3em]">{index + 1} / {WARDROBE.length}</span>
            <button onClick={() => onNav(1)} className="min-h-[44px] px-4 font-bold" aria-label="Next">NEXT →</button>
          </div>
          <Flower className="absolute bottom-5 right-6 h-10 w-10 opacity-70" c={item.accent} />
        </div>
      </div>
    </div>
  );
}
