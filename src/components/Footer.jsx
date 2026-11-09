import { Container, Missing } from './ui'
import { locationLine, navLinks, site, telLink, whatsappLink } from '../data/siteConfig'

export default function Footer() {
  const wa = whatsappLink()
  return (
    <footer className="bg-charcoal py-16 text-ivory">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl">{site.name}</p>
            <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-sand">{site.descriptor}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
              A home furnishing store in {site.city}, {site.region}, offering carpets, mattresses, blankets, curtains,
              bedsheets, cushions and more.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow !text-sand">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/75 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow !text-sand">Visit &amp; Contact</p>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-ivory/75">
              <p>{site.address ? `${site.address}` : "Sitla Mata Market, MG Road"}</p>
              <p>{locationLine}</p>
              <p>
                {site.phone ? (
                  <a href={telLink} className="hover:text-white">
                    {site.phone}
                  </a>
                ) : (
                  <Missing>Phone — to be added</Missing>
                )}
              </p>
              <p>
                {wa ? (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    WhatsApp us
                  </a>
                ) : (
                  <Missing>WhatsApp — to be added</Missing>
                )}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-6 text-xs text-ivory/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
