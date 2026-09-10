import { Course, GalleryItem, Testimonial, SuccessStory, Notice, FAQItem, LeadershipProfile, FacultyProfile, TeachingApproachItem } from '../types';

// ============================================================================
// OFFICIAL CONTACT CONFIGURATION (Easily update official contact details here)
// ============================================================================
export const CONTACT_CONFIG = {
  PHONE_NUMBER: "+91 94311 76637",
  PHONE_DISPLAY: "+91 94311 76637", 
  EMAIL_ADDRESS: "admissions.deoghar@vfsglobalacademy.org",
  WHATSAPP_NUMBER: "+919431176637",
  WHATSAPP_MESSAGE_PREFILL: "Hello VFS Global Academy STPI Deoghar, I would like to inquire about admission for the Certificate Courses.",
  GOOGLE_MAP_LOCATION: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.5749216012484!2d86.64724897536254!3d24.51739597815598!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x39f116503c202029%3A0x6b4f74d0e57ba5c4!2sSoftware%20Technology%20Parks%20of%20India%20(STPI)%20Deoghar!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin",
  GOOGLE_MAPS_LINK: "https://maps.google.com/?q=STPI+Deoghar+Jasidih+Jharkhand",
  
  // Official Centre Address
  ACADEMY_NAME: "VFS Global Academy",
  OPERATED_UNDER: "VFS Global Foundation",
  CENTRE_LOCATION: "STPI, Deoghar (Jasidih), Jharkhand, India",
  FULL_ADDRESS_LINES: [
    "STPI, Deoghar (Jasidih)",
    "Near Swagat Petrol Pump",
    "Manikpur Road, After Railway Over Bridge",
    "Jasidih, Deoghar, Jharkhand, PIN - 814142"
  ],
  OFFICE_TIMINGS: "10:00 AM – 01:00 PM (Monday to Sunday)",
  DOCUMENT_SUBMISSION_TIMING: "10:00 AM to 01:00 PM",
  
  // Social Media Links
  SOCIAL_LINKS: {
    LINKEDIN: "https://www.linkedin.com/company/vfs-global",
    INSTAGRAM: "https://www.instagram.com/vfsglobalofficial",
    FACEBOOK: "https://www.facebook.com/vfsglbl"
  }
};

// ============================================================================
// LEADERSHIP & FACULTY DETAILS
// ============================================================================
export const CENTRE_HEAD_INFO: LeadershipProfile = {
  name: "RAMSEWAK GUNJAN",
  role: "Centre Head",
  organization: "VFS Global Foundation",
  location: "STPI, Deoghar (Jasidih)",
  bio: "Ramsewak Gunjan serves as the Centre Head and plays an important role in guiding students throughout their learning and professional development journey. With a strong focus on communication, confidence and personality development, he encourages students to become confident, expressive and professionally prepared individuals. His mentorship focuses on helping students develop the essential skills required for academic, professional and public environments.",
  guidanceAreas: [
    "Communication Skills",
    "Voice Modulation",
    "Stage Speaking",
    "Public Speaking",
    "Presentation Skills",
    "Professional Grooming",
    "Dressing Sense",
    "Body Language",
    "Overall Expression",
    "Personality Development"
  ],
  quote: "Confidence is built through knowledge, communication and the courage to express yourself.",
  image: "/images/ramsewak_gunjan_head_1788171851297.jpg",
  secondaryImage: "/images/gunjan_sir_secondary_action.jpg",
  secondaryImageTitle: "Executive Leadership & Mentorship"
};

