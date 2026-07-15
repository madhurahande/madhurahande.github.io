export type ProjectCategory = 'medical' | 'robotics' | 'academic';

export interface Project {

  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  featured?: boolean;
  // image?: string[];
  images?: {
  src: string;
  caption?: string;
  }[];
  organization?: string;
  year?: string;
  tags: string[];
  overview: string;
  role: string[];
  engineeringHighlights: string[];
  challenges: string[];
  impact: string[];
  learnings:string[];
  technologies: {
    languages: string[];
    microcontrollers: string[];
    protocols: string[];
    tools: string[];
    concepts: string[];
  };
}

export const categoryLabels: Record<ProjectCategory, string> = {
  medical: 'Medical Devices',
  robotics: 'Robotics',
  academic: 'Academic',
};

export const projects: Project[] = [
  {
    slug: 'patient-monitor',
    title: 'Patient Monitor NX5',
    summary:
      'A multi-parameter patient monitoring system for continuous real-time monitoring of vital physiological parameters in critical and general care environments.',
    category: 'medical',
    images: [
      // {src: '/img/portfolio/NX5.jpeg'},
      {src: '/img/portfolio/NX5_1.jpg'},
      {src: '/img/portfolio/NX5_2.jpg'},
      // {src: '/img/portfolio/swerve2020.png'},
    ],
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – 2026',
    tags: ['IEC 60601', 'Real-Time Embedded System', 'Biomedical Signal Processing', 'Hardware-Software Integration', 'Modular Firmware Architecture', 'Medical Device Firmware', 'Battery Management System (BMS)', 'Power Management'],
    overview:
    'Patient Monitor NX5 is a next-generation multi-parameter patient monitoring system developed at Noccarc Robotics for continuous monitoring of vital physiological parameters in clinical environments. The system integrates multiple sensing modules—including ECG, Respiration, NIBP, SpO₂, Temperature, and Capnography—to provide accurate, real-time patient monitoring while meeting stringent medical device reliability and safety requirements.',
    role:[ 
    'I led the end-to-end firmware development of the Patient Monitor NX5 across multiple physiological monitoring modules. My work included firmware architecture, implementation of clinical algorithms, hardware-software integration, power management, validation, debugging, and system optimization. I collaborated closely with hardware engineers, production teams, and clinicians throughout the product development lifecycle.',
    ],
    engineeringHighlights:[
      'Owned the end-to-end firmware and clinical analysis development for the Patient Monitor NX5 across multiple physiological monitoring modules, excluding the ECG module.',
      'Developed firmware and clinical algorithms for NIBP, Respiration, Temperature, and other physiological monitoring modules.',
      'Designed and integrated communication interfaces between embedded modules and the main processing system.',
      'Contributed to firmware development for the Power Management Board, including Battery Management System (BMS) integration and charger IC configuration.',
      'Integrated embedded firmware with analog front-end hardware and sensing modules.',
      'Performed board bring-up, debugging, validation, and system optimization using oscilloscopes, logic analyzers, and embedded debugging tools.',
      'Collaborated with clinicians to refine and validate physiological measurement algorithms.',
    ],
    challenges:[
      'Developing firmware for a multi-parameter patient monitor required coordinating multiple sensing modules, clinical algorithms, communication interfaces, and power management within a single real-time embedded platform. Ensuring reliable operation across evolving hardware revisions while maintaining measurement accuracy, low latency, and modular firmware architecture required extensive debugging, validation, and close collaboration across hardware, production, and clinical teams.',
    ],
    impact:[
      'Delivered production-ready firmware for the majority of the Patient Monitor NX5 subsystems.',
      'Enabled reliable physiological monitoring through robust firmware architecture and clinical algorithm implementation.',
      'Strengthened system reliability through hardware-software integration, validation, and systematic debugging.',
      'Supported successful product development through close collaboration with hardware, manufacturing, and clinical teams.',
    ],
    learnings:[
      'The Patient Monitor NX5 taught me how to engineer large embedded systems rather than individual firmware modules. Taking ownership of multiple subsystems required balancing architecture, real-time performance, hardware integration, clinical accuracy, and maintainability while collaborating across multidisciplinary teams. This experience fundamentally shaped how I approach embedded system design—from understanding individual components to thinking about the complete system.',
    ],
    technologies: {
      languages: ['C', 'C++', 'Python'],
      microcontrollers: ['STM32 ARM Cortex-M'],
      protocols: ['SPI', 'UART', 'I2C', 'ADC', 'DMA', 'GPIO', 'Timers'],
      tools: ['CMSIS', 'Git', 'Oscilloscope', 'Logic Analyzer', 'ST Link'],
      concepts: [
        'Real-Time Embedded Systems',
        'Biomedical Signal Processing',
        'Hardware-Software Integration',
        'Modular Firmware Architecture',
        'Medical Device Firmware',
        'Battery Management System (BMS)',
        'Power Management'
      ],
    },
  },
    {
    slug: 'ventilator',
    title: 'Ventilator V730i',
    summary:
      'A critical-care mechanical ventilator designed to provide precise respiratory support and continuous monitoring for patients requiring assisted ventilation.',
    category: 'medical',
    images: [
      {src: '/img/portfolio/Noccarc-V730i-ICU-Ventilator.jpg'},
      {src: '/img/portfolio/V730i.jpg'},
      // {src: '/img/portfolio/swerve2020.png'},
    ],
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – now',
    tags: ['IEC 60601', 'Real-Time Embedded Systems', 'Volumetric Capnography', 'Hardware Integration', 'Medical Device Development', 'Power Distribution'],
    overview:
    'The Ventilator V730i is a critical-care mechanical ventilator designed to provide precise respiratory support across a wide range of clinical conditions. My work focused on firmware development for respiratory monitoring, embedded power management, and hardware validation, contributing to the reliability and safety of a life-support system.',
    role:[ 
    'As an Embedded Systems Engineer, I contributed to firmware development and hardware integration for the Ventilator V730i. My responsibilities included developing the Volumetric Capnography module, supporting the Power Distribution Board firmware, debugging hardware-software interactions, and developing automated PCB validation tools.',
    ],
    engineeringHighlights:[
      'Developed firmware for Volumetric Capnography, enabling real-time analysis of respiratory gases and breath-by-breath monitoring.',
      'Implemented algorithms for respiratory waveform processing and volumetric CO₂ calculations.',
      'Contributed to firmware development for the Power Distribution Board, supporting reliable power sequencing and distribution across the ventilator.',
      'Designed and developed firmware for automated PCB test jigs, improving hardware validation during manufacturing.',
      'Performed board bring-up, firmware debugging, and hardware-software integration using oscilloscopes, logic analyzers, and debugging tools.',
    ],
    challenges:[
      'Developing firmware for a life-support device required balancing accuracy, reliability, and fault tolerance while integrating multiple hardware subsystems. Power management presented additional challenges, requiring careful configuration and validation of battery charging, protection mechanisms, and power distribution to ensure stable operation under varying conditions. Hardware debugging and manufacturing validation demanded close collaboration across firmware, hardware, and production teams.',
    ],
    impact:[
      'Strengthened the reliability of respiratory monitoring through robust firmware implementation. Contributed to safe and reliable embedded power management for critical-care equipment. Improved manufacturing efficiency through automated PCB validation tools. Supported cross-functional product development from hardware bring-up through system validation.',
    ],
    learnings:[
      'Working on the Ventilator V730i broadened my understanding of embedded systems beyond sensing and signal processing. I gained experience in embedded power management, learning how battery charging, power distribution, and hardware reliability directly influence the safety and availability of critical-care devices. The project reinforced the importance of systematic debugging, cross-functional collaboration, and designing firmware that remains dependable under real-world operating conditions.',
    ],
      technologies: {
      languages: ['C', 'C++', 'Python'],
      microcontrollers: ['STM32 ARM Cortex-M'],
      protocols: ['SPI', 'UART', 'I2C', 'ADC', 'DMA', 'GPIO', 'Timers'],
      tools: ['CMSIS', 'Git', 'Oscilloscope', 'Logic Analyzer', 'ST Link'],
      concepts: [
        'Real-Time Embedded Systems',
        'Volumetric Capnography',
        'Hardware Integration',
        'Medical Device Development',
        'Power Distribution'
      ],
    },
  },
  {
    slug: 'humidifier',
    title: 'Humidifier RH07',
    summary:
      'A medical respiratory humidifier that delivers heated and humidified air to improve patient comfort and protect airways during oxygen therapy and mechanical ventilation.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2026',
    tags: ['IEC 60601', 'Embedded Firmware', 'Closed-Loop Temperature Control', 'Sensor Integration', 'Hardware-Software Integration', 'Embedded System Validation', 'Medical Device Development'],
    overview:
    'Humidifier RH07 is a medical respiratory humidification system designed to deliver heated and humidified air during respiratory therapy. The device continuously monitors and regulates temperature to ensure safe and comfortable patient care while maintaining reliable operation in a clinical environment.',
    role:[ 
    'I independently developed the embedded firmware for the Humidifier RH07, taking ownership from firmware architecture and implementation through hardware integration, validation, debugging, and production readiness. I collaborated closely with hardware engineers throughout the development lifecycle to ensure reliable system performance and successful product integration.',
    ],
    engineeringHighlights:[
      'Designed and developed the complete embedded firmware for the Humidifier RH07.',
      'Implemented temperature monitoring and closed-loop control algorithms for stable and accurate humidification.',
      'Integrated sensors, peripherals, and hardware interfaces with the embedded firmware.',
      'Developed firmware for user interaction, system monitoring, and fault handling.',
      'Performed board bring-up, firmware debugging, and hardware-software integration.',
      'Led firmware validation, functional testing, and issue resolution throughout the development cycle.',
      'Successfully delivered a production-ready firmware solution within an accelerated development timeline of approximately 75 days.',   
    ],
    challenges:[
      'Developing an entire embedded application within a compressed timeline required balancing rapid implementation with software quality and reliability. The project involved continuous hardware-software integration, debugging evolving hardware revisions, validating system behavior under different operating conditions, and ensuring stable temperature regulation while maintaining a clean and maintainable firmware architecture.',
    ],
    impact:[
      'Delivered the complete firmware for a production-ready medical humidifier.',
      'Enabled reliable temperature regulation and stable device operation through robust firmware implementation.',
      'Accelerated product development by rapidly resolving firmware and hardware integration issues.',
      'Contributed to successful product validation and readiness for manufacturing.',    
    ],
    learnings:[
      'The Humidifier RH07 project strengthened my ability to deliver reliable embedded software within aggressive development timelines. I learned how effective collaboration, systematic debugging, and iterative testing are essential when rapidly transforming hardware prototypes into production-ready medical devices. The experience also reinforced the importance of balancing development speed with reliability and maintainability in embedded system design.',
    ],
    technologies: {
      languages: ['C', 'Embedded C'],
      microcontrollers: ['STM32 ARM Cortex-M'],
      protocols: ['ADC', 'DMA', 'GPIO', 'Timers', 'PWM'],
      tools: ['HAL', 'CMSIS', 'Git', 'Oscilloscope', 'Logic Analyzer', 'ST Link'],
      concepts: [
        'Embedded Firmware',
        'Closed-Loop Temperature Control',
        'Sensor Integration',
        'Hardware-Software Integration',
        'Embedded System Validation',
        'Medical Device Development',
      ],
    },
  },
  {
    slug: 'robocon',
    title: 'DD Robocon Competition Robots',
    summary:
      'Holonomic drive robots with omni-wheel/mecanum drive for theme-specific competition tasks.',
    category: 'robotics',
    images: [
      {src: '/img/portfolio/rrl2019a.jpg'},
      {src: '/img/portfolio/rrl2019b.jpg'},
      {src: '/img/portfolio/swerve2020.png'},
      {src: '/img/portfolio/mecanum2020.png'},
    ],
    organization: 'Robotics Research Lab, GCOEARA',
    year: '2019 - 2021',
    tags: ['Embedded system', 'Autonomous Robots', 'Holonomic Drive', 'Swerve Drive', 'PID Control', 'System Integration', 'Path Planning', 'Task Planning',],
    overview:
      'DD Robocon is India\'s premier robotics competition, where multidisciplinary teams design robots to complete complex autonomous and manual tasks under strict engineering constraints. Over two consecutive seasons, I progressed from contributing to robot development in 2020 to leading the embedded system development of the autonomous competition robot in 2021, helping the team improve from AIR 14 to AIR 6 nationally.',
    role: [
      'In 2020, I contributed to the development of a three-wheel omni-drive robot, focusing on embedded software and task execution planning. In 2021, I became the key developer for the autonomous swerve-drive robot, leading its embedded system development, task execution logic, system integration, and custom PCB design.',
    ],
    engineeringHighlights: [
      'Developed the embedded software for the autonomous swerve-drive competition robot.',
      'Designed task execution and autonomous control logic for theme-specific competition challenges.',
      'Designed a custom PCB integrating the microcontroller, motor drivers, sensors, and supporting electronics.',
      'Integrated hardware, embedded firmware, sensors, and mechanical subsystems into a complete robotic platform.',
      'Contributed to the development and task execution planning of the three-wheel omni-drive robot during the 2020 season.',
      'Performed extensive system testing, debugging, and competition validation.',
      'Contributed to achieving AIR 14 (2020) and AIR 6 (2021) in DD Robocon.',
    ],
    challenges: [
      'Building reliable competition robots within tight deadlines required rapid iteration across hardware, firmware, and mechanical design. Developing the autonomous swerve-drive robot involved coordinating multiple subsystems while ensuring accurate navigation, robust task execution, and reliable performance under competition conditions.',
    ],
    impact: [
      'Led the embedded system development of the autonomous robot that contributed to the team securing AIR 6 in DD Robocon 2021.',
      'Contributed to two consecutive nationally ranked DD Robocon robots.',
      'Developed practical expertise in autonomous robotics, embedded system design, and multidisciplinary system integration.',
    ],
    learnings: [
      'Working on DD Robocon transformed my understanding of robotics from individual components to complete autonomous systems. Leading the 2021 robot taught me how embedded software, electronics, control, and mechanical design must come together to build a reliable robot capable of performing under demanding real-world conditions.',
    ],
    technologies: {
      languages: ['C', 'Embedded C'],
      microcontrollers: ['STM32 ARM Cortex-M'],
      protocols: ['ADC', 'DMA', 'GPIO', 'Timers', 'PWM'],
      tools: ['HAL', 'CMSIS', 'Git', 'Oscilloscope', 'Logic Analyzer', 'ST Link'],
      concepts: [
        'Embedded system',
        'Robotics',
        'Holonomic Drive',
        'Swerve Drive',
        'PID Control',
        'Path Planning',
      ],
    },
  },
  {
    slug: 'robotic-hand-prosthesis',
    title: 'Robotic Hand Prosthesis',
    summary:
      'Muscle-controlled prosthetic hand using EMG signal processing for intuitive movement.',
    category: 'academic',
    images: [
      {src: '/img/portfolio/bionichand0.png'},
      {src: '/img/portfolio/Robotic_hand3.jpeg'},
    ],
    organization: 'GCOEARA',
    year: '2022',
    tags: ['Embedded system', 'Biomedical signal processing', 'EMG signal Acquisition', 'Human - Machine Interaction', 'Motor Control'],
    overview:
    "The Robotic Hand Prosthesis is a proof-of-concept assistive device that demonstrates how embedded systems can translate human muscle activity into physical movement. Using EMG (Electromyography) signals acquired from the forearm, the system controls a robotic hand in real time, showcasing the integration of biomedical sensing, embedded firmware, and electromechanical actuation.",
    role:[ 
    "I led the project from concept to prototype, coordinating system design while developing the embedded firmware, EMG signal acquisition pipeline, motor control logic, hardware integration, and system validation. I also guided the team's technical direction throughout development, from prototype design to competition demonstration.",
    ],
    engineeringHighlights:[
      'Led the development of an EMG-controlled robotic prosthetic hand prototype',
      'Developed embedded firmware for real-time EMG signal acquisition and processing.',
      'Implemented digital filtering techniques to improve signal quality and reduce noise.',
      'Designed motor control logic to translate muscle activity into prosthetic hand movement.',
      'Integrated EMG sensors, embedded electronics, and actuators into a functional prototype.',
      'Validated system performance through repeated testing and functional evaluation.',
      'Achieved 2nd Place at the COEP Tech I2I Competition.',
    ],
    challenges:[
      'Designing a responsive prosthetic hand required integrating biomedical sensing, embedded software, and electromechanical hardware into a reliable prototype. Interpreting noisy EMG signals while maintaining responsive motor control demanded careful filtering, iterative testing, and continuous refinement of both hardware and firmware.',
    ],
    impact:[
      'Successfully demonstrated a working EMG-controlled prosthetic hand prototype.',
      "Secured 2nd Place at the COEP Tech I2I Competition for the project's technical innovation.",
      'Demonstrated the feasibility of combining biomedical signal acquisition with embedded control for assistive technology.',
      'Strengthened interdisciplinary collaboration across embedded systems, electronics, and biomedical engineering.',
    ],
    learnings:[
      "This project introduced me to biomedical engineering and showed how embedded systems can directly improve people's lives. Beyond firmware development, I learned how successful assistive technologies require close integration of sensing, electronics, mechanics, and software. Leading the project also strengthened my ability to coordinate technical decisions, iterate on prototypes, and translate theoretical concepts into a functional engineering solution.",
    ],
    technologies: {
      languages: ['C', 'Embedded C'],
      microcontrollers: ['STM32 ARM Cortex-M'],
      protocols: ['ADC', 'DMA', 'GPIO', 'Timers', 'PWM'],
      tools: ['HAL', 'CMSIS', 'Git', 'Oscilloscope', 'Logic Analyzer', 'ST Link'],
      concepts: [
        'Embedded system',
        'Biomedical signal processing',
        'EMG signal Acquisition',
        'Human - Machine Interaction',
        'Motor Control',
      ],
    },
  },
  {
    slug: 'ball-balancing-robot',
    title: 'Ball Balancing Robot',
    summary:
      'Self-balancing robot with PID control for real-time stability on a spherical wheel.',
    category: 'academic',
    images: [
      {src: '/img/portfolio/ballbot2.jpeg'},
      {src: '/img/portfolio/ballbot.jpeg'},
    ],
    organization: 'GCOEARA',
    year: '2022',
    // tags: [ 'Real-time control system', 'PID Control', 'Sensor Integration', 'Electromechanical Integration'],
    tags: ['Control Systems', 'PID Control', 'IMU', 'Real-Time Systems', 'Motion Control'
    ],
    overview:
      'The Ball Balancing Robot is a dynamically stable mobile robot that balances on a single spherical wheel using real-time feedback control. Developed as an interdisciplinary project between the Instrumentation & Control and Automobile Engineering departments, it demonstrated the practical implementation of embedded control systems for unstable dynamic platforms.',
   role: [
      'Led an interdisciplinary team of eight students and was responsible for the robot’s embedded software, control system implementation, IMU integration, controller tuning, system integration, and experimental validation.',
    ],
    engineeringHighlights: [
      'Implemented a real-time PID feedback controller for dynamic balancing.',
      'Integrated IMU sensing with embedded motion control.',
      'Tuned controller parameters through iterative testing and experimental validation.',
      'Developed firmware for sensor acquisition, actuator control, and system coordination.',
      'Integrated mechanical, electronic, and embedded subsystems into a functional prototype.',
    ],
    challenges: [
      'Achieving stable balancing required carefully tuning the controller while accounting for sensor noise, actuator response, and the nonlinear dynamics of an inherently unstable system. Coordinating software development with evolving mechanical design added further complexity throughout the project.',
    ],
    impact: [
      'Successfully demonstrated stable real-time balancing on a single spherical wheel.',
      'Delivered a complete interdisciplinary robotic system from concept to prototype.',
      'Strengthened collaboration between Instrumentation & Control and Automobile Engineering teams.',
    ],
   learnings: [
      'This project taught me how theoretical control concepts translate into real-world embedded systems. Leading an interdisciplinary team also strengthened my ability to coordinate technical work, make engineering decisions, and iterate rapidly through experimentation until the system achieved reliable performance.',
    ],
    technologies: {
      languages: ['C', 'Embedded C'],
      microcontrollers: ['STM32 ARM Cortex-M'],
      protocols: ['ADC', 'DMA', 'GPIO', 'Timers', 'PWM'],
      tools: ['HAL', 'CMSIS', 'Git', 'Oscilloscope', 'Logic Analyzer', 'ST Link'],
      concepts: [
        'Real-time control system',
        'PID Control',
        'Sensor Integration',
        'Electromechanical Integration',
      ],
    },
  },
  // {
  //   slug: 'quadcopter',
  //   title: 'Quadcopter',
  //   summary:
  //     'PID-stabilized quadcopter with IMU-based flight control and wireless communication.',
  //   category: 'academic',
  //   image: '/img/portfolio/drone1.jpeg',
  //   organization: 'GCOEARA',
  //   year: '2022',
  //   tags: ['IMU', 'PID', 'Flight Control'],
  //   highlights: [
  //     'Designed a quadcopter with brushless motors and ESCs for stable flight control.',
  //     'Implemented PID-based flight stabilization using IMU sensors (accelerometer and gyroscope).',
  //     'Integrated wireless communication and explored autonomous flight modes including altitude hold.',
  //   ],
  // },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
