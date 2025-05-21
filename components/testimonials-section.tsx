"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Lewis",
    position: "Patient since 2018",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The care I received at Arrowhead Healthcare was exceptional. Dr. Johnson took the time to listen to my concerns and developed a treatment plan that addressed my specific needs. The entire staff was professional, compassionate, and made me feel comfortable throughout my visit.",
  },
  {
    id: 2,
    name: "Robert Garcia",
    position: "Patient since 2015",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "I've been bringing my family to Arrowhead Healthcare for years, and I'm always impressed by their thorough approach to care. The pediatric team is especially wonderful with my children, making what could be a scary experience comfortable and even fun. I wouldn't trust our family's health to anyone else.",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    position: "Patient since 2020",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "After struggling with chronic pain for years, I found real solutions at Arrowhead Healthcare. Their integrated approach, combining traditional medicine with holistic treatments, has made a tremendous difference in my quality of life. I appreciate their dedication to finding the right treatment for each individual.",
  },
  {
    id: 4,
    name: "Michael Johnson",
    position: "Patient since 2019",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The team at Arrowhead Healthcare guided me through a challenging diagnosis with compassion and clarity. They took the time to explain my condition and treatment options, answering all my questions patiently. Their support made a difficult time much easier to navigate.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-muted-foreground">
            We take pride in providing exceptional care to our patients. 
            Here's what some of them have to say about their experience with Arrowhead Healthcare.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className={`overflow-hidden transition-all duration-300 ${
                    index === activeIndex || index === (activeIndex + 1) % testimonials.length
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 absolute"
                  }`}
                  style={{
                    display: 
                      index === activeIndex || index === (activeIndex + 1) % testimonials.length
                        ? "block"
                        : "none"
                  }}
                >
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-chart-2/30 mb-4" />
                    <p className="text-foreground/80 mb-6 min-h-[160px]">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-chart-2/30 mb-4" />
                <p className="text-foreground/80 mb-6">{testimonials[activeIndex].quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                    <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeIndex === index || (activeIndex + 1) % testimonials.length === index
                    ? "bg-chart-2 w-10"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}