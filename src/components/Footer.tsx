
import React from 'react';
import { Globe, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-roam-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-roam-teal" />
              <span className="font-bold text-xl">RoamGenius</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI-powered travel planning for your perfect adventure. Discover the world your way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Travel Styles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">AI Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Travel Tips</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@roamgenius.ai</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} RoamGenius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
