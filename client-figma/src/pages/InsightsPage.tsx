import { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const insights = [
    {
      title: 'Tokenisation frameworks for regulated assets',
      excerpt: 'An in-depth analysis of regulatory approaches to tokenisation across different jurisdictions and asset classes.',
      date: 'January 15, 2026',
      category: 'Blockchain',
      readTime: '8 min read',
    },
    {
      title: 'AI automation in enterprise compliance workflows',
      excerpt: 'How organisations are deploying AI to reduce manual effort in compliance monitoring and reporting.',
      date: 'December 28, 2025',
      category: 'AI',
      readTime: '6 min read',
    },
    {
      title: 'Decentralised identity: enterprise adoption trends',
      excerpt: 'Survey findings on enterprise adoption of self-sovereign identity and verifiable credentials.',
      date: 'November 20, 2025',
      category: 'Identity',
      readTime: '7 min read',
    },
    {
      title: 'Building secure supply chain traceability',
      excerpt: 'Technical considerations for implementing blockchain-based supply chain solutions at scale.',
      date: 'November 5, 2025',
      category: 'Supply Chain',
      readTime: '10 min read',
    },
    {
      title: 'Smart contract security: enterprise best practices',
      excerpt: 'A comprehensive guide to security auditing and risk management for enterprise smart contracts.',
      date: 'October 18, 2025',
      category: 'Security',
      readTime: '12 min read',
    },
    {
      title: 'Token economics design for loyalty programs',
      excerpt: 'Frameworks for designing sustainable token economics in multi-partner loyalty ecosystems.',
      date: 'October 2, 2025',
      category: 'Blockchain',
      readTime: '9 min read',
    },
  ];

  const categories = ['All', 'Blockchain', 'AI', 'Identity', 'Supply Chain', 'Security'];

  const filteredInsights = selectedCategory === 'All'
    ? insights
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold">
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
      <section className="bg-slate-50 border-b border-slate-200 sticky top-20 z-10 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${selectedCategory === category
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-emerald-200'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="bg-slate-50 py-20 network-pattern min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredInsights.map((insight) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={insight.title}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {insight.date}
                      </div>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>

                    <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full mb-4 w-fit font-medium">
                      {insight.category}
                    </div>

                    <h3 className="text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors font-semibold">
                      {insight.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all font-medium mt-auto">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredInsights.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-slate-500"
            >
              No insights found for this category.
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200 text-center"
          >
            <h2 className="text-3xl text-slate-900 mb-4 font-bold">
              Stay updated
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to receive insights, case studies, and updates on enterprise AI and blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap shadow-md"
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
