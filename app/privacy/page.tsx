"use client"

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Info, Mail, MapPin, ExternalLink, Scale } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "collect", title: "1. What Information Do We Collect?", icon: Eye },
  { id: "process", title: "2. How Do We Process Your Information?", icon: CpuIcon }, // Need to import Cpu or replace
  { id: "share", title: "3. When and With Whom Do We Share Your Personal Information?", icon: ShareIcon },
  { id: "keep", title: "4. How Long Do We Keep Your Information?", icon: ClockIcon },
  { id: "safe", title: "5. How Do We Keep Your Information Safe?", icon: ShieldIcon },
  { id: "rights", title: "6. What Are Your Privacy Rights?", icon: Scale },
  { id: "dnt", title: "7. Controls for Do-Not-Track Features", icon: SettingsIcon },
  { id: "updates", title: "8. Do We Make Updates to This Notice?", icon: RefreshIcon },
  { id: "contact", title: "9. How Can You Contact Us About This Notice?", icon: Mail },
  { id: "review", title: "10. How Can You Review, Update, or Delete the Data?", icon: FileText },
];

function CpuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function RefreshIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col pt-6 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg shadow-primary/5"
            >
              <Shield className="w-4 h-4" />
              LEGAL COMPLIANCE
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
            >
              Privacy <span className="text-primary italic text-red-glow">Policy</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                LAST UPDATED: JANUARY 29, 2026
              </span>
              <span className="hidden md:block opacity-30">|</span>
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-primary" />
                BHATT SQUARE PVT. LTD.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 industrial-border bg-card">
                  <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-6 flex items-center">
                    <div className="w-2 h-2 bg-primary mr-2" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-all underline-offset-4 hover:underline"
                      >
                        <section.icon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="p-6 industrial-border bg-primary/5 border-primary/20">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-3">Questions?</h4>
                  <p className="text-xs text-muted-foreground font-semibold mb-4 leading-relaxed">
                    If you have any questions about this Privacy Notice, please reach out to our legal team.
                  </p>
                  <a href="mailto:info@bhattsquare.com" className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest hover:gap-3 transition-all">
                    Contact Us <ArrowRightIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Policy Body */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Introduction */}
              <div className="prose prose-invert max-w-none">
                <div className="p-8 industrial-border bg-card mb-12 relative overflow-hidden group">
                  <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 border border-primary/20 text-primary">
                        <Info className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-black uppercase tracking-tighter m-0">About This Notice</h2>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      This Privacy Notice for <strong className="text-foreground">Bhatt Square Pvt. Ltd.</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services").
                    </p>
                    <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20">
                      <h4 className="text-red-500 text-xs font-black uppercase tracking-[0.2em] mb-2">Important Notice</h4>
                      <p className="text-xs text-muted-foreground font-semibold m-0">
                        Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary Section */}
                <div id="summary" className="space-y-6 mb-16">
                  <h2 className="text-3xl font-black uppercase tracking-tighter border-b border-border pb-4 flex items-center gap-3">
                    <span className="text-primary italic">Summary</span> of Key Points
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { q: "What personal information do we process?", a: "Depending on how you interact with us and the Services, the choices you make, and the products and features you use." },
                      { q: "Do we process any sensitive personal information?", a: "We do not process sensitive personal information." },
                      { q: "Do we collect any information from third parties?", a: "We may collect information from public databases, marketing partners, and other outside sources." },
                      { q: "How do we process your information?", a: "To provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law." }
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                        <h4 className="text-xs font-black uppercase tracking-wider mb-2 text-primary">{item.q}</h4>
                        <p className="text-[11px] text-muted-foreground font-medium m-0 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-20">
                  
                  {/* Section 1 */}
                  <div id="collect" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">01.</span> What Information Do We Collect?
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p className="text-foreground font-bold italic mb-4">In Short: We collect personal information that you provide to us.</p>
                      <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                      </p>
                      <div className="p-6 bg-card industrial-border">
                        <h4 className="text-xs font-black uppercase tracking-widest mb-4">Personal Information Provided by You</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {["Names", "Phone numbers", "Email addresses"].map(item => (
                            <li key={item} className="flex items-center gap-2 text-xs font-bold text-foreground">
                              <div className="w-1.5 h-1.5 bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        <strong className="text-foreground">Sensitive Information:</strong> We do not process sensitive information.
                      </p>
                      <div className="p-4 bg-primary/5 border-l-2 border-primary italic text-xs font-semibold">
                        Important: All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div id="process" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">02.</span> How Do We Process Your Information?
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p className="text-foreground font-bold italic">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-wider text-foreground mb-2">Administrative Communications</h4>
                          <p>To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-wider text-foreground mb-2">Security & Fraud Prevention</h4>
                          <p>To protect our Services and users. We may process your information as part of our efforts to keep our Services safe and secure, including monitoring and preventing fraud.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div id="share" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">03.</span> Sharing Your Personal Information
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p className="text-foreground font-bold italic">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
                      <div className="p-6 bg-card industrial-border">
                        <h4 className="text-sm font-black uppercase tracking-wider text-foreground mb-3">Business Transfers</h4>
                        <p>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                      </div>
                      <p>Other situations where we may share your information include:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>When required by law or legal process</li>
                        <li>To protect our rights, privacy, safety, or property</li>
                        <li>With your consent or at your direction</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 & 5 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div id="keep" className="scroll-mt-24 p-6 industrial-border bg-card">
                      <h4 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-primary" />
                        04. How Long Do We Keep Your Information?
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law. When we have no ongoing legitimate business need, we will either delete or anonymize such information.
                      </p>
                    </div>
                    <div id="safe" className="scroll-mt-24 p-6 industrial-border bg-card">
                      <h4 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                        <ShieldIcon className="w-5 h-5 text-primary" />
                        05. How Do We Keep Your Information Safe?
                      </h4>
                      <div className="space-y-4">
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed m-0">
                          We aim to protect your personal information through a system of organizational and technical security measures. However, despite our safeguards, no electronic transmission over the Internet can be guaranteed to be 100% secure.
                        </p>
                        <div className="p-3 bg-red-500/5 border border-red-500/10 text-[10px] text-muted-foreground italic">
                           Security Disclaimer: We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security.
                        </div>
                      </div>
                    </div>
                  </div>

                   {/* Section 6 */}
                   <div id="rights" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">06.</span> What Are Your Privacy Rights?
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p className="text-foreground font-bold italic">In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
                      <p>Depending on your location, you may have the following rights:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Right to Access: Request copies", "Right to Rectification: Correct data", 
                          "Right to Erasure: Request deletion", "Right to Restrict Processing",
                          "Right to Data Portability", "Right to Object"
                        ].map(right => (
                          <div key={right} className="flex items-center gap-3 p-3 bg-muted/50 border border-border text-[11px] font-bold uppercase tracking-wider">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            {right}
                          </div>
                        ))}
                      </div>
                      <p className="pt-4">
                        <strong className="text-foreground">Withdrawing Your Consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 - Do Not Track */}
                  <div id="dnt" className="scroll-mt-24 industrial-border p-8 bg-card/40">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                      <SettingsIcon className="w-5 h-5 text-primary" />
                      07. Controls for Do-Not-Track Features
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed m-0">
                      Most web browsers include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.
                    </p>
                  </div>

                  {/* Section 8 - Updates */}
                  <div id="updates" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">08.</span> Do We Make Updates to This Notice?
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p className="text-foreground font-bold italic">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                      <p>
                        We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 - Contact */}
                  <div id="contact" className="scroll-mt-24 p-10 industrial-border bg-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Mail className="w-24 h-24" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">
                      09. <span className="text-primary">Contact</span> Us
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Corporate Office</h5>
                            <p className="text-sm font-bold m-0 leading-relaxed uppercase">
                              Bhatt Square Pvt. Ltd.<br />
                              1 Vishesh Khand Rd<br />
                              Lucknow, Uttar Pradesh 226010<br />
                              India
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Email Inquiries</h5>
                            <p className="text-sm font-bold m-0 text-primary uppercase tracking-widest underline decoration-2 underline-offset-4">
                              info@bhattsquare.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 10 - Review/Update/Delete */}
                  <div id="review" className="scroll-mt-24">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">10.</span> Review, Update, or Delete Data
                    </h3>
                    <div className="space-y-6 text-muted-foreground font-medium text-sm leading-relaxed">
                      <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4">
                        {["Review", "Update", "Delete"].map(action => (
                          <div key={action} className="p-4 bg-muted/30 border border-border text-center">
                            <h5 className="text-xs font-black uppercase tracking-widest text-foreground">{action}</h5>
                          </div>
                        ))}
                      </div>
                      <p>
                        To request to review, update, or delete your personal information, please submit a data subject access request to <strong className="text-primary">info@bhattsquare.com</strong>.
                      </p>
                    </div>
                  </div>


                  {/* Footer content */}
                  <div className="pt-10 border-t border-border flex flex-col items-center text-center gap-4">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
                      &copy; 2026 BHATT SQUARE PVT. LTD. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-4">
                      <Link href="/terms" className="text-[10px] font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Terms & Conditions</Link>
                      <span className="opacity-20">|</span>
                      <Link href="/privacy" className="text-[10px] font-black text-primary uppercase tracking-widest">Privacy Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Have Questions About <span className="text-primary">Data Security?</span>
            </h2>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Our engineering team is committed to implementing the highest standards of data protection and zero-trust security protocols.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="/contact" className="px-6 py-3 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all flex items-center gap-2">
                TALK TO SECURITY TEAM <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
