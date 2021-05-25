import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ id, title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <div id={id} className="title">
        {title}
      </div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);

export default MenuItem;
