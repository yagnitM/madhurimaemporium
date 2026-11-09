// Generates clearly-labelled SVG placeholder images in the warm brand palette.
// Run: node scripts/generate-placeholders.mjs
// Replace the generated files with real photographs (see README.md).
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')

const C = {
  ivory: '#F7F4EF',
  sand: '#D8C8B5',
  sandDark: '#C4B09A',
  olive: '#747A63',
  oliveLight: '#9CA18B',
  charcoal: '#292929',
  mist: '#E8E5DF',
  clay: '#B48F77',
  white: '#FFFFFF',
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const svg = (w, h, body, rawLabel) => svgInner(w, h, body, rawLabel, esc(rawLabel))

const svgInner = (w, h, body, label, safe) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${safe}">
${body}
<g transform="translate(24 ${h - 56})">
  <rect width="${Math.min(w - 48, 20 + label.length * 9.2)}" height="32" rx="2" fill="${C.charcoal}" opacity="0.82"/>
  <text x="14" y="21" font-family="Arial, Helvetica, sans-serif" font-size="13" letter-spacing="1.2" fill="#fff">${esc(label.toUpperCase())}</text>
</g>
</svg>
`

const write = (folder, name, content) => {
  const dir = join(root, folder)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, name), content)
}

/* ---------- reusable motifs ---------- */
const stripes = (x, y, w, h, colors, count) => {
  const bh = h / count
  return Array.from({ length: count }, (_, i) =>
    `<rect x="${x}" y="${y + i * bh}" width="${w}" height="${bh}" fill="${colors[i % colors.length]}"/>`).join('')
}

const curtain = (x, y, w, h, color, dark) => {
  const folds = Math.round(w / 38)
  const fw = w / folds
  return Array.from({ length: folds }, (_, i) =>
    `<rect x="${x + i * fw}" y="${y}" width="${fw}" height="${h}" fill="${i % 2 ? color : dark}"/>`).join('') +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#shade)" opacity="0.18"/>`
}

const shadeDef = `<defs><linearGradient id="shade" x1="0" x2="1"><stop offset="0" stop-color="#000"/><stop offset="0.5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000"/></linearGradient></defs>`

const rugPattern = (x, y, w, h) => {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.olive}"/>`
  s += `<rect x="${x + 24}" y="${y + 24}" width="${w - 48}" height="${h - 48}" fill="${C.ivory}"/>`
  s += `<rect x="${x + 44}" y="${y + 44}" width="${w - 88}" height="${h - 88}" fill="${C.sand}"/>`
  const cx = x + w / 2, cy = y + h / 2
  for (let i = 5; i >= 1; i--) {
    const k = i * 0.17
    s += `<polygon points="${cx},${cy - (h / 2 - 60) * k * 1.4} ${cx + (w / 2 - 60) * k * 1.4},${cy} ${cx},${cy + (h / 2 - 60) * k * 1.4} ${cx - (w / 2 - 60) * k * 1.4},${cy}" fill="${i % 2 ? C.olive : C.ivory}" opacity="${i % 2 ? 0.9 : 1}"/>`
  }
  for (let i = 0; i < Math.floor(w / 14); i++) {
    s += `<line x1="${x + 7 + i * 14}" y1="${y}" x2="${x + 7 + i * 14}" y2="${y - 16}" stroke="${C.ivory}" stroke-width="3"/>`
    s += `<line x1="${x + 7 + i * 14}" y1="${y + h}" x2="${x + 7 + i * 14}" y2="${y + h + 16}" stroke="${C.ivory}" stroke-width="3"/>`
  }
  return s
}

