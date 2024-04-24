import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { pageLoadFinished, pageLoadStart } from '../utilis/animationsTriggers';
import { resetCount } from '../utilis/pageLoadingAnimation';

const DelayedLink = ({ to, children, className, target, attributes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const delayedRedirect = (e) => {
    e.preventDefault();

    if (to === undefined) return;

    if (location.pathname === to) {
      pageLoadStart();
      setTimeout(() => pageLoadFinished(), 900);
      return;
    }

    if (target === undefined) {
      pageLoadStart();
      setTimeout(() => {
        resetCount();
        navigate(to);
      }, 900);
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