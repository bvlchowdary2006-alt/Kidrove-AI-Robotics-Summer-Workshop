export interface Highlight {
  icon: string;
  label: string;
  value: string;
}

export interface LearningOutcome {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  week: string;
  title: string;
  description: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  parentName: string;
  childAge: number;
}
