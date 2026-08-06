// "use client";

// import {
//   BatteryLow,
//   Clock3,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// const features = [
//   {
//     id: 1,
//     title: "Range",
//     description:
//       "Up to 200 km on a single charge, conquer any journey across Nepal.",
//     icon: BatteryLow,
//   },
//   {
//     id: 2,
//     title: "Performance",
//     description:
//       "Instant torque, zero lag. Experience exhilarating acceleration.",
//     icon: Clock3,
//   },
//   {
//     id: 3,
//     title: "Made in Nepal",
//     description:
//       "Proudly designed & assembled in Kathmandu for Nepali roads.",
//     icon: MapPin,
//   },
//   {
//     id: 4,
//     title: "Reliable & Safe",
//     description:
//       "CBS brakes, IP67-rated batteries, and rigorous safety testing.",
//     icon: ShieldCheck,
//   },
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="bg-black text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Why Choose{" "}
//             <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//               Gantabya
//             </span>
//           </h2>

//           <p className="text-gray-400 text-lg mt-4">
//             Built for Nepal. Engineered for the future.
//           </p>
//         </div>

    
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.id}
//                 className="rounded-2xl border border-gray-800 bg-black p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(30,160,60,0.30)]"
//               >
                
//                 <div className="mb-6">
//                   <Icon
//                     className="w-10 h-10 text-[#00E676]"
//                     strokeWidth={2}
//                   />
//                 </div>

               
//                 <h3 className="text-2xl font-semibold mb-3">
//                   {item.title}
//                 </h3>

              
//                 <p className="text-gray-400 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import {
//   BatteryCharging,
//   Gauge,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// const features = [
//   {
//     id: 1,
//     title: "Range",
//     description:
//       "Up to 200 km on a single charge, conquer any journey across Nepal.",
//     icon: BatteryCharging,
//   },
//   {
//     id: 2,
//     title: "Performance",
//     description:
//       "Instant torque, zero lag. Experience exhilarating acceleration.",
//     icon: Gauge,
//   },
//   {
//     id: 3,
//     title: "Made in Nepal",
//     description:
//       "Proudly designed & assembled in Kathmandu for Nepali roads.",
//     icon: MapPin,
//   },
//   {
//     id: 4,
//     title: "Reliable & Safe",
//     description:
//       "CBS brakes, IP67-rated batteries, and rigorous safety testing.",
//     icon: ShieldCheck,
//   },
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="relative bg-[#050806] text-white py-24 px-6 overflow-hidden font-sans">
//       {/* Background Ambient Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
//             Why Choose{" "}
//             <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">
//               Gantabya
//             </span>
//           </h2>

//           <p className="text-emerald-100/70 text-lg mt-4 font-light">
//             Built for Nepal. Engineered for the future.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.id}
//                 className="rounded-3xl border border-emerald-500/20 bg-[#0a1410]/90 backdrop-blur-xl p-8 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-1 group"
//               >
//                 <div className="mb-6 p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
//                   <Icon className="w-6 h-6" strokeWidth={2} />
//                 </div>

//                 <h3 className="text-2xl font-bold mb-3 text-white">
//                   {item.title}
//                 </h3>

//                 <p className="text-emerald-100/60 leading-relaxed text-sm">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }










"use client";

import {
  BatteryCharging,
  Gauge,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="relative bg-[#050806] text-white py-28 px-6 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
              <Zap size={14} className="text-emerald-400" />
              <span>Uncompromising Quality</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                Gantabya
              </span>
            </h2>
          </div>
          <p className="text-emerald-100/70 text-base md:text-lg max-w-md font-light">
            Engineered from the ground up to conquer Nepali terrains with zero emissions and maximum efficiency.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Range (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-3xl border border-emerald-500/20 bg-[#0a1410]/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="mb-12 p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <BatteryCharging className="w-7 h-7" strokeWidth={2} />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80">Extended Endurance</span>
              <h3 className="text-3xl font-bold mt-1 mb-3 text-white">Up to 200 km Range</h3>
              <p className="text-emerald-100/60 leading-relaxed max-w-xl text-base">
                Conquer any journey across Nepal on a single charge. Advanced lithium battery architecture ensures you go further without looking back.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Performance (Spans 1 column) */}
          <div className="md:col-span-1 rounded-3xl border border-emerald-500/20 bg-[#0a1410]/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] group">
            <div className="mb-12 p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <Gauge className="w-7 h-7" strokeWidth={2} />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80">Raw Power</span>
              <h3 className="text-2xl font-bold mt-1 mb-3 text-white">Instant Torque</h3>
              <p className="text-emerald-100/60 leading-relaxed text-sm">
                Zero lag throttle response delivering exhilarating acceleration instantly when you twist the handle.
              </p>
            </div>
          </div>

          {/* Bento Card 3: Made in Nepal (Spans 1 column) */}
          <div className="md:col-span-1 rounded-3xl border border-emerald-500/20 bg-[#0a1410]/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] group">
            <div className="mb-12 p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7" strokeWidth={2} />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80">Local Craftsmanship</span>
              <h3 className="text-2xl font-bold mt-1 mb-3 text-white">Made in Nepal</h3>
              <p className="text-emerald-100/60 leading-relaxed text-sm">
                Proudly designed and assembled right here in Kathmandu, tailored specifically for local road conditions.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Reliable & Safe (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-3xl border border-emerald-500/20 bg-[#0a1410]/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="mb-12 p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-7 h-7" strokeWidth={2} />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80">Total Protection</span>
              <h3 className="text-3xl font-bold mt-1 mb-3 text-white">Reliable & Safe</h3>
              <p className="text-emerald-100/60 leading-relaxed max-w-xl text-base">
                Equipped with CBS braking systems, IP67-rated waterproof batteries, and subjected to rigorous safety benchmarks before hitting the streets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}