import { Package, Building2, Heart, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';
import { fetchCaseStudies } from '../services/api';

const iconMap: any = {
  Package,
  Building2,
  Heart,
  ShoppingBag,
  TrendingUp,
};

export function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };
    loadData();
  }, []);

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
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Real implementations delivering measurable results for enterprise clients across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 lg:p-10 border border-slate-200 hover:border-emerald-300 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-emerald-100 rounded-lg flex-shrink-0">
                    {(() => {
                      const Icon = iconMap[study.icon] || Package;
                      return <Icon className="w-8 h-8 text-emerald-600" />;
                    })()}
                  </div>
                  <div>
                    <div className="text-sm text-emerald-600 mb-2 font-medium">{study.industry}</div>
                    <h3 className="text-2xl lg:text-3xl text-slate-900 font-semibold">{study.title}</h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">Challenge</div>
                    <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">Solution</div>
                    <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">Results</div>
                    <ul className="space-y-2">
                      {study.results.map((result: string) => (
                        <li key={result} className="flex items-start gap-2 text-slate-900">
                          <ArrowRight className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Discuss your use case
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Every organisation has unique requirements. Let's explore how we can help you achieve your objectives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Request a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
