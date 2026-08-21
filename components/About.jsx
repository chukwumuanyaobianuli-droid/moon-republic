export default function About() {
  return (
    <section id="about" className="py-24 bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/60 border border-indigo-800/50 px-3.5 py-1.5 rounded-full">
            Why Moon Republic
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 text-white tracking-tight">
            Built For Real Growth
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Everything you need to step up your digital skill set and unlock real earning potential.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-8 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
            
            {/* Top Light Line Reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
              Practical Mastery
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Skip standard theory. Get practical, hands-on knowledge built directly around current industry demands.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-8 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
              Expert Mentorship
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Receive step-by-step feedback and direct guidance from active industry practitioners across Nigeria.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-8 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
              Vibrant Network
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Collaborate, trade insights, and build high-value connections with over 1,000+ ambitious members.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}