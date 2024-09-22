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

Prerequisites: [Git](https://git-scm.com/) and [Node](https://nodejs.org/en/) (minimum version 18)

### Install

Clone the Git repository, and install dependencies.

```sh
git clone git@github.com:tangibleinc/design tangible-design
cd tangible-design
npm install
```

### Develop

Start a minimal static file server.

```sh
npm run start
```

It serves the `build` directory at `http://localhost:3535`. It also builds files (CSS/JS), then watches for changes to rebuild and reload the site.

Press CTRL + C to stop.

### Build for production

Build and minify files

```sh
npm run build
```

### Update version

The following command runs the script `version.js` to update the version number in some files.

```sh
npm run version
```

## Local WordPress site for development

For local development, the module can run as a standalone WordPress plugin. In that case, it adds an admin menu *Tangible -&gt; Design*, which currently shows a test page for HTML5 elements.

Start the server.

```sh
npm run wp
```

It opens a browser at `http://localhost:8881` and logs you in automatically. Test user is `admin` with `password`.

Press CTRL + C to stop.

This method is the easiest way to serve a local WordPress site without installing anything. It uses [wp-now](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now) and [WordPress Playground](https://wordpress.org/playground/). You're free to use any other way to run a local server.

For convenience, this command also starts the development build script described above.
