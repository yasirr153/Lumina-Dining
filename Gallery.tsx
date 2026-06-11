import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  { id: 1, title: "Signature Risotto", category: "Food", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Main Dining Hall", category: "Ambiance", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Craft Cocktails", category: "Drinks", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Chef's Special", category: "Food", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Private Lounge", category: "Ambiance", image: "https://images.unsplash.com/photo-1550966842-28c2e2ad2655?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Dessert Platter", category: "Food", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Outdoor Seating", category: "Ambiance", image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Wine Cellar", category: "Drinks", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" },
  { id: 9, title: "Fresh Ingredients", category: "Kitchen", image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800" },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 uppercase tracking-widest">Visual Experience</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 italic">A Glimpse of <span className="text-primary">Lumina</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a visual tour through our culinary creations and the beautiful spaces we've designed for your comfort.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-none border border-primary/10 break-inside-avoid"
            >
              <img 
                src={img.image} 
                alt={img.title} 
                className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                <Badge className="mb-4 bg-primary text-primary-foreground rounded-none uppercase text-[10px] tracking-widest">{img.category}</Badge>
                <h3 className="text-white text-xl font-serif">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
