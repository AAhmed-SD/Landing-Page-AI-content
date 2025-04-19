import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Content Creator',
    image: '/testimonials/alex.jpg',
    quote: 'ContentAI has revolutionized how I create and share content. The AI understands context perfectly, and the scheduling features save me hours every week.',
    rating: 5
  },
  {
    name: 'Sarah Miller',
    role: 'Digital Marketing Agency',
    image: '/testimonials/sarah.jpg',
    quote: 'The quality and authenticity of content generated is remarkable. Our client engagement has increased by 200% since we started using ContentAI.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Brand Strategist',
    image: '/testimonials/james.jpg',
    quote: 'Finally, a tool that understands the nuances of brand voice. The auto-scheduling feature is a game-changer for our global audience.',
    rating: 5
  }
];

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  index: number;
}> = ({ name, role, quote, rating, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-gradient-to-b from-purple-500/5 to-blue-500/5 border border-purple-500/20 backdrop-blur-sm"
  >
    <FaQuoteLeft className="text-3xl text-purple-400 mb-4" />
    <p className="text-gray-300 mb-6">{quote}</p>
    <div className="flex items-center gap-2 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
    </div>
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
            Trusted by Leading Creators
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how ContentAI is transforming content creation worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 