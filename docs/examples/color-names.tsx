import {
  isBrightBackground,
  hexToRgb,
} from '@site/helpers/is-bright-background'
import libreColors from '@site/colors/names.json'
import styles from './color-book.module.css'

const groupMap = libreColors.groups.reduce((obj, group) => {
  const name = group.name.toLowerCase()
  obj[name] = group
  return obj
}, {})

export function ColorNames(props) {
  const { type = 'libretone' } = props
  const group = groupMap[type]
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
                    backgroundColor: color.value, // `var(--${accent.toLowerCase()}-9)`,
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
