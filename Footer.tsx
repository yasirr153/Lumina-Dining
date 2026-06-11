import { Link } from "react-router-dom";
import { UtensilsCrossed, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-none flex items-center justify-center text-primary-foreground">
              <UtensilsCrossed size={20} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-[0.2em] uppercase">
              Lumina<span className="text-primary">Dining</span>
            </span>
          </Link>
          <p className="text-muted-foreground leading-relaxed font-light text-sm">
            Experience the art of modern casual dining. We blend fresh ingredients with culinary expertise to create unforgettable moments.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-none border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-none border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-none border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-primary uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest">Our Menu</Link></li>
            <li><Link to="/reservations" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest">Reservations</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest">About Us</Link></li>
            <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest">Gallery</Link></li>
            <li><Link to="/order" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest">Order Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-primary uppercase tracking-widest text-sm">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-muted-foreground text-sm">
              <MapPin size={18} className="text-primary shrink-0 mt-1" />
              <span>123 Culinary Ave, Food District, NY 10001</span>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground text-sm">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground text-sm">
              <Mail size={18} className="text-primary shrink-0" />
              <span>hello@luminadining.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-primary uppercase tracking-widest text-sm">Opening Hours</h4>
          <ul className="space-y-4">
            <li className="flex justify-between text-muted-foreground text-sm">
              <span className="uppercase tracking-widest">Mon - Thu</span>
              <span>11:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between text-muted-foreground text-sm">
              <span className="uppercase tracking-widest">Fri - Sat</span>
              <span>11:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between text-muted-foreground text-sm">
              <span className="uppercase tracking-widest">Sunday</span>
              <span>10:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <p>© 2024 Lumina Dining. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
