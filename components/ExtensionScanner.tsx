
import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { ShieldExclamationIcon, CheckCircleIcon, ExclamationTriangleIcon } from './icons';

interface ScanResult {
    risk_level: 'Low' | 'Medium' | 'High';
    summary: string;
    potential_risks: string[];
}

const riskStyles = {
    Low: {
        icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
        textColor: 'text-green-400',
        borderColor: 'border-green-500/30',
        bgColor: 'bg-green-500/10',
    },
    Medium: {
        icon: <ExclamationTriangleIcon className="w-8 h-8 text-yellow-400" />,
        textColor: 'text-yellow-300',
        borderColor: 'border-yellow-400/30',
        bgColor: 'bg-yellow-400/10',
    },
    High: {
        icon: <ShieldExclamationIcon className="w-8 h-8 text-red-500" />,
        textColor: 'text-red-400',
        borderColor: 'border-red-500/30',
        bgColor: 'bg-red-500/10',
    },
};

const ExtensionScanner: React.FC = () => {
    const [description, setDescription] = useState('');
    const [result, setResult] = useState<ScanResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleScan = async () => {
        if (!description.trim()) {
            setError('Please paste the extension description before scanning.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    risk_level: {
                        type: Type.STRING,
                        description: 'The estimated risk level. Must be one of: Low, Medium, High.',
                    },
                    summary: {
                        type: Type.STRING,
                        description: 'A concise, one-sentence summary of the security analysis.',
                    },
                    potential_risks: {
                        type: Type.ARRAY,
                        description: 'A list of potential privacy or security risks found in the description.',
                        items: { type: Type.STRING },
                    },
                },
                required: ['risk_level', 'summary', 'potential_risks'],
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Analyze the following browser extension description for potential privacy and security risks. Focus on data collection, permissions, and third-party communications. Here is the description: "${description}"`,
                config: {
                    systemInstruction: 'You are a cybersecurity expert specializing in browser extension analysis. Your response must be in JSON format conforming to the provided schema.',
                    responseMimeType: 'application/json',
                    responseSchema: responseSchema,
                },
            });

            let jsonStr = response.text.trim();
            const parsedResult = JSON.parse(jsonStr) as ScanResult;
            setResult(parsedResult);

        } catch (e) {
            console.error(e);
            setError('Failed to analyze the extension. The AI may be overloaded. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderResult = () => {
        if (isLoading) {
            return (
                <div className="text-center p-8 bg-brand-dark-secondary rounded-lg">
                    <div className="flex justify-center items-center">
                        <svg className="animate-spin h-8 w-8 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="ml-4 text-xl text-brand-light">Analyzing...</p>
                    </div>
                </div>
            );
        }
        if (error) {
            return <div className="text-center p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg">{error}</div>;
        }
        if (result) {
            const style = riskStyles[result.risk_level] || riskStyles.Medium;
            return (
                <div className={`p-8 rounded-xl border ${style.borderColor} ${style.bgColor} animate-fade-in-up`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                        {style.icon}
                        <div>
                            <h3 className={`text-2xl font-bold ${style.textColor}`}>Risk Level: {result.risk_level}</h3>
                            <p className="text-brand-light-secondary">{result.summary}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Potential Risks Identified:</h4>
                        <ul className="list-disc list-inside space-y-2 text-brand-light-secondary">
                            {result.potential_risks.map((risk, index) => (
                                <li key={index}>{risk}</li>
                            ))}
                            {result.potential_risks.length === 0 && <li>No significant risks identified based on the description.</li>}
                        </ul>
                    </div>
                </div>
            )
        }
        return null;
    };


    return (
        <section id="scanner" className="py-20 md:py-28 bg-brand-dark">
             <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scan Your Extensions for Risk</h2>
                    <p className="text-lg text-brand-light-secondary">
                        Is your browser extension safe? Paste its description from the web store below, and our on-device AI technology will analyze it for potential privacy and security risks.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="bg-brand-dark-secondary p-4 rounded-xl border border-gray-800/50">
                         <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Paste extension description here..."
                            className="w-full h-40 bg-brand-dark text-brand-light p-4 rounded-lg border-2 border-gray-700 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/50 transition-colors duration-300 resize-none"
                            aria-label="Extension description input"
                         />
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleScan}
                            disabled={isLoading}
                            className="inline-block bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold px-12 py-4 rounded-lg text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                        >
                            {isLoading ? 'Scanning...' : 'Scan for Risks Now'}
                        </button>
                    </div>
                </div>

                 <div className="max-w-3xl mx-auto mt-10">
                     {renderResult()}
                 </div>

            </div>
        </section>
    );
};

export default ExtensionScanner;
