import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Container, Reveal } from './ui'
import { galleryItems } from '../data/gallery'

const layoutClass = {
  wide: 'col-span-2 md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[440px]',
  tall: 'col-span-2 md:col-span-5 aspect-[4/3] md:aspect-auto md:h-[440px]',
  small: 'col-span-1 md:col-span-3 aspect-square md:aspect-auto md:h-[300px]',
}

function Lightbox({ index, onClose, onNav }) {
  const closeRef = useRef(null)
  const item = galleryItems[index]

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'ArrowRight') onNav(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onNav])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${item.caption}`}
      className="fixed inset-0 z-[60] flex flex-col bg-charcoal/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 text-ivory sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">
          {index + 1} / {galleryItems.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image" className="p-2">
          <X size={26} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => onNav(-1)}
          className="absolute left-1 p-3 text-ivory hover:text-sand sm:left-4"
        >
          <ChevronLeft size={34} />
        </button>
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full object-contain"
        />
        <button
          type="button"
          aria-label="Next image"
          onClick={() => onNav(1)}
          className="absolute right-1 p-3 text-ivory hover:text-sand sm:right-4"
        >
          <ChevronRight size={34} />
        </button>
      </div>

      <p className="px-5 py-5 text-center font-serif text-xl text-ivory">{item.caption}</p>
    </motion.div>
  )
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)
  const openerRef = useRef(null)

  const close = useCallback(() => {
    setOpenIndex(null)
    openerRef.current?.focus()
  }, [])

  const nav = useCallback((dir) => {
    setOpenIndex((i) => (i === null ? i : (i + dir + galleryItems.length) % galleryItems.length))
  }, [])

  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Showroom Gallery</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">A look inside the store</h2>
          </div>
          <p className="max-w-sm leading-relaxed text-charcoal/70">
            Browse photographs of our showroom, displays and products.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-12 md:gap-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.07} className={`${layoutClass[item.layout] || layoutClass.small}`}>
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget
                  setOpenIndex(i)
                }}
                aria-label={`Open image: ${item.caption}`}
                className="group relative block h-full w-full overflow-hidden bg-mist"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-charcoal/80 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {openIndex !== null && <Lightbox index={openIndex} onClose={close} onNav={nav} />}
      </AnimatePresence>
    </section>
  )
}
