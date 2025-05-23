import { Heart, Baby,  Stethoscope, Pill as Hospital, HospitalIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 1,
    title: "Medical Supplies",
    description: "From everyday essentials to specialized equipment, our medical supplies meet international standards while respecting your budget. No more juggling multiple vendors or compromising on quality.",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "Hospital Management",
    description: "Transform your healthcare facility's performance with management solutions that optimize operations, enhance patient experiences, and improve financial outcomes. We don't just advise, we implement.",
    icon: <Heart className="h-10 w-10" />,
  },
  {
    id: 3,
    title: "Healthcare Consultancy",
    description: "Whether you're planning a medical outreach, implementing a government health policy, or developing a corporate health initiative, our consultants bring clarity to complexity.",
    icon: <Baby className="h-10 w-10" />,
  },
  {
    id: 4,
    title: "Hospital Design & Construction",
    description: "Create healthcare environments that work as beautifully as they look. Our design and construction services blend clinical efficiency with healing aesthetics.",
    icon: <Hospital className="h-10 w-10" />,
  },
  {
    id: 5,
    title: "Healthcare HR & Training",
    description: "Create healthcare environments that work as beautifully as they look. Our design and construction services blend clinical efficiency with healing aesthetics.",
    icon: <HospitalIcon className="h-10 w-10" />,
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Medical Services</h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of healthcare services to meet your family's needs,
            from routine check-ups to specialized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-md transition-all duration-300 bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-chart-2 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <CardDescription className="text-foreground/80 text-sm min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-chart-2/10 group-hover:border-chart-2/50 transition-colors">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}