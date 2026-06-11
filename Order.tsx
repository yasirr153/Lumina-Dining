import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, Clock, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const menuItems = [
  { id: 1, name: "Truffle Risotto", price: 28, category: "Mains", image: "https://picsum.photos/seed/risotto/200/200" },
  { id: 2, name: "Wagyu Sliders", price: 24, category: "Starters", image: "https://picsum.photos/seed/sliders/200/200" },
  { id: 3, name: "Pan-Seared Scallops", price: 32, category: "Mains", image: "https://picsum.photos/seed/scallops/200/200" },
  { id: 4, name: "Molten Lava Cake", price: 14, category: "Desserts", image: "https://picsum.photos/seed/cake/200/200" },
  { id: 5, name: "Crispy Calamari", price: 16, category: "Starters", image: "https://picsum.photos/seed/calamari/200/200" },
  { id: 6, name: "Signature Old Fashioned", price: 16, category: "Drinks", image: "https://picsum.photos/seed/drink/200/200" },
];

export default function Order() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);
  const [step, setStep] = useState(1);

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 text-[11px] uppercase tracking-[0.3em] bg-primary/5 rounded-none">Fast & Fresh</Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-normal uppercase tracking-widest">Order <span className="text-primary">Online</span></h1>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>Est. Time: 25-35 mins</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Pickup: 123 Culinary Ave</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Menu Selection */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all group bg-card rounded-none">
                  <CardContent className="p-0 flex h-32">
                    <div className="w-32 h-full overflow-hidden shrink-0 border-r border-primary/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-serif text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.category}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold text-sm">${item.price}</span>
                        <Button size="sm" onClick={() => addToCart(item)} className="rounded-none h-8 w-8 p-0">
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border border-primary/20 shadow-2xl rounded-none overflow-hidden sticky top-32 bg-card">
              <div className="bg-primary p-6 text-primary-foreground flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={24} />
                  <h3 className="text-xl font-serif uppercase tracking-widest">Your Order</h3>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-none rounded-none text-[10px] uppercase tracking-widest">
                  {cart.reduce((acc, i) => acc + i.quantity, 0)} Items
                </Badge>
              </div>
              
              <CardContent className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-primary/5 border border-primary/10 rounded-none flex items-center justify-center mx-auto text-muted-foreground">
                      <ShoppingBag size={32} />
                    </div>
                    <p className="text-muted-foreground text-sm font-light uppercase tracking-widest">Your cart is empty.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                      <AnimatePresence>
                        {cart.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-center justify-between gap-4"
                          >
                            <div className="flex-1">
                              <h4 className="font-serif text-sm">{item.name}</h4>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">${item.price} each</p>
                            </div>
                            <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-none px-2 py-1">
                              <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary transition-colors">
                                <Minus size={14} />
                              </button>
                              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary transition-colors">
                                <Plus size={14} />
                              </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-primary transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                    <Separator className="bg-primary/10" />

                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-widest">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-[10px] uppercase tracking-widest">
                        <span className="text-muted-foreground">Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-xl font-serif pt-2 border-t border-primary/10 mt-4">
                        <span className="uppercase tracking-widest text-sm font-bold">Total</span>
                        <span className="text-primary font-bold">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button className="w-full rounded-none py-8 text-sm uppercase tracking-widest font-bold shadow-xl shadow-primary/10">
                      Checkout Now
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-[9px] text-muted-foreground uppercase tracking-[0.2em]">
                      <CreditCard size={12} />
                      <span>Secure Payment Powered by Stripe</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
