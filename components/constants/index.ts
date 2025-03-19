declare type Post = {
  id: number;
  slug: string;
  title: string;
  image: string;
  problemTitle: string;
  problemContent: string;
  solutionTitle: string;
  solutionContent: string;
  impactTitle: string;
  impactContent: string;
};

export const casestudy: Post[] = [
  {
    id: 1,
    slug: "ai-powered-flood-prediction-and-early-warning-system",
    title: "AI-Powered Flood Prediction and Early Warning System",
    image: "https://images.pexels.com/photos/2837711/pexels-photo-2837711.jpeg",
    problemTitle: "Problem",
    problemContent:
      "Nigeria experiences severe flooding every year, affecting agriculture, infrastructure, and human lives. Traditional forecasting methods lack accuracy, and communities receive warnings too late.",
    solutionTitle: "Solution by",
    solutionContent:
      "Developed an AI-driven flood prediction model using satellite imagery and hydrological data from sources like NASA, NOAA, and Sentinel-1. Integrated real-time rainfall and river discharge data to improve flood forecasts. Built a mobile/web platform where users receive early flood warnings and emergency response recommendations.",
    impactTitle: "Impact",
    impactContent:
      "Improved flood preparedness by providing 72-hour early warnings with 85% accuracy. Reduced economic losses by enabling communities to take preventive measures. Helped government agencies and NGOs allocate resources more effectively.",
  },
  {
    id: 2,
    slug: "renewable-energy-optimization-for-off-grid-communities",
    title: "Renewable Energy Optimization for Off-Grid Communities",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    problemTitle: "Problem",
    problemContent:
      "Over 80 million Nigerians lack access to reliable electricity, especially in rural areas. Renewable energy (solar, wind) offers a solution, but poor site selection and design often lead to inefficient energy production.",
    solutionTitle: "Solution by",
    solutionContent:
      "Used geospatial data and AI to identify optimal locations for solar and wind farms based on sunlight, wind speed, and terrain analysis.Developed a predictive energy demand model to match supply with community needs. Designed a microgrid management system to ensure efficient power distribution.",
    impactTitle: "Impact",
    impactContent:
      "Increased renewable energy efficiency by 30-50% through better siting and grid management. Helped investors and energy companies optimize deployment strategies. Improved electricity access for thousands of off-grid households.",
  },
  {
    id: 3,
    slug: "soil-carbon-sequestration-model-for-mrv-in-nigeria",
    title: "Soil Carbon Sequestration Model for MRV in Nigeria",
    image:
      "https://images.pexels.com/photos/24343048/pexels-photo-24343048/free-photo-of-close-up-of-dirt-in-a-field.jpeg",
    problemTitle: "Problem",
    problemContent:
      "Nigeria faces significant land degradation and declining soil organic carbon (SOC) levels due to deforestation, overgrazing, and unsustainable farming practices. Measuring and verifying (MRV) soil carbon levels is critical for carbon credit programs and sustainable agriculture.",
    solutionTitle: "Solution by",
    solutionContent:
      "Developed a machine learning model using Google Earth Engine (GEE) and GeoJSON-based soil data to predict soil carbon content.",
    impactTitle: "Impact",
    impactContent:
      "Provided scalable and cost-effective soil carbon measurement without expensive field surveys.",
  },
  {
    id: 4,
    slug: "ai-powered-deforestation-monitoring-system",
    title: "AI-Powered Deforestation Monitoring System",
    image: "https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg",
    problemTitle: "Problem",
    problemContent:
      "Nigeria loses over 350,000 hectares of forest every year due to illegal logging, urban expansion, and agriculture. Monitoring deforestation in real time is difficult due to limited ground-based observation capacity.",
    solutionTitle: "Solution by",
    solutionContent:
      "Developed an AI-driven deforestation detection system using high-resolution satellite imagery (Sentinel-2, PlanetScope). Used deep learning algorithms to detect forest loss and illegal logging activity. Integrated an alert system that notifies conservation agencies when deforestation hotspots are detected.",
    impactTitle: "Impact",
    impactContent:
      "Provided real-time insights to government agencies and environmental organizations to combat deforestation. Increased efficiency in tracking illegal logging by 70%. Supported efforts to restore degraded lands through targeted reforestation.",
  },
];

type Case = {
  id: number; // Unique identifier for the case study
  slug: string; // URL-friendly version of the title (optional)
  title: string; // Title of the case study
  image: string; // Image URL or path (optional)
  problem: string; // Description of the problem
  solution: {
    // Solution details
    description: string; // Brief description of the solution
    technologies: string[]; // List of technologies used
    features: string[]; // Key features of the solution
  };
  impact: string[]; // List of impacts or outcomes
};