export const FACULTY_MEMBERS: FacultyProfile[] = [
  {
    id: "faculty-pramod",
    name: "PRAMOD SIR",
    role: "English Communication & Personality Development Mentor",
    organization: "VFS Global Foundation",
    location: "STPI, Deoghar (Jasidih)",
    bio: "Pramod Sir is dedicated to helping students strengthen their English communication skills and develop confidence for professional and personal growth. His interactive teaching approach encourages students to speak confidently, participate actively and improve their overall communication abilities. Through practical activities, communication exercises and interactive sessions, students are encouraged to overcome hesitation and express themselves with confidence.",
    expertiseAreas: [
      "English Speaking",
      "Spoken English",
      "Self Introduction",
      "Interview Preparation",
      "Group Discussion",
      "Modern English Communication",
      "Conversation Practice",
      "Public Speaking",
      "Drama Preparation",
      "Presentation Skills",
      "Confidence Building",
      "Personality Development"
    ],
    quote: "Effective communication is not only about speaking English—it is about expressing yourself with confidence and clarity.",
    image: "/images/pramod_sir_mentor_1788171866404.jpg",
    secondaryImage: "/images/pramod_sir_secondary_action.jpg",
    secondaryImageTitle: "Interactive Spoken English & Classroom Drills",
    badge: "English & Personality Mentor"
  },
  {
    id: "faculty-raushan",
    name: "RAUSHAN MISHRA",
    role: "Technician & Travel–Hospitality Mentor",
    organization: "VFS Global Foundation",
    location: "STPI, Deoghar (Jasidih)",
    bio: "Raushan Mishra is a dedicated professional and mentor who supports students in developing practical knowledge of the travel, tourism and hospitality industry. His guidance helps learners understand important aspects of tourism, hospitality services, customer experience and professional opportunities within the industry. His teaching approach focuses on practical understanding and industry-oriented learning.",
    expertiseAreas: [
      "Travel & Tourism Fundamentals",
      "Travel Management",
      "Hotel Management",
      "Event Management",
      "Tourist Guiding",
      "Tourism Awareness",
      "Food & Hospitality",
      "Customer Service",
      "Passport Awareness",
      "Visa Process Awareness"
    ],
    quote: "Knowledge becomes meaningful when it prepares learners for real-world opportunities.",
    image: "/images/raushan_mishra_mentor_1788171880485.jpg",
    badge: "Travel & Hospitality Specialist"
  }
];

export const TEACHING_APPROACHES: TeachingApproachItem[] = [
  {
    id: 1,
    title: "PRACTICAL LEARNING",
    titleHi: "व्यावहारिक शिक्षण",
    description: "Learning through practical activities and real-world examples.",
    descriptionHi: "व्यावहारिक गतिविधियों और वास्तविक दुनिया के उदाहरणों के माध्यम से सीखना।",
    icon: "GraduationCap"
  },
  {
    id: 2,
    title: "COMMUNICATION DEVELOPMENT",
    titleHi: "संचार कौशल विकास",
    description: "Building confidence and effective communication skills.",
    descriptionHi: "आत्मविश्वास और प्रभावी संचार कौशल का निर्माण करना।",
    icon: "MessageSquare"
  },
  {
    id: 3,
    title: "PERSONALITY DEVELOPMENT",
    titleHi: "व्यक्तित्व विकास",
    description: "Improving presentation, grooming and professional behaviour.",
    descriptionHi: "प्रस्तुति, ग्रूमिंग और पेशेवर व्यवहार में सुधार।",
    icon: "Sparkles"
  },
  {
    id: 4,
    title: "INDUSTRY KNOWLEDGE",
    titleHi: "उद्योग ज्ञान एवं जागरूकता",
    description: "Providing awareness of travel, tourism and hospitality opportunities.",
    descriptionHi: "यात्रा, पर्यटन और आतिथ्य अवसरों की संपूर्ण व्यावहारिक समझ।",
    icon: "Compass"
  },
  {
    id: 5,
    title: "CAREER PREPARATION",
    titleHi: "करियर व साक्षात्कार तैयारी",
    description: "Preparing students for interviews, group discussions and professional opportunities.",
    descriptionHi: "साक्षात्कार, समूह चर्चा और पेशेवर अवसरों के लिए विद्यार्थियों को तैयार करना।",
    icon: "Briefcase"
  },
  {
    id: 6,
    title: "CONFIDENCE BUILDING",
    titleHi: "आत्मविश्वास निर्माण",
    description: "Helping students overcome hesitation and express themselves confidently.",
    descriptionHi: "छात्रों को झिझक दूर करने और आत्मविश्वास से खुद को व्यक्त करने में मदद करना।",
    icon: "ShieldCheck"
  }
];

