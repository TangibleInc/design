# Design

The Design library provides the building blocks for creating design systems.

It is a modular, embeddable, customizable library based on a rewrite of Bootstrap into local styles and scripts. Its features can be loaded individually without affecting the global CSS styling. Suitable for use with WordPress plugins, such as frontend UI or admin screen, where there is already a global stylesheet. It can also be used as a full site theming solution when built with no CSS class prefix.

It is a "Sass first" library, meant for importing parts as needed, using variables to customize design tokens and component styles. Unlike Bootstrap, which bundles a large amount of unused CSS variables and classes, prefer to use **Sass variables, mixins, placeholders** that are only bundled in the stylesheet when used.

## Changes

### Document

Develop the library as part of a living [documentation site](https://tangibleinc.github.io/design).

### Modularize

- [x] Local styles
  - [x] Prefix all CSS variables
  - [x] Prefix all `data-` attributes
  - [x] Prefix all classes
- [x] Local scripts
  - [x] Wrap all components
  - [x] Pass Base module to factory function instead of importing it, so they can be compiled and loaded individually
  - [x] Pass optional CSS class prefix
  - [x] Use only `data-` attribute interface for components, instead of jQuery plugins
- [x] Create Reset module from style reboot
- [x] Create Base module for shared styles and script

## Develop

Prerequisites: [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) (version 18 and above) or [Bun](https://bun.sh)

### Install

Clone the Git repository, and install dependencies.

```sh
git clone git@github.com:tangibleinc/design
cd design
npm install
```

### Develop

Start the Docusaurus script.

```sh
npm run start
```

It serves the `build` directory at http://localhost:3000/design. It also builds files (CSS/JS), then watches for changes to rebuild and reload the site.

Press CTRL + C to stop.

### Build for production

Build and minify files

```sh
npm run build
```
