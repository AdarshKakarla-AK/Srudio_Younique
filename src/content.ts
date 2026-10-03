export const PHONE_DISPLAY = "77999 92312";
export const PHONE_INTL = "+917799992312";
export const WHATSAPP_NUMBER = "917799992312";
export const HOURS = "11:00 AM — 8:00 PM";
export const INSTAGRAM_URL = "https://www.instagram.com/studio_younique_boutique";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Studio+YouNique+boutique";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_GENERAL = waLink(
  "Hi Studio YouNique, I'd love to know more about your collection / custom designs."
);
export const WA_CUSTOM = waLink(
  "Hi Studio YouNique! I have an idea for a custom outfit — can we design it together?"
);

export type WardrobeItem = {
  id: string;
  label: string;
  name: string;
  note: string;
  img: string;
  fb: string;
  accent: string;
  soft: string;
  tag: string;
  pos?: string;
};

export type Pic = { src: string; fb: string };

const U = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const L = (f: string) => `/products/${f}`;

/* Real Studio YouNique pieces live in public/products/ (exact filenames below).
   Until each file lands, its fb placeholder shows automatically. */
export const IMAGES: Record<string, Pic> = {
  heroMain: { src: L("lehenga-rani-pink.jpg"), fb: U("photo-1610030469983-98e550d6193c", 1000) },
  heroSide: { src: L("dress-sunshine-floral.jpg"), fb: U("photo-1595777457583-95e059d581b8", 700) },
  heroSmall: { src: L("dress-indigo-maxi.svg"), fb: U("photo-1515886657613-9f3515b0c78f", 600) },
  worldA: { src: L("dress-heritage-print.jpg"), fb: U("photo-1515886657613-9f3515b0c78f", 800) },
  worldB: { src: L("edit-fresh-styles.jpg"), fb: U("photo-1524504388940-b1c1722653e1", 700) },
  worldC: { src: L("kids-lehenga-blossom.jpg"), fb: U("photo-1496747611176-843222e1e57c", 700) },
  story: { src: L("memories-family.jpg"), fb: U("photo-1583939003579-730e3918a45a", 1000) },
  visit: { src: L("edit-new-arrivals.jpg"), fb: U("photo-1483985988355-763728e1935b", 900) },
};

