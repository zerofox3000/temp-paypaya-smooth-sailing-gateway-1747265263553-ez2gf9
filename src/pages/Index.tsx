import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, CreditCard, ShieldCheck, Zap } from "lucide-react";
import MerchantSignupForm from "@/components/MerchantSignupForm";
import { addReferralToURL } from "@/lib/urlService";

const Index = () => {
  const handleCopyReferralLink = () => {
    const referralUrl = addReferralToURL('friend');
    navigator.clipboard.writeText(referralUrl);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header - Updated with solid black background */}
      <header className="w-full bg-black sticky top-0 z-50 border-b border-[#FF13F0]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">PayPaya.ai</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-foreground/80 hover:text-accent transition-colors">Features</a>
            <a href="#benefits" className="text-foreground/80 hover:text-accent transition-colors">Benefits</a>
            <a href="#signup" className="text-foreground/80 hover:text-accent transition-colors">Sign Up</a>
          </nav>
          <div>
            <Button variant="ghost" asChild className="mr-2 hover:bg-accent/10 hover:text-accent">
              <Link to="/admin">Admin Portal</Link>
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              <a href="#signup">Apply Now</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Rest of the content with lower z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 neon-gradient opacity-10 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient">AI-Powered Payments</span> for Every Business
                </h1>
                <p className="text-xl mb-8 text-foreground/80">
                  PayPaya.ai is the AI-powered payment platform built for today's businesses — from low risk to high risk, without the usual friction. Enjoy fast settlements, ultra-low fees, and zero downtime.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-accent hover:bg-accent/90 text-xl py-6">
                    <a href="#signup" className="flex items-center gap-2">
                      Get Started Today <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" className="text-xl py-6 border-accent/20 hover:bg-accent/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="glass-dark p-8 rounded-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard className="w-8 h-8 text-accent" />
                    <span className="text-2xl font-bold">PayPaya.ai</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" />
                      <p>Smart AI routing for optimal processing</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" />
                      <p>Instant settlements, even on weekends</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" />
                      <p>Support for both low and high-risk merchants</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" />
                      <p>No account freezes or surprise shutdowns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">The Future of Payments Has Arrived</h2>
            <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-12">
              AI-Powered. Always On. Built for Every Business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="p-4 bg-accent/20 inline-block rounded-lg mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Settlements, Zero Downtime</h3>
                <p className="text-foreground/80">
                  No more waiting days to access your funds. With PayPaya.ai, you get lightning-fast settlements and uninterrupted uptime — even on weekends or holidays.
                </p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="p-4 bg-accent/20 inline-block rounded-lg mb-4">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart AI Routing</h3>
                <p className="text-foreground/80">
                  Our proprietary AI matches each transaction with the most effective rail and processor, optimizing approval rates and reducing costs in real time.
                </p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="p-4 bg-accent/20 inline-block rounded-lg mb-4">
                  <CreditCard className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">High-Risk Friendly</h3>
                <p className="text-foreground/80">
                  CBD? Supplements? Adult? No problem. We specialize in supporting high-risk and low-risk merchants alike — with no surprise shutdowns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#FF13F0]/10 to-purple-900/10 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">Why Choose PayPaya.ai</h2>
            <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-12">
              Welcome to PayPaya.ai, the intelligent payment platform designed to eliminate the pain points of traditional processors like Stripe and PayPal.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Stop Waiting. Stop Worrying.</h3>
                  <p className="text-foreground/80 mb-4">
                    Whether you're a high-growth startup or a high-risk merchant, we deliver instant settlements, no account freezes, 
                    and the lowest fees in the industry — all backed by adaptive AI routing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      <span>Find the best rail for every transaction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      <span>Secure the best rates automatically</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      <span>Maximize approvals with intelligent routing</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 order-1 md:order-2 glass-dark p-6 rounded-lg">
                  <div className="h-48 bg-black/30 rounded flex items-center justify-center">
                    <span className="text-foreground/60">Merchant Dashboard Preview</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 glass-dark p-6 rounded-lg">
                  <div className="h-48 bg-black/30 rounded flex items-center justify-center">
                    <span className="text-foreground/60">Payment Analytics Preview</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Start Scaling with Confidence</h3>
                  <p className="text-foreground/80 mb-4">
                    Our intelligent engine dynamically routes every transaction to the most optimal payment rail, 
                    ensuring the best availability, best rates, and maximum approval every time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      <span>No holds or freezes on your funds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      <span>Ultra-low fees compared to traditional processors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      <span>No shutdowns. Just results.</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="outline" onClick={handleCopyReferralLink} className="border-accent/20 hover:bg-accent/10">
                      Share Referral Link
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Form Section */}
        <section id="signup" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get Started Today</h2>
                <p className="text-xl text-foreground/80">
                  Whether you're scaling an e-commerce brand or running a high-risk enterprise, PayPaya.ai keeps your payments flowing — reliably, efficiently, and affordably.
                </p>
              </div>
              
              <MerchantSignupForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gradient">PayPaya.ai</h3>
                <p className="text-foreground/70">
                  The intelligent payment platform built for today's businesses. Fast, reliable, and secure.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Documentation</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-accent">API Reference</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/70 hover:text-accent">About</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Blog</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Terms of Service</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Privacy Policy</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-accent">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-foreground/50">
              <p>© {new Date().getFullYear()} PayPaya.ai. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
