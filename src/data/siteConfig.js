// ─────────────────────────────────────────────────────────────
//  SITE CONFIG — the one file to edit for business details.
//  Anything left as an empty string ('') is treated as "not yet
//  provided": the page shows a clear placeholder and the matching
//  button is disabled instead of linking to a fake number/address.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Madhurima Emporium',
  descriptor: 'Home Furnishings',
  tagline: 'Make Your Home Feel Like Home.',
  city: 'Maheshwar',
  region: 'Madhya Pradesh',
  country: 'India',

  // TODO: add the real details below
  address: '', // e.g. 'Shop no. 12, Main Road, Maheshwar, Madhya Pradesh 451224'
  phone: '', // e.g. '+919XXXXXXXXX' (include country code)
  whatsapp: '', // digits with country code, e.g. '919XXXXXXXXX' (can match phone)
  hours: '', // e.g. 'Mon – Sat, 10:00 am – 8:00 pm'

  // Optional: paste the "Share → Copy link" URL from the shop's Google Maps listing.
  // When empty, a Google Maps search for the shop name + town is used.
  mapsUrl: '',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Collection', href: '#collection' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

/* ───────── derived helpers (no need to edit) ───────── */

const digits = (v) => (v || '').replace(/\D/g, '')

export const locationLine = `${site.city}, ${site.region}`

export const mapsLink =
  site.mapsUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name}, ${site.address || locationLine}`,
  )}`

export const telLink = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, '')}` : ''

export const whatsappLink = (message = `Hello ${site.name}, I would like to enquire about your home furnishing products.`) =>
  digits(site.whatsapp)
    ? `https://wa.me/${digits(site.whatsapp)}?text=${encodeURIComponent(message)}`
    : ''

export const hasWhatsapp = Boolean(digits(site.whatsapp))
