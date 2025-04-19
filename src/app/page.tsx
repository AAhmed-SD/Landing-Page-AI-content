'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      <div className="container mx-auto px-6 pt-32 relative">
        <div className="max-w-[980px] mx-auto text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#86868b] text-xl mb-6"
          >
            Introducing
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-[120px] font-display font-semibold leading-none tracking-tight mb-6"
          >
            AI Content Engine
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#86868b] text-2xl md:text-3xl leading-tight mb-8"
          >
            Enterprise-grade content replication.
            <br />
            Powered by advanced neural networks.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="/signup"
              className="text-lg font-medium hover:opacity-80 transition-opacity"
            >
              Get started <span className="text-[#2997FF]">→</span>
            </a>
            <a
              href="#learn-more"
              className="text-lg font-medium hover:opacity-80 transition-opacity"
            >
              Learn more <span className="text-[#2997FF]">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="relative w-full aspect-[16/9] max-w-[1200px] mx-auto rounded-2xl overflow-hidden bg-[#1C1C1E]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.1),transparent_70%)]" />
            
            <div className="relative h-full p-12 flex items-center justify-between">
              {/* Input Section */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-black/50 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/10">
                  <span className="text-2xl font-medium bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">In</span>
                </div>
                <p className="text-[#86868b] text-sm font-medium">Input</p>
              </div>

              {/* Processing Section */}
              <div className="flex-1 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#2997FF] blur-[60px] opacity-20" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-[#2997FF] to-[#2997FF]/50 p-[1px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-3xl font-semibold bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-black/50 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/10">
                  <span className="text-2xl font-medium bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">Out</span>
                </div>
                <p className="text-[#86868b] text-sm font-medium">Output</p>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 flex items-center justify-between">
              <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#2997FF] to-transparent" />
              <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#2997FF] to-transparent" />
            </div>
          </div>

          {/* Reflection Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute -bottom-32 left-0 right-0 h-32 bg-[#1C1C1E] blur-2xl opacity-50 transform scale-y-[-1]" />
        </motion.div>

        {/* Stats Section */}
        <div className="max-w-[980px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-32">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10M+', label: 'Assets Processed' },
            { value: '1B+', label: 'API Requests' },
            { value: '99.99%', label: 'Uptime' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-display font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-[#86868b] text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
} 