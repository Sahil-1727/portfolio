import type { PanelId } from "../types/navigation";

interface NavigationItem {
  label: string;
  value: PanelId;
}

const uiText = {
  navigation: [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Skills", value: "skills" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: "Data Science Portfolio",
    start: "Start",
    next: "Next",
    downloadResume: "Download Resume",
  },
  social: {
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  about: {
    experienceHeading: "Technical Experience",
    educationHeading: "Education",
  },
  skills: {
    heading: "Technical Skills",
    introduction:
      "A practical technical stack for building data science applications, machine learning projects, and GenAI workflows.",
  },
  projects: {
    heading: "Projects",
    introduction:
      "Selected projects covering GenAI, full stack development, and SaaS platform engineering.",
    viewOnGitHub: "View on GitHub",
  },
  contact: {
    heading: "Contact",
    emailLabel: "Email",
    quickMessageHeading: "Quick Message",
    nameLabel: "Your name",
    emailFieldLabel: "Your email",
    messageLabel: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    sentSuccessfully: "Message sent successfully.",
    helperText: "This form sends your message directly to my email.",
    hiddenFrameTitle: "web3forms-hidden-frame",
  },
  footer: {
    rightsReserved: "All rights reserved.",
  },
};

export default uiText;
