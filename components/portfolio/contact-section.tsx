"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { personalInfo } from "@/lib/portfolio-data";
import { ContactMessage } from "@/lib/types";

// Dynamic import for EmailJS (only loads when contact section is visible)
const sendEmail = async (formData: ContactMessage) => {
  const emailjs = await import("@emailjs/browser");

  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const templateId2 =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2 || "YOUR_TEMPLATE_ID2";
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  // Send email to recipient
  await emailjs.default.send(
    serviceId,
    templateId,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: personalInfo.email,
    },
    publicKey
  );

  // Send notification email
  await emailjs.default.send(
    serviceId,
    templateId2,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: personalInfo.email,
    },
    publicKey
  );
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 glass h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 glass">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full btn-hover"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import { personalInfo } from "@/lib/portfolio-data";
// import { ContactMessage } from "@/lib/types";
// import emailjs from "@emailjs/browser";

// export default function ContactSection() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<ContactMessage>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // EmailJS configuration
//       const serviceId =
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
//       const templateId =
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
//       const templateId2 =
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2 || "YOUR_TEMPLATE_ID2";
//       const publicKey =
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

//       // Send email using EmailJS
//       await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           to_email: personalInfo.email,
//         },
//         publicKey
//       );

//       toast.success("Message sent successfully!", {
//         description: "Thank you for reaching out. I'll get back to you soon.",
//       });

//       // Send notification email to yourself
//       await emailjs.send(
//         serviceId,
//         templateId2,
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           to_email: personalInfo.email,
//         },
//         publicKey
//       );

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       toast.error("Failed to send message", {
//         description: "Please try again later or contact me directly via email.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5 }}
//           className="max-w-6xl mx-auto"
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Get In <span className="gradient-text">Touch</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               Have a project in mind or want to collaborate? Feel free to reach
//               out!
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card className="p-8 glass h-full">
//                 <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Email</h4>
//                       <a
//                         href={`mailto:${personalInfo.email}`}
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                       >
//                         {personalInfo.email}
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Phone</h4>
//                       <a
//                         href={`tel:${personalInfo.phone}`}
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                       >
//                         {personalInfo.phone}
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Location</h4>
//                       <p className="text-muted-foreground">
//                         {personalInfo.location}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 pt-8 border-t">
//                   <h4 className="font-semibold mb-4">Connect With Me</h4>
//                   <div className="flex gap-4">
//                     <a
//                       href={personalInfo.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
//                     >
//                       <span className="sr-only">GitHub</span>
//                       <svg
//                         className="w-6 h-6"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                       </svg>
//                     </a>
//                     <a
//                       href={personalInfo.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
//                     >
//                       <span className="sr-only">LinkedIn</span>
//                       <svg
//                         className="w-6 h-6"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card className="p-8 glass">
//                 <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="Your name"
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="your.email@example.com"
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       placeholder="What's this about?"
//                       className="mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       placeholder="Your message..."
//                       rows={5}
//                       className="mt-1"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     disabled={isSubmitting}
//                     className="w-full btn-hover"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </Card>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
