import { useState, useMemo } from 'react';
import { 
  Flame, 
  Hospital, 
  ShieldAlert, 
  AlertTriangle, 
  HeartHandshake, 
  UserCheck, 
  Building2, 
  Copy, 
  Check, 
  PhoneCall, 
  Clock,
  MapPin,
  AlertCircle,
  Search,
  Sparkles,
  Radio,
  Bell,
  ArrowLeft,
  Smartphone,
  Info,
  ChevronRight,
  Calendar
} from 'lucide-react';

export default function EmergencyHotlinesSection() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [selectedBarangay, setSelectedBarangay] = useState('Poblacion');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State to switch between Directory view and Alerts Page view
  const [activeView, setActiveView] = useState<'directory' | 'alerts'>('directory');

  const handleCopy = (num: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(num);
    }
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const barangays = ['Poblacion', 'Darasa', 'Sambat', 'Trapiche', 'Natatas', 'Pagaspas'];

  const emergencyAlerts = [
    {
      id: 1,
      category: 'General Alert',
      severity: 'Medium',
      severityBg: 'bg-amber-100 text-amber-800 border-amber-200',
      title: "ANNOUNCEMENT | Tanauan City College Applicants' Admission",
      date: 'Jun 6, 2025, 10:45 AM',
      description: 'Official schedule release for entrance examination and interview guidelines for qualified academic year applicants.'
    },
    {
      id: 2,
      category: 'Weather Advisory',
      severity: 'Moderate',
      severityBg: 'bg-rose-100 text-rose-800 border-rose-200',
      title: 'MDRRMO Advisory | Localized Rainfall & Flood Precautions',
      date: 'Aug 3, 2026, 02:00 PM',
      description: 'Monsoon rains may cause minor flooding in low-lying barangay sectors. Public assistance teams are on standby.'
    }
  ];

  const services = [
    {
      id: 'bfp',
      title: 'Bureau of Fire Protection',
      category: 'Fire & Rescue Ops',
      icon: Flame,
      iconBg: 'from-amber-500 to-orange-600 text-white shadow-orange-500/20',
      numbers: [
        { label: 'Landline', num: '(043) 702-9678' },
        { label: 'Mobile Hotline', num: '0922-344-8887' }
      ]
    },
    {
      id: 'medical',
      title: 'Medical Emergency Services',
      category: '24/7 Rapid Health Response',
      icon: Hospital,
      iconBg: 'from-rose-500 to-red-600 text-white shadow-red-500/20',
      numbers: [
        { label: 'CP Reyes Hospital', num: '(043) 778-1119' },
        { label: 'CP Reyes Mobile', num: '0977-686-6947' },
        { label: 'Ambulance Unit', num: '(043) 778-3200' }
      ]
    },
    {
      id: 'police',
      title: 'Police Department',
      category: 'Law Enforcement & Peace',
      icon: ShieldAlert,
      iconBg: 'from-blue-600 to-indigo-700 text-white shadow-indigo-500/20',
      numbers: [
        { label: 'Complaints Hotline', num: '0946-503-3209' },
        { label: 'Smart Hotline', num: '0939-322-7848' },
        { label: 'Globe Hotline', num: '0977-686-6947' }
      ]
    },
    {
      id: 'mdrrmo',
      title: 'Disaster Response (MDRRMO)',
      category: 'Disaster Risk Reduction',
      icon: AlertTriangle,
      iconBg: 'from-amber-400 to-amber-600 text-white shadow-amber-500/20',
      numbers: [
        { label: 'Emergency Landline', num: '(043) 778-3133' },
        { label: 'MDRRMO Mobile', num: '0962-117-6261' }
      ]
    },
    {
      id: 'womens',
      title: "Women's Help Desk",
      category: 'Protection & Support',
      icon: HeartHandshake,
      iconBg: 'from-pink-500 to-rose-600 text-white shadow-pink-500/20',
      numbers: [
        { label: 'Direct Helpline', num: '117' }
      ]
    },
    {
      id: 'child',
      title: 'Child Protection Hotline',
      category: 'Child Safety & Youth',
      icon: UserCheck,
      iconBg: 'from-emerald-500 to-teal-600 text-white shadow-emerald-500/20',
      numbers: [
        { label: 'Helpline Number', num: '163' }
      ]
    }
  ];

  const filteredServices = useMemo(() => {
    if (!searchQuery) return services;
    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.numbers.some((n) => n.num.includes(searchQuery) || n.label.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // VIEW 2: DEDICATED UPGRADED EMERGENCY ALERTS PAGE
  if (activeView === 'alerts') {
    return (
      <section className="py-10 px-4 md:px-10 lg:px-16 max-w-6xl mx-auto space-y-8 font-sans">
        
        {/* Navigation Bar Back Button */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveView('directory')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-red-700" />
            <span>Back to Hotline Directory</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live Dispatch Operational</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
            Emergency Alerts Center
          </h1>
          <p className="text-xs md:text-sm text-gray-600">
            Stay informed about important alerts, advisories, and public notifications affecting Tanauan City.
          </p>
          <div className="w-16 h-1 mx-auto mt-2 rounded-full bg-red-600" />
        </div>

        {/* Live Alerts List Section */}
        <div className="space-y-4">
          {emergencyAlerts.map((alert) => (
            <div 
              key={alert.id}
              className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-red-200 transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-gray-100 text-gray-600">
                    <Info className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-gray-500">{alert.category}</span>
                </div>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${alert.severityBg}`}>
                  {alert.severity} Severity
                </span>
              </div>

              <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug">
                {alert.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                {alert.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {alert.date}
                </span>
                <button className="inline-flex items-center gap-1 font-bold text-red-700 hover:text-red-900 text-xs cursor-pointer">
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Official Emergency Contact Cards */}
        <div className="bg-gradient-to-r from-red-50/60 via-rose-50/30 to-amber-50/30 rounded-2xl border border-red-100 p-5 space-y-3">
          <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
            Emergency Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Police */}
            <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-red-100 text-red-700">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Police Emergency</h4>
                <a href="tel:0437289800" className="text-xs font-semibold text-red-700 hover:underline">
                  911 or (043) 728-9800
                </a>
              </div>
            </div>

            {/* Medical */}
            <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-red-100 text-red-700">
                <Hospital className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Medical Emergency</h4>
                <a href="tel:0437654321" className="text-xs font-semibold text-red-700 hover:underline">
                  (043) 765-4321
                </a>
              </div>
            </div>

            {/* Fire */}
            <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-red-100 text-red-700">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Fire Department</h4>
                <a href="tel:0439876543" className="text-xs font-semibold text-red-700 hover:underline">
                  (043) 987-6543
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Download Emergency App Banner */}
        <div className="p-6 bg-gradient-to-r from-gray-900 via-zinc-900 to-stone-900 text-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm font-black uppercase tracking-wide flex items-center justify-center md:justify-start gap-2">
              <Smartphone className="w-4 h-4 text-red-500" />
              Download the Tanauan Emergency App
            </h3>
            <p className="text-xs text-gray-300">
              Get real-time alerts and immediate emergency assistance directly on your phone.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer">
              <span>iOS App</span>
            </button>
            <button className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer">
              <span>Android App</span>
            </button>
          </div>
        </div>

      </section>
    );
  }

  // VIEW 1: DEFAULT MAIN HOTLINES DIRECTORY VIEW
  return (
    <section className="py-10 px-4 md:px-10 lg:px-16 max-w-6xl mx-auto space-y-8 font-sans">
      
      {/* CENTERED HEADER */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-700 text-xs font-semibold tracking-wide shadow-xs mb-1">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span>Official Public Safety Portal</span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight text-center">
          <span className="text-red-700">TANAUAN BATANGAS</span> EMERGENCY HOTLINES
        </h2>
        
        <p className="text-xs md:text-sm text-gray-600 max-w-lg leading-relaxed text-center">
          Important contact information for emergency situations in Tanauan City. Save these numbers for quick access.
        </p>
        
        <div className="w-14 h-1 mx-auto mt-2 rounded-full bg-red-600" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-start">
        
        {/* FIXED LEFT SIDE CARD WITH STICKY SCROLL */}
        <div className="lg:col-span-5 lg:sticky lg:top-8 self-start bg-gradient-to-b from-rose-50 via-red-50/40 to-white text-gray-800 p-5 sm:p-6 flex flex-col justify-between space-y-5 border-b lg:border-b-0 lg:border-r border-rose-100 rounded-2xl lg:rounded-r-none">
          
          <div className="flex items-center justify-between pb-3 border-b border-rose-200/60">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-rose-200 text-red-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Command Center Active</span>
            </span>
            <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-red-600" />
              Tanauan Hub
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              Emergency <span className="text-red-700">Command Hub</span>
            </h3>
            <p className="text-xs text-gray-500">
              Select your sector for direct dispatch coordination.
            </p>
          </div>

          {/* BARANGAY SELECTOR */}
          <div className="bg-white border border-rose-100 p-3.5 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                Barangay Sector:
              </label>
              <span className="text-[10px] text-emerald-700 font-bold tracking-wider uppercase bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                Desk Active
              </span>
            </div>
            <select
              value={selectedBarangay}
              onChange={(e) => setSelectedBarangay(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 text-xs font-semibold p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 cursor-pointer"
            >
              {barangays.map((b) => (
                <option key={b} value={b}>
                  Barangay {b} Sector
                </option>
              ))}
            </select>
          </div>

          {/* 911 CARD */}
          <div className="bg-gradient-to-r from-red-700 to-rose-700 text-white p-4 rounded-xl shadow-sm relative overflow-hidden group">
            <span className="text-[10px] font-bold text-rose-200 uppercase tracking-wider block mb-1">
              Nationwide Priority Line
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-black tracking-tight">DIAL 911</h4>
                <p className="text-[11px] text-rose-100">Toll-Free Immediate Dispatch</p>
              </div>
              <a 
                href="tel:911"
                className="p-3 bg-white text-red-800 rounded-xl hover:bg-rose-50 transition-all font-bold text-xs flex items-center justify-center group-hover:scale-105"
              >
                <PhoneCall className="w-4 h-4 text-red-700" />
              </a>
            </div>
          </div>

          {/* CALLER GUIDELINES */}
          <div className="bg-white p-3.5 rounded-xl border border-rose-100 space-y-1.5">
            <span className="text-xs font-bold text-red-800 uppercase tracking-wide flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              Caller Protocol:
            </span>
            <ol className="text-[11px] text-gray-600 space-y-1 list-decimal list-inside font-medium leading-relaxed">
              <li>State exact landmark in <strong className="text-gray-900">{selectedBarangay}</strong>.</li>
              <li>Describe the immediate situation clearly.</li>
              <li>Keep line open for operator guidance.</li>
            </ol>
          </div>

          {/* FOOTER METRICS */}
          <div className="pt-3 border-t border-rose-200/60 text-[11px] text-gray-600 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-red-700" />
                City Hall Headquarters
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px]">
                Open Today
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-red-700" />
                Operating Hours
              </span>
              <span className="font-bold text-gray-800">Mon-Fri (8AM - 5PM)</span>
            </div>
          </div>

        </div>

        {/* RIGHT DIRECTORY */}
        <div className="lg:col-span-7 p-5 sm:p-7 bg-slate-50/40 flex flex-col justify-between space-y-6 min-h-[580px]">
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
              <div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Agency Emergency Directory
                </h3>
                <p className="text-[11px] text-gray-500">Official contact numbers for emergency teams</p>
              </div>

              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search agency..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                />
              </div>
            </div>

            {/* SERVICES CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div 
                    key={s.id} 
                    className="p-3.5 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-red-200 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${s.iconBg}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 leading-tight group-hover:text-red-700 transition-colors">
                            {s.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-medium">{s.category}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        {s.numbers.map((n, i) => (
                          <div 
                            key={i} 
                            className="flex items-center justify-between text-xs p-1.5 bg-gray-50 rounded-lg border border-gray-100 hover:bg-rose-50/50 transition-colors"
                          >
                            <span className="text-gray-500 font-medium text-[11px]">{n.label}</span>
                            <div className="flex items-center gap-1">
                              <a 
                                href={`tel:${n.num.replace(/[^0-9]/g, '')}`} 
                                className="font-extrabold text-red-700 hover:text-red-900 text-[11px] tracking-tight"
                              >
                                {n.num}
                              </a>
                              <button 
                                onClick={() => handleCopy(n.num)} 
                                title="Copy Number"
                                className="p-1 text-gray-400 hover:text-gray-600 rounded-md transition-colors cursor-pointer"
                              >
                                {copiedNumber === n.num ? (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-8 text-gray-400 text-xs">
                No matching agencies or hotline numbers found.
              </div>
            )}

          </div>

          <div className="pt-3 border-t border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
              Official Tanauan City Assistance Channel
            </span>
            <span className="text-gray-400 font-medium">Updated 2026</span>
          </div>

        </div>

      </div>

      {/* VIEW EMERGENCY ALERTS BUTTON (BOTTOM) */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => setActiveView('alerts')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white text-xs font-bold shadow-md hover:shadow-lg hover:from-red-700 hover:to-rose-800 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer group"
        >
          <div className="relative">
            <Bell className="w-4 h-4 text-white group-hover:animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span>View Emergency Alerts Page</span>
          <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-white/20 rounded-full font-extrabold text-white">
            {emergencyAlerts.length}
          </span>
        </button>
      </div>

    </section>
  );
}