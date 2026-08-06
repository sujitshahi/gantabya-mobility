
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div>
//       <section
//         className="relative h-screen bg-cover bg-center"
//         style={{
//           backgroundImage:
//           "url('https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg')",
//                 }}
//               >
      
//         <div className="absolute inset-0 bg-black/45"></div>

        
//         <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
//           <div className="max-w-2xl">
        
//             <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
//               The EV <br />
//               <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//                 Revolution
//               </span>
//             </h1>

          
//             <p className="mt-6 text-gray-200 text-lg md:text-2xl leading-relaxed">
//               Premium electric motorcycles made in Nepal for
//               <br className="hidden md:block" />
//               the future of mobility.
//             </p>

      
//             <div className="mt-8 flex flex-wrap gap-4">
              
//               <Link href="/Testride">
//                 <button className="bg-green-400 hover:bg-green-500 cursor-pointer text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
//                   Book Test Ride
//                 </button>
//               </Link>

//               <Link href="/bikes">
//                 <button
//                   className="border bg-black border-green-400 text-green-400 cursor-pointer
//                   font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition duration-300"
//                 >
//                   Explore Bikes
//                   <ArrowRight size={20} />
//                 </button>
//               </Link>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }








// import Link from "next/link";
// import { ArrowRight, Zap, ShieldCheck, Gauge } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       {/* Background Image with Cinematic Gradient Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
//         style={{
//           backgroundImage: "url('https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 backdrop-blur-[2px]"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-16 lg:px-24 py-12">
//         <div className="pt-20">
//           {/* Top Badge */}
//           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs md:text-sm font-medium tracking-wide uppercase mb-6 backdrop-blur-md">
//             <Zap size={14} className="animate-pulse" />
//             <span>Made in Nepal • Future of Mobility</span>
//           </div>

//           <div className="max-w-3xl">
//             <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
//               The EV <br />
//               <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 Revolution
//               </span>
//             </h1>

//             <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-normal">
//               Premium electric motorcycles engineered locally for peak performance, zero emissions, and the ultimate ride across any terrain.
//             </p>

//             {/* Action Buttons */}
//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link href="/Testride">
//                 <button className="group relative inline-flex items-center gap-2 bg-green-400 hover:bg-green-400/90 text-black font-bold px-7 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-400/20 hover:scale-[1.02] cursor-pointer">
//                   <span>Book Test Ride</span>
//                   <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//               </Link>

//               <Link href="/bikes">
//                 <button className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-green-400/50 font-semibold px-7 py-4 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer">
//                   <span>Explore Bikes</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Quick Stats Bar */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 pb-4 max-w-2xl border-t border-white/10 mt-12">
//           <div className="flex items-center gap-3">
//             <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
//               <Gauge size={20} />
//             </div>
//             <div>
//               <div className="text-white font-bold text-base md:text-lg">180+ km</div>
//               <div className="text-gray-400 text-xs">Per Charge Range</div>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
//               <Zap size={20} />
//             </div>
//             <div>
//               <div className="text-white font-bold text-base md:text-lg">Instant</div>
//               <div className="text-gray-400 text-xs">Torque & Power</div>
//             </div>
//           </div>

//           <div className="col-span-2 md:col-span-1 flex items-center gap-3">
//             <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
//               <ShieldCheck size={20} />
//             </div>
//             <div>
//               <div className="text-white font-bold text-base md:text-lg">100% Eco</div>
//               <div className="text-gray-400 text-xs">Zero Emissions</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// import Link from "next/link";
// import { ArrowRight, Zap, ShieldCheck, Gauge, BatteryCharging } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-gray-950 text-white flex items-center overflow-hidden">
//       {/* Background Glow Effects */}
//       <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Left Column: Typography & CTAs */}
//         <div className="lg:col-span-7 space-y-8">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
//             <Zap size={14} className="text-green-400 animate-bounce" />
//             <span>Engineered in Nepal • Next-Gen EV</span>
//           </div>

//           <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
//             Ride The <br />
//             <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//               Future Today.
//             </span>
//           </h1>

