import {
  Highlight,
  LearningOutcome,
  TimelineItem,
  FAQItem,
  Stat,
  Feature,
} from '../types';

export const WORKSHOP = {
  name: 'AI & Robotics Summer Workshop',
  tagline: 'Summer 2026 Cohort',
  description:
    'A hands-on 4-week online experience where children learn AI fundamentals, robotics concepts, problem-solving, and build exciting projects.',
  ageGroup: '8–14 Years',
  duration: '4 Weeks',
  mode: 'Online',
  fee: '₹2,999',
  startDate: '15 July 2026',
  trustIndicators: ['Live Mentorship', 'Hands-on Projects', 'Certificate'],
};

export const NAV_LINKS = [
  { label: 'Workshops', href: '#workshops' },
  { label: 'Courses', href: '#courses' },
  { label: 'Camps', href: '#camps' },
  { label: 'Contact', href: '#contact' },
];

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'Users', label: 'Age Group', value: '8–14 Years' },
  { icon: 'Calendar', label: 'Duration', value: '4 Weeks' },
  { icon: 'Monitor', label: 'Mode', value: 'Online Live' },
  { icon: 'IndianRupee', label: 'Fee', value: '₹2,999' },
  { icon: 'CalendarCheck', label: 'Start Date', value: '15 July 2026' },
];

export const OUTCOMES: LearningOutcome[] = [
  {
    icon: 'Brain',
    title: 'AI Fundamentals',
    description:
      'Understand what artificial intelligence is, how machines learn, and explore real-world AI applications through interactive examples.',
  },
  {
    icon: 'Cpu',
    title: 'Robotics Concepts',
    description:
      'Learn how robots perceive, plan, and act. Build foundational knowledge of sensors, actuators, and control systems.',
  },
  {
    icon: 'Lightbulb',
    title: 'Problem Solving',
    description:
      'Develop computational thinking skills. Break down complex problems into manageable steps and design effective solutions.',
  },
  {
    icon: 'Sparkles',
    title: 'Creative Thinking',
    description:
      'Combine imagination with technology. Design unique projects that showcase both technical skill and creative expression.',
  },
  {
    icon: 'Rocket',
    title: 'Project Building',
    description:
      'From concept to completion, build real working projects that demonstrate understanding of AI and robotics principles.',
  },
  {
    icon: 'Globe',
    title: 'Digital Literacy',
    description:
      'Gain confidence with modern tools, understand ethical implications of AI, and prepare for a technology-driven future.',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    week: 'Week 1',
    title: 'Introduction to AI',
    description:
      'Dive into the world of artificial intelligence. Learn what AI means, see it in action, and build your first smart application.',
    color: '#14B8A6',
  },
  {
    week: 'Week 2',
    title: 'Robotics Basics',
    description:
      'Explore the building blocks of robotics. Understand sensors, motors, and how code brings machines to life.',
    color: '#0D9488',
  },
  {
    week: 'Week 3',
    title: 'Building Smart Projects',
    description:
      'Combine AI and robotics knowledge to design intelligent systems that can sense, decide, and act autonomously.',
    color: '#0F766E',
  },
  {
    week: 'Week 4',
    title: 'Final Capstone Showcase',
    description:
      'Present your completed project to peers and mentors. Demonstrate everything you have learned in a final showcase event.',
    color: '#115E59',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What prior experience is needed?',
    answer:
      'No prior experience is required. Our workshop is designed for beginners and curious learners aged 8–14. We start from the basics and gradually build up to more advanced concepts. All material is taught in an age-appropriate manner.',
  },
  {
    question: 'Will sessions be recorded?',
    answer:
      'Yes, all live sessions are recorded and made available to enrolled students within 24 hours. You can revisit any lesson at your own pace throughout the workshop duration.',
  },
  {
    question: 'Do students receive certificates?',
    answer:
      'Absolutely. Every student who completes the workshop receives a personalized certificate of completion from Kidrove, recognizing their achievement in AI and Robotics.',
  },
  {
    question: 'Can parents track progress?',
    answer:
      'Yes, parents receive weekly progress reports with detailed feedback on their child\'s learning journey. You will also be invited to the final capstone showcase to see your child\'s completed project.',
  },
];

export const STATS: Stat[] = [
  { value: '500+', label: 'Students' },
  { value: '95%', label: 'Completion Rate' },
  { value: '4.8/5', label: 'Parent Satisfaction' },
];

export const FEATURES: Feature[] = [
  {
    icon: 'MessageCircle',
    title: 'Personal Mentorship',
    description:
      'Each student is paired with a dedicated mentor who provides personalized guidance, feedback, and support throughout the workshop.',
  },
  {
    icon: 'Layers',
    title: 'Project-Based Learning',
    description:
      'Learn by doing. Every concept is reinforced through hands-on projects that build real-world skills and confidence.',
  },
  {
    icon: 'Users',
    title: 'Small Batch Attention',
    description:
      'Limited batch sizes ensure every child receives the attention they deserve. Maximum 15 students per cohort for quality learning.',
  },
];

export const META = {
  title: 'Kidrove | AI & Robotics Summer Workshop',
  description:
    'A premium 4-week online summer workshop for young innovators aged 8–14. Learn AI, robotics, and build real projects with live mentorship.',
};
