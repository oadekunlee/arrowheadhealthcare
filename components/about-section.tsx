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
                <TabsTrigger value="approach">Our Approach</TabsTrigger>
                <TabsTrigger value="values">Our Values</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mission" className="space-y-4">
                <p className="text-muted-foreground">
                  At Arrowhead Healthcare, In a world where healthcare challenges grow more complex by the day, Arrowhead
                  Healthcare stands as your trusted ally. We've reimagined what a healthcare partner should be—not just a vendor of products or services, but a comprehensive solution
                  provider that understands the interconnected nature of healthcare excellence.
                </p>
                <p className="text-muted-foreground">
                  We are the healthcare partner you need in your corner. Born from a vision to simplify healthcare delivery without compromising quality, we
                  bring together medical supplies, hospital management expertise, specialized consultancy, facility design, and healthcare staffing under one roof.
                </p>
              </TabsContent>
              
              <TabsContent value="approach" className="space-y-4">
                <p className="text-muted-foreground">
                  Our patient-centered approach focuses on treating the whole person, not just their symptoms. 
                  We take the time to listen to our patients, understand their unique needs, and develop 
                  personalized treatment plans that address their specific health concerns.
                </p>
                <p className="text-muted-foreground">
                  We utilize the latest medical technologies and evidence-based practices to ensure that our patients 
                  receive the most effective care possible. Our multidisciplinary team collaborates to provide 
                  comprehensive care that addresses all aspects of our patients' health.
                </p>
              </TabsContent>
              
              <TabsContent value="values" className="space-y-4">
                <p className="text-muted-foreground">
                  Our core values guide everything we do at Arrowhead Healthcare:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><span className="font-medium">Excellence</span>: We are committed to providing the highest quality care.</li>
                  <li><span className="font-medium">Compassion</span>: We treat every patient with kindness, empathy, and respect.</li>
                  <li><span className="font-medium">Integrity</span>: We adhere to the highest ethical standards in all that we do.</li>
                  <li><span className="font-medium">Innovation</span>: We continuously seek new and better ways to improve patient care.</li>
                  <li><span className="font-medium">Collaboration</span>: We work together as a team to achieve the best outcomes for our patients.</li>
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
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1600"
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