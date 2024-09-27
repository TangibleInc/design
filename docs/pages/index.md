---
sidebar_position: 1
---

# Overview

The Design library provides building blocks for creating design systems. It's a toolbox of consistent design elements and user-interface components.

It is a modular, embeddable, customizable library with **local styles and scripts**. Features can be loaded individually without affecting the global CSS styling. Suitable for use with WordPress plugins, frontend UI or admin screen, where there is already a global stylesheet. It can also be used as a full site theming solution when built with no CSS class prefix.

It is a "Sass first" library, meant for importing parts as needed, using variables to customize the design tokens and component styles. Unlike Bootstrap, which bundles a large amount of unused CSS variables and classes, prefer to use **Sass variables, mixins, placeholders** that only produce any CSS when they're used.

The entire design system can be represented in JSON format for use with JavaScript/TypeScript/React, and potentially visual builders and design tools such as Figma.

## Atoms

A design system is composed of a curated set of values, called atoms or design tokens.

- Background
- Borders
- Colors
- Display
- Flex
- Float
- Gradients
- Interactions - Animations, easing
- Link
- Object fit, aspect ratios
- Opacity
- Overflow
- Position
- Shadows
- Sizing
- Spacing - Margin, padding, gap
- Text - Font families, sizes, weights
- Vertical align
- Visibility
- Widths - Media query breakpoints, content widths
- Z-index

## Content

- Reset
- Typography
- Images
- Tables
- Figures

## Layout
- Breakpoints
- Containers
- Grid
- Columns
- Gutters
- Utilities
- Z-index
- CSS Grid

## Form

- Form control
- Select
- Checks & radios
- Range
- Input group
- Floating labels
- Layout
- Validation

## Components

- Accordion
- Alerts
- Badge
- Breadcrumb
- Buttons
- Button group
- Card
- Carousel
- Close button
- Collapse
- Dropdowns
- List group
- Modal
- Navbar
- Navs & tabs
- Offcanvas
- Pagination
- Placeholders
- Popovers
- Progress
- Scrollspy
- Spinners
- Toasts
- Tooltips

## Helpers

- Clearfix
- Color & background
- Colored links
- Focus ring
- Icon link
- Position
- Ratio
- Stacks
- Stretched link
- Text truncation
- Vertical rule
- Visually hidden
