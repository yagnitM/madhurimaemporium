import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui'
import { site, whatsappLink } from '../data/siteConfig'

export default function CategoryCard({ category, index, className = '', imageClass = '' }) {
  // Link to a prefilled WhatsApp enquiry when a number exists, otherwise to the Contact section
  const enquiry =
    whatsappLink(`Hello ${site.name}, I would like to know more about your ${category.title.toLowerCase()}.`) ||
    '#contact'
  const external = enquiry !== '#contact'

  return (
    <Reveal as="article" delay={(index % 2) * 0.1} className={`group ${className}`}>
      <div className={`overflow-hidden bg-mist ${imageClass}`}>
        <img
          src={category.image}
          alt={category.alt}
          loading="lazy"
          decoding="async"
          width="900"
          height="1100"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-olive">0{index + 1}</p>
          <h3 className="mt-1 text-3xl">{category.title}</h3>
          <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-charcoal/70">{category.description}</p>
        </div>
        <a
          href={enquiry}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={`Enquire about ${category.title}`}
          className="mt-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/25 transition-colors duration-300 group-hover:border-olive group-hover:bg-olive group-hover:text-white"
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  )
}
