import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp,
  Briefcase,
  GraduationCap,
  Brain,
  Clock,
  Eye
} from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "The Future of Remote Work: Career Opportunities in 2024",
    excerpt: "Explore how remote work is reshaping career landscapes and discover the skills you need to thrive in the digital workspace.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "2.3k views",
    category: "Career Trends",
    image: "hero-gradient"
  };

  const blogPosts = [
    {
      title: "Top 10 In-Demand Skills for Tech Careers in 2024",
      excerpt: "Discover the technical and soft skills that employers are actively seeking in today's competitive tech job market.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      views: "1.8k views",
      category: "Tech Careers",
      tags: ["Programming", "Skills", "Tech Industry"]
    },
    {
      title: "How to Ace Your College Interview: A Complete Guide",
      excerpt: "Comprehensive tips and strategies to help you prepare for and excel in college admission interviews.",
      author: "Lisa Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      views: "1.5k views",
      category: "Education",
      tags: ["College", "Interviews", "Admissions"]
    },
    {
      title: "Transitioning Careers: A Step-by-Step Roadmap",
      excerpt: "Learn how to successfully transition to a new career field with practical strategies and actionable advice.",
      author: "Dr. Sarah Johnson",
      date: "March 8, 2024",
      readTime: "10 min read",
      views: "2.1k views",
      category: "Career Change",
      tags: ["Career Change", "Professional Development", "Strategy"]
    },
    {
      title: "The Rise of AI in Education: Opportunities and Challenges",
      excerpt: "Explore how artificial intelligence is transforming education and what it means for students and educators.",
      author: "Michael Chen",
      date: "March 5, 2024",
      readTime: "9 min read",
      views: "1.9k views",
      category: "EdTech",
      tags: ["AI", "Education", "Technology"]
    },
    {
      title: "Building a Strong LinkedIn Profile for Students",
      excerpt: "Essential tips for creating a compelling LinkedIn profile that attracts recruiters and networking opportunities.",
      author: "Lisa Rodriguez",
      date: "March 3, 2024",
      readTime: "5 min read",
      views: "1.4k views",
      category: "Professional Branding",
      tags: ["LinkedIn", "Networking", "Personal Brand"]
    },
    {
      title: "Scholarship Success: How to Write Winning Essays",
      excerpt: "Proven strategies and techniques for crafting scholarship essays that stand out and secure funding.",
      author: "Dr. Sarah Johnson",
      date: "March 1, 2024",
      readTime: "8 min read",
      views: "1.7k views",
      category: "Scholarships",
      tags: ["Scholarships", "Essay Writing", "Financial Aid"]
    }
  ];

  const categories = [
    { name: "Career Trends", count: 15, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Tech Careers", count: 12, icon: <Brain className="w-4 h-4" /> },
    { name: "Education", count: 18, icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Professional Development", count: 10, icon: <Briefcase className="w-4 h-4" /> },
    { name: "Career Change", count: 8, icon: <ArrowRight className="w-4 h-4" /> },
    { name: "Student Life", count: 14, icon: <User className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career & Education Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest career trends, educational insights, and professional development tips 
              from our team of experts and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <Card className="hover-lift overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hero-gradient h-64 lg:h-auto flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg opacity-90">Featured Article</p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {featuredPost.views}
                  </div>
                </div>
                <Button size="lg">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        Read More
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer group">
                      <div className="flex items-center space-x-2">
                        <div className="text-muted-foreground group-hover:text-primary">
                          {category.icon}
                        </div>
                        <span className="text-sm group-hover:text-primary">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest career insights and educational tips delivered to your inbox.
                  </p>
                  <Button size="sm" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular This Week</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <h4 className="text-sm font-medium leading-tight mb-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want Personalized Career Advice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            While our blog provides valuable insights, get customized guidance tailored to your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/ai-tools">
                Try AI Tools
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
              asChild
            >
              <Link to="/contact">Contact Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}