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
    name: "Dr. Seun Egbewunmi",
    role: "Chief Operating Officer",
    image: "https://ik.imagekit.io/arrowheadhealthcare/black-nurse-their-workspace.jpg?updatedAt=1748001731836",
    bio: "Dr. Egbewunmi has over 15 years of experience in internal medicine and healthcare leadership. He oversees all medical operations and ensures the highest standards of patient care.",
  },
  {
    id: 2,
    name: "Dr. Patricia Ukonna",
    role: "Cardiologist",
    image: "https://ik.imagekit.io/arrowheadhealthcare/doctor-with-stethoscope-hand-her-pocket-closeup-female-smiling-while-standing-straight-white-background.jpg?updatedAt=1748002133077",
    bio: "Specializing in cardiovascular health, Dr. Ukonna is dedicated to preventive care and treating heart conditions with the latest evidence-based approaches.",
  },
  {
    id: 3,
    name: "Dr. Abayomi Shotunde",
    role: "Pediatrician",
    image: "https://ik.imagekit.io/arrowheadhealthcare/laughing-ethnic-doctor.jpg?updatedAt=1748002134762",
    bio: "With a passion for children's health, Dr. Shotunde focuses on developmental care and building trusting relationships with both patients and their families.",
  },
  {
    id: 4,
    name: "Dr. Dooyum Ashaver",
    role: "Neurologist",
    image: "https://ik.imagekit.io/arrowheadhealthcare/medium-shot-smiley-doctor-with-coat.jpg?updatedAt=1748003022727",
    bio: "Dr. Ashaver specializes in diagnosing and treating disorders of the nervous system, bringing years of experience and a patient-centered approach to his practice.",
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