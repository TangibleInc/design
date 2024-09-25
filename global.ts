import * as design from './index'

// These can be imported individually
import Alert from './components/alert'
import Button from './components/button'
import Carousel from './components/carousel'
import Collapse from './components/collapse'
import Dropdown from './components/dropdown'
import Modal from './components/modal'
import Offcanvas from './components/offcanvas'
import Popover from './components/popover'
import ScrollSpy from './components/scrollspy'
import Tab from './components/tab'
import Toast from './components/toast'
import Tooltip from './components/tooltip'

const Design = design.create({
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
