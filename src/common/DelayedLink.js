import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { pageLoadFinished, pageLoadStart } from '../utilis/animationsTriggers';

const DelayedLink = ({ to, children, className, target, attributes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const delayedRedirect = (e) => {
    e.preventDefault();

    const submenu = document.querySelector('.submenu');
    const wrapperCursor = document.querySelector('#wrapper-cursor');

    if (submenu) submenu.classList.remove('active');
    if (wrapperCursor) wrapperCursor.click();
    if (to === undefined) return;
    
    if (location.pathname === to) {
      pageLoadStart();
      setTimeout(() => pageLoadFinished(), 900);
    }

    if (target === undefined) {
      pageLoadStart();
      setTimeout(() => navigate(to), 900);
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