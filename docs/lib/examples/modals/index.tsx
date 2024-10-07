import React from 'react'
export default function Example({
  prefix = 't-' // or ''
}) {
  return (
    <>
      
{/* <link href="modals.css" rel="stylesheet"> */}


<svg xmlns="http://www.w3.org/2000/svg" className={`${prefix}d-none`}>
  <symbol id="bookmark-star" viewBox="0 0 16 16">
    <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
  </symbol>

  <symbol id="grid-fill" viewBox="0 0 16 16">
    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
  </symbol>

  <symbol id="film" viewBox="0 0 16 16">
    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
  </symbol>

  <symbol id="github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </symbol>

  <symbol id="twitter" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
  </symbol>

  <symbol id="facebook" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
  </symbol>
</svg>

<div className={`${prefix}modal ${prefix}modal-sheet ${prefix}position-static ${prefix}d-block ${prefix}bg-body-secondary ${prefix}p-4 ${prefix}py-md-5`} tabIndex={-1} role="dialog" id="modalSheet">
  <div className={`${prefix}modal-dialog`} role="document">
    <div className={`${prefix}modal-content ${prefix}rounded-4 ${prefix}shadow`}>
      <div className={`${prefix}modal-header ${prefix}border-bottom-0`}>
        <h1 className={`${prefix}modal-title ${prefix}fs-5`}>Modal title</h1>
        <button type="button" className={`${prefix}btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className={`${prefix}modal-body ${prefix}py-0`}>
        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
      </div>
      <div className={`${prefix}modal-footer ${prefix}flex-column ${prefix}align-items-stretch ${prefix}w-100 ${prefix}gap-2 ${prefix}pb-3 ${prefix}border-top-0`}>
        <button type="button" className={`${prefix}btn ${prefix}btn-lg ${prefix}btn-primary`}>Save changes</button>
        <button type="button" className={`${prefix}btn ${prefix}btn-lg ${prefix}btn-secondary`} data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div className={`${prefix}b-example-divider`}></div>

<div className={`${prefix}modal ${prefix}modal-sheet ${prefix}position-static ${prefix}d-block ${prefix}bg-body-secondary ${prefix}p-4 ${prefix}py-md-5`} tabIndex={-1} role="dialog" id="modalChoice">
  <div className={`${prefix}modal-dialog`} role="document">
    <div className={`${prefix}modal-content ${prefix}rounded-3 ${prefix}shadow`}>
      <div className={`${prefix}modal-body ${prefix}p-4 ${prefix}text-center`}>
        <h5 className={`${prefix}mb-0`}>Enable this setting?</h5>
        <p className={`${prefix}mb-0`}>You can always change your mind in your account settings.</p>
      </div>
      <div className={`${prefix}modal-footer ${prefix}flex-nowrap ${prefix}p-0`}>
        <button type="button" className={`${prefix}btn ${prefix}btn-lg ${prefix}btn-link ${prefix}fs-6 ${prefix}text-decoration-none ${prefix}col-6 ${prefix}py-3 ${prefix}m-0 ${prefix}rounded-0 ${prefix}border-end`}><strong>Yes, enable</strong></button>
        <button type="button" className={`${prefix}btn ${prefix}btn-lg ${prefix}btn-link ${prefix}fs-6 ${prefix}text-decoration-none ${prefix}col-6 ${prefix}py-3 ${prefix}m-0 ${prefix}rounded-0`} data-bs-dismiss="modal">No thanks</button>
      </div>
    </div>
  </div>
</div>

<div className={`${prefix}b-example-divider`}></div>

<div className={`${prefix}modal ${prefix}modal-sheet ${prefix}position-static ${prefix}d-block ${prefix}bg-body-secondary ${prefix}p-4 ${prefix}py-md-5`} tabIndex={-1} role="dialog" id="modalTour">
  <div className={`${prefix}modal-dialog`} role="document">
    <div className={`${prefix}modal-content ${prefix}rounded-4 ${prefix}shadow`}>
      <div className={`${prefix}modal-body ${prefix}p-5`}>
        <h2 className={`${prefix}fw-bold ${prefix}mb-0`}>What's new</h2>

        <ul className={`${prefix}d-grid ${prefix}gap-4 ${prefix}my-5 ${prefix}list-unstyled ${prefix}small`}>
          <li className={`${prefix}d-flex ${prefix}gap-4`}>
            <svg className={`${prefix}bi ${prefix}text-body-secondary ${prefix}flex-shrink-0`} width="48" height="48"><use xlinkHref="#grid-fill"/></svg>
            <div>
              <h5 className={`${prefix}mb-0`}>Grid view</h5>
              Not into lists? Try the new grid view.
            </div>
          </li>
          <li className={`${prefix}d-flex ${prefix}gap-4`}>
            <svg className={`${prefix}bi ${prefix}text-warning ${prefix}flex-shrink-0`} width="48" height="48"><use xlinkHref="#bookmark-star"/></svg>
            <div>
              <h5 className={`${prefix}mb-0`}>Bookmarks</h5>
              Save items you love for easy access later.
            </div>
          </li>
          <li className={`${prefix}d-flex ${prefix}gap-4`}>
            <svg className={`${prefix}bi ${prefix}text-primary ${prefix}flex-shrink-0`} width="48" height="48"><use xlinkHref="#film"/></svg>
            <div>
              <h5 className={`${prefix}mb-0`}>Video embeds</h5>
              Share videos wherever you go.
            </div>
          </li>
        </ul>
        <button type="button" className={`${prefix}btn ${prefix}btn-lg ${prefix}btn-primary ${prefix}mt-5 ${prefix}w-100`} data-bs-dismiss="modal">Great, thanks!</button>
      </div>
    </div>
  </div>
</div>

<div className={`${prefix}b-example-divider`}></div>

<div className={`${prefix}modal ${prefix}modal-sheet ${prefix}position-static ${prefix}d-block ${prefix}bg-body-secondary ${prefix}p-4 ${prefix}py-md-5`} tabIndex={-1} role="dialog" id="modalSignin">
  <div className={`${prefix}modal-dialog`} role="document">
    <div className={`${prefix}modal-content ${prefix}rounded-4 ${prefix}shadow`}>
      <div className={`${prefix}modal-header ${prefix}p-5 ${prefix}pb-4 ${prefix}border-bottom-0`}>
        <h1 className={`${prefix}fw-bold ${prefix}mb-0 ${prefix}fs-2`}>Sign up for free</h1>
        <button type="button" className={`${prefix}btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className={`${prefix}modal-body ${prefix}p-5 ${prefix}pt-0`}>
        <form className={`${prefix}`}>
          <div className={`${prefix}form-floating ${prefix}mb-3`}>
            <input type="email" className={`${prefix}form-control ${prefix}rounded-3`} id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className={`${prefix}form-floating ${prefix}mb-3`}>
            <input type="password" className={`${prefix}form-control ${prefix}rounded-3`} id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className={`${prefix}w-100 ${prefix}mb-2 ${prefix}btn ${prefix}btn-lg ${prefix}rounded-3 ${prefix}btn-primary`} type="submit">Sign up</button>
          <small className={`${prefix}text-body-secondary`}>By clicking Sign up, you agree to the terms of use.</small>
          <hr className={`${prefix}my-4`} />
          <h2 className={`${prefix}fs-5 ${prefix}fw-bold ${prefix}mb-3`}>Or use a third-party</h2>
          <button className={`${prefix}w-100 ${prefix}py-2 ${prefix}mb-2 ${prefix}btn ${prefix}btn-outline-secondary ${prefix}rounded-3`} type="submit">
            <svg className={`${prefix}bi ${prefix}me-1`} width="16" height="16"><use xlinkHref="#twitter"/></svg>
            Sign up with Twitter
          </button>
          <button className={`${prefix}w-100 ${prefix}py-2 ${prefix}mb-2 ${prefix}btn ${prefix}btn-outline-primary ${prefix}rounded-3`} type="submit">
            <svg className={`${prefix}bi ${prefix}me-1`} width="16" height="16"><use xlinkHref="#facebook"/></svg>
            Sign up with Facebook
          </button>
          <button className={`${prefix}w-100 ${prefix}py-2 ${prefix}mb-2 ${prefix}btn ${prefix}btn-outline-secondary ${prefix}rounded-3`} type="submit">
            <svg className={`${prefix}bi ${prefix}me-1`} width="16" height="16"><use xlinkHref="#github"/></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

<div className={`${prefix}b-example-divider`}></div>

    </>
  )
}
