"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { personalInfo, stats } from "@/lib/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn more about my journey and what drives me as a developer
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <Card className="p-8 glass">
                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {`With over 2 years of professional experience in web development, I've had the privilege of working with cutting-edge technologies and contributing to diverse projects that have impacted thousands of users. My commitment to excellence, combined with my passion for innovation, has led me to excel in my field.`}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in building scalable web applications using
                  modern frameworks like React.js, Next.js, and Vue.js, combined
                  with robust backend solutions. My passion lies in creating
                  intuitive user interfaces that provide exceptional user
                  experiences.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-6 text-center glass hover:shadow-xl transition-shadow">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-4xl font-bold gradient-text mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <Card className="p-6 text-center hover:shadow-lg transition-shadow glass">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="text-muted-foreground">
                To create innovative web solutions that solve real-world
                problems and deliver exceptional user experiences.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow glass">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="text-muted-foreground">
                To become a leading full-stack developer who bridges the gap
                between design and functionality.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow glass">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Values</h3>
              <p className="text-muted-foreground">
                Quality code, continuous learning, collaboration, and dedication
                to delivering excellence in every project.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