//           <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
//             Experience uncompromised torque, zero emissions, and cutting-edge design built specifically for modern urban commuting and rugged terrains.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             <Link href="/Testride">
//               <button className="group relative inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 font-bold px-7 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-green-500/10 hover:scale-[1.02] cursor-pointer">
//                 <span>Book Test Ride</span>
//                 <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </Link>

//             <Link href="/bikes">
//               <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-semibold px-7 py-4 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer">
//                 <span>Explore Fleet</span>
//               </button>
//             </Link>
//           </div>

//           {/* Quick Metrics */}
//           <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
//             <div>
//               <div className="text-2xl sm:text-3xl font-extrabold text-white">180km</div>
//               <div className="text-xs text-gray-400 mt-1">Max Range</div>
//             </div>
//             <div>
//               <div className="text-2xl sm:text-3xl font-extrabold text-white">0-60</div>
//               <div className="text-xs text-gray-400 mt-1">In 3.5 Seconds</div>
//             </div>
//             <div>
//               <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
//               <div className="text-xs text-gray-400 mt-1">Electric Torque</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Featured Bike Preview Card */}
//         <div className="lg:col-span-5 relative">
//           <div className="relative mx-auto max-w-md lg:max-w-none">
//             {/* Ambient Glow Card Border */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur-md opacity-30"></div>

//             <div className="relative bg-gray-900 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-6">
//               <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-gray-950">
//                 <img 
//                   src="https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg" 
//                   alt="Featured Electric Bike"
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-green-400">
//                   Featured Model
//                 </div>
//               </div>

//               <div className="flex justify-between items-end">
//                 <div>
//                   <span className="text-xs text-gray-400 uppercase tracking-widest">Thunder Series</span>
//                   <h3 className="text-2xl font-bold text-white mt-0.5">Thunder X</h3>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs text-gray-400 block">Starting at</span>
//                   <span className="text-lg font-bold text-green-400">NPR 4,50,000</span>
//                 </div>
//               </div>

//               <Link href="/bikes" className="block">
//                 <button className="w-full py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2">
//                   <span>View Specifications</span>
//                   <ArrowRight size={16} />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }








// import Link from "next/link";
// import { ArrowRight, BatteryCharging, Gauge, Zap } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative h-screen w-full bg-black overflow-hidden font-sans">
//       {/* Immersive Background with Top/Bottom Vignette */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center md:bg-top scale-105"
//         style={{
//           backgroundImage: "url('https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg')",
//         }}
//       >
//         {/* Gradients to ensure text readability at top and dashboard at bottom */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/95"></div>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 h-full flex flex-col justify-between pt-32 pb-8 px-4 sm:px-8 lg:px-16">
        
//         {/* Top: Centered Hero Typography */}
//         <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-green-500/30 text-green-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md mb-6">
//             <Zap size={14} className="animate-pulse" />
//             Designed in Nepal
//           </div>
          
//           <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
//             Pure Electric <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
//               Adrenaline
//             </span>
//           </h1>
          
//           <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl font-light">
//             No noise. No emissions. Just raw, instant torque. Experience the future of two-wheeled mobility.
//           </p>
//         </div>

//         {/* Bottom: Floating Dashboard Bar */}
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            
//             {/* Left: Vehicle Stats */}
//             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 w-full lg:w-auto">
//               <div className="flex flex-col items-center lg:items-start">
//                 <Gauge size={24} className="text-green-400 mb-2 opacity-80" />
//                 <span className="text-3xl font-bold text-white">180<span className="text-lg text-gray-400 font-normal"> km/h</span></span>
//                 <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">Top Speed</span>
//               </div>
              
//               <div className="hidden sm:block w-px h-12 bg-white/10"></div>

//               <div className="flex flex-col items-center lg:items-start">
//                 <BatteryCharging size={24} className="text-green-400 mb-2 opacity-80" />
//                 <span className="text-3xl font-bold text-white">200<span className="text-lg text-gray-400 font-normal"> km</span></span>
//                 <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">Max Range</span>
//               </div>

//               <div className="hidden sm:block w-px h-12 bg-white/10"></div>

//               <div className="flex flex-col items-center lg:items-start">
//                 <Zap size={24} className="text-green-400 mb-2 opacity-80" />
//                 <span className="text-3xl font-bold text-white">3.5<span className="text-lg text-gray-400 font-normal"> s</span></span>
//                 <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">0-100 km/h</span>
//               </div>
//             </div>

