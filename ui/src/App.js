import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection>
          <div id="services">
            <Services />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Stats />
        </AnimatedSection>

        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection>
          <div id="about">
            <About />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="contact">
            <ContactForm />
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
