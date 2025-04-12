
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16 pb-8 flex flex-col justify-center">
      {/* Animated background with patterns */}
      <div 
        className="absolute inset-0 -z-10 bg-hero-pattern"
        style={{
          backgroundSize: '30px 30px',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-roam-blue/10 via-roam-teal/20 to-roam-yellow/10 animated-bg"
      />

      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-roam-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-roam-teal to-roam-blue">
              AI-Powered
            </span>{" "}
            Travel Planning for Your Perfect Adventure
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Tell us your interests, and our AI will craft personalized travel experiences 
            that match your exact preferences. No more endless searching.
          </p>
          
          <Button 
            size="lg" 
            className="bg-roam-teal hover:bg-roam-teal/90 text-white text-lg px-8 py-6"
            onClick={() => document.getElementById('interests')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Your Perfect Trip <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm">
                <svg className="w-6 h-6 text-roam-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700">Personalized recommendations</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm">
                <svg className="w-6 h-6 text-roam-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700">100+ countries covered</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm">
                <svg className="w-6 h-6 text-roam-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700">Instant itineraries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
