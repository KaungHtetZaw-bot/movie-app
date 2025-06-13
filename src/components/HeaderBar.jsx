import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HeaderBar = () => {
  const userStore = localStorage.getItem("user");
  const user = userStore ? JSON.parse(userStore) : null;
  const toastRef = useRef();
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/home">
          <img
            src="/neo-movies-logo.png"
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="Neo Movies Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Neo Movies
          </span>
        </NavbarBrand>

        <div className="relative flex items-center justify-center">
          <FaSearch
            className="text-lg cursor-pointer text-white"
            onClick={() => setShowToast((state) => !state)}
          />
          {showToast && (
            <div
              ref={toastRef}
              className="absolute z-50 top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-2 rounded shadow"
            >
              <input
                type="text"
                placeholder="Search..."
                className="rounded border px-2 py-1 text-black outline-none"
              />
              <button className="bg-black text-white px-3 py-1 rounded text-sm">
                Search
              </button>
            </div>
          )}
        </div>

        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="/default-profile-pic.png"
                className="mr-1 bg-white rounded-full"
              />
            }
            aria-label="User menu"
          >
            <DropdownHeader>
              <span className="block text-sm">
                {user?.providerData?.[0]?.displayName || "Guest"}
              </span>
              <span className="block truncate text-sm font-medium">
                {user?.email || "guest@example.com"}
              </span>
            </DropdownHeader>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
              }}
            >
              Sign out
            </DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink as={Link} to="/home" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/movie">
            Movie
          </NavbarLink>
          <NavbarLink as={Link} to="/series">
            Series
          </NavbarLink>
          {/* <NavbarLink href="#">Pricing</NavbarLink> */}
          <NavbarLink as={Link} to="/contactus">
            Contact Us
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default HeaderBar;
