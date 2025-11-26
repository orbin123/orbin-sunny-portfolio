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
    heroImage: "https://media.licdn.com/dms/image/v2/D5603AQGIi_vvLlDEcw/profile-displayphoto-scale_400_400/B56ZjWdd.8HQAk-/0/1755944706573?e=1766016000&v=beta&t=XxpzGldpxBX5Mupqzujj_dJzRRSHAv6zFWBtOYhd88o",
    cvLink: "#",
    contactEmail: "orbinsunny@gmail.com"
  },
  about: {
    heading: "Crafting Intelligence",
    content: "I am a Machine Learning Engineer passionate about building scalable AI systems. With a deep understanding of deep learning architectures and MLOps, I transform complex data into actionable insights. My work bridges the gap between theoretical research and real-world application.",
    signature: "Orbin S."
  },
  social: {
    email: "orbinsunny@gmail.com",
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
    {
      id: "p1",
      title: "CycleGAN Sketch-to-Photo Translation",
      description: "Translates unpaired face sketches to realistic photos using CycleGAN",
      tags: ["DNN", "TensorFlow", "GAN"],
      image: "https://drive.google.com/file/d/1q4twNE2hPn2yBm8HDfxqirYFGolIb0d6/view?usp=drive_link",
      link: "#",
      category: "Deep Learning"
    },
    {
      id: "p2",
      title: "Alpha Trade",
      description: "Algorithmic trading bot using reinforcement learning.",
      tags: ["RL", "Finance", "Python"],
      image: "https://picsum.photos/600/401?grayscale",
      link: "#",
      category: "Machine Learning"
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
      institution: "Oxford University",
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