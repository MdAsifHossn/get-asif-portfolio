"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Store, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerLinks = {
    'Shop': [
      { name: 'All Products', href: '/products' },
      { name: 'Smartphones', href: '/products?category=smartphones' },
      { name: 'Laptops', href: '/products?category=laptops' },
      { name: 'Headphones', href: '/products?category=headphones' },
      { name: 'Smart Watches', href: '/products?category=smartwatch' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    'Support': [
      { name: 'Help Center', href: '/help' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Track Order', href: '/track' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@modernstore.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Shopping Street, NY 10001' },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="gradient-bg p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ModernStore</span>
            </Link>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted destination for premium products with exceptional quality, 
              competitive prices, and outstanding customer service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <info.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className="rounded-full w-10 h-10 p-0"
                  asChild
                >
                  <Link href={social.href} aria-label={social.name}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 ModernStore. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">Payment Methods:</span>
            <div className="flex items-center gap-2">
              <div className="h-8 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div className="h-8 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                MC
              </div>
              <div className="h-8 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                AMEX
              </div>
              <div className="h-8 w-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
                PP
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;