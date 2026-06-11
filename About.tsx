import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Utensils, Heart, ShieldCheck, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1 text-[11px] uppercase tracking-[0.3em] bg-primary/5 rounded-none">Our Story</Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-normal leading-tight">Crafting Moments, <span className="text-primary">One Plate</span> at a Time</h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Founded in 2018, Lumina Dining was born out of a simple desire: to bring people together over exceptional food in an atmosphere that feels both luxurious and welcoming.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Our journey started in a small kitchen with a big dream. Today, we are proud to be a cornerstone of the local culinary scene, recognized for our commitment to innovation, sustainability, and the pure joy of eating.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-primary">6+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Years of Excellence</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div>
                <span className="block text-3xl font-serif font-bold text-primary">25k+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Meals Served</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div>
                <span className="block text-3xl font-serif font-bold text-primary">15</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Expert Chefs</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-none overflow-hidden shadow-2xl border border-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1550966842-28c2e2ad2655?auto=format&fit=crop&q=80&w=1000" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover grayscale-[0.3]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-card border border-primary/20 rounded-none p-4 shadow-xl hidden md:block">
              <img 
                src="https://picsum.photos/seed/chef/200/200" 
                alt="Founder" 
                className="w-full h-full object-cover rounded-none grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-card border border-primary/10 rounded-none p-12 md:p-24 mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 uppercase tracking-widest">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-muted-foreground text-lg font-light">
              Everything we do at Lumina is guided by these four pillars of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/5 border border-primary/10 rounded-none flex items-center justify-center text-primary mx-auto">
                <Leaf size={32} />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold">Sustainability</h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light uppercase tracking-tighter">We prioritize local sourcing and zero-waste practices to protect our planet.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/5 border border-primary/10 rounded-none flex items-center justify-center text-primary mx-auto">
                <Heart size={32} />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold">Passion</h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light uppercase tracking-tighter">Every dish is a labor of love, prepared with meticulous attention to detail.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/5 border border-primary/10 rounded-none flex items-center justify-center text-primary mx-auto">
                <Utensils size={32} />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold">Innovation</h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light uppercase tracking-tighter">We constantly push the boundaries of flavor to surprise and delight our guests.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/5 border border-primary/10 rounded-none flex items-center justify-center text-primary mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold">Quality</h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light uppercase tracking-tighter">Only the finest, freshest ingredients make it into our kitchen.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-16 uppercase tracking-widest">Meet the <span className="text-primary">Visionaries</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Julian Rossi", role: "Executive Chef", image: "https://picsum.photos/seed/chef1/400/500" },
              { name: "Elena Vance", role: "Pastry Chef", image: "https://picsum.photos/seed/chef2/400/500" },
              { name: "Marcus Thorne", role: "Sommelier", image: "https://picsum.photos/seed/chef3/400/500" }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-none overflow-hidden mb-6 relative border border-primary/10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-[11px] uppercase tracking-widest font-light italic">"Food is the universal language of love."</p>
                  </div>
                </div>
                <h4 className="text-xl font-serif uppercase tracking-widest">{member.name}</h4>
                <p className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
