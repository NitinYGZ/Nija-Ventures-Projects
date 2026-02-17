import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, FileText } from 'lucide-react';
import { fetchMedia } from '../services/api';

export function MediaPage() {
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMedia();
        setMediaItems(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              Media & Press
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              News coverage, interviews, and press releases about Nija World and our work with enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* Media Items */}
      <section className="bg-slate-50 py-20 network-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 text-slate-500">Loading media...</div>
          ) : (
            <div className="space-y-6">
              {mediaItems.map((item) => (
                <article
                  key={item._id || item.title}
                  className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-2xl text-slate-900 mb-2">{item.title}</h3>
                      <div className="text-purple-600 mb-3">{item.outlet}</div>
                      <p className="text-slate-600 leading-relaxed">{item.excerpt}</p>
                    </div>
                    <a
                      href={item.url || item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
                    >
                      Read full article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <FileText className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl text-slate-900 mb-4">
              Press inquiries
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              For media inquiries, press kit materials, or interview requests, please contact our communications team.
            </p>
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Contact Press Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
