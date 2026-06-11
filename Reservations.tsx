import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Calendar, Users, Clock, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Reservations() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 uppercase tracking-widest">Book Your Experience</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 italic">Reserve Your <span className="text-primary">Table</span></h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Join us for an unforgettable evening of fine dining. Whether it's a romantic date, a family gathering, or a business meeting, we'll make it special.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Urgency Note</h4>
                  <p className="text-muted-foreground">Tables fill up quickly, especially on weekends. We recommend booking at least 48 hours in advance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Large Groups</h4>
                  <p className="text-muted-foreground">For parties larger than 8 people, please contact us directly via phone to ensure we can accommodate your group.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border space-y-6">
              <h4 className="font-serif text-2xl font-bold">Contact Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={20} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={20} className="text-primary" />
                  <span>reservations@luminadining.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" />
                  <span>123 Culinary Ave, Food District, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl -z-10"></div>
            <Card className="border border-primary/20 shadow-2xl p-8 md:p-12 rounded-none bg-card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required className="rounded-none h-12 bg-black border-primary/10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required className="rounded-none h-12 bg-black border-primary/10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-[10px] uppercase tracking-widest text-muted-foreground">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="date" type="date" required className="rounded-none h-12 pl-10 bg-black border-primary/10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-[10px] uppercase tracking-widest text-muted-foreground">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input id="time" type="time" required className="rounded-none h-12 pl-10 bg-black border-primary/10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-[10px] uppercase tracking-widest text-muted-foreground">Number of Guests</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input id="guests" type="number" min="1" max="8" placeholder="2" required className="rounded-none h-12 pl-10 bg-black border-primary/10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-[10px] uppercase tracking-widest text-muted-foreground">Special Requests (Optional)</Label>
                    <textarea 
                      id="notes" 
                      className="w-full min-h-[120px] rounded-none border border-primary/10 bg-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Birthdays, allergies, seating preference..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full rounded-none py-8 text-sm uppercase tracking-widest font-bold shadow-xl shadow-primary/10">
                    Confirm Table
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground italic">
                    By clicking "Confirm Reservation", you agree to our booking policy.
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold">Reservation Confirmed!</h2>
                  <p className="text-muted-foreground text-lg">
                    Thank you for choosing Lumina Dining. We've sent a confirmation email to your inbox. We look forward to seeing you!
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full px-8">
                    Make Another Booking
                  </Button>
                </motion.div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
