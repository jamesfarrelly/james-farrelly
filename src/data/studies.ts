export const studies = [
  {
    title: "Applied Generative AI Certificate",
    institution: "Johs Hopkins University - Whiting School of Engineering",
    description:
      "Johns Hopkins University's 16-week Certificate in Applied Generative AI, mastering prompt engineering, LLM fine-tuning, agentic AI development, and ethical deployment of GenAI solutions. Delivered hands-on projects and case studies applying Python, NLP, and secure AI workflows to solve real-world business challenges.",
    tags: [
      "Generative AI",
      "Prompt Engineering",
      "LLM Fine-Tuning",
      "Ethical AI",
    ],
  },
  {
    title: "Bachelor of Arts in Organizational Management",
    institution: "Cabrini University",
    description:
      "Leadership, strategic planning, and operational skills to manage teams and drive organizational success across industries..",
    tags: [
      "Organizational Leadership",
      "Strategic Management",
      "Team Development",
      "ConflictResolution",
    ],
  },
  {
    title: "Computer Science Studies - no degree",
    institution: "Drexel University",
    description:
      "Foundational software engineering, algorithms, and data structures. The program was defined by Drexel's renowned co-op, which integrated 18 months of full-time, practical industry experience alongside traditional academics.",
    tags: [
      "Algorithm Design",
      "Computer Engineering",
      "Data Structures",
      "Optimization",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

