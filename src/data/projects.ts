export type ProjectCategory = 'medical' | 'robotics' | 'academic';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  featured?: boolean;
  image?: string;
  organization?: string;
  year?: string;
  tags: string[];
  highlights: string[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  medical: 'Medical Devices',
  robotics: 'Robotics',
  academic: 'Academic',
};

export const projects: Project[] = [
  {
    slug: 'ecg-module',
    title: 'ECG Module',
    summary:
      'Real-time ECG signal acquisition and processing firmware with medical-grade accuracy.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – 2025',
    tags: ['IEC 60601', 'Signal Processing', 'STM32', 'Real-time'],
    highlights: [
      'Developed and optimized firmware for ECG signal acquisition and processing, ensuring high-precision cardiac monitoring.',
      'Implemented real-time filtering and noise reduction algorithms to improve ECG waveform accuracy while complying with medical device standards (IEC 60601).',
      'Integrated ECG firmware with the patient monitor processing unit for real-time visualization and diagnostic interpretation.',
    ],
  },
  {
    slug: 'nibp-module',
    title: 'NIBP Module',
    summary:
      'Non-invasive blood pressure measurement with optimized inflation/deflation control and motion-artifact rejection.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – 2025',
    tags: ['Control Systems', 'Algorithms', 'Patient Monitor'],
    highlights: [
      'Designed and implemented Non-Invasive Blood Pressure (NIBP) measurement algorithms, ensuring accurate systolic and diastolic pressure readings.',
      'Developed control logic for inflation/deflation mechanisms, optimizing pressure stability and measurement efficiency.',
      'Applied motion-artifact rejection techniques to improve reliability in clinical environments.',
    ],
  },
  {
    slug: 'volumetric-capnography',
    title: 'Volumetric Capnography Module',
    summary:
      'Firmware for End-Tidal CO₂ and volumetric capnography analysis in respiratory monitoring.',
    category: 'medical',
    featured: true,
    organization: 'Noccarc Robotics',
    year: '2024 – 2025',
    tags: ['Capnography', 'EtCO₂', 'Signal Processing'],
    highlights: [
      'Engineered firmware for volumetric capnography, enabling precise analysis of End-Tidal CO₂ (EtCO₂) and CO₂ waveforms.',
      'Implemented real-time breath cycle detection algorithms for accurate volume-based CO₂ measurement.',
    ],
  },
  {
    slug: 'respiration-module',
    title: 'Respiration Module',
    summary:
      'Respiration rate detection using impedance-based and ECG-derived methods.',
    category: 'medical',
    organization: 'Noccarc Robotics',
    year: '2024 – 2025',
    tags: ['ECG-derived', 'Impedance', 'Patient Monitor'],
    highlights: [
      'Engineered respiration rate detection algorithms based on ECG-derived and impedance-based methods.',
      'Developed signal processing techniques to enhance respiratory cycle detection, reducing false alarms in clinical environments.',
    ],
  },
  {
    slug: 'temperature-module',
    title: 'Temperature Module',
    summary: 'Multi-channel temperature sensing firmware with real-time compensation.',
    category: 'medical',
    organization: 'Noccarc Robotics',
    year: '2024 – 2025',
    tags: ['Sensors', 'Multi-channel', 'Calibration'],
    highlights: [
      'Developed firmware for multi-channel temperature sensing with precise real-time patient monitoring.',
      'Implemented sensor compensation algorithms to improve accuracy under varying environmental conditions.',
    ],
  },
  {
    slug: 'communication-architecture',
    title: 'Patient Monitor Communication Architecture',
    summary:
      'Real-time data communication between microcontroller and main processor across sensor modules.',
    category: 'medical',
    organization: 'Noccarc Robotics',
    year: '2024 – 2025',
    tags: ['UART', 'SPI', 'System Architecture'],
    highlights: [
      'Designed communication framework using UART and SPI for real-time data transfer between ECG, NIBP, respiration, and temperature modules.',
      'Developed UART protocol for high-speed, low-latency communication between microcontroller and main processor.',
    ],
  },
  {
    slug: 'pcb-jig',
    title: 'Automated PCB Test Jig',
    summary:
      'Firmware for automated PCB testing jigs to improve manufacturing efficiency.',
    category: 'medical',
    organization: 'Noccarc Robotics',
    year: '2024',
    tags: ['Test Automation', 'Manufacturing', 'Diagnostics'],
    highlights: [
      'Designed firmware for automated PCB testing jigs, reducing manual testing efforts and increasing production efficiency.',
      'Implemented self-diagnostic routines and functional tests to validate hardware performance before final assembly.',
    ],
  },
  {
    slug: 'robocon-2021',
    title: 'Robocon 2021 Holonomic Robots',
    summary:
      'Holonomic robots with advanced locomotion and precise motor control for DD Robocon.',
    category: 'robotics',
    image: '/img/portfolio/swerve2020.png',
    organization: 'Robotics Research Lab, GCOEARA',
    year: '2021',
    tags: ['Holonomic Drive', 'Motor Control', 'Competition'],
    highlights: [
      'Engineered holonomic robots with advanced locomotion and precise motor control.',
      'Designed and integrated BLDC, DC, and stepper motor control systems for precise movement execution.',
      'Developed and tested control logic for multi-actuator coordination, optimizing responsiveness for theme-specific challenges.',
      'Achieved All India Rank 6 at DD Robocon 2021.',
    ],
  },
  {
    slug: 'robocon-2020',
    title: 'Robocon 2020 Autonomous Robots',
    summary:
      'Autonomous robots with omni-wheel/mecanum drive for theme-specific competition tasks.',
    category: 'robotics',
    image: '/img/portfolio/rrl2019a.jpg',
    organization: 'Robotics Research Lab, GCOEARA',
    year: '2020',
    tags: ['Mecanum Drive', 'Autonomy', 'Competition'],
    highlights: [
      'Assisted in designing autonomous robots with omni-wheel/mecanum drive for theme-specific tasks.',
      'Developed mechanism control systems for synchronized robotic movements, improving task execution accuracy.',
      'Achieved All India Rank 14 at DD Robocon 2020.',
    ],
  },
  {
    slug: 'customized-pcb',
    title: 'Customized PCB for Robotics',
    summary:
      'PCB design for motor drivers and sensor integration with microcontrollers.',
    category: 'robotics',
    image: '/img/portfolio/pcb_top - Copy.png',
    organization: 'Robotics Research Lab, GCOEARA',
    year: '2020 – 2021',
    tags: ['PCB Design', 'Motor Drivers', 'Altium'],
    highlights: [
      'Designed and fabricated a custom PCB for motor drivers and sensor integration in robotic applications.',
      'Developed compact, high-speed circuit layouts ensuring minimal signal interference and power optimization.',
    ],
  },
  {
    slug: 'robotic-hand-prosthesis',
    title: 'Robotic Hand Prosthesis',
    summary:
      'Muscle-controlled prosthetic hand using EMG signal processing for intuitive movement.',
    category: 'academic',
    image: '/img/portfolio/Robotic_hand3.jpeg',
    organization: 'GCOEARA',
    year: '2022',
    tags: ['EMG', 'Signal Processing', 'Prosthetics'],
    highlights: [
      'Developed a robotic prosthetic hand controlled by EMG signals, enabling intuitive muscle-based movement.',
      'Implemented signal processing techniques to filter and interpret EMG signals for individual finger control.',
    ],
  },
  {
    slug: 'ball-balancing-robot',
    title: 'Ball Balancing Robot',
    summary:
      'Self-balancing robot with PID control for real-time stability on a spherical wheel.',
    category: 'academic',
    image: '/img/portfolio/ballbot2.jpeg',
    organization: 'GCOEARA',
    year: '2022',
    tags: ['PID Control', 'Real-time', 'Embedded C'],
    highlights: [
      'Designed and built a self-balancing robot utilizing PID control for real-time stability on a single spherical wheel.',
      'Tuned control parameters for robust balance under dynamic disturbances.',
    ],
  },
  {
    slug: 'quadcopter',
    title: 'Quadcopter',
    summary:
      'PID-stabilized quadcopter with IMU-based flight control and wireless communication.',
    category: 'academic',
    image: '/img/portfolio/drone1.jpeg',
    organization: 'GCOEARA',
    year: '2022',
    tags: ['IMU', 'PID', 'Flight Control'],
    highlights: [
      'Designed a quadcopter with brushless motors and ESCs for stable flight control.',
      'Implemented PID-based flight stabilization using IMU sensors (accelerometer and gyroscope).',
      'Integrated wireless communication and explored autonomous flight modes including altitude hold.',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
