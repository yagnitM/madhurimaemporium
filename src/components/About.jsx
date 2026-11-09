import { Container, Reveal } from './ui'
import { site } from '../data/siteConfig'

export default function About() {
  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-6">
          <img
            src="/images/showroom/about-showroom.svg"
            alt="Placeholder for a photograph of the Madhurima Emporium showroom"
            loading="lazy"
            decoding="async"
            width="1000"
            height="1000"
            className="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[5/6]"
          />
          <div className="absolute -bottom-6 right-4 hidden bg-sand px-7 py-5 sm:block lg:-right-8">
            <p className="eyebrow !text-charcoal">{site.city}</p>
            <p className="mt-1 font-serif text-2xl">{site.region}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:pl-4">
          <p className="eyebrow">About {site.name}</p>
          <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            The little details make a house feel like <span className="italic text-olive">home.</span>
          </h2>
          <div className="mt-7 space-y-5 text-base leading-[1.8] text-charcoal/75 md:text-lg">
            <p>
              At {site.name}, we believe the little details make a house feel like home. Discover a variety of home
              furnishing essentials for your bedrooms, living spaces and everyday comfort.
            </p>
            <p>
              Our showroom in {site.city} brings together carpets, mattresses, blankets, curtains, bedsheets, cushions
              and more, so you can see and feel each piece in person before you choose.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-9 inline-block border-b border-charcoal pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-olive hover:text-olive"
          >
            Plan your visit
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
