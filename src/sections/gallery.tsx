import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

import { bookingHref, isExternalForm, type Service } from "@/config"
import { useLang } from "@/i18n"
import { cn } from "@/lib/utils"
import { ServiceMockup } from "@/sections/mockups"

/* Two extra pieces for the gallery. Fictional brands, like every mockup. */

function FeedMock() {
  const posts = [
    { bg: "bg-kopi", body: <p className="font-serif text-[13px] font-bold italic leading-none text-krem">Promo<br />Gajian</p> },
    { bg: "bg-krem", body: <span className="size-7 rounded-full bg-kopi" /> },
    { bg: "bg-karamel", body: <p className="text-[11px] font-bold leading-tight text-white">Menu<br />baru</p> },
    { bg: "bg-[#8a5a3c]", body: <span className="h-8 w-5 rounded-b-md rounded-t-sm bg-krem" /> },
    { bg: "bg-krem", body: <p className="font-serif text-[15px] font-bold italic text-kopi">KT</p> },
    { bg: "bg-karamel", body: <span className="h-8 w-5 rounded-b-md rounded-t-sm bg-kopi" /> },
    { bg: "bg-krem", body: <p className="text-[11px] font-bold leading-tight text-kopi">Buka<br />07.00</p> },
    { bg: "bg-kopi", body: <p className="text-[13px] font-black text-karamel">−20%</p> },
    { bg: "bg-[#8a5a3c]", body: <span className="size-6 rotate-45 rounded-md bg-krem" /> },
  ]
  return (
    <div className="dl-swap absolute inset-x-[12%] top-[10%] rounded-[22px] bg-white p-2.5 shadow-raised" style={{ transform: "rotate(-3deg)" }}>
      <div className="mb-2 flex items-center gap-2 px-1">
        <span className="grid size-7 place-items-center rounded-full bg-kopi font-serif text-[10px] font-bold italic text-krem">KT</span>
        <span className="text-[11px] font-bold">kopiteras</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {posts.map((p, i) => (
          <div key={i} className={cn("grid aspect-square place-items-center rounded-md p-1 text-center", p.bg)}>
            {p.body}
          </div>
        ))}
      </div>
    </div>
  )
}

function LogoMock() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="dl-swap w-[78%] rounded-[22px] bg-white p-5 shadow-raised" style={{ transform: "rotate(2deg)" }}>
        <div className="flex items-center gap-3">
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-kopi">
            <span className="h-6 w-4 rounded-b-lg rounded-t-sm bg-karamel" />
          </span>
          <p className="font-serif text-[28px] font-bold italic leading-none text-kopi">
            Kopi<br />Teras
          </p>
        </div>
        <div className="mt-4 flex gap-1.5">
          {["bg-kopi", "bg-krem ring-1 ring-inset ring-kopi/15", "bg-karamel", "bg-[#8a5a3c]"].map((c) => (
            <span key={c} className={cn("h-9 flex-1 rounded-lg", c)} />
          ))}
        </div>
        <p className="mt-3 text-[10px] font-medium text-muted-foreground">#5B3A29 · #F3E6D3 · #C8894B · #8A5A3C</p>
      </div>
    </div>
  )
}

type TileId = "website" | "produk" | "grafis" | "data" | "feed" | "logo"

function Tile({
  id,
  bg,
  span,
  children,
}: {
  id: TileId
  bg: string
  span?: boolean
  children: ReactNode
}) {
  const { t } = useLang()
  const tile = t.work.tiles[id]
  return (
    <figure className={cn("group relative h-[320px] overflow-hidden rounded-[28px] sm:h-[360px]", bg, span && "md:col-span-2")}>
      <div className="absolute inset-x-0 bottom-[68px] top-0 transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]">{children}</div>
      <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
        <span className="min-w-0">
          <span className="block truncate text-[14px] font-bold leading-tight">{tile.title}</span>
          <span className="text-[12px] text-muted-foreground">
            {tile.tag} · {t.example}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export function WorkSection({ service }: { service: Service }) {
  const { t } = useLang()
  const w = t.work
  const href = bookingHref(service)
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
        <h2 id="work-title" className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
          {w.title}
        </h2>
        <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-muted-foreground lg:justify-self-end">{w.intro}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        <Tile id="website" bg="bg-sky" span>
          <ServiceMockup id="website" />
        </Tile>
        <Tile id="produk" bg="bg-sun">
          <ServiceMockup id="produk" />
        </Tile>
        <Tile id="grafis" bg="bg-foreground">
          <ServiceMockup id="grafis" />
        </Tile>
        <Tile id="data" bg="bg-flame" span>
          <ServiceMockup id="data" />
        </Tile>
        <Tile id="feed" bg="bg-sun">
          <FeedMock />
        </Tile>
        <Tile id="logo" bg="bg-muted">
          <LogoMock />
        </Tile>
        <a
          href={href}
          {...(isExternalForm() ? { target: "_blank", rel: "noreferrer" } : {})}
          className="group flex h-[320px] flex-col justify-between rounded-[28px] bg-foreground p-6 text-white transition-colors hover:bg-[#232327] sm:h-[360px] sm:p-7"
        >
          <span className="text-[26px] font-extrabold leading-[1.1] tracking-tight text-balance">{w.ctaTitle}</span>
          <span className="flex items-end justify-between gap-4">
            <span className="max-w-[24ch] text-[14.5px] leading-snug text-white/75">{w.ctaBody}</span>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-sun text-foreground transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
              <ArrowRight className="size-6" />
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}
