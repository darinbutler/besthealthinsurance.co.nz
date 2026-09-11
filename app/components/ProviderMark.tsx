/**
 * ProviderMark
 *
 * A neutral typographic mark for an insurer, used wherever a provider is
 * presented as a card or a page header.
 *
 * Why not the insurer's actual logo: their logos are trademarks and we hold
 * no licence to reproduce them. Nominative use is usually defensible, but on
 * a site that refers enquiries for commission it is the kind of thing an
 * insurer can reasonably object to, and one of them already has this year.
 * A monogram in their brand colour reads as a reference to them rather than
 * an endorsement by them.
 *
 * Why not emoji: a stethoscope or a flexed arm says nothing about an insurer,
 * renders differently on every platform, and undercuts the credibility of a
 * page that is otherwise citing published policy documents.
 *
 * `color` comes from PROVIDERS in data/site.ts and approximates each
 * insurer's primary brand colour. Monograms follow each insurer's own
 * capitalisation, which is why nib is lower case.
 */

const MONOGRAMS: Record<string, string> = {
  'nib': 'nib',
  'AIA': 'AIA',
  'UniMed': 'UM',
  'Partners Life': 'PL',
  'Southern Cross': 'SC',
}

function monogramFor(name: string) {
  if (MONOGRAMS[name]) return MONOGRAMS[name]
  // Fall back to initials of the first two words, so a new provider added to
  // PROVIDERS still renders sensibly without touching this file.
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

const SIZES = {
  sm: { box: 'w-12 h-12 rounded-xl', text: 'text-sm' },
  md: { box: 'w-14 h-14 rounded-xl', text: 'text-base' },
  lg: { box: 'w-20 h-20 rounded-2xl', text: 'text-2xl' },
}

export default function ProviderMark({
  name,
  color,
  size = 'md',
  onDark = false,
}: {
  name: string
  color: string
  size?: 'sm' | 'md' | 'lg'
  onDark?: boolean
}) {
  const s = SIZES[size]
  const mono = monogramFor(name)

  return (
    <div
      aria-hidden="true"
      className={`${s.box} flex items-center justify-center font-extrabold tracking-tight flex-shrink-0 border`}
      style={{
        // Brand colour at low opacity so five cards in a row stay calm rather
        // than competing with each other.
        backgroundColor: onDark ? `${color}26` : `${color}14`,
        borderColor: onDark ? `${color}4D` : `${color}2E`,
        color: onDark ? '#ffffff' : color,
      }}
    >
      <span className={s.text}>{mono}</span>
    </div>
  )
}
