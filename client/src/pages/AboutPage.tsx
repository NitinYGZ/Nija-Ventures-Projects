import { Target, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              About Nija World
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nija Ventures Private Impact Limited (Nija World) is an enterprise technology provider
              specialising in secure AI and blockchain solutions for organisations undergoing digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-6">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To enable organisations to modernise their operations with production-grade AI and blockchain
                solutions that improve transparency, reduce friction, and maintain the highest standards
                of security and compliance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A future where enterprises can leverage distributed technologies to create transparent,
                efficient, and trustworthy digital ecosystems that benefit all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-50/80 py-20 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">What We Do</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine deep technical expertise with a pragmatic approach to enterprise transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Solutions Design',
                description: 'We work with your team to understand requirements, constraints, and objectives, designing solutions that fit your specific context.',
              },
              {
                icon: Award,
                title: 'Implementation',
                description: 'We build and deploy production-grade systems with security, compliance, and operational excellence built in from day one.',
              },
              {
                icon: Target,
                title: 'Ongoing Support',
                description: 'We provide monitoring, maintenance, training, and iterative improvements to ensure long-term success.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 border border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl text-slate-900 mb-12 text-center"
            >
              Our Approach
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Security First',
                  description: 'Every solution is designed with security, privacy, and regulatory compliance as foundational requirements, not afterthoughts.',
                },
                {
                  title: 'Pragmatic Technology',
                  description: 'We select technologies based on fitness for purpose, not hype. Our recommendations are grounded in real-world operational requirements.',
                },
                {
                  title: 'Enterprise Grade',
                  description: 'We build for production from day one, with high availability, monitoring, audit trails, and operational excellence built in.',
                },
                {
                  title: 'Knowledge Transfer',
                  description: 'We work collaboratively with your teams, ensuring they understand and can operate the solutions we deliver.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-200"
                >
                  <h3 className="text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Work with us
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you're exploring digital transformation or ready to deploy, we're here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
