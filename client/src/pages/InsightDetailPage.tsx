import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { insightsData } from '../data/insightsData';

export function InsightDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const insight = insightsData.find(i => i.slug === slug);

    if (!insight) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h2 className="text-2xl text-slate-900 mb-4">Insight not found</h2>
                <Link to="/insights" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Back to Insights
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/insights"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Insights
                </Link>

                <header className="mb-10">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                        <span className="inline-flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> {insight.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {insight.readTime}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                            <Tag className="w-3 h-3" /> {insight.category}
                        </span>
                    </div>
                    <h1 className="text-3xl lg:text-5xl text-slate-900 leading-tight mb-6">
                        {insight.title}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                        {insight.excerpt}
                    </p>
                </header>

                <article
                    className="prose prose-slate lg:prose-lg max-w-none hover:prose-a:text-emerald-600"
                    dangerouslySetInnerHTML={{ __html: insight.content }}
                />

                <hr className="my-12 border-slate-200" />

                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                    <h3 className="text-xl text-slate-900 mb-4">Subscribe for more insights</h3>
                    <p className="text-slate-600 mb-6">Get the latest analysis on enterprise AI and blockchain delivered to your inbox.</p>
                    <div className="flex gap-4">
                        <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
                        <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-medium transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