export const COMMITMENT_GOALS = [
  {
    title: "Learn New Skills",
    titleHi: "नए कौशल सीखें",
    desc: "Industry-aligned competencies in hospitality, ticketing, and communicative fluency."
  },
  {
    title: "Build Confidence",
    titleHi: "आत्मविश्वास बनाएं",
    desc: "Overcome hesitation through stage presence, group interactions, and public speaking."
  },
  {
    title: "Improve Communication",
    titleHi: "संचार में सुधार करें",
    desc: "Master spoken English, active listening, voice modulation, and clear articulation."
  },
  {
    title: "Develop Professional Personality",
    titleHi: "व्यावसायिक व्यक्तित्व विकसित करें",
    desc: "Learn corporate grooming, dressing etiquette, body language, and professional manners."
  },
  {
    title: "Explore Career Opportunities",
    titleHi: "करियर के अवसरों को जानें",
    desc: "Gain deep awareness of hospitality, airline ground staff, customer relations, and travel desks."
  },
  {
    title: "Prepare for the Future",
    titleHi: "भविष्य के लिए तैयार हों",
    desc: "Rigorous mock interview drills, CV preparation, and professional readiness workshops."
  }
];

// Backwards compatibility alias
export const LEADERSHIP_INFO = {
  name: CENTRE_HEAD_INFO.name,
  role: CENTRE_HEAD_INFO.role,
  organization: CENTRE_HEAD_INFO.organization,
  location: CENTRE_HEAD_INFO.location,
  quote: CENTRE_HEAD_INFO.quote,
  bio: CENTRE_HEAD_INFO.bio,
  image: CENTRE_HEAD_INFO.image
};

// ============================================================================
// COURSES OFFERED
// ============================================================================
export const COURSES_DATA: Course[] = [
  {
    id: "travel-hospitality",
    title: "Travel & Hospitality Management",
    subtitle: "Learn | Explore | Excel in the Global Travel & Hospitality Industry",
    duration: "3 Months",
    classesPerWeek: "3 Days Per Week",
    timings: "10:00 AM to 01:00 PM (Fri, Sat, Sun)",
    batchSize: 30,
    featured: true,
    description: "Develop comprehensive knowledge and professional skills related to the travel and hospitality industry. Designed to prepare students for career opportunities in hotels, airlines, travel agencies, tourism boards, and guest relationship management.",
    topics: [
      "Introduction to Travel Industry",
      "Hospitality Services & Front Office Operations",
      "Customer Service & Guest Relationship Management",
      "Tourism Basics & Destination Planning",
      "Professional Behaviour & Corporate Etiquette",
      "Career Development & Industry Readiness"
    ],
    careerOutcomes: [
      "Travel Consultant / Executive",
      "Hospitality Customer Service Associate",
      "Front Desk & Guest Relations Officer",
      "Airline / Airport Ground Support Associate",
      "Tour Coordinator & Operations Assistant"
    ],
    image: "/images/travel_hospitality_course_1788152513964.jpg"
  },
  {
    id: "language-communication",
    title: "Language & Communication",
    subtitle: "Speak with Confidence | Communicate with Impact | Succeed in Career",
    duration: "3 Months",
    classesPerWeek: "3 Days Per Week",
    timings: "10:00 AM to 01:00 PM (Fri, Sat, Sun)",
    batchSize: 30,
    featured: true,
    description: "Improve professional communication and language skills essential for high-impact personal and career development. Build fluent spoken English, master corporate presentations, ace job interviews, and develop unshakeable professional confidence.",
    topics: [
      "Spoken Communication & Pronunciation Skills",
      "Professional & Business Correspondence",
      "Personality Development & Body Language",
      "Job Interview Preparation & Mock Interviews",
      "Workplace Communication & Team Collaboration",
      "Confidence Building & Stage Presence"
    ],
    careerOutcomes: [
      "Corporate Client Representative",
      "Public Relations & Communications Assistant",
      "Executive Support & Front-Facing Specialist",
      "Customer Experience Representative",
      "Professional Service Coordinator"
    ],
    image: "/images/communication_skills_training_1788152527352.jpg"
  }
];

// ============================================================================
// SCHEDULE SPECIFICATIONS
// ============================================================================
export const SCHEDULE_DATA = {
  duration: "3 Months",
  classesPerWeek: "3 Days Per Week",
  timing: "10:00 AM to 01:00 PM",
  days: ["Friday", "Saturday", "Sunday"],
  dailyDuration: "3 Hours",
  totalWeeklyHours: "9 Hours",
  mode: "Offline Classroom Training & Practical Labs at STPI Deoghar"
};

