import { isBrightBackground, hexToRgb } from '@site/helpers/is-bright-background'
import webColors from '@site/colors/web.json'
import styles from './color-book.module.css'

const webColorGroupMap = webColors.groups.reduce((obj, group) => {
  const name = group.name.toLowerCase()
  obj[name] = group
  return obj
}, {})

// console.log(
//   webColors.groups
//     .map(
//       (g) => `## ${g.name}\n\n<ColorsWeb type="${g.name.toLowerCase()}" />\n`
//     )
//     .join('\n')
// )

export function ColorsWeb(props) {
  const { type } = props
  const group = webColorGroupMap[type]
  if (!group) return <>Group not found: {type}</>
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.grid}>
          {group.colors.map((color) => (
            <div key={color.name} className={styles.item}>
              <div
                className={styles.itemColor}
                style={
                  {
                    '--height': '48px',
                    backgroundColor: color.value, // `var(--${accent.toLowerCase()}-9)`,
                    borderRadius: 'var(--radius-1)',
                    // "--height: 48px; background-color: var(--gray-9); border-radius: var(--radius-1);"
                  } as React.CSSProperties
                }
              ></div>
              <div className={styles.itemLabel}>{color.name}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* <div className="t-Flex t-fd-column t-gap-5">
      <div className="t-Grid t-gtc-1 t-cg-0 t-rg-0 t-ta-center">
        {group.colors.map((color) => (
          <div>
            <div
              style={{
                padding: '.5rem',
                // height: '3rem',
                backgroundColor: color.name,
                // borderRadius: '.25rem',
                color: isBrightBackground(color.value) ? '#000000' : '#ffffff',
                fontSize: `var(--font-size-3)`,
                fontFamily: `var(--code-font-family)`,
                textAlign: 'center',
              }}
            >
              {color.name}
            </div>
             {color.title}
            <br />
            <small>{color.value}</small>
            {' '}
            <small>rgb({hexToRgb(color.value).join(', ')})</small></div>
        ))}
      </div>
    </div> */