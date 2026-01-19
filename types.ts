export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: 'Deep Learning' | 'Machine Learning' | 'Web Development';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
  readTime: string;
  image?: string;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  kaggle: string;
  medium: string;
}

export interface GithubStats {
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  contributedTo: number;
  rank: string;
}

export interface LeetCodeStats {
  totalProblemsSolved: number;
  badges: number;
  easy: number;
  medium: number;
  hard: number;
  submissionsLastYear: number;
  rank: number;
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    year: string;
    heroImage: string;
    cvLink: string;
    contactEmail: string;
  };
  about: {
    heading: string;
    content: string;

    signature: string;
    githubStats?: GithubStats;
    leetcodeStats?: LeetCodeStats;
  };
  social: SocialLinks;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  blog: BlogPost[];
}

export const DEFAULT_DATA: PortfolioData = {
  hero: {
    name: "Orbin Sunny",
    title: "Machine Learning Engineer",
    year: "2025",
    heroImage: "/profile.png",
    cvLink: "https://drive.google.com/file/d/1n0XuFG95MFw34RSOtM_kR5bxg4paMAw3/view?usp=sharing",
    contactEmail: "orbinsunny@gmail.com"
  },
  about: {
    heading: "Crafting Intelligence",
    content: "I am a Machine Learning Engineer passionate about building scalable AI systems. With a deep understanding of deep learning architectures and MLOps, I transform complex data into actionable insights. My work bridges the gap between theoretical research and real-world application.",
    signature: "/signature.svg",
    githubStats: {
      totalStars: 3,
      totalCommits: 89,
      totalPRs: 13,
      totalIssues: 5,
      contributedTo: 8,
      rank: "C+"
    },
    leetcodeStats: {
      totalProblemsSolved: 262,
      badges: 2,
      easy: 190,
      medium: 71,
      hard: 2,
      submissionsLastYear: 395,
      rank: 500513
    }
  },
  social: {
    email: "mailto:orbinsunny@gmail.com",
    linkedin: "https://www.linkedin.com/in/orbin-sunny/",
    github: "https://github.com/orbin123",
    kaggle: "https://www.kaggle.com/orbinsunny",
    medium: "https://medium.com/@orbinsunny"
  },
  experience: [
    {
      id: "1",
      role: "Machine Learning Apprenticeship",
      company: "Brototype",
      duration: "2024 - Present",
      description: "Pursuing an intensive apprenticeship at Brototype, gaining hands-on expertise in ML, DL, LLMs, and Computer Vision through a structured, project-driven learning program."
    }
  ],


  projects: [
    // --- Deep Learning Projects ---
    {
      id: "dl1",
      title: "CycleGAN Sketch-to-Photo",
      description: "Translates unpaired face sketches into realistic photographs using a TensorFlow-based CycleGAN. The model utilizes adversarial learning and cycle-consistency to preserve facial structure without paired training data.",
      tags: ["TensorFlow", "GAN", "Computer Vision"],
      image: "/cyclegan.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Deep_Learning/GANs/PROJECT/cyclegan.ipynb",
      category: "Deep Learning"
    },
    {
      id: "dl2",
      title: "AutoSupport – Seq2Seq NLP",
      description: "An intelligent Seq2Seq LSTM model that automates support by classifying tickets and generating responses. It leverages word embeddings to streamline operations and reduce wait times.",
      tags: ["Seq2Seq", "NLP", "Automation"],
      image: "/nlp_custonmer_support.jpeg",
      link: "https://colab.research.google.com/drive/1dbcrKAqIdfhMz0byqbMErbGZmcsFTJ1s#scrollTo=iXiDw7XMgrj7",
      category: "Deep Learning"
    },
    {
      id: "dl3",
      title: "FinBird – NLP Analysis",
      description: "An end-to-end NLP system for financial news intelligence using a Django/FastAPI backend. It applies NER, topic modeling, and deep learning (BERT, LSTM) for real-time sentiment analysis and market insights.",
      tags: ["NLP", "FastAPI", "Transformer", "Sentiment Analysis"],
      image: "/finbird-low.jpeg",
      link: "https://colab.research.google.com/drive/15PAd17xRXqnISR_ivld0E_e0P1H2IScc#scrollTo=H_vH2muOdJtj",
      category: "Deep Learning"
    },
    {
      id: "dl4",
      title: "GhostWriting – LSTM Text Gen",
      description: "A character-level LSTM model that generates English text by learning language structure from Nietzsche's writings. It predicts characters based on learned grammar and vocabulary patterns.",
      tags: ["LSTM", "NLP", "Generative AI"],
      image: "/lstm_project.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Deep_Learning/RNN/PROJECT/lstm-txt-generator.ipynb",
      category: "Deep Learning"
    },
    {
      id: "dl5",
      title: "Neural Network from Scratch",
      description: "A neural network for handwritten digit recognition built using only NumPy. Demonstrates manual implementation of forward and backpropagation on the MNIST dataset.",
      tags: ["NumPy", "Math", "MNIST"],
      image: "/NN_scratch.png",
      link: "https://github.com/orbin123/Neural-Network_Scratch",
      category: "Deep Learning"
    },

    // --- Machine Learning Projects ---
    {
      id: "ml1",
      title: "Heart Disease Prediction",
      description: "Predicts heart disease using 14 clinical features. Utilizes Python for data cleaning and analysis, employing an XGBoost classifier to achieve high accuracy in health diagnostics.",
      tags: ["XGBoost", "Healthcare", "Classification"],
      image: "/heartdisease.png",
      link: "https://github.com/orbin123/Heart-Disease-Prediction",
      category: "Machine Learning"
    },
    {
      id: "ml2",
      title: "Bulldozer Price Prediction",
      description: "A regression project predicting future bulldozer sale prices using RandomForestRegressor. Involves time-series feature engineering and model fine-tuning.",
      tags: ["Random Forest", "Regression", "Time Series"],
      image: "/bulldozer.png",
      link: "https://github.com/orbin123/Bulldozer-Price-Prediction",
      category: "Machine Learning"
    },
    {
      id: "ml3",
      title: "Happiness Index 2024 Analysis",
      description: "Analyzes the 2024 Happiness Index dataset to reveal how GDP, social support, and other factors impact worldwide happiness using statistical tests and visualization.",
      tags: ["EDA", "Statistics", "Visualization"],
      image: "/happiness.png",
      link: "https://github.com/orbin123/Happiness-Index-2024-EDA-and-Statistical-Analysis-2024",
      category: "Machine Learning"
    },
    {
      id: "ml4",
      title: "Climate Time Series Forecasting",
      description: "Comparative analysis using ARIMA, Exponential Smoothing, Prophet, and LSTM to predict mean temperature. Identifies Prophet as the most accurate model for capturing seasonality.",
      tags: ["Prophet", "ARIMA", "Forecasting"],
      image: "/climate.png",
      link: "https://www.kaggle.com/code/orbinsunny/climate-time-series?scriptVersionId=281480535",
      category: "Machine Learning"
    },
    {
      id: "ml5",
      title: "Customer Churn Prediction",
      description: "Predicts customer churn for telecom services using Logistic Regression, SVM, Random Forest, and XGBoost. Focuses on feature engineering and actionable retention strategies.",
      tags: ["Classification", "XGBoost", "Analytics"],
      image: "/customerchurn.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Supervised_Learning/PROJECTS/Classification_project/Customer_churn.ipynb",
      category: "Machine Learning"
    },
    {
      id: "ml6",
      title: "Ames House Price Prediction",
      description: "Predicts home sale prices using advanced regression models like XGBoost, Random Forest, and LightGBM with extensive feature engineering pipelines.",
      tags: ["Regression", "Advanced ML", "LightGBM"],
      image: "/ames.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Supervised_Learning/PROJECTS/Regression_project/Ames_house_prediction.ipynb",
      category: "Machine Learning"
    },
    {
      id: "ml7",
      title: "Disease Prediction (Class.)",
      description: "Medical diagnostic classification using Logistic Regression and Random Forest with GridSearchCV for hyperparameter tuning to maximize accuracy.",
      tags: ["Classification", "GridSearchCV", "Healthcare"],
      image: "/heartdiease2.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Supervised_Learning/Advanced%20SML/Disease-Prediction/classification.ipynb",
      category: "Machine Learning"
    },
    {
      id: "ml8",
      title: "Stock Prediction (Reg.)",
      description: "Predicts stock closing prices on NSE data using Linear Regression and Random Forest. Includes feature importance insights and hyperparameter tuning.",
      tags: ["Regression", "Finance", "Random Forest"],
      image: "/stock.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Supervised_Learning/Advanced%20SML/Stock-Prediction/regression.ipynb",
      category: "Machine Learning"
    },
    {
      id: "ml9",
      title: "Humor Taste Segmentation",
      description: "Unsupervised learning project using PCA and clustering (KMeans, DBSCAN) on the Jester dataset to identify distinct human humor preference segments.",
      tags: ["Unsupervised", "Clustering", "PCA"],
      image: "/jokes.png",
      link: "https://github.com/orbin123/Machine_Learning/blob/main/Unsupervised_Learning/Projects/humour_taste.ipynb",
      category: "Machine Learning"
    },

    // --- Web Development Projects ---
    {
      id: "web1",
      title: "Assistly: Chatbot Generator",
      description: "A chatbot generator web app built with Next.js, TypeScript, and GraphQL. Enables users to deploy intelligent assistants powered by the ChatGPT API.",
      tags: ["Next.js", "TypeScript", "GraphQL", "AI"],
      image: "/assistly.png",
      link: "https://github.com/orbin123/chatbot-ai-app",
      category: "Web Development"
    },
    {
      id: "web2",
      title: "Notion Clone",
      description: "A note-taking app utilizing Next.js and TypeScript for the frontend with a Firebase backend for real-time data storage, authentication, and collaborative features.",
      tags: ["Next.js", "Firebase", "Real-time"],
      image: "/notionclone.png",
      link: "https://github.com/orbin123/notion-clone",
      category: "Web Development"
    },
    {
      id: "web3",
      title: "Django E-Commerce",
      description: "A Django-based storefront featuring cart, payment, and product management modules. Built for scalability and practical commercial application.",
      tags: ["Django", "Python", "Full Stack"],
      image: "/ecommerce.png",
      link: "https://github.com/orbin123/django-ecommerce",
      category: "Web Development"
    },
    {
      id: "web4",
      title: "Coursemy",
      description: "Open-source app that creates structured educational playlists from YouTube. Built with Next.js/React frontend, FastAPI backend, and PostgreSQL.",
      tags: ["Next.js", "FastAPI", "PostgreSQL"],
      image: "/coursemy.png",
      link: "https://github.com/orbin123/Coursemy",
      category: "Web Development"
    },
    {
      id: "web5",
      title: "Salary Predictor",
      description: "Connects a web frontend with a Python backend hosting a Linear Regression model to predict estimated salaries based on user input.",
      tags: ["Python", "ML Integration", "Web"],
      image: "/salarypredictor.png",
      link: "https://github.com/orbin123/Salary_Predictor",
      category: "Web Development"
    },
    {
      id: "web6",
      title: "Portfolio Website",
      description: "Responsive portfolio built with pure HTML, CSS, and JavaScript. Showcases projects and skills without frameworks for clean, lightweight performance.",
      tags: ["HTML/CSS", "JavaScript", "Responsive"],
      image: "/portfolio.png",
      link: "https://github.com/orbin123/Portfolio-Website",
      category: "Web Development"
    }
  ],
  education: [
    {
      id: "e1",
      degree: "Bachelor of Computer Applications",
      institution: "University of Calicut",
      duration: "2021 - 2024",
      description: "Specialized in Computer Science and Data Structures."
    },
    {
      id: "e2",
      degree: "Senior Secondary Education",
      institution: "St. George HSS, Velamkode",
      duration: "2019 - 2021",
      description: "Completed Higher Secondary in Science and served as an active NSS volunteer."
    },
    {
      id: "e3",
      degree: "High School, CBSE",
      institution: "Mar Baselios English Medium School",
      duration: "2018 - 2019",
      description: ""
    }
  ],
  blog: [
    { 
      "id": "b9", 
      "title": "Natural Language Processing (Part 2)", 
      "date": "Jan 18, 2026", 
      "excerpt": "An advanced, practice-focused follow-up on key intermediate NLP concepts, bridging classical methods and modern deep learning. Topics include NER, sentiment analysis (VADER, BERT, LSTM), topic modeling, semantic search, and text summarisation.", 
      "link": "https://medium.com/@orbinsunny/natural-language-processing-part-2-8150e195b4c8", 
      "readTime": "12 min read", 
      "image": "/nlp2-low.jpeg" 
    },
    { 
      "id": "b8", 
      "title": "My GSoC Journal: Part 1", 
      "date": "Dec 29, 2025", 
      "excerpt": "A reflective journal sharing five grounded tips for first-time applicants preparing for Google Summer of Code (GSoC) 2026. It covers timelines, organization shortlisting, proposal study, codebase navigation, and early community contributions.", 
      "link": "https://medium.com/@orbinsunny/my-gsoc-journal-part-1-77932deaa857", 
      "readTime": "6 min read", 
      "image": "/gsoc1-low.jpeg" 
    },
    {
      id: "b7",
      title: "Natural Language Processing (NLP)",
      date: "Dec 16, 2025",
      excerpt:
        "An intuitive walkthrough of core NLP concepts—from text cleaning and tokenization to vectorization, word embeddings, and n‑grams—showin...",
      link: "https://medium.com/@orbinsunny/natural-language-processing-nlp-64a366d9803e",
      readTime: "8 min read",
      image: "/nlpblog.jpeg"
    }
    ,
    {
      id: "b6",
      title: "CycleGAN for Converting Face Sketches to Real Face Images",
      date: "Nov 26, 2025",
      excerpt: "A step-by-step exploration of CycleGAN for converting face sketches into realistic photos using unpaired datasets and TensorFlow.",
      link: "https://medium.com/@orbinsunny/cyclegan-for-converting-face-sketches-to-real-face-images-8a0ccaffa26e",
      readTime: "6 min read",
      image: "/cyclegan_blg.png"
    },
    {
      id: "b5",
      title: "Attention is all you need (in simple terms)",
      date: "Nov 17, 2025",
      excerpt: "Demystifying the attention mechanism and the revolutionary transformer architecture powering modern AI, from RNNs to GPT.",
      link: "https://medium.com/@orbinsunny/attention-is-all-you-need-in-simple-terms-ee6393956193",
      readTime: "18 min read",
      image: "/transformer_blg.png"
    },
    {
      id: "b4",
      title: "Hello to Generative Models…(VAE, GAN)",
      date: "Nov 1, 2025",
      excerpt: "An accessible, in-depth introduction to Generative AI, covering the architecture, training processes, and loss functions of VAEs and GANs.",
      link: "https://medium.com/@orbinsunny/hello-to-generative-models-vae-gan-ea9fe5453157",
      readTime: "14 min read",
      image: "/gan_blg.png"
    },
    {
      id: "b3",
      title: "What Defines Success — Luck or Hard Work",
      date: "Nov 28, 2023",
      excerpt: "Confronts the debate of luck vs. hard work, urging readers to reject passive reliance on fate and embrace daily control.",
      link: "https://medium.com/@orbinsunny/what-defines-success-luck-or-hard-work-882ff9d8435d",
      readTime: "3 min read",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*r57aSVd-Si1iwwSevhhTLw.jpeg"
    },
    {
      id: "b2",
      title: "A Thing About Hope…",
      date: "Sep 7, 2023",
      excerpt: "Explores the nature of hope, arguing it thrives not from passive dreaming but from taking action and building routine efforts.",
      link: "https://medium.com/@orbinsunny/a-thing-about-hope-ffa864749681",
      readTime: "4 min read",
      image: "https://miro.medium.com/v2/resize:fit:1000/format:webp/1*MmH5I7o9-d87QFX5ZW05NQ.jpeg"
    },
    {
      id: "b1",
      title: "The Secret Power of Compounding for an Extraordinary Life",
      date: "Jul 15, 2023",
      excerpt: "Unpacks the profound impact of compounding as a principle not just in finance, but across habit formation and personal growth.",
      link: "https://medium.com/@orbinsunny/the-secret-power-of-compounding-for-an-extraordinary-life-56641a786273",
      readTime: "3 min read",
      image: "/compounding.png"
    }
  ]
};