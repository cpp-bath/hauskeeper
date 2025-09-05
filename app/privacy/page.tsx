import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/hauskeeper-logo.png" alt="Hauskeeper Logo" width={40} height={40} className="rounded-full" />
              <span className="text-xl font-bold text-foreground">Hauskeeper</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Effective Date: January 1, 2025</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Haus Keeper ("we," "our," or "us") provides an AI-powered guest support platform that helps property
                  managers deliver instant answers to guest questions. We value your privacy and are committed to
                  protecting your personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">From Guests:</h3>
                  <p className="text-muted-foreground">
                    We may collect information you provide when using the chat service (e.g., questions you ask).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">From Managers:</h3>
                  <p className="text-muted-foreground">Property information, FAQs, and uploaded content.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Automatically:</h3>
                  <p className="text-muted-foreground">
                    Technical details such as browser type, device information, and usage patterns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To provide instant guest support.</li>
                  <li>• To improve the chatbot and user experience.</li>
                  <li>• To ensure reliable and secure service.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Sharing of Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We do not sell or rent personal information. Information may be shared only:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• With service providers who support our platform.</li>
                  <li>• If required by law or legal process.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Guest Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Guests may request deletion of their information by contacting us.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use reasonable safeguards to protect data, but no method is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:support@hauskeeper.io" className="hover:text-primary/80 transition-colors">
                    support@hauskeeper.io
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/hauskeeper-logo.png" alt="Hauskeeper Logo" width={32} height={32} className="rounded-full" />
              <span className="text-lg font-semibold text-foreground">Hauskeeper</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
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
