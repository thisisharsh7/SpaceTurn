import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/shared/logo.svg";
import { useRouter } from "next/router";
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const navItems = [
    { number: '00', label: 'Home', href: '/' },
    { number: '01', label: 'Destination', href: '/destination' },
    { number: '02', label: 'Crew', href: '/crew' },
    { number: '03', label: 'Technology', href: '/technology' },
  ];

  
  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;
    const radius = 10; 
    let angle = 0; 
    const speed = 0.05; 

    function animate() {
      angle += speed;
      setOffset({
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      });
      frameId = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between py-6 xl:pl-10 sm:pl-6 sm:pr-0 pl-6 pr-6 relative"
      >
        {/* Logo with circular orbit animation */}
        <motion.div
          className="z-50"
          style={{ x: offset.x, y: offset.y }}
        >
          <Image src={logo} alt="Logo" className="w-12 h-12" />
        </motion.div>

        {/* Horizontal line visible only on desktop */}
        <div className="hidden xl:block absolute left-[7rem] right-[700px] top-1/2 h-[1px] bg-gray-500 z-50" />

        {/* Desktop nav */}
        <motion.ul
          className="hidden sm:flex bg-white/10 backdrop-blur-sm xl:px-16 lg:px-12 sm:px-8 xl:gap-16 lg:gap-10 sm:gap-7 gap-10 tracking-widest uppercase text-white text-sm relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link href={item.href}>
                  <a className="flex gap-2 font-light py-9 transition-colors duration-300 hover:text-red-400">
                    <span className="font-bold">{item.number}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />
                    )}
                  </a>
                </Link>
              </li>
            );
          })}
        </motion.ul>

        {/* Mobile menu button */}
        <div className="sm:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={48} className="text-white cursor-pointer" />
          ) : (
            <Menu size={48} className="text-white cursor-pointer" />
          )}
        </div>

        {/* Mobile sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-white/5 backdrop-blur-lg p-8 flex flex-col gap-8 uppercase text-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                onClick={() => setIsOpen(false)}
                className={`flex gap-3 text-lg transition-colors duration-300 hover:text-red-400 ${router.pathname === item.href ? 'underline underline-offset-8 decoration-2' : ''
                  }`}
              >
                <span className="font-bold">{item.number}</span>
                <span className="font-light">{item.label}</span>
              </a>
            </Link>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}
