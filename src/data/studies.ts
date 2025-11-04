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

];

export type StudyItem = (typeof studies)[number];

