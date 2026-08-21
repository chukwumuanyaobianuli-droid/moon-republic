export default function Hero({ onOpenRegister }) {
  return (
    <section 
      className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.95)), url('/hero.png')`
      }}
    >
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-indigo-950/70 border border-indigo-800/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            Moon Republic
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Master In-Demand Skills. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
            Build Financial Freedom.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Join over 1,000+ members acquiring high-income digital skills and practical mentorship designed for real growth across Nigeria.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button 
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Now
          </button>
          
          <a 
            href="#skills"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold rounded-xl backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            Explore Courses
          </a>
        </div>

      </div>
    </section>
  )
}