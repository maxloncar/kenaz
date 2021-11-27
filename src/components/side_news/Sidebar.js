import SidebarNews from "./SidebarNews";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const objectsArray = [
    { id: 1, title: "Popular" },
    { id: 2, title: "Top Rated" },
    { id: 3, title: "Comments" },
  ];

  const [sidebarState, changeSidebarState] = useState({
    activeObject: objectsArray[0],
    objects: objectsArray,
  });

  function toggleActive(index) {
    changeSidebarState({
      ...sidebarState,
      activeObject: sidebarState.objects[index],
    });
  }

  function toggelActiveStyles(index) {
    if (sidebarState.objects[index] === sidebarState.activeObject) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <aside className="sidebar">
      <ul>
        {sidebarState.objects.map((title, index) => (
          <li
            key={index}
            className={toggelActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            {title.title}
          </li>
        ))}
      </ul>
      <Link to="/single">
        <SidebarNews />
        <SidebarNews />
        <SidebarNews />
        <SidebarNews />
        <SidebarNews />
      </Link>
    </aside>
  );
}

export default Sidebar;
