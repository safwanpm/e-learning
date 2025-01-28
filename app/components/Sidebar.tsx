'use client'
import React, { useState } from "react";
import {
  FaHome,
  FaChalkboardTeacher,
  FaTrophy,
  FaChartPie,
  FaCertificate,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("Overview");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Overview", icon: FaHome },
    { name: "Lessons", icon: FaChalkboardTeacher },
    { name: "Leaderboard", icon: FaTrophy },
    { name: "Skill Graph", icon: FaChartPie },
    { name: "Courses", icon: FaCertificate },
    { name: "Certificates", icon: FaCertificate },
    { name: "Messages", icon: FaEnvelope, badge: 5 },
    { name: "Settings", icon: FaCog },
  ];

  return (
    <>

      <button
        className="md:hidden fixed top-4 left-4   text-primary dark:text-white p-2 rounded-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-teritory dark:bg-gray-800 w-64 p-6   z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >

        <div className="ms-10 text-primary text-2xl font-bold flex items-center gap-2">

          E-Learning
        </div>

        <nav className="mt-6 space-y-4">
          <p className="text-black dark:text-white text-sm uppercase">Menu</p>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.name}
                  className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${active === item.name
                      ? "bg-orange-100 text-orange-500"
                      : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  onClick={() => setActive(item.name)}
                >
                  <Icon className="text-lg" />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>


        <div className="absolute bottom-6 left-6 w-full">
          <button
            className="flex items-center gap-4 text-black dark:text-white hover:text-red-500 p-3 rounded-lg cursor-pointer w-full "
            onClick={() => console.log("Logout clicked")}
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