// ============================================================================
// ADMISSION SPECIFICATIONS & REQUIRED DOCUMENTS
// ============================================================================
export const ADMISSION_DATA = {
  status: "Admissions Open for 2026 Batches",
  maxBatchSize: 30,
  currentBatchCapacityPercent: 78,
  seatsRemaining: 7,
  submissionTiming: "10:00 AM to 01:00 PM",
  requiredDocuments: [
    {
      title: "Class 10 Mark Sheet",
      description: "Xerox copy of Class 10 (Matriculation) mark sheet for age and academic verification.",
      mandatory: true
    },
    {
      title: "Class 12 Mark Sheet",
      description: "Xerox copy of Class 12 (Intermediate/Higher Secondary) mark sheet.",
      mandatory: true
    },
    {
      title: "Higher Qualification Mark Sheets",
      description: "Graduation / Diploma mark sheets (if applicable for advanced consideration).",
      mandatory: false
    },
    {
      title: "Aadhaar Card",
      description: "Clear xerox copy of Aadhaar Card for identity and address proof.",
      mandatory: true
    }
  ],
  importantNotice: "Maximum 30 students can be accommodated in one batch. Students beyond the batch capacity may be shifted to the next batch. Early document submission is strongly advised."
};

// ============================================================================
// WHY CHOOSE US
// ============================================================================
export const WHY_CHOOSE_CARDS = [
  {
    title: "Industry-Oriented Training",
    description: "Curriculum designed to align directly with real hospitality, travel operations, and corporate communication expectations.",
    icon: "Briefcase"
  },
  {
    title: "Certificate Courses",
    description: "Prestigious certificate awarded upon successful completion by VFS Global Foundation to validate your skill set.",
    icon: "Award"
  },
  {
    title: "Experienced Trainers",
    description: "Learn from seasoned educators and industry mentors providing personalized guidance and continuous feedback.",
    icon: "Users"
  },
  {
    title: "Practical Learning",
    description: "Hands-on roleplays, simulation exercises, presentations, and group discussions rather than purely theoretical lectures.",
    icon: "BookOpen"
  },
  {
    title: "Communication Skill Development",
    description: "Intensive focus on spoken English fluency, workplace etiquette, body language, and interview presentation skills.",
    icon: "MessageSquare"
  },
  {
    title: "Career-Focused Education",
    description: "Tailored preparation with resume building, mock interviews, and confidence enhancement for global career pathways.",
    icon: "TrendingUp"
  }
];

// ============================================================================
// GALLERY ITEMS (Representing authentic academy photographs across categories)
// ============================================================================
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "STPI Deoghar Grand Convocation & Batch Cohort",
    category: "Campus Life",
    description: "Graduating students and faculty holding official certificates outside the Software Technology Parks of India (STPI) facility in Jasidih, Deoghar.",
    image: "/images/stpi_deoghar_convocation_group_1788172265424.jpg",
    location: "STPI Deoghar Campus",
    featured: true
  },
  {
    id: "gal-2",
    title: "Official Certificate Distribution Ceremony",
    category: "Certificate Distribution",
    description: "Distinguished guests and Centre Head awarding Certificate of Completion in Travel & Hospitality Management in front of VFS Global Foundation banner.",
    image: "/images/vfs_certificate_award_1788153716243.jpg",
    location: "VFS Academy Hall",
    featured: true
  },
  {
    id: "gal-3",
    title: "Grand Auditorium Stage Seminar & Cultural Event",
    category: "Student Activities",
    description: "Academy mentors and students participating in a dynamic seminar and cultural stage presentation event.",
    image: "/images/auditorium_ceremony_event.jpg",
    location: "Main Auditorium Hall",
    featured: true
  },
  {
    id: "gal-4",
    title: "Smart Classroom Lecture & Interactive Mentorship",
    category: "Training Sessions",
    description: "Students actively engaged during an interactive weekend training session focusing on hospitality management and communication modules with Centre Head.",
    image: "/images/classroom_smart_lecture_1788153752542.jpg",
    location: "STPI Smart Training Room",
    featured: true
  },
  {
    id: "gal-5",
    title: "VFS Global Academy Front Reception Desk",
    category: "Campus Life",
    description: "Batch students, centre coordinators, and Centre Head gathered at the official VFS Global Academy front desk at STPI Deoghar.",
    image: "/images/vfs_reception_desk_students_1788172247496.jpg",
    location: "VFS Academy Reception",
    featured: true
  },
  {
    id: "gal-6",
    title: "Student Practical Mock Presentation & Drills",
    category: "Student Activities",
    description: "Students practicing stage confidence, mock interviews, public presentation, and communication drills in front of smart display.",
    image: "/images/practical_mock_presentation_1788153769787.jpg",
    location: "Interactive Training Hall",
    featured: true
  },
  {
    id: "gal-7",
    title: "Student Celebrations & Cultural Gathering",
    category: "Student Activities",
    description: "Vibrant gathering of students and mentors celebrating batch milestones and cultural cohesion.",
    image: "/images/cultural_event_gathering.jpg",
    location: "STPI Activity Area",
    featured: false
  },
  {
    id: "gal-8",
    title: "Academic Workshop & Interactive Seminar",
    category: "Training Sessions",
    description: "In-depth practical seminar covering modern travel operations, customer service protocols, and spoken English.",
    image: "/images/academic_workshop_seminar.jpg",
    location: "Seminar Hall",
    featured: false
  },
  {
    id: "gal-9",
    title: "Classroom Cohort & Active Study Session",
    category: "Training Sessions",
    description: "Dedicated weekend batch students in ergonomic chairs with notebooks engaged in communicative English and professional development.",
    image: "/images/communication_skills_training_1788152527352.jpg",
    location: "Smart Training Room 2",
    featured: false
  },
  {
    id: "gal-10",
    title: "Interactive Student Peer Interaction & Group Work",
    category: "Student Activities",
    description: "Collaborative peer group activities helping learners build teamwork, problem solving, and articulate conversation.",
    image: "/images/student_interaction_cohort.jpg",
    location: "Discussion Lounge",
    featured: false
  },
  {
    id: "gal-11",
    title: "Travel & Hospitality Practical Workshop",
    category: "Training Sessions",
    description: "Hands-on customer service simulation and front desk guest interaction exercises conducted at the academy.",
    image: "/images/travel_hospitality_course_1788152513964.jpg",
    location: "Hospitality Lab",
    featured: false
  },
  {
    id: "gal-12",
    title: "Outdoor Educational Field Study & Excursion",
    category: "Educational Visits",
    description: "Faculty mentor and student cohort on a field study and team-building educational visit in Deoghar.",
    image: "/images/outdoor_study_visit_1788152575776.jpg",
    location: "Deoghar Nature Excursion",
    featured: false
  }
];

