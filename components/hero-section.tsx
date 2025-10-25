"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    { icon: Truck, text: "Free Shipping" },
    { icon: Shield, text: "Secure Payment" },
    { icon: Headphones, text: "24/7 Support" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Rated #1 Online Store</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Discover the
              <span className="gradient-text block">Perfect Products</span>
              for Your Lifestyle
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Shop premium quality products with fast delivery and exceptional customer service. 
              Your satisfaction is our priority.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/products">
                <Button size="lg" className="btn-hover gradient-bg text-white px-8">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8">
                Learn More
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating cards */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-10 -left-10 glass p-4 rounded-2xl shadow-xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                  <div>
                    <p className="font-semibold text-sm">Premium Headphones</p>
                    <p className="text-xs text-muted-foreground">$299.99</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute bottom-10 -right-10 glass p-4 rounded-2xl shadow-xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg"></div>
                  <div>
                    <p className="font-semibold text-sm">Smart Watch</p>
                    <p className="text-xs text-muted-foreground">$199.99</p>
                  </div>
                </div>
              </motion.div>

              {/* Main hero graphic */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">50%</div>
                    <div className="text-lg font-medium">OFF</div>
                    <div className="text-sm opacity-90">Limited Time</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-8 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2"></div>
                  <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-8 w-4 h-4 bg-primary/60 rounded-full -translate-y-1/2"></div>
                  <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent/60 rounded-full -translate-y-1/2"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;