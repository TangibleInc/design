export default function createAlert({
  BaseComponent,
  CLASS_PREFIX,
  DATA_PREFIX,
  enableDismissTrigger,
  EventHandler,
}) {
  /**
   * Constants
   */

  const NAME = 'alert'
  const DATA_KEY = `${DATA_PREFIX}.alert`
  const EVENT_KEY = `.${DATA_KEY}`

  const EVENT_CLOSE = `close${EVENT_KEY}`
  const EVENT_CLOSED = `closed${EVENT_KEY}`
  const CLASS_NAME_FADE = `${CLASS_PREFIX}fade`
  const CLASS_NAME_SHOW = `${CLASS_PREFIX}show`

  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME
    }

    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE)

      if (closeEvent.defaultPrevented) {
        return
      }

      this._element.classList.remove(CLASS_NAME_SHOW)

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE)
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        isAnimated,
      )
    }

    // Private
    _destroyElement() {
      this._element.remove()
      EventHandler.trigger(this._element, EVENT_CLOSED)
      this.dispose()
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this)

        if (typeof config !== 'string') {
          return
        }

        if (
          data[config] === undefined ||
          config.startsWith('_') ||
          config === 'constructor'
        ) {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](this)
      })
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Alert, 'close')

  return Alert
}