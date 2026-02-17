import React, { useState } from 'react';
import {
    Lock, LayoutDashboard, Database, FileText,
    Image as ImageIcon, Award, Plus, LogOut, CheckCircle, AlertCircle
} from 'lucide-react';
import {
    createSolution, createTechnology, createCaseStudy,
    createInsight, createMedia, verifyAdminPassword
} from '../services/api';

export function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('solution');
    const [formData, setFormData] = useState<any>({});
    const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const isValid = await verifyAdminPassword(password);
            if (isValid) {
                setIsAuthenticated(true);
            } else {
                setError('Invalid password');
            }
        } catch (err) {
            setError('Connection error');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        setFormData({});
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setNotification(null);

        try {
            if (activeTab === 'solution') await createSolution(formData, password);
            else if (activeTab === 'technology') await createTechnology(formData, password);
            else if (activeTab === 'case-study') await createCaseStudy(formData, password);
            else if (activeTab === 'insight') await createInsight(formData, password);
            else if (activeTab === 'media') await createMedia(formData, password);

            setNotification({ type: 'success', message: `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} created successfully!` });
            setFormData({});
        } catch (err: any) {
            setNotification({ type: 'error', message: err.message });
        } finally {
            setLoading(false);
        }
    };

    const FORMS = {
        solution: [
            { key: 'title', label: 'Title', type: 'text', required: true },
            { key: 'slug', label: 'Slug (unique-id)', type: 'text', required: true },
            { key: 'icon', label: 'Icon Name (Lucide)', type: 'text', required: true },
            { key: 'headline', label: 'Headline', type: 'text', required: true },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea', required: true },
            { key: 'description', label: 'Short Description', type: 'textarea', required: true },
            { key: 'primaryCTA', label: 'Primary CTA Text', type: 'text' },
            { key: 'benefits', label: 'Benefits (JSON Array of Strings)', type: 'textarea', placeholder: '["Benefit 1", "Benefit 2"]' },
            { key: 'outcomes', label: 'Outcomes (JSON Array of Objects: {title, description})', type: 'textarea', placeholder: '[{"title": "Outcome 1", "description": "..."}]' },
            { key: 'useCases', label: 'Use Cases (JSON Array of Strings)', type: 'textarea', placeholder: '["Case 1", "Case 2"]' },
            { key: 'features', label: 'Features (JSON Array of Strings)', type: 'textarea', placeholder: '["Feature 1", "Feature 2"]' },
            { key: 'implementation', label: 'Implementation Steps (JSON Array of Objects: {step, description})', type: 'textarea', placeholder: '[{"step": "Step 1", "description": "..."}]' }
        ],
        technology: [
            { key: 'title', label: 'Title', type: 'text', required: true },
            { key: 'slug', label: 'Slug (unique-id)', type: 'text', required: true },
            { key: 'icon', label: 'Icon Name (Lucide)', type: 'text', required: true },
            { key: 'headline', label: 'Headline', type: 'text', required: true },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea', required: true },
            { key: 'description', label: 'Short Description', type: 'textarea', required: true },
            { key: 'capabilities', label: 'Capabilities (JSON Array of Strings)', type: 'textarea', placeholder: '["Cap 1", "Cap 2"]' },
            { key: 'outcomes', label: 'Outcomes (JSON Array of Objects: {title, description})', type: 'textarea', placeholder: '[{"title": "Outcome 1", "description": "..."}]' },
            { key: 'useCases', label: 'Use Cases (JSON Array of Strings)', type: 'textarea', placeholder: '["Case 1", "Case 2"]' },
            { key: 'features', label: 'Features (JSON Array of Strings)', type: 'textarea', placeholder: '["Feature 1", "Feature 2"]' },
            { key: 'implementation', label: 'Implementation Steps (JSON Array of Objects: {step, description})', type: 'textarea', placeholder: '[{"step": "Step 1", "description": "..."}]' },
            { key: 'relatedSolutions', label: 'Related Solutions (JSON Array of Slugs)', type: 'textarea', placeholder: '["solution-slug-1"]' }
        ],
        'case-study': [
            { key: 'title', label: 'Title', type: 'text', required: true },
            { key: 'industry', label: 'Industry', type: 'text', required: true },
            { key: 'challenge', label: 'Challenge', type: 'textarea', required: true },
            { key: 'solution', label: 'Solution Summary', type: 'textarea', required: true },
            { key: 'results', label: 'Results (JSON Array of Strings)', type: 'textarea', required: true, placeholder: '["Result 1", "Result 2"]' },
            { key: 'icon', label: 'Icon Name (Lucide)', type: 'text', required: true }
        ],
        insight: [
            { key: 'title', label: 'Title', type: 'text', required: true },
            { key: 'date', label: 'Date', type: 'text', required: true },
            { key: 'category', label: 'Category', type: 'text', required: true },
            { key: 'readTime', label: 'Read Time', type: 'text', required: true },
            { key: 'excerpt', label: 'Excerpt', type: 'textarea', required: true },
            { key: 'url', label: 'Link URL', type: 'text' }
        ],
        media: [
            { key: 'title', label: 'Title', type: 'text', required: true },
            { key: 'outlet', label: 'Media Outlet', type: 'text', required: true },
            { key: 'date', label: 'Date', type: 'text', required: true },
            { key: 'type', label: 'Type (Article, Interview, etc.)', type: 'text', required: true },
            { key: 'excerpt', label: 'Excerpt', type: 'textarea', required: true },
            { key: 'url', label: 'Link URL', type: 'text', required: true }
        ]
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">Admin Access</h1>
                        <p className="text-slate-600 mt-2">Please verify your identity to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Admin Password"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                autoFocus
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Verifying...' : 'Access Dashboard'}
                        </button>

                        {error && (
                            <div className="flex items-center justify-center text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                <AlertCircle className="w-4 h-4 mr-2" />
                                {error}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }

    const menuItems = [
        { id: 'solution', label: 'Solutions', icon: LayoutDashboard },
        { id: 'technology', label: 'Technologies', icon: Database },
        { id: 'case-study', label: 'Case Studies', icon: FileText },
        { id: 'insight', label: 'Insights', icon: Award },
        { id: 'media', label: 'Media', icon: ImageIcon },
    ];

    const currentFields = FORMS[activeTab as keyof typeof FORMS];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-slate-200 fixed h-full top-0 left-0 md:block z-10">
                <div className="p-6">
                    <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Dashboard</h2>
                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setFormData({});
                                    setNotification(null);
                                }}
                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === item.id
                                    ? 'bg-emerald-50 text-emerald-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="absolute bottom-0 w-full p-6 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center text-slate-600 hover:text-red-600 transition-colors text-sm font-medium"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 p-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold text-slate-900">
                            Add New {menuItems.find(m => m.id === activeTab)?.label}
                        </h1>
                    </div>

                    {notification && (
                        <div className={`mb-6 p-4 rounded-lg flex items-center ${notification.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                            }`}>
                            {notification.type === 'success' ? <CheckCircle className="w-5 h-5 mr-2" /> : <AlertCircle className="w-5 h-5 mr-2" />}
                            {notification.message}
                        </div>
                    )}

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6">
                                {currentFields.map((field) => (
                                    <div key={field.key} className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">
                                            {field.label} {field.required && <span className="text-red-500">*</span>}
                                        </label>
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                name={field.key}
                                                value={formData[field.key] || ''}
                                                onChange={handleInputChange}
                                                required={field.required}
                                                rows={4}
                                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.key}
                                                value={formData[field.key] || ''}
                                                onChange={handleInputChange}
                                                required={field.required}
                                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center disabled:opacity-50"
                                >
                                    {loading ? (
                                        'Creating...'
                                    ) : (
                                        <>
                                            <Plus className="w-5 h-5 mr-2" />
                                            Create Entry
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