//             {/* Right: Actions */}
//             <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
//               <Link href="/bikes" className="w-full sm:w-auto">
//                 <button className="w-full py-4 px-8 rounded-xl bg-transparent border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-300">
//                   Explore Models
//                 </button>
//               </Link>
              
//               <Link href="/Testride" className="w-full sm:w-auto">
//                 <button className="group w-full py-4 px-8 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
//                   Book Test Ride
//                   <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
//                 </button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import Link from "next/link";
// import { ArrowRight, Zap, Shield, CheckCircle2 } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden font-sans">
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Left Column: Clean Portfolio-Inspired Typography & Actions */}
//         <div className="lg:col-span-7 space-y-6">
//           {/* Status Badge */}
//           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
//             <span>Made in Nepal • Next-Gen EV Platform</span>
//           </div>

//           <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
//             Engineering the <br />
//             <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
//               Future of Mobility.
//             </span>
//           </h1>

//           <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
//             A high-performance electric motorcycle crafted for sustainable transit, delivering exceptional torque, modern aesthetics, and seamless urban navigation.
//           </p>

//           {/* Feature Checkmarks */}
//           <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
//             <div className="flex items-center gap-2">
//               <CheckCircle2 size={16} className="text-emerald-400" />
//               <span>Zero Carbon Emissions</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle2 size={16} className="text-emerald-400" />
//               <span>Instant Throttle Torque</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle2 size={16} className="text-emerald-400" />
//               <span>Extended Battery Life</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle2 size={16} className="text-emerald-400" />
//               <span>Local Service & Support</span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-4">
//             <Link href="/Testride">
//               <button className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 cursor-pointer">
//                 <span>Book Test Ride</span>
//                 <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </Link>

//             <Link href="/bikes">
//               <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 cursor-pointer">
//                 <span>Explore Fleet</span>
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Column: Sleek Framed Card Showcase */}
//         <div className="lg:col-span-5">
//           <div className="relative mx-auto max-w-md lg:max-w-none">
//             {/* Outer Decorative Frame */}
//             <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-md opacity-25"></div>

//             <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4">
//               <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-950">
//                 <img 
//                   src="https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg" 
//                   alt="Electric Motorbike"
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-xs font-semibold text-emerald-400">
//                   Flagship Edition
//                 </div>
//               </div>

//               <div className="flex items-center justify-between px-2">
//                 <div>
//                   <h3 className="text-xl font-bold text-white">Thunder X Supreme</h3>
//                   <p className="text-xs text-slate-400 mt-0.5">Engineered for peak performance</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs text-slate-400 block">Price</span>
//                   <span className="text-base font-bold text-emerald-400">NPR 4,50,000</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }






// import Link from "next/link";
// import { ArrowRight, Zap, Gauge, BatteryCharging } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-between overflow-hidden font-sans pt-24 pb-16 px-6">
//       {/* Ambient Background Radial Glow */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

//       {/* Top Section: Centered Headlines & CTAs */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-semibold uppercase tracking-widest shadow-inner">
//           <Zap size={14} className="animate-pulse" />
//           <span>Engineered & Built in Nepal</span>
//         </div>

//         <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95]">
//           The Electric <br />
//           <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
//             Apex
//           </span>
//         </h1>

//         <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
//           Uncompromising electric performance designed for the bold. Instant torque, zero emissions, and futuristic styling.
//         </p>

//         <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
//           <Link href="/Testride">
//             <button className="group inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-emerald-400/20 cursor-pointer">
//               <span>Book Test Ride</span>
//               <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </Link>

//           <Link href="/bikes">
//             <button className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer">
//               <span>Explore Fleet</span>
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Center/Bottom Section: Cinematic Product Spotlight Showcase */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto mt-16">
//         <div className="relative rounded-3xl p-3 bg-neutral-900/80 border border-neutral-800 backdrop-blur-2xl shadow-2xl">
//           <div className="relative h-72 sm:h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden bg-neutral-950">
//             <img 
//               src="https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg" 
//               alt="Electric Motorbike Spotlight"
//               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
//             />
            
