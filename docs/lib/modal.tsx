export default function Example({
  prefix = 't-', // or ''
}) {
  return (
    <>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-primary`}
        data-bs-toggle='modal'
        data-t-target='#exampleModal'
      >
        Launch demo modal
      </button>
      <div
        className={`${prefix}modal ${prefix}fade`}
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className={`${prefix}modal-dialog`}>
          <div className={`${prefix}modal-content`}>
            <div className={`${prefix}modal-header`}>
              <h1
                className={`${prefix}modal-title ${prefix}fs-5`}
                id='exampleModalLabel'
              >
                Modal title
              </h1>
              <button
                type='button'
                className={`${prefix}btn-close`}
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className={`${prefix}modal-body`}>...</div>
            <div className={`${prefix}modal-footer`}>
              <button
                type='button'
                className={`${prefix}btn ${prefix}btn-secondary`}
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className={`${prefix}btn ${prefix}btn-primary`}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
