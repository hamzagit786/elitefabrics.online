import React, { useState } from 'react';
import { Mail, Clock, ShieldCheck, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF4EB] border border-[#EADBCA] text-[#9E472A] rounded-full text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Editorial &amp; Reader Inquiries</span>
          </div>
          <span className="text-xs text-[#7A7266] font-mono">
            Last Updated: September 28, 2026 • By Elite Fabrics Editorial Desk
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Contact Elite Fabrics
        </h1>
        <p className="text-sm sm:text-base text-[#5E574D] leading-relaxed max-w-2xl">
          Elite Fabrics is an independent, non-commercial educational resource dedicated to fiber science and weaving heritage. Have a question about fabric properties, textile testing standards, or suggestions for an article? We welcome reader feedback, academic inquiries, and factual correction notices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 bg-[#EAF5EC] text-[#2E7D32] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
                Thank You For Your Message
              </h2>
              <p className="text-sm text-[#5E584E] max-w-md mx-auto leading-relaxed">
                Your inquiry has been received by our editorial team. We typically respond within 24 to 48 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'General Question', message: '' });
                }}
                className="mt-4 px-4 py-2 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-xs font-semibold text-[#1C1C1C] hover:bg-[#F2EDE4]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-serif-heading font-bold text-[#1C1C1C] mb-2">
                Send an Editorial Message
              </h2>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Your Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none focus:border-[#1C1C1C]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Your Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none focus:border-[#1C1C1C]"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Topic of Inquiry
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none focus:border-[#1C1C1C]"
                >
                  <option value="General Question">General Question or Feedback</option>
                  <option value="Factual Correction">Factual Correction on an Article</option>
                  <option value="Tool Feedback">Calculator / Tool Suggestion</option>
                  <option value="Academic Collaboration">Academic or Educational Inquiry</option>
                  <option value="Privacy Concern">Privacy or Legal Concern</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please provide details about your inquiry, question, or article reference..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C] focus:bg-white focus:outline-none focus:border-[#1C1C1C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & EEAT Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-xl p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E472A] font-bold block">
              Official Contact Channels
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-[#4A453E]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9E472A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1C1C1C]">Editorial Desk:</strong>
                  <a href="mailto:editorial@elitefabrics.online" className="text-[#9E472A] hover:underline font-mono">
                    editorial@elitefabrics.online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#9E472A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1C1C1C]">General &amp; Legal:</strong>
                  <a href="mailto:contact@elitefabrics.online" className="text-[#9E472A] hover:underline font-mono">
                    contact@elitefabrics.online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9E472A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1C1C1C]">Response Time:</strong>
                  <span>Within 24 to 48 business hours (Monday – Friday)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Messaging */}
          <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#1C1C1C] font-semibold text-sm">
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Direct Messaging Support</span>
            </div>
            <p className="text-xs text-[#5E574D] leading-relaxed">
              For real-time questions, feedback on calculators, or rapid inquiries, reach our editorial desk via WhatsApp:
            </p>
            <a
              href="https://wa.me/923192229067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded transition-colors"
            >
              Chat on WhatsApp (+92 319 2229067)
            </a>
          </div>

          {/* Non-commercial reminder */}
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-xs text-[#6B6355] leading-relaxed space-y-1">
            <p className="font-semibold text-[#1C1C1C]">Non-Commercial Policy</p>
            <p>
              Elite Fabrics is an independent educational publication. We do not sell textiles, apparel, or sewing equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
