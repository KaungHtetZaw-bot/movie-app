import React from "react";

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

const HeaderBar = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <img
            src="/neo-movies-logo.png"
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="Neo Movies Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Neo Movies
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="mr-1"
              />
            }
            aria-label="User menu"
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
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
