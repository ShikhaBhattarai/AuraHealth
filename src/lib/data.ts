import drSusanBhattarai from "../assets/doctors/dr-susan-bhattarai.jpeg";
import drBinitaPathak from "../assets/doctors/dr-binita-pathak-cropped.jpeg";

export type Doctor = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  bio: string;
  photo?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-susan-bhattarai",
    name: "Dr. Susan Bhattarai",
    initials: "SB",
    role: "MD Pediatrics",
    bio: "Complete pediatric outpatient care from infancy through adolescence — well-child checkups, growth assessment, and gentle, family-centered treatment.",
    photo: drSusanBhattarai,
  },
  {
    slug: "dr-binita-pathak",
    name: "Dr. Binita Pathak",
    initials: "BP",
    role: "MDS · Prosthodontics",
    bio: "Consultant Prosthodontist specialising in restoring damaged teeth and replacing missing teeth with lasting, natural-looking results.",
    photo: drBinitaPathak,
  },
];

export type Division = {
  slug: string;
  name: string;
  who: string;
  description: string;
  services: string[];
  icon: "pediatric" | "dental" | "pharmacy";
};

export const divisions: Division[] = [
  {
    slug: "pediatric-care",
    name: "Pediatric Care",
    who: "Dr. Susan Bhattarai, MD",
    description:
      "Newborn to adolescent care — well-child checkups, growth monitoring, vaccination, and treatment for fever, asthma, allergies and infections.",
    services: ["Well-Child Checkups", "Vaccination", "Newborn Care", "Nutrition"],
    icon: "pediatric",
  },
  {
    slug: "dental-care",
    name: "Dental Care",
    who: "Dr. Binita Pathak, MDS",
    description:
      "Comprehensive dental care from routine cleaning to crowns, bridges and full smile restoration, using modern techniques and materials.",
    services: ["Cleaning", "Root Canal", "Crowns & Bridges", "Dentures"],
    icon: "dental",
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    who: "On-Site Fulfillment",
    description:
      "Prescription and OTC medicines, pediatric formulations, vitamins and medication counseling — filled the moment you leave the consult room.",
    services: ["Prescriptions", "Pediatric Meds", "Counseling", "OTC"],
    icon: "pharmacy",
  },
];

export type Offer = {
  tag: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

export const offers: Offer[] = [
  {
    tag: "New Patient",
    title: "First Pediatric Visit",
    description: "Comprehensive well-child check-up & growth assessment for first-time families.",
    linkLabel: "Book this visit →",
    href: "#appointment",
  },
  {
    tag: "Family Dental",
    title: "Checkup & Cleaning",
    description: "Exam, scaling and personalised treatment planning with Dr. Binita Pathak.",
    linkLabel: "Book this visit →",
    href: "#appointment",
  },
  {
    tag: "Convenience",
    title: "Pharmacy On-Site",
    description: "Fill your prescription the moment you leave the consultation room.",
    linkLabel: "Visit the pharmacy →",
    href: "#pharmacy",
  },
];

export type FeatureCard = {
  title: string;
  description: string;
};

export const whyChooseUs: FeatureCard[] = [
  { title: "Experienced Specialists", description: "Qualified doctors and dentists committed to your family's comfort and long-term care." },
  { title: "Personalized Care", description: "Treatment plans built around each patient — not a one-size waiting-room script." },
  { title: "Full Range of Care", description: "Pediatric, dental and pharmacy services together — everything a family needs, one address." },
  { title: "Modern Technology", description: "Bright, hygienic facilities and the newest tools for accurate diagnosis." },
  { title: "Convenient Location", description: "Easy to reach in New Baneshwor, with parking and public transport nearby." },
  { title: "Family-Friendly", description: "A warm, gentle environment for children and adults alike — never clinical or cold." },
];

export type Review = {
  quote: string;
  who: string;
};

export const sampleReviews: Review[] = [
  { quote: "Our daughter was nervous about her first check-up, but the team made her laugh within minutes. Genuinely gentle care.", who: "A. Shrestha" },
  { quote: "Root canal was quick and far more comfortable than I expected. Dr. Pathak explained every step beforehand.", who: "R. Gurung" },
  { quote: "Being able to fill the prescription downstairs right after seeing the doctor saved us an entire afternoon.", who: "S. Maharjan" },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do you treat both children and adults?",
    answer:
      "Yes. Dr. Susan Bhattarai sees children from newborn through adolescence, while our dental and pharmacy services are available to every member of the family.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Call or WhatsApp us directly, or use the request form above — our front desk confirms same-day and will call to finalise your time slot.",
  },
  {
    question: "Is the pharmacy open to walk-ins without a consultation?",
    answer: "Yes, our pharmacy serves both clinic patients and walk-in customers for prescription and over-the-counter medicines.",
  },
  {
    question: "When will Pediatric ECG and 2D Echo be available?",
    answer:
      "These cardiac services are in final setup. Register your interest at the front desk or via the Pediatric Care page and we'll notify you at launch.",
  },
];

export const pediatricNavLinks = [
  "Well Child Checkups",
  "Vaccination & Immunization",
  "Newborn Care",
  "Asthma & Allergy Care",
  "Pediatric ECG — Coming Soon",
];

export const dentalNavLinks = [
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Crowns & Bridges",
  "Dentures",
  "Smile Makeover",
];

export type PricingItem = {
  label: string;
  price: string;
};

export const appointmentPricing: PricingItem[] = [
  { label: "New pediatric visit", price: "NPR 1,500" },
  { label: "Family dental exam", price: "NPR 1,200" },
  { label: "Second dental opinion", price: "Free" },
];

export const googleRating = {
  score: "4.9",
  source: "based on Google Reviews",
};

export const comingSoon = {
  tag: "Coming Soon",
  title: "Pediatric Echocardiography (2D Echo) & ECG",
  description:
    "Comprehensive pediatric cardiac evaluation, soon available on-site — no referral across town for children with suspected or known heart conditions.",
};

export const areasServed = [
  "Koteshwor",
  "Tinkune",
  "Anamnagar",
  "Maitidevi",
  "Battisputali",
  "Sinamangal",
  "Baneshwor Chowk",
];

export const siteConfig = {
  name: "Aura Health Clinic",
  legalName: "Aura Health Clinic Pvt. Ltd.",
  tagline: "Caring for Every Smile. Caring for Every Child.",
  phone: "+977 1-4533417",
  phoneHref: "tel:+97714533417",
  whatsappHref: "https://wa.me/+977 14533417",
  address: "Ward 10, House Number 525, Devkota Sadak, Kathmandu 44600, Nepal (Near Eyeplex Mall)",
  addressHref: "https://share.google/RlmW6bGCXGmaavojw",
  areaShort: "New Baneshwor, Kathmandu",
  hours: [
    { days: "Sun – Fri", time: "9:00 – 18:00" },
    { days: "Saturday", time: "Closed" },
  ],
};
