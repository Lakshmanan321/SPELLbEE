import { 
  CredibilityStat, 
  NeedCard, 
  FrameworkLevel, 
  StakeholderBenefit, 
  CollaborationModel, 
  StepItem, 
  Testimonial 
} from './types';

export const credibilityStats: CredibilityStat[] = [
  {
    id: 'students',
    value: '1.35 Million+',
    label: 'Students Impacted',
    subtext: 'Nurtured across diverse academic boards'
  },
  {
    id: 'schools',
    value: '6,000+',
    label: 'Schools Associated',
    subtext: 'Institutional partnerships pan-India'
  },
  {
    id: 'experience',
    value: '16+ Years',
    label: 'Programme Expertise',
    subtext: 'Pioneering english vocabulary architecture'
  },
  {
    id: 'pathway',
    value: 'School to Global',
    label: 'Learning Pathway',
    subtext: 'Multi-tiered strategic progression'
  },
  {
    id: 'tcs',
    value: 'TCS iON Secured',
    label: 'Examination Exposure',
    subtext: 'State-of-the-art secure assessments'
  }
];

export const needCards: NeedCard[] = [
  {
    id: 'accuracy',
    title: 'Language Accuracy',
    description: 'Systematic instruction in spelling patterns, advanced vocabulary, precise word formation, correct syntactic usage, and grammar-sensitive training helper guides.'
  },
  {
    id: 'fluency',
    title: 'Language Fluency',
    description: 'Practical emphasis on standard phonetics, clear listening comprehension, expressive speech flow, and executive active speaking confidence.'
  },
  {
    id: 'confidence',
    title: 'Academic Confidence',
    description: 'Syllabus-aligned preparation materials, progressive structured milestones, and periodic analytics that manifest visible language competence.'
  },
  {
    id: 'exposure',
    title: 'Competitive Exposure',
    description: 'Graduated levels initiating from friendly classroom benchmarks scaling up to intense regional, state, national, and peak international honors.'
  }
];

export const frameworkLevels: FrameworkLevel[] = [
  {
    id: 'level-1',
    levelNum: 1,
    title: 'Foundation',
    focus: 'Spelling rules, basic phonetics, early vocabulary expansion, reading discipline, and foundational academic confidence.'
  },
  {
    id: 'level-2',
    levelNum: 2,
    title: 'Regional / State Progression',
    focus: 'Advanced vocabulary building, phonetic pronuncation practice, word contextual usage patterns, syntactic accuracy, and mock trials.'
  },
  {
    id: 'level-3',
    levelNum: 3,
    title: 'National Progression',
    focus: 'Higher-order word origins (etymology), cognitive competitive readiness, spelling patterns under timed trials, and deep semantic relations.'
  },
  {
    id: 'level-4',
    levelNum: 4,
    title: 'International Exposure',
    focus: 'Corporate TCS iON secure examination system, recognition by global education partners, peak championship trophies, and international credentials.'
  }
];

export const stakeholderBenefits: StakeholderBenefit[] = [
  {
    title: 'For Students',
    benefits: [
      'Builds a lifelong spelling and expansive vocabulary foundation',
      'Refines standard pronunciation, phonetics, and speech elegance',
      'Nurtures reading comprehension and sharp listening focus',
      'Provides prestigious, progressive competitive milestones',
      'Recognises hard work with medals, certificates, and school trophies',
      'Clear level-wise roadmap from classroom to international platform'
    ]
  },
  {
    title: 'For Schools',
    benefits: [
      'Delivers a premium, ready-to-integrate co-curricular option',
      'Enriches existing English language and communication curricula',
      'Generates detailed institutional performance analyses and statistics',
      'Boosts parental trust with measurable, high-value outcomes',
      'Differentiates school credentials with academic spelling champions',
      'Flexible, hassle-free implementation schemes across active grades'
    ]
  },
  {
    title: 'For Teachers / Coordinators',
    benefits: [
      'Zero teaching burden with beautifully compiled level textbooks',
      'Complete orientation of coordinators and educators by experts',
      'All-inclusive digital platforms and multimedia support assets',
      'Structured milestones that align cleanly with the academic calendar',
      'Administrative support with user registration, test codes, and queries',
      'Pre-planned mock schedules to ease coordinator coordination workloads'
    ]
  }
];

export const collaborationModels: CollaborationModel[] = [
  {
    id: 'excel',
    name: 'SpellBee Excel',
    tagline: 'Foundational Language Enrichment',
    description: 'An introductory track ideally matched for schools seeking to enrich daily classroom vocabularies through structured books and level 1 foundational challenges.'
  },
  {
    id: 'combined',
    name: 'Level 1 + Level 2 Combined Track',
    tagline: 'Extended Strategic Capability',
    description: 'A deep-groove track of about 2 to 3 months of planned student training and successive assessment tiers, spanning class-wide learning through state-level mock metrics.'
  },
  {
    id: 'intense',
    name: 'SpellBee Intense',
    tagline: 'Peak Multi-Level Championship Integration',
    description: 'A comprehensive, year-round pathway traversing all 4 performance levels with complete books, live support, advanced secure examinations powered by TCS iON, and international certifications.'
  }
];

export const stepsJourney: StepItem[] = [
  {
    number: 1,
    title: 'School Discussion',
    description: 'Dialoguing with school directors, academic principals, and curriculum leads to align on grade targets, board objectives, and the best fit enrollment scale.'
  },
  {
    number: 2,
    title: 'Programme Orientation',
    description: 'Hosting highly informative webinars and briefing meetings for coordinators, English department teachers, and parents to build immediate excitement.'
  },
  {
    number: 3,
    title: 'Student Registration',
    description: 'Streamlined online portal access or bulk offline workbook-integrated registration to ensure minimal administrative friction for teachers.'
  },
  {
    number: 4,
    title: 'Learning & Practice Support',
    description: 'Distribution of study handbooks, customized practice portals, recorded guidance videos, and live workshops led by international spell champions.'
  },
  {
    number: 5,
    title: 'Assessment & Recognition',
    description: 'Scheduled multi-round assessments with secured, interactive results dashboards, customized merit scrolls, and gleaming dynamic class medals.'
  },
  {
    number: 6,
    title: 'Outcome Reviews',
    description: 'Detailed school-wide report delivery with clear developmental insights, class metrics, national comparisons, and long-term planning.'
  }
];

export const testQuotes: Testimonial[] = [
  {
    quote: "Our school has experienced a substantial rise in vocabulary accuracy and overall reading comprehension since partnering with SpellBee International. The multi-level framework keeps our children self-motivated and thoroughly focused on English excellence.",
    author: "Dr. Sister Maria Rose",
    designation: "Academic Principal",
    school: "St. Mary's Convent Sr. Sec. School",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Unlike seasonal quick contests, SpellBee International offers an authentic academic syllabus. Students do not just memorize words; they explore etymology, pronunciation, and exact definitions. This is real curriculum enhancement.",
    author: "Mr. Rajendran Krishnan",
    designation: "Director of Curricular Studies",
    school: "National Public Group of Institutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The TCS iON examination platform was amazingly intuitive. It gave our students a true flavor of high-security national testing, and the performance report allowed our teachers to pinpoint exact grammar and pronunciation gaps.",
    author: "Mrs. Revathi Subramanian",
    designation: "Dean of Primary Academic Standards",
    school: "Vidyalaya Global Academy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  }
];
