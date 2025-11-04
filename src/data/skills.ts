export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "Executive Leadership & Strategy",
    description: "Leading global, high-stakes technology initiatives from vision to delivery. Setting a clear purpose and aligning large teams to solve complex business challenges, particularly in R&D and digital transformation.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "People-First Team Building",
    description: "A core philosophy of meeting people where they are and empowering them to shine. I have a track record of building high-trust, high-performance global teams that thrive on collaboration and a shared mission..",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "Digital Transformation & Solution Delivery",
    description: "Decades of experience delivering mission-critical digital platforms. This includes leading the development of AI-driven automation, cloud-native tools, and patient-centric clinical systems that accelerate science.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Cross-Functional Collaboration",
    description: "Expertise in breaking down organizational silos to unite diverse stakeholders. I effectively bridge the gap between engineering, clinical operations, compliance, and business units to achieve a single, shared goal.",
  },
];

export type Skill = (typeof skills)[number];

