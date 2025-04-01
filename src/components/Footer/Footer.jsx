import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="mx-auto w-full max-w-screen-xl px-6 flex flex-col md:flex-row justify-between items-start">
                
                {/* Left Side - Dotlinker Info */}
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold">
                        Dot<span className="text-red-500">linker</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum 
                        adipisci facere ad ut Corporis dolor animi quaerat explicabo 
                        blanditiis quam.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
                        <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
                        <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
                        <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Right Side - Quick Links & Resources */}
                <div className="flex md:w-2/3 justify-between mt-8 md:mt-0 space-x-10">
                    
                    {/* Quick Links */}
                    <div className="mr-10">
                        <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white">About</Link></li>
                            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                            <li><Link to="/insights" className="hover:text-white">Insights</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><Link to="#" className="hover:text-white">Terms & Conditions</Link></li>
                            <li><Link to="#" className="hover:text-white">Privacy & Policy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-10">
                Dotlinker © 2024. All Rights Reserved.
            </div>
        </footer>
    );
}
