"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";
import ButtonOutlined from "./ButtonOutlined";
import logo from "../../../public/WTVector.svg";
import { Twirl as Hamburger, Twirl } from "hamburger-react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <header>
      <nav className="w-full h-[100px] bg-background flex justify-between px-[40px] items-center">
        <div className="z-20">
          <Image src={logo} alt="WeTour Logo" className="w-auto h-[28px]" />
        </div>
        <div className="hidden lg:flex gap-[20px]">
          {navLinks.map(({ id, child, href }) => (
            <Link key={id} href={href}>
              {child}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex gap-[20px]">
          <Button href="/" child="Sign In" />
          <ButtonOutlined href="/" child="Sign Up" />
        </div>
        <div className="flex lg:hidden z-30">
          <Twirl toggled={nav} toggle={setNav} />
        </div>
        {nav && (
          <div className="z-10 h-screen w-full absolute top-0 left-0 bg-accentOrange text-background flex items-center justify-center flex-col text-[28px] font-semibold gap-[40px]">
            {navLinks.map(({ id, child, href }) => (
              <Link key={id} href={href}>
                {child}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
