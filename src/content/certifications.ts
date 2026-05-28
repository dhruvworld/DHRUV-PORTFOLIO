export type Certification = {
  title: string;
  issuer: string;
  issued?: string;
};

export const certifications: Certification[] = [
  { title: "AI Python for Beginners", issuer: "DeepLearning.AI", issued: "Sep 2025" },
  { title: "Creator Course", issuer: "Instagram", issued: "Aug 2023" },
  { title: "Machine Learning with Google Colab", issuer: "Training program" },
  { title: "Intermediate Python Immersive Training", issuer: "Training program" },
  { title: "PHP & MySQL", issuer: "Training program" },
  { title: "JavaScript for Beginners", issuer: "Training program" },
  { title: "Django Python Workshop", issuer: "Training program" },
];

export const resumePdfPath = "/cv/dhruv-solanki-resume.pdf";
