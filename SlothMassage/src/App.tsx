import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Heart, MessageCircle, Calendar, ArrowRight,
  CheckCircle, Star, User
} from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  preferredTime: string;
  goals: string;
  submittedAt: string;
}

interface FormData {
  name: string;
  phone: string;
  preferredTime: string;
  goals: string;
}

// TODO: Replace placeholder image URLs with real photos before launch
const FLAGSHIP_SERVICE = {
  id: 0,
  name: "The Nervous System Reset",
  description: "A comprehensive 2.5-hour experience designed to pull your body completely out of chronic stress. Begins with a 30-minute intake consultation to map your specific patterns of tension, followed by full-body deep therapeutic work, hot stone integration, and a closing recovery protocol. You leave different than you arrived.",
  duration: "2.5 hours",
  price: "$425",
  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
};

const SERVICES: Service[] = [
  {
    id: 1,
    name: "The Sloth Signature",
    description: "A slow, deeply restorative session designed to reset your nervous system through long, intentional strokes and mindful presence.",
    duration: "90 minutes",
    price: "$195",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
  },
  {
    id: 2,
    name: "Therapeutic Restoration",
    description: "Targeted work for specific areas of discomfort. Ideal for chronic tension, postural issues, and recovery from physical strain.",
    duration: "60 minutes",
    price: "$150",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80",
  },
  {
    id: 3,
    name: "The Golden Hour Ritual",
    description: "An immersive two-hour experience featuring warm aromatherapy oils, gentle hot stones, and extended bodywork to restore full harmony.",
    duration: "120 minutes",
    price: "$275",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  }
];

// TODO: Replace with real testimonials from Joshua's clients
const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Joshua's work is unlike anything I've experienced. I came in wound tight from months of stress — I left feeling like my body finally remembered how to rest.",
    name: "Client Name",
    title: "Client Title"
  },
  {
    quote: "I've had massages all over the world, but nothing compares to the precision and intention Joshua brings. It's not just a massage — it's a reset.",
    name: "Client Name",
    title: "Client Title"
  },
  {
    quote: "My chronic neck tension has finally eased after years of searching. Joshua's approach to the nervous system is something completely different.",
    name: "Client Name",
    title: "Client Title"
  }
];

