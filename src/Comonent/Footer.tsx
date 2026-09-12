import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 text-gray-600 font-sans border-t border-gray-100">
            <div className="flex justify-center mb-16">
                <div className="w-10 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    
                    <div>
                        <img src="/src/assets/logo-text.png" alt="" />
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 pr-4">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex gap-4 text-sm font-medium text-gray-700">
                            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-5">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Technologies</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-5">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-5">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-400">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;