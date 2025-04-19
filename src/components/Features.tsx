'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: 'Advanced AI Processing',
      description: 'Transform any content with our neural network technology.',
      image: '/features/ai-processing.png',
      gradient: 'from-[#2997FF] to-[#2997FF]/50',
    },
    {
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified. Bank-grade encryption.',
      image: '/features/security.png',
      gradient: 'from-[#2997FF]/80 to-[#2997FF]/30',
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor performance with detailed insights.',
      image: '/features/analytics.png',
      gradient: 'from-[#2997FF]/60 to-[#2997FF]/20',
    },
  ];

  return (
    <section className="py-32 bg-black" id="features">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
            Incredible features.
            <br />
            Endless possibilities.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Experience the next generation of content creation with powerful AI technology
            designed for enterprise needs.
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[#86868b]">{feature.description}</p>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} opacity-20`} />
                <div className="absolute inset-0 bg-[#1C1C1E] mix-blend-multiply" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 980px) 100vw, 980px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'API Integration',
              description: 'Seamlessly connect with your existing workflow through our robust API.',
            },
            {
              title: 'Custom Training',
              description: 'Train models on your specific content needs and brand guidelines.',
            },
            {
              title: 'Scalable Infrastructure',
              description: 'Built for enterprise-scale with unlimited processing capability.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-[#1C1C1E]"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-[#86868b] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 