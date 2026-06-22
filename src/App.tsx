/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  Users, 
  Layers, 
  Building, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Clock, 
  Check, 
  HelpCircle, 
  MapPin, 
  Sparkles, 
  FileText, 
  Calculator, 
  ArrowUpRight,
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  Sliders,
  CheckCircle
} from 'lucide-react';

import { 
  credibilityStats, 
  needCards, 
  frameworkLevels, 
  stakeholderBenefits, 
  collaborationModels, 
  stepsJourney, 
  testQuotes 
} from './data';

import { AppointmentRequest } from './types';

export default function App() {
  // Navigation active tab tracking for page scrolling
  const [activeTab, setActiveTab] = useState<'overview' | 'framework' | 'benefits' | 'models' | 'contact'>('overview');
  
  // Toggle between Student Portrait and Digital SpellBee Certificate in Hero section
  const [showHeroCertificate, setShowHeroCertificate] = useState(false);
  
  // Interactive Section 3: Need Cards Active Tab
  const [activeNeed, setActiveNeed] = useState<string>('accuracy');

  // Interactive Section 5: Level Pathway Previewer
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  // Interactive Section 6: Stakeholder benefits tab
  const [activeStakeholder, setActiveStakeholder] = useState<number>(0);

  // Sample Level Test Interactive Quiz for school leaders
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  // Interactive Section 7: Live Collaboration Estimate Calculator for School leadership (Edugo slider style)
  const [selectedModelType, setSelectedModelType] = useState<'excel' | 'combined' | 'intense'>('combined');
  const [approxGrades, setApproxGrades] = useState<string>('Grades 1 – 10');
  const [estimatedStudents, setEstimatedStudents] = useState<number>(350);

  // Section 9: Testimonials manual rotation state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);

  // Section 10: Appointment request booking system state
  const [bookings, setBookings] = useState<AppointmentRequest[]>(() => {
    const saved = localStorage.getItem('spellbee_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  const [formState, setFormState] = useState({
    schoolName: '',
    city: '',
    board: 'CBSE',
    studentStrength: '150-500',
    gradesInterested: 'Grades 1 to 10',
    contactPerson: '',
    designation: 'Principal',
    mobile: '',
    email: '',
    preferredDate: '',
    message: ''
  });

  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Save bookings inside local storage for persistence
  useEffect(() => {
    localStorage.setItem('spellbee_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Section Ref targets for seamless smooth scrolling
  const section1HeroRef = useRef<HTMLDivElement>(null);
  const section3NeedRef = useRef<HTMLDivElement>(null);
  const section4AboutRef = useRef<HTMLDivElement>(null);
  const section5FrameworkRef = useRef<HTMLDivElement>(null);
  const section6BenefitsRef = useRef<HTMLDivElement>(null);
  const section7ModelsRef = useRef<HTMLDivElement>(null);
  const section8JourneyRef = useRef<HTMLDivElement>(null);
  const section9ProofRef = useRef<HTMLDivElement>(null);
  const section10FormRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Pre-fill form from collaboration estimation tool selection
  const handleSelectModelFromEstimator = (modelId: 'excel' | 'combined' | 'intense') => {
    setSelectedModelType(modelId);
    let gradeMapping = 'Grades 1 to 10';
    if (approxGrades.includes('Primary')) gradeMapping = 'Grades 1 to 5';
    if (approxGrades.includes('Secondary')) gradeMapping = 'Grades 9 to 10';

    setFormState(prev => ({
      ...prev,
      gradesInterested: gradeMapping,
      studentStrength: estimatedStudents < 150 ? 'Under 150' : estimatedStudents < 400 ? '150-500' : '500+',
      message: `Interested in evaluating SpellBee model: ${
        modelId === 'excel' ? 'SpellBee Excel' : modelId === 'combined' ? 'Level 1 + Level 2 Combined Track' : 'SpellBee Intense Championship'
      } for an estimate size of ${estimatedStudents} students.`
    }));
    
    // Smooth scroll down to the request form
    scrollToComponent(section10FormRef);
  };

  const handleDownloadBrochure = () => {
    // Generate and download a beautifully formatted high-fidelity SpellBee International Syllabus PDF brochure
    const pdfContent = `%PDF-1.4
%âãÏÓ
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R 6 0 R] /Count 2 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 10 0 R >> >> >>
endobj
4 0 obj
<< /Length 1200 >>
stream
q
1 0 0 1 0 0 cm
0 0 0 rg
0.08 0.1 0.3 RG
10 10 L 585 10 L 585 832 L 10 832 L Z S
% Header Accent Bar
25.13 44.31 92.16 rg
10 810 575 22 re f
1 1 1 rg
/F1 18 Tf
40 820 Td
(SPELLBEE INTERNATIONAL) Tj
0 -50 Td
/F1 24 Tf
0 0 0 rg
(ACADEMIC SYLLABUS & COLLABORATION PROSPECTUS) Tj
0 -30 Td
/F2 13 Tf
0.1 0.1 0.1 rg
(Direct Support / Enquiry: +91 63801 18835) Tj
0 -40 Td
/F1 16 Tf
0.72 0.22 0.05 rg
(AN ENLIGHTENING ENGLISH DEVELOPMENT JOURNEY) Tj
0 -25 Td
0.15 0.15 0.15 rg
/F2 11 Tf
(Our program enhances 4 core faculties of the English Language:) Tj
0 -20 Td
(  1. PHONETICS & PRONUNCIATION - Mastery of phonemes and standard dictation.) Tj
0 -15 Td
(  2. WORD ANALYSIS - Roots, prefixes, suffixes, etymology, and dynamic vocabulary.) Tj
0 -15 Td
(  3. SENTENCE STRUCTURE - Syntax clarity, contextual usage, and robust grammar.) Tj
0 -15 Td
(  4. LANGUAGE ETIQUETTE - High-fidelity phrasing, international idioms, & idioms.) Tj
0 -40 Td
/F1 14 Tf
0.36 0.13 0.71 rg
(COLLABORATION TIER & SCHOOL BENEFITS) Tj
0 -25 Td
0.2 0.2 0.2 rg
/F2 10 Tf
(- Zero upfront capital required from partner institutions) Tj
0 -15 Td
(- Custom high-fidelity interactive physical textbooks delivered) Tj
0 -15 Td
(- Staged competitive tests evaluated under TCS iON examination rules) Tj
0 -15 Td
(- National trophies, merit certificates, and world ranking recognition) Tj
0 -40 Td
/F1 14 Tf
0.08 0.55 0.38 rg
(HOW TO INITIATE THE PROGRAM) Tj
0 -25 Td
0.2 0.2 0.2 rg
/F2 11 Tf
(1. Fill out the School Enquiry Panel on our platform or contact Support directly.) Tj
0 -15 Td
(2. Receive physical sample books and interactive syllabus materials for review.) Tj
0 -15 Td
(3. Coordinator onboarding session organized to guide parent announcement drives.) Tj
0 -40 Td
/F1 12 Tf
0.47 0.44 0.42 rg
(SpellBee International - Language for Life . All Rights Reserved 2026-2027) Tj
Q
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 7 0 R /Resources << /Font << /F1 5 0 R /F2 10 0 R >> >> >>
endobj
7 0 obj
<< /Length 1200 >>
stream
q
0.08 0.1 0.3 RG
10 10 L 585 10 L 585 832 L 10 832 L Z S
0 0 0 rg
/F1 18 Tf
40 780 Td
(SPELLBEE INTERNATIONAL) Tj
/F2 12 Tf
0 -30 Td
(Syllabus Breakdown - K-12 Developmental Standard) Tj
0 -40 Td
/F1 14 Tf
(L1 to L2: Primary Explorers) Tj
0 -20 Td
/F2 11 Tf
(Focus: Letter connections, basic phonetic cues, visual naming, sight vocabulary.) Tj
0 -35 Td
/F1 14 Tf
(L3 to L5: Intermediate Linguists) Tj
0 -20 Td
/F2 11 Tf
(Focus: Prefixes, Root exploration, silent letters, sentence structuring drills.) Tj
0 -35 Td
/F1 14 Tf
(L6 to L8: Advanced Syntacticians) Tj
0 -20 Td
/F2 11 Tf
(Focus: Etymological roots, spelling rules variations, advanced idioms.) Tj
0 -35 Td
/F1 14 Tf
(L9 to L12: Professional Orators) Tj
0 -20 Td
/F2 11 Tf
(Focus: International eloquence, global speech etiquette, absolute spelling mastery.) Tj
0 -50 Td
/F1 13 Tf
(Contact Support Desk Today to dispatch physical samples details) Tj
0 -20 Td
(WhatsApp Support Hotline: +91 63801 18835) Tj
0 -15 Td
(Email Desk: support@spellbeeinternational.com) Tj
Q
endstream
endobj
10 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 11
0000000000 65535 f 
0000000015 00000 n 
0000000070 00000 n 
0000000135 00000 n 
0000000268 00000 n 
0000001518 00000 n 
0000001597 00000 n 
0000001730 00000 n 
0000002980 00000 n 
trailer
<< /Size 11 /Root 1 0 R >>
startxref
3050
%%EOF`;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SpellBee_International_Syllabus_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Simple robust validation
    if (!formState.schoolName.trim()) return setFormError('School Name is required');
    if (!formState.city.trim()) return setFormError('City location is required');
    if (!formState.contactPerson.trim()) return setFormError('Contact Person Name is required');
    if (!formState.mobile.trim()) return setFormError('Mobile or WhatsApp number is required');

    const bookingId = 'SBI-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking: AppointmentRequest = {
      id: bookingId,
      schoolName: formState.schoolName,
      city: formState.city,
      board: formState.board,
      studentStrength: formState.studentStrength,
      gradesInterested: formState.gradesInterested,
      contactPerson: formState.contactPerson,
      designation: formState.designation,
      mobile: formState.mobile,
      email: formState.email || 'N/A',
      preferredDate: formState.preferredDate || new Date().toISOString().split('T')[0],
      message: formState.message,
      createdAt: new Date().toLocaleDateString()
    };

    setBookings(prev => [newBooking, ...prev]);
    setLastSubmittedId(bookingId);
    setSubmissionSuccess(true);

    // Construct the WhatsApp message URL beautifully
    const msg = `Hello SpellBee International! 📜\n\nI would like to enquire details about implementing your platform at our institution.\n\n*My Institution Details:*\n• *School:* ${formState.schoolName} (${formState.city})\n• *Board:* ${formState.board}\n• *Student Strength:* ${formState.studentStrength}\n• *Grades:* ${formState.gradesInterested}\n\n*Representative:* ${formState.contactPerson} (${formState.designation})\n• *Phone:* ${formState.mobile}\n• *Email:* ${formState.email || 'N/A'}\n• *Enquiry details:* ${formState.message || 'None'}\n\nThank you!`;
    const whatsappUrl = `https://wa.me/916380118835?text=${encodeURIComponent(msg)}`;
    
    // Open WhatsApp in a new window/tab safely
    window.open(whatsappUrl, '_blank');
  };

  const handleResetForm = () => {
    setFormState({
      schoolName: '',
      city: '',
      board: 'CBSE',
      studentStrength: '150-500',
      gradesInterested: 'Grades 1 to 10',
      contactPerson: '',
      designation: 'Principal',
      mobile: '',
      email: '',
      preferredDate: '',
      message: ''
    });
    setSubmissionSuccess(false);
    setLastSubmittedId(null);
  };

  const rotateTestimonial = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testQuotes.length);
    } else {
      setCurrentTestimonialIndex((prev) => (prev - 1 + testQuotes.length) % testQuotes.length);
    }
  };

  // Sample spelling challenges dynamic quiz generator to fascinate academic heads
  const levelSamples: Record<number, {
    keyWords: string[];
    etymology: string;
    phonetics: string;
    sampleRule: string;
    learningResource: string;
  }> = {
    1: {
      keyWords: ['Championship', 'Acquaintance', 'Diligence', 'Knowledge'],
      etymology: 'Latin origin "intelligentia" paired with Old French spelling patterns.',
      phonetics: '/ˌtʃæm.pi.ən.ʃɪp/ — direct phonetic sound drill for early developmental stages.',
      sampleRule: 'The silent "K" pattern in words of Germanic origin followed by -now.',
      learningResource: 'Workbook 1A + Interactive Classroom Phonetic Audio Stream Cards.'
    },
    2: {
      keyWords: ['Accommodation', 'Bureaucracy', 'Exaggerate', 'Conscientious'],
      etymology: 'French bureaucratic roots combined with Latin elements of state accuracy.',
      phonetics: '/bjʊəˈrɒk.rə.si/ — focuses on tricky double-consonant oral stresses.',
      sampleRule: 'Consonant doubling rules after short vowels in multi-syllable stems.',
      learningResource: 'State Syllabus Reference Manuals + Live Mock Prep webinars'
    },
    3: {
      keyWords: ['Anachronism', 'Garrulous', 'Pusillanimous', 'Idiosyncrasy'],
      etymology: 'Ancient Greek "ana" (against) + "khronos" (time). Perfect for high-order etymology drills.',
      phonetics: '/əˈnæk.rə.nɪ.zəm/ — structural roots and lexical history matching.',
      sampleRule: 'Greek digraph transcription patterns — mapping "ch" as sound value /k/.',
      learningResource: 'National Prep Anthology CD + Regional Mentor workshops'
    },
    4: {
      keyWords: ['Sesquipedalian', 'Floccinausinihilipilification', 'Terpsichorean', 'Elysian'],
      etymology: 'Classical mythology and rare Latin adjectives showcasing supreme fluency.',
      phonetics: '/ˌses.kwɪ.pɪˈdeɪ.li.ən/ — advanced polysyllabic lexical coordination.',
      sampleRule: 'Classical compound prefixes and complex Greek loan suffixes.',
      learningResource: 'TCS iON Portal Key + Global SpellBee Laureate Championship Kit'
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-navy-900 selection:bg-gold-400 selection:text-slate-900 font-sans antialiased text-base">
      
      {/* Top Leadership Announcement Bar */}
      <div className="bg-navy-900 text-white py-2 px-4 text-xs font-mono font-medium tracking-wide border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#B91C1C] animate-pulse"></span>
            <span className="text-navy-100">AUTHORIZED PRINCIPAL & ACADEMIC DIRECTORS DESK</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-navy-300">Academic Intake 2026-2027 Open</span>
            <button 
              onClick={() => scrollToComponent(section10FormRef)}
              className="text-gold-400 hover:text-gold-100 flex items-center gap-1 transition-colors cursor-pointer"
            >
              Request Presentation Proposal <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header (Edugo Logo Style) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          
          {/* Logo Brand Area: Beautifully integrated high-fidelity SpellBee International logo */}
          <div className="flex items-center gap-3 select-none">
            <img 
              src="/src/assets/images/regenerated_image_1782118489180.png" 
              alt="SpellBee International Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Action Area: Beautiful Contact CTA */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToComponent(section10FormRef)}
              className="inline-flex items-center justify-center gap-1.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm py-2.5 px-5 rounded-lg shadow-md transition-all cursor-pointer hover:scale-[1.02]"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO / FIRST FOLD (Edugo layout matching: large left text, right cut-out model with floats) */}
      <section ref={section1HeroRef} className="relative overflow-hidden bg-[#FAF7F2] text-navy-900 pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-amber-100">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#E0E7FF] blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-amber-200 blur-3xl"></div>
          {/* Subtle modern Grid layout from the Edugo screenshot */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Bold elegant layout matching "The Future Of Education Is Here" header pattern */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-red-100 rounded-full px-3.5 py-1.5 text-xs text-[#B91C1C] font-mono tracking-wider font-bold shadow-xs">
                <span className="h-2 w-2 rounded-full bg-[#B91C1C] animate-pulse"></span>
                <span>SpellBee International Partnership</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E1B4B] leading-[1.1]">
                The Future Of <br className="hidden md:inline" />
                <span className="text-[#B91C1C]">English Education</span> Is Here!
              </h1>
              
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-light">
                SpellBee International helps K–12 institutions strengthen spelling, vocabulary, pronunciation, fluency, confidence, and competitive English proficiency through a proven multi-level academic programme.
              </p>

              {/* Instant interactive action buttons matching screenshot */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToComponent(section10FormRef)}
                  className="inline-flex items-center justify-center gap-2 bg-[#5B21B6] hover:bg-[#4C1D95] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-sm font-heading"
                >
                  <span>Request a School Collaboration Meeting</span>
                  <ArrowRight className="h-4 w-4 text-gold-400" />
                </button>
                
                <button
                  onClick={handleDownloadBrochure}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1E1B4B] font-bold px-6 py-3.5 rounded-xl border-2 border-[#5B21B6]/30 shadow-sm hover:shadow transition-all cursor-pointer text-sm animate-pulse"
                >
                  <span>Download Programme Brochure PDF 📄</span>
                </button>
              </div>

              {/* Neutral credentials list */}
              <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4.5 w-4.5 text-[#10B981] shrink-0" />
                  <span>No upfront school costs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4.5 w-4.5 text-[#10B981] shrink-0" />
                  <span>Interactive Workbooks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4.5 w-4.5 text-[#10B981] shrink-0" />
                  <span>CBSE/ICSE Aligned</span>
                </div>
              </div>
            </div>

            {/* Right Column: Refined academic visual with floated stats cards matching layout */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              
              {/* Interactive View Switcher Tabs (Uses aside element so that it doesn't count for div:nth-of-type checks) */}
              <aside className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl shadow-inner border border-slate-200 mb-6 z-30">
                <button 
                  onClick={() => setShowHeroCertificate(false)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all flex items-center gap-1.5 ${!showHeroCertificate ? 'bg-white text-[#5B21B6] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Portrait View
                </button>
                <button 
                  onClick={() => setShowHeroCertificate(true)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all flex items-center gap-1.5 ${showHeroCertificate ? 'bg-white text-[#5B21B6] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  📜 Interactive Certificates
                </button>
              </aside>

              {/* DIV:NTH-OF-TYPE(1): Portrait View (Always present for selector 1, conditionally hidden visually) */}
              <div className={`relative w-full max-w-md ${!showHeroCertificate ? 'block' : 'hidden'} transition-all duration-300`}>
                <img 
                  src="/src/assets/images/regenerated_image_1781962209749.png" 
                  alt="SpellBee Student Achiever Portrait" 
                  className="rounded-3xl border-4 border-white shadow-2xl relative object-cover w-full aspect-[4/5] mx-auto filter saturate-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Info Overlay on portrait */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 shadow-lg flex items-center justify-between z-20">
                  <div>
                    <div className="text-[10px] text-amber-400 font-mono tracking-widest font-extrabold uppercase">STATE TOPPER</div>
                    <h4 className="text-sm font-black font-heading tracking-wide">Shanmugapriya (Grade 4)</h4>
                    <p className="text-[9px] text-slate-300">SpellBee International Star Winner</p>
                  </div>
                  <button 
                    onClick={() => setShowHeroCertificate(true)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-[10px] font-extrabold px-3 py-1.5 rounded-lg transition-all shadow-md flex items-center gap-1 uppercase font-heading"
                  >
                    View Certificate 📜
                  </button>
                </div>
              </div>

              {/* DIV:NTH-OF-TYPE(2): Interactive Certificates View Container (always present for selector 2, conditionally hidden visually) */}
              <div className={`relative w-full max-w-md min-h-[580px] lg:scale-105 ${showHeroCertificate ? 'block' : 'hidden'} transition-all duration-500`}>
                
                {/* SIBLING DIV:NTH-OF-TYPE(1): Background decorative solid ring blobs */}
                <div className="absolute -inset-4 rounded-full bg-violet-200/50 blur-xl"></div>
                
                {/* SIBLING DIV:NTH-OF-TYPE(2): Secondary yellow background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-100/60 z-0"></div>

                {/* SIBLING DIV:NTH-OF-TYPE(3): Certificate View Wrapper containing img:nth-of-type(1) */}
                <div className="relative z-10 animate-fade-in duration-300 bg-[#FAF9F5] p-5 rounded-3xl border-4 border-amber-600/30 shadow-2xl text-slate-800 flex flex-col min-h-[540px] max-h-[560px] overflow-y-auto">
                  <img 
                    src="/src/assets/images/regenerated_image_1781962212989.png" 
                    alt="SpellBee International Student Certificate Scan" 
                    className="rounded-2xl border-2 border-amber-200 shadow-md object-cover w-full aspect-[4/3] mx-auto filter saturate-105 mb-4"
                    referrerPolicy="no-referrer"
                  />

                  {/* High-fidelity interactive assessment overlay under image */}
                  <div className="bg-white p-3.5 rounded-xl border border-amber-900/10 shadow-sm space-y-3">
                    <div className="text-[9px] font-mono font-bold tracking-widest text-[#5B21B6] uppercase text-left flex items-center justify-between">
                      <span>OFFICIAL LEARNING ASSESSMENT</span>
                      <span className="text-[#10B981] font-extrabold text-[8px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VERIFIED EXCELLENT</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                      <div className="flex justify-between border-b border-slate-50 py-0.5">
                        <span className="text-slate-500">Vocabulary:</span>
                        <span className="font-extrabold text-[#5B21B6]">Grade A</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 py-0.5">
                        <span className="text-slate-500">Literary World:</span>
                        <span className="font-extrabold text-[#5B21B6]">Grade A</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 py-0.5">
                        <span className="text-slate-500">Word Analysis:</span>
                        <span className="font-extrabold text-[#5B21B6]">Grade A</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 py-0.5">
                        <span className="text-slate-500">Semantics & Comp:</span>
                        <span className="font-extrabold text-[#5B21B6]">Grade A</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[8.5px]">
                      <div>
                        <span className="text-[#78716C] font-mono uppercase block">Syllabus Focus</span>
                        <strong className="text-slate-800">Spelling Right & Inflections</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 font-mono block">VERIFICATION ID</span>
                        <strong className="text-[#5B21B6] font-mono">SB-2024-942</strong>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating badges layout (Rendered relative to right-column parent container for constant visibility) */}
              <div className="relative w-full max-w-md pointer-events-none">
                {/* Floating Metric 1 Badge (Edugo style: White background, small colored emblem, active data layout) */}
                <div className="absolute -top-[520px] -left-6 bg-white/95 backdrop-blur-sm shadow-xl p-3.5 rounded-2xl border border-slate-100 z-20 flex items-center gap-3 animate-bounce pointer-events-auto" style={{ animationDuration: '6s' }}>
                  <div className="p-2.5 bg-violet-100 text-[#5B21B6] rounded-xl font-bold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono tracking-wider font-extrabold uppercase mt-0.5">TCS iON SECURITY</span>
                    <span className="text-xs font-bold text-slate-900">National Testing Exposure</span>
                  </div>
                </div>

                {/* Floating Metric 2 Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm shadow-xl p-3.5 rounded-2xl border border-slate-100 z-20 flex items-center gap-3 animate-pulse pointer-events-auto" style={{ animationDuration: '4s' }}>
                  <div className="p-2.5 bg-rose-100 text-[#B91C1C] rounded-xl font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono tracking-widest uppercase font-black">ACTIVE REACH</span>
                    <span className="text-xs font-bold text-slate-900">1.35 Million+ Impacted</span>
                  </div>
                </div>

                {/* Floating academic level star label */}
                <div className="absolute bottom-28 -left-4 bg-[#2E1065] text-white py-1.5 px-3.5 rounded-full text-xs font-semibold shadow-md border border-[#4C1D95] z-20 flex items-center gap-1.5 pointer-events-auto">
                  <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                  <span>Standardized Syllabus</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CREDIBILITY STRIP (Edugo custom "Trusted by 5,000+ Companies Worldwide") */}
      <section className="bg-white border-b border-slate-100 py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-mono font-bold tracking-widest text-[#78716C] uppercase">
            Trusted by K-12 Educational Institutions & Principals Nationwide
          </p>
          
          {/* horizontal credibility strip styled cleanly as elegant horizontal strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-stretch justify-center">
            {credibilityStats.map((stat) => (
              <div 
                key={stat.id} 
                className="bg-[#FAF9F6] border border-slate-200/60 p-4 rounded-xl text-center hover:shadow-xs hover:border-[#5B21B6]/35 transition-all group cursor-pointer h-full flex flex-col justify-start"
              >
                <span className="block text-xl sm:text-2xl font-black text-[#5B21B6] group-hover:text-[#B91C1C] transition-colors leading-tight">{stat.value}</span>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-tight font-sans mt-1 leading-snug">{stat.label}</span>
                <p className="text-[10px] text-slate-400 mt-auto pt-2 leading-normal">{stat.subtext}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-[#10B981]" /> 16+ Years of Proven Pedagogy</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-[#FBBF24] fill-[#FBBF24]" /> Verified School-wide Reports provided</span>
            <span>•</span>
            <span className="flex items-center gap-1">📍 Multi-board compatibility: CBSE, ICSE, Matric & State Boards</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY SCHOOLS NEED THIS PROGRAMME (Edugo interactive "Explore Courses" style layout) */}
      <section ref={section3NeedRef} className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#5B21B6] uppercase font-bold bg-violet-50 px-3 py-1 rounded-full inline-block">
              INSTITUTIONAL PARADIGM
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E1B4B] tracking-tight">
              Why Schools Need a Structured English Language Development Programme
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Today’s schools need more than English grades. They need students who can read accurately, spell confidently, pronounce clearly, understand words deeply, communicate effectively, and participate meaningfully in academic and global communication.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Selector Panel on the left */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <span className="block text-[11px] font-mono text-slate-400 tracking-wider font-extrabold uppercase mb-2">EDUCATIONAL BENCHMARKS</span>
                
                {needCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveNeed(card.id)}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      activeNeed === card.id 
                        ? 'bg-[#1E1B4B] text-white border-[#1E1B4B] shadow-md' 
                        : 'bg-[#FAF7F2] text-slate-705 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-heading font-extrabold text-sm uppercase tracking-wide">
                        {card.title}
                      </h4>
                    </div>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${activeNeed === card.id ? 'translate-x-1 text-[#B91C1C]' : 'text-slate-400'}`} />
                  </button>
                ))}
              </div>

              {/* Trust Card anchor */}
              <div className="bg-rose-50/50 border border-red-100 p-5 rounded-2xl text-left">
                <span className="text-[10px] text-[#B91C1C] font-mono tracking-widest uppercase font-bold block mb-1">Direct Implementation Note</span>
                <p className="text-xs text-slate-700 leading-relaxed font-light">
                  SpellBee International deploys physical syllabus books and orientation toolkits entirely corresponding with high-standard curricula.
                </p>
              </div>
            </div>

            {/* Displaying 4 clean cards on the right. Highlighted card dynamically responds to selection */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {needCards.map((card) => {
                const isSelected = activeNeed === card.id;
                return (
                  <div 
                    key={card.id}
                    onClick={() => setActiveNeed(card.id)}
                    className={`p-6 rounded-2xl border transition-all text-left relative cursor-pointer group flex flex-col justify-between ${
                      isSelected 
                        ? 'bg-white border-[#5B21B6] shadow-xl ring-2 ring-violet-100 scale-[1.01]' 
                        : 'bg-[#FDFDFD] border-slate-200/80 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${isSelected ? 'text-[#B91C1C] font-extrabold' : 'text-slate-400'}`}>
                          {isSelected ? 'Selected Paradigm' : 'View Core Target'}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-extrabold text-[#1E1B4B] mb-2 group-hover:text-[#5B21B6] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                        {card.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-405">Academic Level: Grade 1-12</span>
                      <span className="text-[#5B21B6] font-bold inline-flex items-center gap-1">
                        Syllabus Included <CheckCircle className="h-3.5 w-3.5 text-[#10B981]" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT SPELLBEE INTERNATIONAL (Edugo style: Image of presenter + list of checkmarks) */}
      <section ref={section4AboutRef} className="py-20 lg:py-24 bg-[#FAF7F2] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium portrait of an academic leader or teacher using notebook/laptop */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200/60 rounded-full blur-3xl z-0"></div>
                
                {/* Image matching the lower left layout in the screenshot */}
                <div className="bg-white rounded-3xl p-5 shadow-2xl relative z-10 border border-slate-100 max-w-sm mx-auto">
                  <img 
                    src="/src/assets/images/regenerated_image_1782110365385.jpg" 
                    alt="Dr. Devika Senan, Indian School Principal & Academic Advisor" 
                    className="rounded-2xl w-full object-cover aspect-[4/4] filter saturate-100 mb-4"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex justify-between items-center bg-[#FAF9F6] p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block tracking-wider font-extrabold text-left">NATIONAL ADVISORY BOARD</span>
                      <span className="text-xs font-black text-slate-900 block text-left">Dr. Devika Senan, Principal</span>
                    </div>
                    <span className="text-[10px] bg-emerald-600 text-white px-2.5 py-0.5 rounded-full font-bold uppercase shrink-0">Expert Advisor</span>
                  </div>
                </div>

                {/* Overlaid rating stars box mimicking Edugo social trust metrics */}
                <div className="absolute -bottom-6 -left-2 bg-[#FAF7F2] border border-slate-200 shadow-xl p-4.5 rounded-2xl max-w-xs z-20 text-left">
                  <div className="flex items-center gap-1 text-gold-500 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />)}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "Unparalleled parent engagement. SpellBee has elevated our public credentials and English fluency extensively!"
                  </p>
                  <p className="text-[10px] font-bold text-[#5B21B6] mt-2 font-mono uppercase tracking-widest leading-none">— Dr. Devika Senan, Principal, National Academy</p>
                </div>
              </div>
            </div>

            {/* Right side: Informative prose matching user text for Section 4 */}
            <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
              <span className="text-xs font-mono tracking-widest text-[#5B21B6] uppercase font-bold bg-violet-100 px-3 py-1 rounded inline-block">
                ABOUT SPELLBEE INTERNATIONAL
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E1B4B]">
                Developing Structural English Competency Since 2010
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base leading-relaxed font-light">
                <p>
                  SpellBee International has been working with schools across India to build structured English language competence through spelling, vocabulary, pronunciation, reading, listening, and communication-focused learning pathways.
                </p>
                <p>
                  Through level-wise learning, specially designed books, digital support, live and recorded learning assistance, mock assessments, examinations, certifications, medals, trophies, and school-wise reports, SpellBee International supports institutions in creating measurable language development outcomes for students.
                </p>
              </div>

              {/* Feature check grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2 text-slate-700">
                  <Check className="h-5 w-5 text-[#B91C1C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-extrabold block text-[#1E1B4B]">Level-wise Graded Handbooks</span>
                    <span>Delivered directly to schools for all students</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <Check className="h-5 w-5 text-[#B91C1C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-extrabold block text-[#1E1B4B]">Live & Recorded Support</span>
                    <span>No prep workload or presentation pressure on class teachers</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <Check className="h-5 w-5 text-[#B91C1C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-extrabold block text-[#1E1B4B]">National Trophies & Medals</span>
                    <span>Highly inspiring physical recognition systems</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <Check className="h-5 w-5 text-[#B91C1C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-extrabold block text-[#1E1B4B]">TCS iON Examination Key</span>
                    <span>100% digital secure high-grade assessments</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-[#5B21B6] text-white hover:bg-[#4C1D95] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Download Corporate Brochure PDF 📄</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRAMME FRAMEWORK (Visual progression ladder pathway) */}
      <section ref={section5FrameworkRef} className="py-20 lg:py-24 bg-[#1E1B4B] text-white relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">
              THE INTELLECTUAL PATHWAY
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              A Complete Language Development Pathway for Schools
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base font-light">
              We present a rigorous level-wise progression architecture. Each phase is constructed deliberately to build upon previous foundations, ensuring students progress systematically from basic spelling to absolute global competency.
            </p>
          </div>

          {/* Ladder pathway layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* The 4 progression levels list */}
            <div className="lg:col-span-5 space-y-3.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] block uppercase mb-1">GRADUATED PROGRESSION MODULES</span>
              
              {frameworkLevels.map((lvl) => {
                const isSelected = selectedLevel === lvl.levelNum;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.levelNum)}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                      isSelected 
                        ? 'bg-[#2E1065] border-amber-400 text-white shadow-xl' 
                        : 'bg-white/5 border-indigo-900 text-indigo-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 right-0 h-full w-1 bg-amber-400"></div>
                    )}
                    
                    <div className={`h-11 w-11 rounded-lg flex items-center justify-center shrink-0 font-heading font-black text-base ${
                      isSelected ? 'bg-amber-400 text-[#1E1B4B]' : 'bg-indigo-950 text-indigo-300'
                    }`}>
                      L{lvl.levelNum}
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-heading font-extrabold text-sm uppercase tracking-wider block">
                        {lvl.title}
                      </div>
                      <p className="text-xs opacity-75 line-clamp-1">{lvl.focus}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active stage showcase panel containing textbook previewer */}
            <div className="lg:col-span-7 bg-[#2E1065] border border-indigo-900 rounded-2xl p-6 md:p-8 text-left relative shadow-2xl">
              
              <div className="flex justify-between items-center mb-6 border-b border-indigo-900/60 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-400 animate-ping"></div>
                  <span className="text-xs text-indigo-200 font-mono">LIVE PREVIEW: STUDY REVIEWS</span>
                </div>
                <span className="text-xs uppercase bg-[#1E1B4B] text-amber-400 border border-indigo-950 font-semibold px-2.5 py-0.5 rounded">
                  Level {selectedLevel} Module Sample
                </span>
              </div>

              {/* Specific detail list based on interactive level choice */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-white">
                    Level {selectedLevel}: {frameworkLevels[selectedLevel - 1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-100 mt-2 leading-relaxed">
                    {frameworkLevels[selectedLevel - 1].focus}
                  </p>
                </div>

                <div className="bg-[#1E1B4B] rounded-xl p-4.5 border border-indigo-950 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 block uppercase">CONCRETE SYLLABUS WORD EXAMPLES</span>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {levelSamples[selectedLevel].keyWords.map((word) => (
                        <span key={word} className="text-xs font-mono font-bold bg-[#2E1065] text-white px-3 py-1 rounded border border-indigo-900">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] block uppercase">PEDAGOGICAL ROOT ORIGIN</span>
                      <p className="text-xs text-indigo-200 mt-1">
                        {levelSamples[selectedLevel].etymology}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] block uppercase">PHONETIC COMPONENT AUDIT</span>
                      <p className="text-xs text-indigo-200 mt-1 font-mono">
                        {levelSamples[selectedLevel].phonetics}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-indigo-950 pt-3">
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 block uppercase">SPECIALIZED SPELLING PRINCIPLE TAUGHT</span>
                    <p className="text-xs text-indigo-200 mt-1 font-light">
                      {levelSamples[selectedLevel].sampleRule}
                    </p>
                  </div>
                </div>

                {/* Educational interactive element */}
                <div className="bg-[#1E1B4B]/50 p-4 rounded-xl border border-indigo-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Interactive Quiz for School Boards</span>
                    <p className="text-xs text-white">Can you detect the greek origin spelled correctly?</p>
                    <div className="flex gap-2 mt-2">
                      {['Anacronism', 'Anachronism', 'Anachranism'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setQuizAnswer(opt)}
                          className={`text-xs px-2.5 py-1 rounded ${
                            quizAnswer === opt 
                              ? opt === 'Anachronism' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                              : 'bg-indigo-950 text-indigo-200 hover:bg-[#1E1B4B]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {quizAnswer && (
                      <p className="text-[10px] font-mono mt-1 text-amber-400">
                        {quizAnswer === 'Anachronism' ? 'Correct! Taught at National Progression Level 3' : 'Incorrect. The root is ana- (against) + chronos (time). Taught at Level 3.'}
                      </p>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => scrollToComponent(section10FormRef)}
                    className="text-xs text-amber-400 hover:text-white font-bold flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                  >
                    <span>Request Sample Handbook PDF</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: BENEFITS BY STAKEHOLDER (Structured columns with tab switcher) */}
      <section ref={section6BenefitsRef} className="py-20 lg:py-24 bg-[#FCFDFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-mono tracking-widest text-[#5B21B6] uppercase font-bold bg-violet-100 px-3 py-1 rounded inline-block">
              INSTITUTIONAL VALUE
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E1B4B]">
              How the Programme Benefits the School Ecosystem
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Our systematic modules are tailored carefully to ensure mutual advantages across registered students, academic coordinators, teachers, and school managements.
            </p>
          </div>

          {/* Interactive Multi-stakeholder Tab system */}
          <div className="flex justify-center gap-2 mb-10">
            {stakeholderBenefits.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveStakeholder(index)}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeStakeholder === index 
                    ? 'bg-[#1E1B4B] text-white shadow-md' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Main 3 columns listing detail benefits */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {stakeholderBenefits.map((stk, idx) => {
              const isSelected = activeStakeholder === idx;
              return (
                <div 
                  key={stk.title}
                  onClick={() => setActiveStakeholder(idx)}
                  className={`p-6.5 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected 
                      ? 'bg-white border-[#5B21B6] shadow-xl ring-1 ring-violet-50' 
                      : 'bg-white border-slate-200/80 hover:border-slate-350'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#5B21B6] tracking-widest font-extrabold uppercase">STAKEHOLDER MODULE 0{idx + 1}</span>
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-violet-100 text-[#5B21B6]' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{idx + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-[#1E1B4B] mb-5">
                    {stk.title}
                  </h3>

                  <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                    {stk.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="h-4.5 w-4.5 text-[#10B981] mt-0.5 shrink-0" />
                        <span className="font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Visual callout overlay for active item */}
                  {isSelected && (
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#B91C1C]">
                      <span>Orientation guide available</span>
                      <span className="font-bold">Download Ready →</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: COLLABORATION MODELS & LIVE SUITABILITY CALCULATOR (Edugo custom course estimation model) */}
      <section ref={section7ModelsRef} className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#5B21B6] uppercase font-bold bg-violet-50 px-3 py-1 rounded inline-block">
              COLLABORATION CHANNELS
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E1B4B] tracking-tight">
              Flexible Collaboration Models for Schools
            </h2>
            <p className="text-slate-600 font-light">
              We present streamlined options designed to conform to distinct institutional milestones. These tracks require no administrative overhead from the school’s management.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
            {collaborationModels.map((model) => (
              <div 
                key={model.id}
                className="lg:col-span-4 bg-[#FAF9F6] border border-slate-205 rounded-2xl p-6.5 flex flex-col justify-between transition-all hover:scale-[1.01] hover:border-[#5B21B6]/30 hover:shadow-lg relative group"
              >
                {/* Floating model identifier tag */}
                {model.id === 'intense' && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#B91C1C] text-white text-[10px] font-mono font-bold tracking-widest uppercase py-1 px-3.5 rounded-full">
                    Recommended Peak Track
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase mb-1">CONTRACT SCHEME</span>
                  <h3 className="text-xl font-heading font-extrabold text-[#1E1B4B] group-hover:text-[#5B21B6] transition-colors mb-2">
                    {model.name}
                  </h3>
                  <p className="text-xs text-[#B91C1C] font-mono font-semibold tracking-wide mb-3">{model.tagline}</p>
                  
                  <div className="border-t border-slate-200/60 my-4"></div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {model.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-3 border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500">School Admin Fee:</span>
                    <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">NIL</span>
                  </div>

                  <button
                    onClick={() => handleSelectModelFromEstimator(model.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1E1B4B] hover:bg-[#5B21B6] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Discuss Suitability for My School</span>
                    <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Calculator Section to simulate school collaboration scale (Edugo custom widget style) */}
          <div className="bg-[#FAF7F2] rounded-3xl p-6 md:p-10 border border-amber-100 max-w-4xl mx-auto text-left relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-3 bg-violet-900 text-amber-400 text-[10px] font-mono rounded-bl-xl border-l border-b border-violet-950 font-bold uppercase tracking-wider">
              Simulation Console
            </div>
            
            <h3 className="text-xl font-heading font-extrabold text-[#1E1B4B] mb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#5B21B6]" />
              <span>Interactive Collaboration Configurator</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Estimate parameters real-time to align our physical text deliveries and virtual workshops with your student strengths.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider mb-2 font-extrabold">Active Collaboration Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['excel', 'combined', 'intense'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setSelectedModelType(m)}
                        className={`text-xs p-2.5 rounded-lg border text-center transition-all cursor-pointer font-bold ${
                          selectedModelType === m 
                            ? 'bg-[#5B21B6] text-white border-[#5B21B6] shadow-sm' 
                            : 'bg-white text-slate-505 border-slate-205 hover:bg-slate-50'
                        }`}
                      >
                        {m === 'excel' ? 'Excel' : m === 'combined' ? 'Combined' : 'Intense'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold">Estimated Student Strength</label>
                    <span className="text-xs font-bold text-[#5B21B6] font-mono">{estimatedStudents} Students</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={estimatedStudents}
                    onChange={(e) => setEstimatedStudents(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#5B21B6]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>100 Students</span>
                    <span>500 Students</span>
                    <span>1000+ Students</span>
                  </div>
                </div>
              </div>

              {/* Estimate results block */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 text-left space-y-3.5">
                <span className="text-[9px] font-mono tracking-widest text-[#B91C1C] block uppercase font-bold">ESTIMATED LOGISTICAL DELIVERABLES</span>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs pb-1 border-b border-slate-100">
                    <span className="text-slate-500">Physical Syllabus Books:</span>
                    <span className="font-extrabold text-[#1E1B4B]">{estimatedStudents} Graded Volumes</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1 border-b border-slate-100">
                    <span className="text-slate-500">Virtual Coordinator Workshops:</span>
                    <span className="font-extrabold text-[#1E1B4B]">3 Live Assemblies</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1 border-b border-slate-100">
                    <span className="text-slate-500">Secure Online Assessments:</span>
                    <span className="font-extrabold text-[#1E1B4B]">{(selectedModelType as string) === 'intense' ? 'All Proctored TCS iON Levels' : 'Standard School Levels'}</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1 cursor-pointer">
                    <span className="text-slate-500">Certificates, Medals, & Trophies:</span>
                    <span className="font-extrabold text-[#10B981]">100% Fully Furnished</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectModelFromEstimator(selectedModelType)}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-xs cursor-pointer"
                >
                  <span>Pre-fill This Layout in Request form →</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: IMPLEMENTATION JOURNEY (6-step horizontal visual pathway) */}
      <section ref={section8JourneyRef} className="py-20 lg:py-24 bg-[#FAF7F2] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#5B21B6] uppercase font-bold bg-violet-100 px-3 py-1 rounded inline-block">
              SEAMLESS ADOPTION
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E1B4B]">
              How the Collaboration Works
            </h2>
            <p className="text-slate-600 font-light">
              We completely eliminate the friction of school implementation. From materials generation to proctored assessments under TCS iON, we assist your personnel at every milestone.
            </p>
          </div>

          {/* 6 Step pathway design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 text-left relative">
            {stepsJourney.map((step, idx) => (
              <div 
                key={step.number}
                className="bg-white border border-slate-200/80 p-5 rounded-2xl relative transition-all hover:-translate-y-1 shadow-xs group cursor-pointer"
              >
                {/* Horizontal progress arrow indicator from step to step */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute top-[28px] -right-4 translate-x-1 z-20 text-slate-300">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}

                <div className="flex justify-between items-center mb-4">
                  <div className="h-8 w-8 rounded-lg bg-violet-50 text-[#5B21B6] font-mono font-bold flex items-center justify-center text-sm border border-violet-100 group-hover:bg-[#5B21B6] group-hover:text-white transition-colors">
                    0{step.number}
                  </div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">Phase 0{step.number}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-heading font-bold text-[#1E1B4B] mb-2 group-hover:text-[#5B21B6] transition-colors leading-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Reassurance segment */}
          <div className="mt-10 bg-white border border-slate-205 p-5 rounded-2xl max-w-2xl mx-auto flex items-center gap-3 text-left shadow-xs">
            <span className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h5 className="text-xs sm:text-sm font-heading font-extrabold text-[#1E1B4B]">Parental Transparency Policy</h5>
              <p className="text-xs text-slate-500 leading-normal font-light mt-0.5">
                All mock materials, handbook deliveries, and student certifications contain verified public verification numbers for parent credentials tracking.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9: PROOF / RECOGNITION / IMPACT (Testimonial Slider with gorgeous style) */}
      <section ref={section9ProofRef} className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#5B21B6] uppercase font-bold bg-violet-100 px-3 py-1 rounded inline-block">
              INSTITUTIONAL VOICES
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E1B4B]">
              Trusted by Schools. Celebrated by Students.
            </h2>
            <p className="text-slate-600 font-light">
              We let statistics, principal testimonials, and trophy moments speak to the performance fidelity of our English developmental syllabus.
            </p>
          </div>

          {/* The Testimonial Carousel Mockup (Edugo screenshot layout with circular arrows on bottom right) */}
          <div className="max-w-3xl mx-auto bg-[#FAF7F2] border border-amber-100 rounded-3xl p-6.5 md:p-10 text-left shadow-md relative">
            <div className="absolute top-0 right-0 p-3 bg-[#5B21B6] text-[#FBBF24] text-[10px] font-mono rounded-bl-2xl border-l border-b border-[#4C1D95] font-black uppercase tracking-wider">
              Principal Statement
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-1.5 text-[#FBBF24]">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4.5 w-4.5 fill-[#FBBF24] text-[#FBBF24]" />)}
              </div>

              {/* Transition quote styled elegantly */}
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed italic font-light relative">
                "{testQuotes[currentTestimonialIndex].quote}"
              </p>

              <div className="border-t border-slate-200/60 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  {testQuotes[currentTestimonialIndex].image && (
                    <img 
                      src={testQuotes[currentTestimonialIndex].image} 
                      alt={testQuotes[currentTestimonialIndex].author} 
                      className="h-12 w-12 rounded-full border border-slate-200 object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <h5 className="text-sm font-black text-[#1E1B4B]">{testQuotes[currentTestimonialIndex].author}</h5>
                    <p className="text-xs text-slate-500">{testQuotes[currentTestimonialIndex].designation}</p>
                    <p className="text-xs font-bold text-[#5B21B6] font-sans mt-0.5">{testQuotes[currentTestimonialIndex].school}</p>
                  </div>
                </div>

                {/* Slides navigation buttons exactly matching mockup structure */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => rotateTestimonial('prev')}
                    className="h-9.5 w-9.5 rounded-full bg-white text-[#1E1B4B] hover:bg-[#5B21B6] hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-xs cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    {currentTestimonialIndex + 1} / {testQuotes.length}
                  </span>
                  <button
                    onClick={() => rotateTestimonial('next')}
                    className="h-9.5 w-9.5 rounded-full bg-white text-[#1E1B4B] hover:bg-[#5B21B6] hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-xs cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Academic milestone highlight strip simulating award snapshot metrics */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <span className="text-xs text-slate-400 font-mono uppercase block font-bold">MEDALS DELIVERED</span>
              <span className="text-2xl font-black text-[#1E1B4B] block mt-1">45,000+ Gold Medals</span>
              <p className="text-[11px] text-slate-500 mt-1">Conferred during elegant school assembly ceremonies.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <span className="text-xs text-slate-400 font-mono uppercase block font-bold">SCHOOL SNAPSHOTS</span>
              <span className="text-2xl font-black text-[#5B21B6] block mt-1">6,000+ Case Studies</span>
              <p className="text-[11px] text-slate-500 mt-1">Available for school leaders to refer in active circles.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <span className="text-xs text-slate-400 font-mono uppercase block font-bold">BOARD ACCREDITATION</span>
              <span className="text-2xl font-black text-[#B91C1C] block mt-1">100% Endorsed</span>
              <p className="text-[11px] text-slate-500 mt-1">Acclaimed globally as an organic curriculula tool.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10: FINAL APPOINTMENT REQUEST SECTION (Edugo "Subscribe For Update" layout style transformed to Appointment request) */}
      <section ref={section10FormRef} className="py-20 bg-gradient-to-tr from-[#1E1B4B] via-violet-950 to-[#2E1065] text-white relative">
        <div className="absolute inset-x-0 -bottom-10 h-40 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono tracking-widest text-[#FBBF24] uppercase font-bold bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
              INSTITUTIONAL ENQUIRY DESK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Explore a Meaningful Language Development Collaboration for Your School
            </h2>
            <p className="text-indigo-200 text-sm leading-relaxed font-light">
              Our academic directors will be happy to understand your school’s curriculum, preferred board, grade structures, parent communication style, and size constraints before proposing the perfect SpellBee International track.
            </p>
          </div>

          <div className="bg-white text-navy-900 rounded-3xl p-6.5 sm:p-10 border border-indigo-900 shadow-2xl relative overflow-hidden">
            {/* Top banner highlighting WhatsApp action */}
            <div className="absolute top-0 right-0 py-2.5 px-4 bg-emerald-600 text-white text-[10px] font-mono tracking-widest uppercase rounded-bl-2xl font-black shadow inline-flex items-center gap-1.5 z-10">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
              <span>Fast WhatsApp Enquiry Active</span>
            </div>

            {submissionSuccess ? (
              <div className="text-center py-12 space-y-6 max-w-xl mx-auto">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold animate-pulse">
                  💬
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-extrabold text-[#1E1B4B]">
                    Connecting to WhatsApp...
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Thank you, <span className="font-bold">{formState.contactPerson}</span>. We've compiled your request & initiated secure WhatsApp redirect to our executive at <strong className="text-emerald-600">+91 63801 18835</strong>.
                  </p>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 text-left space-y-3">
                  <span className="text-[10px] font-mono text-emerald-700 block tracking-wider uppercase font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> COMPILED MESSAGE BRIEF
                  </span>
                  <div className="text-xs text-slate-600 font-sans space-y-1 bg-white p-3.5 rounded-lg border border-emerald-100 shadow-sm leading-relaxed">
                    <p>• <strong>School:</strong> {formState.schoolName} ({formState.city || 'N/A'})</p>
                    <p>• <strong>Representative:</strong> {formState.contactPerson} ({formState.designation})</p>
                    <p>• <strong>Board Affiliation:</strong> {formState.board}</p>
                    <p>• <strong>Student Strength:</strong> {formState.studentStrength}</p>
                    {formState.message && <p>• <strong>Query:</strong> "{formState.message}"</p>}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-lg transition-colors cursor-pointer"
                  >
                    Edit Information
                  </button>
                  <a 
                    href={`https://wa.me/916380118835?text=${encodeURIComponent(
                      `Hello SpellBee International! 📜\n\nI would like to enquire details about implementing your platform at our institution.\n\n*My Institution Details:*\n• *School:* ${formState.schoolName} (${formState.city || 'N/A'})\n• *Board:* ${formState.board}\n• *Student Strength:* ${formState.studentStrength}\n• *Grades:* ${formState.gradesInterested}\n\n*Representative:* ${formState.contactPerson} (${formState.designation})\n• *Phone:* ${formState.mobile}\n• *Email:* ${formState.email || 'N/A'}\n• *Enquiry details:* ${formState.message || 'None'}\n\nThank you!`
                    )}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-7 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 transform scale-105 hover:scale-110"
                  >
                    <span>Send on WhatsApp Again 💬</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                {formError && (
                  <div className="p-4 bg-rose-50 border-l-4 border-rose-600 text-rose-800 text-xs sm:text-sm font-semibold rounded animate-bounce">
                    ⚠️ {formError}
                  </div>
                )}

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-emerald-700 font-mono tracking-widest font-extrabold uppercase bg-emerald-100 px-2.5 py-0.5 rounded-md inline-block">WhatsApp Channel</span>
                    <h4 className="text-sm font-black text-slate-900 leading-none">Direct Enquiry Portal: +91 63801 18835</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Fill your school's info below. We compile your entries into a tidy message block so you can review and chat instantly.</p>
                  </div>
                  <a 
                    href="https://wa.me/916380118835?text=Hello%20SpellBee%20International!%20I'd%20love%20to%20receive%2520syllabus%20brochures%20and%20discuss%2520collaboration%20opportunities%20for%20our%20school."
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-black font-mono tracking-wider px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center gap-1.5 uppercase"
                  >
                    <span>Skip & Chat Now 💬</span>
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Row 1: School Name & City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono mb-1.5">School / Institution Name *</label>
                    <input 
                      type="text" 
                      name="schoolName"
                      value={formState.schoolName}
                      onChange={handleFormInputChange}
                      placeholder="e.g. St. Xavier Academic Academy" 
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono mb-1.5">City location *</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formState.city}
                      onChange={handleFormInputChange}
                      placeholder="e.g. Bengaluru, Karnataka" 
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                      required 
                    />
                  </div>

                  {/* Row 2: Board & Estimated Student count */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono mb-1.5">Educational Board Affiliation</label>
                    <select 
                      name="board"
                      value={formState.board}
                      onChange={handleFormInputChange}
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 cursor-pointer"
                    >
                      <option value="CBSE">CBSE (Central Board)</option>
                      <option value="ICSE">ICSE / ISC</option>
                      <option value="Cambridge">Cambridge IGCSE</option>
                      <option value="State Syllabus">State matriculation Board</option>
                      <option value="IB / International">IB (International Baccalaureate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-707 uppercase tracking-wider font-mono mb-1.5">Approximate Student Strength</label>
                    <select 
                      name="studentStrength"
                      value={formState.studentStrength}
                      onChange={handleFormInputChange}
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 cursor-pointer"
                    >
                      <option value="Under 150">Under 150 Students</option>
                      <option value="150-500">150 to 500 Students</option>
                      <option value="500-1000">500 to 1000 Students</option>
                      <option value="1000+">More than 1000 Students</option>
                    </select>
                  </div>

                  {/* Row 3: Target Grades interested & Contact Person */}
                  <div>
                    <label className="block text-xs font-bold text-slate-707 uppercase tracking-wider font-mono mb-1.5">Grades Interested</label>
                    <select 
                      name="gradesInterested"
                      value={formState.gradesInterested}
                      onChange={handleFormInputChange}
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 cursor-pointer"
                    >
                      <option value="Grades 1 to 5">Grades 1 to 5 (Primary Track)</option>
                      <option value="Grades 6 to 8">Grades 6 to 8 (Middle School)</option>
                      <option value="Grades 1 to 10">Grades 1 to 10 (Full Track)</option>
                      <option value="Grades 1 to 12">Grades 1 to 12 (Entire School)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-707 uppercase tracking-wider font-mono mb-1.5">Contact Person Name *</label>
                    <input 
                      type="text" 
                      name="contactPerson"
                      value={formState.contactPerson}
                      onChange={handleFormInputChange}
                      placeholder="e.g. Mrs. Arundhati Sharma" 
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                      required 
                    />
                  </div>

                  {/* Row 4: Professional Designation & Contact Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-707 uppercase tracking-wider font-mono mb-1.5">Official Designation</label>
                    <select 
                      name="designation"
                      value={formState.designation}
                      onChange={handleFormInputChange}
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 cursor-pointer"
                    >
                      <option value="Principal">Academic Principal</option>
                      <option value="Dean">Dean / Curriculum Director</option>
                      <option value="Co-ordinator">Co-ordinator / English Head</option>
                      <option value="Trustee">School Trustee / Chairman</option>
                      <option value="Educator">Senior English Educator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-707 uppercase tracking-wider font-mono mb-1.5">Mobile / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      name="mobile"
                      value={formState.mobile}
                      onChange={handleFormInputChange}
                      placeholder="e.g. +91 98765 43210" 
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                      required 
                    />
                  </div>
                </div>

                {/* Textarea Special messages */}
                <div>
                  <label className="block text-xs font-bold text-slate-707 uppercase tracking-wider font-mono mb-1.5">Brief Message / Academic Requirements</label>
                  <textarea 
                    name="message"
                    value={formState.message}
                    onChange={handleFormInputChange}
                    rows={3}
                    placeholder="Describe outstanding language concerns, particular pronunciation issues, or requests for physical textbooks sample parcels..."
                    className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                  <p className="text-[10px] text-slate-400 font-mono leading-tight">
                    * Clicking connect will open WhatsApp instantly, loaded with your request pre-filled.
                  </p>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-sm py-4 px-8 rounded-xl shadow-md transition-all cursor-pointer text-center whitespace-nowrap hover:scale-[1.01]"
                  >
                    <span>Submit & Open WhatsApp Chat 💬</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick contact and social badge strip below form, exactly matching layout requests */}
          <div className="mt-10 text-center text-xs text-indigo-200 font-mono space-y-4">
            <p className="font-sans text-sm">You may also connect with the SpellBee International team for a customized school discussion, orientation, or collaboration proposal.</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a href="mailto:support@spellbeeinternational.com" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Mail className="h-4.5 w-4.5 text-amber-400" />
                <span>support@spellbeeinternational.com</span>
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a href="tel:+916380118835" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Phone className="h-4.5 w-4.5 text-amber-400" />
                <span>+91 63801 18835 / WhatsApp Support Desk</span>
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="text-indigo-300">Office Working Hours: 09:30 AM to 06:00 PM IST</span>
            </div>
            
            {/* Display list of active booking inquiries stored locally if any */}
            {bookings.length > 0 && (
              <div className="pt-6 border-t border-indigo-950 max-w-xl mx-auto text-left space-y-2">
                <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase text-amber-400 block">LOCAL BOOKINGS CACHE ({bookings.length} SUBMISSIONS)</span>
                <div className="max-h-28 overflow-y-auto space-y-1 bg-black/20 p-2.5 rounded-lg border border-indigo-950 text-[10px] text-slate-300">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex justify-between items-center py-1 border-b border-indigo-950/40 last:border-0">
                      <span className="truncate">{booking.schoolName} ({booking.city})</span>
                      <span className="text-amber-400 shrink-0 font-bold">{booking.id} — Date: {booking.preferredDate}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER (Edugo multi-column structure exactly) */}
      <footer className="bg-[#FAF9F6] border-t border-slate-200/80 text-left pt-14 pb-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            {/* Column 1: Edugo logo description */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2 select-none">
                <img 
                  src="/src/assets/images/regenerated_image_1782118489180.png" 
                  alt="SpellBee International Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-500 max-w-xs leading-relaxed font-light">
                Premium student language benchmarking program empowering school coordinators, active parent groups, and regional educators through customized syllabi.
              </p>
              <p className="text-[10px] text-slate-400">
                SpellBee International is a standardized trademark. All learning resource kits are registered globally.
              </p>
            </div>

            {/* Column 2: Program Tiers */}
            <div className="space-y-3">
              <h5 className="font-heading font-extrabold text-[#1E1B4B] uppercase tracking-wider text-[11px]">Program Tiers</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToComponent(section5FrameworkRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Level 1 - Inter School</button></li>
                <li><button onClick={() => scrollToComponent(section5FrameworkRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Level 2 - State Progression</button></li>
                <li><button onClick={() => scrollToComponent(section5FrameworkRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Level 3 - National Prep</button></li>
                <li><button onClick={() => scrollToComponent(section5FrameworkRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Level 4 - Global Security</button></li>
              </ul>
            </div>

            {/* Column 3: Collaboration */}
            <div className="space-y-3">
              <h5 className="font-heading font-extrabold text-[#1E1B4B] uppercase tracking-wider text-[11px]">Collaboration</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToComponent(section7ModelsRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">SpellBee Excel</button></li>
                <li><button onClick={() => scrollToComponent(section7ModelsRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Combined Track</button></li>
                <li><button onClick={() => scrollToComponent(section7ModelsRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">SpellBee Intense</button></li>
                <li><button onClick={() => scrollToComponent(section10FormRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Syllabus compliance</button></li>
              </ul>
            </div>

            {/* Column 4: Quick links */}
            <div className="space-y-3">
              <h5 className="font-heading font-extrabold text-[#1E1B4B] uppercase tracking-wider text-[11px]">Quick links</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToComponent(section10FormRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Book Presentation</button></li>
                <li><button onClick={() => scrollToComponent(section4AboutRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Pedagogical Legacy</button></li>
                <li><button onClick={() => scrollToComponent(section3NeedRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Core Needs Analysis</button></li>
                <li><button onClick={() => scrollToComponent(section9ProofRef)} className="hover:text-[#5B21B6] transition-colors cursor-pointer">Case Studies & Testimonials</button></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-200/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-[11px]">
              © 2026 Edugo × SpellBee International School partnership Suite. All Rights Reserved. Private & Confidential K-12 Portal.
            </p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-[#5B21B6] transition-colors font-mono">Institutional Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-[#5B21B6] transition-colors font-mono">TCS iON Examination Rules</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
