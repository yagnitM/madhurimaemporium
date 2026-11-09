import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { ActionButton, Container, Missing, Reveal } from './ui'
import { locationLine, mapsLink, site, telLink, whatsappLink } from '../data/siteConfig'

function Detail({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4 border-t border-sand py-5 first:border-t-0 first:pt-0">
      <Icon size={20} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
      <div>
        <p className="eyebrow !text-charcoal/50">{label}</p>
        <div className="mt-1.5 text-[1.02rem] leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Visit Us</p>
          <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Come and feel the difference in person.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-charcoal/75">
            Visit the {site.name} showroom in {site.city}, explore our home furnishings and get help choosing what suits
            your home.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionButton href={mapsLink} icon={Navigation} external variant="primary">
              Get Directions
            </ActionButton>
            <ActionButton
              href={whatsappLink()}
              icon={MessageCircle}
              external
              variant="olive"
              hint="WhatsApp number coming soon"
            >
              Contact Us on WhatsApp
            </ActionButton>
            <ActionButton href={telLink} icon={Phone} variant="outline" hint="Phone number coming soon">
              Call the Store
            </ActionButton>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="bg-white p-7 sm:p-10">
            <Detail icon={MapPin} label="Showroom">
              <p className="font-serif text-2xl">{site.name}</p>
              <p className="mt-1">
                {site.address ? site.address : "Sitla Mata Market, MG Road"}
              </p>
              <p className="text-charcoal/65">{locationLine}</p>
            </Detail>
            <Detail icon={Phone} label="Phone">
              {site.phone ? (
                <a href={telLink} className="hover:text-olive">
                  {site.phone}
                </a>
              ) : (
                "+91 9424007490"
              )}
            </Detail>
            <Detail icon={MessageCircle} label="WhatsApp">
              {whatsappLink() ? (
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-olive">
                  Message us on WhatsApp
                </a>
              ) : (
                <Missing>WhatsApp number — to be added</Missing>
              )}
            </Detail>
            <Detail icon={Clock} label="Business hours">
              {site.hours ? (
  site.hours
) : (
  <div className="space-y-1">
    <p>Monday–Wednesday: 11:00 AM – 8:30 PM</p>
    <p>Thursday: Closed</p>
    <p>Friday–Sunday: 11:00 AM – 8:30 PM</p>
  </div>
)} </Detail>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
