import path from 'node:path'
import {
  readdir as readDir,
  readFile,
  writeFile,
  exists,
} from 'node:fs/promises'

try {
  const files = await readDir('.', {
    withFileTypes: true,
  })
  for (const file of files) {
    if (!file.isDirectory()) continue
    console.log(file.name)
    const srcPath = path.join(file.name, 'index.html')
    const destPath = path.join(file.name, 'index.tsx')

    if (!(await exists(srcPath))) continue

    let content = await readFile(srcPath, 'utf8')
    let parts = content.split(' class="')
    content = ''
    while (parts.length) {
      let part = parts.shift()

      if (!parts[0]) {
        // No next part
        content += part
        continue
      }

      content += `${part} className={\``

      // Extract classes from next part
      part = parts[0] ?? ''

      const pos = part?.indexOf('"')
      const first = part.slice(0, pos)
      const rest = part.slice(pos + 1)

      // Add prefix to classes
      content += `${first
        .split(' ')
        .map((i) => `\${prefix}${i}`)
        .join(' ')}\`}`

      parts[0] = rest
    }

    parts = content.split(` tabindex="`)
    content = ''
    while (parts.length) {
      let part = parts.shift()

      if (!parts[0]) {
        // No next part
        content += part
        continue
      }

      content += `${part} tabIndex={`

      // Extract classes from next part
      part = parts[0] ?? ''

      const pos = part?.indexOf('"')
      const first = part.slice(0, pos)
      const rest = part.slice(pos + 1)

      content += `${first}\}`

      parts[0] = rest
    }


    content = `import React from 'react'
export default function AlertsExample({
  prefix = 't-' // or ''
}) {
  return (
    <>
      ${content
        .replace(/<br>/g, '<br />')
        .replace(/hreflang="/g, 'hrefLang="')
      }
    </>
  )
}
`

    await writeFile(destPath, content)
    console.log('Wrote to', destPath)
  }
} catch (err) {
  console.error(err)
}
