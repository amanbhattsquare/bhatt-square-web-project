"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, User, Mail, Phone, Link2, FileText, Briefcase, PlusCircle, CheckCircle2, Loader2, Info, ChevronDown, Upload, FileUp } from "lucide-react"

const commonPositions = [
    "Full Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Project Manager",
    "Quality Assurance (QA)",
    "Data Scientist",
    "Mobile App Developer (iOS/Android)",
    "Cloud Architect",
    "Human Resources (HR)",
    "Other (Describe in Cover Note)"
]

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
        setUploadedFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate professional application processing
    setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
    }, 2000)
  }

  return (
    <section className="py-15 bg-background overflow-hidden relative" id="apply-now">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Column: Requirements & Info */}
            <div className="lg:w-[35%]">
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest"
                    >
                        <PlusCircle className="w-3.5 h-3.5" /> Join the team
                    </motion.div>
                    
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight text-foreground">
                            Apply for <br />
                            <span className="text-primary italic">Excellence.</span>
                        </h2>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.15em] leading-relaxed max-w-sm">
                            Submit your credentials to join our elite engineering and design squads. We review applications within 48 hours.
                        </p>
                    </div>

                    <div className="space-y-4 pt-4">
                        {[
                            "Resume / CV (PDF Only)",
                            "LinkedIn or Portfolio Link",
                            "Brief Introduction Dossier",
                            "Available for Interview in 48h"
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 text-[10px] font-bold text-foreground/70 uppercase tracking-widest"
                            >
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                {item}
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-muted/30 border border-border/40 flex items-start gap-4">
                        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-[10px] font-medium text-muted-foreground uppercase leading-relaxed tracking-wider">
                            By submitting this application, you agree to our recruitment data processing standards for candidate evaluation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column: Clean Professional Form */}
            <div className="lg:w-[65%] w-full">
                <div className="bg-card/30 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-border/60 shadow-xl relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form 
                                key="form"
                                ref={formRef}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8" 
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInputField label="Full Name" icon={User} placeholder="Jane Doe" id="name" />
                                    <FormInputField label="Email Address" icon={Mail} placeholder="jane@example.com" type="email" id="email" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInputField label="Phone Number" icon={Phone} placeholder="+1 (555) 000-0000" type="tel" id="comms" />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 pl-1">
                                            Position
                                        </label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 z-10" />
                                            <select 
                                                required
                                                className="w-full bg-muted/20 border border-border/60 rounded-2xl py-4 pl-14 pr-12 text-[13px] font-bold uppercase appearance-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all outline-none cursor-pointer text-foreground"
                                            >
                                                {commonPositions.map((pos) => (
                                                    <option key={pos} value={pos} className="bg-card">{pos}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInputField label="Portfolio Link" icon={Link2} placeholder="https://behance.net/jane" type="url" id="identity" />
                                    
                                    {/* Resume Upload Field */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 pl-1">
                                            Resume / CV (PDF)
                                        </label>
                                        <div className="relative group/field">
                                            <input 
                                                type="file" 
                                                className="hidden" 
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                accept=".pdf"
                                                required
                                            />
                                            <button 
                                                type="button"
                                                onClick={() => fileInputRef.current?.click()}
                                                className={`w-full flex items-center justify-between gap-4 px-5 py-4 border rounded-2xl transition-all duration-300 bg-muted/20 border-border/60 hover:border-primary/40 hover:bg-muted/30 group/btn`}
                                            >
                                                <div className="flex items-center gap-4 truncate">
                                                    <FileUp className="w-4 h-4 text-muted-foreground/50 group-hover/btn:text-primary transition-colors shrink-0" />
                                                    <span className={`text-[12px] uppercase tracking-wider font-bold truncate ${uploadedFileName ? 'text-foreground' : 'text-muted-foreground/40'}`}>
                                                        {uploadedFileName || "Upload PDF Resume"}
                                                    </span>
                                                </div>
                                                <Upload className="w-4 h-4 text-muted-foreground/30 group-hover/btn:text-primary transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 pl-1">
                                        Cover Note
                                    </label>
                                    <textarea 
                                        rows={4}
                                        required
                                        placeholder="Briefly tell us why you want to join Bhatt Square..."
                                        className="w-full bg-muted/20 border border-border/60 rounded-[2rem] py-5 px-6 text-[13px] font-medium placeholder:text-muted-foreground/30 focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none text-foreground"
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3 px-1 group/consent">
                                    <div className="relative mt-1">
                                        <input type="checkbox" required className="peer w-4 h-4 opacity-0 absolute cursor-pointer z-10" />
                                        <div className="w-4 h-4 bg-muted border border-border/60 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all duration-300">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                    </div>
                                    <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider leading-relaxed pt-0.5 select-none transition-colors">
                                        I confirm that the information provided is accurate and I agree to the <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
                                    </p>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group mt-2 bg-primary text-white py-6 rounded-2xl text-sm font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            SUBMITTING... <Loader2 className="w-5 h-5 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            SUBMIT APPLICATION <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-16 text-center space-y-8"
                            >
                                <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary">
                                    <CheckCircle2 className="w-12 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">Application Received</h3>
                                    <p className="text-sm text-muted-foreground font-medium max-w-sm mx-auto">
                                        Thank you for applying. Our talent acquisition team will review your profile and get back to you shortly.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[10px] font-bold text-primary hover:text-primary/60 uppercase tracking-widest transition-all"
                                >
                                    Submit another application
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

function FormInputField({ label, icon: Icon, placeholder, type = "text", id }: any) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 pl-1">
                {label}
            </label>
            <div className="relative group/field">
                <Icon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 group-focus-within/field:text-primary transition-colors duration-300" />
                <input 
                    id={id}
                    required
                    type={type} 
                    placeholder={placeholder} 
                    className="w-full bg-muted/20 border border-border/60 rounded-2xl py-4 pl-14 pr-6 text-[13px] font-medium focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none text-foreground"
                />
            </div>
        </div>
    )
}


