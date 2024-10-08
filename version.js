/**
 * Update version of all published packages
 */
import fs from 'node:fs/promises'
;(async () => {
  const version = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const versionWithDots = version.slice(0, 4) + '.' + version.slice(4, 6) + '.' + version.slice(6, 8)
  console.log('Version', versionWithDots)

  for (const file of [
    'base.ts',
    'index.php',
    'package.json',
    'plugin.php',
  ]) {

    console.log('Update', file)

    // YYYYMMDD

    const content = (await fs.readFile(file, 'utf8'))
      .replace(/\$version = '[0-9]{8}'/, `$version = '${version}'`)
      .replace(/"version": "[0-9]{4}\.[0-9]{2}\.[0-9]{2}"/, `"version": "${versionWithDots}"`)
      .replace(/ = '[0-9]{4}\.[0-9]{2}\.[0-9]{2}'/, ` = '${versionWithDots}'`)
      .replace(/Version: [0-9]{4}\.[0-9]{2}\.[0-9]{2}/, `Version: ${versionWithDots}`)
      // .replace(/return '[0-9]{8}'/, `return '${version}'`)
      // .replace(/'version' => '[0-9]{8}'/, `'version' => '${version}'`)

    // console.log(content)

    await fs.writeFile(file, content)
  }
})().catch(console.error)
