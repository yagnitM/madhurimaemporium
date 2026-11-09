import { Container, Reveal } from './ui'
import CategoryCard from './CategoryCard'
import { visibleCategories } from '../data/categories'

// Editorial rhythm: wide/narrow pairs that alternate, repeating for any number of categories.
// Each entry: [column span on desktop, image aspect ratio]
const rhythm = [
  ['lg:col-span-7', 'aspect-[4/3] lg:aspect-[7/6]'],
  ['lg:col-span-5', 'aspect-[4/3] lg:aspect-[5/6]'],
  ['lg:col-span-5', 'aspect-[4/3] lg:aspect-[5/6]'],
  ['lg:col-span-7', 'aspect-[4/3] lg:aspect-[7/6]'],
  ['lg:col-span-6', 'aspect-[4/3] lg:aspect-[6/5]'],
  ['lg:col-span-6', 'aspect-[4/3] lg:aspect-[6/5]'],
]

export default function CategorySection() {
  return (
    <section id="collection" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Collection</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Everything for the rooms you live in</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            From the floor to the window to the bed, explore the home furnishing essentials available at our showroom.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 lg:grid-cols-12">
          {visibleCategories.map((c, i) => {
            const [span, aspect] = rhythm[i % rhythm.length]
            return <CategoryCard key={c.id} category={c} index={i} className={span} imageClass={aspect} />
          })}
        </div>
      </Container>
    </section>
  )
}
