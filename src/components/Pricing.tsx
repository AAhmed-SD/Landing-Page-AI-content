'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: 'Pro',
      price: '49',
      description: 'Perfect for individuals and small teams.',
      features: [
        'Up to 100 content generations/month',
        'HD quality output (1080p)',
        'Basic analytics dashboard',
        'Email support',
        '5 team members',
      ],
    },
    {
      name: 'Business',
      price: '199',
      description: 'Advanced features for growing businesses.',
      features: [
        'Unlimited content generations',
        '4K & HDR quality output',
        'Advanced analytics & insights',
        'Priority support',
        'Custom team size',
        'API access',
        'Custom model training',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations.',
      features: [
        'Custom content pipeline',
        '8K quality support',
        'Dedicated success manager',
        '24/7 premium support',
        'Custom integrations',
        'Advanced security features',
        'On-premise deployment',
      ],
    },
  ];

  return (
    <section className="py-32 bg-black" id="pricing">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
            Choose your plan.
            <br />
            Upgrade anytime.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core AI features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl bg-[#1C1C1E] p-8 ${
                plan.popular ? 'ring-2 ring-[#2997FF]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-[#2997FF] rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-[#86868b] text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm">$</span>
                  <span className="text-5xl font-semibold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-[#86868b]">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <FiCheck className="text-[#2997FF]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`block w-full py-3 text-center rounded-full text-sm font-medium transition-opacity hover:opacity-80 ${
                  plan.popular
                    ? 'bg-[#2997FF] text-white'
                    : 'border border-[#2997FF] text-[#2997FF]'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#86868b] text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 