// "use client";

// const stats = [
//   {
//     id: 1,
//     value: "5000+",
//     label: "Bikes on Road",
//   },
//   {
//     id: 2,
//     value: "12M+",
//     label: "km CO₂ Saved",
//   },
//   {
//     id: 3,
//     value: "25+",
//     label: "Service Centers",
//   },
//   {
//     id: 4,
//     value: "98%",
//     label: "Customer Satisfaction",
//   },
// ];

// export default function StatsSection() {
//   return (
//     <section className="bg-black border-y border-gray-900 py-20 px-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
//           {stats.map((item) => (
//             <div key={item.id}>
           
//               <h2 className="text-4xl md:text-6xl font-extrabold text-[#00E676]">
//                 {item.value}
//               </h2>

            
//               <p className="mt-4 text-gray-400 text-lg">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bike, Leaf, Wrench, Award, TrendingUp } from 'lucide-react'

interface Stat {
  id: number
  value: string
  label: string
  icon: React.ElementType
  description: string
}

const STATS: Stat[] = [
  {
    id: 1,
    value: "5,000+",
    label: "Bikes on Road",
    icon: Bike,
    description: "Actively transforming urban mobility across Nepal.",
  },
  {
    id: 2,
    value: "12M+",
    label: "km CO₂ Saved",
    icon: Leaf,
    description: "Reducing carbon footprints with every single kilometer.",
  },
  {
    id: 3,
    value: "25+",
    label: "Service Centers",
    icon: Wrench,
    description: "Reliable support and expert maintenance nationwide.",
  },
  {
    id: 4,
    value: "98%",
    label: "Customer Satisfaction",
    icon: Award,
    description: "Trusted by riders for quality, power, and safety.",
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative bg-[#050806] py-28 px-6 overflow-hidden font-sans border-y border-emerald-500/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <TrendingUp size={14} className="text-emerald-400" />
            <span>Impact & Scale</span>
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
            Driven By <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">Numbers</span>
          </h2>
          <p className="text-emerald-100/70 text-base md:text-lg max-w-xl mx-auto mt-4 font-light">
            Real impact measured in miles conquered, emissions reduced, and riders empowered.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#0a1410]/80 backdrop-blur-xl p-8 hover:border-emerald-400/60 hover:shadow-[0_20px_60px_-12px_rgba(16,185,129,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Top Row: Icon & Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-neutral-950 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mt-2">
                    {stat.label}
                  </p>
                  <p className="text-emerald-100/60 text-xs leading-relaxed mt-2 font-light">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}