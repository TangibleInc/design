import path from 'node:path'
import {
  readdir as readDir,
  readFile,
  writeFile,
  exists,
  mkdir
} from 'node:fs/promises'

const srcExamplesPath = '../../lib/examples'

try {
  const files = await readDir(srcExamplesPath, {
    withFileTypes: true,
  })
  for (const file of files) {
    if (!file.isDirectory()) continue
    const { name } = file
    
    const srcPath = path.join(srcExamplesPath, name, 'index.tsx')
    const destPath = path.join(name, 'index.mdx')
    
    if (!await exists(srcPath)) continue
    
    console.log(name)
    await mkdir(name, {
      recursive: true // Doesn't throw when it already exists
    })

    const title = name[0].toUpperCase() + name.slice(1).replace(/-/g, ' ')

    await writeFile(destPath, `import Example from '@site/docs/lib/examples/${name}'

# ${title}

<Example />
`)
    // console.log('Wrote to', destPath)
  }
} catch (err) {
  console.error(err)
}
