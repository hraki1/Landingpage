"use client";
import Features from "@/components/sections/Features";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import UseCases from "@/components/sections/UseCases";
import dynamic from "next/dynamic";

// Load the component with SSR disabled
const Floating = dynamic(() => import("@/components/ui/Floating"), {
  ssr: false,
});
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const UltraPremiumLanding = () => {
  const ref = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  //   const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Enhanced testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, TechCorp",
      content:
        "This platform transformed our workflow. We saw a 300% increase in productivity within the first month and reduced operational costs by 40%.",
      avatar: "/avatars/1.jpg",
      rating: 5,
      stats: [
        { value: "300%", label: "Productivity" },
        { value: "40%", label: "Cost reduction" },
      ],
    },
    {
      name: "Michael Chen",
      title: "Director of Ops, Global Inc.",
      content:
        "The security features alone are worth the investment. We've never felt more protected while maintaining full compliance with industry regulations.",
      avatar: "/avatars/2.jpg",
      rating: 5,
      stats: [
        { value: "100%", label: "Compliance" },
        { value: "0", label: "Security incidents" },
      ],
    },
    {
      name: "Emma Rodriguez",
      title: "Product Lead, InnovateCo",
      content:
        "The analytics dashboard provides insights we didn't even know were possible to track. We've made better decisions based on real-time data visualization.",
      avatar: "/avatars/3.jpg",
      rating: 4.5,
      stats: [
        { value: "75%", label: "Faster decisions" },
        { value: "2x", label: "Insight speed" },
      ],
    },
    {
      name: "David Kim",
      title: "CEO, StartupX",
      content:
        "The automation features saved us hundreds of hours in the first quarter alone. Our team can now focus on strategic work instead of manual processes.",
      avatar: "/avatars/4.jpg",
      rating: 5,
      stats: [
        { value: "200+", label: "Hours saved" },
        { value: "10x", label: "ROI" },
      ],
    },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "100 integrations",
        "1GB storage",
      ],
      cta: "Get Started",
      popular: false,
      color: "from-gray-400 to-gray-500",
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "For growing businesses with more needs",
      features: [
        "Up to 50 users",
        "Advanced analytics",
        "Priority support",
        "300 integrations",
        "10GB storage",
        "Basic automation",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with complex requirements",
      features: [
        "Unlimited users",
        "Premium analytics",
        "24/7 support",
        "500+ integrations",
        "100GB+ storage",
        "Advanced automation",
        "Dedicated account manager",
        "Custom SLAs",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-[#8FBE53] to-[#2EB6EE]",
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: "How secure is my data?",
      answer:
        "We use enterprise-grade security including end-to-end encryption, regular security audits, and compliance with major standards like SOC 2 and GDPR. Your data is always protected.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no hidden fees or penalties. We'll even help you export your data if needed.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "The 14-day free trial gives you full access to all Professional plan features. No credit card required to start, and you can upgrade at any time during the trial.",
    },
    {
      question: "What integrations are available?",
      answer:
        "We support 500+ native integrations with popular tools like Salesforce, Slack, Zoom, and more. Our API also allows custom integrations with any system.",
    },
    {
      question: "Is there an on-premise version?",
      answer:
        "Yes, we offer an on-premise solution for enterprises with specific compliance or data residency requirements. Contact our sales team for details.",
    },
  ];

  // Team members
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Serial entrepreneur with 15+ years in SaaS. Previously founded two successful startups.",
      avatar: "/team/1.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Maria Garcia",
      role: "CTO",
      bio: "Engineering leader with expertise in AI and large-scale systems. Ex-Google, ex-Facebook.",
      avatar: "/team/2.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "Product visionary with a track record of creating category-defining software experiences.",
      avatar: "/team/3.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Lee",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating intuitive, beautiful user experiences.",
      avatar: "/team/4.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setSubscribed(true);
      setEmail("");
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      });
    }
  };

  if (windowWidth === 0) return null; // عدم العرض حتى نعرف عرض الشاشة

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <Floating ref={ref} />
      {/* Navigation */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Clients section
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 uppercase text-xs sm:text-sm font-medium tracking-wider mb-8 sm:mb-12"
          >
            Trusted by industry leaders
          </motion.h2>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center">
            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Spotify",
              "Netflix",
              "Airbnb",
              "Uber",
              "Slack",
              "Salesforce",
            ].map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center p-2 sm:p-0"
              >
                <Image
                  src={`/logos/${company.toLowerCase()}.png`}
                  alt={company}
                  width={80}
                  height={32}
                  className="h-6 sm:h-8 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features section */}
      <Features />

      {/* Stats section */}
      <Stats />

      {/* Use Cases section */}
      <UseCases />

      {/* How It Works section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Simple setup
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              How it{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running in minutes, not weeks.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-12 sm:space-y-16">
              {[
                {
                  step: "1",
                  title: "Sign up in seconds",
                  description:
                    "Create your account with just an email. No credit card required to start your free trial.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Connect your tools",
                  description:
                    "Integrate with your existing software stack in minutes using our pre-built connectors.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Automate workflows",
                  description:
                    "Set up automation rules to streamline your processes and eliminate manual work.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  step: "4",
                  title: "Gain insights",
                  description:
                    "View real-time analytics and reports to make data-driven decisions.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-6 sm:gap-8`}
                >
                  <div className="lg:w-1/2">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto lg:mx-0`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center lg:text-left">
                      {step.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Customer stories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Don`t just take{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                our word
              </span>{" "}
              for it
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our customers about how we`ve helped transform their
              businesses.
            </p>
          </motion.div>

          <div className="relative h-64 sm:h-80 md:h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-100 flex-shrink-0">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i <
                          Math.floor(testimonials[currentTestimonial].rating)
                            ? "text-amber-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 ml-2 text-sm">
                      {testimonials[currentTestimonial].rating.toFixed(1)}/5.0
                    </span>
                  </div>
                  <div className="text-purple-600 font-bold text-sm sm:text-base md:text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-500 text-sm sm:text-base">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="mt-4 flex gap-4">
                    {testimonials[currentTestimonial].stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-purple-50 px-3 py-2 rounded-lg"
                      >
                        <div className="text-purple-600 font-bold">
                          {stat.value}
                        </div>
                        <div className="text-xs text-purple-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 sm:mt-12 gap-1 sm:gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === currentTestimonial
                    ? "bg-purple-600 w-4 sm:w-6"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Transparent pricing
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Plans that{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                scale
              </span>{" "}
              with you
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Start small, upgrade as you grow. 14-day free trial on all plans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border ${
                  tier.popular ? "border-purple-500" : "border-gray-200"
                } relative overflow-hidden`}
                whileHover={{ y: -5 }}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      tier.popular ? "text-purple-600" : "text-gray-800"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">{tier.price}</div>
                  <div className="text-gray-500">{tier.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 font-medium rounded-lg ${
                    tier.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-colors duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need something custom?</p>
            <motion.a
              href="#"
              className="inline-flex items-center text-purple-600 font-medium"
              whileHover={{ x: 5 }}
            >
              Contact our sales team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Our team
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                experts
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our innovative platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.twitter}
                      className="text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Have questions?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our platform.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <motion.a
              href="#"
              className="inline-flex items-center text-purple-600 font-medium"
              whileHover={{ x: 5 }}
            >
              Contact our support team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
              Join thousands of companies who are already revolutionizing their
              workflow with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                تواصل معنا الآن
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Stay updated
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Subscribe to our newsletter for product updates, news, and tips.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 text-green-700 p-4 rounded-lg"
              >
                Thank you for subscribing! We ll be in touch soon.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={controls}
                >
                  Subscribe
                </motion.button>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12">
            <div className="lg:col-span-2">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                  <path d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                  <path d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                </svg>
                NEXUS
              </div>
              <p className="text-sm sm:text-base mb-4 sm:mb-6">
                The most powerful platform to build, scale, and manage your
                digital products.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {["twitter", "facebook", "linkedin", "github"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <Image
                      src={`/social/${social}.svg`}
                      alt={social}
                      width={20}
                      height={20}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: [
                  "Features",
                  "Integrations",
                  "Pricing",
                  "Changelog",
                  "Roadmap",
                ],
              },
              {
                title: "Company",
                links: ["About us", "Blog", "Careers", "Contact", "Press"],
              },
              {
                title: "Resources",
                links: [
                  "Documentation",
                  "Community",
                  "Webinars",
                  "Tutorials",
                  "API",
                ],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "GDPR", "Compliance"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  {column.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {column.links.map((link, j) => (
                    <motion.li
                      key={j}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Nexus. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UltraPremiumLanding;
