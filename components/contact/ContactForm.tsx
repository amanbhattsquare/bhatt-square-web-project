"use client"

import { useState } from 'react';

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
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', 
          company: '', inquiryType: 'General Inquiry', message: '', privacy: false
        });
        setErrors({});
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className={`w-full px-4 py-3 rounded-md border ${errors.firstName ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`} placeholder="John" />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                </div>
                    <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className={`w-full px-4 py-3 rounded-md border ${errors.lastName ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`} placeholder="Doe" />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`} placeholder="john@example.com" />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`} placeholder="+1 234 567 890" />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                    <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-sm font-medium">Inquiry Type</label>
                    <select id="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                        <option>General Inquiry</option>
                        <option>Project Request</option>
                        <option>Support</option>
                    </select>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none`} placeholder="Tell us about your project..."></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>
            <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" checked={formData.privacy} onChange={handleChange} className={`h-4 w-4 rounded ${errors.privacy ? 'border-red-500' : 'border-gray-300'} text-primary focus:ring-primary`} />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
                </label>
            </div>
            {errors.privacy && <p className="text-red-500 text-xs">{errors.privacy}</p>}
            <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-primary text-black font-medium rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && 
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    <p>Message sent successfully!</p>
                </div>
            }
            {submitStatus === 'error' && 
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    <p>Failed to send message. Please try again.</p>
                </div>
            }
        </form>
    </div>
  )
}