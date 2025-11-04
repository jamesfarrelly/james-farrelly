import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Vice President - R&D Platforms and Services",
    company: "Pfizer",
    region: "Collegeville, PA (2024 - Present)",
    description:
      "Directing 5 global teams in custom development and innovation for R&D platforms. Leading strategic projects like the $50M AI Document Generation program and driving AI strategy across R&D business units.",
    technologies: [
      "Executive Leadership",
      "AI Strategy",
      "Generative AI",
      "R&D Platforms",
      "Innovation Management",
      "Global Teams",
    ],
  },
  {
    title: "Senior Director - Clinical Products and Solutions",
    company: "Pfizer",
    region: "Collegeville, PA (2019 - 2024)",
    description:
      "Established and led the team managing the Clinical Trial Experience for investigators, patients, and staff. Delivered critical systems for the Pfizer COVID-19 Vaccine Trial, including patient recruitment, consent, and data collection.",
    technologies: [
      "Product Management",
      "Team Building",
      "Clinical Trial Systems",
      "Digital Health",
      "Patient Engagement",
    ],
  },
  {
    title: "Senior Director - Product Manager Team Lead",
    company: "Pfizer",
    region: "Collegeville, PA (2017 - 2019)",
    description:
      "Created the Product Owner function across Pfizer’s Commercial products, building the annual roadmap and strategy presentation for all commercial areas.",
    technologies: [
      "Product Ownership",
      "Agile Methodologies",
      "Roadmapping",
      "Commercial Strategy",
    ],
  },
  {
    title: "Director - Global Digital Center of Excellence Lead",
    company: "Pfizer",
    region: "Collegeville, PA (2013 - 2017)",
    description:
      "Directed the development and deployment of the PfizerPro HCP platform to over 60 countries, enabling compliant, high-speed digital marketing and customer engagement.",
    technologies: ["Digital Platforms", "Global Deployment", "Marketing Technology", "Compliance"],
  },
  {
    title: "Director - Architecture, Engineering and Development Lead",
    company: "Pfizer",
    region: "Collegeville, PA (2011 - 2013)",
    description:
      "Designed and established a new group to deliver transformational technology. Led the delivery of the Veeva CRM system to Europe and the first deployment of iPads to US Sales teams.",
    technologies: ["CRM (Veeva)", "Mobile Deployment", "Sales Technology", "Architecture"],
  },
  {
    title: "Manager - Innovation Lead, Consumer Health R&D",
    company: "Pfizer",
    region: "Collegeville, PA (2009 - 2011)",
    description:
      "Delivered a full Laboratory System Transformation, including LIMS (Labware) and Electronic Lab Notebooks (IDBS). Co-founded the Consumer Health Innovation Council.",
    technologies: ["LIMS", "ELN", "R&D Systems", "Labware", "IDBS", "Innovation"],
  },
];

export type WorkItem = (typeof work)[number];
