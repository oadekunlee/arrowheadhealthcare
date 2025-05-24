import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-chart-2 mb-2">ABOUT ARROWHEAD HEALTHCARE</span>
            <h2 className="text-3xl font-bold mb-6">Committed to Excellence in Healthcare Since 2025</h2>
            
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="approach">Get Started</TabsTrigger>
                <TabsTrigger value="values">Our Principles</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mission" className="space-y-4">
                <p className="text-muted-foreground">
                  Arrowhead Healthcare is a comprehensive healthcare solutions provider dedicated
                  to enhancing medical service delivery across multiple touchpoints.
                </p>
                <p className="text-muted-foreground">
                  With expertise spanning medical supplies, hospital management, specialized
                  consultancy, facility design, and healthcare staffing, we're your partner in achieving
                  operational excellence and improved patient outcomes.
                </p>
              </TabsContent>
              
              <TabsContent value="approach" className="space-y-4">
                <p className="text-muted-foreground">
                  Our patient-centered approach focuses on treating the whole person, not just their symptoms. 
                  We take the time to listen to our patients, understand their unique needs, and develop 
                  personalized treatment plans that address their specific health concerns.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><span className="font-medium">Consult</span>: Schedule a needs assessment with our healthcare solutions team</li>
                  <li><span className="font-medium">Customize</span>: Receive a tailored solution designed for your specific requirements</li>
                  <li><span className="font-medium">Implement</span>: Experience seamless integration with ongoing support and optimization</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="values" className="space-y-4">
                <p className="text-muted-foreground">
                 Throughout our growth, we've remained committed to our founding principles:
                 excellence, innovation, integrity, and a patient-centered approach to everything we do.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><span className="font-medium">Excellence</span>: We uphold the highest standards in everything we do, from the quality of our medical supplies to the expertise of our consultancy services.</li>
                  <li><span className="font-medium">Innovation</span>: We continuously seek new and better ways to address healthcare challenges, embracing emerging technologies and methodologies. </li>
                  <li><span className="font-medium">Integrity</span>:  We operate with transparency, honesty, and ethical conduct in all our business relationships and practices.</li>
                  <li><span className="font-medium">Collaboration</span>: We believe in the power of partnership, working closely with our clients to develop tailored solutions that meet their specific needs.</li>
                  <li><span className="font-medium">Patient-Centered</span>: We never lose sight of the ultimate purpose of healthcare—the patient. All our solutions are designed with patient outcomes and experiences in mind.</li>
                  <li><span className="font-medium">Global perspective, local understanding</span>: We bring international best practices to each project while respecting and adapting to local healthcare contexts and cultures.</li>
                </ul>
              </TabsContent>
            </Tabs>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg">Our History</Button>
              <Button variant="outline" size="lg">Meet Our Team</Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://ik.imagekit.io/arrowheadhealthcare/front-view-smiley-doctor-clinic.jpg?updatedAt=1748001050634"
                alt="Medical professionals in a meeting"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background rounded-lg p-6 shadow-lg max-w-xs">
              <div className="flex justify-between items-center mb-4">
                <div className="text-4xl font-bold text-chart-2">20+</div>
                <div className="text-4xl font-bold text-chart-2">50+</div>
                <div className="text-4xl font-bold text-chart-2">10k+</div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="text-center">
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Specialists</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}