// ============================================================================
// TESTIMONIALS (Easily editable student feedback)
// ============================================================================
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-sujit",
    name: "Sujit Kumar",
    role: "Certified Graduate",
    course: "Travel & Hospitality & Communication",
    batch: "2025-26 Batch",
    quote: "Completing the Travel & Hospitality Management and Language & Communication courses at VFS Global Academy, STPI Deoghar has been transformative. Under the constant mentorship of Gunjan Sir, Raushan Sir, and Pramod Sir, my spoken English, public presentation, and personality development reached a whole new level. Their practical industry insights gave me the real-world skills and confidence needed for accelerated career growth.",
    rating: 5,
    avatarBg: "bg-blue-600 text-white"
  },
  {
    id: "test-aman",
    name: "Aman Roy",
    role: "Certified Graduate",
    course: "Travel & Hospitality & Communication",
    batch: "2025-26 Batch",
    quote: "My experience with VFS Global Academy at STPI Deoghar was truly enriching. The personalized guidance from Gunjan Sir on leadership and etiquette, Raushan Sir on hospitality operations, and Pramod Sir on communication and confidence-building helped me overcome my hesitation. This comprehensive training equipped me with robust professional skills and strong industry readiness.",
    rating: 5,
    avatarBg: "bg-emerald-600 text-white"
  },
  {
    id: "test-1",
    name: "Nitish Kumar",
    role: "Certified Graduate",
    course: "Travel & Hospitality Management",
    batch: "2025-26 Batch",
    quote: "This training helped me improve my communication and professional confidence. The mentors at STPI Deoghar gave practical insights into tourism and hospitality that gave me the courage to apply for top service roles.",
    rating: 5,
    avatarBg: "bg-indigo-600 text-white"
  },
  {
    id: "test-2",
    name: "Megha Kumari",
    role: "Certified Graduate",
    course: "Language & Communication",
    batch: "2025-26 Batch",
    quote: "The course provided valuable knowledge about professional communication and interview readiness. Earlier I was hesitant to speak publicly, but the weekend presentations and mock interviews transformed my fluency.",
    rating: 5,
    avatarBg: "bg-purple-600 text-white"
  },
  {
    id: "test-3",
    name: "Babli Kumari",
    role: "Certificate Recipient",
    course: "Travel & Hospitality Management",
    batch: "2025-26 Batch",
    quote: "The 3-month weekend schedule was very convenient and the training environment at STPI Jasidih is state-of-the-art. I learned how customer service, front office etiquette, and guest handling work in real companies.",
    rating: 5,
    avatarBg: "bg-amber-600 text-white"
  },
  {
    id: "test-4",
    name: "Abhimanyu Kumar",
    role: "Certified Graduate",
    course: "Language & Communication",
    batch: "2025-26 Batch",
    quote: "Under the leadership of Centre Head Ramsewak Sir, every student receives personal attention. The practical activities and educational visit made learning engaging and highly memorable.",
    rating: 5,
    avatarBg: "bg-sky-600 text-white"
  }
];

