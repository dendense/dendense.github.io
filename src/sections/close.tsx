import { Check, Mail, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CITY, CONTACT, FORM_URL, SERVICES, bookingHref, mailtoHref, type Service } from "@/config"
import { useLang } from "@/i18n"
import { cn } from "@/lib/utils"

export function FaqSection() {
  const { t } = useLang()
  const f = t.faq
  return (
    <section id="faq" aria-labelledby="faq-title" className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-10">
      <div className="lg:pt-4">
        <h2 id="faq-title" className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
          {f.title}
        </h2>
        <a
          href={mailtoHref()}
          className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold underline decoration-flame decoration-2 underline-offset-[5px] hover:decoration-foreground"
        >
          <Mail className="size-4" />
          {f.more}
        </a>
      </div>
      <div className="grid gap-3">
        {f.items.map((item, i) => (
          <details key={item.q} open={i === 0} className="group rounded-[24px] bg-white shadow-panel">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[24px] px-5 py-4 text-[16px] font-bold tracking-tight sm:px-6 [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted transition-[transform,background-color] duration-300 ease-out-expo group-open:rotate-45 group-open:bg-sun">
                <Plus className="size-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="max-w-[62ch] px-5 pb-5 text-[14.5px] leading-relaxed text-muted-foreground sm:px-6">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

const chipTone: Record<Service["tone"], string> = {
  sun: "bg-sun text-foreground",
  flame: "bg-flame text-white",
  ink: "bg-foreground text-white",
  sky: "bg-sky text-soft-foreground",
}

export function BookingSection({ service, onPick }: { service: Service; onPick: (s: Service) => void }) {
  const { t } = useLang()
  const b = t.booking
  const title = t.services[service.id].title
  const hasForm = FORM_URL !== ""
  const href = hasForm
    ? bookingHref(service)
    : `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Booking Denslab · ${service.formValue}`)}`

  return (
    <section id="booking" aria-labelledby="booking-title" className="relative overflow-hidden rounded-[32px] bg-sun p-5 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-12">
        <div>
          <h2 id="booking-title" className="max-w-[16ch] text-[clamp(34px,4vw,60px)] font-extrabold leading-[1] tracking-[-0.035em]">
            {b.title}
          </h2>
          <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-foreground/75">{hasForm ? b.body : b.bodyNoForm}</p>

          <p className="mt-8 text-[14px] font-bold">{b.pick}</p>
          <div role="radiogroup" aria-label={b.pick} className="mt-3 flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const on = s.id === service.id
              const Icon = s.icon
              return (
                <button
                  key={s.id}
                  role="radio"
                  aria-checked={on}
                  onClick={() => onPick(s)}
                  className={cn(
                    "inline-flex h-11 items-center gap-2 rounded-full pl-1.5 pr-4 text-[14px] font-semibold transition-colors duration-200",
                    on ? "bg-foreground text-white" : "bg-white/70 text-foreground hover:bg-white"
                  )}
                >
                  <span className={cn("grid size-8 place-items-center rounded-full", on ? "bg-sun text-foreground" : chipTone[s.tone])}>
                    <Icon className="size-4" />
                  </span>
                  {t.services[s.id].title}
                </button>
              )
            })}
          </div>

          <p className="mt-8 text-[14px] font-bold">{hasForm ? b.ask : b.askNoForm}</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {b.askItems.map((it) => (
              <li key={it} className="flex items-center gap-2.5 text-[14.5px] text-foreground/85">
                <Check className="size-4 shrink-0" strokeWidth={2.8} />
                {it}
              </li>
            ))}
          </ul>
        </div>

        {/* the booking ticket */}
        <div className="self-start text-white drop-shadow-[0_18px_28px_rgb(23_23_26/0.28)] lg:mt-2">
          <div className="dl-ticket-top rounded-t-[28px] bg-foreground p-6 sm:p-7">
            <p className="text-[13px] font-semibold text-white/60">{b.summary}</p>
            <dl className="mt-4 grid gap-3 text-[14.5px]">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <dt className="text-white/60">{b.service}</dt>
                <dd key={title} className="dl-copy font-bold sm:text-right">{title}</dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <dt className="text-white/60">{b.consult}</dt>
                <dd className="font-bold text-sun sm:text-right">{b.free}</dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <dt className="text-white/60">{b.where}</dt>
                <dd className="font-bold sm:text-right">{CITY ? `${b.online} · ${CITY}` : b.online}</dd>
              </div>
            </dl>
          </div>
          <div className="dl-ticket-bottom relative -mt-px rounded-b-[28px] bg-foreground p-6 sm:p-7">
            <span aria-hidden className="absolute inset-x-6 top-0 border-t-2 border-dashed border-white/15" />
            <Button asChild size="lg" className="h-13 w-full bg-sun text-[15px] text-foreground hover:bg-sun-deep">
              <a href={href} {...(hasForm ? { target: "_blank", rel: "noreferrer" } : {})}>
                {hasForm ? b.open : b.emailBook}
              </a>
            </Button>
            <p className="mt-3 text-center text-[12.5px] leading-snug text-white/60">{hasForm ? b.opensIn : b.notReady}</p>
            <p className="mt-4 text-center text-[13px] text-white/70">
              {b.or}{" "}
              <a href={mailtoHref()} className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-sun">
                {b.emailCta}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
