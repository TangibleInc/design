import { create } from './index'

// These can be imported individually
import Alert from './alert'
import Button from './button'
import Carousel from './carousel'
import Collapse from './collapse'
import Dropdown from './dropdown'
import Modal from './modal'
import Offcanvas from './offcanvas'
import Popover from './popover'
import ScrollSpy from './scrollspy'
import Tab from './tab'
import Toast from './toast'
import Tooltip from './tooltip'

const Design = create({
  classPrefix: '',
  components: {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip,
  },
})

declare global {
  var Tangible: {
    Design: typeof Design
  }
}

(window.Tangible = window.Tangible || {}).Design = Design
