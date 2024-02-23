import React from 'react'
import { Link } from 'react-router-dom'

const SocialVerticalBar = () => {
  return (
    <div
    className="col-lg-1 column-2 no-mobile"
    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
  >
    <div className="wrapper-share">
      <h3 className="fs--18 text-center d-inline-block mb-25">
        Share
      </h3>
      <ul className="list-share">
        <li>
          <Link
            to="/"
            data-cursor-style="off"
            onClick={(e)=>{window.open('https://www.facebook.com/sharer/sharer.php?u=blog-post','compartilhar', 'toolbar=0, status=0, width=650, height=450');e.preventDefault();}}
          >
            <span>Facebook</span>
            <i className="icon-facebook"></i>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            data-cursor-style="off"
            onClick={(e)=>{window.open('https://twitter.com/intent/tweet?text=Blog','compartilhar', 'toolbar=0, status=0, width=650, height=450');e.preventDefault();}}
          >
            <span>X (Twitter)</span>
            <i className="icon-x"></i>
          </Link>
        </li>
        <li>
          <Link
            to="mailto:?subject=Blog Post&body=blog-post"
            data-cursor-style="off"
          >
            <span>email</span>
            <i className="icon-mail"></i>
          </Link>
        </li>
        <li>
          <Link to="/" className="copy-link">
            <span>Copy e-mail</span>
            <i className="icon-link"></i>
          </Link>
          <input
            type="text"
            className="copy-link-url"
            value="blog-post"
            style={{ position: "absolute", opacity: 0 }}
          />
        </li>
      </ul>
    </div>
  </div>
  )
}

export default SocialVerticalBar