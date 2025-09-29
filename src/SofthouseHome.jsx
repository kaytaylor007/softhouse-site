/* Softhouse homepage prototype — iteration 3 (maximizing vibrancy & modern style) */

import React from "react";
import { Smartphone, Laptop, Brain } from "lucide-react";
import { motion } from "motion/react";

const Logo = ({ className = "w-40" }) => (
  <div className={"flex items-center gap-3 " + className}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="grad1" x1="0" x2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#84CC16" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="40" height="32" rx="8" fill="url(#grad1)" />
      <path d="M11 18h22v8H11z" fill="#fff" opacity="0.15" />
    </svg>
    <div className="font-poppins font-semibold text-lg text-neutral-900 leading-none">
      <div className="flex items-baseline gap-2">
        <span className="text-[20px]">Softhouse</span>
      </div>
      <div className="text-[11px] text-neutral-700 -mt-0.5">Modern Web, Mobile & AI Solutions</div>
    </div>
  </div>
);

const GradientButton = ({ children, colors }) => (
  <button className={`px-6 py-3 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r ${colors} transform hover:scale-105 transition`}>
    {children}
  </button>
);

const ServiceCard = ({ title, subtitle, gradient, icon, features, delay = 0 }) => {
  // Variants for the icon animation
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 5 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover="hover" // 👈 sets the hover state for children
      className={`flex flex-col justify-between h-full rounded-2xl shadow-lg p-8 bg-gradient-to-br ${gradient} text-white
      transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
    >
      {/* Top: Icon + Title */}
      <div>
        {/* Icon now listens to parent hover */}
        <motion.div
          variants={iconVariants}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-16 h-16 rounded-xl flex items-center justify-center 
            bg-gradient-to-br from-white/40 to-white/10 shadow-inner mb-6"
        >
          {icon}
        </motion.div>

        <h4 className="font-poppins font-semibold text-xl mb-2">{title}</h4>
        <p className="text-sm text-white/90">{subtitle}</p>
      </div>

      {/* Bottom: Features */}
      {features && (
        <ul className="mt-6 space-y-1 text-sm text-white/85">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-white/70">✔</span> {f}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

// const ServiceCard = ({ title, subtitle, gradient, icon, features }) => (
//   <div
//     className={`flex flex-col justify-between h-full rounded-2xl shadow-lg p-8 bg-gradient-to-br ${gradient} text-white
//     transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
//   >
//     {/* Top: Icon + Title */}
//     <div>
//       {/* Icon Container */}
//       <div
//         className="w-16 h-16 rounded-xl flex items-center justify-center 
//         bg-gradient-to-br from-white/40 to-white/10 shadow-inner mb-6
//         group-hover:scale-110 transition-transform duration-300"
//       >
//         {icon}
//       </div>

//       <h4 className="font-poppins font-semibold text-xl mb-2">{title}</h4>
//       <p className="text-sm text-white/90">{subtitle}</p>
//     </div>

//     {/* Bottom: Features */}
//     {features && (
//       <ul className="mt-6 space-y-1 text-sm text-white/85">
//         {features.map((f, i) => (
//           <li key={i} className="flex items-center gap-2">
//             <span className="text-white/70">✔</span> {f}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// const ServiceCard = ({ title, subtitle, gradient, icon, features }) => (
//   <div
//     className={`flex-1 rounded-2xl shadow-lg p-8 min-w-[240px] bg-gradient-to-br ${gradient} text-white
//     transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
//   >
//     {/* Icon Container */}
//     <div className="w-16 h-16 rounded-xl flex items-center justify-center 
//       bg-gradient-to-br from-white/40 to-white/10 shadow-inner mb-6
//       group-hover:scale-110 transition-transform duration-300"
//     >
//       {icon}
//     </div>

//     {/* Title */}
//     <h4 className="font-poppins font-semibold text-xl mb-2">{title}</h4>

//     {/* Subtitle */}
//     <p className="text-sm text-white/90 mb-3">{subtitle}</p>

//     {/* Optional Features List */}
//     {features && (
//       <ul className="mt-2 space-y-1 text-sm text-white/85">
//         {features.map((f, i) => (
//           <li key={i} className="flex items-center gap-2">
//             <span className="text-white/70">✔</span> {f}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

{/*const ServiceCard = ({ title, subtitle, gradient, icon }) => (
  <div className={`flex-1 rounded-2xl shadow-lg p-6 min-w-[220px] bg-gradient-to-br ${gradient} text-white hover:scale-105 transition`}>
    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white/20 mb-4">
      {icon}
    </div>
    <h4 className="font-poppins font-semibold text-lg mb-1">{title}</h4>
    <p className="text-sm opacity-90">{subtitle}</p>
  </div>
);*/}

const ProjectCard = ({ title, gradient }) => (
  <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-gradient-to-br ${gradient}`}>
    <div className="h-40 flex items-center justify-center text-white font-semibold text-lg tracking-wide">
      Project UI
    </div>
    <div className="p-4 bg-white">
      <h5 className="font-semibold text-neutral-900">{title}</h5>
      <p className="text-sm text-neutral-600 mt-1">Custom solution crafted with modern tech stack.</p>
    </div>
  </div>
);

export default function SofthouseHome() {
  return (
    <div className="min-h-screen font-inter text-neutral-900 bg-gradient-to-b from-[#F3F4F6] via-white to-[#F3F4F6]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-neutral-700">
            <a className="hover:text-[#2563EB]" href="#services">Services</a>
            <a className="hover:text-[#9333EA]" href="#portfolio">Portfolio</a>
            <a className="hover:text-[#84CC16]" href="#about">About</a>
            <a className="hover:text-neutral-900" href="#contact">Contact</a>
            <GradientButton colors="from-[#2563EB] via-[#9333EA] to-[#84CC16]">Let’s Build Together</GradientButton>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 py-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-poppins font-extrabold leading-tight">
              Building Modern Web, Mobile & AI Solutions
            </h1>
            <p className="mt-6 text-neutral-700 max-w-xl text-lg">We deliver vibrant, scalable software. From idea to production, we blend design and technology to help your business thrive.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GradientButton colors="from-[#2563EB] via-[#9333EA] to-[#84CC16]">Start a Project</GradientButton>
              <GradientButton colors="from-[#9333EA] to-[#2563EB]">View My Work</GradientButton>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="order-first md:order-last relative">
            <div
              className="relative rounded-3xl shadow-2xl overflow-hidden h-96 bg-cover bg-center"
              style={{ backgroundImage: "url('/softhouse-site/hero.png')" }}
            >
              {/* Optional dark overlay to make text more readable */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="mt-24">
          <h2 className="text-3xl font-poppins font-bold mb-12 text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Mobile Development"
              subtitle="React Native, Kotlin"
              gradient="from-[#2563EB] to-[#9333EA]"
              icon={<Smartphone size={32} strokeWidth={2.5} />}
              features={["Cross-platform Apps", "Native Performance", "Smooth UX"]}
              delay={0.1}
            />
            <ServiceCard
              title="Web Applications"
              subtitle="React, Node, Laravel"
              gradient="from-[#9333EA] to-[#84CC16]"
              icon={<Laptop size={32} strokeWidth={2.5} />}
              features={["Scalable Backends", "Modern Frontends", "API Integrations"]}
              delay={0.25}
            />
            <ServiceCard
              title="AI & Machine Learning"
              subtitle="Python, TensorFlow"
              gradient="from-[#84CC16] to-[#2563EB]"
              icon={<Brain size={32} strokeWidth={2.5} />}
              features={["Predictive Models", "NLP Solutions", "Computer Vision"]}
              delay={0.4}
            />
          </div>
        </section>
        {/*<section id="services" className="mt-24">
          <h2 className="text-3xl font-poppins font-bold mb-12 text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Mobile Development"
              subtitle="React Native, Kotlin"
              gradient="from-[#2563EB] to-[#9333EA]"
              icon={<Smartphone size={32} strokeWidth={2.5} />}
              features={["Cross-platform Apps", "Native Performance", "Smooth UX"]}
            />
            <ServiceCard
              title="Web Applications"
              subtitle="React, Node, Laravel"
              gradient="from-[#9333EA] to-[#84CC16]"
              icon={<Laptop size={32} strokeWidth={2.5} />}
              features={["Scalable Backends", "Modern Frontends", "API Integrations"]}
            />
            <ServiceCard
              title="AI & Machine Learning"
              subtitle="Python, TensorFlow"
              gradient="from-[#84CC16] to-[#2563EB]"
              icon={<Brain size={32} strokeWidth={2.5} />}
              features={["Predictive Models", "NLP Solutions", "Computer Vision"]}
            />
          </div>
        </section>*/}
        {/*<section id="services" className="mt-24">
          <h2 className="text-3xl font-poppins font-bold mb-10 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Mobile Development"
              subtitle="React Native, Kotlin"
              gradient="from-[#2563EB] to-[#9333EA]"
              icon={<Smartphone size={32} strokeWidth={2.5} />}
              features={["Cross-platform Apps", "Native Performance", "Smooth UX"]}
            />
            <ServiceCard
              title="Web Applications"
              subtitle="React, Node, Laravel"
              gradient="from-[#9333EA] to-[#84CC16]"
              icon={<Laptop size={32} strokeWidth={2.5} />}
              features={["Scalable Backends", "Modern Frontends", "API Integrations"]}
            />
            <ServiceCard
              title="AI & Machine Learning"
              subtitle="Python, TensorFlow"
              gradient="from-[#84CC16] to-[#2563EB]"
              icon={<Brain size={32} strokeWidth={2.5} />}
              features={["Predictive Models", "NLP Solutions", "Computer Vision"]}
            />
          </div>
        </section>*/}
        {/*<section id="services" className="mt-24">
          <h2 className="text-3xl font-poppins font-bold mb-10 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="Mobile Development" subtitle="React Native, Kotlin" gradient="from-[#2563EB] to-[#9333EA]" icon={<span>📱</span>} />
            <ServiceCard title="Web Applications" subtitle="React, Node, Laravel" gradient="from-[#9333EA] to-[#84CC16]" icon={<span>💻</span>} />
            <ServiceCard title="AI & Machine Learning" subtitle="Python, TensorFlow" gradient="from-[#84CC16] to-[#2563EB]" icon={<span>🤖</span>} />
          </div>
        </section>*/}

        {/* Portfolio */}
        <section id="portfolio" className="mt-24">
          <h2 className="text-3xl font-poppins font-bold mb-10 text-center">Selected Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="Jasco Ride — Ride-hailing App" gradient="from-[#2563EB] to-[#9333EA]" />
            <ProjectCard title="Comparit — Comparison Platform" gradient="from-[#9333EA] to-[#84CC16]" />
            <ProjectCard title="Dynamic Talking Heads (ML)" gradient="from-[#84CC16] to-[#2563EB]" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-24 bg-gradient-to-r from-[#2563EB]/10 via-[#9333EA]/10 to-[#84CC16]/10 rounded-3xl p-10 shadow-lg">
          <h3 className="text-2xl font-poppins font-bold mb-4">About Softhouse</h3>
          <p className="text-neutral-700 leading-relaxed">I’m Kay Taiwo — a Mobile, Web & Machine Learning engineer with decades of experience building software for startups and enterprises. My expertise spans React Native mobile apps, robust web systems, and AI models that solve real-world challenges. Passionate about innovation, I deliver vibrant, future-ready solutions.</p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24">
          <h3 className="text-2xl font-poppins font-bold mb-4 text-center">Get in Touch</h3>
          <form className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl space-y-4">
            <input className="border border-neutral-300 rounded-lg px-4 py-3 w-full" placeholder="Your name" />
            <input className="border border-neutral-300 rounded-lg px-4 py-3 w-full" placeholder="Email" />
            <textarea className="border border-neutral-300 rounded-lg px-4 py-3 w-full" rows={4} placeholder="Tell me about your project" />
            <div className="flex justify-center">
              <GradientButton colors="from-[#2563EB] via-[#9333EA] to-[#84CC16]">Send Message</GradientButton>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-24 py-8 text-sm text-neutral-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo className="w-36" />
            <div>© {new Date().getFullYear()} Softhouse. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
