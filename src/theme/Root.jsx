import React, { useEffect } from 'react'
import { Theme } from '@site/components'

/**
 * Add stateful logic that is not re-initialized across navigations
 * @see https://docusaurus.io/docs/next/swizzling#wrapper-your-site-with-root
 */
export default function Root({ children }) {
  /**
   * Sync Docusaurus theme switcher with body class
   *
   * Setting class on body to avoid infinite loop because we're
   * already watching for changes on `<html>` attributes for
   * `data-theme`.
   */
  useEffect(() => {
    const $html = document.documentElement
    const $body = document.body
    let observer = new MutationObserver(function (mutations) {
      for (const mutation of mutations) {
        if (mutation.type !== 'attributes') continue
        // console.log('Attribute changed', $html.dataset.theme)
        if ($html.dataset.theme === 'dark') {
          $body.classList.add('dark-theme')
          $body.classList.remove('light-theme')
        } else {
          $body.classList.add('light-theme')
          $body.classList.remove('dark-theme')
        }
      }
    })
    observer.observe($html, {
      attributes: true,
    })
    return () => {
      // Clean up
      observer.disconnect()
    }
  }, [])
  return (
    <Theme
      appearance="inherit"
      style={{
        // Push down footer to screen bottom
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
      }}
    >
      {children}
    </Theme>
  )
}
