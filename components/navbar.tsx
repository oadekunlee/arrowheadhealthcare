"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Menu,
  Phone,
  Calendar,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold text-primary"
            >
              <span className="text-chart-2 mr-1">Arrow</span>
              <span>Health</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" className="hidden lg:flex gap-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </Button>
              <Button size="sm" className="hidden lg:flex gap-2">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 sm:px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground/80 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button size="sm" variant="outline" className="w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                <span>Call Now</span>
              </Button>
              <Button size="sm" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}