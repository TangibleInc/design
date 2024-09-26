export default function Example({
  prefix = 't-' // or ''
}) {
  return (
    <>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-toggle='tooltip'
        data-t-placement='top'
        data-t-title='Tooltip on top'
      >
        Tooltip on top
      </button>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-toggle='tooltip'
        data-t-placement='right'
        data-t-title='Tooltip on right'
      >
        Tooltip on right
      </button>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-toggle='tooltip'
        data-t-placement='bottom'
        data-t-title='Tooltip on bottom'
      >
        Tooltip on bottom
      </button>
      <button
        type='button'
        className={`${prefix}btn ${prefix}btn-secondary`}
        data-t-toggle='tooltip'
        data-t-placement='left'
        data-t-title='Tooltip on left'
      >
        Tooltip on left
      </button>
    </>
  )
}
