import Link from 'next/link'

export default function Footer() {
  const contactEmail = "info@moonrepublic.com"

  return (
    <footer className="bg-[#030712] border-t border-slate-800/80 text-slate-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Moon <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Republic</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Empowering ambitious individuals across Nigeria to master high-income skills, build practical projects, and gain financial independence.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Community Active • Cohorts Open
              </span>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skill Tracks</a></li>
              <li><a href="#community" className="hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Skill Tracks */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Tracks</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Programming</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Ghostwriting</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Forex Trading</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">AI & Virtual Assistant</a></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Connect</h4>
            <div className="space-y-2 text-xs">
              <p>
                <span className="text-slate-500">Email:</span>{' '}
                <a 
                  href={`mailto:${contactEmail}`} 
                  className="hover:text-indigo-400 text-slate-300 transition-colors underline underline-offset-4 decoration-indigo-500/40 hover:decoration-indigo-400"
                >
                  {contactEmail}
                </a>
              </p>
              <p><span className="text-slate-500">Region:</span> Nigeria</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Secret Admin Link on © */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            <Link href="/admin" className="hover:text-indigo-400 transition-colors font-bold">
              ©
            </Link>{' '}
            {new Date().getFullYear()} Moon Republic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}