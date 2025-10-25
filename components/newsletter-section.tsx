"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, Gift, Zap, Shield } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setEmail('');
    toast.success('Successfully subscribed to newsletter!', {
      description: 'You\'ll receive exclusive offers and updates.',
    });
  };

  const benefits = [
    {
      icon: Gift,
      title: '10% Off First Order',
      description: 'Get instant discount on your first purchase'
    },
    {
      icon: Zap,
      title: 'Flash Sale Alerts',
      description: 'Be the first to know about exclusive deals'
    },
    {
      icon: Shield,
      title: 'Premium Support',
      description: 'Priority customer service access'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-primary bg-white/90">
            <Mail className="h-4 w-4 mr-2" />
            Newsletter
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Exclusive Offers
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Join over 50,000 subscribers and get access to exclusive deals, 
            new product launches, and special promotions delivered to your inbox.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-primary hover:bg-white/90 btn-hover"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            <p className="text-xs text-white/70 mt-4">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;