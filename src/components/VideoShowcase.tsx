'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  const videos = [
    {
      title: "Content Generation",
      description: "Watch our AI transform your content in real-time",
      videoUrl: "/videos/content-generation.mp4", // Replace with your actual video path
      thumbnail: "/images/content-thumbnail.jpg" // Replace with your actual thumbnail path
    },
    {
      title: "Style Transfer",
      description: "Apply any style to your content instantly",
      videoUrl: "/videos/style-transfer.mp4",
      thumbnail: "/images/style-thumbnail.jpg"
    },
    {
      title: "Batch Processing",
      description: "Process multiple assets simultaneously",
      videoUrl: "/videos/batch-processing.mp4",
      thumbnail: "/images/batch-thumbnail.jpg"
    }
  ];

  return (
    <section className="py-32 bg-black" id="showcase">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
            See it in action
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Watch how our AI transforms your content with stunning results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#1C1C1E]">
                <video
                  className="w-full aspect-video"
                  poster={video.thumbnail}
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-2">{video.title}</h3>
                <p className="text-[#86868b]">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase; 