export const accents = [
  'Gray',
  'Gold',
  'Bronze',
  'Brown',
  'Yellow',
  'Amber',
  'Orange',
  'Tomato',
  'Red',
  'Ruby',
  'Crimson',
  'Pink',
  'Plum',
  'Purple',
  'Violet',
  'Iris',
  'Indigo',
  'Blue',
  'Cyan',
  'Teal',
  'Jade',
  'Green',
  'Grass',
  'Lime',
  'Mint',
  'Sky',
]

export default function ColorsAccents() {
  return (
    <div className="t-design t-Box t-mt-5 t-mb-8">
      <div className="t-Flex t-fd-column t-gap-5">
        <div className="t-Grid t-gtc-4 xs:t-gtc-6 sm:t-gtc-9 t-cg-1 t-rg-3">
          {accents.map((accent) => (
            <div className="t-Box t-fg-1">
              <div
                style={
                  {
                    '--height': '48px',
                    backgroundColor: `var(--${accent.toLowerCase()}-9)`,
                    borderRadius: 'var(--radius-1)',
                    // "--height: 48px; background-color: var(--gray-9); border-radius: var(--radius-1);"
                  } as React.CSSProperties
                }
                className="t-Box t-h t-mb-1"
              ></div>
              <div className="t-Text t-size-2 t-ta-center">{accent}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