//             {/* Floating Overlay Badge Inside Image */}
//             <div className="absolute top-4 left-4 bg-neutral-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800 flex items-center gap-3">
//               <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
//               <span className="text-xs font-mono uppercase tracking-wider text-neutral-200">Thunder X Series</span>
//             </div>

//             <div className="absolute bottom-4 right-4 bg-neutral-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800">
//               <span className="text-xs text-neutral-400 block">Starting at</span>
//               <span className="text-sm font-bold text-emerald-400">NPR 4,50,000</span>
//             </div>
//           </div>

//           {/* Floating Quick Stats Ribbon Underneath Image */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-2 py-3">
//             <div className="flex items-center gap-3 bg-neutral-950/50 p-3 rounded-2xl border border-neutral-800/60">
//               <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400"><Gauge size={20} /></div>
//               <div>
//                 <div className="text-xs text-neutral-400">Top Speed</div>
//                 <div className="text-sm sm:text-base font-bold text-white">180 km/h</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 bg-neutral-950/50 p-3 rounded-2xl border border-neutral-800/60">
//               <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400"><BatteryCharging size={20} /></div>
//               <div>
//                 <div className="text-xs text-neutral-400">Max Range</div>
//                 <div className="text-sm sm:text-base font-bold text-white">200 km</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 bg-neutral-950/50 p-3 rounded-2xl border border-neutral-800/60">
//               <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400"><Zap size={20} /></div>
//               <div>
//                 <div className="text-xs text-neutral-400">Torque</div>
//                 <div className="text-sm sm:text-base font-bold text-white">Instant</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// import Link from "next/link";
// import { ArrowRight, Zap, Gauge, BatteryCharging } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-between overflow-hidden font-sans pt-24 pb-16 px-6">
//       {/* Ambient Background Radial Glow with subtle breathing pulse */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-1000"></div>

//       {/* Top Section: Centered Headlines & CTAs */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 animate-fadeIn">
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-semibold uppercase tracking-widest shadow-inner transform transition hover:scale-105 duration-300">
//           <Zap size={14} className="animate-bounce" />
//           <span>Engineered & Built in Nepal</span>
//         </div>

//         <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95]">
//           The Electric <br />
//           <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
//             Apex
//           </span>
//         </h1>

//         <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
//           Uncompromising electric performance designed for the bold. Instant torque, zero emissions, and futuristic styling.
//         </p>

//         <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
//           <Link href="/Testride">
//             <button className="group inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/40 hover:-translate-y-0.5 cursor-pointer">
//               <span>Book Test Ride</span>
//               <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
//             </button>
//           </Link>

//           <Link href="/bikes">
//             <button className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
//               <span>Explore Fleet</span>
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Center/Bottom Section: Cinematic Product Spotlight Showcase with Hover Zoom */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto mt-16 transition-all duration-700 hover:scale-[1.01]">
//         <div className="relative rounded-3xl p-3 bg-neutral-900/80 border border-neutral-800 backdrop-blur-2xl shadow-2xl">
//           <div className="relative h-72 sm:h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden bg-neutral-950 group">
//             <img 
//               src="https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg" 
//               alt="Electric Motorbike Spotlight"
//               className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
//             />
            
//             {/* Floating Overlay Badge Inside Image */}
//             <div className="absolute top-4 left-4 bg-neutral-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800 flex items-center gap-3 shadow-lg">
//               <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
//               <span className="text-xs font-mono uppercase tracking-wider text-neutral-200">Thunder X Series</span>
//             </div>

//             <div className="absolute bottom-4 right-4 bg-neutral-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800 shadow-lg">
//               <span className="text-xs text-neutral-400 block">Starting at</span>
//               <span className="text-sm font-bold text-emerald-400">NPR 4,50,000</span>
//             </div>
//           </div>

