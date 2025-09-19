import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  BookOpen,
  Sparkles,
  ArrowRight
} from "lucide-react";
import advisorProfile from "@/assets/advisor-profile.jpg";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Personalized Guidance",
      description: "Every student is unique. We provide tailored advice that matches your individual goals, strengths, and aspirations."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
      title: "AI-Powered Innovation",
      description: "Combining cutting-edge AI technology with human expertise to deliver the most comprehensive career guidance."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Student-Centered Approach",
      description: "Your success is our mission. We're committed to supporting you every step of your educational and career journey."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Continuous Learning",
      description: "We stay updated with the latest industry trends and educational developments to provide you with current insights."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Students Guided Successfully" },
    { number: "95%", label: "Career Satisfaction Rate" },
    { number: "500+", label: "Career Paths Covered" },
    { number: "50+", label: "Industry Partnerships" }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About CareerGuide AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're dedicated to helping students discover their potential and navigate their educational and career journeys with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower students and young professionals with AI-driven career guidance and educational advice, 
                helping them make informed decisions that align with their passions, skills, and career aspirations.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Personalized Career Guidance</h3>
                  <p className="text-muted-foreground">Tailored advice for every individual's unique journey</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To become the world's most trusted platform for career and educational guidance, where every student 
                has access to intelligent, personalized support that helps them achieve their full potential.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Future-Ready Education</h3>
                  <p className="text-muted-foreground">Preparing students for tomorrow's opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={advisorProfile} 
                    alt="Dr. Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-primary font-medium mb-3">Lead Career Advisor</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Ph.D. in Educational Psychology with 15+ years of experience in career counseling and student development.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <p className="text-primary font-medium mb-3">AI Technology Lead</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Former Silicon Valley engineer specializing in AI and machine learning applications for education.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lisa Rodriguez</h3>
                <p className="text-primary font-medium mb-3">Education Specialist</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Master's in Education with expertise in curriculum design and student assessment strategies.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to student success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experienced team and AI-powered tools guide you toward your ideal career path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/ai-tools">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}