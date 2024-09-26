export default function Example({
  prefix = 't-', // or ''
}) {
  return (
    <>
      <ul className={`${prefix}nav ${prefix}nav-tabs`}>
        <li className={`${prefix}nav-item`}>
          <a
            className={`${prefix}nav-link ${prefix}active`}
            aria-current='page'
            href='#'
          >
            Active
          </a>
        </li>
        <li className={`${prefix}nav-item`}>
          <a className={`${prefix}nav-link`} href='#'>
            Link
          </a>
        </li>
        <li className={`${prefix}nav-item`}>
          <a className={`${prefix}nav-link`} href='#'>
            Link
          </a>
        </li>
        <li className={`${prefix}nav-item`}>
          <a
            className={`${prefix}nav-link ${prefix}disabled`}
            aria-disabled='true'
          >
            Disabled
          </a>
        </li>
      </ul>
    </>
  )
}
