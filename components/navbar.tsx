"use client";
import {  useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  const navLinks = [
    { name: "Početna", href: "/" },
    { name: "U ponudi", href: "/u-ponudi" },
    { name: "Projekti", Children: [
      { name: "U izradi", href: "/projekti/u-izradi" },
      { name: "U dolasku", href: "/projekti/u-dolasku" },
      { name: "Završeni", href: "/projekti/zavrseni" }
      ] 
    },
    { name: "Galerija", href: "/galerija" },
    { name: "O nama", href: "/o-nama" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-green-950">
      <div className="grid max-w-10xl mx-5 grid-cols-[auto_1fr_auto] items-center py-7">
        <Link href="/" className="justify-self-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            priority
            className="w-44 xl:w-52 h-auto" 
          />
        </Link>

        <div className="hidden xl:flex justify-self-center gap-10">
          {
            navLinks.map((item) => (
              <div key={item.name}>
                {item.href && (
                  <Link
                    href={item.href}
                    className="text-base lg:text-xl text-white hover:text-[#faaa31] transition whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}

                <div className="relative group">
                  {item.Children && (
                    <span
                      className="text-base lg:text-xl text-white hover:text-[#faaa31] 
                                transition whitespace-nowrap cursor-pointer"
                    >
                      {item.name}
                    </span>
                )}

                {item.Children && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4
                               w-56 bg-white rounded-xl shadow-xl overflow-hidden
                               opacity-0 invisible
                               group-hover:opacity-100 
                               group-hover:visible
                               transition-all duration-200"
                  >
                    {item.Children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-3 text-neutral-800 
                                   hover:bg-neutral-100 transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
                </div>
              </div>
            ))
          }
        </div>

        <div className="hidden xl:flex items-center justify-self-end gap-6 text-white whitespace-nowrap">
          <a
            href="mailto:info@nova-adresa.com"
            className="flex items-center gap-2 hover:text-[#faaa31] transition"
          >
            <EnvelopeIcon className="w-6 h-6" />
            <span>info@nova-adresa.com</span>
          </a>

          <a
            href="tel:+38762000446"
            className="flex items-center gap-2 hover:text-[#faaa31] transition"
          >
            <PhoneIcon className="w-6 h-6" />
            <span>+387 62 000 446</span>
          </a>
        </div>
        
        <div className="flex justify-end xl:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <XMarkIcon className="w-7 h-7 text-white" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 pb-6 gap-3">
          {navLinks.map((item) => (
            <div key={item.name}>
              {item.href && (
                <Link
                  href={item.href}
                  className="text-xl text-gray-200 py-2 border-b border-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )}

              {item.Children && (
                <>
                  <button
                    onClick={() => setOpenProjects(!openProjects)}
                    className="flex justify-between items-center text-xl text-gray-200 
                               py-2 border-b border-gray-700"
                  >
                    {item.name}
                  </button>

                  {openProjects && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.Children.map((child) => (
                        <Link
                          href={child.href}
                          key={child.name}
                          className="text-lg text-gray-400"
                          onClick={() => setOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )} 
            </div>
          ))}
        </div>
      </div>
    </nav>
  );

}