//           {/* Floating Quick Stats Ribbon Underneath Image with Hover Glow Effects */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-2 py-3">
//             <div className="flex items-center gap-3 bg-neutral-950/50 p-3 rounded-2xl border border-neutral-800/60 transition-all duration-300 hover:border-emerald-500/40 hover:bg-neutral-900/60">
//               <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform duration-300 hover:scale-110"><Gauge size={20} /></div>
//               <div>
//                 <div className="text-xs text-neutral-400">Top Speed</div>
//                 <div className="text-sm sm:text-base font-bold text-white">180 km/h</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 bg-neutral-950/50 p-3 rounded-2xl border border-neutral-800/60 transition-all duration-300 hover:border-cyan-500/40 hover:bg-neutral-900/60">
//               <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 hover:scale-110"><BatteryCharging size={20} /></div>
//               <div>
//                 <div className="text-xs text-neutral-400">Max Range</div>
//                 <div className="text-sm sm:text-base font-bold text-white">200 km</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 bg-neutral-950/50 p-3 rounded-2xl border border-neutral-800/60 transition-all duration-300 hover:border-emerald-500/40 hover:bg-neutral-900/60">
//               <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform duration-300 hover:scale-110"><Zap size={20} /></div>
//               <div>
//                 <div className="text-xs text-neutral-400">Torque</div>
//                 <div className="text-sm sm:text-base font-bold text-white">Instant</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









import Link from "next/link";
import { ArrowRight, Zap, Gauge, BatteryCharging } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-[#050806] text-white flex flex-col items-center justify-between overflow-hidden font-sans pt-24 pb-16 px-6">
      {/* Rich Lush Greenery Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Section: Centered Headlines & CTAs */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 mt-7">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md transform transition hover:scale-105 duration-300">
          <Zap size={14} className="animate-bounce text-emerald-400" />
          <span>Engineered & Built in Nepal</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95]">
          The Electric <br />
          <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.3)]">
            Apex
          </span>
        </h1>

        <p className="text-emerald-100/70 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Uncompromising electric performance inspired by nature. Instant torque, zero emissions, and futuristic styling for the eco-bold.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/Testride">
            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 cursor-pointer">
              <span>Book Test Ride</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </Link>

          <Link href="/bikes">
            <button className="inline-flex items-center gap-2 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-200 border border-emerald-500/30 font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 cursor-pointer">
              <span>Explore Fleet</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Center/Bottom Section: Cinematic Product Spotlight Showcase with Lush Greenery Accents */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-16 transition-all duration-700 hover:scale-[1.01]">
        <div className="relative rounded-3xl p-3 bg-[#0a1410]/90 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,78,59,0.3)]">
          <div className="relative h-72 sm:h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden bg-[#050a08] group">
            <img 
              src="https://i.pinimg.com/1200x/ca/0b/a8/ca0ba818fd55e8368d46f0d71bf47359.jpg" 
              alt="Electric Motorbike Spotlight"
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Floating Overlay Badge Inside Image */}
            <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/30 flex items-center gap-3 shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-200">Thunder X Series</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-emerald-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/30 shadow-lg">
              <span className="text-xs text-emerald-300/70 block">Starting at</span>
              <span className="text-sm font-bold text-emerald-400">NPR 4,50,000</span>
            </div>
          </div>

          {/* Floating Quick Stats Ribbon Underneath Image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-2 py-3">
            <div className="flex items-center gap-3 bg-[#060e0a]/80 p-3 rounded-2xl border border-emerald-500/20 transition-all duration-300 hover:border-emerald-400 hover:bg-[#0a1611]">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 transition-transform duration-300 hover:scale-110"><Gauge size={20} /></div>
              <div>
                <div className="text-xs text-emerald-300/60">Top Speed</div>
                <div className="text-sm sm:text-base font-bold text-white">180 km/h</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#060e0a]/80 p-3 rounded-2xl border border-emerald-500/20 transition-all duration-300 hover:border-emerald-400 hover:bg-[#0a1611]">
              <div className="p-2 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 transition-transform duration-300 hover:scale-110"><BatteryCharging size={20} /></div>
              <div>
                <div className="text-xs text-emerald-300/60">Max Range</div>
                <div className="text-sm sm:text-base font-bold text-white">200 km</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#060e0a]/80 p-3 rounded-2xl border border-emerald-500/20 transition-all duration-300 hover:border-emerald-400 hover:bg-[#0a1611]">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 transition-transform duration-300 hover:scale-110"><Zap size={20} /></div>
              <div>
                <div className="text-xs text-emerald-300/60">Torque</div>
                <div className="text-sm sm:text-base font-bold text-white">Instant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}