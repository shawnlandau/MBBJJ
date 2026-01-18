// Site Information
export const SITE_INFO = {
  name: "Myrtle Beach BJJ & Judo",
  tagline: "Build confidence, strength, and discipline",
  description: "Premier Judo and Brazilian Jiu-Jitsu training in Myrtle Beach. Adult classes taught by highly experienced instructors.",
  email: "myrtlebeachbjj@gmail.com",
  phone: "(843) XXX-XXXX", // Update with actual phone
  address: {
    street: "3334 US-17",
    city: "Murrells Inlet",
    state: "SC",
    zip: "29576",
    full: "American 24 Fitness, 3334 US-17, Murrells Inlet, SC 29576"
  },
  social: {
    facebook: "https://facebook.com/myrtlebeachbjj",
    instagram: "https://instagram.com/myrtlebeachbjj",
  },
  hours: {
    monday: "6:00 PM - 8:00 PM",
    tuesday: "6:00 PM - 8:00 PM",
    wednesday: "6:00 PM - 8:00 PM",
    thursday: "6:00 PM - 8:00 PM",
    friday: "6:00 PM - 8:00 PM",
    saturday: "10:00 AM - 12:00 PM",
    sunday: "Closed"
  }
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Schedule", path: "/schedule" },
  { name: "Instructors", path: "/instructors" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Programs Data
export const PROGRAMS = [
  {
    id: "adult-judo",
    title: "Adult Judo",
    description: "Learn the art of throwing and grappling. Judo develops physical fitness, mental discipline, and self-defense skills through dynamic techniques.",
    features: [
      "Traditional Judo techniques",
      "Olympic-style training",
      "Throwing and takedown mastery",
      "Competition preparation",
      "Physical conditioning"
    ],
    icon: "🥋",
    image: "/images/programs/judo.jpg",
    schedule: ["Monday 6:00 PM", "Wednesday 6:00 PM", "Friday 6:00 PM"]
  },
  {
    id: "adult-bjj",
    title: "Brazilian Jiu-Jitsu",
    description: "Master ground fighting and submission techniques. BJJ emphasizes leverage and technique over strength, making it effective for all body types.",
    features: [
      "Ground fighting techniques",
      "Submission grappling",
      "Self-defense applications",
      "Sport BJJ competition",
      "Progressive belt system"
    ],
    icon: "🤼",
    image: "/images/programs/bjj.jpg",
    schedule: ["Tuesday 6:00 PM", "Thursday 6:00 PM", "Saturday 10:00 AM"]
  },
  {
    id: "private-training",
    title: "Private Instruction",
    description: "One-on-one personalized training tailored to your goals. Perfect for accelerated learning, competition preparation, or specialized technique development.",
    features: [
      "Customized training plans",
      "Flexible scheduling",
      "Personalized attention",
      "Accelerated learning",
      "Competition preparation"
    ],
    icon: "👥",
    image: "/images/programs/private.jpg",
    schedule: ["By Appointment"]
  }
];

// Benefits
export const BENEFITS = [
  {
    title: "Self-Defense",
    description: "Learn practical self-defense techniques that work in real-world situations.",
    icon: "🛡️"
  },
  {
    title: "Physical Fitness",
    description: "Get in the best shape of your life with our high-intensity training.",
    icon: "💪"
  },
  {
    title: "Mental Discipline",
    description: "Develop focus, patience, and mental toughness through martial arts.",
    icon: "🧠"
  },
  {
    title: "Community",
    description: "Join a supportive community of like-minded individuals pursuing growth.",
    icon: "👥"
  },
  {
    title: "Stress Relief",
    description: "Release stress and tension through physical activity and focused training.",
    icon: "😌"
  },
  {
    title: "Confidence",
    description: "Build self-confidence as you master new skills and overcome challenges.",
    icon: "⭐"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    text: "Best BJJ gym in Myrtle Beach! The instructors are knowledgeable, patient, and truly care about each student's progress.",
    date: "2024-01"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    text: "I've trained at several gyms, and this is by far the most welcoming and professional. Great techniques and amazing community!",
    date: "2024-02"
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    rating: 5,
    text: "The judo program is exceptional. I've learned so much in just a few months. Highly recommend for anyone looking to learn martial arts.",
    date: "2023-12"
  },
  {
    id: 4,
    name: "Emily Chen",
    rating: 5,
    text: "As a woman, I was nervous to start, but the environment is so supportive. I've gained confidence and made great friends!",
    date: "2024-01"
  },
  {
    id: 5,
    name: "David Martinez",
    rating: 5,
    text: "The private lessons have accelerated my progress tremendously. The personalized attention makes all the difference.",
    date: "2024-03"
  }
];

// Schedule Data
export const SCHEDULE = [
  {
    day: "Monday",
    classes: [
      { time: "6:00 PM - 8:00 PM", program: "Adult Judo", level: "All Levels", instructor: "TBD" }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "6:00 PM - 8:00 PM", program: "Brazilian Jiu-Jitsu", level: "All Levels", instructor: "TBD" }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 PM - 8:00 PM", program: "Adult Judo", level: "All Levels", instructor: "TBD" }
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:00 PM - 8:00 PM", program: "Brazilian Jiu-Jitsu", level: "All Levels", instructor: "TBD" }
    ]
  },
  {
    day: "Friday",
    classes: [
      { time: "6:00 PM - 8:00 PM", program: "Adult Judo", level: "All Levels", instructor: "TBD" }
    ]
  },
  {
    day: "Saturday",
    classes: [
      { time: "10:00 AM - 12:00 PM", program: "Brazilian Jiu-Jitsu", level: "All Levels", instructor: "TBD" }
    ]
  },
  {
    day: "Sunday",
    classes: []
  }
];

// Instructors Data
export const INSTRUCTORS = [
  {
    id: 1,
    name: "Instructor Name",
    title: "Head Instructor - Judo & BJJ",
    rank: "Black Belt",
    bio: "With over 15 years of experience in martial arts, our head instructor has dedicated their life to teaching and perfecting the arts of Judo and Brazilian Jiu-Jitsu. They hold black belts in both disciplines and have competed at national and international levels.",
    certifications: [
      "Black Belt - Judo",
      "Black Belt - Brazilian Jiu-Jitsu",
      "USA Judo Certified Coach",
      "First Aid/CPR Certified"
    ],
    image: "/images/instructors/instructor1.jpg",
    specialties: ["Competition Training", "Fundamentals", "Advanced Techniques"]
  },
  {
    id: 2,
    name: "Assistant Instructor",
    title: "Assistant Instructor - BJJ",
    rank: "Brown Belt",
    bio: "A passionate practitioner with 8 years of experience in Brazilian Jiu-Jitsu. Known for their technical approach and patient teaching style, they excel at helping beginners build a strong foundation.",
    certifications: [
      "Brown Belt - Brazilian Jiu-Jitsu",
      "Purple Belt - Judo",
      "First Aid/CPR Certified"
    ],
    image: "/images/instructors/instructor2.jpg",
    specialties: ["Beginners", "Self-Defense", "Technical Drilling"]
  }
];

// FAQ Data
export const FAQ_ITEMS = [
  {
    question: "Do I need prior experience to join?",
    answer: "Not at all! We welcome students of all experience levels, from complete beginners to advanced practitioners. Our instructors will work with you at your own pace."
  },
  {
    question: "What should I wear to my first class?",
    answer: "For your first class, just wear comfortable athletic clothing (t-shirt and shorts or sweatpants). Once you decide to continue, you'll need a gi (uniform), which we can help you purchase."
  },
  {
    question: "How often should I train?",
    answer: "We recommend training at least 2-3 times per week to see consistent progress. However, you can attend as many classes as you like with your membership."
  },
  {
    question: "Is there an age limit?",
    answer: "Our adult classes are for ages 16 and up. We focus on creating a safe and respectful training environment for all adult students."
  },
  {
    question: "What are your pricing options?",
    answer: "We offer flexible membership options including monthly unlimited, class packages, and drop-in rates. Contact us for current pricing and special offers."
  },
  {
    question: "Can I try a class before committing?",
    answer: "Absolutely! We offer a free trial class so you can experience our training firsthand. Just contact us to schedule your visit."
  }
];
