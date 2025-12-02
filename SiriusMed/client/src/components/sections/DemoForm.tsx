import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const payload = Object.fromEntries(data.entries());
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Failed to submit demo request");
      }

      toast({
        title: "Thanks — request received",
        description: "We’ll reach out shortly to schedule your demo.",
      });
      form.reset();
    } catch (err: any) {
      toast({
        title: "Submission failed",
        description: err?.message || "Please try again or email info@voicebreeze.io",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book-demo" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3">Book a Demo</h2>
          <p className="text-muted-foreground text-lg">Tell us a bit about you. We’ll follow up within one business day.</p>
        </div>

        <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div>
              <Label htmlFor="company">Company / Organization</Label>
              <Input id="company" name="company" placeholder="Company Inc." required />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" placeholder="Clinical Ops, Product, etc." />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
          </div>

          <div>
            <Label htmlFor="message">What would you like to see?</Label>
            <Textarea id="message" name="message" rows={5} placeholder="Share goals, timeline, EMR, patient population, etc." />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about SiriusMed. We respect your privacy.</p>
            <Button type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Request Demo"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
