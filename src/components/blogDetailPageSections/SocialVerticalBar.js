import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialVerticalBar = () => {

  const [copied, setCopied] = useState(false);
  const copyURLToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); 
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
      });
  };
  return (
    <ul className="list-share">
      <li>
        <Link
          data-cursor-style="off"
          onClick={(e) => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=blog-post",
              "compartilhar",
              "toolbar=0, status=0, width=650, height=450"
            );
            e.preventDefault();
          }}
        >
          <span>Facebook</span>
          <i className="icon-facebook"></i>
        </Link>
      </li>
      <li>
        <Link
          data-cursor-style="off"
          onClick={(e) => {
            window.open(
              "https://twitter.com/intent/tweet?text=Blog",
              "compartilhar",
              "toolbar=0, status=0, width=650, height=450"
            );
            e.preventDefault();
          }}
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
        <Link onClick={copyURLToClipboard} className="copy-link">
          <span>{copied}</span>
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
  );
};

export default SocialVerticalBar;
