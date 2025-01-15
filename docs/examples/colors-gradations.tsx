import { accents } from './colors-accents'

function RowNumbers() {
  return (
    <div className="t-display-flex t-fd-row">
      <div
        className="t-py-3"
        style={{
          width: '100%',
          maxWidth: '3rem',
          overflow: 'hidden',
        }}
      >
        &nbsp;
      </div>
      <div className="t-display-flex t-fg-1 t-fd-row t-ta-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            className="t-py-3 t-px-3"
            style={{
              width: `3rem`,
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ColorsGradients() {
  return (
    <div
      className="t-flex t-mb-6"
      style={{
        fontSize: '12px',
      }}
    >
      <RowNumbers />
      {accents.map((accent) => (
        <div className="t-display-flex t-fd-row">
          <div
            className="t-py-3"
            style={{
              width: '100%',
              maxWidth: '3rem',
              overflow: 'hidden',
            }}
          >
            {accent}
          </div>
          <div className="t-display-flex t-fg-1 t-fd-row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div
                className="t-py-3 t-px-3"
                style={{
                  backgroundColor: `var(--${accent.toLowerCase()}-${i})`,
                  width: `3rem`,
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
      <RowNumbers />
    </div>
  )
}


export function WhiteBlackAlphaGradients() {
  return (
    <div
      className="t-flex t-mb-6"
      style={{
        fontSize: '12px',
      }}
    >
      <RowNumbers />
      {['White', 'Black'].map((accent) => (
        <div className="t-display-flex t-fd-row">
          <div
            className="t-py-3"
            style={{
              width: '100%',
              maxWidth: '3rem',
              overflow: 'hidden',
            }}
          >
            {accent}
          </div>
          <div className="t-display-flex t-fg-1 t-fd-row" style={{}}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div
                style={{
                  display: 'flex',
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0,8px 0,8px -8px,0 8px',
                  backgroundColor: 'grey',
                  backgroundImage: `linear-gradient(45deg,#888 25%,#0000 25%),linear-gradient(135deg,#888 25%,#0000 25%),linear-gradient(45deg,#0000 75%,#888 75%),linear-gradient(135deg,#0000 75%,#888 75%)`,
                  backgroundClip: 'padding-box',
                }}
              >
                <div
                  className="t-py-3 t-px-3"
                  style={{
                    backgroundColor: `var(--${accent.toLowerCase()}-a${i})`,
                    width: `3rem`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ))}      
    </div>
  )
}
