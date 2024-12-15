import React from 'react';
import { BiCategory } from "react-icons/bi";
import { IoBag,IoPeopleSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
const Sidebar = () => {

  const navItems = [
    { name: "Categories", href: "#",logo: BiCategory },
    { name: "Customers", href: "#",logo:IoPeopleSharp},
    { name: "Products", href: "#" ,logo:IoBag},
    { name: "Orders", href: "#" ,logo:FaCartArrowDown},
    { name: "Delivery", href: "#" ,logo:CiDeliveryTruck},
  ];
  return (
    <div className="h-screen w-64 bg-slate-50 flex flex-col">
    {/* Logo Section */}
    <div className="p-4 text-2xl font-bold border-b border-gray-700">
      Wecommerce
    </div>
    <span className=' pl-6 mt-3 mb-2 text-xl font-semibold bg-violet-600 text-white'># DashBoard</span>

    {/* Navigation Links */}
    <nav className="flex-1 p-4">
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li key={index} className=' hover:text-white hover:text-2xl'>
          
            <a
              href={item.href}
              className="block p-3 rounded hover:bg-violet-500 transition flex-row items-baseline "> 
              <span className='inline-block pr-2 text-xl'>{item.logo()}</span>
              <span className='inline-block text-xl font-semibold '> {item.name}</span>  
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Footer Section */}
    <div className="p-4 border-t border-gray-700 text-sm">
      &copy; 2024 MyApp
    </div>
  </div>
  )
}

export default Sidebar

