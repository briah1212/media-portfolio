
import React, { useState } from 'react';
import Navbar, { PageID } from './components/Navbar';
import PhoneFrame from './components/PhoneFrame';
import YoutubeFrame from './components/YoutubeFrame';
import ChatBot from './components/ChatBot';
import { UGC_VIDEOS, YOUTUBE_VIDEOS, SKILLS, GALLERY_IMAGES, RESUME_EXPERIENCE } from './constants';

const BlueprintMarker = ({ className, label }: { className?: string, label: string }) => (
  <div className={`absolute pointer-events-none hidden md:flex flex-col items-start gap-1 z-0 ${className}`}>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
      <div className="h-[1.5px] w-16 bg-indigo-200"></div>
    </div>
    <span className="text-[11px] font-mono font-bold text-indigo-400 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded uppercase tracking-widest shadow-sm">
      {label}
    </span>
  </div>
);

const MetricBadge = ({ label, value, sub, className = "" }: { label: string, value: string, sub: string, className?: string }) => (
  <div className={`glass p-6 border border-slate-200 flex flex-col gap-2 items-start min-w-[200px] animate-float ux-card-shadow rounded-2xl ${className}`}>
    <span className="text-[11px] font-mono font-bold text-indigo-500 uppercase tracking-[0.2em]">{label}</span>
    <span className="text-4xl font-magilio text-slate-900 leading-none">{value}</span>
    <span className="text-xs text-slate-500 font-medium tracking-wide">{sub}</span>
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageID>('home');

  const Hero = () => (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden bg-white py-12 md:py-16">
      {/* Decorative Blueprint Background - Warm and Personal */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-[10%] left-[5%] text-[15vw] font-magilio -rotate-6">CREATOR</div>
        <div className="absolute bottom-[10%] right-[5%] text-[15vw] font-magilio rotate-6">CONNECT</div>
      </div>

      <div className="max-w-7xl w-full text-center relative z-10 pt-16 md:pt-20">
        <div className="flex justify-center items-center gap-4 mb-6 md:mb-10">
           <div className="badge-ui shadow-sm">Hello, I'm Brian Hsu // Storyteller & Creative Partner</div>
           <div className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
        </div>
        
        <div className="relative mb-8 md:mb-16">
          <h1 className="text-[13vw] md:text-[10rem] lg:text-[12rem] font-bold font-magilio leading-[0.85] text-slate-900 tracking-wider select-none">
            I'M 
            <span className="text-indigo-600"> BRIAN<br /> </span> I TELL <br />
            <span className="text-indigo-600 italic">STORIES.</span>
          </h1>
          
          {/* Responsive Metrics - Controlled positioning to avoid overlap */}
          <div className="hidden xl:block absolute top-0 -right-16 translate-y-12">
            <MetricBadge label="Community Love" value="5M+" sub="Organic Impressions" />
          </div>
          <div className="hidden xl:block absolute bottom-0 -left-16 -translate-y-12">
            <MetricBadge label="Happy Brands" value="200+" sub="Creative Partnerships" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto border-t border-slate-100 pt-10 mt-6">
          <div className="lg:col-span-4 text-left space-y-4 order-2 lg:order-1">
             <div className="flex items-center gap-3">
               <div className="w-12 h-[2px] bg-indigo-100"></div>
               <span className="badge-ui">01 / The Vision</span>
             </div>
             <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
               I don't just "make content." I create <span className="text-slate-900 font-bold italic">meaningful bridges</span> between brand heart and human curiosity.
             </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2">
             <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl border-[1px] border-slate-900 ux-shadow bg-white overflow-hidden relative z-10 p-2 group">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                   <img src="https://picsum.photos/seed/brianarcher_portrait/600/600" alt="Brian Archer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                </div>
                {/* Visual spec lines for personal touch */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-600 m-2"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-600 m-2"></div>
             </div>
             <div className="mt-6 text-center">
               <h4 className="font-magilio text-3xl md:text-4xl text-slate-900 uppercase tracking-widest leading-none">Brian Archer</h4>
               <p className="text-[12px] font-mono text-indigo-500 font-bold uppercase tracking-[0.25em] mt-2">Founder // Creative Strategist</p>
             </div>
          </div>

          <div className="lg:col-span-4 text-right space-y-4 order-3">
             <div className="flex items-center justify-end gap-3">
               <span className="badge-ui">02 / The Philosophy</span>
               <div className="w-12 h-[2px] bg-indigo-100"></div>
             </div>
             <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
               Content that feels like a <span className="text-slate-900 font-bold">handwritten note</span> from a friend—personal, honest, and truly memorable.
             </p>
          </div>
        </div>
      </div>

      {/* Ticker - Slightly taller and more readable */}
      <div className="absolute bottom-0 left-0 w-full ticker-wrap z-20">
        <div className="ticker-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="ticker-item">
              //_PERSONAL_SERVICE //_AUTHENTIC_VOICE //_STRATEGIC_UGC //_BASED_IN_LONDON //_READY_TO_COLAB 
            </span>
          ))}
        </div>
      </div>
    </section>
  );

  const Home = () => (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
        <SectionHeader 
          num="PERSONAL_CATALOG" 
          title="THE WORKS" 
          subtitle="A selection of moments designed to spark conversation. I prioritize the human element in every frame, ensuring your audience feels seen."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24 relative z-10">
          {UGC_VIDEOS.slice(0, 3).map((video) => (
            <PhoneFrame key={video.id} videoUrl={video.url} title={video.title} />
          ))}
        </div>
        <div className="mt-16 md:mt-24 text-center">
          <button 
            onClick={() => setActivePage('portfolio')}
            className="group relative inline-flex items-center gap-6 bg-slate-950 text-white px-10 md:px-12 py-5 md:py-6 rounded-none font-mono font-bold text-[12px] md:text-[14px] tracking-[0.4em] hover:bg-indigo-600 transition-all uppercase shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-6">
              [ EXPLORE_MY_STORY ]
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            num="NARRATIVE_EXPANSION" 
            title="STORIES" 
            subtitle="Deep dives into products and experiences. This is where we build the 'why' behind the 'what' to foster true brand loyalty."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {YOUTUBE_VIDEOS.slice(0, 2).map((video) => (
              <YoutubeFrame key={video.id} videoUrl={video.url} title={video.title} description={video.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeader num="MY_RESOURCES" title="CAPABILITY" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SKILLS.map((skill, i) => (
            <div key={i} className="group p-8 md:p-10 border border-slate-100 hover:border-indigo-500 hover:bg-white transition-all cursor-default relative ux-card-shadow rounded-3xl">
               <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                  <span className="text-[12px] font-mono text-indigo-300 font-bold">#00{i+1}</span>
               </div>
               <h4 className="font-bold text-slate-900 text-2xl md:text-3xl uppercase tracking-wider leading-none mb-4">{skill.name}</h4>
               <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">Built through years of genuine creative exploration.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const About = () => (
    <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        <div className="lg:col-span-8">
          <SectionHeader num="THE_CREATOR" title="I AM BRIAN." subtitle="Creative by heart, strategist by trade, and collaborator by nature." />
          <div className="space-y-8 md:space-y-12 text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] font-light tracking-tight">
            <p className="font-medium">
              I believe the most powerful marketing tool isn't a camera—it's <span className="text-indigo-600 underline decoration-6 underline-offset-[12px] italic">honesty</span>.
            </p>
            <p className="text-slate-500 leading-snug">
              My job is to find the soul of your brand and present it in a way that makes someone stop, breathe, and actually listen. I care about the tiny details that make a story feel real.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-12 md:pt-20 border-t border-slate-100">
              <div className="space-y-4">
                <h4 className="badge-ui">The Human Connection</h4>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-normal">Every video starts with a genuine curiosity before it ever touches a spreadsheet.</p>
              </div>
              <div className="space-y-4">
                <h4 className="badge-ui">Intentional Craft</h4>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-normal">I bring a high-end cinematic lens to personal storytelling, creating prestige without losing the punch.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
           <div className="sticky top-32">
             <div className="bg-slate-50 border border-slate-200 p-8 md:p-10 rounded-3xl relative overflow-hidden ux-card-shadow">
                <h3 className="text-xl md:text-2xl font-magilio font-bold mb-8 border-b border-slate-200 pb-4 uppercase tracking-wider">Path</h3>
                <div className="space-y-10">
                  {RESUME_EXPERIENCE.map((exp, i) => (
                    <div key={i} className="group relative">
                      <div className="flex flex-col gap-2">
                        <span className="text-[12px] font-mono text-indigo-500 font-bold tracking-[0.25em]">{exp.period}</span>
                        <h4 className="font-bold text-slate-900 text-xl md:text-2xl tracking-wider uppercase leading-none">{exp.company}</h4>
                        <p className="text-sm md:text-base text-slate-400 font-bold italic mb-1">{exp.title}</p>
                        <p className="text-base text-slate-600 leading-relaxed font-medium">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto animate-in fade-in duration-1000">
      <SectionHeader num="VERTICAL_WORKS" title="THE FEED" subtitle="Moments created specifically for the mobile-first generation. Focused on trust and authentic human expression." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-32 justify-items-center mb-24 md:mb-32">
        {UGC_VIDEOS.map(video => (
          <PhoneFrame key={video.id} videoUrl={video.url} title={video.title} />
        ))}
      </div>
      <div className="h-[2.5px] w-full bg-slate-100 mb-24 md:mb-32 rounded-full"></div>
      <SectionHeader num="HORIZONTAL_WORKS" title="CINEMA" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {YOUTUBE_VIDEOS.map(video => (
          <YoutubeFrame key={video.id} videoUrl={video.url} title={video.title} description={video.description} />
        ))}
      </div>
    </div>
  );

  const Contact = () => (
    <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="space-y-10">
          <SectionHeader num="START_A_DIALOGUE" title="SAY HI." />
          <p className="text-4xl md:text-6xl text-slate-900 leading-[1] font-bold tracking-tight max-w-xl">
            LET'S MAKE <br/> SOMETHING <br/> <span className="text-indigo-600 underline decoration-8 underline-offset-8 italic">REAL</span> TOGETHER.
          </p>
          <div className="pt-8 space-y-12 md:space-y-16">
            <div className="group transition-transform hover:translate-x-4 duration-500">
              <span className="badge-ui !border-none !p-0 !bg-transparent mb-4 block">Direct Message</span>
              <h4 className="text-4xl md:text-6xl lg:text-7xl font-magilio text-slate-900 group-hover:text-indigo-600 transition-colors break-all leading-none uppercase tracking-wider">HELLO@BRIAN.STUDIO</h4>
            </div>
            <div className="group transition-transform hover:translate-x-4 duration-500">
              <span className="badge-ui !border-none !p-0 !bg-transparent mb-4 block">The Lab</span>
              <h4 className="text-4xl md:text-6xl lg:text-7xl font-magilio text-slate-900 group-hover:text-indigo-600 transition-colors leading-none uppercase tracking-wider">@BRIAN_CREATES</h4>
            </div>
          </div>
        </div>
        <div className="bg-white border-[8px] border-slate-900 p-8 md:p-12 relative shadow-[20px_20px_0px_rgba(99,102,241,0.08)] rounded-none md:rounded-[3rem]">
           <form className="space-y-8 md:space-y-12" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[12px] font-mono uppercase font-bold text-slate-400 tracking-[0.25em]">01_Who are you?</label>
                <input type="text" className="w-full text-2xl md:text-3xl font-light border-b-2 border-slate-100 outline-none focus:border-indigo-600 transition-colors py-3 bg-transparent placeholder:opacity-10 font-magilio tracking-wider" placeholder="YOUR NAME" />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-mono uppercase font-bold text-slate-400 tracking-[0.25em]">02_The Brand</label>
                <input type="text" className="w-full text-2xl md:text-3xl font-light border-b-2 border-slate-100 outline-none focus:border-indigo-600 transition-colors py-3 bg-transparent placeholder:opacity-10 font-magilio tracking-wider" placeholder="WHAT DO YOU DO?" />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-mono uppercase font-bold text-slate-400 tracking-[0.25em]">03_The Dream</label>
                <textarea rows={2} className="w-full text-2xl md:text-3xl font-light border-b-2 border-slate-100 outline-none focus:border-indigo-600 transition-colors py-3 bg-transparent resize-none placeholder:opacity-10 font-magilio tracking-wider" placeholder="WHAT SHALL WE BUILD?"></textarea>
              </div>
              <button className="w-full bg-slate-950 text-white py-6 md:py-8 font-mono font-bold tracking-[0.5em] text-[12px] md:text-[14px] hover:bg-indigo-600 transition-all uppercase shadow-xl">
                / START THE JOURNEY
              </button>
           </form>
        </div>
      </div>
    </div>
  );

  const Pictures = () => (
    <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto animate-in fade-in duration-1000">
      <SectionHeader num="MOMENTS_CAPTURED" title="GALLERY" subtitle="A visual diary of my creative process, lighting studies, and the beauty in the everyday." />
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {GALLERY_IMAGES.map((img, i) => (
          <div key={i} className="group relative overflow-hidden grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-1000 border border-slate-200 p-3 bg-white rounded-2xl ux-card-shadow">
            <img src={img} alt={`Gallery ${i}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-[2s] rounded-xl" />
            <div className="p-4 flex justify-between items-center text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
               <span>FRAME_0{i+1}</span>
               <span className="badge-ui !bg-transparent !border-slate-100 !text-slate-300">CURATED_VIEW</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activePage) {
      case 'home': return <Home />;
      case 'portfolio': return <PortfolioPage />;
      case 'about': return <About />;
      case 'pictures': return <Pictures />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main>
        {renderContent()}
      </main>
      
      <footer className="py-16 md:py-24 bg-white border-t border-slate-100 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="font-magilio text-6xl md:text-[10rem] text-slate-900 mb-8 md:mb-12 tracking-wider uppercase leading-none select-none">BRIAN HSU</div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[12px] font-mono font-bold tracking-[0.35em] text-slate-400 uppercase">
            <span className="hover:text-indigo-600 transition-colors cursor-default">UGC_CREATOR</span>
            <span className="hover:text-indigo-600 transition-colors cursor-default">STORYTELLER</span>
            <span className="hover:text-indigo-600 transition-colors cursor-default">STRATEGIST</span>
            <span className="hover:text-indigo-600 transition-colors cursor-default">HUMAN</span>
          </div>
          <div className="mt-16 md:mt-24 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono text-slate-300 font-bold uppercase tracking-widest">
             <span>© 2025 BRIAN HSU STUDIO</span>
             <span className="bg-indigo-50 px-6 py-2 text-indigo-400 rounded-full">Storytelling with intent</span>
             <span>LONDON_UK // GLOBAL_MIND</span>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

const SectionHeader = ({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) => (
  <div className="mb-12 md:mb-16 text-left relative z-10">
    <div className="flex items-baseline gap-5 mb-6">
      <span className="text-sm font-mono font-bold text-indigo-500 tracking-[0.3em] uppercase">{num}</span>
      <div className="h-[2px] flex-1 bg-slate-100 rounded-full"></div>
    </div>
    <h2 className="text-6xl md:text-[8rem] font-bold font-magilio leading-[0.85] text-slate-900 tracking-wider uppercase">{title}</h2>
    {subtitle && (
      <div className="mt-8 md:mt-12 flex gap-6 md:gap-10 items-start max-w-4xl">
        <div className="w-2 h-16 bg-indigo-600 shrink-0 rounded-full"></div>
        <p className="text-xl md:text-3xl text-slate-500 font-light leading-snug tracking-tight">{subtitle}</p>
      </div>
    )}
  </div>
);

export default App;
