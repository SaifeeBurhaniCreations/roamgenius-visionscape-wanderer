
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, Info, Clock } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  bestTimeToVisit: string;
}

interface Itinerary {
  day: number;
  title: string;
  activities: {
    time: string;
    activity: string;
    description: string;
  }[];
}

interface TravelTip {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface DestinationRecommendationsProps {
  isLoading: boolean;
  destinations: Destination[];
  itineraries: Itinerary[];
  travelTips: TravelTip[];
  selectedInterests: string[];
}

const DestinationRecommendations = ({
  isLoading,
  destinations,
  itineraries,
  travelTips,
  selectedInterests,
}: DestinationRecommendationsProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="recommendations">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-roam-blue/10 text-roam-blue px-4 py-1 rounded-full text-sm font-medium">AI Recommendations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personalized Travel Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your interests in{" "}
            <span className="text-roam-teal font-medium">
              {selectedInterests.join(', ')}
            </span>
            , we've crafted the perfect travel experience.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 border-4 border-roam-teal/20 border-t-roam-teal rounded-full animate-spin mb-4"></div>
            <p className="text-lg text-gray-600">Generating your perfect travel recommendations...</p>
          </div>
        ) : (
          <Tabs defaultValue="destinations" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="destinations">Destinations</TabsTrigger>
              <TabsTrigger value="itinerary">Sample Itinerary</TabsTrigger>
              <TabsTrigger value="tips">Travel Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="destinations">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                  <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={destination.imageUrl} 
                        alt={destination.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{destination.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1 text-roam-teal" />
                            {destination.country}
                          </CardDescription>
                        </div>
                        <div className="bg-roam-teal/10 text-roam-teal px-3 py-1 rounded-full text-xs">
                          Perfect Match
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Highlights:</h4>
                        <ul className="text-sm space-y-1">
                          {destination.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-roam-teal mr-2">•</span> {highlight}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-sm mt-4">
                          <Calendar className="h-4 w-4 mr-1 text-roam-blue" />
                          <span className="text-gray-600">Best time to visit: </span>
                          <span className="ml-1 font-medium">{destination.bestTimeToVisit}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-roam-teal hover:bg-roam-teal/90">Explore More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="itinerary">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-roam-teal" />
                    Sample 3-Day Itinerary
                  </CardTitle>
                  <CardDescription>
                    A personalized schedule based on your selected interests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {itineraries.map((day) => (
                    <div key={day.day} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
                        Day {day.day}: {day.title}
                      </h3>
                      <div className="space-y-6">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 text-center">
                              <div className="bg-roam-teal/10 text-roam-teal text-sm font-medium px-3 py-1 rounded-lg">
                                {activity.time}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">{activity.activity}</h4>
                              <p className="text-sm text-gray-600">{activity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-roam-teal text-roam-teal hover:bg-roam-teal/5">
                    Save Itinerary
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {travelTips.map((tip) => (
                  <Card key={tip.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                      <div className="mr-4 p-2 bg-roam-teal/10 rounded-lg">
                        {tip.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default DestinationRecommendations;
