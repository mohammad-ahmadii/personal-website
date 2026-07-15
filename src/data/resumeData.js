export const profile = {
  name: 'Mohammad Ahmadi',
  title: 'Front-End Developer',
  tagline: '3 years of experience',
  location: 'Tehran, Iran',
  phone: '+98 910 554 8773',
  email: 'sm.ahmadi77@yahoo.com',
  linkedin: 'in/smahmadi77',
  linkedinUrl: 'https://linkedin.com/in/smahmadi77',
  about:
    "As a Frontend Developer , I specialize in building dynamic, responsive web applications with React.js, Next.js, TypeScript and CSS freamworks. My work focuses on designing and implementing user-friendly interfaces, develop large-scale apps based on design patterns and ensuring cross-browser compatibility. Collaborating within agile teams, I contribute to creating seamless digital experiences while maintaining high code quality and performance standards."}

export const languages = [
  { name: 'Farsi', level: 'Native' },
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
]

export const education = [
  {
    degree: "Bachelor's degree, Software Engineering",
    school: 'Technical and Vocational Uni of Iran',
    date: '2018 — 2020',
    location: 'Tabriz',
  },
  {
    degree: 'Associate degree, Software Engineering',
    school: 'Technical and Vocational Uni of Iran',
    date: '2016 — 2020',
    location: 'Zanjan',
  },
  {
    degree: 'Diploma of Education, Digital Design',
    school: 'Dr. Hesabi High School',
    date: '09/2014 — 06/2016',
    location: 'Zanjan',
  },
]

export const skillGroups = [
  {
    label: 'Front-End Core',
    skills: [
      'JavaScript (ES6+)',
      'React.js',
      'Next.js',
      'TypeScript',
      'HTML5 / JSX',
      'CSS3',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    label: 'State & Data Fetching',
    skills: ['Redux', 'Zustand', 'Context API', 'React Query', 'Axios', 'RESTful APIs'],
  },
  {
    label: 'Styling & UI',
    skills: ['Tailwind CSS', 'Sass', 'Less', 'Ant Design', 'Bootstrap'],
  },
  {
    label: 'Test & Quality',
    skills: ['Jest', 'Vitest', 'Storybook', 'React Testing Library', 'ESLint', 'Prettier'],
  },
  {
    label: 'Build & Deployment',
    skills: ['Vite', 'Turbopack', 'Webpack', 'Git', 'Docker', 'GitLab', 'Nginx'],
  },
  {
    label: 'Team Collaboration',
    skills: ['Git Flow', 'Agile', 'Jira', 'Figma', 'Postman', 'Swagger', 'KB Docs'],
  },
  {
    label: 'Hands-on',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL Server', 'Linux'],
  },
]

// Chronological timeline — most recent first for display,
// but each entry carries its own date range for ordering.
export const experience = [
  {
    id: 'graph-inc',
    role: 'Front-End Developer',
    company: 'Graph Inc.',
    companyUrl: 'https://graph-inc.ir',
    date: '07/2023 — 04/2026',
    duration: '2.8 yrs',
    location: 'Tehran, Iran',
    blurb:
      'ICT security company focused on information & communication security and security software development.',
    points: [
      'Increased Test and TypeScript coverage across the codebase',
      'Implemented or Refactored Authorization and Authentication logic',
      'Elevated DX with auto-import components and Vite — 10x faster HMR',
      'Refactored and optimized app modules through dependency upgrades and new design patterns',
      'Resolved tech-lead review feedbacks and comments on merge requests in GitLab',
      'Built reusable custom React hooks and HOCs for shared stateful logic',
      'Implemented UI to the company design system "GraphX" and its design tokens',
      'Addressed and resolved all QA-reported test issues in Jira throughout the alpha release phase',
      'Addressed and resolved all PO, Support-team (reported usually from customer) and Designer issues in Jira throughout the beta release phase',
      'Supported teammates on technical issues',
    ],
    projects: [
      {
        name: 'Graph Software Kiosk System',
        date: 'from 2024 to 2026 · 2.5 months',
        location: 'Tehran',
        stack: ['React/Vite', 'Redux toolkit', 'OAuth2/OIDC', 'RBAC', 'vitest/jest', 'TS', 'axios'],
        view:{
          address: "https://graph-inc.ir/products/fam/graph-fam",
          image_url:"/personal-website/assets/images/vault.png",
          title: "it's not available, because it's a internal app of company, you can see it in graph-inc.ir products diagram as 'kiosk' ",
        },
        description:
          'The Graph Software Kiosk System is designed to hosting files and facilitate secure file transfers between public networks (internet) and private/isolated networks, and vice versa. The system is built on a cloud-based infrastructure, deployed as an on-premise private cloud within the customer organization. ',
        points:[
          'Resolved all TypeScript warnings and errors across the entire application.',
          'Zeroed out the "any" type in TypeScript and Set type on all functions, components and etc.',
          'Implemented Unit and Integration tests with Vitest, achieving approximately 40% test coverage across the application.',
          'Addressed and resolved all QA-reported test issues in Jira throughout three alpha release phases (Iterations 6–9).',
          'Implemented Authorizing logic on pages, actions and providing different access to diff users based on RBAC tree roles.',
          'Implemented Authentication logic OAuth2/OIDC.',
          'implemented Share and Team pages and Refactored Personal page.',
          'Implemented notification and upload files/folders.',
          'Eliminate ways in which cyberattacks could occur like XSS.'
        ]
      },
      {
        name: 'graph-inc.ir',
        date: '2024 · 3 months',
        location: 'Tehran',
        stack: ['Next.js','Redux'],
        description:"Official website of Graph-inc company.",
        points: [
          'Migrated from React to Next.js 14',
          'Add Blog and Job opportunity pages.',
          'Add lazy-loading on parts of app that are not in hero section to dcrease first loading time ',
          'Improve SEO rank by semantic elements and etc.',
          'Refactor Demo form and use react-hook-form, zod packages.',
        ],
        view: {
          address:"https://graph-inc.ir",
          image_url:"/personal-website//assets/images/graph-inc.ir-screenshot.png",
          title: "view",
        },
      },
    ],
  },
  {
    id: 'memaran-dade',
    role: 'Internship / Junior Front-End Developer',
    company: 'Memaran Dade',
    companyUrl: 'https://mdade.com',
    date: '06/2020 — 09/2020',
    duration: '4 mo',
    location: 'Tabriz, Iran',
    blurb: 'Designs and builds web and mobile software systems and solutions for businesses.',
    points: [
      'Developed and launched a customer site, azimpakhsh.ir, using React.js',
      'Converted Adobe Illustrator designs into responsive, production web pages',
    ],
    projects: [
      {
        name: 'azimpakhsh.ir',
        date: '2020',
        location: 'Tabriz',
        stack: ['React', 'Responsive Design'],
        description:"Shopping website",
        points: [
          'Developed and launched by React.js.',
          'Converted UI/UX designs into responsive web pages and pixel-perfect'
        ],
        view: {
          address:null,
          // image_url:"",
          title: "Dismissed by company",
    }
      },
    ],
  },
]

// Flattened project list for the portfolio grid
export const projects = experience.flatMap((job) =>
  job.projects.map((p) => ({ ...p, company: job.company, role: job.role }))
)
