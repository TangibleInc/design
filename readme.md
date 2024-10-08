# Design

The Design library provides building blocks for creating design systems. A toolbox of consistent design elements and user-interface components, built up from a shared set of design tokens. As a starting point for theming, it's meant to be transparent with clean and generic styles.

It is a modular, embeddable, customizable library with **local styles and scripts**. Features can be loaded individually without affecting the global CSS styling. Suitable for use with WordPress plugins, frontend UI or admin screen, where there is already a global stylesheet. It can also be used as a full site theming solution when built with no CSS class prefix.

It is a Sass-first library for importing parts as needed, and using variables to customize the design tokens and component styles. Prefer to use **Sass variables, mixins, placeholders** that only produce any CSS when they're used. That can help reduce the amount of unused CSS classes and variables (custom properties).

The entire design system can be represented in JSON format for use with JavaScript/TypeScript/React, and potentially visual builders and design tools such as Figma.

## Document

The library is developed as part of a living [documentation site](https://design.tangible.one).

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

It serves the `build` directory at http://localhost:3000/design. It also builds files (CSS/JS), then watches for changes to rebuild and reload the site. Press CTRL + C to stop.

### Build for production

Build and minify files for production.

```sh
npm run build
```
