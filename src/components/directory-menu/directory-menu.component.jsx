import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory-menu.style.scss";
import sections from "./directory.data";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [...sections],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default DirectoryMenu;
