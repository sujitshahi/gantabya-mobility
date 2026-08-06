
// import Image from 'next/image';
// import Link from 'next/link';
// import { MapPin, Phone, Mail } from 'lucide-react';
// import gantabyaLogo from '../../logo/gantabyalogo.png';

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-16 px-8">
//       {/* Main container */}
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Border */}
//         <div className="border-t border-white/20 pt-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
//             {/* Brand Section */}
//             <div className="flex flex-col gap-4">
//               <Link
//                 href="/"
//                 className="flex items-center gap-3 group w-fit"
//               >
//                 <Image
//                   src={gantabyaLogo}
//                   alt="Gantabya logo"
//                   width={40}
//                   height={40}
//                   className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
//                   style={{ width: 'auto', height: 'auto' }}
//                   priority
//                 />
//                 <span className="text-2xl font-bold group-hover:text-green-500 transition-colors">
//                   Gantabya Mobility
//                 </span>
//               </Link>

//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                 Leading Nepal EV revolution since 2019. Premium electric motorcycles for the future of
//                 mobility.
//               </p>
//             </div>

//             {/* Explore Section */}
//             <div className="md:ml-20">
//               <h3 className="font-bold text-lg mb-6">Explore</h3>

//               <ul className="space-y-4 text-gray-400">
//                 <li>
//                   <Link
//                     href="/electric"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     Our Bikes
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/technology"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     Technology
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/about-us"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/Testride"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     Book Test Ride
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Support Section */}
//             <div className="md:ml-10">
//               <h3 className="font-bold text-lg mb-6">Support</h3>

//               <ul className="space-y-4 text-gray-400">
//                 <li>
//                   <Link
//                     href="/Support"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     FAQs
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/Support"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     Warranty
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/Support"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     Service Centers
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/Contact"
//                     className="hover:text-green-500 transition-colors"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Section */}
//             <div>
//               <h3 className="font-bold text-lg mb-6">Contact</h3>

//               <ul className="space-y-4 text-gray-400">
//                 <li className="flex items-center gap-3">
//                   <MapPin
//                     className="text-green-500 shrink-0"
//                     size={20}
//                   />
//                   Kathmandu, Nepal
//                 </li>

//                 <li className="flex items-center gap-3">
//                   <Phone
//                     className="text-green-500 shrink-0"
//                     size={20}
//                   />
//                   +977 1-XXXXXXX
//                 </li>

//                 <li className="flex items-center gap-3">
//                   <Mail
//                     className="text-green-500 shrink-0"
//                     size={20}
//                   />
//                   info@gantabya.com
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Border */}
//         <div className="mt-12 border-t border-white/20">
//           <div className="flex justify-center items-center py-6">
//             <span className="text-gray-500 text-sm">
//               © 2026 Gantabya Mobility. All Rights Reserved.
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
















import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import gantabyaLogo from '../../logo/gantabyalogo.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#050806] text-white py-20 px-8 overflow-hidden font-sans border-t border-emerald-500/20">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-emerald-500/20">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 group w-fit"
            >
              <Image
                src={gantabyaLogo}
                alt="Gantabya logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
              <span className="text-2xl font-black tracking-tight group-hover:text-emerald-400 transition-colors">
                Gantabya Mobility
              </span>
            </Link>

            <p className="text-emerald-100/60 text-sm leading-relaxed max-w-xs font-light">
              Leading Nepal EV revolution since 2019. Premium electric motorcycles engineered for the future of mobility.
            </p>
          </div>

          {/* Explore Section */}
          <div className="md:ml-12">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white text-sm font-mono">Explore</h3>

            <ul className="space-y-3.5 text-emerald-100/70 text-sm">
              <li>
                <Link
                  href="/electric"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Our Bikes
                </Link>
              </li>

              <li>
                <Link
                  href="/technology"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/Testride"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Book Test Ride
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="md:ml-6">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white text-sm font-mono">Support</h3>

            <ul className="space-y-3.5 text-emerald-100/70 text-sm">
              <li>
                <Link
                  href="/Support"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/Support"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Warranty
                </Link>
              </li>

              <li>
                <Link
                  href="/Support"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Service Centers
                </Link>
              </li>

              <li>
                <Link
                  href="/Contact"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white text-sm font-mono">Contact</h3>

            <ul className="space-y-4 text-emerald-100/70 text-sm">
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <MapPin size={16} />
                </div>
                <span>Kathmandu, Nepal</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Phone size={16} />
                </div>
                <span>+977 1-XXXXXXX</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Mail size={16} />
                </div>
                <span>info@gantabya.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 text-xs font-light text-emerald-100/50">
          <span>
            © 2026 Gantabya Mobility. All Rights Reserved.
          </span>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}