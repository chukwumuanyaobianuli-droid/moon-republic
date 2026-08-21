export default function Skills({ onOpenRegister }) {
  return (
    <section id="skills" className="py-24 bg-[#030712] text-white border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/60 border border-indigo-800/50 px-3.5 py-1.5 rounded-full">
            Core Learning Pillars
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 text-white tracking-tight">
            High-Income Skill Domains
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Master specialized digital disciplines engineered for direct market application and income generation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Programming */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-6 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Programming</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Build full-stack web platforms, mobile applications, and scalable digital solutions from scratch.
              </p>
            </div>
            <button onClick={onOpenRegister} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              Select Track &rarr;
            </button>
          </div>

          {/* Ghostwriting */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-6 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Ghostwriting</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Craft high-converting copy, articles, and content strategy for international executives and brands.
              </p>
            </div>
            <button onClick={onOpenRegister} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              Select Track &rarr;
            </button>
          </div>

          {/* Forex */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-6 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Forex Trading</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Understand market dynamics, risk management systems, technical analysis, and execution strategies.
              </p>
            </div>
            <button onClick={onOpenRegister} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              Select Track &rarr;
            </button>
          </div>

          {/* AI / Virtual Assistant */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-6 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">AI / Virtual Assistant</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Leverage modern AI workflows, prompt engineering, and administrative systems to support global operations.
              </p>
            </div>
            <button onClick={onOpenRegister} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              Select Track &rarr;
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}