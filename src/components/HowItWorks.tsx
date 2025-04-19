'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Content',
      description: 'Import your video or image content in any format. Support for 4K, HDR, and RAW files.',
      image: '/workflow/upload.png',
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our neural networks analyze your content, identifying key elements and patterns.',
      image: '/workflow/analysis.png',
    },
    {
      number: '03',
      title: 'Generate Variations',
      description: 'Create multiple unique variations while maintaining brand consistency.',
      image: '/workflow/generate.png',
    },
  ];

  return (
    <section className="py-32 bg-[#000]" id="how-it-works">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
            Effortless workflow.
            <br />
            Powerful results.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Experience a streamlined process that transforms your content creation
            with advanced AI technology.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
                <div className="flex-1 text-center md:text-left md:sticky md:top-32 self-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2997FF] mb-6">
                    <span className="text-sm font-medium">{step.number}</span>
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-[#86868b]">{step.description}</p>
                </div>

                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#1C1C1E]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.1),transparent_70%)]" />
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 980px) 100vw, 490px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Ready to transform your content?
          </h3>
          <a
            href="/signup"
            className="inline-flex items-center text-[#2997FF] hover:opacity-80 transition-opacity"
          >
            Get started now <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 