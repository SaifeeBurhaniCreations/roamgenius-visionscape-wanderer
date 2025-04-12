
import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <a href="/" className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-roam-teal" />
          <span className="font-bold text-xl text-roam-dark">RoamGenius</span>
        </a>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-roam-dark hover:text-roam-teal transition-colors">Destinations</a>
          <a href="#" className="text-roam-dark hover:text-roam-teal transition-colors">How It Works</a>
          <a href="#" className="text-roam-dark hover:text-roam-teal transition-colors">About</a>
          <Button className="bg-roam-teal hover:bg-roam-teal/90 text-white">Start Planning</Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 px-4 space-y-3">
            <a href="#" className="block py-2 text-roam-dark hover:text-roam-teal transition-colors">Destinations</a>
            <a href="#" className="block py-2 text-roam-dark hover:text-roam-teal transition-colors">How It Works</a>
            <a href="#" className="block py-2 text-roam-dark hover:text-roam-teal transition-colors">About</a>
            <Button className="w-full bg-roam-teal hover:bg-roam-teal/90 text-white">Start Planning</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
