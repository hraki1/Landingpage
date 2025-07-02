"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Head from "next/head";
import {
  FiCode,
  FiCloud,
  FiShield,
  FiBarChart2,
  FiSmartphone,
  FiCpu,
  FiCheck,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiChevronDown,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMenu,
  FiX,
  FiGlobe,
  FiDatabase,
  FiServer,
} from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";


// Types
type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
};

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
};

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
};

// Premium data
const services: Service[] = [
  {
    icon: <FiCode className="text-3xl" />,
    title: "Enterprise Software Development",
    description:
      "Custom-built solutions designed to streamline your business operations and drive digital transformation.",
    highlights: [
      "Full-stack development",
      "Microservices architecture",
      "CI/CD pipeline integration",
      "Legacy system modernization",
    ],
  },
  {
    icon: <FiCloud className="text-3xl" />,
    title: "Cloud Infrastructure",
    description:
      "End-to-end cloud solutions from migration to optimization across all major platforms.",
    highlights: [
      "Multi-cloud strategy",
      "Kubernetes orchestration",
      "Serverless architecture",
      "Disaster recovery",
    ],
  },
  {
    icon: <FiShield className="text-3xl" />,
    title: "Cybersecurity",
    description:
      "Comprehensive protection for your digital assets with 24/7 monitoring and threat intelligence.",
    highlights: [
      "Zero-trust architecture",
      "Penetration testing",
      "SOC 2 compliance",
      "Incident response",
    ],
  },
  {
    icon: <FiBarChart2 className="text-3xl" />,
    title: "Data Analytics & AI",
    description:
      "Transform raw data into actionable insights with our advanced analytics platforms.",
    highlights: [
      "Predictive modeling",
      "Real-time dashboards",
      "Machine learning ops",
      "Data governance",
    ],
  },
  {
    icon: <FiSmartphone className="text-3xl" />,
    title: "Mobile Solutions",
    description:
      "Cross-platform mobile experiences that engage users and drive business growth.",
    highlights: [
      "React Native development",
      "Progressive web apps",
      "Mobile security",
      "Offline-first design",
    ],
  },
  {
    icon: <FiCpu className="text-3xl" />,
    title: "Digital Transformation",
    description:
      "Holistic strategy and implementation to future-proof your business technology.",
    highlights: [
      "Process automation",
      "IoT integration",
      "Blockchain solutions",
      "AR/VR experiences",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The team delivered exceptional results, reducing our operational costs by 40% while improving system reliability.",
    name: "Michael Johnson",
    role: "Chief Technology Officer",
    company: "Fortune 500 Retailer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their cybersecurity framework helped us achieve ISO 27001 certification and significantly improved our security posture.",
    name: "Sarah Williams",
    role: "Director of Information Security",
    company: "Global Financial Services",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Our mobile app developed by this team achieved 4.8 stars with 500k+ downloads in the first quarter post-launch.",
    name: "David Chen",
    role: "Product Director",
    company: "HealthTech Startup",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Global E-Commerce Platform",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "GraphQL", "Microservices"],
    description:
      "Scalable platform handling 10,000+ transactions daily across 30 countries",
  },
  {
    id: 2,
    title: "AI-Powered Supply Chain",
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1655720828012-585b42414544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "TensorFlow", "Computer Vision", "IoT"],
    description: "Reduced inventory waste by 28% through predictive analytics",
  },
  {
    id: 3,
    title: "Banking Security Overhaul",
    category: "security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Zero Trust", "Biometrics", "FIDO2", "Compliance"],
    description: "Implemented multi-factor authentication for 5 million users",
  },
];

const stats = [
  { id: 1, value: 300, label: "Enterprise Clients", icon: <FiGlobe /> },
  { id: 2, value: 750, label: "Projects Delivered", icon: <FiDatabase /> },
  { id: 3, value: 120, label: "Technology Experts", icon: <FiServer /> },
  { id: 4, value: 99, label: "Client Satisfaction", icon: <FiCheck /> },
];

const industries = [
  "Finance & Banking",
  "Healthcare",
  "Retail & E-Commerce",
  "Manufacturing",
  "Education",
  "Government",
  "Energy",
  "Telecommunications",
];

