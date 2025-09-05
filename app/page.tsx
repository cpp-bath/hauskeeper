import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Smartphone,
  Clock,
  Shield,
  Download,
  Mail,
  Globe,
  Sparkles,
  Users,
  Building,
  DollarSign,
  QrCode,
  Camera,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="animate-pulse-glow rounded-full">
                <Image
                  src="/hauskeeper-logo.png"
                  alt="Hauskeeper Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold text-foreground">Hauskeeper</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#for-guests"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                For Guests
              </a>
              <a
                href="#for-hosts"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                For Hosts
              </a>
              <a
                href="#earn-money"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Earn Money
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                FAQ
              </a>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Privacy
              </Link>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/15 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium animate-bounce-in glass-effect">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Property Communication Platform
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-slide-in-up">
              The Complete <span className="text-gradient">AI Communication</span> Ecosystem for Properties
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Whether you're a guest seeking instant answers, a host managing properties, or looking to earn money as an
              AI trainer - Hauskeeper connects everyone in the property ecosystem.
            </p>

            <div
              className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-auto py-6"
              >
                <QrCode className="w-8 h-8 mb-2" />
                <span className="text-lg font-semibold">I'm a Guest</span>
                <span className="text-sm opacity-90">Get instant answers</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg glass-effect bg-transparent flex flex-col h-auto py-6 border-primary text-primary hover:bg-primary group"
              >
                <Building className="w-8 h-8 mb-2 group-hover:text-white" />
                <span className="text-lg font-semibold group-hover:text-white">I'm a Host</span>
                <span className="text-sm opacity-90 group-hover:text-white group-hover:opacity-100">
                  List & manage properties
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg glass-effect bg-transparent flex flex-col h-auto py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <DollarSign className="w-8 h-8 mb-2" />
                <span className="text-lg font-semibold">I Want to Earn</span>
                <span className="text-sm opacity-90">Train AI & get paid</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="for-guests"
        className="relative py-20 bg-gradient-to-br from-muted/10 via-background to-muted/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 glass-effect">
              <MessageCircle className="w-4 h-4 mr-2" />
              For Guests
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Get Instant Answers, Your Way
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Access property information instantly through multiple convenient methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-105 group glass-effect">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        Download Our App
                      </CardTitle>
                      <CardDescription>Get the full Hauskeeper experience with our mobile app</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" /> Scan QR codes directly from the app
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" /> Save favorite properties
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" /> Offline access to property info
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download App
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-105 group glass-effect">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Camera className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-accent transition-colors duration-300">
                        Use Your Phone Camera
                      </CardTitle>
                      <CardDescription>No app needed - scan QR codes with your phone's camera</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-accent" /> Works with any QR scanner
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-accent" /> Instant browser access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-accent" /> No downloads required
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center animate-pulse-glow">
                  <QrCode className="w-32 h-32 text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              <p className="mt-6 text-lg font-medium text-foreground">Scan & Get Instant Answers!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="for-hosts" className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div
          className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 glass-effect">
              <Building className="w-4 h-4 mr-2" />
              For Property Hosts
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Become a Creator & Transform Your Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              List your properties, train AI assistants, and provide exceptional guest experiences automatically
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">List Your Properties</h3>
                  <p className="text-muted-foreground">
                    Add your rental properties to the Hauskeeper platform and reach more guests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Train Your AI Assistant</h3>
                  <p className="text-muted-foreground">
                    Upload property information, rules, and FAQs to create a personalized AI chatbot.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Guest Support</h3>
                  <p className="text-muted-foreground">
                    Provide instant answers to guest questions without lifting a finger.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Smart Escalation</h3>
                  <p className="text-muted-foreground">
                    Complex queries are automatically forwarded to you for personal attention.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Building className="w-5 h-5 mr-2" />
                Become a Creator Host
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-effect">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Host Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Reduce guest inquiries by 80%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Improve guest satisfaction scores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Save hours of manual support time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Generate QR codes for easy access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Analytics and guest insights</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="earn-money"
        className="relative py-20 bg-gradient-to-br from-accent/5 via-background to-accent/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh-pattern"></div>
        <div
          className="absolute top-20 right-20 w-28 h-28 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 glass-effect bg-accent/10 text-accent border-accent/20">
              <DollarSign className="w-4 h-4 mr-2" />
              Earn Money as a Trainer
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Turn Your Expertise Into Income
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Help property owners train their AI assistants and earn money for your expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-105 group glass-effect">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="group-hover:text-accent transition-colors duration-300">
                  Find Training Opportunities
                </CardTitle>
                <CardDescription>Browse available properties that need AI training assistance</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-105 group glass-effect">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="group-hover:text-accent transition-colors duration-300">
                  Train AI Assistants
                </CardTitle>
                <CardDescription>Help property owners create comprehensive AI knowledge bases</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-105 group glass-effect">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="group-hover:text-accent transition-colors duration-300">Get Paid</CardTitle>
                <CardDescription>Earn competitive rates for successful AI training projects</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10 hover:shadow-2xl transition-all duration-500 hover:scale-102">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Earning?</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-accent" />
                        Flexible work schedule
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-accent" />
                        Work remotely from anywhere
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-accent" />
                        Competitive hourly rates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-accent" />
                        Build your AI training portfolio
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <DollarSign className="w-5 h-5 mr-2" />
                      Start Earning as a Trainer
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">Join our community of AI trainers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots-pattern"></div>
        <div
          className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-102 glass-effect">
              <CardHeader>
                <CardTitle className="text-left flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-primary" />
                  How do I use Hauskeeper as a guest?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can either download our app and scan QR codes directly, or use your phone's camera to scan QR
                  codes and access the chatbot instantly in your browser - no downloads required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-102 glass-effect">
              <CardHeader>
                <CardTitle className="text-left flex items-center">
                  <Building className="w-5 h-5 mr-3 text-primary" />
                  How do I become a host creator?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply click "Become a Creator Host" to sign up, list your properties, and start training your AI
                  assistant with property-specific information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-102 glass-effect">
              <CardHeader>
                <CardTitle className="text-left flex items-center">
                  <DollarSign className="w-5 h-5 mr-3 text-accent" />
                  How much can I earn as a trainer?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earnings vary based on project complexity and your expertise level. Join our trainer program to see
                  current rates and available opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-500 hover:scale-102 glass-effect">
              <CardHeader>
                <CardTitle className="text-left flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-primary" />
                  What if the chatbot doesn't answer my question?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The property manager will receive your request and provide additional support. Our smart escalation
                  system ensures you always get the help you need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern"></div>
        <div
          className="absolute bottom-10 left-10 w-28 h-28 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Contact Us</h2>
            <p className="text-lg text-muted-foreground text-pretty">For support inquiries, please contact us:</p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            <Card className="border-border text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group glass-effect">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-bounce" />
                <p className="text-lg font-medium text-foreground mb-2">Email Support</p>
                <a
                  href="mailto:support@hauskeeper.io"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 inline-block"
                >
                  support@hauskeeper.io
                </a>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group glass-effect">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-bounce" />
                <p className="text-lg font-medium text-foreground mb-2">Website</p>
                <a
                  href="https://www.hauskeeper.io"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 inline-block"
                >
                  www.hauskeeper.io
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground overflow-hidden animate-gradient">
        <div className="absolute top-10 left-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Join the Hauskeeper Ecosystem?</h2>
          <p className="text-xl mb-8 text-pretty max-w-2xl mx-auto opacity-90">
            Whether you're a guest, host, or trainer - there's a place for you in our AI-powered community.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Hauskeeper App
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="animate-pulse-glow rounded-full">
                <Image
                  src="/hauskeeper-logo.png"
                  alt="Hauskeeper Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <span className="text-lg font-semibold text-foreground">Hauskeeper</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <span>© 2025 Hauskeeper. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
