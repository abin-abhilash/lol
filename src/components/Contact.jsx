import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const quickSubjects = [
    "👋 Say Hello",
    "💼 Internship Opportunity",
    "🚀 Project Collaboration",
    "💡 Technical Inquiry"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectQuickSubject = (topic) => {
    setFormData({ ...formData, subject: topic });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmissionStatus({
        type: 'error',
        message: 'Please complete your name, email, and message.',
      });
      return;
    }

    // Construct genuine mailto URL with encoded parameters
    const subjectLine = formData.subject ? `Portfolio Inquiry: ${formData.subject}` : `Portfolio Inquiry from ${formData.name}`;
    const bodyText = `Hello Abin,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website`;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;

    // Feedback state
    setSubmissionStatus({
      type: 'success',
      message: 'Opening your default email client to send this message directly to Abin...',
    });

    // Trigger user mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmissionStatus(null);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F3F3EF]/60 relative border-t border-[#E5E5E2]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E2] text-xs font-semibold text-[#737373] uppercase tracking-wider mb-4 shadow-subtle">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
            {personalInfo.contact.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373]">
            {personalInfo.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Information (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-card space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>

              <div>
                <span className="text-xs font-mono font-medium text-[#737373] uppercase tracking-wider block">
                  Direct Inquiries
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#171717] tracking-tight mt-1 break-all">
                  {personalInfo.email}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#F3F3EF] hover:bg-[#EAEAE5] text-[#171717] text-xs font-semibold border border-[#E5E5E2] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#737373]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E2] text-xs text-[#737373] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#171717]">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Open for Collaboration</span>
              </div>
              <p className="leading-relaxed">
                Currently welcoming internship opportunities, project collaborations, and frontend developer discussions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl border border-[#E5E5E2] p-8 sm:p-10 shadow-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#171717] tracking-tight">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-[#737373] bg-[#F3F3EF] px-2.5 py-0.5 rounded-full border border-[#E5E5E2]">
                  Client-side Direct
                </span>
              </div>
              
              <p className="text-xs text-[#737373] mb-5">
                This form formats your message and triggers your email client directly to reach {personalInfo.email}.
              </p>

              {/* Quick Topic Badges */}
              <div className="mb-5 space-y-2">
                <span className="text-[11px] font-medium text-[#737373] block">
                  Quick Topics (click to prefill):
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickSubjects.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleSelectQuickSubject(topic)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        formData.subject === topic
                          ? 'bg-accent/10 border-accent text-accent font-semibold'
                          : 'bg-[#FAFAF8] border-[#E5E5E2] text-[#737373] hover:text-[#171717] hover:border-[#D4D4CE]'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-[#171717]">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2] text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-[#171717]">
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2] text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-[#171717]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Internship Inquiry / Project Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2] text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-[#171717]">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2] text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-y min-h-[110px]"
                  />
                </div>

                {/* Status alert if applicable */}
                {submissionStatus && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                      submissionStatus.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{submissionStatus.message}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#171717] hover:bg-black text-white font-semibold text-sm transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-accent" />
                  <span>Send via Email Client</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
