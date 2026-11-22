import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { CITY, type ServiceId } from "@/config"

export type Lang = "en" | "id"

type ServiceCopy = { label: string; title: string; pitch: string }
type Step = { name: string; note: string }

type Dict = {
  nav: { home: string; services: string; process: string; work: string; faq: string; contact: string }
  langLabel: string
  book: string
  bookConsult: string
  seeServices: string
  hero: { l1: string; l2: string; l3: string; sub: string }
  example: string
  prevService: string
  nextService: string
  servicesTitle: string
  seeAll: string
  services: Record<ServiceId, ServiceCopy>
  promo: { title: string; body: string; aria: string }
  playing: {
    title: string
    note: string
    project: string
    stage: string
    of: string
    prev: string
    next: string
    play: string
    pause: string
  }
  stages: Step[]
  works: { title: string; prev: string; next: string; items: Record<ServiceId, string> }
  mobileNote: string
  process: {
    title: string
    intro: string
    youGet: string
    steps: (Step & { get: string })[]
  }
  dash: {
    title: string
    body: string
    points: string[]
    badge: string
    revenue: string
    revenueSeries: string
    top: string
    unit: string
    months: string[]
  }
  footer: { tagline: string; reach: string; rights: string; emailLabel: string }
  work: {
    title: string
    intro: string
    tiles: Record<"website" | "produk" | "grafis" | "data" | "feed" | "logo", { title: string; tag: string }>
    ctaTitle: string
    ctaBody: string
  }
  faq: {
    title: string
    more: string
    items: { q: string; a: string }[]
  }
  booking: {
    title: string
    body: string
    bodyNoForm: string
    pick: string
    ask: string
    askNoForm: string
    askItems: string[]
    open: string
    opensIn: string
    emailBook: string
    notReady: string
    or: string
    emailCta: string
    summary: string
    free: string
    online: string
    service: string
    consult: string
    where: string
  }
}

/** FAQ answers that depend on the in-person city. */
const whereEn = (city: string) =>
  `Most of the work runs online, through email, chat and video calls, so you can be anywhere.${city ? ` In-person meetings are possible in ${city}.` : ""}`
const whereId = (city: string) =>
  `Sebagian besar pekerjaan berjalan online, lewat email, chat, dan video call, jadi kamu bisa di mana saja.${city ? ` Ketemu langsung bisa di ${city}.` : ""}`

