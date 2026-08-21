export default function CTA() {
  // Replace this placeholder string with your actual WhatsApp community link
  const whatsappGroupUrl = "https://chat.whatsapp.com/DsOYBe4MxzF32BF3XQd2xZ?s=cl&p=a&mlu=4"

  return (
    <section className="py-24 bg-[#030712] text-white border-t border-slate-800/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/60 border border-indigo-800/50 px-3.5 py-1.5 rounded-full">
            Take The First Step
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 text-white tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Don't wait. Join Moon Republic today and become part of Nigeria's most thriving community of ambitious learners and earners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-8 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Flexible Learning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Learn at your own pace with 24/7 access to curriculum material, direct mentorship, and community archives.
            </p>
          </div>

          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/80 p-8 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Proven Results</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trusted by 1,000+ members acquiring high-value digital skills and building real income streams.
            </p>
          </div>
        </div>

        {/* Redirects straight to WhatsApp */}
        <div className="flex justify-center">
          <a 
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2"
          >
            Join Moon Republic Today
          </a>
        </div>
      </div>
    </section>
  )
}