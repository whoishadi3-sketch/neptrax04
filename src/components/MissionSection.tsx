import {
  Globe,
  User,
  Search,
  TrendingUp,
  Megaphone,
  Briefcase,
  Zap,
  Beaker,
  Archive,
  PackageCheck,
  Focus,
  MessagesSquare,
  ClipboardList
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function MissionSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Website',
      description: 'Professional sites that showcase your services and convert visitors into customers.',
      image: '/portfolio/wildebrands.png',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Stand out with a stunning portfolio that highlights your work and personal brand.',
      image: '/portfolio/rothys.png',
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'Optimize every element to rank higher and attract the right audience organically.',
      image: '/portfolio/sweeten.png',
    },
    {
      icon: TrendingUp,
      title: 'SEO Audit & Strategy',
      description: 'Deep analysis and actionable insights to dominate search results in your niche.',
      image: '/portfolio/jeton.png',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'High-converting landing pages designed to capture leads and drive sales.',
      image: '/portfolio/sono.png',
    },
    {
      icon: Globe,
      title: 'Brand Endorsement',
      description: 'Build trust and credibility with a digital presence that speaks to your values.',
      image: '/portfolio/sweeten.png',
    },
  ];

  const benefits = [
    {
      title: 'Local Expertise',
      description: 'We know Canada\'s major markets thoroughly, understanding their unique business requirements.',
    },
    {
      title: 'Proven Results',
      description: 'Our clients have seen real success in website traffic, potential leads, and yearly revenue.',
    },
    {
      title: 'Customized Solutions',
      description: 'We create personalized strategies because we think outside the box.',
    },
    {
      title: 'Transparent Communication',
      description: 'You\'ll get clear updates, and we\'ll collaborate every step of the way.',
    },
    {
      title: 'Affordable Excellence',
      description: 'Our competitive pricing ensures you get outstanding value without compromising quality.',
    },
    {
      title: 'Comprehensive Services',
      description: 'We offer everything from web development to social media management.',
    },
  ];

  return (
    <section className="relative bg-[#0f1115] py-24 overflow-hidden">
      {/* Ultra-Premium Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#3b82f6]/10 via-[#8b5cf6]/10 to-transparent rounded-full blur-[180px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal direction="left" delay={0} depth={2}>
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.3)] group backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10">
                  <img
                    src="/portfolio/jeton.png"
                    alt="Jeton Project"
                    className="w-full h-[540px] object-cover transition-all duration-700 group-hover:brightness-110 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                We design experiences that drive results — smarter interfaces,
                seamless journeys and outcomes that speak themselves.
              </h2>

              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 rounded-2xl p-8 mb-8 border border-white/20 shadow-[0_0_40px_rgba(80,70,255,0.2)]">
                <p className="text-white text-lg italic mb-4">
                  "Working with Neptrax was a game-changer. The site looks sharp,
                  runs smooth, and made our online presence feel truly professional."
                </p>
                <p className="text-[#94a3b8] text-sm">
                  — Ethan Fraser, Founder at TechNest
                </p>
              </div>
       
              <div className="grid grid-cols-2 gap-6">
                <ScrollReveal direction="zoom" delay={300}>
                  <div className="relative rounded-xl p-6 text-center overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/10 border border-white/20 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-20"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">92%</div>
                    <div className="text-white/80 text-sm relative z-10">Client Retention</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="zoom" delay={400}>
                  <div className="relative rounded-xl p-6 text-center overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/10 border border-white/20 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-20"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">30+</div>
                    <div className="text-white/80 text-sm relative z-10">
                      Projects Delivered with Excellence
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The existing glass gradient card */}
        <ScrollReveal direction="zoom" delay={400}>
          <div className="relative rounded-2xl p-6 text-center overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 transition-all duration-700 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-30 pointer-events-none"></div>
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb]/30 to-[#8b5cf6]/30 blur-3xl opacity-40"></div>

            <div className="relative z-10">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                30+
              </div>
              <div className="text-[#cbd5e1] text-sm tracking-wide">
                Projects Delivered with Excellence
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Rest of your code unchanged */}
        {/* ... */}
      </div>
    </section>
  );
}
