import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-bottom border-border py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform">
            <UtensilsCrossed size={20} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-[0.2em] uppercase">
            Lumina<span className="text-primary">Dining</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/order">
            <Button variant="ghost" size="icon" className="relative rounded-sm">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] font-bold text-primary-foreground rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Link to="/reservations">
            <Button className="rounded-sm px-6 uppercase text-[11px] tracking-widest font-bold">Reserve a Table</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/order">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag size={20} />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-2xl font-serif font-medium transition-colors hover:text-primary",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/70"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-border flex flex-col gap-4">
                  <Link to="/reservations" className="w-full">
                    <Button className="w-full rounded-full py-6 text-lg">
                      Reserve a Table
                    </Button>
                  </Link>
                  <Link to="/order" className="w-full">
                    <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                      Order Online
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
