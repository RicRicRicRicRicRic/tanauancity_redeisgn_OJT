import React from 'react';
import { 
  UserPlus, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Smartphone, 
  Mail, 
  ExternalLink,
  Sparkles,
  Lock,
  UserCheck,
  Send,
  PartyPopper
} from 'lucide-react';

export function TanauanEServicesSection() {
  const features = [
    {
      icon: UserPlus,
      title: "Easy Registration",
      desc: "Simple 6-step process to create your account and access city services.",
      bgLight: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      desc: "Your data is protected with advanced government-grade security measures.",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      desc: "Access city services anytime, anywhere through our unified portal.",
      bgLight: "bg-amber-50 text-amber-600 border-amber-100"
    }
  ];

  const row1Steps = [
    {
      step: "01",
      title: "Click the Sign up Button",
      desc: "Locate the Sign up button on the Tanauan e-Services homepage.",
      icon: UserPlus
    },
    {
      step: "02",
      title: "Fill Out the Registration Form",
      desc: "Enter your personal information, including your name, mobile number, and email address.",
      icon: Lock
    },
    {
      step: "03",
      title: "Verify Your Mobile Number",
      desc: "You will receive a verification code via SMS. Enter this code to confirm your mobile number.",
      icon: Smartphone
    }
  ];

  const row2Steps = [
    {
      step: "04",
      title: "Complete Your Profile",
      desc: "Fill in any additional required information to complete your profile.",
      icon: UserCheck
    },
    {
      step: "05",
      title: "Submit the Form",
      desc: "Review your information and click the 'Submit' button.",
      icon: Send
    },
    {
      step: "06",
      title: "Enjoy Tanauan e-Services!",
      desc: "You are now registered! Explore the various services available and enjoy the convenience of online transactions.",
      icon: PartyPopper
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* PAGE 1: HERO & KEY ADVANTAGES */}
      <section className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-slate-200/80">
        
        {/* HEADER */}
        <div className="pt-6 text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-700 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Official Service Portal</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-rose-600 to-amber-600">Tanauan City eServices</span>
          </h1>

          <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Your gateway to efficient and convenient city services. Create an account now to access our digital services anytime, anywhere.
          </p>
        </div>

        {/* 3 FEATURE ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3"
              >
                <div className={`p-3.5 rounded-2xl ${item.bgLight} border shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* PAGE 1 FOOTER TEASER */}
        <div className="text-center pb-2">
          <a 
            href="#signup-steps" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-900 transition-colors uppercase tracking-wider"
          >
            <span>See 6 Simple Steps To Register</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-90" />
          </a>
        </div>
      </section>


      {/* PAGE 2: FLOWCHART PROCESS (EXACT IMAGE REPRODUCTION WITH ARROWS & ZOOM HOVER) */}
      <section id="signup-steps" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* SECTION TITLE */}
        <div className="text-center space-y-1.5 max-w-2xl mx-auto pt-4">
          <h2 className="text-xl md:text-2xl font-black text-red-600 tracking-tight">
            Sign up in 6 simple steps
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* FLOWCHART CONTAINER */}
        <div className="my-auto py-6 space-y-12">
          
          {/* ROW 1: STEPS 1 -> 2 -> 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-start">
            {row1Steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  
                  {/* STEP ITEM WITH ZOOM ON HOVER */}
                  <div className="group flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 cursor-pointer p-2">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-red-600 flex items-center justify-center shadow-xs group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 mb-3">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Step Title & Text */}
                    <h4 className="text-xs font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* DIRECTIONAL ARROW (Step 1 -> Step 2, Step 2 -> Step 3) */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute top-8 -right-4 translate-x-1/2 z-10 text-red-400 animate-pulse">
                      <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* ROW CONNECTING ARROW (Step 3 -> Step 4 Downward transition) */}
          <div className="hidden md:flex justify-end pr-16 -my-4 text-red-400 animate-pulse">
            <ArrowRight className="w-6 h-6 stroke-[2.5] rotate-90" />
          </div>

          {/* ROW 2: STEPS 4 -> 5 -> 6 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-start">
            {row2Steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  
                  {/* STEP ITEM WITH ZOOM ON HOVER */}
                  <div className="group flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 cursor-pointer p-2">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-red-600 flex items-center justify-center shadow-xs group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 mb-3">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Step Title & Text */}
                    <h4 className="text-xs font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* DIRECTIONAL ARROW (Step 4 -> Step 5, Step 5 -> Step 6) */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute top-8 -right-4 translate-x-1/2 z-10 text-red-400 animate-pulse">
                      <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* BUTTONS & FOOTER */}
        <div className="space-y-4 pt-4 border-t border-slate-200/80 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-xs shadow-xs hover:from-red-700 hover:to-rose-800 transition-all cursor-pointer flex items-center justify-center gap-2 group">
              <span>Create Account Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-center gap-2">
              <span>Login to Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          <div className="text-center text-[11px] text-slate-500 space-y-0.5">
            <p>For assistance, please contact our support team:</p>
            <a 
              href="mailto:support@tanauancity.gov.ph" 
              className="inline-flex items-center gap-1 font-bold text-red-700 hover:underline"
            >
              <Mail className="w-3 h-3" />
              <span>support@tanauancity.gov.ph</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

export default TanauanEServicesSection;