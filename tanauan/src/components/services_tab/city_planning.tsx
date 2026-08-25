import Footer from '../layout/Footer';
import { FileText, ArrowRight, Download, Calendar} from "lucide-react";

export default function TransparencyPage() {
  const documents = [
    {
      title: "Comprehensive Land Use Plan",
      year: "2016-2025",
      badge: "Primary Framework",
      fileSize: "18.4 MB",
      format: "PDF",
      description:
        "Rationalizes the allocation and proper use of land resources, projecting public and private land uses in accordance with future spatial organizations of economic and social activities.",
    },
    {
      title: "Local Shelter Plan",
      year: "2017-2025",
      badge: "Housing Strategy",
      fileSize: "9.2 MB",
      format: "PDF",
      description:
        "Outlines local government strategies and action plans to address housing needs, specially tailored for underprivileged constituents over a specified time period.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50/50 overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-red-500/5 to-rose-400/5 blur-3xl pointer-events-none" />

      {/* Main Content Wrapper */}
      <main className="relative flex-grow pt-28 pb-24 px-6 max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12 mb-16 border-b border-slate-200/60 pb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
              <FileText size={16} strokeWidth={2.2} />Official Publications
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              City Planning <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Documents</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base leading-relaxed">
              Access transparent, official blueprints and planning frameworks guiding our city's sustainable urban development.
            </p>
          </div>
        </div>

        {/* Symmetrical Cards Grid (6/6 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="group relative lg:col-span-6 flex flex-col justify-between rounded-3xl p-8 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md shadow-slate-950/5 hover:border-red-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/80 shadow-xs">
                    <Calendar size={13} className="text-red-600" />
                    {doc.year}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50/80 px-3 py-1 rounded-md border border-red-100">
                    {doc.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
                    <FileText size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors">
                      {doc.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="uppercase text-slate-500 font-semibold">{doc.format}</span>
                      <span>•</span>
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                  {doc.description}
                </p>
              </div>

              {/* Action Button locked to bottom */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg">
                  <span>Explore Publication</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </div>
                </button>
                <button aria-label="Download document" className="p-2.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Footer */}
        <div className="mt-16 text-center">
          <button className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:scale-105 hover:shadow-red-600/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500">
            <span>Access All Planning Documents Archive</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}