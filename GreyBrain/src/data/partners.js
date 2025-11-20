import santaanLogo from '../assets/santaan-logo.png'; 
import skidsLogo from '../assets/skids-logo.png';
import saiscanLogo from '../assets/saiscan-logo.webp';

const partnersData = [
    {
      id: 1,
      name: "Santaan",
      description: "AI-powered fertility care with embryo grading, personalized treatment paths, transparent counselling, and EMR-based quality monitoring for smarter, data-driven outcomes.",
      logo: santaanLogo,
      links: [
        { text: "Santaan AI EMR", url: "https://santaanaimr.santaan.in/" },
        { text: "IVF Companion", url: "https://companion.santaan.in/" },
        { text: "Santaan AI SOP & Training Platform", url: "https://saisop.netlify.app/" },
        { text: "FertiVision", url: "https://fertivision.netlify.app/" },
        { text: "Fertility Pathway Planner (FertiPaath)", url: "https://fertipath.santaan.in/" },
        { text: "Fertirite", url: "https://fertilite.santaan.in/"}
      ]
    },
    {
      id: 2,
      name: "SKIDS",
      description: "AI-driven child health assessment platform",
      logo: skidsLogo,
      links: [
        { text: "SKIDS Advanced", url: "https://advance.skids.clinic/sign-in" },
        { text: "DigiParenting", url: "https://digiparenting.skids.clinic/" }
      ]
    },
    {
      id: 3,
      name: "SAIScan",
      description: "AI Enabled High Quality Diagnostic Lab",
      logo: saiscanLogo,
      links: [
        { text: "SAIScan", url: "https://www.saiscan.com/" },
      ]
    }
  ];

  export {partnersData } ;