const technologies = [
  "Artificial Intelligence",
  "Blockchain",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Internet of Things",
  "Machine Learning",
  "Quantum Computing",
];

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioItems);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Toggle dropdown
  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownOpen({});
  };

  // Filter portfolio items
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPortfolio(portfolioItems);
    } else {
      setFilteredPortfolio(
        portfolioItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter animation for stats
  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) {
            clearInterval(timer);
            return value;
          }
          return Math.ceil(prev + increment);
        });
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{count}+</span>;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Head>
        <title>Enterprise IT Solutions & Digital Transformation</title>
        <meta
          name="description"
          content="World-class technology services for Fortune 500 companies and high-growth startups"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://example.com/social-preview.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Premium Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-gray-900 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaLaptopCode className="mr-2 text-indigo-600" size={28} />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              TechSolutions
            </span>
          </motion.a>

          <nav className="hidden lg:flex space-x-8 items-center">
            {[
              "Solutions",
              "Industries",
              "Case Studies",
              "Insights",
              "Company",
            ].map((item, index) => (
              <motion.div
                key={item}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <button
                  onClick={() => toggleDropdown(item)}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors flex items-center"
                >
                  {item}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      dropdownOpen[item] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen[item] && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item === "Solutions" &&
                        services.slice(0, 4).map((service) => (
                          <a
                            key={service.title}
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            <div className="flex items-center">
                              <span className="mr-2">{service.icon}</span>
                              {service.title}
                            </div>
                          </a>
                        ))}
                      {item === "Industries" &&
                        industries.slice(0, 4).map((industry) => (
                          <a
                            key={industry}
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            {industry}
                          </a>
                        ))}
                      {item === "Company" &&
                        ["About Us", "Leadership", "Careers", "Contact"].map(
                          (link) => (
                            <a
                              key={link}
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                              onClick={closeAllDropdowns}
                            >
                              {link}
                            </a>
                          )
                        )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </nav>

          <button
            className="lg:hidden text-gray-800 text-2xl z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* Premium Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center space-y-8 w-full px-6">
                  {[
                    "Solutions",
                    "Industries",
                    "Case Studies",
                    "Insights",
                    "Company",
                  ].map((item) => (
                    <motion.div key={item} className="w-full">
                      <button
                        onClick={() => toggleDropdown(`mobile-${item}`)}
                        className="text-2xl font-medium text-gray-800 hover:text-indigo-600 transition-colors w-full text-center py-3 border-b border-gray-100 flex items-center justify-center"
                      >
                        {item}
                        <svg
                          className={`w-5 h-5 ml-2 transition-transform ${
                            dropdownOpen[`mobile-${item}`] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {dropdownOpen[`mobile-${item}`] && (
                          <motion.div
                            className="w-full bg-gray-50 rounded-lg py-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item === "Solutions" &&
                              services.slice(0, 4).map((service) => (
                                <a
                                  key={service.title}
                                  href="#"
                                  className="block px-6 py-3 text-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <div className="flex items-center">
                                    <span className="mr-3">{service.icon}</span>
                                    {service.title}
                                  </div>
                                </a>
                              ))}
                            {item === "Industries" &&
                              industries.slice(0, 4).map((industry) => (
                                <a
                                  key={industry}
                                  href="#"
                                  className="block px-6 py-3 text-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {industry}
                                </a>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                  <motion.button
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg w-full max-w-xs shadow-md mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y }}
          ref={ref}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-600/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-40 w-48 h-48 bg-purple-600/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/20 mb-4">
              Enterprise IT Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Businesses Through{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We deliver world-class digital transformation solutions to Fortune
            500 companies and high-growth startups worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
              <FiArrowRight className="ml-2" />
            </motion.a>

            <motion.a
              href="#solutions"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center items-center space-x-8 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {["Microsoft", "AWS", "Google", "IBM", "Oracle"].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-white/80 font-medium">{company}</span>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        <motion.a
          href="#solutions"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiChevronDown size={32} />
        </motion.a>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
            {[
              "ISO-27001",
              "SOC-2",
              "Microsoft-Gold",
              "AWS-Partner",
              "Google-Certified",
            ].map((badge, index) => (
              <motion.div
                key={badge}
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-32 h-32 flex items-center justify-center">
                  <span className="text-gray-700 font-medium text-sm text-center">
                    {badge.replace("-", " ")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-medium mb-4">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Enterprise-Grade{" "}
              <span className="text-indigo-600">Technology Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to address your most complex
              business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 text-3xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more about {service.title.split(" ")[0]}
                    <FiArrowRight className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-medium mb-4">
              INDUSTRY EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tailored Solutions for{" "}
              <span className="text-indigo-600">Your Industry</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and compliance requirements of
              your sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {industry}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Customized technology solutions designed for{" "}
                  {industry.toLowerCase()} sector requirements.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-indigo-300 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter value={stat.value} />
                </div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-medium mb-4">
              OUR WORK
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="text-indigo-600">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we`ve helped clients achieve measurable business
              outcomes.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              {["all", "web", "ai", "security"].map((filter) => (
                <motion.button
                  key={filter}
                  className={`px-6 py-2 rounded-full capitalize text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter === "all" ? "All Projects" : filter}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <FiArrowRight className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-lg"
              whileHover={{ x: 5 }}
            >
              View all case studies
              <FiArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-medium mb-4">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by{" "}
              <span className="text-indigo-600">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don`t just take our word for it - hear what our clients have to
              say.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeTestimonial].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-32 h-32 rounded-full border-4 border-indigo-100 mb-6 object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-bold text-xl text-gray-900">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {testimonials[activeTestimonial].company}
                      </p>
                      <div className="flex justify-center mt-3">
                        {renderStars(testimonials[activeTestimonial].rating)}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="relative">
                      <svg
                        className="w-16 h-16 text-indigo-100 absolute -top-4 -left-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-lg italic text-gray-700 relative z-10">
                        &quot;{testimonials[activeTestimonial].quote}&quot;
                      </p>
                      <svg
                        className="w-16 h-16 text-indigo-100 absolute -bottom-4 -right-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index
                      ? "bg-indigo-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Technology <span className="text-indigo-600">Partners</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with the industry`s leading technology platforms to
              deliver best-in-class solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-700 font-medium text-center">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a consultation with our experts to discuss your
              technology needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <FiArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Let`s Discuss Your Project
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and our technology consultants will get back
                to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">
                      24/7 support available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@techsolutions.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Typically responds within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Headquarters
                    </h3>
                    <p className="text-gray-600">123 Tech Park Drive</p>
                    <p className="text-gray-600">Silicon Valley, CA 94025</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Global offices in 8 countries
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 p-4 rounded-xl transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 p-4 rounded-xl transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiTwitter size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 p-4 rounded-xl transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiFacebook size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 p-4 rounded-xl transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <FiInstagram size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Our Team
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-3 top-1/2 -translate-y-1/2 px-1 bg-white transition-all duration-200 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 peer-focus:transform peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:bg-white"
                        style={{ transform: "translateY(-1.75rem) scale(0.9)" }}
                      >
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-3 top-1/2 -translate-y-1/2 px-1 bg-white transition-all duration-200 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 peer-focus:transform peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:bg-white"
                        style={{ transform: "translateY(-1.75rem) scale(0.9)" }}
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-3 top-1/2 -translate-y-1/2 px-1 bg-white transition-all duration-200 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 peer-focus:transform peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:bg-white"
                      style={{ transform: "translateY(-1.75rem) scale(0.9)" }}
                    >
                      Company (Optional)
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-3 top-4 px-1 bg-white transition-all duration-200 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 peer-focus:transform peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:bg-white"
                      style={{ transform: "translateY(-0.75rem) scale(0.9)" }}
                    >
                      How can we help you?
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white py-4 px-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
              <a
                href="#"
                className="text-2xl font-bold text-white flex items-center mb-6"
              >
                <FaLaptopCode className="mr-2 text-indigo-400" size={28} />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  TechSolutions
                </span>
              </a>
              <p className="text-gray-400 mb-6">
                Delivering innovative IT solutions that drive business growth
                and digital transformation worldwide.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                >
                  <FiTwitter />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                >
                  <FiFacebook />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                >
                  <FiInstagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Solutions</h3>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Industries</h3>
              <ul className="space-y-3">
                {industries.slice(0, 5).map((industry) => (
                  <li key={industry}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Leadership",
                  "Careers",
                  "Newsroom",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                {["Blog", "Case Studies", "Whitepapers", "Webinars", "FAQ"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TechSolutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
