import { motion, useReducedMotion } from 'framer-motion'

/** Fades/slides content in once when it scrolls into view. Respects reduced-motion. */
export function Reveal({ children, delay = 0, as = 'div', className = '' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

const variants = {
  primary: 'bg-charcoal text-ivory hover:bg-olive border border-charcoal hover:border-olive',
  outline: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory',
  olive: 'bg-olive text-white border border-olive hover:bg-olive-dark hover:border-olive-dark',
  light: 'bg-ivory text-charcoal border border-ivory hover:bg-sand hover:border-sand',
  ghostLight: 'bg-transparent text-ivory border border-ivory/60 hover:bg-ivory hover:text-charcoal',
}

const base =
  'inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 text-center'

/**
 * Link-style button. If `href` is empty the action is not available yet
 * (missing business detail) so a disabled button is rendered instead of a dead link.
 */
export function ActionButton({ href, icon: Icon, children, variant = 'primary', external = false, hint, className = '' }) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        title={hint || 'Coming soon'}
        className={`${base} cursor-not-allowed border border-dashed border-charcoal/30 bg-transparent text-charcoal/50 ${className}`}
      >
        {Icon && <Icon size={16} aria-hidden="true" />}
        {children}
      </button>
    )
  }
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      {children}
    </a>
  )
}

/** Clearly marked stand-in for business info that has not been supplied yet. */
export function Missing({ children }) {
  return (
    <span className="border-b border-dashed border-charcoal/40 italic text-charcoal/55">{children}</span>
  )
}
