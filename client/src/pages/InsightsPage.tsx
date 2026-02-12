import { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insightsData, insightCategories } from '../data/insightsData';

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInsights = activeCategory === 'All'
    ? insightsData
    : insightsData.filter(insight => insight.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white/80 py-20 lg:py-28 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              Insights
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Practical guidance, technical deep-dives, and industry perspectives on enterprise
              AI and blockchain implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-slate-50/80 border-b border-slate-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {insightCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${activeCategory === category
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="bg-slate-50/80 py-20 network-pattern backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/insights/${insight.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all cursor-pointer group block h-full"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {insight.date}
                      </div>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>

                    <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full mb-4 self-start">
                      {insight.category}
                    </div>

                    <h3 className="text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all mt-auto">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          {filteredInsights.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No insights found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white/80 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200 text-center"
          >
            <h2 className="text-3xl text-slate-900 mb-4">
              Stay updated
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to receive insights, case studies, and updates on enterprise AI and blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
