import React from "react";

const Link = ({ className, href, children }) => {

  const onClick = (e) => {
    //return standard browser behavior (open in new tab with ctrl or meta key pressed)
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();

    //change current URL
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      href={ href }
      className={ className }
      onClick={ onClick }
    >
      { children }
    </a>
  );
};

export default Link;