import { create } from './index'

// These can be imported individually
import Alert from './modules/alert'
import Button from './modules/button'
import Carousel from './modules/carousel'
import Collapse from './modules/collapse'
import Dropdown from './modules/dropdown'
import Modal from './modules/modal'
import Offcanvas from './modules/offcanvas'
import Popover from './modules/popover'
import ScrollSpy from './modules/scrollspy'
import Tab from './modules/tab'
import Toast from './modules/toast'
import Tooltip from './modules/tooltip'

create({
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
