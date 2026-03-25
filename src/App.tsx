import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Building2, 
  Zap, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Play,
  Mail
} from 'lucide-react';

// --- Types ---
type Location = 'Yelahanka' | 'REVA Area' | 'MAHE Area' | 'NMIT Area' | 'Other';

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? (isDark ? 'glass-dark' : 'glass') : ''}`}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-display font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              FlowLiving
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Calculator', 'Gallery', 'Audit'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-indigo-600'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#audit"
              className="hidden sm:block glow-button bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/40"
            >
              Get Leads
            </a>
            <button 
              className="md:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-6 right-6 mt-4 p-6 rounded-3xl md:hidden ${isDark ? 'glass-dark' : 'glass'}`}
          >
            <div className="flex flex-col gap-4">
              {['Services', 'Calculator', 'Gallery', 'Audit'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#audit"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-2xl text-center font-bold"
              >
                Get Leads
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const OccupancyCounter = ({ target, isDark }: { target: number; isDark: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className={`flex flex-col items-center p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-indigo-50'}`}>
      <span className="text-4xl font-display font-extrabold text-indigo-600">{count}%</span>
      <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Target Occupancy</span>
    </div>
  );
};

const Hero = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-bold mb-6">
            <Zap size={16} />
            <span>Bangalore's Newest Student Housing Growth Partner</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Your Consistent Partner for <span className="text-indigo-600">Student Housing Growth.</span>
          </h1>
          <p className={`text-lg md:text-xl mb-10 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We're a specialized startup helping property owners near REVA, MAHE, and NMIT. We don't just fill beds; we stay by your side to ensure long-term occupancy through high-end 360° virtual tours and hyper-targeted digital campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#audit" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all text-center">
              Start Free Audit
            </a>
            <a href="https://wa.me/919571277444" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg border transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
              <MessageCircle className="text-green-500" />
              Chat with Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className={`rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl relative ${isDark ? 'glass-dark' : 'glass'}`}>
            <img 
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069" 
              alt="Student Housing Interior" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="text-white">
                <p className="text-sm font-medium opacity-80 mb-1">Our Mission</p>
                <p className="text-3xl font-display font-bold">Zero Vacancy</p>
              </div>
              <OccupancyCounter target={98} isDark={isDark} />
            </div>
          </div>
          
          {/* Floating elements */}
          <div className={`absolute -top-6 -right-6 p-6 rounded-3xl shadow-xl animate-bounce-slow ${isDark ? 'glass-dark' : 'glass'}`}>
            <TrendingUp className="text-indigo-500 w-8 h-8" />
          </div>
          <div className={`absolute -bottom-6 -left-6 p-6 rounded-3xl shadow-xl animate-pulse ${isDark ? 'glass-dark' : 'glass'}`}>
            <Users className="text-indigo-500 w-8 h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BentoServices = ({ isDark }: { isDark: boolean }) => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The FlowLiving Advantage
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Why Yelahanka's student housing owners are switching to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* Large Item */}
          <div className={`md:col-span-2 md:row-span-2 bento-item ${isDark ? 'glass-dark' : 'glass'} bg-indigo-600/10`}>
            <div>
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" />
              </div>
              <h3 className={`text-3xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                360° Virtual & Digital Tours
              </h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We don't just list properties; we bring them to life. Our team creates professional 360° virtual tours and cinematic walk-throughs, allowing students to "visit" your PG from their hometown.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                <Play size={16} className="text-indigo-500" />
                <span className={`text-sm font-bold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>360° Virtual Tours Included</span>
              </div>
            </div>
          </div>

          {/* Medium Item */}
          <div className={`bento-item ${isDark ? 'glass-dark' : 'glass'}`}>
            <ShieldCheck className="text-indigo-500 w-10 h-10 mb-4" />
            <div>
              <h3 className={`text-xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Student Verification
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We verify college IDs and enrollment for REVA, MAHE, and NMIT students.
              </p>
            </div>
          </div>

          {/* Medium Item */}
          <div className={`bento-item ${isDark ? 'glass-dark' : 'glass'}`}>
            <TrendingUp className="text-indigo-500 w-10 h-10 mb-4" />
            <div>
              <h3 className={`text-xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Targeted Ads
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Hyper-local social media ads targeting students searching for housing in Yelahanka.
              </p>
            </div>
          </div>

          {/* Wide Item */}
          <div className={`md:col-span-3 bento-item ${isDark ? 'glass-dark' : 'glass'} flex-row items-center gap-8`}>
            <div className="hidden sm:block w-1/3 h-full rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070" 
                alt="College Campus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h3 className={`text-2xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Future Expansion Plans
              </h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                FlowLiving is starting with student housing in Yelahanka, but we're scaling fast. Soon, we'll be bringing our digital-first promotion model to luxury studios and premium co-living spaces across Bangalore.
              </p>
            </div>
            <ChevronRight className="text-indigo-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfitCalculator = ({ isDark }: { isDark: boolean }) => {
  const [rooms, setRooms] = useState(5);
  const RENT_PER_ROOM = 12000;
  const lostRevenue = rooms * RENT_PER_ROOM;

  return (
    <section id="calculator" className="py-24 px-6 bg-indigo-600/5">
      <div className="max-w-4xl mx-auto">
        <div className={`p-10 md:p-16 rounded-[40px] ${isDark ? 'glass-dark' : 'glass'}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <Calculator className="text-white" />
            </div>
            <h2 className={`text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Profit Leak Calculator
            </h2>
          </div>
          
          <p className={`text-lg mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            See how much monthly revenue you're leaving on the table with vacant student beds.
          </p>

          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-center mb-6">
                <label className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Number of Vacant Beds
                </label>
                <span className="text-3xl font-display font-extrabold text-indigo-600">{rooms}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={rooms} 
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>1 Bed</span>
                <span>50 Beds</span>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border-2 border-dashed ${isDark ? 'border-white/10 bg-white/5' : 'border-indigo-100 bg-indigo-50'}`}>
              <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Lost Monthly Revenue
              </p>
              <p className="text-5xl md:text-7xl font-display font-extrabold text-indigo-600">
                ₹{lostRevenue.toLocaleString()}
              </p>
              <p className={`mt-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                *Based on average Yelahanka student PG rent of ₹{RENT_PER_ROOM.toLocaleString()}/month
              </p>
            </div>

            <div className="text-center">
              <a href="#audit" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-indigo-500/30 hover:scale-105 transition-transform">
                Recover This Revenue
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VibeCheckGallery = ({ isDark }: { isDark: boolean }) => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Virtual Tour Showcase
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Experience how we showcase student rooms using 360° technology.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest">360° Virtual Tours</span>
            <span className="px-4 py-2 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest">Digital Walkthroughs</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { area: 'REVA University Area', type: 'Student Suite' },
            { area: 'NMIT Area', type: 'Premium Dorm' },
            { area: 'MAHE Area', type: 'Modern PG' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`relative rounded-[32px] overflow-hidden aspect-[9/16] shadow-2xl group ${isDark ? 'glass-dark' : 'glass'}`}
            >
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white fill-white" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-indigo-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
                    360° Virtual Tour
                  </div>
                </div>
              </div>
              <img 
                src={`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000&sig=${i}`} 
                alt="Gallery" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-indigo-400 font-bold text-sm mb-1">{item.area}</p>
                <h4 className="text-white text-xl font-display font-bold">{item.type}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuditForm = ({ isDark }: { isDark: boolean }) => {
  const [formData, setFormData] = useState({
    propertyName: '',
    location: 'Yelahanka' as Location,
    collegeProximity: 'REVA',
    phone: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Audit requested for ${formData.propertyName}! Our team will contact you shortly regarding your property near ${formData.collegeProximity}.`);
  };

  return (
    <section id="audit" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className={`text-4xl md:text-6xl font-display font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get Your <span className="text-indigo-600">Free Audit</span> Report.
          </h2>
          <ul className="space-y-6">
            {[
              'Detailed vacancy analysis of Yelahanka colleges',
              'Competitor pricing benchmarking (REVA/MAHE/NMIT)',
              'Custom marketing strategy for student housing',
              'Long-term revenue growth strategy'
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-green-500 w-4 h-4" />
                </div>
                <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-8 md:p-12 rounded-[40px] shadow-2xl ${isDark ? 'glass-dark' : 'glass'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Property Name</label>
              <input 
                required
                type="text" 
                placeholder="e.g. FlowLiving Student Residency"
                className={`w-full px-6 py-4 rounded-2xl border transition-all outline-none focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                value={formData.propertyName}
                onChange={e => setFormData({...formData, propertyName: e.target.value})}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Location</label>
              <select 
                className={`w-full px-6 py-4 rounded-2xl border transition-all outline-none focus:ring-2 focus:ring-indigo-500 appearance-none ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value as Location})}
              >
                <option value="Yelahanka">Yelahanka</option>
                <option value="REVA Area">REVA University Area</option>
                <option value="MAHE Area">MAHE Area</option>
                <option value="NMIT Area">NMIT Area</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Nearest College</label>
              <select 
                className={`w-full px-6 py-4 rounded-2xl border transition-all outline-none focus:ring-2 focus:ring-indigo-500 appearance-none ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                value={formData.collegeProximity}
                onChange={e => setFormData({...formData, collegeProximity: e.target.value})}
              >
                <option value="REVA">REVA University</option>
                <option value="MAHE">MAHE Bangalore</option>
                <option value="NMIT">NMIT</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Phone Number</label>
              <input 
                required
                type="tel" 
                placeholder="+91 XXXXX XXXXX"
                className={`w-full px-6 py-4 rounded-2xl border transition-all outline-none focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all">
              Claim My Free Audit
            </button>
            <p className={`text-center text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              No commitment required. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ isDark }: { isDark: boolean }) => {
  return (
    <footer className={`py-12 px-6 border-t ${isDark ? 'border-white/10 bg-slate-950' : 'border-slate-100 bg-white'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="text-indigo-600" />
          <span className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>FlowLiving</span>
        </div>
        
        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          © 2026 FlowLiving Agency. Bangalore's Premier Property Partner.
        </div>

        <div className="flex gap-6">
          <a href="https://wa.me/919571277444" className="text-green-500 hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </a>
          <a href="tel:9571277444" className="text-indigo-500 hover:scale-110 transition-transform">
            <Phone size={24} />
          </a>
          <a href="mailto:flowlivingsales@gmail.com" className="text-slate-400 hover:scale-110 transition-transform">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen selection:bg-indigo-500 selection:text-white ${isDark ? 'bg-slate-950 text-white' : 'bg-indigo-50 text-slate-900'}`}>
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-indigo-900' : 'bg-indigo-400'}`}></div>
        <div className={`absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-blue-900' : 'bg-blue-400'}`}></div>
        <div className={`absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-indigo-800' : 'bg-indigo-300'}`}></div>
      </div>

      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <BentoServices isDark={isDark} />
        <ProfitCalculator isDark={isDark} />
        <VibeCheckGallery isDark={isDark} />
        <AuditForm isDark={isDark} />
        <Footer isDark={isDark} />
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a 
        href="https://wa.me/919571277444"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 text-white"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