/* ---------- HERO ---------- */
const hero = () => {
  const w = 1600, h = 1200
  let b = shadeDef
  b += `<rect width="${w}" height="${h}" fill="${C.mist}"/>`
  b += `<rect width="${w}" height="830" fill="${C.ivory}"/>`
  b += `<rect y="830" width="${w}" height="370" fill="${C.sandDark}"/>`
  // window
  b += `<rect x="1040" y="150" width="400" height="520" fill="#FBFAF7"/>`
  b += `<rect x="1040" y="150" width="400" height="520" fill="none" stroke="${C.sand}" stroke-width="10"/>`
  b += `<line x1="1240" y1="150" x2="1240" y2="670" stroke="${C.sand}" stroke-width="8"/>`
  b += `<line x1="1040" y1="410" x2="1440" y2="410" stroke="${C.sand}" stroke-width="8"/>`
  b += `<rect x="990" y="120" width="500" height="10" fill="${C.charcoal}" opacity="0.7"/>`
  b += curtain(1000, 130, 150, 640, C.oliveLight, C.olive)
  b += curtain(1340, 130, 150, 640, C.oliveLight, C.olive)
  // headboard + bed
  b += `<rect x="160" y="330" width="760" height="360" rx="14" fill="${C.clay}"/>`
  b += `<rect x="190" y="360" width="700" height="300" rx="8" fill="${C.sandDark}" opacity="0.55"/>`
  b += `<rect x="130" y="640" width="820" height="260" rx="10" fill="${C.white}"/>`
  b += `<rect x="130" y="760" width="820" height="140" fill="${C.olive}"/>`
  b += stripes(130, 760, 820, 140, [C.olive, C.oliveLight], 1)
  b += `<rect x="130" y="750" width="820" height="26" fill="${C.ivory}"/>`
  b += `<rect x="220" y="560" width="250" height="110" rx="30" fill="${C.ivory}" stroke="${C.mist}" stroke-width="3"/>`
  b += `<rect x="560" y="560" width="250" height="110" rx="30" fill="${C.ivory}" stroke="${C.mist}" stroke-width="3"/>`
  b += `<rect x="440" y="620" width="200" height="90" rx="22" fill="${C.sand}"/>`
  b += `<rect x="130" y="900" width="820" height="26" fill="${C.charcoal}" opacity="0.15"/>`
  // rug
  b += rugPattern(300, 950, 880, 180)
  // lamp
  b += `<rect x="1000" y="690" width="14" height="140" fill="${C.charcoal}" opacity="0.6"/>`
  b += `<polygon points="965,690 1050,690 1030,630 985,630" fill="${C.sand}"/>`
  return svg(w, h, b, 'Placeholder · lifestyle reference image')
}

/* ---------- CATEGORIES ---------- */
const catCarpets = () => {
  const w = 900, h = 1100
  let b = `<rect width="${w}" height="${h}" fill="${C.mist}"/>`
  b += `<rect y="760" width="${w}" height="340" fill="${C.sandDark}" opacity="0.5"/>`
  b += rugPattern(120, 250, 660, 520)
  return svg(w, h, b, 'Placeholder · carpets & rugs')
}

const catMattress = () => {
  const w = 900, h = 1100
  let b = `<rect width="${w}" height="${h}" fill="${C.ivory}"/>`
  b += `<rect y="820" width="${w}" height="280" fill="${C.mist}"/>`
  b += `<rect x="100" y="640" width="700" height="60" rx="6" fill="${C.clay}"/>`
  b += `<rect x="90" y="500" width="720" height="150" rx="26" fill="${C.white}" stroke="${C.sand}" stroke-width="4"/>`
  for (let i = 1; i < 9; i++) b += `<line x1="${90 + i * 80}" y1="506" x2="${90 + i * 80}" y2="644" stroke="${C.sand}" stroke-width="2"/>`
  for (let i = 1; i < 3; i++) b += `<line x1="96" y1="${500 + i * 50}" x2="804" y2="${500 + i * 50}" stroke="${C.sand}" stroke-width="2"/>`
  b += `<rect x="130" y="380" width="260" height="120" rx="34" fill="${C.ivory}" stroke="${C.sand}" stroke-width="3"/>`
  b += `<rect x="110" y="700" width="30" height="120" fill="${C.charcoal}" opacity="0.5"/>`
  b += `<rect x="760" y="700" width="30" height="120" fill="${C.charcoal}" opacity="0.5"/>`
  return svg(w, h, b, 'Placeholder · mattresses')
}

const catBlankets = () => {
  const w = 900, h = 1100
  let b = `<rect width="${w}" height="${h}" fill="${C.mist}"/>`
  const layers = [
    [C.olive, 770], [C.sand, 650], [C.ivory, 530], [C.clay, 410], [C.oliveLight, 290],
  ]
  layers.forEach(([c, y], i) => {
    b += `<rect x="${130 + (i % 2) * 20}" y="${y}" width="640" height="120" rx="8" fill="${c}"/>`
    b += `<rect x="${130 + (i % 2) * 20}" y="${y + 80}" width="640" height="14" fill="#fff" opacity="0.35"/>`
    b += `<rect x="${130 + (i % 2) * 20}" y="${y + 100}" width="640" height="8" fill="#000" opacity="0.08"/>`
  })
  return svg(w, h, b, 'Placeholder · blankets')
}

