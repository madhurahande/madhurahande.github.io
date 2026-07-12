export type ProjectCategory = 'medical' | 'robotics' | 'academic';

export interface Project {

  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  featured?: boolean;
  image?: string[];
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
      'Real-time ECG signal acquisition and processing firmware with medical-grade accuracy.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – 2026',
    tags: ['IEC 60601', 'Signal Processing', 'STM32', 'Real-time'],
    overview:
    'Patient Monitor NX5 is a next-generation multi-parameter patient monitoring system developed at Noccarc Robotics for continuous monitoring of vital physiological parameters in clinical environments. The system integrates multiple sensing modules—including ECG, Respiration, NIBP, SpO₂, Temperature, and Capnography—to provide accurate, real-time patient monitoring while meeting stringent medical device reliability and safety requirements.',
    role:[ 
    'As an Embedded Systems Engineer, I contributed to the end-to-end firmware development of the Patient Monitor NX5. My responsibilities included developing firmware for physiological monitoring modules, implementing communication interfaces, integrating hardware with software, improving signal processing pipelines, supporting system validation, and collaborating closely with hardware engineers, production teams, and clinicians throughout the product development lifecycle.',
    ],
    engineeringHighlights:[
      'Developed firmware for ECG, Respiration, Temperature, NIBP, and Capnography modules.',
      'Implemented real-time data acquisition and embedded signal processing pipelines.',
      'Integrated analog front-end hardware with STM32-based embedded firmware.',
      'Designed modular firmware architecture for scalable feature integration.',
      'Debugged hardware-software interactions using oscilloscopes, logic analyzers, and ST-Link.',
      'Contributed to IEC-compliant firmware development and validation processes.',
      'Participated in cross-functional debugging with hardware, production, and clinical teams.',
      'Improved system reliability through firmware optimization and systematic testing.',
      'Contributed to firmware development for Power Management Board, including Battery Management System (BMS) integration, charger IC configuration, and power subsystem validation to ensure reliable battery operation.',
    ],
    challenges:[
      'Developing firmware for a medical device required balancing real-time performance, accuracy, reliability, and maintainability. One of the major challenges was integrating multiple sensing modules while ensuring stable communication, low processing latency, and robust hardware-software interaction. Debugging signal quality issues and validating firmware behavior across different hardware revisions required systematic testing and close collaboration with cross-functional teams.',
    ],
    impact:[
      'My contributions supported the development of a production-ready patient monitoring platform by improving firmware reliability, enabling modular feature development, strengthening hardware-software integration, and supporting accurate physiological signal acquisition. The project also provided extensive experience in developing embedded software for safety-critical medical systems where reliability and validation are fundamental design requirements.',
    ],
    learnings:[
      'Working on Patient Monitor NX5 fundamentally changed how I think about embedded software. Beyond writing firmware, I learned the importance of designing reliable systems, validating software in safety-critical environments, collaborating across hardware and clinical teams, and appreciating that good engineering is measured not only by functionality but also by reliability, maintainability, and trust.',
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
      'Real-time ECG signal acquisition and processing firmware with medical-grade accuracy.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – 2026',
    tags: ['IEC 60601', 'Signal Processing', 'STM32', 'Real-time'],
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
      'Real-time ECG signal acquisition and processing firmware with medical-grade accuracy.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2026',
    tags: ['IEC 60601', 'Signal Processing', 'STM32', 'Real-time'],
    overview:
    'Humidifier RH07 is a medical respiratory humidification system designed to deliver optimally heated and humidified air to patients undergoing respiratory therapy. The project involved developing embedded firmware for precise temperature regulation, sensor monitoring, user interaction, and reliable system operation while meeting the demands of a medical device development cycle.',
    role:[ 
    'As an Embedded Systems Engineer, I contributed to the firmware development of the Humidifier RH07 from early development through system validation. My work involved implementing embedded control logic, integrating sensors and peripherals, debugging hardware-software interactions, and supporting system testing to ensure reliable and safe device operation.',
    ],
    engineeringHighlights:[
      'Developed firmware for temperature sensing and closed-loop temperature control.',
      'Integrated multiple hardware peripherals and sensors with the embedded firmware',
      'Implemented safety checks and fault-handling mechanisms for reliable operation.',
      'Performed hardware bring-up, debugging, and firmware validation during product development.',
      'Collaborated with hardware and product teams to resolve integration issues and optimize system performance.',
      'Contributed to the successful development of the product within an accelerated development timeline of approximately 75 days.',
    ],
    challenges:[
      'Delivering a complete medical device within a compressed timeline required balancing rapid development with firmware reliability and system safety. Integrating hardware and firmware while validating sensor performance and maintaining stable temperature control demanded systematic debugging, close cross-functional collaboration, and careful testing throughout the development cycle.',
    ],
    impact:[
      'Contributed to the successful development and validation of a production-ready medical humidifier.',
      'Supported reliable temperature regulation and overall system stability through robust firmware implementation.',
      'Helped accelerate product development by resolving firmware and hardware integration issues efficiently.',
      'Gained valuable experience working across the complete embedded product development lifecycle.',
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
  
  // {
  //   slug: 'robocon-2021',
  //   title: 'Robocon 2021 Holonomic Robots',
  //   summary:
  //     'Holonomic robots with advanced locomotion and precise motor control for DD Robocon.',
  //   category: 'robotics',
  //   image: '/img/portfolio/swerve2020.png',
  //   organization: 'Robotics Research Lab, GCOEARA',
  //   year: '2021',
  //   tags: ['Holonomic Drive', 'Motor Control', 'Competition'],
  //   highlights: [
  //     'Engineered holonomic robots with advanced locomotion and precise motor control.',
  //     'Designed and integrated BLDC, DC, and stepper motor control systems for precise movement execution.',
  //     'Developed and tested control logic for multi-actuator coordination, optimizing responsiveness for theme-specific challenges.',
  //     'Achieved All India Rank 6 at DD Robocon 2021.',
  //   ],
  // },
  {
    slug: 'robocon',
    title: 'DD Robocon Competition Robots',
    summary:
      'Autonomous robots with omni-wheel/mecanum drive for theme-specific competition tasks.',
    category: 'robotics',
    image: [
      '/img/portfolio/rrl2019a.jpg',
      '/img/portfolio/swerve2020.png',
    ],
    organization: 'Robotics Research Lab, GCOEARA',
    year: '2020 - 2021',
    tags: ['Mecanum Drive', 'Autonomy', 'Competition'],
    // highlights: [
    //   'Assisted in designing autonomous robots with omni-wheel/mecanum drive for theme-specific tasks.',
    //   'Developed mechanism control systems for synchronized robotic movements, improving task execution accuracy.',
    //   'Achieved All India Rank 14 at DD Robocon 2020.',
    // ],
    overview:
    "DD Robocon is India's premier robotics competition, where multidisciplinary teams design and build robots to autonomously and manually complete complex theme-specific tasks under strict time and engineering constraints. Over two consecutive seasons, I contributed to the design, development, and integration of competition robots, working across embedded systems, control, electronics, PCB design, and system integration while helping the team achieve All India Rank 14 (2020) and All India Rank 6 (2021).",
    role:[ 
    'As a member of the Robotics Research Lab, I contributed to the embedded systems and electronics development of multiple competition robots across the 2020 and 2021 seasons. My work included embedded firmware development, motor control, custom PCB design, hardware integration, actuator control, and system testing. As my experience grew, I took on greater technical responsibility during the 2021 season, contributing to more complex system integration and robot development.',
    ],
    engineeringHighlights:[
      'Developed embedded firmware for autonomous and manually operated competition robots.',
      'Designed and integrated custom PCBs for motor drivers, sensor interfaces, and embedded control.',
      'Implemented precise control of DC motors, BLDC motors, and stepper motors.',
      'Developed actuator control logic for synchronized robot mechanisms.',
      'Integrated embedded hardware, sensors, and mechanical subsystems into complete robotic platforms.',
      'Performed extensive debugging, field testing, and iterative improvements before competition.',
      'Contributed to achieving AIR 14 in DD Robocon 2020 and AIR 6 in DD Robocon 2021.',
    ],
    challenges:[
      'Designing competition robots required balancing speed, precision, robustness, and rapid iteration within strict competition deadlines. Integrating embedded electronics with complex mechanical systems demanded continuous debugging, hardware modifications, and collaborative problem solving as designs evolved throughout the development cycle.',
    ],
    impact:[
      'Contributed to the successful development of multiple competition robots across two national Robocon seasons.',
      'Helped the team improve its national ranking from AIR 14 to AIR 6.',
      'Strengthened interdisciplinary collaboration between embedded, electronics, and mechanical engineering teams.',
      'Built a strong foundation in embedded systems, robotics, and engineering under real-world time constraints.',
    ],
    learnings:[
      'DD Robocon taught me that building successful robotic systems requires far more than writing embedded software. I learned how firmware, electronics, mechanics, and control systems must work together as a single integrated system. Working under demanding competition deadlines strengthened my ability to iterate quickly, debug complex multidisciplinary problems, and collaborate effectively within a large engineering team',
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
  // {
  //   slug: 'customized-pcb',
  //   title: 'Customized PCB for Robotics',
  //   summary:
  //     'PCB design for motor drivers and sensor integration with microcontrollers.',
  //   category: 'robotics',
  //   image: '/img/portfolio/pcb_top - Copy.png',
  //   organization: 'Robotics Research Lab, GCOEARA',
  //   year: '2020 – 2021',
  //   tags: ['PCB Design', 'Motor Drivers', 'Altium'],
  //   highlights: [
  //     'Designed and fabricated a custom PCB for motor drivers and sensor integration in robotic applications.',
  //     'Developed compact, high-speed circuit layouts ensuring minimal signal interference and power optimization.',
  //   ],
  // },
  {
    slug: 'robotic-hand-prosthesis',
    title: 'Robotic Hand Prosthesis',
    summary:
      'Muscle-controlled prosthetic hand using EMG signal processing for intuitive movement.',
    category: 'academic',
    image: [
      '/img/portfolio/Robotic_hand3.jpeg',
    ],
    organization: 'GCOEARA',
    year: '2022',
    tags: ['EMG', 'Signal Processing', 'Prosthetics'],
    // highlights: [
    //   'Developed a robotic prosthetic hand controlled by EMG signals, enabling intuitive muscle-based movement.',
    //   'Implemented signal processing techniques to filter and interpret EMG signals for individual finger control.',
    // ],
    overview:
    "The Robotic Hand Prosthesis is an EMG-controlled prosthetic hand developed to demonstrate intuitive human-machine interaction through embedded systems and biomedical signal processing. The system captures electromyography (EMG) signals from forearm muscles, processes them in real time, and translates muscle activity into controlled finger movements, enabling natural and responsive prosthetic operation.",
    role:[ 
    'I developed the embedded firmware and signal processing pipeline for the prosthetic hand, focusing on EMG signal acquisition, filtering, feature extraction, and motor control. I also contributed to system integration, experimental validation, and iterative refinement of the control algorithms to improve responsiveness and movement accuracy.',
    ],
    engineeringHighlights:[
      'Developed embedded firmware for real-time EMG signal acquisition and processing.',
      'Implemented digital filtering techniques to reduce noise and improve signal quality.',
      'Designed algorithms to interpret muscle activity and translate EMG signals into finger movements.',
      'Integrated EMG sensing hardware with embedded motor control.',
      'Optimized signal processing for reliable and responsive gesture recognition.',
      'Performed experimental testing and iterative refinement of control algorithms.',
      'Validated system performance through repeated testing and functional evaluation.',
    ],
    challenges:[
      'EMG signals are inherently low in amplitude, noisy, and vary significantly between users, making reliable interpretation challenging. Developing a responsive prosthetic control system required balancing signal filtering, processing latency, and gesture recognition accuracy while ensuring smooth and intuitive finger movement. Extensive experimentation was necessary to optimize signal processing and improve control reliability.',
    ],
    impact:[
      'Demonstrated real-time control of a prosthetic hand using EMG-based muscle signals.',
      'Successfully integrated biomedical signal processing with embedded motor control.',
      'Strengthened understanding of human-machine interaction through embedded systems.',
      'Gained practical experience in translating physiological signals into real-time embedded control.',
    ],
    learnings:[
      'This project introduced me to the challenges of designing embedded systems that directly interact with the human body. I learned that reliable biomedical systems require more than accurate algorithms—they demand careful signal conditioning, robust embedded implementation, and thoughtful system design to transform noisy physiological signals into meaningful real-time actions. The experience strengthened my interest in embedded systems that create tangible human impact.',
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
    image: [
      '/img/portfolio/ballbot2.jpeg',
    ],
    organization: 'GCOEARA',
    year: '2022',
    tags: ['PID Control', 'Real-time', 'Embedded C'],
    overview:
    "The Ball Balancing Robot is a dynamically stable mobile robot that balances on a single spherical wheel using closed-loop PID control. Developed as an interdisciplinary project between the Instrumentation & Control and Automobile Engineering departments, the robot continuously estimates its orientation using an IMU and applies real-time motor corrections to maintain stability under dynamic conditions.",
    role:[ 
    'I led an 8-member interdisciplinary team consisting of four Instrumentation & Control and four Automobile Engineering students throughout the project lifecycle. Alongside coordinating system development across both teams, I was responsible for embedded firmware development, PID controller implementation, IMU integration, controller tuning, system integration, and experimental validation.',
    ],
    engineeringHighlights:[
      // 'Developed embedded firmware for real-time balancing and motion control.',
      // 'Implemented PID control algorithms for continuous stabilization of the robot.',
      // 'Integrated inertial sensors for orientation estimation and feedback control.',
      // 'Tuned control parameters through iterative experimentation to achieve stable balancing under dynamic disturbances.',
      // 'Integrated motor drivers and actuators with the embedded control system.',
      // 'Performed system testing, debugging, and controller optimization to improve stability and responsiveness.',
      'Led an interdisciplinary team of 8 students across Instrumentation & Control and Automobile Engineering.',
      'Developed embedded firmware for real-time balancing and motion control.',
      'Implemented a PID-based feedback control system using IMU sensor data.',
      'Integrated IMU sensors with the embedded controller for continuous orientation estimation.',
      'Tuned PID parameters through iterative experimentation to achieve stable balancing under dynamic disturbances.',
      'Integrated motor drivers and actuators with the embedded control system.',
      'Coordinated mechanical and embedded system integration across multidisciplinary teams.',
      'Performed system testing, debugging, and controller optimization to improve stability and responsiveness.',
    ],
    challenges:[
      // 'Designing a dynamically stable system required balancing responsiveness with stability. Small changes in controller parameters could significantly affect system behavior, making controller tuning an iterative process. Sensor noise, actuator response, and real-time processing constraints also required careful consideration to achieve reliable balancing performance.',
      'Developing a dynamically stable robot required balancing controller responsiveness with system stability while working under real-world hardware constraints. Achieving consistent balancing involved extensive PID tuning, repeated experimentation, and close coordination between the mechanical and embedded teams. Leading an interdisciplinary project also required effective communication and integration between hardware, mechanical, and control system development.',
    ],
    impact:[
      'Successfully demonstrated real-time balancing using embedded feedback control.',
      'Delivered a fully integrated robotic system through effective collaboration between two engineering disciplines.',
      'Validated the effectiveness of PID-based stabilization for dynamically unstable systems.',
      'Strengthened practical understanding of embedded control systems, electromechanical integration, and team-based engineering.',
      'Developed leadership and project coordination experience while managing an interdisciplinary engineering team.',
    ],
    learnings:[
      // 'This project transformed my understanding of control systems from theory into practice. I learned that achieving stable real-time behavior depends not only on selecting the right control algorithm but also on understanding sensor behavior, actuator limitations, system dynamics, and iterative tuning. It reinforced the importance of experimentation, observation, and continuous refinement in embedded system design.',
      'Leading this project taught me that successful engineering extends beyond writing code or designing control algorithms. I learned how to coordinate multidisciplinary teams, communicate across different engineering domains, and integrate mechanical and embedded systems into a single working solution. Technically, the project transformed my understanding of feedback control by showing how controller tuning, system dynamics, and iterative experimentation together determine the performance of real-world embedded systems.',
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