const en: Dict = {
  nav: { home: "Home", services: "Services", process: "Process", work: "Work", faq: "FAQ", contact: "Book" },
  langLabel: "Language",
  book: "Book",
  bookConsult: "Book a consultation",
  seeServices: "See all services",
  hero: {
    l1: "Small business,",
    l2: "big presence,",
    l3: "starting today.",
    sub: "Denslab helps small businesses with websites, graphic design, product design and tidier business records.",
  },
  example: "Example",
  prevService: "Previous service",
  nextService: "Next service",
  servicesTitle: "Services",
  seeAll: "See all",
  services: {
    website: { label: "Website", title: "Business website", pitch: "A catalogue, company profile or online shop that works well on phones." },
    grafis: { label: "Graphic", title: "Graphic design", pitch: "Logos, Instagram feeds, promo posters, menus and banners." },
    produk: { label: "Product", title: "Product design", pitch: "Packaging, labels and a product look that is ready for the shelf." },
    data: { label: "Data", title: "Data automation", pitch: "Stock, sales and customer notes move from paper to forms and reports that update themselves." },
  },
  promo: {
    title: "Business records still in a notebook?",
    body: "We move them into forms and reports that fill themselves.",
    aria: "See the data automation example",
  },
  playing: {
    title: "In progress",
    note: "Sample project flow",
    project: "Catalogue website · Kopi Teras",
    stage: "Stage",
    of: "of",
    prev: "Previous stage",
    next: "Next stage",
    play: "Play the flow",
    pause: "Pause the flow",
  },
  stages: [
    { name: "Consultation", note: "Talk through what you need" },
    { name: "Concept", note: "Design direction and work plan" },
    { name: "Production", note: "Designing and building" },
    { name: "Revisions", note: "Changes from your feedback" },
    { name: "Handover", note: "Final files and a how-to guide" },
  ],
  works: {
    title: "Example work",
    prev: "Previous work",
    next: "Next work",
    items: { website: "Coffee Catalogue", grafis: "Promo Poster", produk: "Chips Packaging", data: "Sales Recap" },
  },
  mobileNote: "Consult with us, for FREE!",
  process: {
    title: "From the first chat to print-ready files.",
    intro: "Every design job, from a logo to a full website, runs through the same five steps. You always know what is being worked on and what comes next.",
    youGet: "You get",
    steps: [
      { name: "Brief", note: "Tell us about your business, your customers, examples you like and your deadline.", get: "A brief summary to confirm" },
      { name: "Concept", note: "We collect references and sketch a few directions for colour, type and layout.", get: "Moodboard and concept directions" },
      { name: "Design", note: "The direction you pick is designed in full: every page, post or side of the pack.", get: "A complete first draft" },
      { name: "Revision", note: "You mark what to change and we refine it. The number of revision rounds is agreed up front.", get: "The revised design" },
      { name: "Handover", note: "Final files in the formats you need, for print and for screen, with notes on how to use them.", get: "Final files and a usage guide" },
    ],
  },
  dash: {
    title: "Your notebook, turned into a sales chart.",
    body: "With data automation, each sale entered through a simple form lands in a sheet and updates a dashboard like this one by itself. No more adding everything up at the end of the month.",
    points: ["Daily input from your phone", "Monthly revenue at a glance", "Best-selling products ranked"],
    badge: "Example data",
    revenue: "Monthly revenue (Rp million)",
    revenueSeries: "Revenue",
    top: "Best sellers this month (units)",
    unit: "units",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  footer: {
    tagline: "Websites, design and data for small businesses.",
    reach: "Questions? Reach out",
    rights: "All rights reserved.",
    emailLabel: "Email",
  },
  work: {
    title: "What we make, shown instead of told.",
    intro: "These pieces were made for fictional businesses to show the kind of work you get. They will be replaced by real client work.",
    tiles: {
      website: { title: "Catalogue website for a coffee shop", tag: "Website" },
      produk: { title: "Snack pouch packaging", tag: "Product" },
      grafis: { title: "Promo poster and post", tag: "Graphic" },
      data: { title: "Sales sheet with weekly recap", tag: "Data" },
      feed: { title: "Instagram feed set", tag: "Graphic" },
      logo: { title: "Logo and colour set", tag: "Graphic" },
    },
    ctaTitle: "Your business could be the next one here.",
    ctaBody: "Tell us what you sell and who buys it.",
  },
  faq: {
    title: "Questions owners usually ask.",
    more: "Still unsure? Email us",
    items: [
      { q: "Is the first consultation really free?", a: "Yes. The first consultation is free, and you decide afterwards whether to go ahead." },
      { q: "How much does it cost?", a: "It depends on what you need, so the price is discussed in the free consultation once your project is clear." },
      { q: "How long does a project take?", a: "That depends on the service and the size of the job. The timeline is agreed in the consultation, before work starts." },
      { q: "Do we need to meet in person?", a: whereEn(CITY) },
      { q: "How many revisions do I get?", a: "The number of revision rounds is agreed up front, so both sides know what is included." },
      { q: "What should I prepare?", a: "Your business name, what you sell, who your customers are and a few examples you like. Any logo or product photos you already have help too." },
    ],
  },
  booking: {
    title: "Ready to start? Tell us about your business.",
    body: "Pick a service, then fill in a short form. Consult with us, for FREE!",
    bodyNoForm: "Pick a service, then email us. Consult with us, for FREE!",
    pick: "Which service?",
    ask: "The form asks for",
    askNoForm: "Tell us in your email",
    askItems: ["Your business name and what you sell", "The service you need", "Examples you like", "Your deadline"],
    open: "Open booking form",
    opensIn: "Opens Google Forms in a new tab",
    emailBook: "Book by email",
    notReady: "The online form is on its way. Booking by email works in the meantime.",
    or: "or",
    emailCta: "email your question",
    summary: "Your booking",
    free: "Consult with us, for FREE!",
    online: "Online, anywhere",
    service: "Service",
    consult: "Consultation",
    where: "Where",
  },
}

const id: Dict = {
  nav: { home: "Beranda", services: "Layanan", process: "Proses", work: "Karya", faq: "FAQ", contact: "Booking" },
  langLabel: "Bahasa",
  book: "Booking",
  bookConsult: "Booking konsultasi",
  seeServices: "Lihat semua layanan",
  hero: {
    l1: "Usaha kecil,",
    l2: "tampil besar,",
    l3: "mulai hari ini.",
    sub: "Denslab bantu UMKM bikin website, desain grafis, desain produk, dan merapikan pendataan usaha.",
  },
  example: "Contoh",
  prevService: "Layanan sebelumnya",
  nextService: "Layanan berikutnya",
  servicesTitle: "Layanan",
  seeAll: "Lihat semua",
  services: {
    website: { label: "Website", title: "Website usaha", pitch: "Katalog, profil usaha, atau toko online yang enak dibuka di HP." },
    grafis: { label: "Grafis", title: "Desain grafis", pitch: "Logo, feed Instagram, poster promo, sampai menu dan banner." },
    produk: { label: "Produk", title: "Desain produk", pitch: "Kemasan, label, dan tampilan produk yang siap dipajang di rak." },
    data: { label: "Data", title: "Otomasi pendataan", pitch: "Catatan stok, penjualan, dan pelanggan pindah dari buku ke form dan laporan otomatis." },
  },
  promo: {
    title: "Catatan usaha masih di buku tulis?",
    body: "Kami pindahkan ke form dan laporan yang terisi sendiri.",
    aria: "Lihat contoh otomasi pendataan",
  },
  playing: {
    title: "Sedang dikerjakan",
    note: "Contoh alur proyek",
    project: "Website katalog · Kopi Teras",
    stage: "Tahap",
    of: "dari",
    prev: "Tahap sebelumnya",
    next: "Tahap berikutnya",
    play: "Putar alur",
    pause: "Jeda alur",
  },
  stages: [
    { name: "Konsultasi", note: "Ngobrol soal kebutuhanmu" },
    { name: "Konsep", note: "Arah desain & rencana kerja" },
    { name: "Pengerjaan", note: "Desain dan pembuatan" },
    { name: "Revisi", note: "Perbaikan dari masukan kamu" },
    { name: "Serah terima", note: "File final & panduan pakai" },
  ],
  works: {
    title: "Contoh karya",
    prev: "Karya sebelumnya",
    next: "Karya berikutnya",
    items: { website: "Katalog Kopi", grafis: "Poster Promo", produk: "Kemasan Keripik", data: "Rekap Penjualan" },
  },
  mobileNote: "Konsultasikan bersama kami, GRATIS!",
  process: {
    title: "Dari obrolan pertama sampai file siap cetak.",
    intro: "Setiap pekerjaan desain, dari logo sampai website, lewat lima tahap yang sama. Kamu selalu tahu apa yang sedang dikerjakan dan apa yang datang berikutnya.",
    youGet: "Hasil",
    steps: [
      { name: "Brief", note: "Ceritakan usahamu, pelangganmu, contoh desain yang kamu suka, dan tenggat waktunya.", get: "Ringkasan brief untuk dikonfirmasi" },
      { name: "Konsep", note: "Kami kumpulkan referensi dan sketsa beberapa arah warna, huruf, dan tata letak.", get: "Moodboard dan arah konsep" },
      { name: "Desain", note: "Arah yang kamu pilih dikerjakan penuh: tiap halaman, postingan, atau sisi kemasan.", get: "Draf pertama yang lengkap" },
      { name: "Revisi", note: "Kamu tandai bagian yang mau diubah, kami rapikan. Jumlah putaran revisi disepakati di awal.", get: "Desain hasil revisi" },
      { name: "Serah terima", note: "File final dalam format yang kamu butuhkan, untuk cetak dan layar, plus catatan cara pakainya.", get: "File final dan panduan pakai" },
    ],
  },
  dash: {
    title: "Buku catatanmu, jadi grafik penjualan.",
    body: "Dengan otomasi pendataan, tiap penjualan yang diisi lewat form sederhana masuk ke sheet dan memperbarui dashboard seperti ini dengan sendirinya. Tidak perlu lagi menjumlah semuanya di akhir bulan.",
    points: ["Input harian dari HP", "Omzet bulanan sekilas lihat", "Produk terlaris berurutan"],
    badge: "Data contoh",
    revenue: "Omzet bulanan (Rp juta)",
    revenueSeries: "Omzet",
    top: "Produk terlaris bulan ini (unit)",
    unit: "unit",
    months: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
  },
  footer: {
    tagline: "Website, desain, dan data untuk UMKM.",
    reach: "Ada pertanyaan? Hubungi",
    rights: "Hak cipta dilindungi.",
    emailLabel: "Email",
  },
  work: {
    title: "Yang kami buat, ditunjukkan bukan diceritakan.",
    intro: "Karya ini dibuat untuk usaha fiktif, sebagai gambaran hasil yang kamu dapat. Nantinya diganti dengan karya klien asli.",
    tiles: {
      website: { title: "Website katalog untuk kedai kopi", tag: "Website" },
      produk: { title: "Kemasan pouch camilan", tag: "Produk" },
      grafis: { title: "Poster dan postingan promo", tag: "Grafis" },
      data: { title: "Sheet penjualan dengan rekap mingguan", tag: "Data" },
      feed: { title: "Set feed Instagram", tag: "Grafis" },
      logo: { title: "Logo dan set warna", tag: "Grafis" },
    },
    ctaTitle: "Usahamu bisa jadi yang berikutnya di sini.",
    ctaBody: "Ceritakan apa yang kamu jual dan siapa pembelinya.",
  },
  faq: {
    title: "Pertanyaan yang sering ditanyakan pemilik usaha.",
    more: "Masih ragu? Kirim email",
    items: [
      { q: "Konsultasi pertama beneran gratis?", a: "Ya. Konsultasi pertama gratis, dan kamu yang memutuskan mau lanjut atau tidak." },
      { q: "Berapa biayanya?", a: "Tergantung kebutuhanmu, jadi harga dibahas di konsultasi gratis setelah proyeknya jelas." },
      { q: "Berapa lama pengerjaannya?", a: "Tergantung layanan dan besarnya pekerjaan. Jadwal disepakati di konsultasi, sebelum pengerjaan dimulai." },
      { q: "Harus ketemu langsung?", a: whereId(CITY) },
      { q: "Berapa kali revisi?", a: "Jumlah putaran revisi disepakati di awal, jadi kedua pihak tahu apa saja yang termasuk." },
      { q: "Apa yang perlu disiapkan?", a: "Nama usaha, apa yang kamu jual, siapa pelangganmu, dan beberapa contoh yang kamu suka. Logo atau foto produk yang sudah ada juga membantu." },
    ],
  },
  booking: {
    title: "Siap mulai? Ceritakan usahamu.",
    body: "Pilih layanan, lalu isi form singkat. Konsultasikan bersama kami, GRATIS!",
    bodyNoForm: "Pilih layanan, lalu kirim email ke kami. Konsultasikan bersama kami, GRATIS!",
    pick: "Layanan apa?",
    ask: "Yang ditanyakan di form",
    askNoForm: "Ceritakan di email kamu",
    askItems: ["Nama usaha dan apa yang dijual", "Layanan yang dibutuhkan", "Contoh yang kamu suka", "Tenggat waktu"],
    open: "Buka form booking",
    opensIn: "Membuka Google Forms di tab baru",
    emailBook: "Booking lewat email",
    notReady: "Form online sedang disiapkan. Sementara ini booking lewat email bisa.",
    or: "atau",
    emailCta: "kirim pertanyaan lewat email",
    summary: "Booking kamu",
    free: "Konsultasikan bersama kami, GRATIS!",
    online: "Online, dari mana saja",
    service: "Layanan",
    consult: "Konsultasi",
    where: "Lokasi",
  },
}

const DICTS: Record<Lang, Dict> = { en, id }
const KEY = "denslab-lang"

function readLang(): Lang {
  try {
    const v = localStorage.getItem(KEY)
    if (v === "en" || v === "id") return v
  } catch {
    /* storage blocked: fall back to the default */
  }
  return "en"
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
