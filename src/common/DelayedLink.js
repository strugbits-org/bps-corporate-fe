import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { pageLoadFinished, pageLoadStart } from '../utilis/animationsTriggers';
// import { resetCount } from '../utilis/loadAnimations';

const DelayedLink = ({ to, children, className, target, attributes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const delayedRedirect = (e) => {
    e.preventDefault();

    const parentPage = (path) => {
      const page = path.trim() === "/" ? "/" : path.substring(1);
      return page.split("/")[0].trim()
    }

    const submenu = document.querySelector('.submenu');
    const wrapperCursor = document.querySelector('#wrapper-cursor');

    if (submenu) submenu.classList.remove('active');
    if (wrapperCursor) wrapperCursor.click();
    if (to === undefined) return;

    if (location.pathname === to) {
      pageLoadStart();
      setTimeout(() => pageLoadFinished(), 900);
      return;
    }

    if (target === undefined) {
      pageLoadStart();
      if (parentPage(to) === parentPage(location.pathname)) {
        setTimeout(() => {
          // resetCount();
          navigate(to + "?noreload=true");
        }, 900);
      } else {
        setTimeout(() => {
          // resetCount();
          navigate(to);
        }, 900);
      }
    } else {
      window.open(to, target);
    }
  };

  return (
    <Link to={to} target={target} className={className} onClick={delayedRedirect} {...attributes}>
      {children}
    </Link>
  );
};

export default DelayedLink;