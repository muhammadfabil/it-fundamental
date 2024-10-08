'use client'
import "./globals.css";
import { ReactNode, useState } from "react";
import { Metadata } from 'next';
import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image'
import { Montserrat } from '@next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Sesuaikan dengan berat font yang kamu butuhkan
});

export default function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
        
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-black text-yellow-500 py-4 relative border-b-4 border-yellow-500">
            <nav className="container mx-auto flex justify-between items-center font-extrabold">
              {/* Logo di kiri */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logoicd.png"
                  width={50}
                  height={50}
                  alt="ITERA Career Day Logo"
                />
              </Link>

              {/* Teks di tengah dengan absolute positioning */}
              <h2 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-yellow-500">
                ITERA CAREER DAY 2023
              </h2>

              {/* Menu Toggle untuk Mobile */}
              <button
                className="md:hidden flex items-center px-3 py-2 border rounded text-yellow-500 border-yellow-500 hover:text-white hover:border-white"
                onClick={toggleMenu}
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
                </svg>
              </button>

              {/* Menu di kanan (hidden di mobile, tampil di desktop) */}
              <ul className="hidden md:flex text-2xl my-auto gap-4">
                <li className="hover:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-white">
                  <Link href="/events">Events</Link>
                </li>
                <li className="hover:text-white">
                  <Link href="/committee">Committee</Link>
                </li>
              </ul>
            </nav>

            {/* Menu untuk Mobile (toggle) */}
            <ul
              className={`md:hidden flex flex-col items-center mt-4 gap-4 text-2xl bg-black transition-transform duration-300 ease-in-out ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li className="hover:text-white">
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-white">
                <Link href="/events" onClick={toggleMenu}>
                  Events
                </Link>
              </li>
              <li className="hover:text-white">
                <Link href="/committee" onClick={toggleMenu}>
                  Committee
                </Link>
              </li>
            </ul>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto ">{children}</main>

          {/* Footer */}
          <footer className="bg-yellow-700 text-white py-20 mt-8 text-2xl font-extrabold">
            <div className="container mx-auto text-center">
              <p>© ITERA Career Day 2023</p>
              <p>Part of the 9th anniversary of ITERA </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