// ============================================================================
// SUCCESS STORIES & CASE STUDY SNAPSHOTS (Alumni roles & corporate placements)
// ============================================================================
export const SUCCESS_STORIES_DATA: SuccessStory[] = [
  {
    id: "story-sujit",
    name: "Sujit Kumar",
    currentRole: "Airport Experience Associate",
    company: "IndiGo Airlines",
    location: "Ranchi / Kolkata Hub",
    category: "Aviation",
    course: "Travel, Hospitality & Communication",
    batch: "2025-26 Batch",
    challenge: "Faced hesitation during spontaneous English conversations and had no previous exposure to commercial airport operations.",
    transformation: "Underwent intensive boarding simulation drills, public speaking practice with Pramod Sir, and passenger protocol training from Gunjan Sir & Raushan Sir.",
    currentImpact: "Successfully coordinates terminal check-ins, boarding gates, and special passenger assistance with exceptional customer commendations.",
    keyMetric: "Airlines Selection",
    avatarBg: "bg-blue-600 text-white",
    rating: 5
  },
  {
    id: "story-aman",
    name: "Aman Roy",
    currentRole: "Guest Relations Executive",
    company: "The Leela Palaces, Hotels & Resorts",
    location: "Bengaluru",
    category: "Hospitality",
    course: "Travel & Hospitality Management",
    batch: "2025-26 Batch",
    challenge: "Struggled with corporate posture, grooming standards, and confidence when speaking before senior interview panels.",
    transformation: "Mastered 5-star hospitality guest journey standards, executive communication, and customer conflict resolution at the STPI Deoghar centre.",
    currentImpact: "Promoted to full Executive within 6 months; currently leads VIP guest arrivals, front-desk concierges, and luxury lounge operations.",
    keyMetric: "Fast-Track Promotion",
    avatarBg: "bg-emerald-600 text-white",
    rating: 5
  },
  {
    id: "story-priya",
    name: "Priya Kumari",
    currentRole: "Visa Operations Officer",
    company: "VFS Global Services",
    location: "Kolkata Application Centre",
    category: "Visa & Consular",
    course: "Travel & Hospitality Management",
    batch: "2025 Batch",
    challenge: "Lacked knowledge of international consular workflows, biometric data capture compliance, and cross-cultural customer etiquette.",
    transformation: "Completed dedicated modules in international document verification, applicant data security, and courteous consular customer handling.",
    currentImpact: "Processes 70+ visa applicants daily with zero compliance errors while maintaining exceptional applicant satisfaction ratings.",
    keyMetric: "Zero-Defect Verification",
    avatarBg: "bg-purple-600 text-white",
    rating: 5
  },
  {
    id: "story-nitish",
    name: "Nitish Kumar",
    currentRole: "Front Office Specialist",
    company: "ITC Hotels (Welcomhotel)",
    location: "Bhubaneswar / Ranchi",
    category: "Hospitality",
    course: "Travel & Hospitality Management",
    batch: "2025-26 Batch",
    challenge: "Nervous in group discussions and lacked practical understanding of hotel front-office software and guest check-in systems.",
    transformation: "Completed 36+ hours of interactive mock interview panels, hotel front-desk roleplays, and English fluency masterclasses.",
    currentImpact: "Directs hotel lobby reception, coordinates banquet corporate check-ins, and handles guest inquiries with confidence and poise.",
    keyMetric: "Campus Placement Selection",
    avatarBg: "bg-indigo-600 text-white",
    rating: 5
  },
  {
    id: "story-megha",
    name: "Megha Kumari",
    currentRole: "Travel Desk & Holiday Consultant",
    company: "MakeMyTrip",
    location: "Patna Regional Centre",
    category: "Travel & Tourism",
    course: "Language & Communication",
    batch: "2025-26 Batch",
    challenge: "Felt nervous during telephone client negotiations and lacked knowledge of domestic and international tourism itineraries.",
    transformation: "Learned tourism packaging essentials, phone etiquette, and customer journey planning through weekend practical sessions at STPI Jasidih.",
    currentImpact: "Designs customized spiritual and leisure travel packages across Eastern India with a 98% client satisfaction rate.",
    keyMetric: "98% Client Satisfaction",
    avatarBg: "bg-amber-600 text-white",
    rating: 5
  },
  {
    id: "story-rahul",
    name: "Rahul Anand",
    currentRole: "Aviation Ground Operations Associate",
    company: "Air India SATS (AISATS)",
    location: "Delhi IGI Airport (T3)",
    category: "Aviation",
    course: "Travel, Hospitality & Communication",
    batch: "2025-26 Batch",
    challenge: "Struggled with spoken English accents and lacked clarity on international flight transit procedures and team communication.",
    transformation: "Underwent focused phonetics training, rapid-response communication drills, and ramp coordination teamwork exercises under Pramod Sir.",
    currentImpact: "Coordinates flight baggage handling, transit passenger clearances, and on-time turnarounds at Terminal 3.",
    keyMetric: "IGI Airport Placement",
    avatarBg: "bg-sky-600 text-white",
    rating: 5
  }
];

