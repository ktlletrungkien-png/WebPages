export const PROJECTS = [
  {
    id: "terrapulse-3d",
    slug: "terrapulse-3d",
    title: "TerraPulse 3D",
    category: "Climate Twins",
    year: "2026",
    client: "Global Climate Alliance",
    role: "Digital Twin · Real-time 3D · WebGL",
    field: "Planetary Observation",
    image: "/assets/img/work-orbital.svg",
    badge: "Featured Mission",
    summary:
      "A planetary digital twin simulating atmospheric heat waves, oceanic currents, and carbon sink dynamics with live satellite telemetry.",
    challenge:
      "The Global Climate Alliance needed a platform that could digest petabytes of NASA and Copernicus Earth observation data into a responsive, intuitive interface accessible to policymakers, scientists, and the public without requiring supercomputer terminals.",
    approach:
      "We engineered a custom WebGL planetary renderer using chunked spherical level-of-detail (LOD) streaming. Thermal gradients and jet-stream vectors are processed via GPU fragment shaders, reducing client load by 68% while allowing smooth 60 FPS multi-layer toggling.",
    outcome:
      "TerraPulse was presented at COP30 and is currently utilized by over 140 research institutions worldwide. Onboarding time for new researchers dropped from 3 weeks to under 2 hours.",
    metrics: [
      { value: "60 FPS", label: "Real-time rendering speed" },
      { value: "140+", label: "Research institutions onboard" },
      { value: "−68%", label: "Client compute overhead" },
    ],
    technologies: ["WebGL / Three.js", "GLSL Shaders", "Copernicus API", "React 19", "GeoJSON Streaming"],
  },

  {
    id: "gaia-sentinel",
    slug: "gaia-sentinel",
    title: "Gaia Marine Sentinel",
    category: "Marine & Oceans",
    year: "2025",
    client: "Oceanic Preserves Foundation",
    role: "UX Research · Marine UI · IoT Telemetry",
    field: "Ocean Biodiversity",
    image: "/assets/img/work-tidal.svg",
    badge: "Conservation Tech",
    summary:
      "Autonomous ocean ecosystem monitoring dashboard mapping whale migration corridors, coral bleaching alerts, and illegal vessel alerts.",
    challenge:
      "Marine biologists stationed in remote archipelagos struggled with fragmented acoustic hydrophone files, low-bandwidth satellite links, and delayed alert systems during critical seasonal migration windows.",
    approach:
      "We architected an offline-first progressive dashboard with predictive bandwidth caching and unified soundscape visualization. Alerts are prioritized through intelligent confidence scoring and geofence triggers.",
    outcome:
      "Protected marine areas saw a 44% improvement in rapid response to unauthorized trawlers, and over 12,000 acoustic bio-signatures were cataloged during the first 6 months of deployment.",
    metrics: [
      { value: "+44%", label: "Rapid response efficiency" },
      { value: "12K+", label: "Bio-signatures cataloged" },
      { value: "99.9%", label: "Uptime on low-bandwidth satellite" },
    ],
    technologies: ["React", "Web Audio API", "Leaflet GeoEngine", "Edge Sync", "Design Systems"],
  },

  {
    id: "boreal-echoes",
    slug: "boreal-echoes",
    title: "Boreal Echoes",
    category: "Planetary Games",
    year: "2025",
    client: "Taiga Interactive & WWF",
    role: "Eco-Worldbuilding · Game Direction · Audio-Visual UI",
    field: "Environmental Simulation",
    image: "/assets/img/work-echo.svg",
    badge: "Interactive World",
    summary:
      "An atmospheric exploration experience exploring the 100-year ecological recovery cycle of a sub-arctic taiga forest following wildfire.",
    challenge:
      "Taiga Interactive aimed to communicate the profound resilience of forest biomes without falling into doom-and-gloom climate fatigue. The game had to feel meditative, biologically accurate, and emotionally resonant.",
    approach:
      "We collaborated with boreal botanists to design procedural flora succession algorithms—from pioneering lichen and fireweed to mature canopy birch and spruce. The UI was rendered diegetically through mycorrhizal root networks and wind currents.",
    outcome:
      "Selected for Games for Change Festival and received the Golden Sprout Award for Eco-Storytelling. Over 250,000 players experienced the simulation in its first season.",
    metrics: [
      { value: "250K+", label: "Global players engaged" },
      { value: "100%", label: "Biologically verified flora cycles" },
      { value: "4.9/5", label: "Player resonance rating" },
    ],
    technologies: ["Unreal Engine 5 Bridge", "React Overlay", "Spatial Audio", "Procedural Ecology Engine"],
  },

  {
    id: "atmosphere-os",
    slug: "atmosphere-os",
    title: "Atmosphere OS",
    category: "Climate Twins",
    year: "2025",
    client: "Aether Planetary Sensing",
    role: "Enterprise Product Design · Design System · Data Viz",
    field: "Atmospheric Intelligence",
    image: "/assets/img/work-nebula.svg",
    badge: "Enterprise Platform",
    summary:
      "Next-generation atmospheric intelligence platform tracking global methane plumes, tropospheric ozone, and urban microclimates.",
    challenge:
      "Aether's constellation of low-orbit spectrometers generated billions of daily atmospheric readings. Enterprise sustainability leads could not translate this raw spectroscopic data into actionable carbon offset decisions.",
    approach:
      "We built Atmosphere OS: an enterprise design system comprising 180+ geospatial components, interactive isobar maps, and instant anomaly detection alerts with exportable ESG-compliant reporting modules.",
    outcome:
      "Adopted by 38 multinational organizations across energy, agriculture, and municipal planning. Reduced corporate carbon emissions tracking review cycles from 4 months to real-time dashboards.",
    metrics: [
      { value: "38", label: "Multinational enterprises deployed" },
      { value: "180+", label: "Geospatial UI components" },
      { value: "Real-time", label: "Emissions tracking speed" },
    ],
    technologies: ["React 19", "D3.js & WebGL", "Tailwind CSS", "Micro-frontend Architecture"],
  },

  {
    id: "tectonic-atlas",
    slug: "tectonic-atlas",
    title: "Tectonic Atlas",
    category: "Conservation Tech",
    year: "2024",
    client: "Geological Institute of Zurich",
    role: "Scientific Cartography · Interactive UX · 3D Globe",
    field: "Geological Science",
    image: "/assets/img/work-atlas.svg",
    badge: "Deep Cartography",
    summary:
      "A 4D geological cartography suite mapping 750 million years of continental drift, seismic stress faults, and geothermal energy reserves.",
    challenge:
      "Traditional geological atlases are static 2D PDFs that fail to communicate the dynamic, non-linear deformation of the Earth's lithosphere and volcanic subduction zones over deep geological epochs.",
    approach:
      "We created an interactive 4D timeline globe that lets researchers scrub through the Paleoproterozoic to the Anthropocene epoch, slicing cross-sections into the Earth's mantle with real-time crustal stress simulation.",
    outcome:
      "Featured in Nature Geoscience and implemented across academic universities in 26 countries. Now the standard teaching tool for structural geology courses.",
    metrics: [
      { value: "750M", label: "Years of continental history simulated" },
      { value: "26", label: "Countries with university adoption" },
      { value: "100%", label: "Vector-accurate plate boundaries" },
    ],
    technologies: ["Custom 3D Canvas", "WASM Plate Kinematics", "React", "Vector Tile Server"],
  },

  {
    id: "floramesh-amazon",
    slug: "floramesh-amazon",
    title: "FloraMesh Amazon",
    category: "Conservation Tech",
    year: "2024",
    client: "Rainforest Canopy Consortium",
    role: "Bio-acoustic Interface · Mobile App · Field Sensors",
    field: "Canopy Ecology",
    image: "/assets/img/work-signal.svg",
    badge: "Bio-Acoustics",
    summary:
      "Decentralized canopy bio-acoustic network monitoring endangered avian species and detecting illegal chainsaw activity in primary rainforests.",
    challenge:
      "Indigenous rangers and field biologists required a lightweight, solar-powered field companion app operable with gloved hands under extreme tropical humidity without continuous cellular reception.",
    approach:
      "We engineered an ultra-high-contrast tactile UI with low-latency audio spectrograms that parse bird calls and acoustic anomalies directly at the canopy edge using on-device neural inferencing.",
    outcome:
      "Decreased unauthorized deforestation incident response times from 48 hours to under 22 minutes across 500,000 hectares of primary Amazon rainforest in Loreto and Madre de Dios.",
    metrics: [
      { value: "< 22 min", label: "Deforestation alert response time" },
      { value: "500K ha", label: "Amazon primary forest safeguarded" },
      { value: "48", label: "Ranger field units operational" },
    ],
    technologies: ["React Progressive Web App", "WebRTC / Edge Audio", "Tactile Dark Mode UI"],
  },
];