export const casestudies: Case[] = [
  {
    id: 1,
    slug: "ai-powered-flood-prediction-and-early-warning-system",
    title: "AI-Powered Flood Prediction and Early Warning System",
    image: "https://images.pexels.com/photos/2837711/pexels-photo-2837711.jpeg",
    problem:
      "Nigeria experiences severe flooding every year, affecting agriculture, infrastructure, and human lives. Traditional forecasting methods lack accuracy, and communities receive warnings too late.",
    solution: {
      description:
        "Developed an AI-driven flood prediction model using satellite imagery and hydrological data from sources like NASA, NOAA, and Sentinel-1.",
      technologies: [
        "Satellite imagery",
        "Hydrological data (NASA, NOAA, Sentinel-1)",
        "Real-time rainfall and river discharge data",
      ],
      features: [
        "AI-driven flood prediction model",
        "Mobile/web platform for early flood warnings and emergency response recommendations",
      ],
    },
    impact: [
      "Improved flood preparedness by providing 72-hour early warnings with 85% accuracy",
      "Reduced economic losses by enabling communities to take preventive measures",
      "Helped government agencies and NGOs allocate resources more effectively",
    ],
  },
  {
    id: 2,
    slug: "renewable-energy-optimization-for-off-grid-communities",
    title: "Renewable Energy Optimization for Off-Grid Communities",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    problem:
      "Over 80 million Nigerians lack access to reliable electricity, especially in rural areas. Renewable energy (solar, wind) offers a solution, but poor site selection and design often lead to inefficient energy production.",
    solution: {
      description:
        "Used geospatial data and AI to identify optimal locations for solar and wind farms based on sunlight, wind speed, and terrain analysis.",
      technologies: [
        "Geospatial data",
        "AI for predictive modeling",
        "Sunlight, wind speed, and terrain analysis",
      ],
      features: [
        "Identifies optimal locations for solar and wind farms",
        "Predictive energy demand model to match supply with community needs",
        "Microgrid management system for efficient power distribution",
      ],
    },
    impact: [
      "Increased renewable energy efficiency by 30-50% through better siting and grid management",
      "Helped investors and energy companies optimize deployment strategies",
      "Improved electricity access for thousands of off-grid households",
    ],
  },

  {
    id: 3,
    slug: "soil-carbon-sequestration-model-for-mrv-in-nigeria",
    title: "Soil Carbon Sequestration Model for MRV in Nigeria",
    image:
      "https://images.pexels.com/photos/24343048/pexels-photo-24343048/free-photo-of-close-up-of-dirt-in-a-field.jpeg",
    problem:
      "Nigeria faces significant land degradation and declining soil organic carbon (SOC) levels due to deforestation, overgrazing, and unsustainable farming practices. Measuring and verifying (MRV) soil carbon levels is critical for carbon credit programs and sustainable agriculture.",
    solution: {
      description:
        "Developed a machine learning model using Google Earth Engine (GEE) and GeoJSON-based soil data to predict soil carbon content.",
      technologies: [
        "Google Earth Engine (GEE)",
        "GeoJSON-based soil data",
        "SoilGrid",
        "iSDAsoil",
        "OpenLandMap",
      ],
      features: [
        "Predicts soil carbon content",
        "Integrated datasets for accurate SOC estimation",
        "Dashboard for monitoring soil carbon levels and estimating potential carbon credits",
      ],
    },
    impact: [
      "Provided scalable and cost-effective soil carbon measurement without expensive field surveys",
      "Enabled carbon credit certification for farmers adopting regenerative agriculture",
      "Supported policymakers in making data-driven decisions for land restoration",
    ],
  },

  {
    id: 4,
    slug: "ai-powered-deforestation-monitoring-system",
    title: "AI-Powered Deforestation Monitoring System",
    image: "https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg",
    problem:
      "Nigeria loses over 350,000 hectares of forest every year due to illegal logging, urban expansion, and agriculture. Monitoring deforestation in real time is difficult due to limited ground-based observation capacity.",
    solution: {
      description:
        "Developed an AI-driven deforestation detection system using high-resolution satellite imagery (Sentinel-2, PlanetScope). Used deep learning algorithms to detect forest loss and illegal logging activity. Integrated an alert system that notifies conservation agencies when deforestation hotspots are detected.",
      technologies: [
        "High-resolution satellite imagery (Sentinel-2, PlanetScope)",
        "Deep learning algorithms",
        "Alert system for conservation agencies",
      ],
      features: [
        "Detects forest loss and illegal logging activity",
        "Provides real-time alerts for deforestation hotspots",
        "Supports targeted reforestation efforts",
      ],
    },
    impact: [
      "Provided real-time insights to government agencies and environmental organizations to combat deforestation",
      "Increased efficiency in tracking illegal logging by 70%",
      "Supported efforts to restore degraded lands through targeted reforestation",
    ],
  },
];
