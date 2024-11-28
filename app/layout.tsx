'use client'
import "./globals.css";
import { ReactNode, useState } from "react";


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
          <header className="bg-black text-yellow-500 py-4 relative border-b-4 border-yellow-500 mx-6">
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
                  <Link href="/events">Details</Link>
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
    <p>Part of the 9th anniversary of ITERA</p>
    <div className="flex justify-center mt-4">
      <a href="https://www.instagram.com/iteracareerday/" target="_blank" rel="noopener noreferrer" className="mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.96 0-3.337.01-4.507.065-1.148.055-1.925.24-2.608.512a5.139 5.139 0 00-1.843 1.185 5.139 5.139 0 00-1.185 1.843c-.272.683-.457 1.46-.512 2.608-.056 1.17-.065 1.547-.065 4.507s.01 3.337.065 4.507c.055 1.148.24 1.925.512 2.608a5.139 5.139 0 001.185 1.843 5.139 5.139 0 001.843 1.185c.683.272 1.46.457 2.608.512 1.17.056 1.547.065 4.507.065s3.337-.01 4.507-.065c1.148-.055 1.925-.24 2.608-.512a5.139 5.139 0 001.843-1.185 5.139 5.139 0 001.185-1.843c.272-.683.457-1.46.512-2.608.056-1.17.065-1.547.065-4.507s-.01-3.337-.065-4.507c-.055-1.148-.24-1.925-.512-2.608a5.139 5.139 0 00-1.185-1.843 5.139 5.139 0 00-1.843-1.185c-.683-.272-1.46-.457-2.608-.512C15.337 2.26 14.96 2.25 12 2.25zM12 0c3.053 0 3.454.01 4.65.067 1.195.057 2.02.252 2.746.548a6.675 6.675 0 012.43 1.593 6.675 6.675 0 011.593 2.43c.296.726.491 1.551.548 2.746.057 1.196.067 1.597.067 4.65s-.01 3.454-.067 4.65c-.057 1.195-.252 2.02-.548 2.746a6.675 6.675 0 01-1.593 2.43 6.675 6.675 0 01-2.43 1.593c-.726.296-1.551.491-2.746.548-1.196.057-1.597.067-4.65.067s-3.454-.01-4.65-.067c-1.195-.057-2.02-.252-2.746-.548a6.675 6.675 0 01-2.43-1.593 6.675 6.675 0 01-1.593-2.43c-.296-.726-.491-1.551-.548-2.746C.01 15.454 0 15.053 0 12s.01-3.454.067-4.65c.057-1.195.252-2.02.548-2.746a6.675 6.675 0 011.593-2.43A6.675 6.675 0 015.238.616C5.964.32 6.789.125 7.984.068 9.18.01 9.58 0 12 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.75A6.25 6.25 0 1018.25 12 6.258 6.258 0 0012 5.75zM12 16.25a4.25 4.25 0 114.25-4.25 4.254 4.254 0 01-4.25 4.25zm4.75-8.75a1 1 0 10-1-1 1 1 0 001 1z"/>
        </svg>
      
      @iteracareerday
      </a>
    </div>
  </div>
</footer>

        </div>
      </body>
    </html>
  );
}
