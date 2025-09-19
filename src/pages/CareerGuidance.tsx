import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Briefcase, 
  Palette, 
  Heart, 
  Building, 
  Wrench,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Clock
} from "lucide-react";

export default function CareerGuidance() {
  const careerCategories = [
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "STEM",
      description: "Science, Technology, Engineering, and Mathematics",
      jobCount: "120+ careers",
      avgSalary: "$75,000 - $150,000",
      growth: "High Growth",
      color: "bg-primary/10",
      careers: ["Software Engineer", "Data Scientist", "Biomedical Engineer", "Research Scientist"]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      title: "Business",
      description: "Management, Finance, Marketing, and Entrepreneurship",
      jobCount: "80+ careers",
      avgSalary: "$50,000 - $200,000",
      growth: "Stable Growth",
      color: "bg-secondary/10",
      careers: ["Marketing Manager", "Financial Analyst", "Project Manager", "Consultant"]
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creative Arts",
      description: "Design, Media, Entertainment, and Creative Industries",
      jobCount: "60+ careers",
      avgSalary: "$40,000 - $120,000",
      growth: "Growing",
      color: "bg-primary/10",
      careers: ["UX Designer", "Content Creator", "Art Director", "Film Producer"]
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Healthcare",
      description: "Medical, Nursing, Therapy, and Health Services",
      jobCount: "90+ careers",
      avgSalary: "$60,000 - $300,000",
      growth: "Very High Growth",
      color: "bg-secondary/10",
      careers: ["Nurse Practitioner", "Physical Therapist", "Medical Doctor", "Healthcare Administrator"]
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Education",
      description: "Teaching, Training, and Educational Leadership",
      jobCount: "40+ careers",
      avgSalary: "$45,000 - $90,000",
      growth: "Stable",
      color: "bg-primary/10",
      careers: ["Teacher", "School Principal", "Corporate Trainer", "Education Coordinator"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-secondary" />,
      title: "Skilled Trades",
      description: "Technical, Manual, and Specialized Crafts",
      jobCount: "50+ careers",
      avgSalary: "$45,000 - $100,000",
      growth: "High Demand",
      color: "bg-secondary/10",
      careers: ["Electrician", "Plumber", "HVAC Technician", "Automotive Mechanic"]
    }
  ];

  const featuredCareers = [
    {
      title: "Software Engineer",
      category: "STEM",
      salary: "$80,000 - $160,000",
      growth: "22% growth",
      description: "Design and develop software applications, systems, and platforms.",
      skills: ["Programming", "Problem Solving", "System Design", "Testing"],
      education: "Bachelor's in Computer Science or related field"
    },
    {
      title: "Digital Marketing Manager",
      category: "Business",
      salary: "$65,000 - $130,000",
      growth: "10% growth",
      description: "Plan and execute digital marketing campaigns across various channels.",
      skills: ["Analytics", "Content Strategy", "SEO/SEM", "Social Media"],
      education: "Bachelor's in Marketing or related field"
    },
    {
      title: "Registered Nurse",
      category: "Healthcare",
      salary: "$70,000 - $110,000",
      growth: "7% growth",
      description: "Provide patient care and support in various healthcare settings.",
      skills: ["Patient Care", "Medical Knowledge", "Communication", "Critical Thinking"],
      education: "Bachelor's or Associate's in Nursing + License"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Guidance & Pathways
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore diverse career opportunities across industries. Get detailed insights into job requirements, 
              salary ranges, and growth prospects to make informed career decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Career Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover opportunities across major industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerCategories.map((category, index) => (
              <Card key={index} className="hover-lift cursor-pointer group">
                <CardHeader>
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Opportunities:</span>
                    <Badge variant="secondary">{category.jobCount}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Avg. Salary:</span>
                    <span className="font-medium">{category.avgSalary}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Growth:</span>
                    <Badge variant="outline" className="text-success border-success">
                      {category.growth}
                    </Badge>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Popular careers:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.careers.slice(0, 2).map((career) => (
                        <Badge key={career} variant="outline" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-xs">
                        +{category.careers.length - 2} more
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Careers */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Career Profiles
            </h2>
            <p className="text-xl text-muted-foreground">
              Detailed insights into trending and high-demand careers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCareers.map((career, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{career.category}</Badge>
                    <div className="flex items-center text-success text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {career.growth}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                  <div className="flex items-center text-primary font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {career.salary}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {career.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Education:</h4>
                    <p className="text-muted-foreground text-xs">{career.education}</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Full Profile
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/ai-tools">
                Get Personalized Career Recommendations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Career Planning Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career Planning Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Tools and resources to help you plan your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Career Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Discover careers that match your personality and interests
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Industry Trends</h3>
                <p className="text-muted-foreground text-sm">
                  Stay updated with latest job market trends and forecasts
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Salary Insights</h3>
                <p className="text-muted-foreground text-sm">
                  Compare salaries across different roles and locations
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Career Timeline</h3>
                <p className="text-muted-foreground text-sm">
                  Plan your career progression with milestone tracking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Use our AI-powered tools to get personalized career recommendations based on your skills, interests, and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/ai-tools">
                Start Career Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}