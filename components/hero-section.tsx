"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

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
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
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
      <div className="container relative z-10 mx-auto h-full px-4 sm:px-6">
        <div className="flex h-full flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Advanced Healthcare for <span className="text-chart-2">Your</span> Family
            </h1>
            <p className="mb-8 text-xl text-white/90">
              All the healthcare solutions you need in one place From medical supplies to hospital design, we're your single source for excellence in healthcare delivery.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm text-white border-white/20 hover:bg-background/20">
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero features */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm dark:bg-background/90">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex items-center space-x-3 p-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium">24/7 Emergency Care</h3>
                <p className="text-xs text-muted-foreground">Available around the clock</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium">Expert Specialists</h3>
                <p className="text-xs text-muted-foreground">Board-certified physicians</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium">Advanced Technology</h3>
                <p className="text-xs text-muted-foreground">Cutting-edge equipment</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium">Convenient Hours</h3>
                <p className="text-xs text-muted-foreground">Open 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}