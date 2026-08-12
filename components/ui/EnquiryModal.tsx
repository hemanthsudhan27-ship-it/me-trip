"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { packages } from "@/data/packages";
import { useUIModals } from "@/providers/UIModalProvider";
import { CheckCircle2, Loader2, Compass } from "lucide-react";

// Form validation schema using Zod
const enquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+?[0-9\s-]{10,15}$/, { message: "Please enter a valid phone number (10-15 digits)." }),
  destination: z.string().min(1, { message: "Please select a destination." }),
  message: z.string().optional(),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export default function EnquiryModal() {
  const { enquiry } = useUIModals();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    },
  });

  // Pre-fill the destination when the modal opens with a package name
  useEffect(() => {
    if (enquiry.isOpen) {
      setIsSubmitted(false);
      reset({
        name: "",
        email: "",
        phone: "",
        destination: enquiry.packageName || "",
        message: "",
      });
    }
  }, [enquiry.isOpen, enquiry.packageName, reset]);

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Enquiry Form Submitted: ", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    enquiry.close();
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 300); // Wait for fade-out animation to finish before resetting
  };

  return (
    <Dialog open={enquiry.isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[450px] p-6 max-h-[90vh] overflow-y-auto rounded-xl glass border-border shadow-2xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-heading font-extrabold flex items-center gap-2 text-foreground">
            <Compass className="h-5 w-5 text-primary" />
            Plan Your Journey
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {isSubmitted 
              ? "Your request has been successfully received." 
              : "Fill out the form below, and our travel experts will design your perfect holiday package within 24 hours."}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          /* SUCCESS VIEW */
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="bg-emerald-100 dark:bg-emerald-950 p-4 rounded-full text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-foreground">
              Enquiry Submitted!
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Thank you for choosing ME TRIP HOLIDAYS. One of our destination specialists will call or WhatsApp you shortly.
            </p>
            <Button
              onClick={handleClose}
              className="bg-primary hover:bg-primary/95 text-white font-bold rounded-full px-8 py-2.5 mt-4"
            >
              Close Window
            </Button>
          </div>
        ) : (
          /* FORM VIEW */
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-name" className="text-xs font-bold text-foreground">Full Name</Label>
              <Input
                id="enquiry-name"
                placeholder="John Doe"
                {...register("name")}
                className={`rounded-lg py-2 text-sm focus-visible:ring-primary ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.name && (
                <p className="text-[11px] font-semibold text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-email" className="text-xs font-bold text-foreground">Email Address</Label>
              <Input
                id="enquiry-email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={`rounded-lg py-2 text-sm focus-visible:ring-primary ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-[11px] font-semibold text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-phone" className="text-xs font-bold text-foreground">Phone / WhatsApp Number</Label>
              <Input
                id="enquiry-phone"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className={`rounded-lg py-2 text-sm focus-visible:ring-primary ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.phone && (
                <p className="text-[11px] font-semibold text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Destination Selection */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-destination" className="text-xs font-bold text-foreground">Destination / Holiday Package</Label>
              <Controller
                name="destination"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger
                      id="enquiry-destination"
                      className={`rounded-lg py-2 text-sm focus:ring-primary ${errors.destination ? "border-destructive focus:ring-destructive" : ""}`}
                    >
                      <SelectValue placeholder="Select Destination" />
                    </SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="general" className="font-semibold text-primary">General Enquiry (Not Destination Specific)</SelectItem>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.name}>
                          {pkg.name} ({pkg.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.destination && (
                <p className="text-[11px] font-semibold text-destructive">{errors.destination.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-message" className="text-xs font-bold text-foreground">Message (Optional)</Label>
              <Textarea
                id="enquiry-message"
                placeholder="Mention travel dates, number of travelers, budget preferences..."
                rows={3}
                {...register("message")}
                className="rounded-lg py-2 text-sm focus-visible:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/95 text-white font-bold rounded-full py-2.5 shadow-lg mt-2 flex items-center justify-center gap-2 transform active:scale-95 transition-transform"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4.5 w-4.5 animate-spin" />
                  Sending Request...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
