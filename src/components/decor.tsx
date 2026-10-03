import { useState, type CSSProperties, type Ref } from "react";

export function Img({ src, fallback, alt, className, eager, style, imgRef }: {
  src: string; fallback?: string; alt: string; className?: string; eager?: boolean; style?: CSSProperties; imgRef?: Ref<HTMLImageElement>;
}) {
  const [err, setErr] = useState(false);
  return (
    <img
      ref={imgRef}
      src={err && fallback ? fallback : src}
      onError={() => setErr(true)}
      alt={alt}
      className={className}
      style={style}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}

export function Arrow({ className = "", flip = false, color = "#211A1E" }: { className?: string; flip?: boolean; color?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" className={className} style={flip ? { transform: "scaleX(-1)" } : undefined} aria-hidden="true">
      <path d="M4 22 C 34 20, 66 18, 96 12 M88 5 L98 11 L90 21" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 30 C 30 30, 60 28, 84 24" stroke={color} strokeWidth="1.4" strokeDasharray="3 5" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

export function Flower({ className = "", c = "#E64980" }: { className?: string; c?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="30" cy="18" rx="9" ry="14" fill={c} opacity=".9" transform={`rotate(${r} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="8" fill="#FBD44E" stroke="#211A1E" strokeWidth="1.6" />
      <circle cx="30" cy="30" r="3" fill="#211A1E" />
    </svg>
  );
}

export function Heart({ className = "", c = "#C2255C" }: { className?: string; c?: string }) {
  return (
    <svg viewBox="0 0 32 30" className={className} aria-hidden="true">
      <path d="M16 27 C 6 19, 1 14, 1 8.5 C 1 4.5, 4.5 1.5, 8.5 1.5 C 12 1.5, 14.8 3.8, 16 6 C 17.2 3.8, 20 1.5, 23.5 1.5 C 27.5 1.5, 31 4.5, 31 8.5 C 31 14, 26 19, 16 27 Z" fill={c} stroke="#211A1E" strokeWidth="1.4" />
    </svg>
  );
}

export function Star({ className = "", c = "#FBD44E" }: { className?: string; c?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 2 L23.5 14 L36 14 L26 21.5 L29.5 34 L20 26.5 L10.5 34 L14 21.5 L4 14 L16.5 14 Z" fill={c} stroke="#211A1E" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className = "", color = "#C2255C" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 24" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M3 14 C 30 4, 55 22, 82 12 S 135 4, 160 14 S 188 18, 197 10" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function Dots({ className = "" }: { className?: string }) {
  return <div className={`dotgrid ${className}`} aria-hidden="true" />;
}

export function StitchCircle({ className = "", label = "" }: { className?: string; label?: string }) {
  return (
    <div className={`relative grid place-items-center rounded-full border-[1.5px] border-dashed border-[#211A1E]/60 ${className}`} aria-hidden="true">
      {label ? <span className="font-hand text-xl leading-none px-4 text-center">{label}</span> : null}
    </div>
  );
}
