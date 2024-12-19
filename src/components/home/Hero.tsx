import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../layout/Link';
import { RotatingText } from '../shared/RotatingText';
import { AnimatedText } from '../shared/AnimatedText';

const Hero = () => {
  const rotatingTexts = [
    "Task-Preparation for EnglishOffline",
    "Redefining Multilingual Voice Tech",
    "Empowering the Future of AI",
    "Download APP for IOS or Android",
    "Register and log in to the APP",
    "Quiet room recording environment"
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <AnimatedText
            text="ApexBart Solutions"
            className="text-5xl font-bold mb-4"
          />
          <RotatingText
            texts={rotatingTexts}
            className="text-2xl font-medium text-blue-300 mb-6"
          />
          <AnimatedText
            text="Transform your digital communication with our cutting-edge AI solutions and professional voice recording services. Download our app to get started."
            className="text-xl mb-8 text-gray-200 block"
            delay={0.2}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/services" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary inline-flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
          {/* New Section for Task Preparation */}
          <div className="mt-8 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Task Preparation</h2>
            <p>1. Download APP: Scan code for IOS or Android to download APP. (Phone should be published within 3 years.)</p>
            <p>2. How to Apply the Task: Register and log in to the APP, find【quick tasks】, and then enter the TaskID and Corpus group number that PM offers.</p>
            <p>3. How to Record: Two phones are needed, one for Shujiajia APP (phone1), one should be with a mobile card (phone2) and can receive calls normally.</p>
            <p>4. Environment Requirement: Quiet room, no other people talking, laughter, and other noise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;