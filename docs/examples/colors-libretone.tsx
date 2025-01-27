import { isBrightBackground, hexToRgb } from '@site/helpers/is-bright-background'
import libreColors from '@site/color-sets/libretone.json'

const groupMap = libreColors.groups.reduce((obj, group) => {
  const name = group.name.toLowerCase()
  obj[name] = group
  return obj
}, {})

// console.log(
//   libreColors.groups
//     .map(
//       (g) => `## ${g.name}\n\n<ColorsWeb type="${g.name.toLowerCase()}" />\n`
//     )
//     .join('\n')
// )

export function ColorsLibretone(props) {
  const { type = 'libretone' } = props
  const group = groupMap[type]
  if (!group) return <>Group not found: {type}</>
  return (
    <div className="t-design t-Box t-mt-5 t-mb-8">
      <div className="t-Flex t-fd-column t-gap-5">
        <div className="t-Grid t-gtc-8  xs:t-gtc-6 sm:t-gtc-9 t-cg-1 t-rg-3">
          {group.colors.map((color) => (
            <div key={color} className="t-Box t-fg-1">
              <div
                style={
                  {
                    '--height': '48px',
                    backgroundColor: color.value, // `var(--${accent.toLowerCase()}-9)`,
                    borderRadius: 'var(--radius-1)',
                    // "--height: 48px; background-color: var(--gray-9); border-radius: var(--radius-1);"
                  } as React.CSSProperties
                }
                className="t-Box t-h t-mb-1"
              ></div>
              <div className="t-Text t-size-2 t-ta-center">{color.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
