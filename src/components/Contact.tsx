import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSend, FiCheck, FiLoader } from 'react-icons/fi';

/* ─── Contact link data ─── */
interface ContactItem {
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  value: string;
  url: string;
  color: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: SiGithub,
    label: 'GitHub',
    value: '@Vishwa-2345',
    url: 'https://github.com/Vishwa-2345',
    color: 'bg-slate-800 dark:bg-slate-700',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: 'Vishwa V',
    url: 'https://www.linkedin.com/in/vishwa-v-bb450b319',
    color: 'bg-[#0077b5]',
  },
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'vishwav.main@gmail.com',
    url: 'mailto:vishwav.main@gmail.com',
    color: 'bg-rose-500',
  },
];

/* ─── EmailJS helpers ─── */
const isConfigured = (value: string): boolean =>
  Boolean(value) && !/^(your[_-]|placeholder[_-])/i.test(value) && !/xxx/i.test(value);

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE as string;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE as string;
const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC as string;

const EMAILJS_CONFIGURED =
  isConfigured(EMAILJS_SERVICE) &&
  isConfigured(EMAILJS_TEMPLATE) &&
  isConfigured(EMAILJS_PUBLIC);

const getEmailJSErrorText = (error: unknown): string => {
  if (error && typeof error === 'object' && 'text' in error && typeof (error as { text: unknown }).text === 'string') {
    return (error as { text: string }).text;
  }
  if (error instanceof Error) return error.message;
  return String(error);
};

/* ─── Contact Card ─── */
const ContactCard: React.FC<{ item: ContactItem; index: number }> = ({ item, index }) => {
  const inner = (
    <>
      <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
        <item.icon size={26} className="text-white" />
      </div>
      <div className="w-full">
        <p className="font-display font-bold text-slate-800 dark:text-white text-lg mb-1">{item.label}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium break-all">{item.value}</p>
      </div>
    </>
  );

  const cardClass =
    'glass-card p-6 flex flex-col items-center justify-center gap-4 text-center group hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full min-h-[160px]';

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
    >
      <a
        href={item.url}
        target={item.label !== 'Email' ? '_blank' : undefined}
        rel="noopener noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    </motion.div>
  );
};

/* ─── Main Contact Section ─── */
const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (EMAILJS_CONFIGURED) {
      emailjs.init(EMAILJS_PUBLIC);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_CONFIGURED) {
      console.error('EmailJS is not configured.');
      setStatus('error');
      setErrorMessage('Email delivery is not configured yet. Please use the direct email link below.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
        reply_to: formState.email,
      });
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      const text = getEmailJSErrorText(err).toLowerCase();
      if (text.includes('public key')) {
        setErrorMessage('EmailJS public key is invalid. Check VITE_EMAILJS_PUBLIC in .env.');
      } else if (text.includes('service') || text.includes('template') || text.includes('400') || text.includes('bad request')) {
        setErrorMessage('EmailJS could not send the message. Check the service and template IDs in .env.');
      } else {
        setErrorMessage('Could not send your message right now. Please try again or email me directly.');
      }
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container-custom relative z-10">
        {/* ── Heading ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg max-w-xl mx-auto text-slate-500 dark:text-slate-400">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Contact Form ── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 border-t-4 border-emerald-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">I'll get back to you within 24 hours.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FiSend size={24} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text" id="name" name="name" value={formState.name}
                      onChange={handleChange} required className="input-field" placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email" id="email" name="email" value={formState.email}
                      onChange={handleChange} required className="input-field" placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text" id="subject" name="subject" value={formState.subject}
                    onChange={handleChange} required className="input-field" placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" value={formState.message}
                    onChange={handleChange} required rows={5}
                    className="input-field resize-none" placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="btn-primary w-full flex items-center justify-center gap-2 font-display disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <><FiLoader size={18} className="animate-spin" /> Sending...</>
                  ) : status === 'success' ? (
                    <><FiCheck size={18} /> Message Sent!</>
                  ) : (
                    <><FiSend size={18} /> Send Message</>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="text-center text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    Thanks! I'll get back to you soon.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className="text-center"
                  >
                    <p className="text-sm text-red-500 font-medium">
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                    <div className="mt-3 flex justify-center">
                      <a
                        href={`mailto:vishwav.main@gmail.com?subject=${encodeURIComponent(formState.subject || 'Contact from portfolio')}&body=${encodeURIComponent(`Name: ${formState.name}\n\n${formState.message}`)}`}
                        className="btn-secondary"
                      >
                        Email me directly
                      </a>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* ── Contact Info Cards ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <ContactCard key={item.label} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;