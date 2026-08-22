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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { packages } from "@/data/packages";
import { useUIModals } from "@/providers/UIModalProvider";
import { CheckCircle2, Loader2, Compass, Users, Baby, CalendarDays } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Form validation schema using Zod
const enquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+?[0-9\s-]{10,15}$/, { message: "Please enter a valid phone number (10-15 digits)." }),
  destination: z.string().min(1, { message: "Please select a destination." }),
  adults: z.string().min(1, { message: "Please select number of adults." }),
  children: z.string().min(1, { message: "Please select number of children." }),
  preferredDate: z.string().min(1, { message: "Please select your preferred travel date." }),
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
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      adults: "",
      children: "",
      preferredDate: "",
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
        adults: "",
        children: "",
        preferredDate: "",
        message: "",
      });
    }
  }, [enquiry.isOpen, enquiry.packageName, reset]);

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);

    const childrenText = data.children === "0" ? "None" : data.children;

    const messageText = `Hello ME TRIP HOLIDAYS, I would like to enquire about a package!

*Name*: ${data.name}
*Email*: ${data.email}
*Phone*: ${data.phone}
*Destination / Package*: ${data.destination}
*Adults*: ${data.adults}
*Children*: ${childrenText}
*Preferred Travel Date*: ${data.preferredDate}${data.message ? `\n*Message*: ${data.message}` : ""}`;

    const whatsappUrl = buildWhatsAppUrl(data.destination, messageText);

    // Simulate API request delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Enquiry Form Submitted: ", data);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
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
      <DialogContent className="max-w-[92vw] sm:max-w-[460px] p-5 sm:p-6 max-h-[90vh] overflow-y-auto rounded-xl glass border-border shadow-2xl">
        <DialogHeader className="space-y-1 text-left">
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
                placeholder="+91 77363 22522"
                {...register("phone")}
                className={`rounded-lg py-2 text-sm focus-visible:ring-primary ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.phone && (
                <p className="text-[11px] font-semibold text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Destination Selection */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-destination" className="text-xs font-bold text-foreground">
                Destination / Holiday Package
              </Label>
              <Controller
                name="destination"
                control={control}
                render={({ field }) => {
                  const intPkgs = packages.filter((p) => p.type === "international");
                  const domPkgs = packages.filter((p) => p.type === "domestic");
                  const colPkgs = packages.filter((p) => p.type === "college");

                  return (
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger
                        id="enquiry-destination"
                        className={`rounded-lg py-2.5 px-3 text-xs sm:text-sm focus:ring-primary w-full ${
                          errors.destination ? "border-destructive focus:ring-destructive" : ""
                        }`}
                      >
                        <SelectValue placeholder="Choose a destination or package..." />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground max-h-[300px] overflow-y-auto border border-border shadow-2xl rounded-xl p-1.5 z-50">
                        <SelectItem value="general" className="py-2 px-2.5 font-bold text-primary focus:bg-primary/10 rounded-lg cursor-pointer">
                          General / Custom Itinerary (Any Destination)
                        </SelectItem>

                        {/* International */}
                        <SelectGroup className="pt-2">
                          <SelectLabel className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary flex items-center gap-1 bg-primary/10 rounded-md mb-1">
                            International Holidays
                          </SelectLabel>
                          {intPkgs.map((pkg) => (
                            <SelectItem
                              key={pkg.id}
                              value={pkg.name}
                              className="py-2 px-2.5 focus:bg-muted rounded-lg cursor-pointer text-xs"
                            >
                              <div className="flex items-center justify-between w-full gap-2">
                                <span className="font-semibold text-foreground">{pkg.name}</span>
                                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-bold shrink-0">
                                  {pkg.duration}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>

                        {/* Domestic */}
                        <SelectGroup className="pt-2">
                          <SelectLabel className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-accent flex items-center gap-1 bg-accent/10 rounded-md mb-1">
                            Domestic Holiday Tours
                          </SelectLabel>
                          {domPkgs.map((pkg) => (
                            <SelectItem
                              key={pkg.id}
                              value={pkg.name}
                              className="py-2 px-2.5 focus:bg-muted rounded-lg cursor-pointer text-xs"
                            >
                              <div className="flex items-center justify-between w-full gap-2">
                                <span className="font-semibold text-foreground">{pkg.name}</span>
                                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-bold shrink-0">
                                  {pkg.duration}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>

                        {/* College */}
                        <SelectGroup className="pt-2">
                          <SelectLabel className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-yellow-700 dark:text-yellow-400 flex items-center gap-1 bg-yellow-500/10 rounded-md mb-1">
                            College Group Tours
                          </SelectLabel>
                          {colPkgs.map((pkg) => (
                            <SelectItem
                              key={pkg.id}
                              value={pkg.name}
                              className="py-2 px-2.5 focus:bg-muted rounded-lg cursor-pointer text-xs"
                            >
                              <div className="flex items-center justify-between w-full gap-2">
                                <span className="font-semibold text-foreground">{pkg.name}</span>
                                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-bold shrink-0">
                                  {pkg.duration}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  );
                }}
              />
              {errors.destination && (
                <p className="text-[11px] font-semibold text-destructive">{errors.destination.message}</p>
              )}
            </div>

            {/* Adults + Children side by side */}
            <div className="grid grid-cols-2 gap-3">
              {/* Adults */}
              <div className="space-y-1.5">
                <Label htmlFor="enquiry-adults" className="text-xs font-bold text-foreground flex items-center gap-1">
                  <Users className="h-3 w-3 text-primary" />
                  Adults
                </Label>
                <Controller
                  name="adults"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        id="enquiry-adults"
                        className={`rounded-lg py-2.5 text-sm focus:ring-primary w-full ${
                          errors.adults ? "border-destructive focus:ring-destructive" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border border-border shadow-xl rounded-xl z-50">
                        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"].map((n) => (
                          <SelectItem key={n} value={n} className="cursor-pointer text-sm">
                            {n} {parseInt(n) === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.adults && (
                  <p className="text-[11px] font-semibold text-destructive">{errors.adults.message}</p>
                )}
              </div>

              {/* Children */}
              <div className="space-y-1.5">
                <Label htmlFor="enquiry-children" className="text-xs font-bold text-foreground flex items-center gap-1">
                  <Baby className="h-3 w-3 text-primary" />
                  Children
                </Label>
                <Controller
                  name="children"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        id="enquiry-children"
                        className={`rounded-lg py-2.5 text-sm focus:ring-primary w-full ${
                          errors.children ? "border-destructive focus:ring-destructive" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border border-border shadow-xl rounded-xl z-50">
                        {["0", "1", "2", "3", "4", "5", "5+"].map((n) => (
                          <SelectItem key={n} value={n} className="cursor-pointer text-sm">
                            {n === "0" ? "No Children" : `${n} ${parseInt(n) === 1 ? "Child" : "Children"}`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.children && (
                  <p className="text-[11px] font-semibold text-destructive">{errors.children.message}</p>
                )}
              </div>
            </div>

            {/* Preferred Travel Date */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-date" className="text-xs font-bold text-foreground flex items-center gap-1">
                <CalendarDays className="h-3 w-3 text-primary" />
                Preferred Travel Date
              </Label>
              <Input
                id="enquiry-date"
                type="date"
                {...register("preferredDate")}
                min={new Date().toISOString().split("T")[0]}
                className={`rounded-lg py-2 text-sm focus-visible:ring-primary ${
                  errors.preferredDate ? "border-destructive focus-visible:ring-destructive" : ""
                }`}
              />
              {errors.preferredDate && (
                <p className="text-[11px] font-semibold text-destructive">{errors.preferredDate.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-message" className="text-xs font-bold text-foreground">Message (Optional)</Label>
              <Textarea
                id="enquiry-message"
                placeholder="Any special requests, budget preferences, or custom itinerary details..."
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
                "Submit Inquiry via WhatsApp"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
