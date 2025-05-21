import { Heart, Activity, Thermometer, Baby, Brain, Bone, Stethoscope, Pill as Pills, Microscope } from "lucide-react";
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
    title: "Primary Care",
    description: "Comprehensive healthcare addressing preventive services, wellness exams, and treatment of acute and chronic illnesses.",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert care for heart conditions, including diagnostic testing, treatment, and ongoing management of cardiovascular diseases.",
    icon: <Heart className="h-10 w-10" />,
  },
  {
    id: 3,
    title: "Pediatrics",
    description: "Specialized healthcare for children from birth through adolescence, focusing on growth, development, and childhood illnesses.",
    icon: <Baby className="h-10 w-10" />,
  },
  {
    id: 4,
    title: "Neurology",
    description: "Diagnosis and treatment of disorders affecting the nervous system, including the brain, spinal cord, and peripheral nerves.",
    icon: <Brain className="h-10 w-10" />,
  },
  {
    id: 5,
    title: "Orthopedics",
    description: "Care for musculoskeletal issues, including joint pain, sports injuries, arthritis, and rehabilitation services.",
    icon: <Bone className="h-10 w-10" />,
  },
  {
    id: 6,
    title: "Internal Medicine",
    description: "Specialized care for adults focusing on prevention, diagnosis, and treatment of adult diseases, including chronic conditions.",
    icon: <Activity className="h-10 w-10" />,
  },
  {
    id: 7,
    title: "Pharmaceuticals",
    description: "On-site pharmacy services providing prescription medications, refills, and medication management consultations.",
    icon: <Pills className="h-10 w-10" />,
  },
  {
    id: 8,
    title: "Laboratory Services",
    description: "Comprehensive diagnostic testing, including blood work, urinalysis, pathology, and other laboratory procedures.",
    icon: <Microscope className="h-10 w-10" />,
  },
  {
    id: 9,
    title: "Urgent Care",
    description: "Immediate medical attention for non-life-threatening illnesses and injuries when your primary care provider is unavailable.",
    icon: <Thermometer className="h-10 w-10" />,
  },
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