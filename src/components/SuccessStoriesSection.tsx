import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Filter
} from 'lucide-react';
import { SUCCESS_STORIES_DATA } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SuccessStoriesSectionProps {
  onOpenApply?: () => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ onOpenApply }) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const categories = [
    { id: 'all', labelEn: 'All Industries', labelHi: 'सभी क्षेत्र' },
    { id: 'Aviation', labelEn: 'Airlines & Airports', labelHi: 'एयरलाइंस व एयरपोर्ट' },
    { id: 'Hospitality', labelEn: 'Luxury Hospitality', labelHi: 'हॉस्पिटैलिटी व होटल्स' },
    { id: 'Visa & Consular', labelEn: 'Visa & Consular Services', labelHi: 'वीजा व कॉन्स्युलर सेवाएं' },
    { id: 'Travel & Tourism', labelEn: 'Travel & Tourism', labelHi: 'पर्यटन व ट्रेवल' }
  ];

  const filteredStories = selectedCategory === 'all'
    ? SUCCESS_STORIES_DATA
    : SUCCESS_STORIES_DATA.filter((story) => story.category === selectedCategory);

  return (
    <section 
      ref={sectionRef}
      id="success-stories" 
      className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-200 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with subtle fade-in-up */}
        <div className={`text-center max-w-3xl mx-auto space-y-3 mb-12 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.successStoriesTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.successStoriesTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t.successStoriesSubtitle}
          </p>
        </div>

        {/* Category Filters with subtle fade-in-up */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-12 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up animation-delay-100 opacity-100' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 hidden sm:flex">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'फ़िल्टर:' : 'Filter:'}</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-600/30 dark:ring-blue-400/30'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {language === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Success Stories / Case Study Snapshots Grid with staggered subtle fade-in-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((item, index) => (
            <div
              key={`${item.id}-${selectedCategory}`}
              style={{ animationDelay: `${index * 80 + 150}ms` }}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group relative overflow-hidden ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Card Header: Company & Verified Outcome Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-bold tracking-tight">{item.company}</span>
                  </span>
                  
                  {item.keyMetric && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 whitespace-nowrap">
                      {item.keyMetric}
                    </span>
                  )}
                </div>

                {/* Role and Placement Location */}
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {language === 'hi' ? 'वर्तमान पद व संस्थान' : 'Current Role & Placement'}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5">
                    {item.currentRole}
                  </h3>
                  {item.location && (
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Case Study Snapshot: Challenge -> STPI Training -> Career Outcome */}
                <div className="space-y-2 text-xs pt-1">
                  {/* Challenge */}
                  <div className="bg-amber-50/70 dark:bg-amber-950/25 rounded-xl p-2.5 border border-amber-200/50 dark:border-amber-900/40">
                    <span className="font-bold text-amber-900 dark:text-amber-400 block text-[11px] mb-0.5">
                      {language === 'hi' ? 'प्रारंभिक चुनौती:' : 'Initial Starting Point:'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  {/* STPI Transformation */}
                  <div className="bg-blue-50/60 dark:bg-blue-950/25 rounded-xl p-2.5 border border-blue-200/50 dark:border-blue-900/40">
                    <span className="font-bold text-blue-900 dark:text-blue-300 block text-[11px] mb-0.5">
                      {language === 'hi' ? 'अकादमी में प्रशिक्षण:' : 'STPI Deoghar Mentorship:'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.transformation}
                    </p>
                  </div>

                  {/* Current Outcome */}
                  <div className="bg-emerald-50/70 dark:bg-emerald-950/25 rounded-xl p-2.5 border border-emerald-200/50 dark:border-emerald-900/40">
                    <div className="flex items-center gap-1 font-bold text-emerald-900 dark:text-emerald-300 text-[11px] mb-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{language === 'hi' ? 'करियर उपलब्धि व प्रभाव:' : 'Current Role & Impact:'}</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      {item.currentImpact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Metadata Footer (matching Testimonials layout) */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${item.avatarBg || 'bg-blue-600 text-white'} flex items-center justify-center font-bold text-sm shadow-sm shrink-0`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {item.course}
                    </p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      {item.batch}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-1">
                    {language === 'hi' ? 'प्रमाणित पूर्व छात्र' : 'STPI Deoghar Alum'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