export const CATEGORIES = [
  "All",
  "Climate Twins",
  "Marine & Oceans",
  "Conservation Tech",
  "Planetary Games",
];

export const SERVICES = [
  {
    id: "digital-twins",
    number: "01",
    title: "Geospatial Digital Twins & Earth Simulation",
    subtitle: "Real-time 3D · Satellite Streaming · Atmospheric Shaders",
    description:
      "We architect high-fidelity digital replicas of terrestrial, oceanic, and atmospheric ecosystems. By connecting raw Earth observation sensors to interactive 3D WebGL environments, we make complex planetary dynamics immediately legible and actionable.",
    capabilities: [
      "Real-time 3D Earth globes & WebGL visualization",
      "NASA / ESA / Copernicus satellite data ingestion",
      "Dynamic weather, jet-stream & ocean current shaders",
      "Multi-resolution Level of Detail (LOD) geospatial rendering",
      "Real-time sensor mesh & IoT telemetry dashboards",
      "Custom procedural terrain & bathymetric mapping",
    ],
    deliverables: "Interactive 3D Web Application, Geospatial Data Pipeline, GLSL Shader Suite, Technical Architecture Document",
  },
  {
    id: "climate-ux",
    number: "02",
    title: "Ecological UX/UI & Planetary Interfaces",
    subtitle: "Data Design · Carbon Footprint UX · Science Communication",
    description:
      "Complex environmental science needs interfaces that do not overwhelm. We design human-scale digital tools that transform dense climate models, biodiversity registries, and carbon flux ledgers into clear, compelling, decision-ready experiences.",
    capabilities: [
      "Complex ecological & carbon data visualization",
      "Intuitive scenario-modeling & prediction interfaces",
      "Mobile-first field companion apps for conservationists",
      "Accessibility-certified (WCAG AAA) color and typography systems",
      "Interactive infographics & science storytelling journeys",
      "Multi-stakeholder dashboard architectures",
    ],
    deliverables: "Production Design System (Figma + React Tokens), Complete User Journey Maps, Interactive Clickable Prototype, Production Components",
  },
  {
    id: "interactive-simulators",
    number: "03",
    title: "Planetary Worldbuilding & Serious Games",
    subtitle: "Eco-Narrative · Serious Games · Spatial Education",
    description:
      "Games and interactive simulations have an unmatched power to foster planetary empathy. We create scientifically grounded games, museum installations, and web-based exploratory worlds where players discover the delicate balance of our biosphere.",
    capabilities: [
      "Rigorous ecological & biological worldbuilding",
      "System dynamics gameplay mechanics (food webs, feedback loops)",
      "Diegetic, distraction-free environmental user interfaces",
      "Interactive educational simulators for museums & pavilions",
      "Spatial audio & bio-acoustic soundscapes",
      "Multiplayer collaborative problem-solving platforms",
    ],
    deliverables: "Playable WebGL/Unity/Unreal Build, Game Design Bible (GDD), Interactive Prototype, Audio-Visual Asset Library",
  },
  {
    id: "earth-brand-systems",
    number: "04",
    title: "Environmental Brand Identity & Systems",
    subtitle: "Visual Identity · Science Communications · Living Design",
    description:
      "For visionary climate tech startups, conservation NGOs, and planetary research institutes, we forge bold visual identities rooted in the living geometries of Earth: topological contours, fluid dynamics, and biological symmetry.",
    capabilities: [
      "Brand strategy & planetary narrative positioning",
      "Dynamic procedural logo systems that respond to real-time weather",
      "Generative topological typography & iconography",
      "Sustainable web development guidelines (low-carbon footprint)",
      "Editorial publication & climate report art direction",
      "Exhibition & experiential spatial design guidelines",
    ],
    deliverables: "Comprehensive Brand Guidelines, Generative Asset Toolkit, Web Design System, Low-Carbon Digital Stylebook",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Dr. Elena Rostova",
    role: "Planetary Creative Director",
    station: "Greenwich Prime (51.50° N, 0.12° W)",
    bio: "Former scientific visualization lead at the European Space Agency with 12 years directing interactive climate exhibitions.",
    specialty: "Satellite Cartography & Worldbuilding",
  },
  {
    name: "Marcus Vance",
    role: "Head of Geospatial Engineering",
    station: "Pacific Hub, Tokyo (35.67° N, 139.65° E)",
    bio: "Pioneered real-time GPU ocean current shaders; contributor to open-source WebGL geospatial rendering engines.",
    specialty: "High-Performance 3D & GLSL Shaders",
  },
  {
    name: "Nadia Al-Mansoor",
    role: "Lead Climate UX Architect",
    station: "Alpine Lab, Zurich (47.37° N, 8.54° E)",
    bio: "Specializes in cognitive load reduction for climate data dashboards and humanitarian disaster response systems.",
    specialty: "Data Visualization & Accessibility",
  },
  {
    name: "Thiago Silva",
    role: "Ecological Systems Researcher",
    station: "Amazon Field Station (3.11° S, 60.02° W)",
    bio: "Canopy bio-acoustics specialist working with indigenous forestry leagues to build open-source wildlife monitoring meshes.",
    specialty: "Bio-Acoustics & Edge Sensors",
  },
];

