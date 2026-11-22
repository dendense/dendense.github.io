import { useEffect, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Divider } from "@/components/ui/divider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SERVICES, bookingHref, isExternalForm, type Service } from "@/config"
import { LangProvider, useLang, type Lang } from "@/i18n"
import { cn } from "@/lib/utils"
import { BookingSection, FaqSection } from "@/sections/close"
import { DashboardSection, ProcessSection, SiteFooter } from "@/sections/extra"
import { WorkSection } from "@/sections/gallery"
import { ServiceMockup } from "@/sections/mockups"

const WORK_BG: Record<Service["id"], string> = {
  website: "bg-sun",
  grafis: "bg-flame",
  produk: "bg-foreground",
  data: "bg-sky",
}

const toneChip: Record<Service["tone"], string> = {
  sun: "bg-sun text-sun-foreground",
  flame: "bg-flame text-white",
  ink: "bg-foreground text-white",
  sky: "bg-sky text-soft-foreground",
}

const onDark = (s: Service) => s.tone === "ink" || s.tone === "flame"

function linkProps(href: string) {
  return isExternalForm() && href.startsWith("http")
    ? { href, target: "_blank", rel: "noreferrer" }
    : { href }
}

function Logo() {
  return (
    <a href="#home" className="text-[17px] font-extrabold tracking-tight">
      DENSLAB<span className="text-flame">.</span>
    </a>
  )
}

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  const opts: Lang[] = ["en", "id"]
  return (
    <div role="radiogroup" aria-label={t.langLabel} className="flex h-11 items-center rounded-full bg-white p-1 shadow-panel">
      {opts.map((o) => {
        const on = o === lang
        return (
          <button
            key={o}
            role="radio"
            aria-checked={on}
            onClick={() => setLang(o)}
            className={cn(
              "h-9 min-w-10 rounded-full px-3 text-[12.5px] font-bold uppercase tracking-wide transition-colors duration-200",
              on ? "bg-sun text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

function TopBar({ service }: { service: Service }) {
  const { t } = useLang()
  const nav = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#work", label: t.nav.work },
    { href: "#faq", label: t.nav.faq },
    { href: "#booking", label: t.nav.contact },
  ]
  return (
    <header className="flex items-center justify-between gap-3">
      <Logo />
      <nav aria-label="Main" className="hidden items-center text-[13px] lg:flex">
        {nav.map((n, i) => (
          <span key={n.href} className="flex items-center">
            {i > 0 && <span aria-hidden className="mx-2 h-3 w-px bg-input" />}
            <a
              href={n.href}
              aria-current={i === 0 ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground",
                i === 0 && "bg-white font-semibold text-foreground underline decoration-2 underline-offset-[6px] shadow-panel"
              )}
            >
              {n.label}
            </a>
          </span>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <LangSwitch />
        <Button asChild variant="ink" className="h-11 px-5">
          <a {...linkProps(bookingHref(service))}>
            {t.book}
            <CalendarCheck />
          </a>
        </Button>
      </div>
    </header>
  )
}

function ServiceRail({ active, onPick }: { active: Service; onPick: (s: Service) => void }) {
  const { t } = useLang()
  return (
    <div className="hidden xl:block">
      <div role="tablist" aria-label={t.servicesTitle} aria-orientation="vertical" className="flex flex-col items-center gap-3 rounded-full bg-white p-2 shadow-panel">
        {SERVICES.map((s) => {
          const on = s.id === active.id
          const Icon = s.icon
          const title = t.services[s.id].title
          return (
            <Tooltip key={s.id}>
              <TooltipTrigger asChild>
                <button
                  role="tab"
                  aria-selected={on}
                  aria-label={title}
                  onClick={() => onPick(s)}
                  className={cn(
                    "grid size-10 place-items-center rounded-full transition-colors duration-200",
                    on ? "bg-sun text-foreground shadow-[0_6px_14px_-6px_rgb(245_196_0/0.9)]" : "text-foreground/70 hover:bg-muted"
                  )}
                >
                  <Icon className="size-[18px]" strokeWidth={2.2} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">{title}</TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

function HeroCopy({ service }: { service: Service }) {
  const { t } = useLang()
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-[clamp(42px,3.6vw,58px)] leading-[1] tracking-[-0.035em]">
        <span className="block font-light">{t.hero.l1}</span>
        <span className="block font-light">{t.hero.l2}</span>
        <span className="block font-extrabold">{t.hero.l3}</span>
      </h1>
      <p className="mt-6 max-w-[36ch] text-[15.5px] leading-relaxed text-muted-foreground">{t.hero.sub}</p>
      <div className="mt-7 flex items-center gap-3">
        <Button asChild variant="ink" size="lg" className="h-12">
          <a {...linkProps(bookingHref(service))}>
            <Play className="fill-current" />
            {t.bookConsult}
          </a>
        </Button>
        <a
          href="#services"
          aria-label={t.seeServices}
          className="grid size-12 place-items-center rounded-full bg-white text-foreground shadow-panel transition-transform duration-200 hover:-translate-y-0.5"
        >
          <ArrowRight className="size-5" />
        </a>
      </div>
    </div>
  )
}

function Equalizer() {
  const h = [30, 62, 44, 88, 56, 100, 70, 40, 76, 52, 28]
  return (
    <div aria-hidden className="dl-eq absolute left-6 top-1/2 flex h-24 -translate-y-1/2 items-center gap-[5px] opacity-90">
      {h.map((v, i) => (
        <span key={i} className="w-[5px] rounded-full bg-white" style={{ height: `${v}%`, animationDelay: `${(i % 5) * 140}ms` }} />
      ))}
    </div>
  )
}

function Stage({ service, index, onStep }: { service: Service; index: number; onStep: (d: number) => void }) {
  const { t } = useLang()
  const title = t.services[service.id].title
  return (
    <section aria-label={`${t.example}: ${title}`} className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-sun sm:min-h-[400px] lg:min-h-[440px]">
      <Equalizer />
      <div className="absolute inset-y-0 left-[12%] right-0 sm:left-[14%]">
        <ServiceMockup id={service.id} />
      </div>
      <div className="absolute left-4 top-4 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
        {t.example} · {title}
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/70 p-1 backdrop-blur">
        <button onClick={() => onStep(-1)} aria-label={t.prevService} className="grid size-7 place-items-center rounded-full bg-white shadow-panel transition-colors hover:bg-muted">
          <ChevronLeft className="size-4" />
        </button>
        <span className="px-1.5 text-[11px] font-semibold tabular-nums text-foreground/70" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
        </span>
        <button onClick={() => onStep(1)} aria-label={t.nextService} className="grid size-7 place-items-center rounded-full bg-white shadow-panel transition-colors hover:bg-muted">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  )
}

function ServicesPanel({ active, onPick }: { active: Service; onPick: (s: Service) => void }) {
  const { t } = useLang()
  const copy = t.services[active.id]
  return (
    <div className="rounded-[28px] bg-white p-5 shadow-panel">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-bold tracking-tight">{t.servicesTitle}</h2>
        <a href="#process" className="flex items-center gap-1 text-[12px] font-medium text-muted-foreground hover:text-foreground">
          {t.seeAll} <ArrowRight className="size-3.5" />
        </a>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {SERVICES.map((s) => {
          const Icon = s.icon
          const on = s.id === active.id
          return (
            <button key={s.id} onClick={() => onPick(s)} aria-pressed={on} className="group flex flex-col items-center gap-2 rounded-2xl py-1 text-[12px] font-semibold">
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-full transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5",
                  toneChip[s.tone],
                  on && "ring-2 ring-foreground ring-offset-2 ring-offset-white"
                )}
              >
                <Icon className="size-5" strokeWidth={2.2} />
              </span>
              {t.services[s.id].label}
            </button>
          )
        })}
      </div>
      <p key={active.id + copy.title} className="dl-copy mt-4 border-t border-border pt-4 text-[13.5px] leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">{copy.title}.</span> {copy.pitch}
      </p>
    </div>
  )
}

function DataPromo({ onPick }: { onPick: () => void }) {
  const { t } = useLang()
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-flame p-5 pr-[42%] text-white sm:pr-[38%]">
      <h2 className="text-[21px] font-extrabold leading-[1.1] tracking-tight">{t.promo.title}</h2>
      <p className="mt-2 text-[13.5px] font-medium leading-snug text-flame-ink">{t.promo.body}</p>
      <button
        onClick={onPick}
        aria-label={t.promo.aria}
        className="mt-4 grid size-10 place-items-center rounded-full bg-white text-foreground transition-transform duration-200 hover:translate-x-0.5"
      >
        <ArrowRight className="size-4" />
      </button>
      {/* a torn receipt sliding off the panel's edge */}
      <div aria-hidden className="absolute -right-3 top-5 w-[38%] rotate-[8deg] sm:w-[42%]">
        <div className="rounded-t-md bg-white px-3 pb-2 pt-3 text-foreground shadow-raised">
          <p className="text-[9px] font-bold uppercase tracking-wider">Nota</p>
          {[78, 60, 70, 52, 66].map((w, i) => (
            <div key={i} className="mt-1.5 flex items-center justify-between gap-2">
              <span className="h-1.5 rounded-full bg-muted" style={{ width: `${w}%` }} />
              <span className="h-1.5 w-4 rounded-full bg-foreground/30" />
            </div>
          ))}
        </div>
        <div className="h-2.5 bg-[linear-gradient(135deg,white_50%,transparent_50%),linear-gradient(225deg,white_50%,transparent_50%)] bg-[length:10px_10px] bg-repeat-x" />
      </div>
    </div>
  )
}

function NowPlaying() {
  const { t } = useLang()
  const stages = t.stages
  const [step, setStep] = useState(2)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => setStep((s) => (s + 1) % stages.length), 2400)
    return () => window.clearInterval(id)
  }, [playing, stages.length])

  const stage = stages[step]
  const pct = ((step + 1) / stages.length) * 100

  return (
    <section aria-label={t.playing.note} className="flex flex-col rounded-[28px] bg-foreground p-5 text-white shadow-panel">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-bold tracking-tight">{t.playing.title}</h2>
        <span className="text-[12px] font-medium text-white/60">{t.playing.note}</span>
      </div>
      <div className="my-auto flex items-center gap-4 pt-4">
        <div className="relative grid size-[72px] shrink-0 place-items-center overflow-hidden rounded-2xl bg-sun">
          <span className="text-[26px] font-black tabular-nums tracking-tight">{step + 1}</span>
          <span className="absolute bottom-1.5 text-[9px] font-semibold text-foreground/70">
            {t.playing.of} {stages.length}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold leading-tight sm:truncate">{t.playing.project}</p>
          <p key={stage.name} className="dl-copy mt-0.5 text-[12.5px] leading-snug text-white/65 sm:truncate">
            {stage.name}: {stage.note}
          </p>
          <div className="mt-2.5 flex items-center gap-3">
            <div
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={stages.length}
              aria-valuenow={step + 1}
              aria-label={t.playing.stage}
              className="h-2 flex-1 overflow-hidden rounded-full bg-white/15"
            >
              <div className="h-full rounded-full bg-sun-deep transition-[width] duration-500 ease-out-expo" style={{ width: `${pct}%` }} />
            </div>
            <span className="hidden text-[11px] tabular-nums text-white/60 sm:inline">
              {t.playing.stage} {step + 1}/{stages.length}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            onClick={() => setStep((s) => (s - 1 + stages.length) % stages.length)}
            aria-label={t.playing.prev}
            className="hidden size-9 place-items-center rounded-full text-white hover:bg-white/10 sm:grid"
          >
            <SkipBack className="size-4 fill-current" />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? t.playing.pause : t.playing.play}
            className="grid size-11 place-items-center rounded-full bg-white text-foreground transition-transform active:scale-95"
          >
            {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 translate-x-px fill-current" />}
          </button>
          <button
            onClick={() => setStep((s) => (s + 1) % stages.length)}
            aria-label={t.playing.next}
            className="grid size-9 place-items-center rounded-full text-white hover:bg-white/10"
          >
            <SkipForward className="size-4 fill-current" />
          </button>
        </div>
      </div>
    </section>
  )
}

function WorkStrip({ active, onPick }: { active: Service; onPick: (s: Service) => void }) {
  const { t } = useLang()
  const i = SERVICES.findIndex((s) => s.id === active.id)
  const step = (d: number) => onPick(SERVICES[(i + d + SERVICES.length) % SERVICES.length])
  return (
    <section aria-label={t.works.title} className="rounded-[28px] bg-white p-5 shadow-panel">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-bold tracking-tight">{t.works.title}</h2>
        <div className="flex gap-1">
          <button onClick={() => step(-1)} aria-label={t.works.prev} className="grid size-8 place-items-center rounded-full bg-muted hover:bg-secondary">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={() => step(1)} aria-label={t.works.next} className="grid size-8 place-items-center rounded-full bg-muted hover:bg-secondary">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2.5">
        {SERVICES.map((s) => {
          const Icon = s.icon
          const on = s.id === active.id
          const ink = onDark(s) ? "text-white" : "text-foreground"
          return (
            <button key={s.id} onClick={() => onPick(s)} aria-pressed={on} className="group text-left">
              <span
                className={cn(
                  "relative grid aspect-[5/4] place-items-center overflow-hidden rounded-2xl transition-transform duration-200 group-hover:-translate-y-0.5",
                  WORK_BG[s.id],
                  on && "ring-2 ring-foreground ring-offset-2 ring-offset-white"
                )}
              >
                <Icon className={cn("size-6", ink)} strokeWidth={1.8} />
                <ArrowUpRight className={cn("absolute right-1.5 top-1.5 size-3.5 opacity-0 transition-opacity group-hover:opacity-100", ink)} />
              </span>
              <span className="mt-1.5 line-clamp-2 block text-center text-[11.5px] font-semibold leading-tight">{t.works.items[s.id]}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function MobileBookingBar({ service }: { service: Service }) {
  const { t } = useLang()
  const Icon = service.icon
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-3 rounded-full bg-white p-1.5 pl-2 shadow-raised lg:hidden">
      <span className={cn("grid size-10 shrink-0 place-items-center rounded-full", toneChip[service.tone])}>
        <Icon className="size-[18px]" />
      </span>
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-[13px] font-bold">{t.services[service.id].title}</p>
        <p className="text-[11px] leading-snug text-muted-foreground">{t.mobileNote}</p>
      </div>
      <Button asChild variant="ink" className="h-10">
        <a {...linkProps(bookingHref(service))}>{t.book}</a>
      </Button>
    </div>
  )
}

function SectionDivider() {
  return (
    <Divider spacing="none" align="start" className="my-12 lg:my-16">
      <span aria-hidden className="size-2.5 rounded-full bg-flame" />
    </Divider>
  )
}

function Page() {
  const [index, setIndex] = useState(0)
  const service = SERVICES[index]
  const pick = (s: Service) => setIndex(SERVICES.findIndex((x) => x.id === s.id))
  const step = (d: number) => setIndex((i) => (i + d + SERVICES.length) % SERVICES.length)

  return (
    <>
      <main id="home" className="px-3 pb-6 pt-3 sm:px-5 sm:pt-5 lg:px-6 lg:pt-6">
        <div className="mx-auto max-w-[1560px] rounded-[36px] bg-surface p-4 shadow-[0_30px_80px_-40px_rgb(23_23_26/0.35)] sm:p-6 lg:p-8 xl:p-10">
          <TopBar service={service} />

          <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-10 md:grid-cols-2 lg:gap-6 xl:grid-cols-[56px_minmax(0,0.95fr)_minmax(0,1.05fr)_minmax(300px,0.85fr)]">
            <ServiceRail active={service} onPick={pick} />
            <HeroCopy service={service} />
            <Stage service={service} index={index} onStep={step} />
            <div id="services" className="flex flex-col gap-5 md:col-span-2 md:grid md:grid-cols-2 lg:gap-6 xl:col-span-1 xl:flex">
              <ServicesPanel active={service} onPick={pick} />
              <DataPromo onPick={() => setIndex(SERVICES.findIndex((s) => s.id === "data"))} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:mt-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-6">
            <NowPlaying />
            <WorkStrip active={service} onPick={pick} />
          </div>

          <SectionDivider />
          <ProcessSection service={service} />

          <SectionDivider />
          <DashboardSection service={service} />

          <SectionDivider />
          <WorkSection service={service} />

          <SectionDivider />
          <FaqSection />

          <SectionDivider />
          <BookingSection service={service} onPick={pick} />
        </div>
      </main>
      <div className="px-3 pb-28 sm:px-5 lg:px-6 lg:pb-6">
        <div className="mx-auto max-w-[1560px]">
          <SiteFooter />
        </div>
      </div>
      <MobileBookingBar service={service} />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <TooltipProvider delayDuration={150}>
        <Page />
      </TooltipProvider>
    </LangProvider>
  )
}
