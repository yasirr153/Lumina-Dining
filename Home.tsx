import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Utensils, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Food Critic",
    content: "The attention to detail in both the plating and the flavor profiles is unmatched. A true gem in the city.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Regular Guest",
    content: "Lumina has become our go-to for family celebrations. The ambiance is warm and the service is always impeccable.",
    rating: 5,
    image: "https://picsum.photos/seed/michael/100/100"
  },
  {
    name: "Emma Rodriguez",
    role: "Professional Chef",
    content: "As a chef, I'm picky. But Lumina's commitment to fresh, local ingredients really shines through in every dish.",
    rating: 5,
    image: "https://picsum.photos/seed/emma/100/100"
  }
];

const featuredDishes = [
  {
    name: "Truffle Infused Risotto",
    description: "Creamy Arborio rice with wild mushrooms and fresh black truffle shavings.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller"
  },
  {
    name: "Pan-Seared Scallops",
    description: "Hokkaido scallops with pea purée, crispy pancetta, and lemon butter sauce.",
    price: "$32",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    tag: "Chef's Choice"
  },
  {
    name: "Wagyu Beef Sliders",
    description: "Mini Wagyu patties with caramelized onions, gruyère, and truffle aioli.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=800",
    tag: "Popular"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
            alt="Restaurant Ambiance"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary px-4 py-1 text-[11px] uppercase tracking-[0.3em] bg-primary/5 rounded-none">
              Crafting Culinary Memories
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-8 leading-[1.1]">
              The Art of <span className="text-primary">Modern</span><br />Comfort Dining
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/reservations">
                <Button size="lg" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest font-bold group">
                  Reserve a Table
                </Button>
              </Link>
              <Link to="/menu">
                <Button size="lg" variant="outline" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest font-bold bg-white/5 backdrop-blur-sm border-primary/20 hover:bg-white/10">
                  Order Online
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-primary">15k+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Happy Diners</span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block"></div>
          <div className="flex flex-col items-center">
            <div className="flex text-primary mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">4.9/5 Average Rating</span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-primary">12</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Culinary Awards</span>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Signature Creations</h2>
              <p className="text-muted-foreground text-lg">
                A curated selection of our most beloved dishes, each telling a unique story of flavor and technique.
              </p>
            </div>
            <Link to="/menu">
              <Button variant="link" className="text-primary p-0 h-auto text-lg group">
                Explore Full Menu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border border-primary/10 bg-card group cursor-pointer rounded-none">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-none uppercase text-[10px] tracking-widest">
                      {dish.tag}
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-xl font-serif">{dish.name}</h3>
                      <span className="text-primary font-bold text-sm">{dish.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
                alt="Chef at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary rounded-2xl p-8 text-primary-foreground hidden md:flex flex-col justify-center gap-4 shadow-2xl">
              <Award size={48} />
              <h4 className="text-2xl font-serif font-bold leading-tight">Excellence in Every Detail</h4>
              <p className="text-sm text-primary-foreground/80 italic">"Cooking is an art, but dining is an experience."</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Dine With Us?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that a great meal is more than just food on a plate. It's about the atmosphere, the service, and the memories created around the table.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Utensils size={24} />
                </div>
                <h4 className="text-xl font-bold">Farm to Table</h4>
                <p className="text-muted-foreground text-sm">We source 90% of our ingredients from local sustainable farms within a 50-mile radius.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
                <h4 className="text-xl font-bold">Fast Service</h4>
                <p className="text-muted-foreground text-sm">Our kitchen is optimized for efficiency without compromising on the quality of your meal.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <h4 className="text-xl font-bold">Expert Chefs</h4>
                <p className="text-muted-foreground text-sm">Our culinary team is led by Michelin-trained chefs with over 20 years of global experience.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Star size={24} />
                </div>
                <h4 className="text-xl font-bold">Prime Ambiance</h4>
                <p className="text-muted-foreground text-sm">Designed by award-winning architects to provide a perfect balance of luxury and comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our regular diners have to say about their Lumina experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border bg-secondary/10 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex text-primary mb-6">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-lg italic text-foreground/80 mb-8 leading-relaxed">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550966842-28c2e2ad2655?auto=format&fit=crop&q=80&w=1920"
            alt="Food spread"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready for an Unforgettable Dining Experience?</h2>
          <p className="text-xl text-white/80 mb-12 font-light">
            Tables fill up quickly, especially on weekends. Reserve your spot now or order your favorite dishes for pickup.
          </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservations" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] font-bold shadow-2xl shadow-primary/10">
                Reserve a Table
              </Button>
            </Link>
            <Link to="/order" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] font-bold bg-white/5 backdrop-blur-md border-primary/20 hover:bg-white/10">
                Order Online
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-white/50 text-sm italic">
            * Get 10% off your first online order with code: <span className="text-primary font-bold not-italic">LUMINA10</span>
          </p>
        </div>
      </section>
    </div>
  );
}
