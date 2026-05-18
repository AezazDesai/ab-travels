import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(number: string, message?: string): string {
  const cleaned = number.replace(/\D/g, '')
  const defaultMessage = message || 'Hello AB Travels! I am interested in booking a travel package. Please share more details.'
  return `https://wa.me/91${cleaned}?text=${encodeURIComponent(defaultMessage)}`
}

export function getPackageWhatsAppLink(number: string, packageTitle: string): string {
  const message = `Hello AB Travels! I am interested in the *${packageTitle}* package. Please share more details and availability.`
  return getWhatsAppLink(number, message)
}
