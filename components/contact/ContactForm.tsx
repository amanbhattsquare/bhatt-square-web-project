"use client"

import { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'General Inquiry',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    let tempErrors: any = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required.";
    if (!formData.lastName) tempErrors.lastName = "Last name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.phone) tempErrors.phone = "Phone number is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    if (!formData.privacy) tempErrors.privacy = "You must agree to the privacy policy.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiryType: formData.inquiryType,
        message: formData.message,
      };

      try {
        await emailjs.send(
          'service_9jk7iye', // Yahan apna Service ID daalein
          'template_n9m2bpo', // Yahan naye contact template ki ID daalein
          templateParams,
          'BkZhcVM_mZX_W_8Qr' // Yahan apna Public Key daalein
        );

        setSubmitStatus('success');
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', 
          company: '', inquiryType: 'General Inquiry', message: '', privacy: false
        });
        setErrors({});
      } catch (error) {
        console.error("EmailJS error:", error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 bg-background border ${hasError ? 'border-red-500' : 'border-border/80'} text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300`;

  return (
    <div className="industrial-border bg-card overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      
      {/* Form Header */}
      <div className="relative z-10 px-8 py-5 border-b border-border/50 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60 mb-1">INQUIRY FORM</p>
          <h3 className="text-xl font-display font-black tracking-tighter uppercase">Start Your Project</h3>
        </div>
        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary">
          <Send className="w-5 h-5" />
        </div>
      </div>

      {/* Form Body */}
      <form className="relative z-10 p-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses(!!errors.firstName)} placeholder="John" />
            {errors.firstName && <p className="text-red-500 text-[10px] font-bold">{errors.firstName}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses(!!errors.lastName)} placeholder="Doe" />
            {errors.lastName && <p className="text-red-500 text-[10px] font-bold">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses(!!errors.email)} placeholder="john@example.com" />
            {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses(!!errors.phone)} placeholder="+91 234 567 890" />
            {errors.phone && <p className="text-red-500 text-[10px] font-bold">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="company" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Company Name</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClasses(false)} placeholder="Your Company" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="inquiryType" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Inquiry Type</label>
            <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} className={inputClasses(false)}>
              <option>General Inquiry</option>
              <option>Project Request</option>
              <option>Support</option>
              <option>Partnership</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputClasses(!!errors.message)} resize-none`} placeholder="Tell us about your project requirements..."></textarea>
          {errors.message && <p className="text-red-500 text-[10px] font-bold">{errors.message}</p>}
        </div>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="privacy" checked={formData.privacy} onChange={handleChange} className={`h-4 w-4 rounded border-2 ${errors.privacy ? 'border-red-500' : 'border-border'} text-primary focus:ring-primary accent-primary`} />
          <label htmlFor="privacy" className="text-[11px] text-muted-foreground font-medium">
            I agree to the <a href="/privacy" className="text-primary hover:underline font-bold">Privacy Policy</a>.
          </label>
        </div>
        {errors.privacy && <p className="text-red-500 text-[10px] font-bold">{errors.privacy}</p>}

        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground text-sm font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              SUBMITTING...
            </>
          ) : (
            <>
              INITIALIZE CONTACT
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {submitStatus === 'success' && 
          <div className="p-4 industrial-border bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold text-center">
            ✓ Message transmitted successfully. We'll respond within 24 hours.
          </div>
        }
        {submitStatus === 'error' && 
          <div className="p-4 industrial-border bg-red-500/5 border-red-500/20 text-red-600 dark:text-red-400 text-sm font-bold text-center">
            ✕ Transmission failed. Please try again.
          </div>
        }
      </form>
    </div>
  )
}