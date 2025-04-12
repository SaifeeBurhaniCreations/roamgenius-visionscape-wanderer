
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Compass, Museum, Utensils, Mountain, Landmark, Waves, Camera, Users, Heart, Gem, Sparkles } from 'lucide-react';

interface InterestOption {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
}

const interestOptions: InterestOption[] = [
  { 
    id: 'adventure', 
    icon: <Mountain className="h-8 w-8 text-roam-teal" />, 
    name: 'Adventure', 
    description: 'Thrilling activities and outdoor excursions' 
  },
  { 
    id: 'history', 
    icon: <Landmark className="h-8 w-8 text-roam-blue" />, 
    name: 'History & Culture', 
    description: 'Museums, historical sites, and local traditions' 
  },
  { 
    id: 'food', 
    icon: <Utensils className="h-8 w-8 text-roam-orange" />, 
    name: 'Culinary', 
    description: 'Food tours, cooking classes, and local cuisine' 
  },
  { 
    id: 'relaxation', 
    icon: <Waves className="h-8 w-8 text-roam-teal" />, 
    name: 'Relaxation', 
    description: 'Beaches, spas, and peaceful retreats' 
  },
  { 
    id: 'photography', 
    icon: <Camera className="h-8 w-8 text-roam-coral" />, 
    name: 'Photography', 
    description: 'Scenic views and picture-perfect moments' 
  },
  { 
    id: 'family', 
    icon: <Users className="h-8 w-8 text-roam-yellow" />, 
    name: 'Family', 
    description: 'Kid-friendly activities and attractions' 
  },
  { 
    id: 'romantic', 
    icon: <Heart className="h-8 w-8 text-roam-coral" />, 
    name: 'Romantic', 
    description: 'Intimate experiences for couples' 
  },
  { 
    id: 'luxury', 
    icon: <Gem className="h-8 w-8 text-roam-blue" />, 
    name: 'Luxury', 
    description: 'High-end accommodations and experiences' 
  }
];

interface InterestSelectionProps {
  onSubmit: (selectedInterests: string[]) => void;
}

const InterestSelection = ({ onSubmit }: InterestSelectionProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section id="interests" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-roam-teal/10 text-roam-teal px-4 py-1 rounded-full text-sm font-medium">Personalize</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What interests you?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your travel preferences and our AI will generate personalized 
            recommendations that match your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {interestOptions.map((option) => {
            const isSelected = selectedInterests.includes(option.id);
            return (
              <div 
                key={option.id}
                onClick={() => toggleInterest(option.id)} 
                className={`interest-card cursor-pointer ${
                  isSelected ? 'ring-2 ring-roam-teal bg-roam-teal/5' : ''
                }`}
              >
                <div className="absolute top-3 right-3">
                  {isSelected && (
                    <div className="bg-roam-teal text-white rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{option.name}</h3>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className={`bg-roam-teal hover:bg-roam-teal/90 text-white px-8 py-6 ${
              selectedInterests.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={selectedInterests.length === 0}
            onClick={() => onSubmit(selectedInterests)}
          >
            <Sparkles className="mr-2 h-5 w-5" /> Generate My Travel Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InterestSelection;
