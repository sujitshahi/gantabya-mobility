
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import gantabyaLogo from '../../logo/gantabyalogo.png';

// function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link 
//       href={href} 
//       onClick={onClick}
//       className={`transition duration-200 ${
//         isActive 
//           ? 'text-green-500 font-semibold' 
//           : 'text-gray-300 hover:text-white'
//       }`}
//     >
//       {children}
//     </Link>
//   );
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);


//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [setIsScrolled]);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/electric', label: 'Our Bikes' },
//     { href: '/technology', label: 'Technology' },
//     { href: '/about-us', label: 'About Us' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/Support', label: 'Support' },
//     { href: '/Contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <header 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-[#111111]/95 backdrop-blur-md border-b border-gray-800' 
//             : 'bg-[#111111]/90 backdrop-blur-sm'
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">            
//             <Link href="/" className="flex items-center gap-3 cursor-pointer">
//                 <Image
//                   src={gantabyaLogo}
//                   alt="Gantabya logo"
//                   width={120}
//                   height={40}
//                   className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105 sm:h-10 md:h-12"
                 
//                   priority
//                 />
//                   </Link>

//             <div className="hidden lg:flex items-center gap-6 xl:gap-8">
//               {navItems.map((item) => (
//                 <NavItem key={item.href} href={item.href}>
//                   {item.label}
//                 </NavItem>
//               ))}
//             </div>

//             <div className="hidden lg:block">
//               <Link href="/Testride">
//                 <button className="bg-[#00d65c] text-black px-6 xl:px-8 py-2.5 font-semibold rounded-full hover:bg-[#00b34d] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-green-500/25">
//                   Book Test Ride
//                 </button>
//               </Link>
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6 text-white" />
//               ) : (
//                 <Menu className="w-6 h-6 text-white" />
//               )}
//             </button>
//           </div>
//         </nav>

//         <div
//           className={`fixed inset-x-0 top-16 md:top-20 bg-[#111111]/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 lg:hidden ${
//             isMenuOpen 
//               ? 'opacity-100 visible translate-y-0' 
//               : 'opacity-0 invisible -translate-y-4'
//           }`}
//           style={{ height: isMenuOpen ? 'auto' : '0', overflow: 'hidden' }}
//         >
//           <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
//             {navItems.map((item) => (
//               <NavItem key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                 <div className="block py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
//                   {item.label}
//                 </div>
//               </NavItem>
//             ))}

//             <div className="pt-4 px-4">
//               <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
//                 <button className="w-full bg-[#00d65c] text-black px-6 py-3 font-semibold rounded-full hover:bg-[#00b34d] transition-all duration-200 cursor-pointer">
//                   Book Test Ride
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>


//       <div className="h-16 md:h-20" />
//     </>
//   );

// }









// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { Menu, X, Zap, ChevronRight } from 'lucide-react';
// import gantabyaLogo from '../../logo/gantabyalogo.png';

// function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link 
//       href={href} 
//       onClick={onClick}
//       className={`relative px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
//         isActive 
//           ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold' 
//           : 'text-emerald-100/70 hover:text-white hover:bg-emerald-500/5'
//       }`}
//     >
//       {children}
//     </Link>
//   );
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/electric', label: 'Our Bikes' },
//     { href: '/technology', label: 'Technology' },
//     { href: '/about-us', label: 'About Us' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/Support', label: 'Support' },
//     { href: '/Contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       {/* Floating Header Wrapper */}
//       <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 font-sans">
//         <div className={`max-w-7xl mx-auto transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-[#0a1410]/85 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] py-3 px-6 rounded-2xl' 
//             : 'bg-[#0a1410]/40 backdrop-blur-md border border-emerald-500/10 py-4 px-6 rounded-2xl'
//         }`}>
//           <div className="flex items-center justify-between">            
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-3 cursor-pointer group">
//               <Image
//                 src={gantabyaLogo}
//                 alt="Gantabya logo"
//                 width={120}
//                 height={40}
//                 className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-9 md:h-10"
//                 priority
//               />
//             </Link>

//             {/* Desktop Navigation Links */}
//             <div className="hidden lg:flex items-center gap-1 xl:gap-2">
//               {navItems.map((item) => (
//                 <NavItem key={item.href} href={item.href}>
//                   {item.label}
//                 </NavItem>
//               ))}
//             </div>

//             {/* Action CTA Button */}
//             <div className="hidden lg:block">
//               <Link href="/Testride">
//                 <button className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
//                   <Zap size={14} fill="currentColor" />
//                   <span>Test Ride</span>
//                 </button>
//               </Link>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-5 h-5" />
//               ) : (
//                 <Menu className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <div
//           className={`max-w-7xl mx-auto mt-2 bg-[#0a1410]/95 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl transition-all duration-300 lg:hidden overflow-hidden ${
//             isMenuOpen 
//               ? 'opacity-100 visible translate-y-0 shadow-2xl p-6' 
//               : 'opacity-0 invisible -translate-y-4 p-0 h-0'
//           }`}
//         >
//           <div className="space-y-2">
//             {navItems.map((item) => (
//               <NavItem key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                 <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-950/20 border border-emerald-500/10 hover:bg-emerald-950/40 transition-colors">
//                   <span>{item.label}</span>
//                   <ChevronRight size={14} className="text-emerald-400" />
//                 </div>
//               </NavItem>
//             ))}

//             <div className="pt-4 mt-2 border-t border-emerald-500/10">
//               <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
//                 <button className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 text-sm font-mono uppercase tracking-wider">
//                   <Zap size={16} fill="currentColor" />
//                   <span>Book Test Ride</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Spacer to prevent content overlap */}
//       <div className="h-24" />
//     </>
//   );
// }








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