import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Seun ",
    role: "Chief Medical Officer",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Dr. Timothy has over 15 years of experience in internal medicine and healthcare leadership. She oversees all medical operations and ensures the highest standards of patient care.",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Specializing in cardiovascular health, Dr. Sarah is dedicated to preventive care and treating heart conditions with the latest evidence-based approaches.",
  },
  {
    id: 3,
    name: "Dr. Rachel Martinez",
    role: "Pediatrician",
    image: "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "With a passion for children's health, Dr. Rachel focuses on developmental care and building trusting relationships with both patients and their families.",
  },
  {
    id: 4,
    name: "Dr. Monisa Wilson",
    role: "Neurologist",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Dr. Monisa specializes in diagnosing and treating disorders of the nervous system, bringing years of experience and a patient-centered approach to his practice.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Medical Team</h2>
          <p className="text-muted-foreground">
            Our experienced team of medical professionals is dedicated to providing 
            exceptional care and improving the health of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-chart-2 font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-4">
                  {member.bio}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full hover:bg-chart-2/10 hover:text-chart-2">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Specialists</Button>
        </div>
      </div>
    </section>
  );
}