import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you're exploring digital transformation or ready to deploy,
              we're here to help you find the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl text-slate-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      type="text"
                      id="firstName"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    />
                    {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      type="text"
                      id="lastName"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    />
                    {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-slate-700 mb-2">
                    Company *
                  </label>
                  <input
                    {...register('company', { required: 'Company is required' })}
                    type="text"
                    id="company"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  />
                  {errors.company && <span className="text-xs text-red-500 mt-1">{errors.company.message}</span>}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm text-slate-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    {...register('interest', { required: 'Please select an option' })}
                    id="interest"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.interest ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Requesting a demo</option>
                    <option value="tokenisation">Tokenisation solution</option>
                    <option value="supply-chain">Supply chain solution</option>
                    <option value="identity">Identity management</option>
                    <option value="loyalty">Loyalty solution</option>
                    <option value="advisory">Digital assets advisory</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && <span className="text-xs text-red-500 mt-1">{errors.interest.message}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h2 className="text-2xl text-slate-900 mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Email</div>
                      <a href="mailto:contact@nijaworld.com" className="text-slate-900 hover:text-emerald-600 transition-colors">
                        contact@nijaworld.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Phone</div>
                      <a href="tel:+1234567890" className="text-slate-900 hover:text-emerald-600 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Office</div>
                      <div className="text-slate-900">
                        123 Enterprise Boulevard<br />
                        Tech District, Singapore
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-8">
                <h3 className="text-xl mb-4">Looking for something specific?</h3>
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-left">
                    Request a Demo
                  </button>
                  <button className="w-full px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-left">
                    Talk to a Solutions Architect
                  </button>
                  <button className="w-full px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-left">
                    Download Overview
                  </button>
                  <button className="w-full px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-left">
                    Request a Security Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-slate-900 mb-4">
            We're here to help
          </h2>
          <p className="text-lg text-slate-600">
            Our team typically responds within 24 hours during business days (Monday-Friday, 9am-6pm SGT).
          </p>
        </div>
      </section>
    </div>
  );
}
