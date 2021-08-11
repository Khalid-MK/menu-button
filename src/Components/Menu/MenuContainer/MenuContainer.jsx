import React from "react";
import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";
import "./menuContainer.css";

const MenuContainer = () => {
  return (
    <>
      <div className="row">
        <div className="box element1 col">
          <img
            // width="1140"
            // height="3202"
            src={image1}
            class="menu-image menu-image-title-after"
            alt=""
            srcset="https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5.jpg 1140w, https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5-107x300.jpg 107w, https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5-768x2157.jpg 768w, https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5-365x1024.jpg 365w, https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5-9x24.jpg 9w, https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5-13x36.jpg 13w, https://www.smart-villages.com/wp-content/uploads/2018/07/smart-menu-bg-img-5-17x48.jpg 17w"
            sizes="(max-width: 1140px) 100vw, 1140px"
            style={{ opacity: 1 }}
          />
        </div>
        <div className="box element2 col"></div>
        <div className="box element3 col"></div>
        <div className="box element4 col"></div>
        <div className="box element5 col"></div>
        {/* <div className="box element6 col"></div> */}
      </div>
    </>
  );
};

export default MenuContainer;
