import React, { useEffect, useState } from 'react'
import styles from './color-book.module.css'

type Color = {
  name: string
  label: string
  hex: string
}

export default function ColorBook({ colors = [] }: { colors: Color[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.grid}>
          {colors.map((color) => (
            <div key={color.name} className={styles.item}>
              <div
                style={
                  {
                    '--height': '48px',
                    backgroundColor: color.hex, // `var(--${accent.toLowerCase()}-9)`,
                    borderRadius: 'var(--radius-1)',
                    // "--height: 48px; background-color: var(--gray-9); border-radius: var(--radius-1);"
                  } as React.CSSProperties
                }
                className={styles.itemColor}
              ></div>
              <div className={styles.itemLabel}>{color.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
