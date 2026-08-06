'use client'
import NextLink from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Gauge, ArrowUpRight, Shield } from 'lucide-react'

interface Vehicle {
  id: string  
  name: string
  tagline: string
  range: string
  speed: string
  price: string
  image: string
}

const VEHICLES: Vehicle[] = [
  {
    id: 'thunder-x',
    name: 'Thunder X',
    tagline: 'Born to dominate.',
    range: '180km',
    speed: '180km/hr',
    price: 'NPR 4,50,000',
    image: 'https://i.pinimg.com/1200x/4e/12/a2/4e12a20b5ea488177775c195ecfffb93.jpg',
  },
  {
    id: 'volt-cruiser',
    name: 'Volt Cruiser',
    tagline: 'Silent power, endless roads',
    range: '200km',
    speed: '120km/hr',
    price: 'NPR 3,99,000',
    image: 'https://i.pinimg.com/1200x/b0/42/b0/b042b09f5d6a9606d5d6944c1e0a522a.jpg',
  },
  {
    id: 'eco-ride',
    name: 'Eco Ride',
    tagline: 'Smart commute, zero emissions',
    range: '120km',
    speed: '80km/hr',
    price: 'NPR 2,49,000',
    image: 'https://i.pinimg.com/1200x/db/dc/1f/dbdc1fc034554328c45dc8dd3caca614.jpg',
  },
]

function VehicleCard({
  vehicle,
  index,
}: {
  vehicle: Vehicle
  index: number
}) {
  return (
    <NextLink href={`/electric/${vehicle.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.55,
          delay: index * 0.12,
        }}
        className="group relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden
                   border border-emerald-500/20 cursor-pointer
                   hover:border-emerald-400/60
                   hover:shadow-[0_20px_60px_-12px_rgba(16,185,129,0.3)]
                   transition-all duration-700 flex flex-col justify-end p-6 sm:p-8"
      >
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-[#050806]/60 to-transparent" />
          <div className="absolute inset-0 bg-emerald-950/10 mix-blend-overlay" />
        </div>

        {/* Top Floating Badge */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-[#050806]/70 backdrop-blur-xl px-4 py-2 rounded-xl border border-emerald-500/30">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-mono text-emerald-200 tracking-wider uppercase">{vehicle.price}</span>
        </div>

        {/* Content HUD Layer */}
        <div className="relative z-10 flex flex-col justify-end space-y-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90">{vehicle.tagline}</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1 group-hover:text-emerald-300 transition-colors">
              {vehicle.name}
            </h3>
          </div>

          {/* Specs Micro-Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 bg-[#0a1410]/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-emerald-500/20">
              <Zap className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-[10px] text-emerald-300/60 uppercase block font-mono">Range</span>
                <span className="text-sm font-bold text-white">{vehicle.range}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#0a1410]/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-emerald-500/20">
              <Gauge className="w-4 h-4 text-green-400" />
              <div>
                <span className="text-[10px] text-emerald-300/60 uppercase block font-mono">Speed</span>
                <span className="text-sm font-bold text-white">{vehicle.speed}</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex items-center justify-between border-t border-emerald-500/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300/80 group-hover:text-white transition-colors">
              Explore Model
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-neutral-950 transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </NextLink>
  )
}

export default function VehiclesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="vehicles" className="relative bg-[#050806] py-28 px-6 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Shield size={14} className="text-emerald-400" />
            <span>Cinematic Fleet</span>
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
            Featured <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">Bikes</span>
          </h2>
          <p className="text-emerald-100/70 text-base md:text-lg max-w-xl mx-auto mt-4 font-light">
            Immersive design meets blistering electric performance. Select your ride.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle, i) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}