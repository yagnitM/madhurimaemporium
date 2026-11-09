// Product categories shown in the "Our Collection" grid.
// Set `visible: false` to hide a category the shop does not stock.
// To use a real photo, drop it into public/images/categories/ and update `image`.

export const categories = [
  {
    id: 'carpets-rugs',
    title: 'Carpets & Rugs',
    description: 'Carpets and rugs to add warmth and character to living rooms and bedrooms.',
    image: '/images/categories/carpets-rugs.svg',
    alt: 'Placeholder image for carpets and rugs',
    visible: true,
  },
  {
    id: 'mattresses',
    title: 'Mattresses',
    description: 'Mattresses for restful nights and everyday comfort.',
    image: '/images/categories/mattresses.jpeg',
    alt: 'Placeholder image for mattresses',
    visible: true,
  },
  {
    id: 'blankets',
    title: 'Blankets',
    description: 'Soft blankets for cosy evenings and cooler seasons.',
    image: '/images/categories/blankets.jpeg',
    alt: 'Placeholder image for blankets',
    visible: true,
  },
  {
    id: 'curtains',
    title: 'Curtains',
    description: 'Curtains that dress your windows and set the mood of a room.',
    image: '/images/categories/curtains.svg',
    alt: 'Placeholder image for curtains',
    visible: true,
  },
  {
    id: 'bedsheets',
    title: 'Bedsheets',
    description: 'Bedsheets in a variety of colours and patterns for every bedroom.',
    image: '/images/categories/bedsheets.jpeg',
    alt: 'Placeholder image for bedsheets',
    visible: true,
  },
  {
    id: 'cushions-pillows',
    title: 'Cushions & Pillows',
    description: 'Cushions and pillows for the finishing touch on sofas and beds.',
    image: '/images/categories/pillows.jpeg',
    alt: 'Placeholder image for cushions and pillows',
    visible: true,
  },
]

export const visibleCategories = categories.filter((c) => c.visible)
