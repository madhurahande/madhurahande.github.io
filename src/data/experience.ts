export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  start: string;
  end: string;
  highlights: string[];
  achievements?: { title: string; date: string; certificateUrl?: string }[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Team Member',
    company: 'Robotics Research Lab, GCOEARA',
    companyUrl: 'https://rrlgcoeara.in/',
    logo: '/img/robotics_research_lab_logo.jpeg',
    start: 'August 2019',
    end: 'August 2021',
    highlights: [
      'Collaborated with 25+ students on ABU Asia-Pacific Robot Contests, improving team productivity by 25%.',
      'Mentored juniors on competition projects and academic applications.',
    ],
    achievements: [
      {
        title: 'All India Rank 6 — DD Robocon',
        date: 'August 2021',
        certificateUrl: '/img/certificates/Robocon2021.jpeg',
      },
      {
        title: 'All India Rank 14 — DD Robocon',
        date: 'October 2020',
        certificateUrl: '/img/certificates/Robocon2020.jpeg',
      },
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'MNC Automation and Services India Pvt Ltd',
    companyUrl: 'https://www.linkedin.com/company/mncas/',
    logo: '/img/mncas_logo.jpeg',
    start: 'January 2022',
    end: 'March 2022',
    highlights: [
      'Designed and tested industrial control panels and PLC-based automation systems.',
      'Developed ladder logic for automated manufacturing systems.',
    ],
  },
  {
    role: 'Embedded Systems Intern',
    company: 'Noccarc Robotics',
    companyUrl: 'https://www.noccarc.com/',
    logo: '/img/noccarc_logo.jpeg',
    start: 'October 2023',
    end: 'July 2024',
    highlights: [
      'Developed physiological monitoring algorithms achieving 98% accuracy with 2% deviation.',
      'Designed automated PCB test fixtures, improving test coverage and reducing manual effort by 70%.',
      'Contributed to prototype firmware with medical-grade sensor calibration and data processing.',
      'Validated hardware using oscilloscopes, logic analyzers, and JTAG tools.',
    ],
  },
  {
    
    role: 'Embedded Software Engineer',
    company: 'Noccarc Robotics',
    companyUrl: 'https://www.noccarc.com/',
    logo: '/img/noccarc_logo.jpeg',
    start: 'July 2024',
    end: 'Present',
    highlights: [
      'Developed and optimized embedded firmware for patient monitors and ventilators, ensuring compliance with IEC medical standards.',
      'Designed scalable, modular firmware architecture for easy integration of new features and future upgrades.',
      'Engineered real-time data acquisition for NIBP, IBP, ECG, temperature, and capnography modules.',
      'Conducted hardware–software integration testing, reducing system errors by 30% through rigorous validation.',
      'Implemented UART, SPI, and I2C communication protocols for real-time sensor data processing.',
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  institutionUrl?: string;
  logo?: string;
  start: string;
  end: string;
  details: string[];
  achievements?: { title: string; date: string; certificateUrl?: string }[];
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering (BE), Instrumentation & Control',
    institution: 'Government College of Engineering & Research, Avasari, Pune (SPPU)',
    institutionUrl: 'https://gcoeara.ac.in/',
    logo: '/img/govt-college-logo.png',
    start: 'August 2019',
    end: 'June 2023',
    details: [
      'CGPA: 8.74 — First Class with Distinction',
      'Top 5 students in class for all four years',
    ],
    achievements: [
      {
        title: 'Rank 10 — SPPU I&C Department',
        date: 'June 2023',
      },
      {
        title: 'Rank 2 — COEP I2I Competition',
        date: 'June 2022',
        certificateUrl: '/img/certificates/COEP I2I competition.jpeg',
      },
    ],
  },
];

export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  logo?: string;
  description: string;
  lessons: string;
  achievements?: {
    title: string;
    certificateUrl?: string;
  }[];
}

export const journey: JourneyItem[] = [
  {
    year: "2019",

    title: "Bachelor of Engineering",
    subtitle:
      "Government College of Engineering & Research, Pune",

    logo: "/img/govt-college-logo.png",

    description:
      "Started my journey in Instrumentation & Control Engineering, building a strong foundation in electronics, control systems, embedded programming, sensors, and instrumentation.",

    lessons:
      "Discovered my interest in embedded systems by understanding how software interacts with physical hardware.",

    achievements: [
      {
        title: "SPPU Rank 10"
      }
    ]
  },

  {
    year: "2019–2021",

    title: "Robotics Research Lab",

    subtitle:
      "DD Robocon",

    logo:
      "/img/robotics_research_lab_logo.jpeg",

    description:
      "Worked on competition robotics, embedded firmware, custom PCBs, motor control, and multidisciplinary system integration while participating in two national Robocon seasons.",

    lessons:
      "Learned systems thinking, rapid prototyping, and how embedded software, electronics, and mechanics come together to build real robots.",

    achievements: [
      {
        title: "AIR 14 — DD Robocon 2020"
      },
      {
        title: "AIR 6 — DD Robocon 2021"
      }
    ]
  },

  {
    year: "2022",

    title:
      "Engineering Intern",

    subtitle:
      "MNC Automation",

    logo:
      "/img/mncas_logo.jpeg",

    description:
      "Designed industrial control panels, PLC-based automation systems, and ladder logic for manufacturing applications.",

    lessons:
      "Developed an appreciation for industrial automation and practical control systems."
  },

  {
    year:
      "2023",

    title:
      "Embedded Software Intern",

    subtitle:
      "Noccarc Robotics",

    logo:
      "/img/noccarc_logo.jpeg",

    description:
      "Transitioned into medical device firmware development, contributing to patient monitors, ventilators, and manufacturing validation.",

    lessons:
      "Learned the discipline required to develop reliable software for safety-critical embedded systems."
  },

  {
    year:
      "2024–Present",

    title:
      "Embedded Systems Engineer",

    subtitle:
      "Noccarc Robotics",

    logo:
      "/img/noccarc_logo.jpeg",

    description:
      "Leading firmware development across multiple medical device platforms including Patient Monitor NX5, Ventilator V730i, and Humidifier RH07, with responsibilities spanning firmware architecture, clinical algorithms, hardware integration, debugging, and validation.",

    lessons:
      "Gained confidence in owning complete embedded systems while balancing reliability, maintainability, and product delivery."
  }
];

export const skillGroups = [
  {
    title: 'Firmware & Software',
    skills: ['Embedded C/C++', 'Python', 'RTOS', 'Embedded Linux'],
  },
  {
    title: 'Hardware & Platforms',
    skills: ['STM32', 'ATmega', 'PCB Design (Altium, Eagle)', 'Sensors & Actuators'],
  },
  {
    title: 'Protocols & Systems',
    skills: ['SPI', 'I2C', 'UART', 'CAN', 'USB', 'Control Systems', 'Signal Processing'],
  },
  {
    title: 'Domain',
    skills: ['Medical Device Firmware', 'IEC 60601', 'Robotics', 'Real-time Systems'],
  },
];

export const languages = ['English', 'Hindi', 'Marathi', 'Japanese'];

export const researchInterests = [
  'Embedded systems for safety-critical and medical applications',
  'Real-time signal processing and sensor fusion',
  'Robotic locomotion, control, and autonomous systems',
  'Hardware–software co-design for biomedical instrumentation',
  'Low-latency communication architectures in distributed embedded systems',
];
