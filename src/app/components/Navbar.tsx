"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/128.png";
import RotatingHamburger from "./RotatingHamburger";
import { useEffect } from "react";

const navItems = [
  { link: "Home", path: "#hero" },
  { link: "Features", path: "#features" },
  { link: "Download", path: "#download" },
  { link: "Contact", path: "#contact" },
];

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  return (
    <nav className="container flex items-center justify-between max-w-[1280px] w-[90vw] flex-col md:flex-row md:w-full mx-auto px-2 2xl:px-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="#hero" className="flex items-center gap-2 flex-row" scroll={true}>
          <div className="w-[60px] h-[60px]">
            <Image src={logo} alt="placeholder logo" width={60} height={60} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-secondary ">
              Link Vault
            </h1>
            <p className="text-xs md:text-sm lg:text-md text-white">Your Personalized Link Organizer</p>
          </div>
        </Link>
        <RotatingHamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[76px] left-0 right-0 h-[calc(100vh-76px)] md:h-auto bg-primary transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }
      >
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 text-white hover:text-secondary"
                href={path}
                scroll={true}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
