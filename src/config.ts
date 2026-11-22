import type { LucideIcon } from "lucide-react"
import { Database, MonitorSmartphone, Package, PenTool } from "lucide-react"

/**
 * Google Form for booking and questions.
 * Paste the form's share link (https://docs.google.com/forms/d/e/.../viewform)
 * here. Optional: SERVICE_FIELD_ID is the "entry.123456" id of a question
 * "Layanan apa?" so each button opens the form with the service pre-filled.
 * While FORM_URL is empty, booking buttons jump to the contact footer.
 */
export const FORM_URL = ""
export const SERVICE_FIELD_ID = ""

/** City where in-person meetings are possible. Empty: the FAQ mentions online only. */
export const CITY = ""

/** Contact links shown in the footer */
export const CONTACT = {
  site: "https://dendense.vercel.app/",
  instagram: "https://www.instagram.com/deny_desu/",
  instagramHandle: "@deny_desu",
  email: "denyfarras@gmail.com",
  emailSubject: "QnA Denslab",
}

export const mailtoHref = () =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.emailSubject)}`

export type ServiceId = "website" | "grafis" | "produk" | "data"

export type Service = {
  id: ServiceId
  /** value sent to the form */
  formValue: string
  icon: LucideIcon
  /** chip fill, from the reference palette */
  tone: "sun" | "flame" | "ink" | "sky"
}

export const SERVICES: Service[] = [
  { id: "website", formValue: "Pembuatan Website", icon: MonitorSmartphone, tone: "sun" },
  { id: "grafis", formValue: "Desain Grafis", icon: PenTool, tone: "flame" },
  { id: "produk", formValue: "Desain Produk", icon: Package, tone: "ink" },
  { id: "data", formValue: "Otomasi Pendataan UMKM", icon: Database, tone: "sky" },
]

export function bookingHref(service?: Service): string {
  if (!FORM_URL) return "#booking"
  if (!service || !SERVICE_FIELD_ID) return FORM_URL
  const url = new URL(FORM_URL)
  url.searchParams.set("usp", "pp_url")
  url.searchParams.set(SERVICE_FIELD_ID, service.formValue)
  return url.toString()
}

export const isExternalForm = () => FORM_URL !== ""
