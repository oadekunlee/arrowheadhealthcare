import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-bold text-primary"
            >
              <Image
                src="/logo.jpg"
                   alt="Arrowhead Healthcare Logo"
                   width={140}
                   height={64}
                   className="mr-2 bg-white rounded-xl shadow-lg border-4 p-1"
                   priority
              />
            </Link>
            <p className="text-muted-foreground">
              Providing quality healthcare services with a compassionate approach
              since 2025.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Primary Care
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Specialized Medicine
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Diagnostic Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">438, Magnus Abe Street Wuye, Abuja, Nigeria
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">(070)000ARROWHEAD</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">info@arrowheadhealthcare.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Arrowhead Healthcare. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}