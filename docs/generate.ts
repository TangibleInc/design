import path from 'path'
import fs from 'fs/promises'

const modules = [
  [
    "Accordion",
    "accordion"
  ],
  [
    "Alerts",
    "alerts"
  ],
  [
    "Badge",
    "badge"
  ],
  [
    "Breadcrumb",
    "breadcrumb"
  ],
  [
    "Buttons",
    "buttons"
  ],
  [
    "Button group",
    "button-group"
  ],
  [
    "Card",
    "card"
  ],
  [
    "Carousel",
    "carousel"
  ],
  [
    "Close button",
    "close-button"
  ],
  [
    "Collapse",
    "collapse"
  ],
  [
    "Dropdowns",
    "dropdowns"
  ],
  [
    "List group",
    "list-group"
  ],
  [
    "Modal",
    "modal"
  ],
  [
    "Navbar",
    "navbar"
  ],
  [
    "Offcanvas",
    "offcanvas"
  ],
  [
    "Pagination",
    "pagination"
  ],
  [
    "Placeholders",
    "placeholders"
  ],
  [
    "Popovers",
    "popovers"
  ],
  [
    "Progress",
    "progress"
  ],
  [
    "Scrollspy",
    "scrollspy"
  ],
  [
    "Spinners",
    "spinners"
  ],
  [
    "Tabs",
    "tabs"
  ],
  [
    "Toasts",
    "toasts"
  ],
  [
    "Tooltips",
    "tooltips"
  ]
]

const modulesPath = path.join(process.cwd(), 'pages/modules')

for (const [title, name] of modules) {
  const markdownPath = `${modulesPath}/${name}.md`
  console.log(`${name}.md`)

  await fs.writeFile(markdownPath, `# ${title}\n\n`)
}