import { useEffect, useState } from "react";
import { Cursor, Loader, Magnetics, Nav } from "./components/chrome";
import { Custom, Finale, Hero, Lookbook, Memories, PieceModal, Story, Visit, Wardrobe, World, useAnims } from "./components/sections";
import { WARDROBE } from "./content";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [piece, setPiece] = useState<number | null>(null);
  useAnims();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    document.body.style.overflow = piece === null ? "" : "hidden";
  }, [piece]);

  const openLook = (i: number) => setPiece(i);

  return (
    <div className="min-h-screen bg-[#FBF3E4] text-[#211A1E]">
      <a href="#wardrobe" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-black focus:px-5 focus:py-3 focus:text-white">Skip to collection</a>
      <Loader done={loaded} />
      <Cursor />
      <Magnetics />
      <Nav />
      <main>
        <Hero />
        <World />
        <Wardrobe onOpen={setPiece} />
        <Custom />
        <Lookbook onLook={openLook} />
        <Memories />
        <Story />
        <Visit />
        <Finale />
      </main>
      <PieceModal
        index={piece}
        onClose={() => setPiece(null)}
        onNav={(d) => setPiece((p) => (p === null ? 0 : (p + d + WARDROBE.length) % WARDROBE.length))}
      />
    </div>
  );
}
