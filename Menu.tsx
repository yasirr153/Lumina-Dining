import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ShoppingBag } from "lucide-react";

const menuData = {
  starters: [
    { name: "Crispy Calamari", description: "Tender squid rings with lemon aioli and spicy marinara.", price: "$16", bestSeller: true },
    { name: "Burrata & Heirloom Tomato", description: "Creamy burrata, balsamic glaze, and fresh basil oil.", price: "$18", bestSeller: false },
    { name: "Truffle Fries", description: "Hand-cut fries with truffle oil, parmesan, and parsley.", price: "$12", bestSeller: true },
    { name: "Beef Carpaccio", description: "Thinly sliced prime beef, capers, arugula, and parmesan shavings.", price: "$20", bestSeller: false },
  ],
  mains: [
    { name: "Grilled Ribeye Steak", description: "12oz prime ribeye with garlic herb butter and roasted asparagus.", price: "$45", bestSeller: true },
    { name: "Pan-Seared Salmon", description: "Atlantic salmon with quinoa pilaf and honey-glazed carrots.", price: "$34", bestSeller: false },
    { name: "Wild Mushroom Risotto", description: "Arborio rice with a medley of forest mushrooms and truffle oil.", price: "$28", bestSeller: true },
    { name: "Herb-Crusted Lamb Chops", description: "New Zealand lamb with mint pesto and mashed potatoes.", price: "$42", bestSeller: false },
    { name: "Lobster Linguine", description: "Fresh pasta with lobster chunks in a spicy tomato cream sauce.", price: "$38", bestSeller: true },
  ],
  desserts: [
    { name: "Molten Lava Cake", description: "Warm chocolate cake with a gooey center and vanilla bean gelato.", price: "$14", bestSeller: true },
    { name: "Classic Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone cream and cocoa.", price: "$12", bestSeller: false },
    { name: "Lemon Tart", description: "Zesty lemon curd in a buttery crust with toasted meringue.", price: "$11", bestSeller: false },
    { name: "Artisanal Gelato", description: "Selection of three seasonal flavors.", price: "$9", bestSeller: false },
  ],
  drinks: [
    { name: "Signature Old Fashioned", description: "Bourbon, maple syrup, bitters, and orange peel.", price: "$16", bestSeller: true },
    { name: "Passion Fruit Martini", description: "Vodka, passion fruit purée, lime, and vanilla.", price: "$15", bestSeller: false },
    { name: "Craft Beer Selection", description: "Ask your server for our current local rotations.", price: "$8", bestSeller: false },
    { name: "House-Made Lemonade", description: "Freshly squeezed lemons with mint and agave.", price: "$6", bestSeller: false },
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("starters");

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Our Culinary Journey</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">The Menu</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully crafted selection of dishes, where every ingredient is chosen for its quality and flavor.
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-card border border-primary/10 p-1 rounded-none h-auto flex-wrap justify-center">
              {Object.keys(menuData).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-none px-8 py-3 text-[11px] uppercase tracking-widest font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="border border-primary/10 rounded-none shadow-sm hover:shadow-md transition-shadow bg-card group">
                      <CardContent className="p-6 flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-serif group-hover:text-primary transition-colors">{item.name}</h3>
                            {item.bestSeller && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary text-[9px] uppercase tracking-widest rounded-none">Best Seller</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">{item.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-xl font-serif font-bold text-primary">{item.price}</span>
                            <Button size="sm" variant="outline" className="rounded-none h-8 px-4 gap-2 text-[10px] uppercase tracking-widest font-bold border-primary/20">
                              <Plus size={12} /> Add to Order
                            </Button>
                          </div>
                        </div>
                        <div className="w-24 h-24 rounded-none overflow-hidden shrink-0 hidden sm:block border border-primary/10">
                          <img 
                            src={`https://picsum.photos/seed/${item.name.replace(/\s/g, '')}/200/200`} 
                            alt={item.name}
                            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-24 p-12 rounded-none bg-card border border-primary/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
            <ShoppingBag size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Hungry? Order Now!</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-light">
              Enjoy your favorite Lumina dishes from the comfort of your home. Fast pickup and delivery available.
            </p>
            <Button size="lg" className="rounded-none px-12 py-7 text-sm uppercase tracking-widest font-bold">
              Go to Online Ordering
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