export const MILESTONES = [
  {
    year: "2019",
    title: "Station Founded",
    description: "Terra was established by a collective of climate scientists and interactive designers in Greenwich, aiming to visualize fragile polar ice sheet shrinkage.",
  },
  {
    year: "2021",
    title: "Global Ocean Sentinel",
    description: "Deployed our first real-time telemetry marine platform across 8 archipelagos, receiving the Earthshot Digital Innovation Commendation.",
  },
  {
    year: "2023",
    title: "COP28 Digital Pavilion",
    description: "Architected the flagship interactive climate twin presented to world leaders and delegations in Dubai, mapping 1.5°C climate thresholds.",
  },
  {
    year: "2025",
    title: "Open Earth Engine",
    description: "Released our open-source procedural globe rendering framework, adopted by 140+ research laboratories worldwide.",
  },
  {
    year: "2026",
    title: "The Next Orbit",
    description: "Deploying autonomous planetary sensor meshes, satellite edge visualization, and generative biodiversity simulation worlds.",
  },
];

export const FAQS = [
  {
    question: "What types of planetary projects does Terra specialize in?",
    answer:
      "We specialize in geospatial digital twins, real-time 3D planetary visualizers, climate risk dashboards, environmental educational simulations, and scientific brand identity for climate tech innovators, research foundations, and mission-driven institutions.",
  },
  {
    question: "Can you ingest our proprietary sensor or satellite datasets?",
    answer:
      "Yes. We regularly build pipelines connecting to NASA Earthdata, ESA Copernicus Sentinel, NOAA oceanic buoys, private CubeSat feeds, and local IoT sensor meshes using GeoJSON, NetCDF, GeoTIFF, and custom WebSocket telemetry.",
  },
  {
    question: "How long does a typical planetary digital twin project take?",
    answer:
      "A focused sprint prototype typically takes 3 to 5 weeks. A comprehensive, multi-layer planetary digital twin or enterprise environmental platform generally spans 10 to 16 weeks from initial architecture through deployment.",
  },
  {
    question: "Do you design for low carbon footprint on the web?",
    answer:
      "Absolutely. Ecological consciousness is embedded in our engineering. We optimize shaders, compress vector tiles, use green hosting infrastructures, and adhere to sustainable web design standards that minimize GPU energy expenditure.",
  },
  {
    question: "Where are Terra's studio stations located?",
    answer:
      "Our core mission control is stationed in Greenwich, London (Prime Meridian), with distributed specialized stations in Tokyo, Zurich, and Manaus (Amazon Basin). We operate as a globally synchronized remote studio.",
  },
];

