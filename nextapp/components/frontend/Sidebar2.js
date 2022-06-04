import React from 'react'
import SidebarItem from "./SidebarItem"
import items from "./sidebar.json"


const Sidebar2 = () => {
  return (
    <div className="sidebar">
        { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  )
}

export default Sidebar2