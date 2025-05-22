"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";
import { format, set } from "date-fns";
import { cn } from "@/lib/utils";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.date({ required_error: "Please select a date." }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions or need to schedule an appointment? Reach out to our team and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-chart-2/10 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground mt-1">(070)000ARROWHEAD</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground mt-1">info@arroweadhealthcare.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground mt-1">
                      438, Magnus Abe Street<br />
                      Wuye, Abuja, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <div className="text-muted-foreground mt-1 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] relative">
              {/* This would typically be replaced with a real map integration */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">438, Magnus Abe Street Wuye, Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <CalendarCheck className="h-5 w-5 mr-2 text-chart-2" />
              Schedule an Appointment
            </h3>
            
            {isSuccess ? (
              <div className="rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                <p>Thank you! Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select {...field} onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="primary-care">Primary Care</SelectItem>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="neurology">Neurology</SelectItem>
                            <SelectItem value="orthopedics">Orthopedics</SelectItem>
                            <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                            <SelectItem value="urgent-care">Urgent Care</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide any additional information about your visit..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* ...other fields... */}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Appointment"}
                  </Button>
                  <ReCAPTCHA
                      sitekey="6Le2H0UrAAAAACde1Yw8on1XTS24O0-sXF9gDjMo"
                      onChange={setRecaptchaToken}
                      className="mb-4"
                   />    
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}