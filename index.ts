import * as Popper from '@popperjs/core'
import createBaseComponent from './base'
import EventHandler from './dom/event-handler'
import createManipulator from './dom/manipulator'
import createSelectorEngine from './dom/selector-engine'
import {
  // defineJQueryPlugin,
  execute,
  getElement,
  getNextActiveElement,
  isDisabled,
  isElement,
  isRTL,
  isVisible,
  noop,
  reflow,
  triggerTransitionEnd,
  findShadowRoot,
  getUID,
  toType,
  executeAfterTransition,
  parseSelector,
} from './utilities'
import { createEnableDismissTrigger } from './utilities/component-functions'
import createConfig from './utilities/config'
import createBackdrop from './utilities/backdrop'
import createFocusTrap from './utilities/focustrap'
import { DefaultAllowlist, sanitizeHtml } from './utilities/sanitizer'
import createTemplateFactory from './utilities/template-factory'
import createScrollBarHelper from './utilities/scrollbar'

// Import individually
// import Alert from './alert'
// import Button from './button'
// import Carousel from './carousel'
// import Collapse from './collapse'
// import Dropdown from './dropdown'
// import Modal from './modal'
// import Offcanvas from './offcanvas'
// import Popover from './popover'
// import ScrollSpy from './scrollspy'
// import Tab from './tab'
// import Toast from './toast'
// import Tooltip from './tooltip'

const base = {
  // BaseComponent,
  // Config, // Support prefix
  // defineJQueryPlugin,
  // enableDismissTrigger,
  // Manipulator, // Support prefix
  // SelectorEngine,
  EventHandler,
  execute,
  executeAfterTransition,
  findShadowRoot,
  getElement,
  getNextActiveElement,
  getUID,
  isDisabled,
  isElement,
  isRTL,
  isVisible,
  noop,
  reflow,
  triggerTransitionEnd,

  // TODO: Support loading these separately?
  // Backdrop,
  // FocusTrap,
  Popper,
  DefaultAllowlist,
  sanitizeHtml,
  // TemplateFactory,
}

export type ComponentCreator = (
  props: {
    DATA_PREFIX: string
    DATA_PREFIX_BASE: string
    CLASS_PREFIX: string

    // TODO: Improve these types
    Backdrop: any
    BaseComponent: any
    Config: any
    enableDismissTrigger: any
    FocusTrap: any
    Manipulator: any
    ScrollBarHelper: any
    SelectorEngine: any
    TemplateFactory: any
    Tooltip?: any

    [key: string]: any
  } & typeof base,
) => Function

/**
 * Create component by providing shared utilities and config such as
 * prefix for HTML data attributes.
 */
export function create({
  dataPrefix: DATA_PREFIX = 't-',
  dataPrefixBase: DATA_PREFIX_BASE = 't',
  classPrefix: CLASS_PREFIX = 't-', // Or '' for global with no prefix
  components = {},
}: {
  dataPrefix?: string
  dataPrefixBase?: string
  classPrefix?: string
  components?: {
    [name: string]: ComponentCreator
  }
}) {
  const Manipulator = createManipulator({
    DATA_PREFIX,
  })

  const Config = createConfig({
    Manipulator,
    isElement,
    toType,
  })

  const BaseComponent = createBaseComponent({
    Config,
    DATA_PREFIX,
    DATA_PREFIX_BASE,
  })

  const SelectorEngine = createSelectorEngine({
    BaseComponent,
    DATA_PREFIX,
    isDisabled,
    isVisible,
    parseSelector,
  })

  const TemplateFactory = createTemplateFactory({
    SelectorEngine,
    Config,
    DefaultAllowlist,
    sanitizeHtml,
    execute,
    getElement,
    isElement,
  })

  const Backdrop = createBackdrop({
    DATA_PREFIX,
    DATA_PREFIX_BASE,
    EventHandler,
    Config,
    execute,
    executeAfterTransition,
    getElement,
    reflow,
  })

  const FocusTrap = createFocusTrap({
    DATA_PREFIX,
    DATA_PREFIX_BASE,
    EventHandler,
    SelectorEngine,
    Config,
  })

  const ScrollBarHelper = createScrollBarHelper({
    Manipulator,
    SelectorEngine,
    isElement,
  })
  
  const enableDismissTrigger = createEnableDismissTrigger({
    DATA_PREFIX,
    EventHandler,
    SelectorEngine,
    isDisabled,
  })

  const boots = {}

  // Load components that extend other components at the end
  const later: string[] = ['Popover']
  const entries = [
    ...Object.entries(components).filter(([name]) => !later.includes(name)),
    ...later.map<[key: string, (props: any) => Function]>((key) => [
      key,
      components[key],
    ]),
  ]

  for (const [name, creator] of entries) {
    boots[name] = creator({
      ...base,
      ...boots,
      Backdrop,
      BaseComponent,
      CLASS_PREFIX,
      Config,
      DATA_PREFIX_BASE,
      DATA_PREFIX,
      enableDismissTrigger,
      FocusTrap,
      Manipulator,
      ScrollBarHelper,
      SelectorEngine,
      TemplateFactory,
    })
  }

  // onDOMContentLoaded

  // Array.from(document.querySelectorAll('.t-dropdown'))
  //     .forEach(toastNode => new Toast(toastNode))

  return boots
}
