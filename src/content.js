// All site copy lives here. Edit this file to update the site.
const base = import.meta.env.BASE_URL;

export const site = {
  name: 'Edward Zhang',
  photo: `${base}profile.jpg`,
  now: 'Computer Science and Mathematics at the University of Pennsylvania, class of 2028. Backend and distributed systems. Most recently a software engineering intern at Carrier.',
  email: 'zhange2@sas.upenn.edu',
  links: [
    { label: 'Resume', href: `${base}resume.pdf`, primary: true },
    { label: 'GitHub', href: 'https://github.com/edwardzhang2' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/edwardzhang2' },
    { label: 'Email', href: 'mailto:zhange2@sas.upenn.edu' },
  ],
};

export const experience = [
  {
    org: 'Carrier (Sensitech)',
    logo: '',
    role: 'Software Engineer Intern',
    place: 'Beverly, MA',
    when: 'Summer 2026',
    stack: 'Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, Celery, Redis, React, AWS ECS Fargate',
    summary:
      'Worked on a release intelligence platform that generates software validation documentation from Jira and Zephyr Scale data, extending an existing production application.',
    points: [
      'Designed the PostgreSQL schema and FastAPI routes that normalize Jira issues, validation fields, test cycles, and executions across seven product projects, with async ingestion built on the codebase’s existing Celery patterns.',
      'Owned a cross-layer feature end to end: per-project Jira custom-field configuration, spanning schema, migration, models, API schemas, sync logic, and UI, replacing hard-coded fields.',
      'Added a secret-secured Jira webhook endpoint alongside the existing polling sync, and mapped Zephyr test data into a requirements traceability matrix after working out with the quality team which Jira-to-test relationship was authoritative.',
      'Cut manual validation-package preparation time by about 70%. The generated SWP 1.20 validation package passed the company’s compliance review and sign-off.',
    ],
  },
  {
    org: 'Hong Kong Science & Technology Parks',
    logo: `${base}hkstp.jpg`,
    role: 'Software Engineer Intern',
    place: 'Hong Kong',
    when: 'Summer 2025',
    stack: 'Python, Kubernetes, Redis, OCR and vision-language models, GPU workloads',
    summary:
      'Infrastructure and pipeline work for a document-digitization system, plus GPU capacity planning for the park’s startup programme.',
    points: [
      'Deployed a fault-tolerant service on Kubernetes with auto-scaling that handled peaks of 2,000+ daily transactions, and an asynchronous job engine on Redis queues with health checks that held 99.9% uptime through traffic spikes.',
      'Built a high-throughput pipeline that digitized 10,000+ documents through OCR microservices; request batching reduced cloud compute cost by about 25%.',
      'Profiled a functionally correct but slow OCR/VLM pipeline and found the bottleneck was architectural (sequential stages, idle GPUs, poor batching) rather than model inference; batching and parallel workers roughly doubled throughput at the same accuracy.',
      'Sized the GPU free tier for startup trials by interviewing founders about real workloads, and recommended the smallest allocation that was still useful.',
    ],
  },
  {
    org: 'Hack4Impact',
    logo: `${base}celf.jpg`,
    role: 'Project Manager and Technical Lead',
    place: 'Philadelphia, PA',
    when: 'Sep 2024 to present',
    stack: 'React, Node.js, PostgreSQL',
    summary:
      'Lead a team of about ten student engineers building software for nonprofits.',
    points: [
      'Led development of a full-stack platform serving 1.5M+ users across 5,000+ schools; REST APIs and normalized schemas improved query latency by 65% under production load.',
      'Led the CELF speaker-and-teacher marketplace: chose PostgreSQL over MongoDB after evaluating the many-to-many relationships and query patterns, and recovered a missed midpoint milestone by re-cutting the work into dependency-aware tickets around the core browse, profile, and invite flow.',
      'Introduced structured code reviews, API versioning, and backend testing workflows across the team.',
    ],
  },
  {
    org: 'Rajapakse Lab, Penn Medicine',
    role: 'Research Software Developer',
    place: 'Philadelphia, PA',
    when: 'Jan to Aug 2025',
    stack: 'Python, DICOM, PyTorch, NumPy',
    summary: 'Data pipeline for bone density estimation from 3D CT imaging.',
    points: [
      'Designed and implemented a preprocessing and feature-extraction pipeline over 50K+ DICOM files; batching and layout-aware preprocessing cut experiment iteration time by about 25%.',
    ],
  },
  {
    org: 'Wharton Analytics Fellows',
    logo: `${base}pennvet.jpg`,
    role: 'Senior Data Analyst',
    place: 'Philadelphia, PA',
    when: 'Aug 2025 to present',
    stack: 'Python, SQL, Power BI',
    summary: 'Cost modelling for enterprise AI deployment, in collaboration with Accenture.',
    points: [
      'Implemented a parameterized cost estimation model covering 30+ business functions and 32 agents, with data pipelines aggregating public and enterprise sources for calibration; revised the model architecture in response to client feedback on its assumptions.',
    ],
  },
  {
    org: 'University of Pennsylvania',
    role: 'Teaching Assistant, Discrete Mathematics (CIS 1600)',
    place: 'Philadelphia, PA',
    when: 'May 2025 to present',
    stack: '',
    summary:
      'Recitations, office hours, and review sessions for 250+ students on proofs, combinatorics, and graph theory.',
    points: [],
  },
];

export const projects = [
  {
    name: 'Distributed task queue',
    stack: 'Go, Redis, Kubernetes',
    blurb:
      'Worker orchestration with retry policies, dead-letter queues, and Redis-backed scheduling, batching, and heartbeats coordinating jobs across Kubernetes pods.',
    href: '',
  },
  {
    name: 'World Cup prediction platform',
    stack: 'FastAPI, PostgreSQL, Redis, React, Docker',
    blurb:
      'Live tournament analytics: ingests match data and updates standings, advancement odds, and knockout scenarios through Redis-cached background jobs.',
    href: '',
  },
  {
    name: 'Impostor Atlas',
    stack: 'FastAPI, pgvector on Supabase, Redis, Claude API, S3',
    blurb:
      'A geography game where players interrogate an AI character to deduce a secret city, fed by an ingestion pipeline over Wikipedia and Wikivoyage.',
    href: '',
  },
  {
    name: 'Soccer league simulator',
    stack: 'Modal, Python',
    blurb:
      'Monte Carlo season, title, and relegation odds fanned out across Modal containers. In progress.',
    href: '',
  },
  {
    name: 'Course recommender',
    stack: 'FastAPI, scikit-learn, Redis, React',
    blurb:
      'Hybrid TF-IDF and collaborative filtering over 20K+ course reviews, serving suggestions in under 100 ms with Redis caching.',
    href: '',
  },
  {
    name: 'Bone health from CT',
    image: `${base}bonehealth.jpg`,
    stack: 'Python, DICOM, PyTorch',
    blurb: 'DICOM viewer and feature pipeline from the Rajapakse Lab work.',
    href: 'https://github.com/edwardzhang2/Bone-Health',
  },
  {
    name: 'Fantasy Premier League engine',
    image: `${base}fpl.jpg`,
    stack: 'Python, scikit-learn',
    blurb:
      'Weekly transfer recommendations from form, fixture difficulty, and ownership trends. Built to stop losing to friends; has won two dinners.',
    href: '',
  },
  {
    name: 'AR eating-behaviour companion',
    image: `${base}snapcv.jpg`,
    stack: 'Snap Spectacles, Gemini API, Flask, Supabase',
    blurb: 'CalHacks 12.0, second place in the Snap Spectacles track. Real-time behaviour recognition from the live camera feed with animated AR encouragement.',
    href: 'https://github.com/irenkani/calhacks12.0',
  },
  {
    name: 'Celestial object classification',
    image: `${base}astronomy.jpg`,
    stack: 'TensorFlow, Keras, scikit-learn',
    blurb: 'CNNs against classical baselines for separating stars, galaxies, and quasars in telescope survey data. CIS 5450 final project.',
    href: 'https://colab.research.google.com/drive/1A81VRvDn4NE9VW2dW7a6dWxNcjuWW3_T?usp=sharing',
  },
];

export const about = {
  education:
    'University of Pennsylvania, B.S.E. in Computer Science and Mathematics, GPA 3.93, expected May 2028. Coursework includes advanced algorithms, computer systems, operating systems, databases, big data analytics, and theory of computation.',
  awards: [
    'USACO Gold Division (top 1,000 competitors globally)',
    'PennApps XXIV, Best Community Impact Hack',
    'CalHacks 12.0, Snap Spectacles track, 2nd place',
    'PwC Engineer Your Career Program',
    'Hong Kong Olympiad in Informatics, bronze medallist and training team (top 20 in Hong Kong)',
    'UK Mathematics Challenge, gold award, five times',
  ],
  tools:
    'Python, Go, C and C++, Java, TypeScript, OCaml. FastAPI, PostgreSQL, Redis, Celery, Kafka, Docker, Kubernetes, AWS and Azure.',
  personal:
    'I grew up in Hong Kong. Off the keyboard I follow Formula 1, the NFL, and the Premier League, play soccer and piano, and work through Philadelphia’s restaurants one neighbourhood at a time.',
};
