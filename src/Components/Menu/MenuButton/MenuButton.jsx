import React, { useCallback } from "react";
import { useState } from "react";
import "./menuButton.css";

/// toggleMenu receive (true or false)
/// true  => open menu
/// false => close menu
const MenuButton = ({ toggleMenu }) => {
  const [menuButtonClasses, setmenuButtonClasses] = useState("menu-btn");

  //   const toggleMenu = useCallback((e) => {
  //     console.log(e ? "menu" : "home");
  //   }, []);

  const changeIcon = useCallback(() => {
    const openMenu = !menuButtonClasses.includes("close");
    toggleMenu(openMenu);
    setmenuButtonClasses((prev) => {
      return openMenu ? "menu-btn close" : "menu-btn";
    });
  }, [menuButtonClasses, toggleMenu]);

  return (
    <>
      <div className={menuButtonClasses} onClick={changeIcon}>
        <div className="menu-icon">
          <div className="hamburger" id="hamburger-6">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MenuButton);
