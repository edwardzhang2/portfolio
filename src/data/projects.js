// Projects data - Authoritative, narrative-driven, grouped by importance
export const projects = [
  // 🏆 FLAGSHIP PROJECTS
  {
    id: 1,
    title: 'Hong Kong Science & Technology Parks',
    summary: 'Deployed a production ML pipeline for the Hong Kong Marine Department to digitize thousands of handwritten vessel permit forms — replacing a fully manual process. Built a multi-stage OCR + classification system, trained on real government data, and shipped a predictive berth allocation model that cut scheduling time significantly.',
    tags: ['Python', 'PyTorch', 'OCR', 'Kubernetes', 'GPU Cluster', 'Computer Vision'],
    description: 'Building an ML system for the Hong Kong Government.',
    featured: true,
    flagship: true,
    image: `/HKSTP.jpg`,
    link: 'https://github.com/edwardzhang2/Vessel',
    context: 'Summer 2025 · Hong Kong Science & Technology Parks',
    category: 'flagship'
  },
  {
    id: 2,
    title: "Children's Environmental Literacy Foundation",
    summary: "Led a 10-person engineering team to build a full-stack learning platform for a nonprofit that reaches 1.5 million students across 50 states. Designed the backend architecture, managed the database, and shipped features end-to-end — from the teacher dashboard to the student-facing content system used in 5,000+ schools.",
    description: 'Full-stack development for social good.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    featured: true,
    flagship: true,
    image: `/celf.jpg`,
    link: 'https://greencareers.celfeducation.org/login',
    context: '2025 · Project Lead',
    category: 'flagship'
  },
  {
    id: 3,
    title: 'Penn Vet — Donor Segmentation',
    summary: "Applied unsupervised clustering and predictive modeling to Penn Vet's donor database, uncovering distinct giving patterns across thousands of alumni donors. Delivered a segmentation report and ML-driven targeting strategy that the development team used to redesign their outreach campaigns.",
    description: 'Helped Penn Vet understand their donor patterns and improve their outreach campaigns.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'PyTorch', 'NumPy'],
    featured: true,
    flagship: false,
    image: `/pennvet.jpg`,
    link: '',
    context: '2025 · Wharton Analytics Fellows',
    category: 'featured'
  },

  // 🔬 EXPERIMENTS & EXPLORATION
  {
    id: 4,
    title: 'CT DICOM Viewer & Bone Density Estimation',
    summary: 'Built a medical imaging tool and ML pipeline to analyze CT scans and estimate bone mineral density, working directly with Prof. Rajapakse at Penn Medicine. Processed raw DICOM files, extracted volumetric features, and trained a regression model to assist clinical bone health assessment.',
    tags: ['Python', 'DICOM', 'PyTorch', 'NumPy'],
    featured: false,
    flagship: false,
    image: `/bonehealth.jpg`,
    link: 'https://github.com/edwardzhang2/Bone-Health',
    context: 'Research · Penn Medicine',
    category: 'research'
  },
  {
    id: 5,
    title: 'Snap Spectacles — AR Mental Health App',
    summary: 'Built at CalHacks in 36 hours: AR glasses that detect eating behaviors associated with anorexia and respond with real-time encouragement through animated AR companions. Integrated Gemini for behavior recognition via the live camera feed, with a Flask backend handling inference and a Supabase store for session data.',
    tags: ['Snap Spectacles', 'Gemini API', 'Flask', 'Supabase', 'JavaScript', 'Python'],
    featured: false,
    flagship: false,
    image: `/snapcv.jpg`,
    link: 'https://github.com/irenkani/calhacks12.0',
    context: 'CalHacks 12.0 · Hackathon',
    category: 'experiment'
  },
  {
    id: 6,
    title: 'Fantasy Premier League — Prediction Engine',
    summary: "Got tired of losing Fantasy Premier League to my friends, so I built a machine learning model to stop it. The system pulls live FPL API data, engineers features from recent form, fixture difficulty, and player ownership trends, then outputs weekly transfer recommendations. It's won me two free dinners.",
    tags: ['Python', 'Pandas', 'scikit-learn', 'PyTorch', 'FPL API'],
    featured: false,
    flagship: false,
    image: `/fpl.jpg`,
    link: '',
    context: 'Personal Project',
    category: 'experiment'
  },
  {
    id: 7,
    title: 'Celestial Object Classification',
    summary: 'Built and benchmarked multiple deep learning classifiers to identify stars, galaxies, and quasars from telescope survey data. Compared CNN architectures against classical ML baselines across a large labeled dataset, achieving high accuracy on a challenging multi-class problem. CIS 5450 Final Project at Penn.',
    tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'scikit-learn'],
    featured: false,
    flagship: false,
    image: `/astronomy.jpg`,
    link: 'https://colab.research.google.com/drive/1A81VRvDn4NE9VW2dW7a6dWxNcjuWW3_T?usp=sharing',
    context: 'CIS 5450 · Penn Engineering',
    category: 'experiment'
  },
];

export const projectOrder = [1, 2, 3, 4, 5, 6, 7];

export const projectGroups = {
  flagship: [1, 2],
  featured: [3],
  experiments: [4, 5, 6, 7],
};

export const getFeaturedProjects = () => {
  return getAllProjects().filter(project => project.featured);
};

export const getAllProjects = () => {
  const byId = new Map(projects.map((p) => [p.id, p]));
  const ordered = projectOrder.map((id) => byId.get(id)).filter(Boolean);
  const orderedIds = new Set(ordered.map((p) => p.id));
  const rest = projects.filter((p) => !orderedIds.has(p.id));
  return [...ordered, ...rest];
};

export const getProjectGroup = (groupKey) => {
  const ids = projectGroups[groupKey] || [];
  const byId = new Map(getAllProjects().map((p) => [p.id, p]));
  return ids.map((id) => byId.get(id)).filter(Boolean);
};
