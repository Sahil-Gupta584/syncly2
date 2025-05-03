"use client";
import { sendContactEmail } from "@/actions";
import {
  addToast,
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormProps {
  isContactPage?: boolean;
}

export default function ContactForm({
  isContactPage = false,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      addToast({
        title: "Error",
        description: "Please fill in all required fields",
        color: "danger",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await sendContactEmail(formData);
      console.log("res", res);

      if (res.ok) {
        addToast({
          title: "Success!",
          description:
            "Thanks for your interest in Syncly. We'll be in touch soon!",
        });

        setFormData({
          name: "",
          email: "",
          channel: "",
          message: "",
        });
        return;
      }
      addToast({
        title: "Failed to send email",
        description: "Please try again later",
        color: "danger",
      });
    } catch (error) {
      addToast({
        title: "Something went wrong",
        description: "Please try again later",
        color: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isContactPage) {
    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="name">Full Name</label>
          <Input
            variant="bordered"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-primary focus:ring-primary "
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email Address</label>
          <Input
            variant="bordered"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            classNames={{
              inputWrapper: ["data-[hover=true]:border-black"],
            }}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="channel">YouTube Channel (optional)</label>
          <Input
            variant="bordered"
            id="channel"
            name="channel"
            value={formData.channel}
            onChange={handleChange}
            className="border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message">Message (optional)</label>
          <Textarea
            variant="bordered"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="border-gray-300 focus:border-primary focus:ring-primary resize-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Send Message"}
        </Button>
        <p className="text-sm text-gray-500 text-center mt-4">
          We'll get back to you within 24 hours
        </p>
      </form>
    );
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to streamline your content workflow?
            </h2>
            <p className="mt-4 text-xl text-primary-100">
              Join thousands of content creators who are saving time and
              improving collaboration with Syncly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a href="/contact">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-primary-50 px-8 py-6 h-auto text-lg">
                  Start Free Trial
                </Button>
              </a>
              <a href="/contact">
                <Button
                  variant="bordered"
                  className="w-full sm:w-auto border-white text-white hover:bg-primary-700 px-8 py-6 h-auto text-lg"
                >
                  Request Demo
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get Started Today
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="name">Full Name</label>
                      <Input
                        variant="bordered"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email">Email Address</label>
                      <Input
                        variant="bordered"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="channel">
                        YouTube Channel (optional)
                      </label>
                      <Input
                        variant="bordered"
                        id="channel"
                        name="channel"
                        value={formData.channel}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Get Started"}
                    </Button>
                  </div>
                </form>
                <p className="mt-4 text-sm text-gray-500 text-center">
                  No credit card required for free trial
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
