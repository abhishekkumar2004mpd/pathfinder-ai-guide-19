import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  MessageCircle,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      content: "support@careerguideai.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Call Us",
      content: "(555) 123-4567",
      description: "Mon-Fri: 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      content: "123 Career Street, Education City, EC 12345",
      description: "By appointment only"
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM EST",
      description: "Weekend support available"
    }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "1-on-1 Mentoring",
      description: "Personalized career guidance sessions with experienced advisors",
      duration: "60 minutes",
      price: "Starting at $99"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-secondary" />,
      title: "Group Workshops",
      description: "Interactive sessions on resume writing, interview skills, and career planning",
      duration: "90 minutes",
      price: "Starting at $49"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Career Assessment",
      description: "Comprehensive evaluation of your skills, interests, and career potential",
      duration: "45 minutes",
      price: "Starting at $79"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I schedule a consultation?",
      answer: "Most consultations can be scheduled within 2-3 business days. For urgent requests, we offer same-day availability."
    },
    {
      question: "What should I prepare for my first session?",
      answer: "Bring your resume, a list of career goals, and any specific questions or concerns you'd like to discuss."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! We offer both in-person and virtual consultations via video call to accommodate your preferences."
    },
    {
      question: "What's your cancellation policy?",
      answer: "You can cancel or reschedule your appointment up to 24 hours in advance without any charges."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to take the next step in your career journey? Our team of expert advisors is here to help. 
              Schedule a consultation or reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.content}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button size="lg" className="w-full">
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose from our range of professional career guidance services.
              </p>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Duration: {service.duration}</span>
                            <span className="font-semibold text-primary">{service.price}</span>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-4">
                            Schedule Session
                            <Calendar className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our services and consultation process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait – your future starts today. Schedule a consultation and take the first step 
            toward achieving your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
            >
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}