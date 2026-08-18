import { useState, useMemo } from 'react'
import Footer from '../components/layout/Footer.tsx'
import { Search, SortAsc, Download, Eye, FileText, ChevronRight, ChevronDown, LayoutGrid, List, ChevronLeft } from 'lucide-react'

// Organized dataset mapped by category / year / quarter keys with TypeScript Record typing
const documentsDatabase: Record<string, Array<{ id: number; title: string; date: string }>> = {
  // ----------------- 2021 BIDS AND AWARDS -----------------
  '2021-INVITATION TO BID': [
    { id: 1, title: 'Supply, Delivery, and Installation of Christmas Decorations', date: 'August 12, 2021' },
    { id: 2, title: 'Supply and Delivery of Vehicle for City Cooperative and Livelihood Development Office', date: 'August 10, 2021' },
    { id: 3, title: 'Supply and Delivery of Various Deped Forms for end of school year rites of Deped Tanauan City school year 2020-2021', date: 'August 05, 2021' },
    { id: 4, title: 'Supply and Delivery of Tablets to be used by Learners/Students of Deped Tanauan City', date: 'July 28, 2021' },
    { id: 5, title: 'Supply and Delivery of Tablet to be used by Learners/Students of Deped Tanauan City', date: 'July 20, 2021' },
    { id: 6, title: 'Supply and Delivery of Rice for Covid-19 Positive and PUI\'s Patients', date: 'July 15, 2021' },
    { id: 7, title: 'Supply and Delivery of Passenger Van (Flexi Truck) for CSWD used', date: 'July 10, 2021' },
    { id: 8, title: 'Supply and Delivery of Passenger Van (Flexi Truck) for CSWD used.(Re-Bid)', date: 'July 05, 2021' },
    { id: 9, title: 'Supply and Delivery of Motor Vehicle for official use in the Office of the building Official', date: 'June 28, 2021' },
    { id: 10, title: 'Supply and Delivery of Motor Vehicle for official use in Tanauan City College', date: 'June 20, 2021' },
    { id: 11, title: 'Supply and Delivery of Motor Vehicle', date: 'June 15, 2021' },
    { id: 12, title: 'Supply and Delivery of Mobile Clinic for City Health Office', date: 'June 10, 2021' },
    { id: 13, title: 'Supply and Delivery of Mini Multi-Purpose Vehicle', date: 'June 05, 2021' },
    { id: 14, title: 'Supply and Delivery of Medical and Laboratory Supplies for City Health Office', date: 'May 28, 2021' },
    { id: 15, title: 'Supply and Delivery of Medical Supplies for Sambat and Pagaspas Birthing Homes', date: 'May 20, 2021' },
    { id: 16, title: 'Supply and Delivery of Machine Tools for CDRRMO in response operation particularly vehicular accident', date: 'May 15, 2021' },
    { id: 17, title: 'Supply and Delivery of Grocery Items for Covid-19 Position and PUI\'s patients. (Re-Bid)', date: 'May 10, 2021' },
    { id: 18, title: 'Supply and Delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)', date: 'May 05, 2021' },
    { id: 19, title: 'Supply and Delivery of Furniture for Teaching and Non-Teaching Personnel in Deped Tanauan City Division', date: 'May 01, 2021' },
    { id: 20, title: 'Supply and Delivery of Educational Materials and Supplies for kindergarten pupils in Tanauan City Schools Division of Tanauan City', date: 'April 25, 2021' },
    { id: 21, title: 'Supply and Delivery of Drugs and Medicines for the implementation of Family Planning Program', date: 'April 20, 2021' },
    { id: 22, title: 'Supply and Delivery of Drugs and Medicines for Sambat and Pagaspas Birthing Homes', date: 'April 15, 2021' },
    { id: 23, title: 'Supply and Delivery of Drugs and Medicines for Sambat and Pagaspas Birthing Homes', date: 'April 10, 2021' },
    { id: 24, title: 'Supply and Delivery of Drugs and Medicines for City Health Office', date: 'April 05, 2021' },
    { id: 25, title: 'Supply and Delivery of Drugs and Medicines for CHO', date: 'April 01, 2021' },
    { id: 26, title: 'Supply and Delivery of Disaster Response & Rescue Equipment', date: 'March 28, 2021' },
    { id: 27, title: 'Supply and Delivery of Disaster Response & Rescue Equipment', date: 'March 25, 2021' },
    { id: 28, title: 'Supply and Delivery of Deped 5D Hub Facility & Installed Software to be used by the Learners/Students of Deped Tanauan City in their remote/distance learning', date: 'March 20, 2021' },
    { id: 29, title: 'Supply and Delivery of Chemicals for the implementation of Dengue Prevention and Control Program', date: 'March 15, 2021' },
    { id: 30, title: 'Supply and Delivery of Cellphone to ensure that all schools with all of its learners, teachers and staff are ready in the delivery of educational support services', date: 'March 10, 2021' },
    { id: 31, title: 'Supply and Delivery of Antigen Covid-19 Rapid Test Kit', date: 'March 05, 2021' },
    { id: 32, title: 'Supply and Delivery Multifunction Printer for Deped Tanauan City Division', date: 'February 28, 2021' },
    { id: 33, title: 'Supply and Delivery of Office Supplies for Teachers of Deped Tanauan City in Their remote/distance teaching', date: 'February 20, 2021' },
    { id: 34, title: 'Supply and Delivery of Drugs and Medicines for City Health Office', date: 'February 15, 2021' },
    { id: 35, title: 'Supply, Delivery and Installation of Panels, Cubicles and Tablets at Tanauan City College (Re-Bid)', date: 'February 10, 2021' },
    { id: 36, title: 'Supply, Delivery and Installation of Panels, Cubicles and Tablets at Tanauan City College', date: 'February 05, 2021' },
    { id: 37, title: 'Supply and Delivery of Medical and Laboratory Supplies for City Health Office', date: 'February 01, 2021' },
    { id: 38, title: 'Supply and Delivery of Manipulative and Educational Toys for Kindergarten', date: 'January 25, 2021' },
    { id: 39, title: 'Supply and Delivery of Grocery Items for Covid-19 Position and PUI\'s patients', date: 'January 15, 2021' },
    { id: 40, title: 'Supply and Delivery of Grocery Items for Tulong Handog sa Tanaueno Program', date: 'January 05, 2021' },
  ],
  '2021-BAC RESOLUTION': [
    { id: 1, title: 'Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)', date: 'August 20, 2021' },
    { id: 2, title: 'Supply and Delivery of Mobile Clinic for CHO', date: 'August 15, 2021' },
    { id: 3, title: 'Supply and delivery of Manipulative and Educational Toys for Kindergarten pupils in City Schools Division of Tanauan', date: 'August 10, 2021' },
    { id: 4, title: 'Supply and delivery (IT) Laptop for Teachers of Deped Tanauan City in their remote/distance learning', date: 'August 05, 2021' },
    { id: 5, title: 'Supply and Delivery of Emergency Alert and Dispatch System', date: 'July 28, 2021' },
    { id: 6, title: 'Supply and Delivery of Emergency Alert and Dispatch System in the City of Tanauan', date: 'July 20, 2021' },
    { id: 7, title: 'Supply, Delivery, installation and commissioning for the Rehabilitation of the City-Wide Security and Surveillance System of Tanauan', date: 'July 15, 2021' },
    { id: 8, title: 'Supply, Delivery, installation and commissioning for the Rehabilitation of the City-Wide Security and Surveillance System of Tanauan', date: 'July 10, 2021' },
    { id: 9, title: 'Supply and delivery of Passenger Van (Flexi Truck) for CSWD used (Re-bid)', date: 'July 05, 2021' },
    { id: 10, title: 'Supply and delivery of Motor Vehicle for official use in the Office of the Building official', date: 'June 28, 2021' },
    { id: 11, title: 'Emergency Procurement', date: 'June 20, 2021' },
    { id: 12, title: 'Supply and Delivery of Mini Multi-Purpose Vehicle', date: 'June 15, 2021' },
    { id: 13, title: 'Supply and Delivery of Drugs and medicines for City Health Medicines', date: 'June 10, 2021' },
    { id: 14, title: 'Supply and Delivery of Medical Supplies for Sambat and Pagaspas Birthing Homes', date: 'June 05, 2021' },
    { id: 15, title: 'Supply and delivery of Drugs and Medicines and Medical Supplies in the implementation of Rabies Prevention and Control Program', date: 'May 28, 2021' },
    { id: 16, title: 'Supply and delivery of Drugs and Medicines for CHO', date: 'May 20, 2021' },
    { id: 17, title: 'Supply and delivery of Drugs and Medicines for the implementation of Family Planning Program', date: 'May 15, 2021' },
    { id: 18, title: 'Supply and Delivery of Educational Materials and Supplies for Kindergarten Pupils in City Schools Division of Tanauan', date: 'May 10, 2021' },
    { id: 19, title: 'Garbage Hauling Services for April 1, 2020 – December 31, 2020', date: 'May 05, 2021' },
    { id: 20, title: 'Supply and Delivery of Covid-19 Test Kit', date: 'April 25, 2021' },
    { id: 21, title: 'Supply and Delivery of Medical and Laboratory Supplies', date: 'April 15, 2021' },
    { id: 22, title: 'Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)', date: 'April 05, 2021' },
  ],
  '2021-NOTICE TO PROCEED': [
    { id: 1, title: 'ALWAYS RIGHTPHARMACUETICALS CO./JC HIGH EAGLE MARKETING CO.JVA THAT SUPPLY AND DELIVERY OF MOBILE CLINIC FOR CHO', date: 'August 12, 2021' },
    { id: 2, title: 'ANGELMAI TRADING THAT PURCHASE OF GROCERY ITEM IN ASSISTANCE TO COVID-19 CONFIRMED CASE, PUI AND PUM', date: 'August 10, 2021' },
    { id: 3, title: 'COSMIC TECH NOLOGIES, INC. THAT SUPPLY AND DELIVERY OF (IT) LAPTOP FOR TEACHERS OF DEPED TANAUAN CITY IN THEIR REMOTE/DISTANCE LEARNING', date: 'August 05, 2021' },
    { id: 4, title: 'GENNCARS SAN PABLO INC THAT SUPPLY AND DELIVERY OF PASSENGER VAN (FLEXI TRUCK) FOR CSWD USED', date: 'July 28, 2021' },
    { id: 5, title: 'ZPM TRADING THAT SUPPLY AND DELIVERY OF GROCERY ITEMS FOR TULONG HANDOG SA TANAUEÑO PROGRAM(RE-BID)', date: 'July 20, 2021' },
    { id: 6, title: 'METROWASTE SOLID WASTE MANAGEMENT CORP. THAT GARBAGE HAULING SERVICES FOR APRIL 1, 2021 – DECEMBER 31, 2021', date: 'July 15, 2021' },
    { id: 7, title: 'BOOKS ON WHEELS ENTERPRISES, INC. THAT SUPPLY AND DELIVERY OF MANIPULATIVE AND EDUCATIONAL TOYS FOR KINDERGARTEN PUPILS IN CITY SCHOOLS DIVISION OF TANAUAN', date: 'July 10, 2021' },
    { id: 8, title: 'L.R.N VENTURES INC. THAT SUPPLY DELIVERY, INSTALLATION AND COMMISSIONING FOR THE REHABILITATION OF THE CITY-WIDE SECURITY AND SURVEILLANCE SYSTEM OF TANAUAN', date: 'July 05, 2021' },
    { id: 9, title: 'PRIME LUCK ENTERPRISES THAT SUPPLY AND DELIVERY OF COVID-19 TEST KIT', date: 'June 28, 2021' },
    { id: 10, title: 'PRIME LUCK ENTERPRISES THAT SUPPLY AND DELIVERY OF MEDICAL AND LABORATORY SUPPLIES', date: 'June 20, 2021' },
    { id: 11, title: 'SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES FOR CITY HEALTH OFFICE', date: 'June 15, 2021' },
    { id: 12, title: 'TOYOTA BATANGAS CITY, INC. THAT SUPPLY AND DELIVERY OF MOTOR VEHICLE FOR OFFICIAL USE IN THE OFFICE OF THE BUILDING OFFICIAL', date: 'June 10, 2021' },
    { id: 13, title: 'SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES FOR THE IMPLEMENTATION OF FAMILY PLANNING PROGRAM', date: 'June 05, 2021' },
    { id: 14, title: 'SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES AND MEDICAL SUPPLIES IN THE IMPLEMENTATION OF RABIES PREVENTION AND CONTROL PROGRAM', date: 'May 28, 2021' },
    { id: 15, title: 'SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES FOR CITY HEALTH OFFICE', date: 'May 20, 2021' },
    { id: 16, title: 'TOYOTA BATANGAS CITY, INC. THAT SUPPLY AND DELIVERY OF MINI MULTI-PURPOSE VEHICLE', date: 'May 15, 2021' },
    { id: 17, title: 'TWIS TRADING THAT SUPPLY AND DELIVERY OF EMERGENCY ALERT AND DISPATCH SYSTEM', date: 'May 10, 2021' },
    { id: 18, title: 'WIN GOLD MARKETING INTERNATIONAL DEVELOPMENT THAT SUPPLY, DELIVERY AND CONVERSION OF AMBULANCE FOR CDRRMO', date: 'May 05, 2021' },
    { id: 19, title: 'WIN GOLD MARKETING INTERNATIONAL DEVELOPMENT THAT SUPPLY, DELIVERY AND INSTALLATION OF SIREN TO BE USED FOR DISASTER PREPAREDNESS OF 4B BARANGAYS', date: 'April 25, 2021' },
  ],
  '2021-NOTICE OF AWARD': [
    { id: 1, title: 'Supply and delivery of Mobile Clinic for City Health Office', date: 'August 12, 2021' },
    { id: 2, title: 'Procurement Emergency Purchase', date: 'August 10, 2021' },
    { id: 3, title: 'Supply and Delivery of Tablet for Learners/Students of Deped Tanauan City in their remote/distance learning', date: 'August 05, 2021' },
    { id: 4, title: 'Supply and delivery of Passenger Van (Flexi Truck for CSWD used)', date: 'July 28, 2021' },
    { id: 5, title: 'Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program', date: 'July 20, 2021' },
    { id: 6, title: 'Garbage Hauling Services for April 1, 2021 – December 31, 2021', date: 'July 15, 2021' },
    { id: 7, title: 'Cargo Forwarding and Hauling Services', date: 'July 10, 2021' },
    { id: 8, title: 'Supply, delivery, installation and commissioning for the Rehabilitation of the City-Wide Security and surveillance System of Tanauan', date: 'July 05, 2021' },
    { id: 9, title: 'Supply and Delivery of Covid-19 Test Kit', date: 'June 28, 2021' },
    { id: 10, title: 'Supply and Delivery of Medical and Laboratory Supplies', date: 'June 20, 2021' },
    { id: 11, title: 'Supply and delivery of drugs and medicines for City Health Office', date: 'June 15, 2021' },
    { id: 12, title: 'Supply and delivery of Motor Vehicle for official use in the Office of the Building Official', date: 'June 10, 2021' },
    { id: 13, title: 'Supply and Delivery of Grocery Items', date: 'June 05, 2021' },
    { id: 14, title: 'Supply and delivery of drugs and medicines for the Implementation of Family Planning Program', date: 'May 28, 2021' },
    { id: 15, title: 'Supply and delivery of drugs and medicines and medical supplies in the implementation of Rabies Prevention and Control Program', date: 'May 20, 2021' },
    { id: 16, title: 'Supply and delivery of drugs and medicines for City Health Office', date: 'May 15, 2021' },
    { id: 17, title: 'Supply and delivery of Medical Supplies for Sambat and Pagaspas Birthing Homes', date: 'May 10, 2021' },
    { id: 18, title: 'Supply and Delivery of Mini Multi-Purpose Vehicle', date: 'May 05, 2021' },
    { id: 19, title: 'Supply and Delivery of Emergency Alert and Dispatch System', date: 'April 25, 2021' },
    { id: 20, title: 'Supply and Delivery of Educational Materials and Supplies for Kindergarten pupils in City Schools Division of Tanauan', date: 'April 20, 2021' },
    { id: 21, title: 'Supply and Delivery of Educational Materials', date: 'April 15, 2021' },
  ],
  '2021-FULL DISCLOSURE REPORT': [
    { id: 1, title: '20% Component of the IRA Utilization (IRAU)', date: 'December 15, 2021' },
    { id: 2, title: '70% LDRRM Utilization Fund (LDRRMFU)', date: 'December 10, 2021' },
    { id: 3, title: 'Bid Results on Civil Works, Goods & Services, Consulting Services', date: 'December 05, 2021' },
    { id: 4, title: 'Human Resource Complement (ManCom)', date: 'November 28, 2021' },
    { id: 5, title: 'Quarterly Statement of Cash Flow (QSCF)', date: 'November 20, 2021' },
    { id: 6, title: 'SEF Utilization Fund (SEF)', date: 'November 15, 2021' },
    { id: 7, title: 'Trust Fund Utilization (PDAF)', date: 'November 10, 2021' },
    { id: 8, title: 'Unliquidated Cash Advances (UCA)', date: 'November 05, 2021' },
  ],

  // ----------------- 2022 BIDS AND AWARDS -----------------
  '2022-INVITATION TO BID': [
    { id: 1, title: 'Invitation to Bid - Municipal Hall Upgrades', date: 'March 10, 2022' },
  ],
  '2022-BAC RESOLUTION': [
    { id: 1, title: 'BAC Resolution No. 042 - Procurement of Heavy Equipment', date: 'August 10, 2022' },
  ],
  '2022-NOTICE TO PROCEED': [
    { id: 1, title: 'Notice to Proceed - Municipal Plaza Lighting', date: 'June 14, 2022' },
  ],
  '2022-NOTICE OF AWARD': [
    { id: 1, title: 'Notice of Award - Heavy Equipment Purchase', date: 'July 28, 2022' },
  ],

  // ----------------- FULL DISCLOSURE REPORT (QUARTERS) -----------------
  '2022-FIRST QUARTER': [
    { id: 1, title: 'Annual Procurement Plan', date: 'August 12, 2026' },
    { id: 2, title: 'BAC Resolution No. 042', date: 'August 10, 2026' },
    { id: 3, title: 'Invitation to Bid - Phase 1', date: 'August 05, 2026' },
    { id: 4, title: 'Notice of Award - Project Alpha', date: 'July 28, 2026' },
    { id: 5, title: 'Notice to Proceed - Road Repair', date: 'July 20, 2026' },
    { id: 6, title: 'Supplemental Annual Procurement Plan', date: 'July 15, 2026' },
    { id: 7, title: 'Abstract of Bids', date: 'July 10, 2026' },
    { id: 8, title: 'Performance Security Report', date: 'June 30, 2026' },
    { id: 9, title: 'Bidding Documents - Supply Delivery', date: 'June 25, 2026' },
    { id: 10, title: 'Notice of Post-Qualification', date: 'June 18, 2026' },
    { id: 11, title: 'Resolution Recommending Award', date: 'June 10, 2026' },
    { id: 12, title: 'Contract Agreement Form', date: 'June 01, 2026' },
  ],
  '2022-SECOND QUARTER': [
    { id: 1, title: 'Q2 2022 Statement of Cash Flows', date: 'July 15, 2022' },
    { id: 2, title: 'Q2 2022 20% Development Fund Utilization', date: 'July 18, 2022' },
  ],
  '2022-THIRD QUARTER': [
    { id: 1, title: 'Q3 2022 Statement of Receipts and Expenditures', date: 'October 15, 2022' },
    { id: 2, title: 'Q3 2022 Special Education Fund (SEF) Utilization', date: 'October 20, 2022' },
  ],
  '2022-FOURTH QUARTER': [
    { id: 1, title: 'Q4 2022 Annual Financial Report', date: 'January 15, 2023' },
    { id: 2, title: 'Q4 2022 Statement of Debt Service', date: 'January 18, 2023' },
  ],

  '2024-FIRST QUARTER': [
    { id: 1, title: 'Q1 2024 Full Disclosure Financial Report', date: 'April 10, 2024' },
    { id: 2, title: 'Q1 2024 Barangay Financial Status', date: 'April 15, 2024' },
  ],
  '2024-SECOND QUARTER': [
    { id: 1, title: 'Q2 2024 Full Disclosure Financial Report', date: 'July 10, 2024' },
    { id: 2, title: 'Q2 2024 Manpower Complement Report', date: 'July 14, 2024' },
  ],
  '2024-THIRD QUARTER': [
    { id: 1, title: 'Q3 2024 Full Disclosure Financial Report', date: 'October 10, 2024' },
  ],
  '2024-FOURTH QUARTER': [
    { id: 1, title: 'Q4 2024 Full Disclosure Financial Report', date: 'January 10, 2025' },
  ],

  '2025-FIRST QUARTER': [
    { id: 1, title: 'Q1 2025 Transparency Report', date: 'April 12, 2025' },
  ],
  '2025-SECOND QUARTER': [
    { id: 1, title: 'Q2 2025 Transparency Report', date: 'July 12, 2025' },
  ],
  '2025-THIRD QUARTER': [
    { id: 1, title: 'Q3 2025 Transparency Report', date: 'October 12, 2025' },
  ],
  '2025-FOURTH QUARTER': [
    { id: 1, title: 'Q4 2025 Transparency Report', date: 'January 12, 2026' },
  ]
}

