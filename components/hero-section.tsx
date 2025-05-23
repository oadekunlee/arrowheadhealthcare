"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

// ...existing imports...

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://ik.imagekit.io/arrowheadhealthcare/empty-modern-arms-crossed-corporate-physician.jpg?updatedAt=1748002891641",
    "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://ik.imagekit.io/arrowheadhealthcare/african-american-doctor-patient-doing-consultation.jpg?updatedAt=1748005358198"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[70vh] h-[90vh] sm:min-h-[600px] w-full overflow-hidden">
      {/* Background images with crossfade effect */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{
              opacity: index === currentImage ? 1 : 0,
              zIndex: index === currentImage ? 1 : 0,
            }}
          >
            <Image
              src={src}
              alt={`Medical setting ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <div className="flex h-full flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Advanced Healthcare for <span className="text-chart-2">Your</span> Family
            </h1>
            <p className="mb-8 text-base xs:text-lg sm:text-xl text-white/90">
              All the healthcare solutions you need in one place. From medical supplies to hospital design, we're your single source for excellence in healthcare delivery.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-background/10 backdrop-blur-sm text-white border-white/20 hover:bg-background/20"
              >
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero features */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm dark:bg-background/90">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 py-6 xs:grid-cols-2 md:grid-cols-4">
            {/* ...feature items remain unchanged... */}
          </div>
        </div>
      </div>
    </section>
  );
}