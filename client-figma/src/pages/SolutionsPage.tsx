import { Link } from 'react-router-dom';
import { Coins, Package, UserCheck, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';
import { fetchSolutions } from '../services/api';

const iconMap: any = {
  Coins,
  Package,
  UserCheck,
  Award,
  TrendingUp,
};

export function SolutionsPage() {
  const [solutions, setSolutions] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSolutions();
        setSolutions(data);
      } catch (error) {
        console.error('Error fetching solutions:', error);
      }
    };
    loadData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold tracking-tight">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Pre-configured solutions designed around common enterprise use cases,
              customisable to your specific requirements and compliance frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution) => (
              <motion.div key={solution.slug} variants={itemVariants}>
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="block bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group h-full"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        {(() => {
                          const Icon = iconMap[solution.icon] || Package;
                          return <Icon className="w-6 h-6 text-emerald-600" />;
                        })()}
                      </div>
                      <h3 className="text-xl text-slate-900 group-hover:text-emerald-600 transition-colors font-semibold">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {solution.benefits.map((benefit: string) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl text-slate-900 mb-4 font-bold">
              Not sure which solution fits your needs?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team can help you assess your requirements and recommend the right approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Request a Demo
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-center w-full sm:w-auto"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
