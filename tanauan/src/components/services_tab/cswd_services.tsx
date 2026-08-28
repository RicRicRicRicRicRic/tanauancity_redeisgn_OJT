import { useState } from "react";
import Footer from "../layout/Footer";
import { Mail, Clock, MapPin, Phone } from 'lucide-react';
import tanauan_logo from "../../assets/sections/Home/navbar/tanauan logo.webp";

import {
  Building2,
  ChevronRight,
  Home,
  ShieldCheck,
  Users,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  requirements: string[];
  steps?: string[];
}

interface Category {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  description: string;
  services: Service[];
}

const categories: Category[] = [
  {
    id: "emergency",
    number: "01",
    title: "Emergency Unit",
    shortTitle: "Emergency",
    icon: Building2,
    description:
      "Immediate assistance for residents facing urgent financial and social welfare needs.",
    services: [
      {
        title: "Hospital Confinement Assistance",
        description:
          "Financial assistance for hospitalization expenses of indigent residents.",
        requirements: [
          "Voter's ID or Certification from COMELEC of Patient and Client (certified photo copy)",
          "Hospital Final Bill (in case the client is still confined)",
          "Promissory Note with account balance (if the client is already discharge from the hospital)",
          "Medical Certificate or Clinical Abstract (certified photo copy)",
          "2 copies each",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
      {
        title: "Medication Assistance",
        description:
          "Financial aid for medication needs of qualified beneficiaries.",
        requirements: [
          "Voter's ID or Certification from COMELEC of Patient and Client (certified photo copy)",
          "Medical Prescription witch costing and quotation (certified photo copy)",
          "Merdical Certificate or Clinical Abstract (certified photo copy)",
          "*2 copies each",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
      {
        title: "Burial Assistance",
        description:
          "Financial support for funeral expenses of indigent families.",
        requirements: [
          "Voter's ID or Certification from COMELEC of Client (certified photo copy)",
          "Death Certificate (certified photo copy)",
          "Funeral Contract (certified photo copy)",
          "2 copies each",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
      {
        title: "Tulong Hatid sa Huling Hantungan",
        description:
          "Transportation and logistical support for funeral services.",
        requirements: [
          "Voter's ID or Certification from COMELEC (certified photo copy)",
          "Death Certificate (certified photo copy)",
          "Funeral Contract (certified photo copy)",
          "2 copies each",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
    ],
  },

  {
    id: "shelter",
    number: "02",
    title: "Emergency Shelter Assistance",
    shortTitle: "Shelter",
    icon: Home,
    description:
      "Support services intended for residents requiring emergency shelter and related assistance.",
    services: [
      {
        title: "Emergency Shelter Assistance",
        description:
          "Temporary shelter and support for victims of disaster",
        requirements: [
          "Voter's ID or Certification (certified photo copy)",
          "Picture of damaged house",
          "Barangay Incident Report (for fire victims only)",
          "Bureau of Fire Protection Report (for fire victims only)",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
      {
        title: "Social Case Study Report",
        description:
          "Comprehensive assessment of client'social situation needs",
        requirements: [
          "Provide Medical Certificate and Final Bill, or Quotation of Dialysis/Chemotherapy",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
    ],
  },

  {
    id: "protective",
    number: "03",
    title: "Protective Sector",
    shortTitle: "Protective",
    icon: ShieldCheck,
    description:
      "Protective social welfare services for vulnerable individuals and families.",
    services: [
      {
        title: "Certificate of Indigency for PAO",
        description:
          "Certification for Public Attorney's Office legal assistance",
        requirements: [
          "Voter's ID or Certification (certified photo copy)",
          "Baranggay Clearance",
          "Assessors Certification",
          "Copy of Case",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
      
      {
        title: "Certificate of Indigency for LCR",
        description:
          "Certification for Local Civil Registry services",
        requirements: [
          "Voter's ID or Certification (certified photo copy)",
          "Baranggay Clearance",
          "Assessors Certification",
          "Copy of Birth Certificate/Marriage Contract/Death Certificate",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Counceling Programs for PWUDs",
        description:
          "Counseling services for Persons Who Use drugs",
        requirements: [
          "1 Valid ID",
          "Barangay Residency",
          "Barangay Clearance",
          "Copy of Order",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },
      
    ],
  },

  {
    id: "integrated",
    number: "04",
    title: "Integrated Sectoral Services",
    shortTitle: "Integrated",
    icon: Users,
    description:
      "Integrated services designed to support different sectors and communities within the city.",
    services: [
      {
        title: "Legal Assistance",
        description:
          "Legal support through PAO, City Prosecutor, and Court Hearing",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Violence Against Women and their Children",
        description:
          "Support services for VAWC cases",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Solo Parent Application - Death of Spouse",
        description:
          "Support services for solo parents due to death of spouse",
        requirements: [
          "Death Certificate of Spouse",
          "Marriage Certificate",
          "1x1 picture (2 pcs)",
          "Birth Certificate of minor children (photocopy)",
          "Income Tax Return (ITR)/Affidavit of No Income",
          "Voter's ID or Voter's Certification",
          "Sworn Affidavit declaring that the solo parent is not cohabiting with a partner or co-parent and has the sole parental care and support of the child or children",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Solo Parent Application - Legal Separation",
        description:
          "Support services for solo parents due to legal seperation",
        requirements: [
          "Marriage Certificate",
          "1x1 picture (2 pcs)",
          "Birth Certificate of minor children (photocopy)",
          "Income Tax Return (ITR)/Affidavit of No Income",
          "Voter's ID or Voter's Certification",
          "Judicial Decree of legal seperation or affidavit of 2 disinterested person attesting to the fact of separation of the spouses",
          "Sworn Affidavit declaring that the solo parent is not cohabiting with a partner or co-parent and has the sole parental care and support of the child or children",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Solo Parent Application - Abandonment of Spouse",
        description:
          "Support services for solo parents due to abandonment",
        requirements: [
          "Marriage Certificate",
          "1x1 picture (2 pcs)",
          "Birth Certificate of minor children (photocopy)",
          "Income Tax Return (ITR)/Affidavit of No Income",
          "Voter's ID or Voter's Certification",
          "Affidavit of 2 disinterested persons attesting to the abandonment of Spouse",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

    ],
  },

  {
    id: "additional",
    number: "05",
    title: "Additional Services",
    shortTitle: "Additional",
    icon: HandHeart,
    description:
      "Additional assistance and support programs provided by the office.",
    services: [
      {
        title: "Balik Probinsya",
        description:
          "Assistance for residents who wish to return to their provinces",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Minor Travel Abroad Form",
        description:
          "Documentations for minors travelling abroad",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Anti-Mendicancy",
        description:
          "Programs to address and prevent medicancy in the city",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Community Based After Care",
        description:
          "Support services for community reintegration",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "Counseling Services",
        description:
          "Professional counseling for various personal and family issues",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

      {
        title: "MEDC/WEDC",
        description:
          "Municipal/Women Economic Development Council Programs",
        requirements: [
          "Contact the CSWD office for specific requirements",
        ],
        steps: [
          "Prepare all the required documents listed above.",
          "Visit the City Social Welfare and Development Office located at the City Hall of Tanauan.",
          "Submit your application and requirements to the CSWD staff for assessment.",
          "Wait for the evaluation and approval of your application.",
        ],
      },

    ],
  },
];

export default function CSWDServices() {
  const [activeCategory, setActiveCategory] = useState("emergency");
  const [activeService, setActiveService] = useState(0);

  const category =
    categories.find((item) => item.id === activeCategory) ?? categories[0];

  const selectedService = category.services[activeService];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveService(0);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#111827]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative md:mt-31 overflow-hidden bg-[#7a0000]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-black/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#C9A44C]/10 blur-3xl animate-pulse duration-1000" />

        <div className="relative mx-auto max-w-7xl pb-16 pt-32 lg:px-8 lg:pb-12 lg:pt-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                  City Social Welfare & Development
                </span>
              </div>

              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Services
                <span className="block text-white/40">for the community.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Access social welfare assistance and support programs provided
                by the City Government of Tanauan.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end shrink-0">
              <img
                src={tanauan_logo}
                alt="Tanauan City Logo"
                className="h-36 w-36 object-contain drop-shadow-xl opacity-90 transition-all duration-500 hover:scale-105 hover:-translate-y-1 md:mr-23 sm:h-44 sm:w-44 lg:h-52 lg:w-70"
              />
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Explore available assistance
            </p>

            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                ↓
              </span>
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-[#7a0000] sm:text-5xl lg:text-6xl">
              {category.title}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#6B7280] lg:pb-1">
            {category.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-px w-full bg-black/15 md:mt-20"/>
        </div>

        {/* CATEGORY NAVIGATION */}
        <section>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide">
              {categories.map((item) => {
                const Icon = item.icon;
                const isActive = activeCategory === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleCategoryChange(item.id)}
                    className={`group relative flex min-w-max items-center gap-4 px-5 py-6 text-left transition-all duration-300 first:pl-0 ${
                      isActive
                        ? "text-[#7a0000]"
                        : "text-[#6B7280] hover:text-[#111827]"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-widest ${
                        isActive ? "text-[#C9A44C]" : "text-black/25"
                      }`}
                    >
                      {item.number}
                    </span>

                    <Icon size={18} strokeWidth={1.8} className="hidden sm:block" />

                    <span className="text-sm font-semibold">
                      {item.shortTitle}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 h-[3px] bg-[#7a0000] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE DIRECTORY (Strictly Aligned Height Layout)
        ===================================================== */}
        <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:grid-cols-[0.85fr_1.15fr] items-start">
          
          {/* LEFT — SERVICE LIST */}
          <div className="border-b border-black/10 lg:border-b-0 lg:border-r">
            <div className="border-b border-black/10 px-6 py-5 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                Available Services
              </p>
            </div>

            <div>
              {category.services.map((service, index) => {
                const isSelected = activeService === index;

                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    className={`group relative flex w-full items-start gap-5 border-b border-black/10 px-6 py-7 text-left transition-all duration-300 last:border-b-0 sm:px-8 ${
                      isSelected
                        ? "bg-[#F7F5F0]"
                        : "bg-white hover:bg-[#FAFAF8]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-[3px] bg-[#7a0000] transition-transform duration-300 ${
                        isSelected ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    <span
                      className={`pt-1 text-xs font-bold tracking-widest transition-colors ${
                        isSelected ? "text-[#7a0000]" : "text-black/25"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-base font-semibold leading-6 transition-colors ${
                          isSelected
                            ? "text-[#111827]"
                            : "text-[#374151] group-hover:text-[#111827]"
                        }`}
                      >
                        {service.title}
                        
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#9CA3AF]">
                        {service.description}
                      </p>
                    </div>

                    <ChevronRight
                      size={18}
                      className={`mt-1 shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "translate-x-0 text-[#7a0000]"
                          : "-translate-x-2 text-black/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT — SERVICE DETAILS (Constrained & Scrollable)
          ================================================= */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 lg:max-h-[640px] lg:overflow-y-auto">
            <div>
              {/* Service Title */}
              <h3 className="font-serif text-2xl leading-tight text-[#111827] sm:text-3xl">
                {selectedService.title}
              </h3>

              {/* Description Block */}
              <div className="mt-4 border-b border-black/10 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                  Description
                </span>
                <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                  {selectedService.description}
                </p>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111827]">
                  Requirements
                </span>
                <span className="h-px flex-1 bg-black/10" />
              </div>

              <div className="space-y-2.5">
                {selectedService.requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-black/5 bg-[#F7F5F0] p-3 text-xs sm:text-sm text-[#374151]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7a0000]/10 text-[11px] font-bold text-[#7a0000]">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply Section */}
            {selectedService.steps && (
              <div className="mt-6 border-t border-black/10 pt-4">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111827]">
                    How to Apply
                  </span>
                  <span className="h-px flex-1 bg-black/10" />
                </div>

                <div className="space-y-2.5">
                  {selectedService.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-black/5 bg-white p-3 text-xs sm:text-sm text-[#374151] shadow-2xs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A44C]/15 text-[11px] font-bold text-[#C9A44C]">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* =========================================================
          CONTACT INFORMATION SECTION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="bg-[#7a0000] px-8 py-6 sm:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="h-px w-8 bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Get in Touch
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white sm:text-3xl">
                Contact Information & Office Hours
              </h3>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Reach out to the City Social Welfare & Development office for inquiries and assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#FAFAF8]">
            <div className="flex flex-col justify-between rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7a0000]/10 text-[#7a0000] mb-4">
                  <Clock size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Office Hours
                </span>
                <p className="mt-2 text-sm font-semibold text-[#111827]">
                  Monday to Friday
                </p>
              </div>
              <p className="mt-4 text-sm text-[#6B7280] border-t border-black/5 pt-3">
                8:00 AM - 5:00 PM
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7a0000]/10 text-[#7a0000] mb-4">
                  <Phone size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Phone Support
                </span>
                <p className="mt-2 text-sm font-semibold text-[#111827]">
                  (043) 728 9800
                </p>
              </div>
              <a href="tel:0437289800" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7a0000] hover:underline border-t border-black/5 pt-3">
                Call office directly <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7a0000]/10 text-[#7a0000] mb-4">
                  <Mail size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Email Address
                </span>
                <p className="mt-2 text-sm font-semibold text-[#111827] truncate">
                  cswd@tanauancity.gov.ph
                </p>
              </div>
              <a href="mailto:cswd@tanauancity.gov.ph" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7a0000] hover:underline border-t border-black/5 pt-3">
                Send an email <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7a0000]/10 text-[#7a0000] mb-4">
                  <MapPin size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Location
                </span>
                <p className="mt-2 text-sm font-semibold text-[#111827]">
                  City Hall
                </p>
              </div>
              <p className="mt-4 text-sm text-[#6B7280] border-t border-black/5 pt-3">
                Tanauan City, Batangas
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}