// Projects data - Authoritative, narrative-driven, grouped by importance
export const projects = [
  // 🏆 FLAGSHIP PROJECTS - These should visually dominate
  {
    id: 1,
    title: 'HKSTP — OCR + ML Pipeline',
    summary: 'Designed and deployed an OCR + supervised learning pipeline to digitize 10,000+ handwritten vessel forms for the Hong Kong Marine Department. Built for GPU-backed Kubernetes infrastructure with real operational constraints.',
    description: 'Infrastructure-level work. Not a demo—a production system handling real government data at scale.',
    tags: ['Python', 'PyTorch', 'OCR', 'Kubernetes', 'GPU', 'Computer Vision'],
    featured: true,
    flagship: true,
    image: '/hkstp.jpg',
    link: '', // No link - internal project
    context: 'Summer 2023 · Hong Kong Science & Technology Parks',
    category: 'flagship'
  },
  {
    id: 2,
    title: 'Hack4Impact — CELF Learning Platform',
    summary: 'Led a 10-person team to design and build a full-stack learning platform for a nonprofit education client. Owned backend architecture, data modeling, and client communication end-to-end.',
    description: 'Leadership + engineering judgment. Not just writing code—making architectural decisions and managing stakeholder expectations.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Team Leadership'],
    featured: true,
    flagship: true,
    image: '/celf.jpg',
    link: '',
    context: '2023-2024 · Project Lead',
    category: 'flagship'
  },
  {
    id: 3,
    title: 'Penn Vet — Donor Segmentation',
    summary: 'Built clustering models and exploratory analyses to segment donor behavior, informing outreach strategy and campaign design.',
    description: 'Analytical maturity. Turning messy donor data into actionable insights for a real client.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Clustering', 'EDA'],
    featured: true,
    flagship: false,
    image: '/pennvet.jpg',
    link: '',
    context: 'Wharton Analytics Fellows',
    category: 'featured'
  },
  
  // 🔬 EXPERIMENTS & EXPLORATION - Secondary work
  {
    id: 4,
    title: 'Astronomy ML Classification',
    summary: 'Applied ML methods to classify celestial bodies from astronomical datasets through feature engineering and model comparison.',
    tags: ['Python', 'Machine Learning', 'scikit-learn'],
    featured: false,
    flagship: false,
    image: '/astronomy.jpg',
    link: '',
    context: 'Research project',
    category: 'experiment'
  },
  {
    id: 5,
    title: 'Fantasy Premier League Modeling',
    summary: 'Built predictive models for player performance using engineered features and statistical modeling.',
    tags: ['Machine Learning', 'Data Science', 'Feature Engineering'],
    featured: false,
    flagship: false,
    image: '/fpl.jpg',
    link: '',
    context: 'Personal experiment',
    category: 'experiment'
  },
  {
    id: 6,
    title: 'Word Hunt Replica',
    summary: 'Fully playable game replica with grid generation, scoring logic, and real-time interactions.',
    tags: ['React', 'JavaScript'],
    featured: false,
    flagship: false,
    image: '/wordhunt.jpg',
    link: '',
    context: 'Weekend build',
    category: 'experiment'
  },
  {
    id: 7,
    title: 'TSP Trip Planner',
    summary: "Trip-planning app using dynamic programming and Dijkstra's algorithm for optimized multi-stop routes.",
    tags: ['Algorithms', 'Dynamic Programming', 'Flask'],
    featured: false,
    flagship: false,
    image: '/tsp.jpg',
    link: '',
    context: 'Personal project',
    category: 'experiment'
  },
  {
    id: 8,
    title: 'Snap Spectacles CV App',
    summary: 'AR/CV prototype on Snap Spectacles using image recognition pipelines.',
    tags: ['Computer Vision', 'Python'],
    featured: false,
    flagship: false,
    image: '/snapcv.jpg',
    link: '',
    context: 'CalHacks hackathon',
    category: 'experiment'
  },
];

// Ordering + grouping live here (easy to reshuffle without touching components)
export const projectOrder = [1, 2, 3, 4, 5, 6, 7, 8];

export const projectGroups = {
  flagship: [1, 2],
  featured: [3],
  experiments: [4, 5, 6, 7, 8],
};

// Get only featured projects
export const getFeaturedProjects = () => {
  return getAllProjects().filter(project => project.featured);
};

// Get all projects
export const getAllProjects = () => {
  const byId = new Map(projects.map((p) => [p.id, p]));
  const ordered = projectOrder.map((id) => byId.get(id)).filter(Boolean);
  // Fallback: append anything not explicitly ordered
  const orderedIds = new Set(ordered.map((p) => p.id));
  const rest = projects.filter((p) => !orderedIds.has(p.id));
  return [...ordered, ...rest];
};

export const getProjectGroup = (groupKey) => {
  const ids = projectGroups[groupKey] || [];
  const byId = new Map(getAllProjects().map((p) => [p.id, p]));
  return ids.map((id) => byId.get(id)).filter(Boolean);
};
