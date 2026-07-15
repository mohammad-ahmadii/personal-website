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
    "Technology and art have always been intertwined interests, and today that shows up in front-end work — building interfaces with the same attention to craft as a design piece. Focused on advancing team goals while keeping the team's own working spirit intact.",
}

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
      'Increased test and TypeScript coverage across the codebase',
      'Implemented authorization and authentication logic',
      'Elevated DX with auto-import components and Vite — 10x faster HMR',
      'Refactored and optimized app modules through dependency upgrades and new design patterns',
      'Resolved tech-lead review feedback on merge requests in GitLab',
      'Built reusable custom React hooks and HOCs for shared stateful logic',
      'Implemented UI to the company design system "GraphX" and its design tokens',
      'Supported teammates on technical issues',
    ],
    projects: [
      {
        name: 'Vault — Software Kiosk',
        date: '2025',
        location: 'Tehran',
        stack: ['React', 'Redux', 'OAuth2', 'RBAC'],
        link:null,
        description:
          'Secure hosted file service (similar in spirit to Google Drive). ',
        points:["Built authorization pages and actions with RBAC-tree-based access control, OAuth2 / OIDC authentication, Personal / Shared / Team spaces, and a notification and upload flow managed through Redux."]
      },
      {
        name: 'graph-inc.ir',
        date: '2024 · 3 months',
        location: 'Tehran',
        stack: ['Next.js','Redux'],
        description:"Official website of Graph-inc company.",
        link: "www.graph-inc.ir",
        points:
          'Migrated the company site from React to Next.js. Added Blog and Job Opportunity pages. Raised the Lighthouse score from 23 to 75 through semantic HTML and Core Web Vitals work, and closed off XSS/CSRF attack vectors.',
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
        link: null,
        points:
          "A customer-facing website built from Adobe Illustrator designs, converted into fully responsive React pages — one of the company's client launches.",
      },
    ],
  },
]

// Flattened project list for the portfolio grid
export const projects = experience.flatMap((job) =>
  job.projects.map((p) => ({ ...p, company: job.company, role: job.role }))
)
