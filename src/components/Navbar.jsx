"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import data from "../data/menu.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col w-full px-4 py-2 bg-white bg-opacity-35 backdrop-blur-md xl:px-32 lg:py-4">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Krém logo"
            width={60}
            height={30}
            className="w-auto h-auto"
            priority
          />
        </Link>
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-2">
          <NavElement href="/" label="Kezdőlap" />
          <NavElement href="/etlap" label="Étlap" />
          <NavElement href="/kapcsolat" label="Kapcsolat" />
        </ul>

        <ul className="hidden lg:flex">
          <li>
            <Link
              href="/etlap"
              className="px-4 py-2 transition-all duration-300 ease-in-out bg-blue-600 border-2 border-transparent rounded-full hover:bg-transparent hover:border-blue-600 hover:text-blue-600 text-slate-100">
              Rendelés / Foglalás
            </Link>
          </li>
        </ul>

        <button className="flex items-center justify-center lg:hidden">
          {isOpen ? (
            <svg
              className="w-6 h-6 fill-gray-600"
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          ) : (
            <svg
              onClick={toggleMenu}
              className="w-6 h-6 fill-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center justify-center w-full gap-2">
          <NavElement href="/" label="Kezdőlap" toggleMenu={toggleMenu} />
          <NavElement href="/etlap" label="Étlap" toggleMenu={toggleMenu} />
          <NavElement
            href="/kapcsolat"
            label="Kapcsolat"
            toggleMenu={toggleMenu}
          />
        </ul>
      )}
    </nav>
  );
}

export function NavElement({ href, label, toggleMenu }) {
  const actualPath = usePathname().split("/")[1];
  return (
    <li>
      <Link
        onClick={toggleMenu}
        href={href}
        className={`h-full py-1 px-2 md:px-4 md:py-2 text-lg font-medium transition duration-300 ease-in-out rounded-full lg:hover:bg-blue-500 lg:hover:text-slate-100 border-2 ${
          `/${actualPath}` === href
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-gray-700"
        }`}>
        {label}
      </Link>
    </li>
  );
}

export function MealMenu() {
  const trHun = {
    redPizzas: "Vörös pizzák",
    whitePizzas: "Fehér pizzák",
    romanStyles: "Római pizzák",
    homePasta: "Házi tészták",
    salads: "Saláták",
    desserts: "Desszertek",
    drinks: "Italok",
  };

  const trEng = {
    redPizzas: "Red pizzas",
    whitePizzas: "White pizzas",
    romanStyles: "Roman styles",
    homePasta: "Home pasta",
    salads: "Salads",
    desserts: "Desserts",
    drinks: "Drinks",
  };

  return (
    <div className="flex items-center justify-center w-full max-w-full gap-2 pb-4 overflow-y-auto">
      {Object.keys(data.menu).map((category) => (
        <Link
          href={`#${category}`}
          key={category}
          className="flex gap-2 px-2 py-1 transition-all duration-300 ease-in-out bg-white border-2 border-transparent rounded-full shadow-md cursor-pointer bg-opacity-35 backdrop-blur-md hover:bg-blue-600 hover:text-slate-100 ">
          <p className="text-base font-medium ">
            {trHun[category]}
            <span className="ml-1 text-sm italic">({trEng[category]})</span>
          </p>
        </Link>
      ))}
    </div>
  );
}
