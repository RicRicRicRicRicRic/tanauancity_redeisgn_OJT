import React, { useState } from 'react';
import { 
  UserPlus, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Mail, 
  ExternalLink,
  Sparkles,
  MousePointerClick,
  FileEdit,
  Smartphone,
  UserCheck,
  Send,
  PartyPopper
} from 'lucide-react';

export function TanauanEServicesSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

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

  const steps = [
    {
      stepNum: 1,
      title: "Click the Sign up Button",
      desc: "Locate the Sign up button on the Tanauan e-Services homepage.",
      VectorIllustration: ({ isActive }: { isActive: boolean }) => (
        <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          {/* Mock Browser/App Canvas */}
          <div className="w-24 h-20 bg-slate-100 border-2 border-red-500 rounded-lg shadow-sm relative overflow-hidden flex flex-col items-center justify-center">
            <div className="w-full h-4 bg-red-500 absolute top-0 flex items-center px-1.5 gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
            </div>
            <div className="w-12 h-2.5 bg-slate-200 rounded my-1"></div>
            <div className="w-14 h-4 bg-red-600 rounded text-[8px] font-bold text-white flex items-center justify-center gap-1 shadow-xs animate-pulse">
              <span>Sign Up</span>
            </div>
          </div>
          {/* Character Pointer */}
          <div className="absolute -bottom-1 -right-1 text-red-600 bg-white p-1 rounded-full border border-red-200 shadow-md">
            <MousePointerClick className="w-5 h-5 text-red-600" />
          </div>
        </div>
      )
    },
    {
      stepNum: 2,
      title: "Fill Out the Registration Form",
      desc: "Enter your personal information, including name, mobile, and email.",
      VectorIllustration: ({ isActive }: { isActive: boolean }) => (
        <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          {/* Registration Form Graphic */}
          <div className="w-22 h-24 bg-white border-2 border-red-500 rounded-xl shadow-sm p-2 flex flex-col gap-1.5 items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-rose-100 text-red-600 flex items-center justify-center border border-red-200">
              <FileEdit className="w-5 h-5" />
            </div>
            <div className="w-14 h-1.5 bg-slate-200 rounded"></div>
            <div className="w-10 h-1.5 bg-slate-200 rounded"></div>
            <div className="w-12 h-2 bg-red-500 rounded-sm"></div>
          </div>
        </div>
      )
    },
    {
      stepNum: 3,
      title: "Verify Your Mobile Number",
      desc: "You will receive a verification code via SMS. Enter this code to confirm.",
      VectorIllustration: ({ isActive }: { isActive: boolean }) => (
        <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          {/* Smartphone Vector Graphic */}
          <div className="w-16 h-26 bg-slate-900 border-2 border-red-500 rounded-2xl shadow-md p-1.5 flex flex-col items-center justify-between">
            <div className="w-4 h-1 bg-slate-700 rounded-full mt-0.5"></div>
            <div className="w-full h-16 bg-rose-50 border border-red-200 rounded-lg flex flex-col items-center justify-center gap-1">
              <Smartphone className="w-6 h-6 text-red-600" />
              <span className="text-[7px] font-black text-red-700 bg-red-100 px-1 rounded">OTP ***</span>
            </div>
            <div className="w-3 h-3 border border-slate-700 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      stepNum: 4,
      title: "Complete Your Profile",
      desc: "Fill in any additional required information to complete your profile.",
      VectorIllustration: ({ isActive }: { isActive: boolean }) => (
        <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          {/* User Profile Card Graphic */}
          <div className="w-24 h-22 bg-white border-2 border-red-500 rounded-2xl shadow-sm p-2 flex flex-col items-center justify-center gap-1">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="w-14 h-2 bg-slate-200 rounded mt-1"></div>
            <div className="w-10 h-1.5 bg-slate-200 rounded"></div>
          </div>
        </div>
      )
    },
    {
      stepNum: 5,
      title: "Submit the Form",
      desc: "Review your information and click the 'Submit' button.",
      VectorIllustration: ({ isActive }: { isActive: boolean }) => (
        <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          {/* Form Submission Graphic */}
          <div className="w-22 h-22 bg-rose-50 border-2 border-red-500 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 p-2 relative">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md animate-bounce">
              <Send className="w-5 h-5" />
            </div>
            <div className="w-14 h-3 bg-red-600 rounded text-[7px] font-bold text-white flex items-center justify-center">
              SUBMIT
            </div>
          </div>
        </div>
      )
    },
    {
      stepNum: 6,
      title: "Enjoy Tanauan e-Services!",
      desc: "You are now registered! Explore and enjoy convenient online transactions.",
      VectorIllustration: ({ isActive }: { isActive: boolean }) => (
        <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
          {/* Success Graphic */}
          <div className="w-24 h-24 bg-gradient-to-tr from-red-600 to-rose-500 rounded-3xl shadow-lg border-2 border-red-400 flex flex-col items-center justify-center text-white gap-1.5 p-2">
            <PartyPopper className="w-8 h-8 text-amber-300 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-wider text-center">SUCCESS!</span>
          </div>
        </div>
      )
    }
  ];

  const row1 = steps.slice(0, 3);
  const row2 = steps.slice(3, 6);

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased selection:bg-red-100 selection:text-red-900">
      
      {/* PAGE 1: HERO & KEY ADVANTAGES */}
      <section className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-slate-200/80">
        
        {/* HEADER */}
        <div className="flex flex-col pt-6 text-center items-center justify-center space-y-3 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-700 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Official Service Portal</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-rose-600 to-amber-600">Tanauan City eServices</span>
          </h1>

          <p className="text-xs md:text-sm text-gray-600 max-w-lg leading-relaxed text-center">
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
                className="group bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-red-200 transition-all duration-300 flex flex-col items-center text-center space-y-3 cursor-default"
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
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-900 transition-colors uppercase tracking-wider group"
          >
            <span>See 6 Simple Steps To Register</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-90 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>


      {/* PAGE 2: INFOGRAPHIC FLOWCHART (MATCHING WEBSITE SCREENSHOT) */}
      <section id="signup-steps" className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* SECTION TITLE */}
        <div className="text-center space-y-2 max-w-2xl mx-auto pt-4">
          <h2 className="text-2xl md:text-3xl font-black text-red-600 tracking-tight">
            Sign up in 6 simple steps
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* UNIFIED CONTAINER CARD WITH DOTTED CONNECTORS */}
        <div className="my-auto py-8 px-6 bg-white border border-slate-200/80 rounded-3xl shadow-xs">
          
          <div className="max-w-5xl mx-auto space-y-12">

            {/* ROW 1: STEPS 1 -> 2 -> 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
              {row1.map((s, idx) => {
                const isActive = activeStep === s.stepNum;
                const Illustration = s.VectorIllustration;

                return (
                  <div 
                    key={s.stepNum} 
                    onClick={() => setActiveStep(s.stepNum)}
                    onMouseEnter={() => setActiveStep(s.stepNum)}
                    className="relative flex flex-col items-center text-center cursor-pointer group"
                  >
                    
                    {/* VECTOR ARTWORK */}
                    <div className="mb-3">
                      <Illustration isActive={isActive} />
                    </div>

                    {/* STEP TITLE */}
                    <h4 className={`text-xs font-extrabold transition-colors ${
                      isActive ? 'text-red-600 scale-105' : 'text-slate-900 group-hover:text-red-600'
                    }`}>
                      {s.title}
                    </h4>

                    {/* STEP DESCRIPTION */}
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs mt-1">
                      {s.desc}
                    </p>

                    {/* RED DOTTED CONNECTOR LINE (Horizontal) */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-14 -right-1/2 w-full h-[2px] border-b-2 border-dashed border-red-300 z-0 pointer-events-none" />
                    )}

                  </div>
                );
              })}
            </div>

            {/* ROW CONNECTOR: STEP 3 -> STEP 4 (Vertical Dotted Curve) */}
            <div className="hidden md:flex justify-end pr-20 relative -my-4 pointer-events-none">
              <div className="w-12 h-16 border-r-2 border-b-2 border-dashed border-red-300 rounded-br-2xl" />
            </div>

            {/* ROW 2: STEPS 4 -> 5 -> 6 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
              {row2.map((s, idx) => {
                const isActive = activeStep === s.stepNum;
                const Illustration = s.VectorIllustration;

                return (
                  <div 
                    key={s.stepNum} 
                    onClick={() => setActiveStep(s.stepNum)}
                    onMouseEnter={() => setActiveStep(s.stepNum)}
                    className="relative flex flex-col items-center text-center cursor-pointer group"
                  >
                    
                    {/* VECTOR ARTWORK */}
                    <div className="mb-3">
                      <Illustration isActive={isActive} />
                    </div>

                    {/* STEP TITLE */}
                    <h4 className={`text-xs font-extrabold transition-colors ${
                      isActive ? 'text-red-600 scale-105' : 'text-slate-900 group-hover:text-red-600'
                    }`}>
                      {s.title}
                    </h4>

                    {/* STEP DESCRIPTION */}
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs mt-1">
                      {s.desc}
                    </p>

                    {/* RED DOTTED CONNECTOR LINE (Horizontal) */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-14 -right-1/2 w-full h-[2px] border-b-2 border-dashed border-red-300 z-0 pointer-events-none" />
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* BUTTONS & FOOTER */}
        <div className="space-y-4 pt-4 border-t border-slate-200/80 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-xs shadow-xs hover:from-red-700 hover:to-rose-800 transition-all cursor-pointer flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]">
              <span>Create Account Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
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