import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Bot, 
  FileText, 
  TrendingUp, 
  BookOpen,
  MessageCircle,
  Upload,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  Award,
  Users
} from "lucide-react";

export default function AITools() {
  const aiTools = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Career Chatbot",
      description: "Get instant answers to your career and education questions with our intelligent chatbot.",
      features: ["24/7 availability", "Personalized responses", "Career path guidance", "Industry insights"],
      status: "Available",
      color: "bg-primary/10"
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Resume Analyzer & Builder",
      description: "Upload your resume for AI-powered analysis and get recommendations to improve it.",
      features: ["ATS optimization", "Skill highlighting", "Format suggestions", "Industry tailoring"],
      status: "Available",
      color: "bg-secondary/10"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Skill Gap Finder",
      description: "Compare your current skills with industry demands and get personalized improvement plans.",
      features: ["Skill assessment", "Gap analysis", "Learning roadmap", "Progress tracking"],
      status: "Available",
      color: "bg-primary/10"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Course Recommender",
      description: "Discover relevant courses, certifications, and programs based on your career goals.",
      features: ["Personalized suggestions", "Course comparison", "Certification tracking", "Career relevance"],
      status: "Available",
      color: "bg-secondary/10"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Intelligent Insights",
      description: "AI analyzes vast amounts of career data to provide personalized recommendations."
    },
    {
      icon: <Target className="w-6 h-6 text-secondary" />,
      title: "Personalized Guidance",
      description: "Tailored advice based on your unique skills, interests, and career aspirations."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Industry Accuracy",
      description: "Up-to-date information from real industry trends and requirements."
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Expert-Backed",
      description: "AI recommendations validated by career counselors and industry professionals."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Computer Science Student",
      content: "The AI career chatbot helped me discover opportunities in data science I never knew existed!",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Marketing Professional",
      content: "The resume analyzer gave me specific suggestions that helped me land my dream job.",
      rating: 5
    },
    {
      name: "Emily T.",
      role: "Recent Graduate",
      content: "The skill gap finder showed me exactly what certifications I needed for my target role.",
      rating: 5
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Career Guidance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Smart AI Tools for Your Career
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to get personalized career guidance, 
              optimize your resume, discover skill gaps, and find the perfect courses for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI-Powered Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive suite of intelligent tools for career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTools.map((tool, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <Badge variant="outline" className="text-success border-success">
                      {tool.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Key Features:</p>
                    <div className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-6" disabled>
                    Connect Supabase to Enable
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Backend Integration Notice */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ready to Enable AI Tools?</h3>
                <p className="text-muted-foreground mb-6">
                  To activate our AI-powered career guidance tools, you'll need to connect your project to Supabase. 
                  This enables secure data storage, user authentication, and AI functionality.
                </p>
                <div className="text-sm text-muted-foreground mb-6">
                  <strong>What you'll get with Supabase integration:</strong>
                  <ul className="mt-2 space-y-1 text-left max-w-md mx-auto">
                    <li>• Secure user accounts and authentication</li>
                    <li>• Personal dashboard for tracking progress</li>
                    <li>• AI-powered career recommendations</li>
                    <li>• Resume storage and analysis history</li>
                    <li>• Personalized learning paths</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our AI Tools?
            </h2>
            <p className="text-xl text-muted-foreground">
              Advantages of AI-powered career guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to get AI-powered career guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Sign up and complete your profile with your skills, interests, and career goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Use AI Tools</h3>
              <p className="text-muted-foreground">
                Interact with our AI chatbot, analyze your resume, and discover skill gaps.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-muted-foreground">
                Receive personalized career advice, course suggestions, and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from users who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
            Ready to Unlock Your Career Potential?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start using our AI-powered tools today and get personalized guidance for your career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">
                Schedule Demo
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
      </section>
    </div>
  );
}