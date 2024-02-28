import React from 'react'
import DelayedLink from './DelayedLink'

const Cookies = () => {
  return (
    <div
        className="container-cookies d-none"
        data-aos="fadeIn - 1s"
        data-cursor-style="default"
      >
        <div className="cookies">
          <p className="font-2 fs--12 text-cookies lh-150">
            This website uses cookies to provide necessary website
            functionality, improve your experience and analyze our traffic. By
            using our website, you agree to our
            <DelayedLink className="link-underline white-1" to="/">
              Privacy Policy
            </DelayedLink>
            and our cookies usage.
          </p>

          <button className="btn-cookies accept fs--12 black-1" data-close-cookies>
            <span>OK</span>
          </button>
        </div>
      </div>
  )
}

export default Cookies