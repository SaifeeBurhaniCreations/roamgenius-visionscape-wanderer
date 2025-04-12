
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InterestSelection from '@/components/InterestSelection';
import DestinationRecommendations from '@/components/DestinationRecommendations';
import Footer from '@/components/Footer';
import { ExternalLink, Umbrella, Languages, Sun, CreditCard, Wifi } from 'lucide-react';

// Mock data for demonstration
const mockDestinations = [
  {
    id: '1',
    name: 'Kyoto',
    country: 'Japan',
    description: 'A city where traditional culture meets modern innovation, offering a perfect blend of ancient temples and cutting-edge technology.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    highlights: [
      'Visit the iconic Fushimi Inari Shrine',
      'Experience a traditional tea ceremony',
      'Explore the bamboo forests of Arashiyama',
      'Wander through historic Gion district'
    ],
    bestTimeToVisit: 'March-May and October-November'
  },
  {
    id: '2',
    name: 'Costa Rica',
    country: 'Central America',
    description: 'A paradise for adventure lovers with its lush rainforests, incredible biodiversity, and stunning beaches on both coasts.',
    imageUrl: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zdGElMjByaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    highlights: [
      'Zip-lining through Monteverde Cloud Forest',
      'Wildlife spotting in Manuel Antonio National Park',
      'Surfing at Tamarindo Beach',
      'Relaxing in natural hot springs near Arenal Volcano'
    ],
    bestTimeToVisit: 'December-April (dry season)'
  },
  {
    id: '3',
    name: 'Barcelona',
    country: 'Spain',
    description: 'A vibrant coastal city known for its unique architecture, rich cultural scene, and delicious Catalan cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    highlights: [
      'Marvel at Gaudí\'s Sagrada Familia',
      'Stroll down La Rambla',
      'Explore the Gothic Quarter',
      'Relax on Barceloneta Beach'
    ],
    bestTimeToVisit: 'May-June and September-October'
  }
];

const mockItineraries = [
  {
    day: 1,
    title: 'Cultural Immersion',
    activities: [
      {
        time: '09:00',
        activity: 'Historical Walking Tour',
        description: 'Discover the ancient streets and fascinating history of the old town.'
      },
      {
        time: '12:30',
        activity: 'Local Cuisine Lunch',
        description: 'Taste authentic regional specialties at a family-run restaurant.'
      },
      {
        time: '14:30',
        activity: 'Museum Visit',
        description: 'Explore the city\'s premier art collection spanning centuries of creativity.'
      },
      {
        time: '18:00',
        activity: 'Sunset Viewpoint',
        description: 'Ascend to the perfect spot to watch the sunset over the city skyline.'
      }
    ]
  },
  {
    day: 2,
    title: 'Nature & Adventure',
    activities: [
      {
        time: '08:30',
        activity: 'Hiking Expedition',
        description: 'Trek through lush landscapes to discover hidden waterfalls and wildlife.'
      },
      {
        time: '13:00',
        activity: 'Picnic Lunch',
        description: 'Enjoy a prepared picnic featuring local ingredients in a scenic spot.'
      },
      {
        time: '15:00',
        activity: 'Water Activities',
        description: 'Try kayaking, paddleboarding or snorkeling in crystal-clear waters.'
      },
      {
        time: '19:00',
        activity: 'Beachside Dinner',
        description: 'Fresh seafood and regional wines at a restaurant with ocean views.'
      }
    ]
  },
  {
    day: 3,
    title: 'Local Experiences',
    activities: [
      {
        time: '09:30',
        activity: 'Artisan Workshop',
        description: 'Learn traditional crafts from local artisans and create your own souvenir.'
      },
      {
        time: '12:00',
        activity: 'Farmers Market Lunch',
        description: 'Sample street food and fresh produce at the bustling local market.'
      },
      {
        time: '14:00',
        activity: 'Cooking Class',
        description: 'Learn to prepare regional specialties with a professional chef.'
      },
      {
        time: '20:00',
        activity: 'Live Performance',
        description: 'Experience traditional music and dance at an authentic venue.'
      }
    ]
  }
];

const mockTravelTips = [
  {
    id: '1',
    title: 'Packing Essentials',
    description: 'Based on your interests and destination climate, pack light, breathable clothing with layers for evening temperature drops. Don\'t forget sustainable sunscreen and a refillable water bottle.',
    icon: <Umbrella className="h-6 w-6 text-roam-teal" />
  },
  {
    id: '2',
    title: 'Local Phrases',
    description: 'Learning basic greetings and thank you in the local language will enhance your experience and show respect to locals. Download an offline translation app before departure.',
    icon: <Languages className="h-6 w-6 text-roam-teal" />
  },
  {
    id: '3',
    title: 'Weather Considerations',
    description: 'Your travel period coincides with mild temperatures but occasional rain showers. Pack a lightweight rain jacket and plan indoor activities for the afternoons.',
    icon: <Sun className="h-6 w-6 text-roam-teal" />
  },
  {
    id: '4',
    title: 'Payment Methods',
    description: 'Most establishments in your destination accept major credit cards, but keep some local currency for small vendors and tips. Inform your bank of your travel plans to avoid card blocks.',
    icon: <CreditCard className="h-6 w-6 text-roam-teal" />
  },
  {
    id: '5',
    title: 'Connectivity',
    description: 'Wi-Fi is widely available in urban areas, but consider a local SIM card for continuous connectivity, especially for navigation in remote locations.',
    icon: <Wifi className="h-6 w-6 text-roam-teal" />
  },
  {
    id: '6',
    title: 'Off-the-beaten-path',
    description: 'While popular attractions are worthwhile, explore the neighborhood just a few blocks away from tourist centers for authentic local experiences and better-priced dining.',
    icon: <ExternalLink className="h-6 w-6 text-roam-teal" />
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  
  const handleInterestSubmit = (interests: string[]) => {
    setSelectedInterests(interests);
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      setShowRecommendations(true);
      // Scroll to recommendations after they've loaded
      setTimeout(() => {
        document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <InterestSelection onSubmit={handleInterestSubmit} />
      
      {(isLoading || showRecommendations) && (
        <DestinationRecommendations 
          isLoading={isLoading}
          destinations={mockDestinations}
          itineraries={mockItineraries}
          travelTips={mockTravelTips}
          selectedInterests={selectedInterests}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
