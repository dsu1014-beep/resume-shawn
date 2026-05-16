/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  Code, 
  TrendingUp, 
  Users, 
  MessageSquare,
  ChevronRight,
  Database,
  BarChart,
  Layout,
  ExternalLink,
  Github,
  Linkedin,
  Monitor,
  ArrowRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const DATA = {
  name: "Shawn Su",
  title: "Product Planner & Tech Executor",
  summary: "我是一個喜歡用「策略」解決問題的專案執行者。數學系的背景讓我對數據有天然的敏感度，比起憑感覺做事，我更傾向於透過分析來找出最有效的執行路徑。",
  contact: {
    mobile: "0935-101-486",
    email: "dsu1014@gmail.com",
    line: "dsu1014",
    address: "新北市林口區"
  },
  traits: ["創造力", "邏輯思考", "策略計畫", "專案管理", "獨立作業", "解決問題"],
  skills: [
    { category: "專案統籌", items: ["計畫執行", "進度控管", "溝通整合", "成本與品質控管", "風險管理"] },
    { category: "數據驅動", items: ["Python", "R", "MATLAB", "C/C#", "Excel 樞紐"] },
    { category: "財務模型", items: ["金融風險評估", "機率統計分析", "模型架設與計算"] },
    { category: "跨域呈現", items: ["PowerPoint 結構化", "影片剪輯", "美編設計"] }
  ],
  experience: [
    {
      company: "愛迪樂有限公司",
      role: "專案助理 / 專案執行",
      period: "2025/08 - 仍在職",
      achievements: [
        { title: "優化課程商業模式", desc: "主導「長照積分課程」模組優化，透過市場調查重塑課綱，成功將單堂平均虧損 3k 轉為穩定獲利 5k。" },
        { title: "大型政府標案運作", desc: "獨立承接並監督逾 270 萬之政府專案，協調四縣市衛生局窗口，活動滿意度維持 90% 以上。" },
        { title: "跨域數位行銷", desc: "活用剪輯與美編技能，獨立產出高質量課程宣傳素材與成果報告，大幅提升審核效率。" }
      ]
    },
    {
      company: "捷招管理顧問",
      role: "招募顧問",
      period: "2024/09 - 2025/03",
      achievements: [
        { title: "RPO 招募流程外包", desc: "直面 LG 等跨國企業，精準剖析用人需求並客製化解決方案，大幅降低企業溝通成本。" },
        { title: "數據化招募策略", desc: "定期監測人才市場供需，產出具備數據支撐的薪酬與徵才建議書。" }
      ]
    },
    {
      company: "教育部數位學伴計畫",
      role: "計畫組 / 帶班老師",
      period: "2019 - 2022",
      achievements: [
        { title: "教學成效分析", desc: "運用 Python 進行教學成效數據化追蹤，向主管提出系統性優化建言。" },
        { title: "臨場調度與控管", desc: "負責活動場控與百人師生秩序管理，具備極高抗壓性與臨場反應能力。" }
      ]
    }
  ],
  education: {
    school: "國立高雄大學",
    major: "應用數學系",
    notable: "高雄市河川汙染統計專題、Python 遊戲開發、個體經濟與財務工程跨域選修。"
  }
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-4xl md:text-6xl font-bold tracking-tighter text-surface-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-brand-500 font-medium tracking-wide"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

import profileImage from './profile.jpg.png';

export default function App() {
  const [theme, setTheme] = useState('theme-apple-dark');
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    document.documentElement.className = theme === 'default' ? '' : theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-surface-50 text-surface-900 selection:bg-brand-500/30 overflow-x-hidden">
      
      {/* Glossy Apple-like Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-surface-50/70 backdrop-blur-2xl border-b border-surface-200/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="font-semibold text-xl tracking-tighter text-surface-900 flex items-center gap-2">
            <span className="font-bold">尚恩.</span>
            <span className="text-[10px] font-mono text-surface-400 uppercase tracking-widest hidden sm:inline border-l border-surface-300 pl-2">Shawn Su</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-surface-600">
            <a href="#about" className="hover:text-surface-900 transition-colors flex items-center gap-1.5"><span className="text-[10px] text-brand-500 font-mono uppercase tracking-wider">Vision</span>理念</a>
            <a href="#experience" className="hover:text-surface-900 transition-colors flex items-center gap-1.5"><span className="text-[10px] text-brand-500 font-mono uppercase tracking-wider">Experience</span>經歷</a>
            <a href="#skills" className="hover:text-surface-900 transition-colors flex items-center gap-1.5"><span className="text-[10px] text-brand-500 font-mono uppercase tracking-wider">Skills</span>能力</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex text-sm font-medium px-4 py-2 bg-surface-900 text-surface-50 hover:bg-brand-500 transition-colors rounded-full items-center gap-2">
              聯繫我 <span className="text-[10px] text-surface-300 font-mono hidden lg:inline pt-0.5">Contact</span>
            </a>

            {/* Theme Picker (Sleek pill) */}
            <div className="flex items-center gap-1 p-1 bg-surface-200/50 rounded-full border border-surface-300 ml-2 backdrop-blur-md transition-colors duration-500">
              <button onClick={() => setTheme('theme-cupertino')} className={`w-6 h-6 rounded-full bg-[#f5f5f7] border border-surface-300 shadow-sm ${theme === 'theme-cupertino' ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-surface-50' : 'opacity-60'} transition-all`} title="Light" />
              <button onClick={() => setTheme('theme-apple-dark')} className={`w-6 h-6 rounded-full bg-[#111] border border-[#333] shadow-sm ${theme === 'theme-apple-dark' ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-surface-50' : 'opacity-60'} transition-all`} title="Dark/Rose Gold" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden">
        {/* Dynamic Glow Backgrounds */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none transition-all duration-1000 ease-in-out"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none transition-all duration-1000 ease-in-out"></div>

        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-500"></span>
                Product Planner & Tech Executor
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] text-surface-900 mb-6 font-primary">
                重新定義 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">專案策略。</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-surface-600 max-w-2xl font-medium tracking-wide mb-10 leading-relaxed"
            >
              您好，我是 <strong className="text-surface-900 font-semibold text-xl">蘇尚恩</strong>。<br className="hidden md:block" />一位專注於將「數據洞察」轉化為「具體執行」的跨域專案經理。
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <a href="#experience" className="px-8 py-4 bg-surface-900 text-surface-50 rounded-full font-medium flex items-center gap-3 hover:scale-105 hover:bg-brand-500 hover:text-white transition-all shadow-lg hover:shadow-brand-500/25">
                深入探索 <ArrowRight size={18} />
              </a>
              <div className="hidden md:flex text-sm text-surface-500 font-mono items-center gap-2 px-4 py-2 bg-surface-200/50 rounded-full border border-surface-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                錄取後兩週可到職
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[3/4] relative rounded-[2.5rem] overflow-hidden bg-surface-200 border border-surface-300 shadow-2xl z-10 group">
              <img 
                src={profileImage} 
                alt="Shawn Su" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 p-4 bg-surface-100/90 backdrop-blur-xl border border-surface-300/50 rounded-2xl shadow-xl flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] text-brand-600 font-mono tracking-widest uppercase mb-1">Focus</p>
                  <p className="text-sm font-bold text-surface-900 leading-tight">數據驅動管理模式</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                  <BarChart size={18} />
                </div>
              </motion.div>
            </div>
            
            {/* Ambient Shadow for Photo */}
            <div className="absolute -inset-4 bg-brand-500/20 rounded-[3rem] blur-3xl -z-10 group-hover:bg-brand-500/30 transition-colors duration-500"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-surface-100 relative">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading subtitle="Philosophy">邏輯驅動執行。</SectionHeading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-loose text-surface-800"
          >
            "數學不只是計算，更是<span className="text-brand-500 px-2">解決問題的維度</span>。當專案陷入迷霧，我相信數據能指出最清晰的方向。"
          </motion.p>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {DATA.traits.slice(0, 4).map((trait, i) => (
              <motion.div 
                key={trait}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-[2rem] bg-surface-50 border border-surface-200/50 text-center hover:bg-surface-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-brand-300 font-mono text-sm mb-3">0{i+1}</div>
                <div className="text-lg md:text-xl font-bold text-surface-900 tracking-tight group-hover:text-brand-600 transition-colors">{trait}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 lg:px-12 bg-surface-50 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border border-surface-200 rounded-full opacity-50 mix-blend-overlay pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading subtitle="Track Record">實戰經歷與影響</SectionHeading>
          
          <div className="space-y-8">
            {DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-surface-100/50 backdrop-blur-sm border border-surface-200/80 rounded-[2.5rem] p-8 md:p-12 hover:bg-surface-100 hover:shadow-2xl hover:shadow-brand-500/5 transition-all duration-500 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-surface-900 mb-2">{exp.company}</h3>
                      <p className="text-lg text-brand-500 font-semibold mb-6 flex items-center gap-2">
                        {exp.role} 
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-300 bg-surface-200/50 text-xs md:text-sm font-mono text-surface-600 w-fit shrink-0 backdrop-blur-md">
                      <Briefcase size={14} /> {exp.period}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8 flex flex-col gap-8 w-full">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex gap-5 items-start">
                        <div className="mt-1 w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200 shadow-sm">
                          <TrendingUp size={14} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-surface-900 mb-2 tracking-tight">{item.title}</h4>
                          <p className="text-surface-600 leading-relaxed max-w-2xl text-base md:text-lg">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Bento Grid */}
      <section id="skills" className="py-32 px-6 lg:px-12 bg-surface-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Expertise">專業技能與軟實力</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Huge card for Project Management */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:row-span-2 p-10 lg:p-14 rounded-[3rem] bg-surface-50 border border-surface-200 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-8 border border-brand-200">
                  <Database size={28} className="text-brand-600" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-surface-900 mb-8 leading-tight">
                  <span className="block text-brand-600 text-lg font-mono mb-2 uppercase tracking-widest">Management</span>
                  專案統籌與執行
                </h3>
                <div className="flex flex-wrap gap-3 max-w-2xl">
                  {DATA.skills[0].items.map(item => (
                    <span key={item} className="px-5 py-2.5 bg-surface-100 text-surface-800 rounded-full text-sm font-medium border border-surface-200 hover:bg-surface-200 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-400/20 to-transparent rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
            </motion.div>

            {/* Data Science / Tech */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[3rem] bg-surface-900 border border-surface-800 text-surface-50 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface-800 flex items-center justify-center mb-8 border border-surface-700">
                <Code size={24} className="text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-8">數據與邏輯思維</h3>
              <ul className="space-y-4">
                {DATA.skills[1].items.map(item => (
                  <li key={item} className="text-surface-300 flex items-center gap-3 text-sm md:text-base font-mono">
                    <span className="w-2 h-2 bg-brand-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Financial Math */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] bg-brand-600 border border-brand-500 text-white hover:scale-[1.02] transition-transform duration-300 flex flex-col relative overflow-hidden"
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center mb-8 border border-brand-400">
                  <Monitor size={24} className="text-brand-50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">財務模型</h3>
                  <p className="text-brand-100 text-sm md:text-base leading-relaxed font-medium">深厚的數理統計與財務模型計算基底，透過模型評估商業風險。</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="contact" className="py-32 lg:py-48 px-6 lg:px-12 bg-surface-900 text-surface-50 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-brand-500/20 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-brand-500"></div>
            <span className="text-brand-500 font-mono text-sm tracking-widest uppercase">Next Step</span>
            <div className="h-px w-12 bg-brand-500"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-b from-surface-50 to-surface-400 leading-tight"
          >
            準備好應對 <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">全新挑戰。</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-surface-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            尋找能將「高度洞察」轉化為「具體產值」的專案執行者？<br className="hidden md:block" />讓我們聊聊未來的可能性。
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-32"
          >
            <a href={`mailto:${DATA.contact.email}`} className="px-10 py-5 bg-surface-50 hover:bg-white text-surface-900 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 shadow-xl shadow-white/5 flex items-center justify-center gap-3">
              <Mail size={20} className="text-brand-600" /> 撰寫信件預約
            </a>
            <a href={`tel:${DATA.contact.mobile}`} className="px-10 py-5 bg-surface-800 hover:bg-surface-700 text-surface-50 rounded-full font-bold text-lg tracking-wide border border-surface-700 transition-all flex items-center justify-center gap-3">
              <Phone size={20} className="text-surface-400" /> {DATA.contact.mobile}
            </a>
          </motion.div>

          <div className="border-t border-surface-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8 text-surface-400 font-mono text-sm uppercase tracking-wider">
               <a href="#" className="hover:text-brand-400 cursor-pointer flex items-center gap-2 transition-colors"><Github size={16} /> Github</a>
               <a href="#" className="hover:text-brand-400 cursor-pointer flex items-center gap-2 transition-colors"><Linkedin size={16} /> LinkedIn</a>
            </div>
            <p className="text-surface-500 text-xs md:text-sm font-medium tracking-widest uppercase">
              © {new Date().getFullYear()} Shawn Su. Crafted with Logic.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}


