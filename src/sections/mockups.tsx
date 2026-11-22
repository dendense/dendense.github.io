import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { ServiceId } from "@/config"

/*
 * Authored example work for each service. Every brand, number and product
 * here is fictional demo content; the hero labels it "Contoh".
 */

function Tilt({
  deg,
  className,
  children,
  delay = 0,
}: {
  deg: number
  className?: string
  children: ReactNode
  delay?: number
}) {
  return (
    <div
      className={cn("dl-swap absolute", className)}
      style={{ "--tilt": `${deg}deg`, transform: `rotate(${deg}deg)`, animationDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

function WebsiteMock() {
  return (
    <>
      <Tilt deg={-3} className="left-[4%] top-[14%] w-[80%]">
        <div className="overflow-hidden rounded-2xl bg-white shadow-raised">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="size-2 rounded-full bg-flame" />
            <span className="size-2 rounded-full bg-sun-deep" />
            <span className="size-2 rounded-full bg-sky" />
            <span className="ml-2 rounded-full bg-muted px-2.5 py-0.5 text-[10px] text-muted-foreground">kopiteras.id</span>
          </div>
          <div className="bg-krem p-3.5 text-kopi">
            <div className="flex items-center justify-between">
              <span className="font-serif text-[14px] font-bold italic tracking-tight">Kopi Teras</span>
              <span className="flex gap-2 text-[9px] text-kopi/70">
                <span>Menu</span><span>Lokasi</span><span>Pesan</span>
              </span>
            </div>
            <div className="mt-3 rounded-xl bg-kopi p-3 text-krem">
              <p className="font-serif text-[15px] leading-tight">Ngopi santai,</p>
              <p className="font-serif text-[15px] font-bold italic leading-tight">antar ke rumah.</p>
              <span className="mt-2 inline-block rounded-full bg-karamel px-2.5 py-1 text-[9px] font-bold text-white">Pesan via WhatsApp</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["bg-karamel", "Kopi Susu", "18rb"],
                ["bg-[#8a5a3c]", "Es Kopi Aren", "20rb"],
                ["bg-[#d9b48a]", "Roti Bakar", "15rb"],
              ].map(([bg, name, price]) => (
                <div key={name} className="rounded-lg bg-white/70 p-1.5">
                  <div className={cn("grid h-12 place-items-end justify-center rounded-md pb-1.5", bg)}>
                    <span className="h-6 w-4 rounded-b-md rounded-t-sm bg-white/85" />
                  </div>
                  <p className="mt-1 text-[9px] font-semibold leading-tight">{name}</p>
                  <p className="text-[9px] tabular-nums text-kopi/70">Rp{price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt deg={5} delay={90} className="bottom-[6%] right-[5%] w-[30%]">
        <div className="rounded-[22px] bg-foreground p-1.5 shadow-raised">
          <div className="overflow-hidden rounded-[17px] bg-krem text-kopi">
            <div className="mx-auto mt-1.5 h-1.5 w-8 rounded-full bg-muted" />
            <div className="p-2">
              <p className="font-serif text-[10px] font-bold italic">Kopi Teras</p>
              <div className="mt-1.5 h-14 rounded-lg bg-kopi" />
              <div className="mt-1.5 space-y-1">
                <div className="h-1.5 w-4/5 rounded-full bg-kopi/15" />
                <div className="h-1.5 w-3/5 rounded-full bg-kopi/15" />
              </div>
              <div className="mt-2 rounded-full bg-karamel py-1 text-center text-[8px] font-bold text-white">Pesan</div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  )
}

function GrafisMock() {
  return (
    <>
      <Tilt deg={-7} className="left-[4%] top-[24%] w-[44%]">
        <div className="aspect-square rounded-2xl bg-chili p-4 text-white shadow-raised">
          <div className="grid size-12 place-items-center rounded-full bg-daun text-[11px] font-black">MR</div>
          <p className="mt-3 text-[18px] font-black uppercase leading-none tracking-tight">Sambal<br />Mbok Rah</p>
          <p className="mt-2 text-[10px] font-medium text-white/85">Pedasnya bikin nambah nasi.</p>
        </div>
      </Tilt>
      <Tilt deg={5} delay={90} className="right-[6%] top-[17%] w-[46%]">
        <div className="aspect-[3/4] rounded-2xl bg-kopi p-4 text-krem shadow-raised">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-karamel">Kopi Teras · 25 – 28 Juni</p>
          <p className="mt-2 font-serif text-[30px] font-bold italic leading-[0.9]">Promo<br />Gajian</p>
          <div className="mt-3 inline-flex items-baseline gap-1 rounded-full bg-krem px-3 py-1 text-kopi">
            <span className="text-[18px] font-black">20%</span>
            <span className="text-[10px] font-bold">semua menu</span>
          </div>
          <div className="mt-4 flex gap-1.5">
            <span className="size-8 rounded-full bg-krem" />
            <span className="size-8 rounded-full bg-karamel" />
            <span className="size-8 rounded-full bg-[#8a5a3c]" />
          </div>
        </div>
      </Tilt>
      <Tilt deg={-2} delay={160} className="bottom-[8%] left-[18%] w-[52%]">
        <div className="flex overflow-hidden rounded-xl bg-white p-1.5 shadow-panel">
          {["bg-kopi", "bg-karamel", "bg-krem", "bg-chili", "bg-daun"].map((c) => (
            <span key={c} className={cn("h-7 flex-1 first:rounded-l-lg last:rounded-r-lg", c)} />
          ))}
        </div>
      </Tilt>
    </>
  )
}

function ProdukMock() {
  return (
    <>
      <Tilt deg={6} className="right-[8%] top-[30%] w-[34%]">
        <div className="aspect-[4/5] rounded-xl bg-kraft-ink p-3 shadow-raised">
          <div className="h-full rounded-lg border border-[#e9d9b6]/25 p-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-[#e9d9b6]">Bu Rah</p>
            <p className="mt-1 text-[14px] font-extrabold leading-tight text-white">Rempeyek<br />Kacang</p>
            <div className="mt-3 h-10 rounded-md bg-[repeating-linear-gradient(135deg,var(--kraft)_0_6px,#a4774a_6px_12px)]" />
          </div>
        </div>
      </Tilt>
      <Tilt deg={-4} delay={90} className="left-[10%] top-[15%] w-[42%]">
        {/* stand-up pouch */}
        <div className="relative">
          <div className="h-4 rounded-t-xl bg-[repeating-linear-gradient(90deg,var(--kraft)_0_5px,#a4774a_5px_10px)]" />
          <div className="rounded-b-[28px] bg-kraft px-4 pb-5 pt-3 shadow-raised">
            <div className="mx-auto mb-3 size-2.5 rounded-full bg-kraft-ink/40" />
            <p className="text-center text-[10px] font-bold uppercase tracking-wider text-kraft-ink">Keripik</p>
            <p className="text-center text-[24px] font-black leading-[0.9] tracking-tight text-kraft-ink">Tempe<br />Pedas</p>
            <div className="mx-auto mt-3 grid h-16 w-[78%] place-items-center rounded-2xl bg-[#f3ead8]">
              <div className="flex gap-1">
                <span className="h-6 w-4 -rotate-12 rounded-sm bg-[#c98a2b]" />
                <span className="h-5 w-5 rotate-6 rounded-sm bg-[#d99a36]" />
                <span className="h-6 w-4 rotate-12 rounded-sm bg-[#b97a22]" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[9px] font-semibold text-kraft-ink">
              <span>Bu Rah</span>
              <span className="tabular-nums">150 g</span>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  )
}

function DataMock() {
  const rows: [string, string, string, string][] = [
    ["01/06", "Keripik Tempe", "24", "288.000"],
    ["01/06", "Rempeyek", "15", "225.000"],
    ["02/06", "Keripik Tempe", "31", "372.000"],
    ["02/06", "Sambal Botol", "9", "198.000"],
    ["03/06", "Rempeyek", "18", "270.000"],
  ]
  const bars = [42, 58, 50, 74, 66, 88]
  return (
    <>
      <Tilt deg={-2} className="left-[4%] top-[12%] w-[74%]">
        <div className="overflow-hidden rounded-2xl bg-white shadow-raised">
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <span className="text-[11px] font-bold">Penjualan · Juni</span>
            <span className="rounded-full bg-sky/40 px-2 py-0.5 text-[9px] font-semibold text-soft-foreground">Sinkron otomatis</span>
          </div>
          <table className="w-full text-[9.5px] tabular-nums">
            <thead className="text-muted-foreground">
              <tr className="text-left">
                <th className="px-3 py-1.5 font-medium">Tgl</th>
                <th className="py-1.5 font-medium">Produk</th>
                <th className="py-1.5 text-right font-medium">Qty</th>
                <th className="px-3 py-1.5 text-right font-medium">Total (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="px-3 py-1.5 text-muted-foreground">{r[0]}</td>
                  <td className="py-1.5 font-medium">{r[1]}</td>
                  <td className="py-1.5 text-right">{r[2]}</td>
                  <td className="px-3 py-1.5 text-right font-semibold">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Tilt>
      <Tilt deg={4} delay={100} className="bottom-[7%] right-[5%] w-[44%]">
        <div className="rounded-2xl bg-foreground p-3 text-white shadow-raised">
          <p className="text-[9px] text-white/70">Rekap minggu ini</p>
          <p className="text-[18px] font-extrabold tabular-nums tracking-tight">Rp1,35 jt</p>
          <div className="mt-2 flex h-12 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className={cn("flex-1 rounded-t-[4px]", i === bars.length - 1 ? "bg-sun" : "bg-white/25")}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </Tilt>
    </>
  )
}

export function ServiceMockup({ id }: { id: ServiceId }) {
  return (
    <div key={id} className="absolute inset-0">
      {id === "website" && <WebsiteMock />}
      {id === "grafis" && <GrafisMock />}
      {id === "produk" && <ProdukMock />}
      {id === "data" && <DataMock />}
    </div>
  )
}