const catCurtains = () => {
  const w = 900, h = 1100
  let b = shadeDef + `<rect width="${w}" height="${h}" fill="${C.ivory}"/>`
  b += `<rect x="250" y="260" width="400" height="620" fill="#FBFAF7" stroke="${C.sand}" stroke-width="8"/>`
  b += `<line x1="450" y1="260" x2="450" y2="880" stroke="${C.sand}" stroke-width="6"/>`
  b += `<rect x="130" y="190" width="640" height="12" rx="6" fill="${C.charcoal}" opacity="0.75"/>`
  b += curtain(150, 205, 190, 800, C.sand, C.sandDark)
  b += curtain(560, 205, 190, 800, C.sand, C.sandDark)
  b += `<rect y="1005" width="${w}" height="95" fill="${C.mist}"/>`
  return svg(w, h, b, 'Placeholder · curtains')
}

const catBedsheets = () => {
  const w = 900, h = 1100
  let b = `<rect width="${w}" height="${h}" fill="${C.mist}"/>`
  b += `<path d="M0 260 C 220 180 420 340 900 230 L900 520 C 520 620 300 440 0 540 Z" fill="${C.ivory}"/>`
  b += `<path d="M0 540 C 300 440 520 620 900 520 L900 760 C 560 860 320 700 0 800 Z" fill="${C.olive}"/>`
  b += `<path d="M0 800 C 320 700 560 860 900 760 L900 1000 C 600 1090 340 930 0 1040 Z" fill="${C.sand}"/>`
  b += `<path d="M0 540 C 300 440 520 620 900 520" fill="none" stroke="#fff" stroke-width="10" opacity="0.5"/>`
  b += `<path d="M0 800 C 320 700 560 860 900 760" fill="none" stroke="#fff" stroke-width="8" opacity="0.4"/>`
  return svg(w, h, b, 'Placeholder · bedsheets')
}

const catCushions = () => {
  const w = 900, h = 1100
  let b = `<rect width="${w}" height="${h}" fill="${C.ivory}"/>`
  b += `<rect y="700" width="${w}" height="400" fill="${C.mist}"/>`
  b += `<rect x="60" y="520" width="780" height="300" rx="30" fill="${C.sandDark}"/>`
  b += `<rect x="80" y="560" width="740" height="150" rx="24" fill="${C.sand}"/>`
  b += `<rect x="130" y="330" width="250" height="250" rx="46" fill="${C.olive}"/>`
  b += `<rect x="330" y="360" width="250" height="230" rx="46" fill="${C.white}" stroke="${C.sand}" stroke-width="4"/>`
  b += `<rect x="520" y="340" width="250" height="250" rx="46" fill="${C.clay}"/>`
  for (let i = 0; i < 5; i++) b += `<line x1="${160 + i * 40}" y1="350" x2="${160 + i * 40}" y2="560" stroke="${C.oliveLight}" stroke-width="5"/>`
  return svg(w, h, b, 'Placeholder · cushions & pillows')
}

/* ---------- GALLERY ---------- */
const galExterior = () => {
  const w = 1200, h = 900
  let b = `<rect width="${w}" height="${h}" fill="${C.mist}"/>`
  b += `<rect x="100" y="180" width="1000" height="560" fill="${C.sand}"/>`
  b += `<rect x="100" y="180" width="1000" height="90" fill="${C.olive}"/>`
  b += `<text x="600" y="240" text-anchor="middle" font-family="Georgia, serif" font-size="44" fill="${C.ivory}" letter-spacing="4">STORE NAME BOARD</text>`
  b += `<rect x="170" y="330" width="380" height="330" fill="${C.ivory}" stroke="${C.sandDark}" stroke-width="6"/>`
  b += `<rect x="650" y="330" width="380" height="330" fill="${C.ivory}" stroke="${C.sandDark}" stroke-width="6"/>`
  b += `<rect x="540" y="320" width="120" height="420" fill="${C.charcoal}" opacity="0.8"/>`
  b += `<rect y="740" width="${w}" height="160" fill="${C.sandDark}" opacity="0.7"/>`
  return svg(w, h, b, 'Placeholder · store exterior photo')
}

const galShelves = () => {
  const w = 1000, h = 1000
  let b = `<rect width="${w}" height="${h}" fill="${C.ivory}"/>`
  const cols = [C.olive, C.sand, C.clay, C.oliveLight, C.mist, C.sandDark]
  for (let r = 0; r < 4; r++) {
    const y = 120 + r * 210
    b += `<rect x="80" y="${y + 160}" width="840" height="12" fill="${C.charcoal}" opacity="0.55"/>`
    for (let i = 0; i < 6; i++) {
      b += `<rect x="${100 + i * 135}" y="${y + 60 + (i % 2) * 14}" width="120" height="${100 - (i % 2) * 14}" rx="4" fill="${cols[(i + r) % 6]}"/>`
      b += `<rect x="${100 + i * 135}" y="${y + 110}" width="120" height="6" fill="#fff" opacity="0.4"/>`
    }
  }
  return svg(w, h, b, 'Placeholder · showroom interior photo')
}

