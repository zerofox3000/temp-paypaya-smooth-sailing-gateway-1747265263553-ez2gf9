
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";
import { Card, CardContent } from "@/components/ui/card";
import { getReferralFromURL } from "@/lib/urlService";

// Form validation schema
const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  website: z.string().url("Please enter a valid website URL"),
  businessType: z.string().min(2, "Please specify your business type"),
  monthlyVolume: z.string().min(1, "Please enter your estimated monthly volume"),
  businessDescription: z.string().min(10, "Please provide a brief description of your business"),
  referralCode: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const MerchantSignupForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      businessType: "",
      monthlyVolume: "",
      businessDescription: "",
      referralCode: "",
    },
  });
  
  // Check URL for referral code on component mount
  useEffect(() => {
    const referralCode = getReferralFromURL();
    if (referralCode) {
      form.setValue("referralCode", referralCode);
    }
  }, [form]);
  
  const onSubmit = async (values: FormValues) => {
    try {
      // This is where we'll integrate with Supabase later
      console.log("Form submitted:", values);
      
      // Show success message
      toast.success("Application submitted successfully! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <Card className="shadow-lg glass">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Business Name" className="bg-background/50 border-accent/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" className="bg-background/50 border-accent/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" className="bg-background/50 border-accent/20" {...field} />
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
                      <Input placeholder="(123) 456-7890" className="bg-background/50 border-accent/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourbusiness.com" className="bg-background/50 border-accent/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <FormControl>
                      <Input placeholder="E-commerce, SaaS, etc." className="bg-background/50 border-accent/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="monthlyVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Monthly Volume</FormLabel>
                    <FormControl>
                      <Input placeholder="$10,000" className="bg-background/50 border-accent/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="referralCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referral Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter referral code if you have one" className="bg-background/50 border-accent/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="businessDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide a brief description of your business and how you plan to use PayPaya.ai"
                      className="min-h-[100px] bg-background/50 border-accent/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 py-6 text-lg">
              Submit Application
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default MerchantSignupForm;
