export const API_URL = 'http://localhost:5000/api';

export const fetchCaseStudies = async () => {
    const response = await fetch(`${API_URL}/case-studies`);
    if (!response.ok) {
        throw new Error('Failed to fetch case studies');
    }
    return response.json();
};

export const fetchSolutions = async () => {
    const response = await fetch(`${API_URL}/solutions`);
    if (!response.ok) {
        throw new Error('Failed to fetch solutions');
    }
    return response.json();
};

export const fetchSolutionBySlug = async (slug: string) => {
    const response = await fetch(`${API_URL}/solutions/${slug}`);
    if (!response.ok) {
        throw new Error('Failed to fetch solution');
    }
    return response.json();
};

export const fetchTechnologies = async () => {
    const response = await fetch(`${API_URL}/technologies`);
    if (!response.ok) {
        throw new Error('Failed to fetch technologies');
    }
    return response.json();
};

export const fetchTechnologyBySlug = async (slug: string) => {
    const response = await fetch(`${API_URL}/technologies/${slug}`);
    if (!response.ok) {
        throw new Error('Failed to fetch technology');
    }
    return response.json();
};

export const fetchInsights = async () => {
    const response = await fetch(`${API_URL}/insights`);
    if (!response.ok) {
        throw new Error('Failed to fetch insights');
    }
    return response.json();
};

export const fetchMedia = async () => {
    const response = await fetch(`${API_URL}/media`);
    if (!response.ok) {
        throw new Error('Failed to fetch media');
    }
    return response.json();
};

// Admin Create Functions
const createResource = async (resource: string, data: any, password: string) => {
    const response = await fetch(`${API_URL}/${resource}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-admin-password': password
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to create ${resource}`);
    }
    return response.json();
};

export const createSolution = (data: any, password: string) => createResource('solutions', data, password);
export const createTechnology = (data: any, password: string) => createResource('technologies', data, password);
export const createCaseStudy = (data: any, password: string) => createResource('case-studies', data, password);
export const createInsight = (data: any, password: string) => createResource('insights', data, password);
export const createMedia = (data: any, password: string) => createResource('media', data, password);

export const verifyAdminPassword = async (password: string) => {
    const response = await fetch(`${API_URL}/admin/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
    });
    return response.ok;
};
