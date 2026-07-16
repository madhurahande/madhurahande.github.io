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
      // 'Collaborated with 25+ students on ABU Asia-Pacific Robot Contests, improving team productivity by 25%.',
      // 'Mentored juniors on competition projects and academic applications.',
      'Outside the classroom, I joined the Robotics Research Lab, where I gained hands-on experience building real robotic systems under demanding competition timelines. Over two DD Robocon seasons, I progressed from contributing to robot development to leading the embedded system development of the autonomous competition robot.',
    ],
    achievements: [
      {
        title: 'Contributed to the three-wheel omni-drive robot',
        date: '2019 - 2020',
      },
      {
        title: 'All India Rank 14 — DD Robocon',
        date: 'October 2020',
        certificateUrl: '/img/certificates/Robocon2020.jpeg',
      },
      {
        title: 'Key developer for the autonomous swerve-drive robot',
        date: '2020 - 2021',
      },
      {
        title: 'Designed a custom PCB integrating the controller, motor drivers, sensors, and supporting electronics',
        date: '2020 - 2021',
      },
      {
        title: 'All India Rank 6 — DD Robocon',
        date: 'August 2021',
        certificateUrl: '/img/certificates/Robocon2021.jpeg',
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
      // 'Designed and tested industrial control panels and PLC-based automation systems.',
      // 'Developed ladder logic for automated manufacturing systems.',
      'My first industry experience introduced me to industrial automation, PLC programming, and control panel design. It gave me practical exposure to engineering workflows and demonstrated how embedded and control systems are applied in manufacturing environments.',
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
      // 'Developed physiological monitoring algorithms achieving 98% accuracy with 2% deviation.',
      // 'Designed automated PCB test fixtures, improving test coverage and reducing manual effort by 70%.',
      // 'Contributed to prototype firmware with medical-grade sensor calibration and data processing.',
      // 'Validated hardware using oscilloscopes, logic analyzers, and JTAG tools.',
      'I transitioned into the medical device industry, working on firmware for patient monitoring systems. This role introduced me to safety-critical embedded development, hardware validation, physiological signal processing, and regulatory engineering practices.',
    ],
    achievements: [
      {
        title: 'Developed firmware and physiological algorithms',
        date: '',
        certificateUrl: '',
      },
      {
        title: 'Built automated PCB testing solutions',
        date: '',
        certificateUrl: '',
      },
      {
        title: 'Validated embedded hardware and prototypes',
        date: '',
        certificateUrl: '',
      },
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
      // 'Developed and optimized embedded firmware for patient monitors and ventilators, ensuring compliance with IEC medical standards.',
      // 'Designed scalable, modular firmware architecture for easy integration of new features and future upgrades.',
      // 'Engineered real-time data acquisition for NIBP, IBP, ECG, temperature, and capnography modules.',
      // 'Conducted hardware–software integration testing, reducing system errors by 30% through rigorous validation.',
      // 'Implemented UART, SPI, and I2C communication protocols for real-time sensor data processing.',
      // 'Owning end-to-end embedded product development.',

      'Today, I develop embedded software for critical-care medical devices, including the Patient Monitor NX5, Ventilator V730i, and Humidifier RH07. My work spans the complete development lifecycle—from firmware architecture and clinical algorithms to hardware integration, debugging, validation, manufacturing support, and product releases. Working on regulated medical devices has strengthened my understanding of designing reliable, safety-critical embedded systems.',
      // 'Today, I develop firmware for critical-care medical devices, including the Patient Monitor NX5, Ventilator V730i, and Humidifier RH07. My work spans complete product development—from embedded firmware and clinical algorithms to hardware integration, debugging, system validation, and manufacturing support.',

      // 'Beyond implementing features, I enjoy understanding complete systems, solving complex engineering problems, and building reliable products that directly impact patient care.',
    ],
    achievements: [
      {
        title: 'Led the end-to-end firmware development of multiple modules for the Patient Monitor NX5, including clinical algorithms, hardware integration, and validation.',
        date: '   ',
        certificateUrl: '',
      },
      {
        title: 'Developed firmware for the Ventilator V730i and Humidifier RH07, contributing across product development, debugging, integration, and manufacturing support.',
        date: '   ',
        certificateUrl: '',
      },
      {
        title: 'Designed automated PCB test fixtures to improve manufacturing efficiency and hardware validation.',
        date: '   ',
        certificateUrl: '',
      },
      {
        title: 'Worked extensively with STM32 microcontrollers, real-time embedded software, communication protocols, and physiological signal processing.',
        date: '   ',
        certificateUrl: '',
      },
      {
        title: 'Collaborated closely with hardware engineers, clinicians, QA teams, and manufacturing to deliver production-ready medical devices.',
        date: '   ',
        certificateUrl: '',
      },
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
      // 'CGPA: 8.74 — First Class with Distinction',
      // 'Top 5 students in class for all four years',
      'My engineering journey began with Instrumentation & Control Engineering, where I built a strong foundation in electronics, embedded programming, sensors, control systems, and signal processing. During this time, I discovered that my greatest interest lay in embedded systems—the intersection of hardware and software that enables intelligent devices.',
    ],
    achievements: [
      {
        title: 'Rank 2 — COEP I2I Competition',
        date: 'June 2022',
        certificateUrl: '/img/certificates/COEP I2I competition.jpeg',
      },
      {
        title: 'First Class with Distinction',
        date: 'June 2023',
        certificateUrl: '/img/certificates/degree.jpeg',
      },
      {
        title: 'Rank 10 — SPPU Instrumentation & Control',
        date: 'June 2023',
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
    title: 'Programming',
    skills: ['Embedded C', 'C/C++', 'Python', 'RTOS'],
  },
  {
    title: 'Hardware & Platforms',
    skills: ['STM32', 'ATmega', 'MSP430'], // 'PCB Design (Altium, Eagle)', 'Sensors & Actuators'],
  },
  {
    title: 'Operating Systems & RTOS',
    skills: ['Linux', 'Windows', 'MSP430', ' FreeRTOS', ' CMSIS-RTOS', ' bare-metal development'],
  },
  {
    title: 'Design & Integration',
    skills: ['PCB design', 'MotorDrivers', 'Pneumatic Actuators', ' PID control', 'Control System'],
  },
  {
    title: 'Communication Protocols',
    skills: ['SPI', 'I2C', 'UART', 'CAN', 'USB', 'RS485', 'One-wire'],
  },
  {
    title: 'Interfaces',
    skills: ['ADC', 'DAC', 'DMA', 'PWM', 'Timers', 'GPIO', 'interrupts'],
  },
  {
    title: 'Domain',
    skills: ['Medical Device', 'Robotics', 'Real-time Systems'],
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