const galRolled = () => {
  const w = 1200, h = 800
  let b = `<rect width="${w}" height="${h}" fill="${C.mist}"/>`
  b += `<rect y="600" width="${w}" height="200" fill="${C.sandDark}" opacity="0.6"/>`
  const cols = [C.olive, C.sand, C.clay, C.oliveLight, C.ivory, C.sandDark, C.olive]
  cols.forEach((c, i) => {
    const x = 110 + i * 150
    b += `<rect x="${x}" y="${220 + (i % 3) * 30}" width="110" height="${400 - (i % 3) * 30}" fill="${c}"/>`
    b += `<ellipse cx="${x + 55}" cy="${220 + (i % 3) * 30}" rx="55" ry="18" fill="${C.ivory}"/>`
    b += `<ellipse cx="${x + 55}" cy="${220 + (i % 3) * 30}" rx="30" ry="9" fill="${c}"/>`
  })
  return svg(w, h, b, 'Placeholder · rolled carpets display photo')
}

const galBedding = () => {
  const w = 1000, h = 1200
  let b = `<rect width="${w}" height="${h}" fill="${C.ivory}"/>`
  b += `<rect y="900" width="${w}" height="300" fill="${C.mist}"/>`
  b += `<rect x="140" y="560" width="720" height="340" rx="14" fill="${C.white}" stroke="${C.sand}" stroke-width="4"/>`
  b += `<rect x="140" y="700" width="720" height="200" fill="${C.olive}"/>`
  b += `<rect x="140" y="690" width="720" height="28" fill="${C.ivory}"/>`
  b += `<rect x="190" y="470" width="260" height="120" rx="34" fill="${C.sand}"/>`
  b += `<rect x="550" y="470" width="260" height="120" rx="34" fill="${C.sand}"/>`
  b += `<rect x="310" y="410" width="380" height="110" rx="30" fill="${C.clay}"/>`
  return svg(w, h, b, 'Placeholder · bedding display photo')
}

const galCurtains = () => {
  const w = 1200, h = 800
  let b = shadeDef + `<rect width="${w}" height="${h}" fill="${C.ivory}"/>`
  b += `<rect x="80" y="90" width="1040" height="10" rx="5" fill="${C.charcoal}" opacity="0.7"/>`
  const sets = [[C.sand, C.sandDark], [C.oliveLight, C.olive], [C.mist, C.sand], [C.clay, '#9C7A64']]
  sets.forEach(([a, d], i) => { b += curtain(100 + i * 260, 100, 240, 600, a, d) })
  return svg(w, h, b, 'Placeholder · curtains display photo')
}

const galDetail = () => {
  const w = 1000, h = 1000
  let b = `<rect width="${w}" height="${h}" fill="${C.sand}"/>`
  for (let y = 0; y < h; y += 22) b += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${C.sandDark}" stroke-width="2"/>`
  for (let x = 0; x < w; x += 22) b += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${C.sandDark}" stroke-width="2" opacity="0.7"/>`
  b += `<rect x="0" y="380" width="${w}" height="120" fill="${C.olive}" opacity="0.85"/>`
  return svg(w, h, b, 'Placeholder · fabric detail photo')
}

/* ---------- write everything ---------- */
write('hero', 'hero3.jpeg', hero())
write('showroom', 'about-showroom.svg', galShelves().replace('showroom interior photo', 'about section photo'))

write('categories', 'carpets-rugs.svg', catCarpets())
write('categories', 'mattresses.jpeg', catMattress())
write('categories', 'blankets.jpeg', catBlankets())
write('categories', 'curtains.svg', catCurtains())
write('categories', 'bedsheets.jpeg', catBedsheets())
write('categories', 'pillows.jpeg', catCushions())

write('gallery', 'store-exterior.svg', galExterior())
write('gallery', 'showroom-interior.svg', galShelves())
write('gallery', 'carpet-display.svg', galRolled())
write('gallery', 'bedding-display.svg', galBedding())
write('gallery', 'curtain-display.svg', galCurtains())
write('gallery', 'fabric-detail.svg', galDetail())

console.log('Placeholders written to public/images')
