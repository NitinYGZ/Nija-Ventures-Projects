import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Combine names for backend compatibility if needed, or send as is.
    // Backend expects: name, email, company, message, type
    // We map: firstName + lastName -> name, interest -> type

    const payload = {
      name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      company: data.company,
      type: data.interest,
      message: data.message
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully!', {
        description: 'We will get back to you shortly.',
      });

      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 py-20 lg:py-28 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you're exploring digital transformation or ready to deploy,
              we're here to help you find the right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-emerald-100 shadow-lg"
            >
              <h2 className="text-2xl text-slate-900 mb-6 font-semibold">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-slate-700 mb-2">
                      First Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: "#10B981" }}
                      viewport={{ once: true }}
                      {...register('firstName', { required: 'First name is required' })}
                      type="text"
                      id="firstName"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                    />
                    {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: "#10B981" }}
                      viewport={{ once: true }}
                      {...register('lastName', { required: 'Last name is required' })}
                      type="text"
                      id="lastName"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-slate-200'} bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                    />
                    {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-700 mb-2">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: "#10B981" }}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-200'} bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-slate-700 mb-2">
                    Company *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: "#10B981" }}
                    {...register('company', { required: 'Company is required' })}
                    type="text"
                    id="company"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-slate-200'} bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                  />
                  {errors.company && <span className="text-xs text-red-500 mt-1">{errors.company.message}</span>}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm text-slate-700 mb-2">
                    I'm interested in *
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01, borderColor: "#10B981" }}
                    {...register('interest', { required: 'Please select an option' })}
                    id="interest"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.interest ? 'border-red-500' : 'border-slate-200'} bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all`}
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Requesting a demo</option>
                    <option value="tokenisation">Tokenisation solution</option>
                    <option value="supply-chain">Supply chain solution</option>
                    <option value="identity">Identity management</option>
                    <option value="loyalty">Loyalty solution</option>
                    <option value="advisory">Digital assets advisory</option>
                    <option value="other">Other</option>
                  </motion.select>
                  {errors.interest && <span className="text-xs text-red-500 mt-1">{errors.interest.message}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-700 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, borderColor: "#10B981" }}
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-200'} bg-white/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none transition-all`}
                  />
                  {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-emerald-100 shadow-lg">
                <h2 className="text-2xl text-slate-900 mb-6 font-semibold">Get in touch</h2>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: 'rgba(16, 185, 129, 0.05)', scale: 1.02 }}
                    className="flex items-start gap-4 p-3 rounded-xl transition-all cursor-pointer border border-transparent hover:border-emerald-100/50"
                  >
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0 text-emerald-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Email</div>
                      <a href="mailto:contact@nijaworld.com" className="text-slate-900 hover:text-emerald-600 transition-colors">
                        contact@nijaworld.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5, backgroundColor: 'rgba(16, 185, 129, 0.05)', scale: 1.02 }}
                    className="flex items-start gap-4 p-3 rounded-xl transition-all cursor-pointer border border-transparent hover:border-emerald-100/50"
                  >
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0 text-emerald-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Phone</div>
                      <a href="tel:+1234567890" className="text-slate-900 hover:text-emerald-600 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5, backgroundColor: 'rgba(16, 185, 129, 0.05)', scale: 1.02 }}
                    className="flex items-start gap-4 p-3 rounded-xl transition-all cursor-pointer border border-transparent hover:border-emerald-100/50"
                  >
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0 text-emerald-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Office</div>
                      <div className="text-slate-900">
                        123 Enterprise Boulevard<br />
                        Tech District, Singapore
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-emerald-600/20 transition-colors" />
                <h3 className="text-xl mb-4 relative z-10">Looking for something specific?</h3>
                <div className="space-y-3 relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5, boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all text-left shadow-lg shadow-emerald-900/20 flex items-center justify-between group-hover:bg-emerald-500/90"
                  >
                    <span>Request a Demo</span>
                    <motion.span initial={{ x: 0, opacity: 0 }} whileHover={{ x: 5, opacity: 1 }} className="opacity-0 transition-opacity">
                      <Send className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-all text-left backdrop-blur-sm"
                  >
                    Talk to a Solutions Architect
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-all text-left backdrop-blur-sm"
                  >
                    Download Overview
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-all text-left backdrop-blur-sm"
                  >
                    Request a Security Brief
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="relative z-10 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl text-slate-900 mb-4 font-bold">
              We're here to help
            </h2>
            <p className="text-lg text-slate-600">
              Our team typically responds within 24 hours during business days (Monday-Friday, 9am-6pm SGT).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