export default function TransparencyPage() {
  const [activeYear, setActiveYear] = useState('2021')
  const [activeCategory, setActiveCategory] = useState('INVITATION TO BID')
  
  const [openFdrYear, setOpenFdrYear] = useState('2022')
  const [selectedFdrQuarter, setSelectedFdrQuarter] = useState('')
  
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('default')
  const [viewMode, setViewMode] = useState('grid')
  
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showViewDropdown, setShowViewDropdown] = useState(false)

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const currentKey = selectedFdrQuarter ? selectedFdrQuarter : `${activeYear}-${activeCategory}`

  const filteredDocuments = useMemo(() => {
    let rawDocs = documentsDatabase[currentKey] || []

    let result = rawDocs.filter((doc: any) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (sortOption === 'az') {
      result.sort((a: any, b: any) => a.title.localeCompare(b.title))
    } else if (sortOption === 'za') {
      result.sort((a: any, b: any) => b.title.localeCompare(a.title))
    } else if (sortOption === 'newest') {
      result.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return result
  }, [currentKey, searchQuery, sortOption])

  // Reset to page 1 whenever filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [currentKey, searchQuery, sortOption])

  // Get current page slice of documents
  const paginatedDocuments = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredDocuments.slice(start, start + itemsPerPage)
  }, [filteredDocuments, currentPage])

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage)
  const quarters = ['FIRST QUARTER', 'SECOND QUARTER', 'THIRD QUARTER', 'FOURTH QUARTER']

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex-grow pt-28 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Transparency Report</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-72 bg-white rounded-lg shadow-sm border border-slate-200 p-4 shrink-0 h-fit">
              <div className="space-y-6">
                {/* Bids and Awards Section */}
                <div>
                  <h2 className="font-bold text-sm tracking-wider uppercase mb-3 text-red-800">
                    Bids and Awards
                  </h2>
                  <div className="flex items-center gap-2 mb-3">
                    <button 
                      onClick={() => setActiveYear('2021')}
                      className={`px-3 py-1 text-sm font-medium rounded border ${activeYear === '2021' ? 'bg-red-50 border-red-300 text-red-700' : 'bg-white border-slate-200 text-slate-700'}`}
                    >
                      2021
                    </button>
                    <button 
                      onClick={() => setActiveYear('2022')}
                      className={`px-3 py-1 text-sm font-medium rounded border ${activeYear === '2022' ? 'bg-red-50 border-red-300 text-red-700' : 'bg-white border-slate-200 text-slate-700'}`}
                    >
                      2022
                    </button>
                  </div>
                  
                  {/* Sub-menu items */}
                  <ul className="space-y-1 text-sm text-slate-600 font-medium">
                    {['INVITATION TO BID', 'BAC RESOLUTION', 'NOTICE TO PROCEED', 'FULL DISCLOSURE REPORT', 'NOTICE OF AWARD'].map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => {
                            setActiveCategory(item)
                            setSelectedFdrQuarter('')
                          }}
                          className={`w-full text-left px-3 py-2 rounded transition-colors ${activeCategory === item && !selectedFdrQuarter ? 'bg-red-800 text-white font-semibold' : 'hover:bg-slate-100 text-slate-700'}`}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-slate-200" />

                {/* Full Disclosure Report Section with Dropdown Quarters */}
                <div>
                  <h2 className="font-bold text-sm tracking-wider uppercase mb-3 text-red-800">
                    Full Disclosure Report
                  </h2>
                  <div className="space-y-2 text-sm">
                    {['2022', '2024', '2025'].map((yr) => {
                      const isOpen = openFdrYear === yr
                      return (
                        <div key={yr} className="border border-slate-100 rounded-md overflow-hidden">
                          <button
                            onClick={() => setOpenFdrYear(isOpen ? '' : yr)}
                            className="w-full text-left px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold flex items-center justify-between"
                          >
                            <span>{yr}</span>
                            {isOpen ? <ChevronDown className="w-4 h-4 text-slate-500" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                          </button>

                          {isOpen && (
                            <ul className="bg-white py-1 pl-4 pr-2 space-y-1 border-t border-slate-100">
                              {quarters.map((qtr) => {
                                const quarterKey = `${yr}-${qtr}`
                                const isSelected = selectedFdrQuarter === quarterKey
                                return (
                                  <li key={qtr}>
                                    <button
                                      onClick={() => {
                                        setSelectedFdrQuarter(quarterKey)
                                        setActiveCategory('FULL DISCLOSURE REPORT')
                                      }}
                                      className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 ${isSelected ? 'bg-red-50 text-red-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                      <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                                      <span>{qtr}</span>
                                    </button>
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div>
                {/* Top Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 relative">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* Sort Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => { setShowSortDropdown(!showSortDropdown); setShowViewDropdown(false); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
                      >
                        <SortAsc className="w-4 h-4 text-slate-500" />
                        Sort {sortOption !== 'default' && `(${sortOption.toUpperCase()})`}
                      </button>
                      {showSortDropdown && (
                        <div className="absolute left-0 mt-2 w-44 bg-white border border-slate-200 rounded-md shadow-lg z-10 py-1 text-sm">
                          <button onClick={() => { setSortOption('default'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700">Default</button>
                          <button onClick={() => { setSortOption('az'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700">Title (A - Z)</button>
                          <button onClick={() => { setSortOption('za'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700">Title (Z - A)</button>
                          <button onClick={() => { setSortOption('newest'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700">Newest Date</button>
                        </div>
                      )}
                    </div>

                    {/* View Mode Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => { setShowViewDropdown(!showViewDropdown); setShowSortDropdown(false); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
                      >
                        {viewMode === 'grid' ? <LayoutGrid className="w-4 h-4 text-slate-500" /> : <List className="w-4 h-4 text-slate-500" />}
                        View ({viewMode === 'grid' ? 'Grid' : 'List'})
                      </button>
                      {showViewDropdown && (
                        <div className="absolute left-0 mt-2 w-36 bg-white border border-slate-200 rounded-md shadow-lg z-10 py-1 text-sm">
                          <button onClick={() => { setViewMode('grid'); setShowViewDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700 flex items-center gap-2"><LayoutGrid className="w-4 h-4" /> Grid View</button>
                          <button onClick={() => { setViewMode('list'); setShowViewDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700 flex items-center gap-2"><List className="w-4 h-4" /> List View</button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Documents"
                      className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Document Cards List/Grid with items-stretch and h-full */}
                {paginatedDocuments.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 text-sm">
                    No documents found matching "{searchQuery}".
                  </div>
                ) : (
                  <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch" : "flex flex-col gap-3"}>
                    {paginatedDocuments.map((doc: any) => (
                      <div 
                        key={doc.id}
                        className="flex items-start justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-xs hover:shadow-md transition-shadow h-full"
                      >
                        <div className="flex items-start gap-3 overflow-hidden pr-2">
                          <div className="p-2.5 bg-red-50 text-red-600 rounded-md shrink-0 flex flex-col items-center justify-center border border-red-100">
                            <FileText className="w-6 h-6" />
                            <span className="text-[10px] font-bold mt-0.5">PDF</span>
                          </div>
                          <div className="overflow-hidden">
                            <h3 className="font-semibold text-slate-800 text-sm leading-snug break-words">{doc.title}</h3>
                            <p className="text-xs text-slate-500 mt-1">Published: {doc.date}</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 shrink-0 ml-2">
                          <button 
                            onClick={() => alert(`Downloading ${doc.title}...`)}
                            className="flex items-center justify-center gap-1 px-3 py-1 text-xs font-medium text-white bg-red-700 rounded hover:bg-red-800 transition-colors"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </button>
                          <button 
                            onClick={() => alert(`Previewing ${doc.title}...`)}
                            className="flex items-center justify-center gap-1 px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
                          >
                            <Eye className="w-3 h-3" />
                            Preview
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pagination Footer Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-slate-100 mt-8 pt-4">
                  <div className="text-xs text-slate-500">
                    Showing page <span className="font-semibold text-slate-700">{currentPage}</span> of <span className="font-semibold text-slate-700">{totalPages}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1 px-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-7 h-7 text-xs font-medium rounded transition-colors ${currentPage === page ? 'bg-red-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}