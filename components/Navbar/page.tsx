'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import gantabyaLogo from '../../logo/gantabyalogo.png';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

function NavItem({ href, children, onClick, isMobile = false }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isMobile) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
          isActive 
            ? 'text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 font-semibold' 
            : 'text-emerald-100/80 bg-emerald-950/20 border border-emerald-500/10 hover:bg-emerald-950/40 hover:text-white'
        }`}
      >
        <span>{children}</span>
        <ChevronRight size={14} className="text-emerald-400" />
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`relative px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
        isActive 
          ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold' 
          : 'text-emerald-100/70 hover:text-white hover:bg-emerald-500/5'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/electric', label: 'Our Bikes' },
    { href: '/technology', label: 'Technology' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/Support', label: 'Support' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Floating Header Wrapper */}
      <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 font-sans">
        <div className={`max-w-7xl mx-auto transition-all duration-500 bg-[#0a1410] ${
          isScrolled 
            ? 'backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] py-3 px-6 rounded-2xl' 
            : 'backdrop-blur-md border border-emerald-500/15 py-4 px-6 rounded-2xl'
        }`}>
          <div className="flex items-center justify-between">            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <Image
                src={gantabyaLogo}
                alt="Gantabya logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-9 md:h-10"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="hidden lg:block">
              <Link href="/Testride">
                <button className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                  <Zap size={14} fill="currentColor" />
                  <span>Test Ride</span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`max-w-7xl mx-auto mt-2 bg-[#0a1410] border border-emerald-500/20 rounded-2xl transition-all duration-300 lg:hidden overflow-hidden shadow-2xl ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0 max-h-[500px] p-6' 
              : 'opacity-0 invisible -translate-y-4 max-h-0 p-0 border-0'
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} isMobile>
                {item.label}
              </NavItem>
            ))}

            <div className="pt-4 mt-2 border-t border-emerald-500/10">
              <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 text-sm font-mono uppercase tracking-wider">
                  <Zap size={16} fill="currentColor" />
                  <span>Book Test Ride</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      {/* <div className="h-24" /> */}
    </>
  );
}