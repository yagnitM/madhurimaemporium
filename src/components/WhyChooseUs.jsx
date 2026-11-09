import { Container, Reveal } from './ui'

// Editable copy. Keep claims factual — no superlatives that can't be verified.
const reasons = [
  {
    title: 'A variety of home furnishing essentials',
    text: 'From carpets and curtains to bedsheets and cushions, find what your home needs in one place.',
  },
  {
    title: 'Choices for different styles and budgets',
    text: 'Browse a range that suits different tastes, spaces and budgets.',
  },
  {
    title: 'Products for everyday comfort',
    text: 'Furnishings for sleeping, sitting and living comfortably, every single day.',
  },
  {
    title: 'Personal assistance in the store',
    text: 'Not sure what suits your room? Visit us and we will help you choose.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-olive py-20 text-ivory md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow !text-sand">Why Choose Us</p>
          <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">A better way to shop for your home</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ivory/80">
            Furnishing a home is personal. Come in, take your time and find pieces that feel right.
          </p>
        </Reveal>

        <ol className="lg:col-span-8">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 0.08} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ivory/25 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_1fr] sm:py-9 sm:first:pt-0">
              <span className="font-serif text-4xl italic text-sand sm:text-5xl">0{i + 1}</span>
              <div>
                <h3 className="text-2xl sm:text-[1.7rem]">{r.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-ivory/80">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
