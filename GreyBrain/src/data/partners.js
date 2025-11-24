import santaanLogo from '../assets/santaan-logo.png'; 
import skidsLogo from '../assets/skids-logo.png';
import saiscanLogo from '../assets/saiscan-logo.webp';

const partnersData = [
    
    {
      id: 1,
      name: "SKIDS",
      description: "AI-driven child health assessment platform for your children.",
      logo: skidsLogo,
      links: [
        { text: "SKIDS Health", url: "https://www.skids.health/", intro: "AI-Driven Comprehensive Health Screening for Schools" },
        {text: "SKIDS Clinic", url: "https://www.skids.clinic/", intro: "AI-Driven Comprehensive Health Screening"},
        { text: "DigiParenting", url: "https://digiparenting.skids.clinic/", intro: "AI-Driven Comprehensive Health Learning" }
      ]
    },
    {
      id: 2,
      name: "SKIDS Advanced",
      description: "A fun, science-backed educational platform that helps parents and children explore every organ system through interactive storytelling and visuals. Each module includes hands-on activities designed to spark learning, strengthen bonding, and make the human body come alive at home.",
      logo: skidsLogo,
      links: [
        { text: "SKIDS Advanced", url: "https://advance.skids.clinic/" },
      ]
    },
    {
      id: 3,
      name: "Santaan",
      description: "AI-powered fertility care with embryo grading, personalized treatment paths, transparent counselling, and EMR-based quality monitoring for smarter, data-driven outcomes.",
      logo: santaanLogo,
      links: [
        { text: "Santaan AI EMR", url: "https://santaanaimr.santaan.in/", intro: "AI with Electronic Medical Records to transform static patient data into an intelligent, dynamic system" },
        { text: "IVF Companion", url: "https://companion.santaan.in/" },
        { text: "Santaan AI SOP & Training Platform", url: "https://saisop.netlify.app/", intro: "Standarized protocols ensuring service Consistency" },
        { text: "FertiVision", url: "https://fertivision.netlify.app/", intro: "AI visual model with 94.2% accuracy for fertility analysis" },
        { text: "Fertility Pathway Planner (FertiPaath)", url: "https://fertipath.santaan.in/", intro: "Predicts and personalizes treatment paths for new patients" },
        { text: "Fertirite", url: "https://fertilite.santaan.in/"}
      ]
    },
  ];

  export {partnersData } ;