export interface Resource {
  type: 'pdf' | 'ppt' | 'link' | 'video' | 'document';
  url: string;
  name: string;
  description?: string;
}

export interface TimelineItem {
  sno: number;
  date: string;
  title: string;
  description?: string;
  resources: Resource[];
  status?: 'completed' | 'current' | 'upcoming';
}

export interface OngoingCourse {
  id: string;
  abbreviation: string;
  code: string;
  name: string;
  type: 'Theory' | 'Laboratory' | 'Project';
  hoursVenue: string;
  semester: string;
  description: string;
  instructor: string;
  credits: number;
  prerequisites?: string[];
  learningOutcomes: string[];
  timeline: TimelineItem[];
  syllabus?: {
    unit: string;
    topics: string[];
    duration: string;
  }[];
  assessmentPattern?: {
    component: string;
    weightage: number;
  }[];
  textbooks?: {
    title: string;
    author: string;
    publisher: string;
    year: number;
  }[];
  references?: {
    title: string;
    author: string;
    publisher: string;
    year: number;
  }[];
}

export const ongoingCourses: OngoingCourse[] = [
  {
    id: "analog-digital-communication",
    abbreviation: "ADC(EVL)",
    code: "ECDC0211",
    name: "Analog and Digital Communication",
    type: "Theory",
    hoursVenue: "3 Hours/Week, LT-101",
    semester: "B.Tech-ECE-3B",
    description: "This course provides comprehensive knowledge of analog and digital communication systems, covering fundamental concepts, modulation techniques, and system analysis.",
    instructor: "Dr. Rohit Singh",
    credits: 3,
    prerequisites: ["Signals and Systems", "Electronic Circuits"],
    learningOutcomes: [
      "Understand the principles of analog and digital communication systems",
      "Analyze different modulation and demodulation techniques",
      "Design and evaluate communication system performance",
      "Apply error correction techniques in digital communication"
    ],
    timeline: [
      {
        sno: 1,
        date: "2025-01-15",
        title: "Introduction to Communication Systems",
        description: "Overview of communication systems, basic concepts, and historical perspective",
        status: "completed",
        resources: [
          { type: "pdf", url: "#", name: "Lecture 1 - Introduction.pdf", description: "Basic concepts and definitions" },
          { type: "ppt", url: "#", name: "Communication Systems Overview.pptx", description: "Presentation slides" },
          { type: "video", url: "#", name: "Introduction Video.mp4", description: "Recorded lecture" }
        ]
      },
      {
        sno: 2,
        date: "2025-01-22",
        title: "Amplitude Modulation Techniques",
        description: "AM, DSB-SC, SSB modulation and demodulation",
        status: "completed",
        resources: [
          { type: "pdf", url: "#", name: "Lecture 2 - AM Techniques.pdf", description: "Amplitude modulation theory" },
          { type: "ppt", url: "#", name: "AM Modulation.pptx", description: "Presentation slides" }
        ]
      },
      {
        sno: 3,
        date: "2025-01-29",
        title: "Frequency and Phase Modulation",
        description: "FM and PM modulation techniques and applications",
        status: "current",
        resources: [
          { type: "pdf", url: "#", name: "Lecture 3 - FM & PM.pdf", description: "Frequency and phase modulation" },
          { type: "ppt", url: "#", name: "FM-PM Techniques.pptx", description: "Presentation slides" }
        ]
      },
      {
        sno: 4,
        date: "2025-02-05",
        title: "Digital Modulation Techniques",
        description: "ASK, FSK, PSK, and QAM modulation schemes",
        status: "upcoming",
        resources: []
      }
    ],
    syllabus: [
      {
        unit: "Unit 1: Introduction to Communication Systems",
        topics: ["Elements of communication system", "Noise in communication", "Channel capacity"],
        duration: "8 hours"
      },
      {
        unit: "Unit 2: Analog Modulation",
        topics: ["AM, DSB-SC, SSB", "FM and PM", "Superheterodyne receiver"],
        duration: "10 hours"
      },
      {
        unit: "Unit 3: Digital Communication",
        topics: ["Digital modulation", "Error detection and correction", "Channel coding"],
        duration: "12 hours"
      }
    ],
    assessmentPattern: [
      { component: "Mid Semester Exam", weightage: 30 },
      { component: "End Semester Exam", weightage: 50 },
      { component: "Assignments/Quizzes", weightage: 20 }
    ],
    textbooks: [
      {
        title: "Principles of Communication Systems",
        author: "H. Taub, D. Schilling, G. Saha",
        publisher: "TMH",
        year: 2017
      }
    ],
    references: [
      {
        title: "Communication Systems",
        author: "Simon Haykin",
        publisher: "Wiley",
        year: 2019
      }
    ]
  },
  {
    id: "data-communication-networks-iot-lab",
    abbreviation: "DCNIoT-Lab",
    code: "ECDC0335",
    name: "Data Communication Networks and IoT Lab",
    type: "Laboratory",
    hoursVenue: "3 Hours/Week, Communication Systems Lab",
    semester: "B.Tech-ECE-5",
    description: "Hands-on laboratory course focusing on data communication protocols, network configuration, and IoT system implementation.",
    instructor: "Dr. Rohit Singh",
    credits: 2,
    prerequisites: ["Data Communication Networks", "Microprocessors"],
    learningOutcomes: [
      "Configure and troubleshoot network protocols",
      "Implement IoT solutions using various sensors and microcontrollers",
      "Analyze network performance and security",
      "Design and deploy wireless sensor networks"
    ],
    timeline: [
      {
        sno: 1,
        date: "2025-01-16",
        title: "Lab Introduction and Safety Protocols",
        description: "Laboratory orientation, equipment overview, and safety guidelines",
        status: "completed",
        resources: [
          { type: "pdf", url: "#", name: "Lab Manual.pdf", description: "Complete laboratory manual" },
          { type: "document", url: "#", name: "Safety Guidelines.docx", description: "Laboratory safety protocols" }
        ]
      },
      {
        sno: 2,
        date: "2025-01-23",
        title: "Network Cable Testing and Crimping",
        description: "Hands-on experience with network cables, testing, and termination",
        status: "completed",
        resources: [
          { type: "pdf", url: "#", name: "Experiment 1 - Cable Testing.pdf", description: "Cable testing procedures" },
          { type: "video", url: "#", name: "Cable Crimping Demo.mp4", description: "Demonstration video" }
        ]
      },
      {
        sno: 3,
        date: "2025-01-30",
        title: "Router and Switch Configuration",
        description: "Basic router and switch configuration using Cisco Packet Tracer",
        status: "current",
        resources: [
          { type: "pdf", url: "#", name: "Experiment 2 - Router Config.pdf", description: "Router configuration guide" },
          { type: "link", url: "#", name: "Packet Tracer Simulation", description: "Online simulation tool" }
        ]
      }
    ],
    syllabus: [
      {
        unit: "Unit 1: Network Fundamentals",
        topics: ["Cable testing", "Network topology", "Protocol analysis"],
        duration: "6 hours"
      },
      {
        unit: "Unit 2: IoT Implementation",
        topics: ["Sensor interfacing", "Wireless communication", "Data acquisition"],
        duration: "8 hours"
      }
    ],
    assessmentPattern: [
      { component: "Lab Performance", weightage: 40 },
      { component: "Lab Reports", weightage: 30 },
      { component: "Viva Voce", weightage: 30 }
    ]
  },
  {
    id: "advanced-mobile-communication",
    abbreviation: "AMC",
    code: "ECPC-405",
    name: "Advanced Mobile Communication",
    type: "Theory",
    hoursVenue: "3 Hours/Week, LT-102",
    semester: "B.Tech-ECE-7",
    description: "Advanced course covering modern mobile communication technologies including 4G, 5G, and emerging wireless technologies.",
    instructor: "Dr. Rohit Singh",
    credits: 3,
    prerequisites: ["Wireless Communication", "Digital Signal Processing"],
    learningOutcomes: [
      "Understand advanced mobile communication architectures",
      "Analyze 4G and 5G technologies and their performance",
      "Design mobile communication systems for specific applications",
      "Evaluate emerging technologies in mobile communications"
    ],
    timeline: [
      {
        sno: 1,
        date: "2025-01-17",
        title: "Evolution of Mobile Communication Systems",
        description: "From 1G to 5G: technological evolution and future trends",
        status: "completed",
        resources: [
          { type: "pdf", url: "#", name: "AMC Lecture 1.pdf", description: "Mobile evolution overview" },
          { type: "ppt", url: "#", name: "Mobile Evolution.pptx", description: "Presentation slides" },
          { type: "link", url: "#", name: "3GPP Standards", description: "Official 3GPP documentation" }
        ]
      },
      {
        sno: 2,
        date: "2025-01-24",
        title: "LTE Architecture and Protocols",
        description: "Long Term Evolution system architecture and protocol stack",
        status: "completed",
        resources: [
          { type: "pdf", url: "#", name: "LTE Architecture.pdf", description: "LTE system design" },
          { type: "ppt", url: "#", name: "LTE Protocols.pptx", description: "Protocol stack presentation" }
        ]
      },
      {
        sno: 3,
        date: "2025-01-31",
        title: "5G New Radio and Architecture",
        description: "5G NR specifications, network slicing, and use cases",
        status: "current",
        resources: [
          { type: "pdf", url: "#", name: "5G NR Overview.pdf", description: "5G New Radio fundamentals" },
          { type: "video", url: "#", name: "5G Demo.mp4", description: "5G technology demonstration" }
        ]
      }
    ],
    syllabus: [
      {
        unit: "Unit 1: Mobile System Evolution",
        topics: ["1G to 5G evolution", "System requirements", "Standardization"],
        duration: "8 hours"
      },
      {
        unit: "Unit 2: 4G LTE Technology",
        topics: ["LTE architecture", "OFDMA/SC-FDMA", "LTE Advanced"],
        duration: "12 hours"
      },
      {
        unit: "Unit 3: 5G and Beyond",
        topics: ["5G NR", "Network slicing", "IoT integration", "6G vision"],
        duration: "10 hours"
      }
    ],
    assessmentPattern: [
      { component: "Mid Semester Exam", weightage: 30 },
      { component: "End Semester Exam", weightage: 50 },
      { component: "Project/Presentation", weightage: 20 }
    ],
    textbooks: [
      {
        title: "LTE-Advanced and 5G Wireless Communications",
        author: "Toni Janevski",
        publisher: "IET",
        year: 2019
      }
    ]
  }
];

// Helper function to convert course name to URL-friendly slug
export function createSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim(); // Remove leading/trailing spaces
}

// Helper function to find course by title slug
export function findCourseByTitle(titleSlug: string): OngoingCourse | undefined {
  return ongoingCourses.find(course => 
    createSlugFromTitle(course.name) === titleSlug
  );
}

// Get all course slugs for static generation
export function getAllCourseSlugs(): string[] {
  return ongoingCourses.map(course => createSlugFromTitle(course.name));
}
