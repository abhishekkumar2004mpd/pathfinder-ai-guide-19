import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Target,
  FileText,
  Clock,
  Brain,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users
} from "lucide-react";

export default function EducationAdvice() {
  const studyTips = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Active Learning Techniques",
      description: "Use methods like summarizing, questioning, and teaching others to enhance retention.",
      category: "Study Methods"
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "Time Management",
      description: "Create schedules, set priorities, and use techniques like Pomodoro for better productivity.",
      category: "Productivity"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Goal Setting",
      description: "Set SMART goals for your academic journey and track your progress regularly.",
      category: "Planning"
    },
    {
      icon: <FileText className="w-6 h-6 text-secondary" />,
      title: "Note-Taking Strategies",
      description: "Master effective note-taking methods like Cornell notes and mind mapping.",
      category: "Study Skills"
    }
  ];

  const examPrep = [
    {
      title: "SAT/ACT Preparation",
      description: "Comprehensive guides and practice tests for college entrance exams",
      duration: "3-6 months",
      difficulty: "Intermediate",
      resources: "Practice tests, Study guides, Video tutorials"
    },
    {
      title: "AP Exam Success",
      description: "Subject-specific preparation for Advanced Placement examinations",
      duration: "Full academic year",
      difficulty: "Advanced",
      resources: "Past papers, Study schedules, Expert tips"
    },
    {
      title: "College Finals",
      description: "Strategies for excelling in university-level examinations",
      duration: "2-4 weeks",
      difficulty: "Intermediate",
      resources: "Study plans, Memory techniques, Stress management"
    },
    {
      title: "Professional Certifications",
      description: "Preparation for industry-recognized certification exams",
      duration: "Variable",
      difficulty: "Advanced",
      resources: "Mock exams, Study materials, Career guidance"
    }
  ];

  const scholarships = [
    {
      title: "Merit-Based Scholarships",
      amount: "Up to $50,000",
      criteria: "Academic excellence, GPA 3.5+",
      deadline: "Rolling applications",
      type: "Academic"
    },
    {
      title: "Need-Based Financial Aid",
      amount: "Variable",
      criteria: "Financial need demonstration",
      deadline: "FAFSA deadline",
      type: "Financial"
    },
    {
      title: "STEM Field Scholarships",
      amount: "$10,000 - $25,000",
      criteria: "STEM major, research projects",
      deadline: "March 15, 2024",
      type: "Field-Specific"
    },
    {
      title: "Community Service Awards",
      amount: "$5,000 - $15,000",
      criteria: "Volunteer hours, leadership",
      deadline: "April 30, 2024",
      type: "Service"
    }
  ];

  const higherStudies = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Master's Programs",
      description: "Advanced degree programs for career specialization and expertise development.",
      duration: "1-2 years",
      fields: ["Business (MBA)", "Engineering", "Healthcare", "Education"]
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "PhD & Research",
      description: "Doctoral programs for research careers and academic positions.",
      duration: "4-7 years",
      fields: ["Sciences", "Humanities", "Social Sciences", "Engineering"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Professional Certifications",
      description: "Industry-recognized credentials to enhance career prospects.",
      duration: "3-12 months",
      fields: ["IT Certifications", "Project Management", "Digital Marketing", "Finance"]
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Online Learning",
      description: "Flexible learning options through accredited online institutions.",
      duration: "Variable",
      fields: ["MOOCs", "Degree Programs", "Skill-based Courses", "Bootcamps"]
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education Advice & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive guidance for academic success, from study techniques and exam preparation 
              to scholarship opportunities and higher education pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Effective Study Tips
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven strategies to enhance your learning and academic performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyTips.map((tip, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {tip.icon}
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {tip.category}
                  </Badge>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exam Preparation Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive preparation materials for all major examinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examPrep.map((exam, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{exam.title}</span>
                    <Badge 
                      variant={exam.difficulty === "Advanced" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {exam.difficulty}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{exam.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{exam.duration}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Available Resources:</p>
                    <p className="text-sm">{exam.resources}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Access Resources
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Scholarship Opportunities
            </h2>
            <p className="text-xl text-muted-foreground">
              Find financial support for your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{scholarship.type}</Badge>
                    <div className="flex items-center text-success font-semibold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {scholarship.amount}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Eligibility Criteria:</p>
                    <p className="text-sm">{scholarship.criteria}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Application Deadline:</span>
                    <div className="flex items-center text-primary">
                      <Calendar className="w-4 h-4 mr-1" />
                      {scholarship.deadline}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/ai-tools">
                Find Personalized Scholarships
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Higher Studies Guidance */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Higher Studies Pathways
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore advanced education options to further your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {higherStudies.map((option, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Typical Duration:</span>
                    <Badge variant="secondary">{option.duration}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Popular Fields:</p>
                    <div className="flex flex-wrap gap-1">
                      {option.fields.map((field) => (
                        <Badge key={field} variant="outline" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Explore Programs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic Success Guidelines
            </h2>
            <p className="text-xl text-muted-foreground">
              Essential principles for educational achievement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Consistent Study Habits</h3>
                <p className="text-muted-foreground text-sm">
                  Develop regular study routines and stick to them for long-term success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Seek Support</h3>
                <p className="text-muted-foreground text-sm">
                  Don't hesitate to ask teachers, counselors, and peers for help when needed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Stay Motivated</h3>
                <p className="text-muted-foreground text-sm">
                  Keep your long-term goals in mind and celebrate small achievements.
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
            Need Personalized Education Guidance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get customized study plans, scholarship recommendations, and academic advice tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/ai-tools">
                Get Study Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">Consult an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}