export const WARDROBE: WardrobeItem[] = [
  { id: "dresses", label: "Dresses", name: "Sunshine Floral Dress", note: "Scalloped neckline, pleated sunshine-yellow floral — soft, breathable, made for you.", img: L("dress-sunshine-floral.jpg"), fb: U("photo-1595777457583-95e059d581b8"), accent: "#B8860B", soft: "#FBE9A8", tag: "NEW ARRIVAL" },
  { id: "kurtis", label: "Kurtis", name: "Indigo Motif Maxi Dress", note: "Classic round neckline, chic 3/4th sleeves and a flowy ruffle hem.", img: L("dress-indigo-maxi.svg"), fb: U("photo-1515886657613-9f3515b0c78f"), accent: "#1D4FA3", soft: "#CFE0F5", tag: "NEW ARRIVAL" },
  { id: "anarkalis", label: "Anarkalis", name: "Scarlet Noor Anarkali", note: "Traditional charm meets modern elegance — intricate sleeve & border detailing.", img: L("dress-scarlet-noir.jpg"), fb: U("photo-1610030469983-98e550d6193c"), accent: "#8E1B2E", soft: "#F3D3D8", tag: "FESTIVE" },
  { id: "lehengas", label: "Lehengas", name: "Rani Pink Celebration Lehenga", note: "Bold. Beautiful. You. — intricate gold detailing, made to dazzle.", img: L("lehenga-rani-pink.jpg"), fb: U("photo-1583939003579-730e3918a45a"), accent: "#C2255C", soft: "#FBD3E1", tag: "OCCASION" },
  { id: "sarees", label: "Sarees", name: "Crimson Heirloom Saree", note: "Rich zari weaving & delicate detailing for that royal touch — styled for memories.", img: L("memories-family.jpg"), fb: U("photo-1496747611176-843222e1e57c"), accent: "#7A1E3C", soft: "#EFD5DA", tag: "STYLED MEMORIES", pos: "68% 30%" },
  { id: "indowestern", label: "Indo-Western", name: "Heritage Print Dress", note: "Tradition in every thread — elegant traditional print, comfortable fit.", img: L("dress-heritage-print.jpg"), fb: U("photo-1515886657613-9f3515b0c78f"), accent: "#7C2D2D", soft: "#EFDFC8", tag: "NEW ARRIVAL" },
  { id: "occasion", label: "Occasion", name: "Fresh Styles Trio", note: "Flowy. Feminine. Fabulous. — find the look that's uniquely you.", img: L("edit-fresh-styles.jpg"), fb: U("photo-1524504388940-b1c1722653e1"), accent: "#E64980", soft: "#F9DCE2", tag: "PICK YOUR FAVE", pos: "50% 35%" },
  { id: "kids", label: "Kids", name: "Little Traditions Set", note: "Soft & breathable with a perfect fit — comfort, style & tradition in every stitch.", img: L("kids-kurta-rose.jpg"), fb: U("photo-1594633312681-425c7b97ccd1"), accent: "#D61C5D", soft: "#FAD9E6", tag: "LITTLE ONES" },
  { id: "custom", label: "Custom", name: "Your Sketch, Our Stitch", note: "Bring any idea — kids to festive to bridal, we design it around you.", img: L("edit-new-arrivals.jpg"), fb: U("photo-1539109136881-3be0616acf4b"), accent: "#211A1E", soft: "#EFE6D2", tag: "MADE-TO-YOU", pos: "50% 30%" },
];

export const LOOKS = [
  { n: "01", title: "Rani Reverie", img: L("lehenga-rani-pink.jpg"), fb: U("photo-1610030469983-98e550d6193c", 900), sub: "lehenga · celebration", w: 3 },
  { n: "02", title: "Sunshine Muse", img: L("dress-sunshine-floral.jpg"), fb: U("photo-1515886657613-9f3515b0c78f", 900), sub: "floral · day event", w: 0 },
  { n: "03", title: "Scarlet Evening", img: L("dress-scarlet-noir.jpg"), fb: U("photo-1610030469983-98e550d6193c", 900), sub: "anarkali · festive", w: 2 },
  { n: "04", title: "Heritage Day", img: L("dress-heritage-print.jpg"), fb: U("photo-1524504388940-b1c1722653e1", 900), sub: "print · family day", w: 5 },
  { n: "05", title: "Indigo Hours", img: L("dress-indigo-maxi.svg"), fb: U("photo-1515886657613-9f3515b0c78f", 900), sub: "maxi · easy glam", w: 1 },
];

export const MEMORIES = [
  { img: L("memories-family.jpg"), fb: U("photo-1583939003579-730e3918a45a", 700), note: "styled for memories ♥", rot: "-2deg" },
  { img: L("kids-kurta-rose.jpg"), fb: U("photo-1594633312681-425c7b97ccd1", 700), note: "little traditions, big smiles!", rot: "2.5deg" },
  { img: L("kids-lehenga-blossom.jpg"), fb: U("photo-1496747611176-843222e1e57c", 700), note: "made to make her shine ♥", rot: "-2deg" },
  { img: L("edit-fresh-styles.jpg"), fb: U("photo-1524504388940-b1c1722653e1", 700), note: "twirl test: passed ✓", rot: "2deg" },
  { img: L("edit-new-arrivals.jpg"), fb: U("photo-1483985988355-763728e1935b", 700), note: "new favourites just dropped!", rot: "-2.5deg" },
  { img: L("dress-sunshine-floral.jpg"), fb: U("photo-1595777457583-95e059d581b8", 700), note: "sunshine, stitched ☀", rot: "2deg" },
];
