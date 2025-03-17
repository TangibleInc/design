# Design Library

The Design Library includes themeable user interface components, design tokens, and styling utilities. It is written in Sass and TypeScript with React.

Website: https://design.tangible.one

Repository: https://github.com/tangibleinc/design

**Status: Draft** - Currently in research phase

## Getting started

Prerequisites: [Node](https://nodejs.org/) or [Bun](https://bun.sh/)

Install as dev dependency.

```sh
npm install -D @tangible/design
```

### Sass

```scss
@import "@tangible/design";
```

### TypeScript

```ts
import * as design from '@tangible/design'
```


## Goals

### Generic

Provide building blocks for design systems and themes.

HTML elements and React components are styled using a shared set of tokens, which can have variants and themes. Multiple themes can be combined on the same page.

Accessible by default: keyboard navigation, screen reader support.

- [ARIA Authoring Practices Guide: Patterns](https://www.w3.org/WAI/ARIA/apg/patterns)
- [Open UI](https://open-ui.org/): Research on common components across popular design systems
- [React Aria Components](https://react-spectrum.adobe.com/react-aria), [Radix UI Primitives](https://www.radix-ui.com/primitives), [Shadcn UI](https://ui.shadcn.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/): A collection of popular icon libraries to import only the ones you're using.

### Modular

Load only the features you use. Ideally the library core defines token collections in TypeScript, which generates JSON and Sass variables, functions, mixins, placeholders; then produce only the CSS variables and rules as needed.

CSS classes and custom properties are prefixed to support embedded context such as WordPress frontend and admin.

- Atomic CSS and style engines: [Tailwind](https://tailwindcss.com), [Uno](https://unocss.dev/)
- Classless CSS frameworks: [Pico](https://picocss.com/) and [many others](https://www.cssbed.com/)

### Portable

Embrace the [Design Tokens standard format](https://tr.designtokens.org/format/) (JSON) being developed by the W3C Community Group. This way shared values can be created and used across platforms, languages, and design tools.

- Design token parsers and compilers: [Style Dictionary](https://amzn.github.io/style-dictionary), [Diez](https://diez.org/)
- [Standardized Design Tokens and CSS for a consistent, customizable, and interoperable WordPress future](https://mrwweb.com/standardized-design-tokens-css-wordpress-future/)
