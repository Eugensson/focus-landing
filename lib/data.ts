import {
  RiYoutubeLine,
  RiTwitterXFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
import { ImDribbble } from "react-icons/im";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

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

import notionImg from "@/public/integrations/notion.svg";
import slackImg from "@/public/integrations/slack.svg";
import googleDriveImg from "@/public/integrations/google_drive.svg";
import intercomImg from "@/public/integrations/intercom.svg";
import jiraImg from "@/public/integrations/jira.svg";
import dropboxImg from "@/public/integrations/dropbox.svg";
import stripeImg from "@/public/integrations/stripe.svg";
import zapierImg from "@/public/integrations/zapier.svg";
import figmaImg from "@/public/integrations/figma.svg";
import confluenceImg from "@/public/integrations/confluence.svg";
import mailchimpImg from "@/public/integrations/mailchimp.svg";
import whatsappImg from "@/public/integrations/whatsapp.svg";
import discordImg from "@/public/integrations/discord.svg";
import bitbucketImg from "@/public/integrations/bitbucket.svg";
import invisionImg from "@/public/integrations/invision.svg";
import evernoteImg from "@/public/integrations/evernote.svg";

import { Brand, Feature, Integration, Social, Testimonial } from "@/types";

export const brandsData: Brand[] = [
  { src: brand1, alt: "Odeao Labs Logo" },
  { src: brand2, alt: "Global Bank Logo" },
  { src: brand3, alt: "StackEd Lab Logo" },
  { src: brand4, alt: "Magnolia Logo" },
  { src: brand5, alt: "Warpspeed Logo" },
  { src: brand6, alt: "Sisyphus Logo" },
  { src: brand7, alt: "Ikigai Labs Logo" },
];

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

export const integrationData: Integration[] = [
  { src: notionImg, alt: "Notion Logo" },
  { src: slackImg, alt: "Slack Logo" },
  { src: googleDriveImg, alt: "Google Drive Logo" },
  { src: intercomImg, alt: "Intercom Logo" },
  { src: jiraImg, alt: "Jira Logo" },
  { src: dropboxImg, alt: "Dropbox Logo" },
  { src: stripeImg, alt: "Stripe Logo" },
  { src: zapierImg, alt: "Zapier Logo" },
  { src: figmaImg, alt: "Figma Logo" },
  { src: confluenceImg, alt: "Confluence Logo" },
  { src: mailchimpImg, alt: "Mailchimp Logo" },
  { src: whatsappImg, alt: "WhatsApp Logo" },
  { src: discordImg, alt: "Discord Logo" },
  { src: bitbucketImg, alt: "Bitbucket Logo" },
  { src: invisionImg, alt: "Invision Logo" },
  { src: evernoteImg, alt: "Evernote Logo" },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "James Walker",
    message:
      "Focus transformed how our team manages tasks. Smart tools and real-time updates keep everyone aligned and working efficiently every day.",
  },
  {
    id: "2",
    name: "Charlotte Hughes",
    message:
      "Since adopting Focus, our productivity soared. The intuitive design and seamless integrations make teamwork smooth and rewarding.",
  },
  {
    id: "3",
    name: "Benjamin Turner",
    message:
      "Focus streamlined our communication across teams. Clear analytics and automation keep every project transparent and on track.",
  },
  {
    id: "4",
    name: "Amelia Harris",
    message:
      "Our remote team stays perfectly connected with Focus. Instant updates and smart task management boost workflow efficiency daily.",
  },
  {
    id: "5",
    name: "Oliver Bennett",
    message:
      "We use Focus daily to manage client projects. Its modern design and reliable integrations make coordination simple and fast.",
  },
  {
    id: "6",
    name: "Isla Robinson",
    message:
      "Focus unites all our tools in one workspace. It’s intuitive, fast, and keeps our team organised and productive at every stage.",
  },
  {
    id: "7",
    name: "Henry Clarke",
    message:
      "With Focus, our workflows are faster and clearer. Tasks, updates, and reports stay centralised, improving collaboration for all.",
  },
];

export const socialsData: Social[] = [
  {
    icon: RiTwitterXFill,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: RiLinkedinBoxFill,
    href: "https://linkedin.com",
    label: "Linkedin",
  },
  {
    icon: RiFacebookCircleFill,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: RxGithubLogo,
    href: "https://github.com",
    label: "Github",
  },
  {
    icon: ImDribbble,
    href: "https://dribbble.com",
    label: "Dribbble",
  },
  {
    icon: RiYoutubeLine,
    href: "https://youtube.com",
    label: "Youtube",
  },
  {
    icon: RxDiscordLogo,
    href: "https://discord.com",
    label: "Discord",
  },
];