// ============================================================================
// NOTICE BOARD ANNOUNCEMENTS
// ============================================================================
export const NOTICES_DATA: Notice[] = [
  {
    id: "not-1",
    title: "Admissions Open for Certificate Courses (Batch 2026)",
    date: "Current Session",
    category: "Admission",
    isNew: true,
    isUrgent: true,
    summary: "Admissions are currently underway for Travel & Hospitality Management and Language & Communication courses at STPI Deoghar.",
    details: [
      "Seats are strictly limited to 30 candidates per batch to ensure personalized guidance.",
      "Eligible candidates should submit Xerox copies of Class 10, Class 12, Aadhaar card, and higher qualification certificates.",
      "Document submission timing: 10:00 AM to 01:00 PM at the academy centre."
    ]
  },
  {
    id: "not-2",
    title: "Class Schedule & Weekend Timings Notice",
    date: "Updated Weekly",
    category: "Schedule",
    isNew: true,
    isUrgent: false,
    summary: "Regular weekend batches are conducted on Friday, Saturday, and Sunday from 10:00 AM to 01:00 PM.",
    details: [
      "Total daily training duration: 3 Hours (10:00 AM - 01:00 PM).",
      "Punctuality is mandatory. Students must carry their academy notebooks and identity tags.",
      "Practical workshops and mock presentations are scheduled during Sunday sessions."
    ]
  },
  {
    id: "not-3",
    title: "Batch Capacity Limit & Overflow Policy",
    date: "Important Advisory",
    category: "General",
    isNew: false,
    isUrgent: false,
    summary: "A maximum of 30 students can be accommodated in one batch. Students beyond batch capacity will be allotted the upcoming batch.",
    details: [
      "Early document submission guarantees enrollment in the current active batch.",
      "Verification is conducted on a first-come, first-served basis during morning desk hours."
    ]
  }
];

// ============================================================================
// FAQS (All 6 official questions + answers)
// ============================================================================
export const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What is the course duration?",
    answer: "The course duration is 3 months for both the Certificate Course in Travel & Hospitality Management and Language & Communication."
  },
  {
    id: 2,
    question: "How many days are classes conducted?",
    answer: "Classes are conducted 3 days per week."
  },
  {
    id: 3,
    question: "What are the general class days?",
    answer: "Generally classes are conducted on Friday, Saturday and Sunday."
  },
  {
    id: 4,
    question: "What is the class timing?",
    answer: "Class timing is 10:00 AM to 01:00 PM (3 hours per training day)."
  },
  {
    id: 5,
    question: "What documents are required for admission?",
    answer: "Required documents include Xerox Copy of Class 10 Mark Sheet, Xerox Copy of Class 12 Mark Sheet, Higher Qualification Mark Sheets (if applicable), and Xerox Copy of Aadhaar Card."
  },
  {
    id: 6,
    question: "How many students can join a batch?",
    answer: "A maximum of 30 students can generally be accommodated in one batch. Students beyond the batch capacity may be shifted to the next batch."
  }
];
