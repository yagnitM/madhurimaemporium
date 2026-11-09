import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/siteConfig'

// Floating click-to-chat button. Only rendered once a WhatsApp number is configured.
export default function WhatsAppButton() {
  const href = whatsappLink()
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-olive text-white shadow-md transition-colors duration-300 hover:bg-olive-dark sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
