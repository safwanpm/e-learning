'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../redux/slices/roleSlice';
import { RootState } from '../redux/store';
import ThemeToggle from './ThemeToggle';
import { FaUser, FaUserShield, FaChalkboardTeacher } from 'react-icons/fa'; 

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const role = useSelector((state: RootState) => state.role.role); 
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRoleChange = (newRole: string) => {
    dispatch(setRole(newRole));
    setDropdownOpen(false); 
  };

 
  const getProfileImage = (role: string) => {
    switch (role) {
      case 'admin':
        return '/assets/image/profile.png'; 
      case 'instructor':
        return '/assets/image/profile.png';
      default:
        return '/assets/image/avatar.jpg'; 
    }
  };

  return (
    <nav className="fixed top-0 w-screen z-20 bg-teritory dark:bg-gray-800  px-6 pe-4 md:pe-10 py-2   flex justify-between items-center">
      <h1 className="ms-10 md:ms-0 text-xl font-bold text-primary dark:text-white">
        E Learning
      </h1>
      <div className="flex items-center space-x-6">
        <ThemeToggle />
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-0 py-2 rounded-md focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-primary dark:border-secondary overflow-hidden">
              <img
                src={getProfileImage(role)} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-gray-900"></div>
            </div>
            <span className="hidden md:block font-medium px-2">Profile</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border dark:text-white border-gray-200 dark:border-gray-600 rounded-md shadow-lg">
              <ul>
                {[ 
                  { name: 'user', label: 'User', icon: <FaUser /> },
                  { name: 'admin', label: 'Admin', icon: <FaUserShield /> },
                  { name: 'instructor', label: 'Instructor', icon: <FaChalkboardTeacher /> },
                ].map((item) => (
                  <li
                    key={item.name}
                    onClick={() => handleRoleChange(item.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md cursor-pointer ${
                      role === item.name
                        ? 'bg-orange-100 text-orange-500'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
