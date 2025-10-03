"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function EmailForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Email submitted:", values.email);
    
    toast({
      title: "Subscription successful!",
      description: "Thanks for your interest. We'll be in touch soon.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex space-x-2">
                <FormControl>
                  <Input 
                    placeholder="Enter your email" 
                    {...field}
                    className="h-12 text-base bg-white/10 text-white placeholder:text-white/70 border-white/20 focus-visible:ring-white"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <Button type="submit" size="lg" className="h-12 bg-white text-primary hover:bg-white/90" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Submitting...' : 'Sign Up'}</span>
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
              <FormMessage className="text-left text-white/90" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