const EXPERIENCE_STEPS = [
  {
    number: "01",
    title: "Inquiry",
    description: "Reach out to begin the conversation. Share your needs, schedule preferences, and any areas of focus.",
    icon: MessageCircle
  },
  {
    number: "02",
    title: "Consultation",
    description: "A thoughtful, unhurried conversation to understand your body, history, and intentions for the session.",
    icon: Calendar
  },
  {
    number: "03",
    title: "The Session",
    description: "Joshua comes to you — your home, your space. Receive deeply personalized bodywork in the comfort of your own environment.",
    icon: Heart
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInquiriesOpen, setIsInquiriesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', preferredTime: '', goals: '' });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('slothInquiries');
    if (saved) setInquiries(JSON.parse(saved));
  }, []);

  const saveInquiries = (updated: Inquiry[]) => {
    localStorage.setItem('slothInquiries', JSON.stringify(updated));
    setInquiries(updated);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openBookingModal = (service?: Service) => {
    setSelectedService(service || null);
    setFormData({
      name: '', phone: '', preferredTime: '',
      goals: service ? `I am interested in the ${service.name} (${service.duration}). ` : ''
    });
    setFormErrors({});
    setSubmitSuccess(false);
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setSubmitSuccess(false);
    setFormData({ name: '', phone: '', preferredTime: '', goals: '' });
    setFormErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.phone.trim()) errors.phone = 'Please enter your phone number';
    else if (!/^[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) errors.phone = 'Please enter a valid phone number';
    if (!formData.preferredTime.trim()) errors.preferredTime = 'Please enter a preferred time';
    if (!formData.goals.trim() || formData.goals.trim().length < 10) errors.goals = 'Please share your goals (at least 10 characters)';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 850));
    const newInquiry: Inquiry = {
      id: Date.now(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      preferredTime: formData.preferredTime,
      goals: formData.goals.trim(),
      submittedAt: new Date().toISOString()
    };
    saveInquiries([newInquiry, ...inquiries]);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(closeModal, 3200);
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });

  const deleteInquiry = (id: number) => saveInquiries(inquiries.filter(i => i.id !== id));

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#2C2C2C] overflow-x-hidden">

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F4]/95 backdrop-blur-lg border-b border-[#0F3D2C]/10">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <img src="/images/sloth-logo.png" alt="Sloth Massage" className="h-10 w-auto transition-transform group-hover:scale-[1.02]" />
          </button>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-[1px] font-medium">
            {['about', 'services', 'experience', 'testimonials', 'contact'].map(s => (
              <button key={s} onClick={() => scrollToSection(s)} className="nav-link text-[#0F3D2C] hover:text-[#0F3D2C]/70 capitalize">
                {s === 'experience' ? 'The Experience' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsInquiriesOpen(true)} className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs tracking-[1.5px] border border-[#0F3D2C]/20 hover:bg-[#0F3D2C] hover:text-white transition-all rounded-full font-medium">
              <User size={15} /> INQUIRIES ({inquiries.length})
            </button>
            <button onClick={() => openBookingModal()} className="cta-button px-8 py-3 bg-[#0F3D2C] text-white text-xs tracking-[2px] font-medium rounded-full hover:bg-[#0A2F24] flex items-center gap-2">
              REQUEST A SESSION <ArrowRight size={15} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-[#0F3D2C]/10 bg-[#FAF8F4]">
              <div className="px-8 py-8 flex flex-col gap-6 text-sm tracking-widest">
                {['about', 'services', 'experience', 'testimonials', 'contact'].map(s => (
                  <button key={s} onClick={() => scrollToSection(s)} className="text-left py-1 text-[#0F3D2C] uppercase">{s}</button>
                ))}
                <button onClick={() => { setIsInquiriesOpen(true); setIsMenuOpen(false); }} className="text-left py-1 text-[#0F3D2C] flex items-center gap-2">
                  VIEW INQUIRIES <span className="text-xs opacity-60">({inquiries.length})</span>
                </button>
                <button onClick={() => openBookingModal()} className="mt-3 w-full py-4 bg-[#0F3D2C] text-white rounded-full text-xs tracking-[2px]">
                  REQUEST A SESSION
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#0F3D2C]">
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80" alt="Luxury massage therapy" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F24]/70 via-[#0F3D2C]/60 to-[#0F3D2C]/85" />
        </div>
        <div className="relative z-10 max-w-4xl px-8 text-center">
          <div className="h-px w-16 bg-[#C5A26F] mx-auto mb-6" />
          <h1 className="serif-heading text-white text-[92px] md:text-[108px] leading-[0.88] tracking-[-5.5px] mb-6">
            UNHURRIED.<br />TIMELESS.
          </h1>
          <p className="text-[#C5A26F] text-xl md:text-2xl tracking-[3px] font-light mb-12 max-w-md mx-auto">
            Private massage therapy. Los Angeles &amp; Orange County.
          </p>
          <button onClick={() => openBookingModal()} className="cta-button group inline-flex items-center gap-4 px-12 py-5 border-2 border-[#C5A26F] text-[#C5A26F] hover:bg-[#C5A26F] hover:text-[#0F3D2C] text-sm tracking-[3px] rounded-full transition-all duration-300">
            REQUEST A SESSION
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO BEGIN
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-8 pt-24 pb-20">
        <div className="grid md:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase text-[#C5A26F] tracking-[4px] text-sm mb-4">SERVING LA &amp; OC</div>
            {/* TODO: Add Joshua's last name */}
            <h2 className="serif-heading text-[#0F3D2C] text-7xl md:text-8xl tracking-[-3.5px] leading-none mb-9">
              Joshua
            </h2>
            <div className="max-w-[38ch] text-[15px] leading-[1.75] text-[#2C2C2C]/90">
              Joshua is a licensed massage therapist specializing in nervous system recovery and deep therapeutic bodywork.
              Serving clients across Los Angeles and Orange County, he comes to you — arriving at your home ready to deliver
              a session that goes beyond tension relief. His work is slow, intentional, and built around one goal: getting
              your body out of fight-or-flight and back into a state of genuine rest.
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs tracking-[2px] text-[#0F3D2C]/70">
              <div>LICENSED MASSAGE THERAPIST</div>
              <div className="h-px flex-1 bg-[#0F3D2C]/20 hidden md:block" />
              <div>NERVOUS SYSTEM RECOVERY</div>
              <div className="h-px flex-1 bg-[#0F3D2C]/20 hidden md:block" />
              <div>MOBILE CONCIERGE</div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            {/* TODO: Replace with Joshua's actual photo */}
            <div className="aspect-[4/3.35] overflow-hidden rounded-xl shadow-2xl bg-[#0F3D2C]/10 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" alt="Joshua, Founder & Lead Therapist" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0F3D2C] text-[#C5A26F] px-9 py-6 text-sm tracking-widest rounded-xl hidden md:block">
              FOUNDER &amp; LEAD THERAPIST
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#0F3D2C] py-20 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[#C5A26F] tracking-[4px] text-sm mb-3">CURATED OFFERINGS</div>
            <h2 className="serif-heading text-7xl tracking-[-3px]">Signature Services</h2>
          </div>

          {/* Flagship service — full width */}
          <motion.div whileHover={{ y: -4 }} className="service-card group mb-8 bg-[#FAF8F4] text-[#2C2C2C] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto overflow-hidden">
                <img src={FLAGSHIP_SERVICE.image} alt={FLAGSHIP_SERVICE.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A2F24]/20" />
                <div className="absolute top-6 left-6 bg-[#C5A26F] text-[#0A2F24] text-xs px-5 py-1.5 tracking-[2px] rounded-full font-semibold">FLAGSHIP EXPERIENCE</div>
              </div>
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <div className="text-[#C5A26F] text-xs tracking-[3px] mb-3">{FLAGSHIP_SERVICE.duration}</div>
                  <h3 className="serif-heading text-[#0F3D2C] text-5xl tracking-[-2px] mb-5 leading-none">{FLAGSHIP_SERVICE.name}</h3>
                  <p className="text-[#2C2C2C]/80 text-[15px] leading-relaxed">{FLAGSHIP_SERVICE.description}</p>
                </div>
                <div className="flex items-end justify-between pt-8 mt-8 border-t border-[#0F3D2C]/10">
                  <div>
                    <div className="text-xs text-[#0F3D2C]/60 tracking-[1.5px]">INVESTMENT</div>
                    <div className="text-[#0F3D2C] text-5xl font-light tracking-tight">{FLAGSHIP_SERVICE.price}</div>
                  </div>
                  <button onClick={() => openBookingModal(FLAGSHIP_SERVICE as Service)} className="cta-button flex items-center gap-3 px-8 py-4 bg-[#0F3D2C] text-white text-xs tracking-[2px] rounded-full hover:bg-[#0A2F24]">
                    REQUEST THIS SESSION <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <motion.div key={service.id} whileHover={{ y: -6 }} className="service-card group bg-[#FAF8F4] text-[#2C2C2C] rounded-2xl overflow-hidden flex flex-col">
                <div className="relative h-[260px] overflow-hidden">
                  <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700" />
                  <div className="absolute top-6 right-6 bg-white/95 text-[#0F3D2C] text-xs px-5 py-1.5 tracking-[2px] rounded-full font-medium">{service.duration}</div>
                </div>
                <div className="p-9 flex flex-col flex-1">
                  <h3 className="serif-heading text-[#0F3D2C] text-4xl tracking-[-1.5px] mb-4 leading-none">{service.name}</h3>
                  <p className="text-[#2C2C2C]/80 text-[15px] leading-relaxed mb-8">{service.description}</p>
                  <div className="mt-auto flex items-end justify-between pt-4 border-t border-[#0F3D2C]/10">
                    <div>
                      <div className="text-xs text-[#0F3D2C]/60 tracking-[1.5px]">STARTING AT</div>
                      <div className="text-[#0F3D2C] text-4xl font-light tracking-tight">{service.price}</div>
                    </div>
                    <button onClick={() => openBookingModal(service)} className="cta-button flex items-center gap-3 px-7 py-3.5 bg-[#0F3D2C] text-white text-xs tracking-[2px] rounded-full hover:bg-[#0A2F24]">
                      REQUEST THIS SESSION <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-8 py-24">
        <div className="max-w-2xl mb-16">
          <div className="text-[#C5A26F] text-sm tracking-[4px]">HOW IT WORKS</div>
          <h2 className="serif-heading text-[#0F3D2C] text-7xl tracking-[-3.2px] leading-none mt-3">The Experience</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {EXPERIENCE_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="step-card relative group">
                <div className="flex flex-col h-full border-l-2 border-[#C5A26F]/30 pl-9 pb-8 md:pb-0">
                  <div className="mb-9">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F3D2C] text-[#C5A26F] mb-7">
                      <Icon size={28} />
                    </div>
                    <div className="text-[#C5A26F] font-mono tracking-[4px] text-sm mb-3">{step.number}</div>
                    <h3 className="serif-heading text-[#0F3D2C] text-5xl tracking-[-1.75px] mb-5">{step.title}</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#2C2C2C]/85 pr-4">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center text-sm text-[#0F3D2C]/60 tracking-widest">
          EVERY SESSION IS TAILORED. EVERY MOMENT MATTERS.
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[#F8F5F0] py-20 border-y border-[#0F3D2C]/10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[#C5A26F] tracking-[3px] text-xs mb-4">WORDS FROM OUR GUESTS</div>
            <h2 className="serif-heading text-[#0F3D2C] text-6xl tracking-[-2px]">What They Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial bg-white p-9 rounded-2xl flex flex-col border border-[#0F3D2C]/5">
                <div className="flex gap-1 mb-8 text-[#C5A26F]">
                  {[...Array(5)].map((_, j) => <Star key={j} size={17} fill="currentColor" />)}
                </div>
                <blockquote className="flex-1 text-[15px] leading-[1.75] text-[#2C2C2C]/90">"{t.quote}"</blockquote>
                <div className="pt-8 mt-auto border-t border-[#0F3D2C]/10">
                  <div className="font-medium tracking-tight">{t.name}</div>
                  <div className="text-[#0F3D2C]/60 text-sm tracking-widest mt-px">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-8 py-24 text-center">
        <div className="mb-6">
          <div className="text-[#C5A26F] tracking-[4px] text-sm mb-3">NEXT STEP</div>
          <h2 className="serif-heading text-[#0F3D2C] text-7xl tracking-[-3px]">Begin Your Journey</h2>
        </div>
        <p className="max-w-md mx-auto text-[#2C2C2C]/75 mb-11 text-[15px]">
          Every session begins with a conversation. Share your intentions, and Joshua will craft the perfect experience for you.
        </p>
        <button onClick={() => openBookingModal()} className="cta-button px-14 py-6 bg-[#0F3D2C] text-[#FAF8F4] rounded-full text-sm tracking-[3.5px] font-medium flex items-center justify-center gap-3 mx-auto hover:bg-black">
          REQUEST A SESSION <ArrowRight size={18} />
        </button>
        <div className="mt-12 text-[#0F3D2C]/60 text-sm tracking-widest">
          MOBILE CONCIERGE • LOS ANGELES &amp; ORANGE COUNTY • BY APPOINTMENT ONLY
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3D2C] text-[#C5A26F]/80 py-12">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between text-sm tracking-widest">
          <div>© {new Date().getFullYear()} SLOTH MASSAGE. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-x-8 mt-4 md:mt-0">
            <button onClick={() => setIsInquiriesOpen(true)}>VIEW INQUIRIES</button>
            <button onClick={() => openBookingModal()}>REQUEST A SESSION</button>
          </div>
          <div>LOS ANGELES / ORANGE COUNTY</div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 md:p-8" onClick={closeModal}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.985 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="modal w-full max-w-[560px] bg-[#FAF8F4] rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {!submitSuccess ? (
                <>
                  <div className="px-10 pt-10 pb-6 flex justify-between items-start border-b border-[#0F3D2C]/10">
                    <div>
                      <div className="text-[#C5A26F] text-xs tracking-[3px]">PRIVATE APPOINTMENT</div>
                      <h3 className="serif-heading text-[#0F3D2C] text-5xl tracking-[-2px] mt-2">
                        {selectedService ? selectedService.name : "Request a Session"}
                      </h3>
                      {selectedService && (
                        <div className="text-sm text-[#0F3D2C]/60 mt-1 tracking-widest">{selectedService.duration} • {selectedService.price}</div>
                      )}
                    </div>
                    <button onClick={closeModal} className="text-[#0F3D2C]/40 hover:text-[#0F3D2C] p-1 -mr-1"><X size={26} /></button>
                  </div>
                  <form onSubmit={handleSubmit} className="px-10 pt-8 pb-10 space-y-7">
                    <div>
                      <label className="block text-xs tracking-[2px] text-[#0F3D2C]/70 mb-2.5">YOUR NAME</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Alexandra Laurent"
                        className={`form-input w-full border ${formErrors.name ? 'border-red-400' : 'border-[#0F3D2C]/15'} bg-white px-6 py-4 rounded-2xl text-base placeholder:text-[#0F3D2C]/40`} />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.name}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-xs tracking-[2px] text-[#0F3D2C]/70 mb-2.5">PHONE NUMBER</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(714) 555-0192"
                          className={`form-input w-full border ${formErrors.phone ? 'border-red-400' : 'border-[#0F3D2C]/15'} bg-white px-6 py-4 rounded-2xl text-base placeholder:text-[#0F3D2C]/40`} />
                        {formErrors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-xs tracking-[2px] text-[#0F3D2C]/70 mb-2.5">PREFERRED TIME</label>
                        <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} placeholder="Thursday, Nov 14 • 3:00 PM"
                          className={`form-input w-full border ${formErrors.preferredTime ? 'border-red-400' : 'border-[#0F3D2C]/15'} bg-white px-6 py-4 rounded-2xl text-base placeholder:text-[#0F3D2C]/40`} />
                        {formErrors.preferredTime && <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.preferredTime}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs tracking-[2px] text-[#0F3D2C]/70 mb-2.5">WHAT ARE YOU HOPING TO ACHIEVE?</label>
                      <textarea name="goals" value={formData.goals} onChange={handleInputChange} rows={4}
                        placeholder="I'd like to address chronic tension in my shoulders and finally get some real rest..."
                        className={`form-input w-full border resize-y ${formErrors.goals ? 'border-red-400' : 'border-[#0F3D2C]/15'} bg-white px-6 py-4 rounded-2xl text-base placeholder:text-[#0F3D2C]/40`} />
                      {formErrors.goals && <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.goals}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting}
                      className="cta-button mt-3 w-full py-[21px] bg-[#0F3D2C] hover:bg-[#0A2F24] text-white disabled:bg-[#0F3D2C]/80 text-sm tracking-[3px] rounded-full font-medium flex items-center justify-center gap-3 transition-all">
                      {isSubmitting ? 'CONFIRMING YOUR REQUEST...' : <><span>SEND REQUEST</span><ArrowRight size={17} /></>}
                    </button>
                    <div className="text-center text-[10px] tracking-[1px] text-[#0F3D2C]/50 pt-1">JOSHUA WILL RESPOND WITHIN 4 HOURS</div>
                  </form>
                </>
              ) : (
                <div className="px-10 py-20 text-center">
                  <div className="mx-auto mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#0F3D2C]">
                    <CheckCircle className="text-[#C5A26F]" size={42} />
                  </div>
                  <h3 className="serif-heading text-[#0F3D2C] text-5xl tracking-[-1.8px] mb-4">Thank You</h3>
                  <p className="text-[#2C2C2C]/80 max-w-[340px] mx-auto leading-relaxed text-[15px]">
                    Your request has been received. Joshua will personally contact you within a few hours to confirm your session.
                  </p>
                  <div className="mt-9 text-xs tracking-[3px] text-[#C5A26F]">WE LOOK FORWARD TO WELCOMING YOU</div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Inquiries Modal */}
      <AnimatePresence>
        {isInquiriesOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4" onClick={() => setIsInquiriesOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              className="bg-[#FAF8F4] w-full max-w-2xl rounded-3xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="px-9 pt-8 pb-6 flex justify-between items-center border-b">
                <div>
                  <div className="text-[#C5A26F] text-xs tracking-widest">PRIVATE RECORDS</div>
                  <div className="serif-heading text-[#0F3D2C] text-4xl tracking-tight mt-1">Your Inquiries</div>
                </div>
                <button onClick={() => setIsInquiriesOpen(false)}><X size={24} /></button>
              </div>
              <div className="max-h-[460px] overflow-auto px-9 py-6">
                {inquiries.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="text-[#0F3D2C]/30 mb-4"><Calendar size={42} /></div>
                    <p className="text-[#0F3D2C]/60">No inquiries yet. Request your first session above.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {inquiries.map(inquiry => (
                      <div key={inquiry.id} className="border border-[#0F3D2C]/10 bg-white rounded-2xl p-7">
                        <div className="flex justify-between mb-4 items-start">
                          <div>
                            <div className="font-medium tracking-tight text-lg">{inquiry.name}</div>
                            <div className="text-[#0F3D2C]/50 text-sm">{inquiry.phone}</div>
                          </div>
                          <div className="text-right text-xs text-[#C5A26F] tracking-widest font-mono">{formatDate(inquiry.submittedAt)}</div>
                        </div>
                        <div className="mb-4">
                          <div className="text-[#0F3D2C]/60 text-xs tracking-[2px] mb-1">PREFERRED TIME</div>
                          <div className="font-medium">{inquiry.preferredTime}</div>
                        </div>
                        <div>
                          <div className="text-[#0F3D2C]/60 text-xs tracking-[2px] mb-1">GOALS &amp; NOTES</div>
                          <div className="text-[#2C2C2C]/85 text-[14.5px] leading-relaxed">{inquiry.goals}</div>
                        </div>
                        <button onClick={() => deleteInquiry(inquiry.id)} className="mt-6 text-xs text-red-700/70 hover:text-red-700 tracking-widest opacity-60 hover:opacity-100 transition">
                          REMOVE FROM RECORDS
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-[#0F3D2C] px-9 py-5 text-center text-[#C5A26F] text-xs tracking-[3px]">
                ALL INQUIRIES ARE TREATED WITH UTMOST PRIVACY
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
