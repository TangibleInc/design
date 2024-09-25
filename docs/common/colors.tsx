import React, { useEffect, useState, useRef } from 'react'
// import Layout from '@theme/Layout'
import styles from './colors.module.scss'

const baseColors = [
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
  // 'black',
  // 'white',
  'gray',
]

const grades = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const SassVariable = ({ children }) => (
  <code style={{ color: '#fff', backgroundColor: '#000', padding: '.25rem' }}>
    {children}
  </code>
)

export default function Colors() {
  const containerRef = useRef()
  const [state, setState] = useState({
    theme: {},
    allColors: {},
  })
  useEffect(function () {
    const style = getComputedStyle(containerRef.current || document.body)
    const theme = {
      primary: style.getPropertyValue('--t-primary'),
      secondary: style.getPropertyValue('--t-secondary'),
      success: style.getPropertyValue('--t-success'),
      info: style.getPropertyValue('--t-info'),
      warning: style.getPropertyValue('--t-warning'),
      danger: style.getPropertyValue('--t-danger'),
      light: style.getPropertyValue('--t-light'),
      dark: style.getPropertyValue('--t-dark'),
    }

    const allColors: {
      [baseColor: string]: {
        [grade: number]: string
      }
    } = {}

    for (const baseColor of baseColors) {
      allColors[baseColor] = {}
      for (const grade of grades) {
        allColors[baseColor][grade] = style.getPropertyValue(
          `--t-${baseColor}-${grade}`,
        )
      }
    }

    // console.log('theme', theme)
    // console.log('styles', styles)
    // console.log('allColors', allColors)

    setState({
      theme,
      allColors,
    })
  }, [])

  return (
    <div ref={containerRef} className={styles.allColors}>
      <section>
        <h2>Theme colors</h2>
        <div className={styles.colorList}>
          {Object.keys(state.theme).map((key) => (
            <div
              className={styles.card}
              style={{ backgroundColor: state.theme[key] }}
            >
              <SassVariable>{`\$theme-color-${key}`}</SassVariable>
            </div>
          ))}
        </div>
      </section>
      {baseColors.map((baseColor) => (
        <section>
          <h2>{baseColor[0].toUpperCase() + baseColor.slice(1)}</h2>
          <div className={styles.colorList}>
            {grades.map((grade) => (
              <div
                className={styles.card}
                style={{
                  backgroundColor: state.allColors[baseColor]
                    ? state.allColors[baseColor][grade]
                    : undefined,
                }}
              >
                <SassVariable>{`\$${baseColor}-${grade}`}</SassVariable>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
    // <Layout>
    //   <main>
    //   </main>
    // </Layout>
  )
}
