import Link from "next/link";
import { ArrowRight, Zap, Gauge, BatteryCharging } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-[#050806] text-white flex flex-col items-center justify-between overflow-hidden font-sans pt-24 pb-16 px-6">
      {/* Rich Lush Greenery Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Section: Centered Headlines & CTAs */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-12 mt-7">
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
      <div className="relative z-10 w-full max-w-5xl mt-16 mx-auto transition-all duration-700 hover:scale-[1.01]">
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