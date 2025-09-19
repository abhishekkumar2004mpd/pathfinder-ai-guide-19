import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Brain, 
  BookOpen, 
  Users, 
  Target,
  Sparkles,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Home() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Guidance",
      description: "Get personalized career advice from our advanced AI tools and chatbots."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Education Resources",
      description: "Access comprehensive study materials, exam prep, and scholarship information."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Mentorship",
      description: "Connect with experienced professionals and career advisors for 1-on-1 guidance."
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Personalized Roadmaps",
      description: "Receive customized career paths based on your skills, interests, and goals."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "95%", label: "Success Rate" },
    { number: "500+", label: "Career Paths" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Find Your Path,{" "}
              <span className="text-secondary">Shape Your Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your personal mentor and smart career assistant. Get AI-powered guidance, 
              personalized roadmaps, and expert advice to unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold"
                asChild
              >
                <Link to="/ai-tools">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CareerGuide AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining human expertise with AI innovation to provide you with the best career guidance experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient border-0 hover-lift cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support for your career and educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift group cursor-pointer">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  Explore career paths across STEM, Business, Arts, Healthcare, and more with detailed insights and requirements.
                </p>
                <Link to="/career-guidance" className="text-primary font-medium flex items-center hover:text-primary-dark">
                  Explore Careers <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift group cursor-pointer">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Education Advice</h3>
                <p className="text-muted-foreground mb-4">
                  Get study tips, exam preparation resources, scholarship information, and guidance for higher studies.
                </p>
                <Link to="/education-advice" className="text-primary font-medium flex items-center hover:text-primary-dark">
                  Get Study Help <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift group cursor-pointer">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Use our AI chatbot, resume analyzer, skill gap finder, and course recommender for personalized insights.
                </p>
                <Link to="/ai-tools" className="text-primary font-medium flex items-center hover:text-primary-dark">
                  Try AI Tools <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have discovered their perfect career path with our AI-powered guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/ai-tools">
                <CheckCircle className="mr-2 w-5 h-5" />
                Start Free Assessment
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}