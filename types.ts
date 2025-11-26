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
    heroImage: "https://picsum.photos/400/400",
    cvLink: "#",
    contactEmail: "hello@orbinsunny.com"
  },
  about: {
    heading: "Crafting Intelligence",
    content: "I am a Machine Learning Engineer passionate about building scalable AI systems. With a deep understanding of deep learning architectures and MLOps, I transform complex data into actionable insights. My work bridges the gap between theoretical research and real-world application.",
    signature: "Orbin S."
  },
  social: {
    email: "mailto:hello@orbinsunny.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    kaggle: "https://kaggle.com",
    medium: "https://medium.com"
  },
  experience: [
    {
      id: "1",
      role: "Senior ML Engineer",
      company: "Tech Corp AI",
      duration: "2022 - Present",
      description: "Leading a team of 5 engineers developing large language models for enterprise NLP solutions."
    },
    {
      id: "2",
      role: "Data Scientist",
      company: "Innovate Data",
      duration: "2019 - 2022",
      description: "Built predictive models for customer churn analysis and optimized recommendation engines."
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Neural Vision",
      description: "Real-time object detection system optimized for edge devices.",
      tags: ["Python", "PyTorch", "IoT"],
      image: "https://picsum.photos/600/400?grayscale",
      link: "#"
    },
    {
      id: "p2",
      title: "Alpha Trade",
      description: "Algorithmic trading bot using reinforcement learning.",
      tags: ["RL", "Finance", "Python"],
      image: "https://picsum.photos/600/401?grayscale",
      link: "#"
    }
  ],
  education: [
    {
      id: "e1",
      degree: "M.S. Artificial Intelligence",
      institution: "Stanford University",
      duration: "2020 - 2022",
      description: "Specialized in Computer Vision and Reinforcement Learning. Thesis on Sparse Attention Mechanisms."
    },
    {
      id: "e2",
      degree: "B.S. Computer Science",
      institution: "MIT",
      duration: "2016 - 2020",
      description: "Graduated with Honors. Minors in Mathematics and Cognitive Science."
    }
  ],
  blog: [
    {
      id: "b1",
      title: "The Future of Transformers in 2025",
      date: "Oct 12, 2024",
      excerpt: "Analyzing the shift towards sparse attention mechanisms.",
      link: "#",
      readTime: "5 min read",
      image: "https://picsum.photos/id/48/600/400"
    },
    {
      id: "b2",
      title: "MLOps: From Notebook to Production",
      date: "Sep 28, 2024",
      excerpt: "Best practices for deploying scalable models.",
      link: "#",
      readTime: "8 min read",
      image: "https://picsum.photos/id/2/600/400"
    }
  ]
};