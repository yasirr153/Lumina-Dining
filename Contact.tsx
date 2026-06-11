import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 text-[11px] uppercase tracking-[0.3em] bg-primary/5 rounded-none">Get In Touch</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 uppercase tracking-widest">We'd Love to <span className="text-primary">Hear From You</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Have a question, feedback, or just want to say hello? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border border-primary/10 shadow-xl bg-card p-8 rounded-none">
              <h3 className="text-xl font-serif uppercase tracking-widest mb-8 text-primary">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none border border-primary/10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Our Location</h4>
                    <p className="text-muted-foreground text-sm font-light">123 Culinary Ave, Food District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none border border-primary/10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Phone Number</h4>
                    <p className="text-muted-foreground text-sm font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none border border-primary/10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Email Address</h4>
                    <p className="text-muted-foreground text-sm font-light">hello@luminadining.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none border border-primary/10 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Working Hours</h4>
                    <p className="text-muted-foreground text-sm font-light">Mon - Sun: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-primary/10">
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-none border border-primary/10 bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-none border border-primary/10 bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-none border border-primary/10 bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-primary/20 shadow-2xl p-8 md:p-12 rounded-none bg-card">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-[10px] uppercase tracking-widest text-muted-foreground">First Name</Label>
                    <Input id="first-name" placeholder="John" className="rounded-none h-12 bg-black border-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" className="rounded-none h-12 bg-black border-primary/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="rounded-none h-12 bg-black border-primary/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-muted-foreground">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="rounded-none h-12 bg-black border-primary/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</Label>
                  <textarea 
                    id="message" 
                    className="w-full min-h-[150px] rounded-none border border-primary/10 bg-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <Button className="w-full rounded-none py-8 text-sm uppercase tracking-widest font-bold shadow-xl shadow-primary/10 group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-none overflow-hidden h-[400px] relative shadow-2xl border border-primary/10">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" 
            alt="Map placeholder" 
            className="w-full h-full object-cover grayscale brightness-[0.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/90 backdrop-blur-md p-12 rounded-none text-center shadow-2xl border border-primary/20 max-w-sm mx-6">
              <MapPin size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-normal mb-4 uppercase tracking-widest">Find Us</h3>
              <p className="text-muted-foreground mb-8 text-sm font-light">123 Culinary Ave, Food District, NY 10001</p>
              <Button variant="outline" className="rounded-none px-10 uppercase text-[10px] tracking-widest font-bold border-primary/30">Open in Google Maps</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
