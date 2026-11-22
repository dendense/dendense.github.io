import { Check, Mail } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AreaChart, BarList } from "@/components/ui/chart"
import { Footer, FooterBottom } from "@/components/ui/footer"
import { CONTACT, bookingHref, isExternalForm, mailtoHref, type Service } from "@/config"
import { useLang } from "@/i18n"
import { cn } from "@/lib/utils"

const STEP_TONES = [
  "bg-sun text-sun-foreground",
  "bg-flame text-white",
  "bg-foreground text-white",
  "bg-sky text-soft-foreground",
  "bg-sun text-sun-foreground",
]

function bookProps(service: Service) {
  const href = bookingHref(service)
  return isExternalForm() ? { href, target: "_blank", rel: "noreferrer" } : { href }
}

export function ProcessSection({ service }: { service: Service }) {
  const { t } = useLang()
  const p = t.process
  return (
    <section id="process" aria-labelledby="process-title" className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-10">
      <div className="lg:sticky lg:top-8 lg:self-start lg:pt-4">
        <h2 id="process-title" className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
          {p.title}
        </h2>
        <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-muted-foreground">{p.intro}</p>
        <Button asChild variant="ink" size="lg" className="mt-6 h-12">
          <a {...bookProps(service)}>{t.bookConsult}</a>
        </Button>
      </div>

      <ol className="rounded-[28px] bg-white p-2 shadow-panel sm:p-3">
        {p.steps.map((s, i) => (
          <li key={s.name} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 rounded-[22px] p-3 sm:grid-cols-[56px_minmax(0,1fr)_minmax(0,0.8fr)] sm:items-center sm:p-4">
            {i < p.steps.length - 1 && (
              <span aria-hidden className="absolute left-[35px] top-[60px] h-[calc(100%-40px)] w-px bg-border sm:left-[43px] sm:top-[68px]" />
            )}
            <span className={cn("relative grid size-12 place-items-center rounded-full text-[17px] font-extrabold tabular-nums sm:size-14 sm:text-[19px]", STEP_TONES[i])}>
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="text-[17px] font-bold tracking-tight">{s.name}</h3>
              <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{s.note}</p>
            </div>
            <p className="col-start-2 flex items-start gap-2 rounded-2xl bg-muted px-3.5 py-2.5 text-[13px] leading-snug sm:col-start-3">
              <Check className="mt-0.5 size-4 shrink-0 text-flame" strokeWidth={2.6} />
              <span>
                <span className="sr-only">{p.youGet}: </span>
                <span className="font-semibold">{s.get}</span>
              </span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* Fictional demo numbers: they show what the dashboard looks like, nothing more. */
const REVENUE = [8.2, 7.6, 9.1, 10.4, 9.8, 11.6, 12.3, 11.9, 13.4, 14.1, 13.2, 16.8]
const TOP = [
  { name: "Keripik Tempe Pedas", value: 412 },
  { name: "Rempeyek Kacang", value: 286 },
  { name: "Sambal Botol", value: 174 },
  { name: "Kopi Susu Botol", value: 121 },
]

export function DashboardSection({ service }: { service: Service }) {
  const { t, lang } = useLang()
  const d = t.dash
  const data = d.months.map((m, i) => ({ month: m, revenue: REVENUE[i] }))
  const num = new Intl.NumberFormat(lang === "id" ? "id-ID" : "en-US", { maximumFractionDigits: 1 })

  return (
    <section id="dashboard" aria-labelledby="dash-title" className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-6">
      <div className="flex flex-col rounded-[28px] bg-foreground p-6 text-white sm:p-8">
        <h2 id="dash-title" className="text-[clamp(28px,2.6vw,38px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
          {d.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/75">{d.body}</p>
        <ul className="mt-6 grid gap-3">
          {d.points.map((pt) => (
            <li key={pt} className="flex items-center gap-3 text-[14.5px] font-medium">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sun text-foreground">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-8 lg:mt-auto lg:pt-8">
          <Button asChild size="lg" className="h-12 bg-sun text-foreground hover:bg-sun-deep">
            <a {...bookProps(service)}>{t.bookConsult}</a>
          </Button>
        </div>
      </div>

      <div className="min-w-0 rounded-[28px] bg-white p-5 shadow-panel sm:p-6">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:gap-10">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[16px] font-bold tracking-tight">{d.revenue}</h3>
              <Badge variant="highlight">{d.badge}</Badge>
            </div>
            <AreaChart
              className="mt-4"
              data={data}
              index="month"
              series={[{ key: "revenue", name: d.revenueSeries, color: "var(--flame)" }]}
              label={d.revenue}
              height={310}
              valueFormatter={(n) => num.format(n)}
            />
          </div>
          <div className="min-w-0 xl:border-l xl:border-border xl:pl-10">
            <h3 className="text-[16px] font-bold tracking-tight">{d.top}</h3>
            <BarList
              className="mt-5"
              data={TOP}
              label={d.top}
              color="var(--sun-deep)"
              valueFormatter={(n) => `${num.format(n)} ${d.unit}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function SiteFooter() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const pill =
    "inline-flex h-11 items-center gap-2 rounded-full bg-muted px-4 text-[14px] font-semibold transition-colors hover:bg-sun"
  return (
    <Footer id="contact" className="gap-8 rounded-[32px] p-6 shadow-panel ring-0 sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[19px] font-extrabold tracking-tight">
            DENSLAB<span className="text-flame">.</span>
          </p>
          <p className="mt-1 text-[14px] text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-[13px] text-muted-foreground">{t.footer.reach}</span>
          <div className="flex flex-wrap gap-2">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className={pill}>
              <InstagramGlyph className="size-[18px]" />
              {CONTACT.instagramHandle}
            </a>
            <a href={mailtoHref()} className={pill}>
              <Mail className="size-[18px]" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
      <FooterBottom>
        <p>
          © {year}{" "}
          <a
            href={CONTACT.site}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground underline decoration-flame decoration-2 underline-offset-4 hover:decoration-foreground"
          >
            Denslab
          </a>
          . {t.footer.rights}
        </p>
      </FooterBottom>
    </Footer>
  )
}
