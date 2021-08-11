import React, { useState, useCallback, useMemo, useEffect } from "react";
import "./test.css";
import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";

const Test = ({ showMenu }) => {
  const [navContainerClasses, setNavContainerClasses] = useState(
    "nav-container opacity1"
  );

  const navClasses = useMemo(() => {
    return showMenu
      ? "main-navigation main-nav-menu zIndex9999"
      : "main-navigation main-nav-menu zIndex0";
  }, [showMenu]);

  const liClasses = useMemo(() => {
    return showMenu
      ? "main-nav-li menu-item transaction0"
      : "main-nav-li menu-item transaction100";
  }, [showMenu]);

  const aClasses = useMemo(() => {
    return showMenu
      ? "menu-image-title-after menu-image-not-hovered line-up"
      : "menu-image-title-after menu-image-not-hovered";
  }, [showMenu]);

  useEffect(() => {
    showMenu
      ? setNavContainerClasses("nav-container opacity1")
      : setNavContainerClasses("nav-container opacity0");
  }, [showMenu]);

  return (
    <>
      <nav id="site-navigation" className={navClasses}>
        <div className={navContainerClasses}>
          <div className="menu-primary-menu-container">
            <ul id="menu-primary-menu" className="main-menu-links nav-menu">
              <li id="menu-item-1" className={liClasses}>
                <a
                  href="https://www.smart-villages.com/what-we-offer/"
                  className={aClasses}
                >
                  <span className="menu-description"></span>
                  <img
                    src={image1}
                    className="menu-image menu-image-title-after"
                    alt=""
                    style={{ opacity: 1 }}
                  />
                  <span className="menu-image-title" style={{ opacity: 1 }}>
                    اتصل بنا
                  </span>
                </a>
              </li>

              <li id="menu-item-2" className={liClasses}>
                <a
                  href="https://www.smart-villages.com/what-we-offer/"
                  className={aClasses}
                >
                  <span className="menu-description"></span>
                  <img
                    src={image2}
                    className="menu-image menu-image-title-after"
                    alt=""
                    style={{ opacity: 1 }}
                  />
                  <span className="menu-image-title" style={{ opacity: 1 }}>
                    الفريق
                  </span>
                </a>
              </li>
              <li id="menu-item-3" className={liClasses}>
                <a
                  href="https://www.smart-villages.com/what-we-offer/"
                  className={aClasses}
                >
                  <span className="menu-description"></span>
                  <img
                    src={image3}
                    className="menu-image menu-image-title-after"
                    alt=""
                    style={{ opacity: 1 }}
                  />
                  <span className="menu-image-title" style={{ opacity: 1 }}>
                    الأسئلة الشائعة{" "}
                  </span>
                </a>
              </li>
              <li id="menu-item-4" className={liClasses}>
                <a
                  href="https://www.smart-villages.com/what-we-offer/"
                  className={aClasses}
                >
                  <span className="menu-description"></span>
                  <img
                    src={image4}
                    className="menu-image menu-image-title-after"
                    alt=""
                    style={{ opacity: 1 }}
                  />
                  <span className="menu-image-title" style={{ opacity: 1 }}>
                    الخدمات
                  </span>
                </a>
              </li>
              <li id="menu-item-5" className={liClasses}>
                <a
                  href="https://www.smart-villages.com/what-we-offer/"
                  className={aClasses}
                >
                  <span className="menu-description"></span>
                  <img
                    src={image1}
                    className="menu-image menu-image-title-after"
                    alt=""
                    style={{ opacity: 1 }}
                  />
                  <span className="menu-image-title" style={{ opacity: 1 }}>
                    الأحداث
                  </span>
                </a>
              </li>
              <li id="menu-item-6" className={liClasses}>
                <a
                  href="https://www.smart-villages.com/what-we-offer/"
                  className={aClasses}
                >
                  <span className="menu-description"></span>
                  <img
                    src={image5}
                    className="menu-image menu-image-title-after"
                    alt=""
                    style={{ opacity: 1 }}
                  />
                  <span className="menu-image-title" style={{ opacity: 1 }}>
                    الأخبار
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Test;
