import SidebarNews from "./SidebarNews";

function Sidebar() {
    return (
      <aside className="sidebar">
          <ul>
              <li>Popular</li>
              <li>Top Rated</li>
              <li>Comments</li>
          </ul>
          <SidebarNews />
          <SidebarNews />
          <SidebarNews />
          <SidebarNews />
          <SidebarNews />
      </aside>
    );
  }
  
  export default Sidebar;