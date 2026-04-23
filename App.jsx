import React, { useState } from 'react';
import { 
  Briefcase, 
  MessageSquare, 
  Award, 
  Mail, 
  ExternalLink, 
  Linkedin, 
  Instagram, 
  Smartphone,
  Video,
  Users,
  HeartHandshake,
  Cpu,
  ChevronRight,
  Globe,
  Settings,
  ShieldCheck,
  FileCheck,
  Facebook,
  ShoppingBag,
  Palette,
  ClipboardCheck,
  Layout,
  Search,
  PieChart,
  Presentation,
  Headphones
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const BentoCard = ({ children, className = "", title = "" }) => (
    <div className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6 transition-all duration-500 hover:border-silver/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {title && <h3 className="text-silver/50 uppercase tracking-[0.2em] text-[10px] font-bold mb-4">{title}</h3>}
      <div className="relative z-10">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-silver/30 selection:text-white font-sans overflow-x-hidden">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
        {['home', 'about', 'work', 'testimonials', 'contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
              setActiveTab(tab);
            }}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === tab ? 'bg-white text-black' : 'text-white/60 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-6">
        
        {/* PAGE 1: HERO SECTION */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[70vh]">
          <BentoCard className="md:col-span-8 flex flex-col justify-center min-h-[400px]">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] tracking-[0.3em] uppercase bg-white/5 text-silver">Available for Strategic Partnerships</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                HI! I AM <br/> 
                <span className="text-white">JOHN IÑIGO SR. MIRANDA</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-silver">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-sm font-medium">Digital Content Strategist & Talent Acquisition</p>
                </div>
              </div>
              <p className="text-xl text-white/60 max-w-xl font-light leading-relaxed">
                I help brands, teams, and businesses tell better stories, hire the right people, and build systems that actually work.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-4 p-0 group overflow-hidden">
            <div className="relative h-full min-h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img 
                src="https://i.postimg.cc/cHBDY2xx/IMG-7442.jpg" 
                alt="John Iñigo Miranda"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-xs tracking-widest uppercase opacity-50">Based in</p>
                <p className="text-lg font-bold">Philippines</p>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* PAGE 2: WHO I AM */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <BentoCard className="md:col-span-12 lg:col-span-4" title="Expertise">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-white">Magna Cum Laude</p>
                <p className="text-xs text-white/40 uppercase tracking-tighter">B.S. Psychology • National University</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center">
                  <span className="text-xs font-bold text-silver mb-1">CHRA</span>
                  <span className="text-[10px] opacity-40 uppercase">Certified</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center">
                  <span className="text-xs font-bold text-silver mb-1">RPm</span>
                  <span className="text-[10px] opacity-40 uppercase">Licensed</span>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-12 lg:col-span-8" title="The Approach">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold italic">“I’m a multipotentialite who thrives at the intersection of <span className="text-silver">people, creativity, and systems</span>.”</h2>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                I graduated Magna Cum Laude with a Bachelor’s Degree in Psychology from National University – Philippines. I am a Certified Human Resource Associate (CHRA) and a Registered Psychometrician (RPm).
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Outside of work, I create content and turn everyday moments into engaging stories.
              </p>
              <div className="flex gap-6 border-t border-white/10 pt-6">
                <div><p className="text-white font-bold">Storytelling</p><p className="text-sm text-white/40">Engagement driven</p></div>
                <div><p className="text-white font-bold">Recruitment</p><p className="text-sm text-white/40">Data & Experience</p></div>
                <div><p className="text-white font-bold">Efficiency</p><p className="text-sm text-white/40">Systematic workflows</p></div>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* PAGE 3: WORK DETAILS */}
        <section id="work" className="space-y-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic px-2">Professional Experience</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* DIGITAL CONTENT */}
            <BentoCard title="Digital Content Creation" className="flex flex-col h-full">
              <div className="space-y-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Video size={20} />
                </div>
                <p className="text-white/60 text-sm italic">Storytelling, audience engagement, and trend adaptation.</p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Produced TikTok & YouTube storytelling montages",
                  "Created café reviews & brand positioning content",
                  "Designed clean Canva social media assets",
                  "Executed algorithm-aligned trend content",
                  "Personal & Employer Branding strategy"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs text-white/80 leading-relaxed group/li">
                    <ChevronRight size={14} className="shrink-0 text-white/20 group-hover/li:text-white transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* TALENT & HR */}
            <BentoCard title="Talent & HR" className="flex flex-col h-full">
              <div className="space-y-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Users size={20} />
                </div>
                <p className="text-white/60 text-sm italic">Candidate experience, organization, and data clarity.</p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Technical role interviews (Broadcast, Full Stack, SDM)",
                  "Built Recruitment Funnel visualization dashboards",
                  "Created Funnel Report standardization guides",
                  "Structured candidate evaluation documentation",
                  "Developed recruitment marketing strategies",
                  "Managed vendor engagement program decks"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs text-white/80 leading-relaxed group/li">
                    <ChevronRight size={14} className="shrink-0 text-white/20 group-hover/li:text-white transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* CUSTOMER & TECH */}
            <BentoCard title="Customer & Technical Support" className="flex flex-col h-full">
              <div className="space-y-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Headphones size={20} />
                </div>
                <p className="text-white/60 text-sm italic">High-volume interaction with professionalism & clarity.</p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Managed high-volume US Retail tech support",
                  "Recognized as Top Performer in Tech Support LOB",
                  "Real-time troubleshooting & resolution",
                  "100% accurate documentation in proprietary systems",
                  "Efficiency-driven technical resolution"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs text-white/80 leading-relaxed group/li">
                    <ChevronRight size={14} className="shrink-0 text-white/20 group-hover/li:text-white transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section id="testimonials" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard title="Feedback" className="md:col-span-2 bg-white/5">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                <div className="space-y-6 relative">
                  <MessageSquare className="absolute -top-4 -left-2 text-white/5" size={48} />
                  <p className="text-lg font-light leading-relaxed text-white/80 relative z-10 italic">
                    "John Iñigo is a dependable strategist who takes true ownership of complex processes. He is an exceptionally attentive reader who catches details others miss, proactively utilizing his resources to verify information and ensure every output meets the highest standard of integrity."
                  </p>
                  <div className="pt-4">
                    <p className="font-bold text-sm tracking-widest uppercase">— Operations Lead</p>
                    <p className="text-xs text-white/30 uppercase tracking-tighter">Local Company</p>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  <MessageSquare className="absolute -top-4 -left-2 text-white/5" size={48} />
                  <p className="text-lg font-light leading-relaxed text-white/80 relative z-10 italic">
                    "A reliable team member who leads with passion and efficiency. John consistently goes above expectations by sharing insights and extending help to his teammates; he is a professional who can be trusted with both company policy and the growth of the people around him."
                  </p>
                  <div className="pt-4">
                    <p className="font-bold text-sm tracking-widest uppercase">— Unit Manager</p>
                    <p className="text-xs text-white/30 uppercase tracking-tighter">Local Company</p>
                  </div>
                </div>
             </div>
          </BentoCard>
        </section>

        {/* CERTIFICATIONS LIST SECTION */}
        <section id="certifications" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <BentoCard className="md:col-span-7" title="Achievements & Certifications">
            <div className="space-y-5">
              {[
                { icon: <Award className="text-yellow-500" />, title: "Top 1 Ambassador", sub: "Intelogix • Tech Support LOB" },
                { icon: <ShieldCheck className="text-blue-500" />, title: "Certified Human Resource Associate", sub: "HREAP Designation" },
                { icon: <FileCheck className="text-green-500" />, title: "Registered Psychometrician", sub: "Rating: 86.20%" },
                { icon: <Globe className="text-purple-500" />, title: "WordPress Freelancing", sub: "Certificate of Completion" },
                { icon: <Briefcase className="text-orange-500" />, title: "Virtual Assistant Training", sub: "Process & Communication Masterclass" },
                { icon: <Settings className="text-silver" />, title: "Social Media Management", sub: "Content Strategy & Operations" },
                { icon: <ShoppingBag className="text-pink-500" />, title: "Shopify Specialist", sub: "E-commerce Development" },
                { icon: <Facebook className="text-blue-600" />, title: "Facebook Ads", sub: "Performance Marketing" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:text-black">
                    {React.cloneElement(item.icon, { size: 18, className: "transition-colors group-hover/item:text-black" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide">{item.title}</h4>
                    <p className="text-[11px] text-white/40 uppercase tracking-widest">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5 bg-silver/5 border-silver/20 flex flex-col justify-center items-center text-center p-12">
            <div className="w-20 h-20 rounded-3xl bg-white text-black flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <ExternalLink size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase mb-4">View Credentials</h3>
            <p className="text-sm text-white/60 mb-8 max-w-[200px]">
              Access the full compilation of my certificates and awards via Google Drive.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1_lrxDJxpqj6DRsR4RMn57iUHPBe0xll-?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Open Google Drive <ExternalLink size={14} />
            </a>
          </BentoCard>
        </section>

        {/* PAGE 7: CONTACT */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <BentoCard className="md:col-span-8 bg-white text-black" title="Let's Connect">
            <div className="space-y-8 py-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Let's build <br/> something <span className="italic opacity-50">impactful</span>.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="mailto:jimirandawork@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-all"><Mail size={20} /></div>
                  <div><p className="text-[10px] uppercase font-bold text-black/40">Email</p><p className="font-bold">jimirandawork@gmail.com</p></div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-all"><Smartphone size={20} /></div>
                  <div><p className="text-[10px] uppercase font-bold text-black/40">Phone</p><p className="font-bold">+63 952-489-7616</p></div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-silver/50 uppercase tracking-[0.2em] text-[10px] font-bold">Socials</h3>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/john-i%C3%B1igo-miranda-rpm-chra-55726520a/" target="_blank" className="flex items-center gap-3 hover:text-silver transition-colors"><Linkedin size={18} /><span>LinkedIn</span></a>
                <a href="https://www.instagram.com/inigsm/" target="_blank" className="flex items-center gap-3 hover:text-silver transition-colors"><Instagram size={18} /><span>Instagram</span></a>
                <a href="https://www.tiktok.com/@inigsm?is_from_webapp=1&sender_device=pc" target="_blank" className="flex items-center gap-3 hover:text-silver transition-colors">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mt-8">© 2024 John Iñigo Miranda</p>
          </BentoCard>
        </section>

      </main>

      <footer className="w-full py-12 flex justify-center opacity-10 uppercase italic font-black">
         <h2 className="text-[15vw] select-none">MIRANDA</h2>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #050505; scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default App;
