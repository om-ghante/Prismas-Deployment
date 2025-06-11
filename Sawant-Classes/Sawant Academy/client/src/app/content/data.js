import logo from "../assets/images/logo.png";
import student from "../assets/images/canvas.png";
import { FaHeart, FaUsers, FaSchool, FaAward, FaTrophy } from "react-icons/fa";
import { FaBriefcase, FaChartBar, FaClipboardList } from "react-icons/fa";
import physics from "../assets/images/physics.png";
import chemistry from "../assets/images/chemistry.png";
import maths from "../assets/images/maths.png";
import biology from "../assets/images/biology.png"
import DirectorImage from "../assets/images/directorimg.png";

export const PageNotFoundContent = {
  title: "Oops!",
  subtitle: "404 - Page Not Found",
  description: [
    "The page you are looking for might have been removed",
    "had its name changed or is temporarily unavailable.",
  ],
  button: {
    text: "Go Back",
    pageRoute: "/",
  },
};

export const NavBarContent = {
  logo: {
    icon: logo,
    text: "Sawant Academy",
  },
  menuItems: [
    { text: "Home", componentRenders: "#home" },
    { text: "About Us", componentRenders: "#aboutus" },
    { text: "Courses", componentRenders: "#courses" },
    { text: "Pre Foundation", componentRenders: "#prefoundaion" },
    { text: "Online Zone", componentRenders: "#onlinezone" },
    { text: "Gallery", componentRenders: "#gallery" },
    { text: "Contact", componentRenders: "#contacts" },
  ],
  button: {
    text: "Admission Inquiry",
    pageRoute: "/admissioninquiry",
  },
};

export const heroSubtitle1 = "KOTA PATTERN IN"
export const heroSubtitle2 = "EDUCATION OF EXCELLENCE"
export const heroTitle = "SAWANT ACADEMY";
export const heroSubtitle = "Get in Touch, Get in Touch, Get in Touch";
export const studentCount = "600";
export const rating = 5;
export const activeStudents = "2.5K";
export const totalCourses = "50+";
export const testimonial = "Explore Unlimited Courses That Fit Your The Process of career Development.";
export const ctaButtons = ["Get Started", "Try for free"];
export const user = {
  name: "Slok Bhoite",
  image: student,
};


export const timelineData = [
  {
    icon: FaHeart,
    title: "Motivation",
    description: "We inspire students to stay curious, focused, and driven toward their goals.",
  },
  {
    icon: FaUsers,
    title: "Parents Involvement",
    description: "Collaborative efforts with parents ensure a holistic learning journey.",
  },
  {
    icon: FaSchool,
    title: "Learning Environment",
    description: "A supportive and interactive space where students thrive academically and personally.",
  },
  {
    icon: FaAward,
    title: "Appreciation",
    description: "Celebrating achievements and fostering a culture of encouragement and growth.",
  },
  {
    icon: FaTrophy,
    title: "Achievement",
    description: "Recognizing milestones that reflect hard work, talent, and dedication.",
  },
];

export const welcomeSection = {
  title: "Welcome",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries.`,
};

export const courseList = [
  {
    title: "Physics",
    description: "When an unknown printer took a galley...",
    image: physics,
  },
  {
    title: "Chemistry",
    description: "All the Lorem Ipsum generators on the...",
    image: chemistry,
  },
  {
    title: "Mathematics",
    description: "When an unknown printer took a galley...",
    image: maths,
  },
  {
    title: "Biology",
    description: "When an unknown printer took a galley...",
    image: biology,
  },
];

export const Features = [
  {
    id: "01",
    icon: FaBriefcase,
    title: "VISION",
    description:
      "To be the most trusted and innovative educational institution, empowering learners to achieve academic and personal excellence.",
  },
  {
    id: "02",
    icon: FaChartBar,
    title: "MISSION",
    description:
      "Our mission is to provide high-quality, student-centered education through continuous improvement, dynamic teaching methods, and a nurturing learning environment.",
  },
  {
    id: "03",
    icon: FaClipboardList,
    title: "VALUES",
    description:
      "We uphold integrity, excellence, collaboration, inclusivity, and continuous learning as our core values guiding every step we take.",
  },
];

export const directorMessageData = {
  image: DirectorImage,
  title: "Director's Message",
  tagline: "Stubbornness, perseverance and immense hard work. The progress of students is our goal.",
  message: `Dear Students, A very warm welcome to SAWANT ACADEMY, Kolhapur. Education is the foundation upon which you can build your career and therefore we have been maintaining preventive discipline, supportive discipline and corrective discipline since 1996. There is a proper educational environment that plays a vital role in supporting and extending children’s development and learning. We believe that all successful people are big dreamers.Therefore, we honestly try to focus on discovering and developing the hidden talents and the magic lying dormant in our students, the big dreamers. Tuitions of NEET, JEE, Pre-Foundation, 11th & 12th science with PCMB, MHT-CET & CBSE are taken in Sawant Academy whereas state board syllabus is taught for Marathi Medium, Semi English Medium & English Medium students from class 5th to 10th in Sawant Coaching Classes. Sawant Academy has moved a step ahead by introducing PRE-FOUNDATION COURSES for IIT and Medical students from class 6th to 10th.Pre-Foundation courses are designed for those who wish to start their career at the earlier stage and quench their thirst of knowledge and succeed at national and international level competitive examinations. As our tagline is EDUCATION FOR EXCELLENCE, Sawant Academy is famous for academic excellence, an incredibly committed faculty, a loving and caring staff to encourage the students. We give proper guidance and motivation to the students who dream the big dream. We offer our students a stress free and suitable learning environment. Our students are taught to be honest with themselves, love first themselves, and respect their parents, teachers and all people and things. They are also told to put forth maximum effort to be successful in their life by delivering various motivational lectures on different important topics of the students. As a prospective student, you are welcome to explore options that are available to you in our various academic programmes. Come and be a part of Sawant Academy. The impossible will turn into possible. Best Regards Director, Prof. M. B. Sawant`,
};

export const contactSectionData = {
  title: "Get in Touch",
  subtitle: "We'd love to hear from you!",
  buttonText: "Send Message",
  placeholders: {
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Your Message",
  },
  successMessage: "Thank you for contacting us!",
};