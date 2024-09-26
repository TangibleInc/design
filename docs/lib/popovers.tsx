export default function Example({
  prefix = 't-', // or ''
}) {
  return (
    <>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-container='body'
        data-t-toggle='popover'
        data-t-placement='top'
        data-t-content='Top popover'
      >
        Popover on top
      </button>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-container='body'
        data-t-toggle='popover'
        data-t-placement='right'
        data-t-content='Right popover'
      >
        Popover on right
      </button>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-container='body'
        data-t-toggle='popover'
        data-t-placement='bottom'
        data-t-content='Bottom popover'
      >
        Popover on bottom
      </button>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-container='body'
        data-t-toggle='popover'
        data-t-placement='left'
        data-t-content='Left popover'
      >
        Popover on left
      </button>
    </>
  )
}
