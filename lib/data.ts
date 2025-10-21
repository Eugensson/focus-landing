import brand1 from "@/public/brands/brand-1.svg";
import brand2 from "@/public/brands/brand-2.svg";
import brand3 from "@/public/brands/brand-3.svg";
import brand4 from "@/public/brands/brand-4.svg";
import brand5 from "@/public/brands/brand-5.svg";
import brand6 from "@/public/brands/brand-6.svg";
import brand7 from "@/public/brands/brand-7.svg";

import feature1 from "@/public/features/img-1.svg";
import feature2 from "@/public/features/img-2.svg";
import feature3 from "@/public/features/img-3.svg";
import feature4 from "@/public/features/img-4.svg";

import { Brand, Feature } from "@/types";

export const brandsData: Brand[] = [
  { src: brand1, alt: "Odeao Labs Logo" },
  { src: brand2, alt: "Global Bank Logo" },
  { src: brand3, alt: "StackEd Lab Logo" },
  { src: brand4, alt: "Magnolia Logo" },
  { src: brand5, alt: "Warpspeed Logo" },
  { src: brand6, alt: "Sisyphus Logo" },
  { src: brand7, alt: "Ikigai Labs Logo" },
];

// export const featuresData: Feature[] = [
//   {
//     imgSrc: feature1,
//     title: "Smart Task Management",
//     description: "Organize and prioritize tasks effortlessly.",
//     highlight: [
//       "Set due dates and reminders.",
//       "Track progress and milestones.",
//       "Easily sort tasks by priority.",
//     ],
//   },
//   {
//     imgSrc: feature2,
//     title: "Real-Time Collaboration",
//     description: "Collaborate with your team in real-time.",
//     highlight: [
//       "Share updates instantly with teammates.",
//       "Edit documents and boards together.",
//       "Keep everyone aligned with live changes.",
//     ],
//   },
//   {
//     imgSrc: feature3,
//     title: "Advanced Analytics",
//     description: "Gain insights to boost your productivity.",
//     highlight: [
//       "View performance metrics in one dashboard.",
//       "Identify trends and productivity patterns.",
//       "Make data-driven decisions effortlessly.",
//     ],
//   },
//   {
//     imgSrc: feature4,
//     title: "Customizable Workspaces",
//     description: "Personalize your workspace for maximum efficiency.",
//     highlight: [
//       "Design layouts to match your workflow.",
//       "Use themes and widgets for quick access.",
//       "Save templates for recurring projects.",
//     ],
//   },
// ];

export const featuresData: Feature[] = [
  {
    imgSrc: feature1,
    title: "Smart Task Management",
    description: "Organize and prioritize tasks effortlessly.",
    highlight: [
      "Set due dates and automated reminders.",
      "Monitor progress and key milestones.",
      "Prioritize initiatives for optimal impact.",
    ],
  },
  {
    imgSrc: feature2,
    title: "Real-Time Collaboration",
    description: "Collaborate with your team in real-time.",
    highlight: [
      "Share updates and files instantly across teams.",
      "Coordinate tasks with seamless live editing.",
      "Maintain alignment through synchronized workflows.",
    ],
  },
  {
    imgSrc: feature3,
    title: "Advanced Analytics",
    description: "Gain insights to boost your productivity.",
    highlight: [
      "Track performance with intuitive dashboards.",
      "Analyze trends to identify growth opportunities.",
      "Generate actionable reports for better decisions.",
    ],
  },
  {
    imgSrc: feature4,
    title: "Customizable Workspaces",
    description: "Personalize your workspace for maximum efficiency.",
    highlight: [
      "Tailor layouts to fit your team’s objectives.",
      "Integrate essential tools within one interface.",
      "Create reusable templates for recurring workflows.",
    ],
  },
];
