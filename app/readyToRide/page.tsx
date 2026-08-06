// import Link from "next/link";
// import { Star, Zap } from "lucide-react";

// const riders = [
//   {
//     name: "Aashish Shrestha",
//     location: "Kathmandu",
//     review:
//       "Switched from petrol to Gantabya Volt, saving NPR 3,000/month on fuel alone. The ride quality is unmatched.",
//   },
//   {
//     name: "Priya Thapa",
//     location: "Bhaktapur",
//     review:
//       "Silent, smooth, and stylish. My daily commute has never been this enjoyable. Proud to ride Made in Nepal!",
//   },
//   {
//     name: "Rajesh Tamang",
//     location: "Lalitpur",
//     review:
//       "The Storm handles hills effortlessly. I’ve taken it to Nagarkot multiple times — zero range anxiety.",
//   },
// ];

// export default function ReadyToRide() {
//   return (
//     <section className="bg-black text-white py-16 px-5">
//       <div className="max-w-7xl mx-auto">

       
//         <h2 className="text-center text-4xl font-extrabold mb-10">
//           What Our Rider{" "}
//           <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//             Says
//           </span>
//         </h2>

      
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {riders.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 border border-gray-800
//                 rounded-xl
//                 p-4
//                 bg-[#050505]
//                 transition-all duration-300
//                 min-h-45
//               "
//             >
           
//               <div className="flex gap-1 text-green-400 mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={14} fill="currentColor" />
//                 ))}
//               </div>

           
//               <p className="text-gray-300 text-sm leading-5 mb-4">
//                 “{item.review}”
//               </p>

            
//               <h3 className="font-semibold text-base">{item.name}</h3>

//               <p className="text-xs text-gray-500">{item.location}</p>
//             </div>
//           ))}
//         </div>

      
//         <div className="mt-16 rounded-2xl bg-[#020202] shadow-[0_0_30px_rgba(35,170,70,0.30)] px-6 py-14 text-center">

        
//           <div className="flex justify-center mb-4">
//             <Zap size={34} className="text-green-400" fill="currentColor" />
//           </div>

        
//           <h2 className="text-4xl font-extrabold leading-tight">
//             Ready to Ride{" "}
//             <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//               Electric?
//             </span>
//           </h2>

          
//           <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
//             Join thousands of Nepali riders who’ve made the switch.
//             <br />
//             Book your free test ride today.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

//           <Link
//             href="/Testride"
//             className="bg-[#00E676] hover:bg-[#00c864] text-black font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-center"
//           >
//             Book Test Ride
//           </Link>

//           <Link
//             href="/bikes"
//             className="border border-green-500 text-green-400 hover:bg-gray-800 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-center"
//           >
//             View All Bikes
//           </Link>

//         </div>
//         </div>

//       </div>
//     </section>
//   );
// }












'use client'
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Zap, MessageSquareQuote, ArrowRight } from "lucide-react";

interface Rider {
  name: string;
  location: string;
  review: string;
}

const RIDERS: Rider[] = [
  {
    name: "Aashish Shrestha",
    location: "Kathmandu",
    review:
      "Switched from petrol to Gantabya Volt, saving NPR 3,000/month on fuel alone. The ride quality is unmatched.",
  },
  {
    name: "Priya Thapa",
    location: "Bhaktapur",
    review:
      "Silent, smooth, and stylish. My daily commute has never been this enjoyable. Proud to ride Made in Nepal!",
  },
  {
    name: "Rajesh Tamang",
    location: "Lalitpur",
    review:
      "The Storm handles hills effortlessly. I’ve taken it to Nagarkot multiple times — zero range anxiety.",
  },
];

export default function ReadyToRide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative bg-[#050806] text-white py-28 px-6 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <MessageSquareQuote size={14} className="text-emerald-400" />
            <span>Community Stories</span>
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
            What Our <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">Riders Say</span>
          </h2>
          <p className="text-emerald-100/70 text-base md:text-lg max-w-xl mx-auto mt-4 font-light">
            Hear from everyday commuters who transformed their daily journey across Nepal.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {RIDERS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#0a1410]/80 backdrop-blur-xl p-8 hover:border-emerald-400/60 hover:shadow-[0_20px_60px_-12px_rgba(16,185,129,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-emerald-400 mb-6 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-emerald-100/80 text-sm leading-relaxed mb-8 font-light">
                  “{item.review}”
                </p>
              </div>

              {/* Rider Info */}
              <div className="pt-4 border-t border-emerald-500/10 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/70 uppercase tracking-wider mt-0.5">
                    {item.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Zap size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Call-to-Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0a1410] to-[#050806] border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] px-8 py-16 text-center overflow-hidden"
        >
          {/* Inner Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Zap size={30} fill="currentColor" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Ready to Ride{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent">
                Electric?
              </span>
            </h2>

            <p className="text-emerald-100/70 mt-4 max-w-xl mx-auto text-base font-light">
              Join thousands of Nepali riders who’ve made the switch. Book your free test ride today and feel the future of mobility.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="/Testride"
                className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold px-8 py-4 rounded-2xl transition-all duration-300 text-center shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group"
              >
                <span>Book Test Ride</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/electric"
                className="border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/40 text-emerald-300 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-center backdrop-blur-md"
              >
                View All Bikes
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}