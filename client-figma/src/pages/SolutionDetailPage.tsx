import { useParams, Link } from 'react-router-dom';
import { Coins, Package, UserCheck, Award, TrendingUp, CheckCircle, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchSolutionBySlug } from '../services/api';

const iconMap: any = {
  Coins,
  Package,
  UserCheck,
  Award,
  TrendingUp,
};

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [solution, setSolution] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSolution = async () => {
      if (!slug) return;
      try {
        const data = await fetchSolutionBySlug(slug);
        setSolution(data);
      } catch (error) {
        console.error('Error fetching solution:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSolution();
  }, [slug]);

  if (loading) {
    return <div className="pt-24 min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!solution) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-slate-900 mb-4">Solution not found</h1>
          <Link to="/solutions" className="text-emerald-600 hover:text-emerald-700">
            Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[solution.icon] || Coins;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 network-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Icon className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-emerald-400 text-sm uppercase tracking-wide">Solution</span>
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6">
              {solution.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {solution.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                {solution.primaryCTA}
              </button>
              <button className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors">
                Download Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solution.outcomes?.map((outcome: any) => (
              <div key={outcome.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{outcome.title}</h3>
                <p className="text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-slate-900 mb-12 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {solution.useCases?.map((useCase: string) => (
                <div
                  key={useCase}
                  className="bg-white rounded-lg p-5 border border-slate-200 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Key Features</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {solution.features?.map((feature: string) => (
              <div
                key={feature}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-slate-900 mb-12 text-center">Implementation Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {solution.implementation?.map((phase: any, idx: number) => (
              <div
                key={phase.step}
                className="bg-white rounded-lg p-6 border border-slate-200 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-900 mb-2">{phase.step}</h3>
                  <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Security & Compliance</h2>
              <p className="text-lg text-slate-600">
                Built with enterprise-grade security, comprehensive audit trails,
                and support for regulatory compliance frameworks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'End-to-end encryption',
                'Multi-signature controls',
                'Comprehensive audit logs',
                'Role-based access',
                'Compliance reporting',
                'Regular security audits',
              ].map((item) => (
                <div key={item} className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Ready to get started with {solution.title}?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Talk to our team about how {solution.title} can address your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Talk to a Solutions Architect
            </button>
            <Link
              to="/case-studies"
              className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
