import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Heart, 
  Share2, 
  ExternalLink, 
  Upload, 
  Link as LinkIcon, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Film, 
  Check, 
  Compass, 
  CheckCircle2,
  RefreshCw,
  Eye,
  MessageCircle,
  Radio
} from 'lucide-react';
import { REEL_VIDEOS_DATA } from '../data/academyData';
import { ReelVideoItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface VideoShowcaseSectionProps {
  onOpenApply?: () => void;
}

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ onOpenApply }) => {
  const { language } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  
  // Carousel scroll container ref
  const carouselRef = useRef<HTMLDivElement>(null);

  // Active playing card ID (inline)
  const [activeInlinePlayer, setActiveInlinePlayer] = useState<string | null>(null);

  // Fullscreen Reel Modal state
  const [modalReel, setModalReel] = useState<ReelVideoItem | null>(null);

  // Likes state per reel
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    'reel-01': 1420,
    'reel-02': 950,
    'reel-03': 1230,
    'reel-04': 418
  });

  // Copied link toast notification
  const [copiedReelId, setCopiedReelId] = useState<string | null>(null);

  // Global sound toggle
  const [isMuted, setIsMuted] = useState(true);

  // Custom MP4 state for VIDEO 04
  const [customMp4Url, setCustomMp4Url] = useState<string>(
    'https://assets.mixkit.co/videos/preview/mixkit-modern-airport-terminal-with-passengers-walking-43306-large.mp4'
  );
  const [customMp4FileName, setCustomMp4FileName] = useState<string>('sample-airport-operations.mp4');
  const [urlInputVal, setUrlInputVal] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [uploadSuccessToast, setUploadSuccessToast] = useState<string | null>(null);

  // Dedicated HTML5 video ref for Card 4
  const mp4VideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isMp4Playing, setIsMp4Playing] = useState(false);
  const [mp4Progress, setMp4Progress] = useState(0);

  // Active filter
  const [activeFilter, setActiveFilter] = useState<'all' | 'instagram' | 'facebook' | 'mp4'>('all');

  const filterTabs = [
    { id: 'all', labelEn: `All Videos (${REEL_VIDEOS_DATA.length})`, labelHi: `सभी वीडियो (${REEL_VIDEOS_DATA.length})` },
    ...(REEL_VIDEOS_DATA.some(v => v.platform === 'instagram') ? [{ id: 'instagram', labelEn: 'Instagram Reel', labelHi: 'इंस्टाग्राम रील' }] : []),
    ...(REEL_VIDEOS_DATA.some(v => v.platform === 'facebook') ? [{ id: 'facebook', labelEn: 'Facebook Reels', labelHi: 'फेसबुक रील्स' }] : []),
    ...(REEL_VIDEOS_DATA.some(v => v.platform === 'mp4') ? [{ id: 'mp4', labelEn: 'Uploadable MP4', labelHi: 'अपलोड करने योग्य MP4' }] : [])
  ];

  const displayedVideos = REEL_VIDEOS_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'instagram') return item.platform === 'instagram';
    if (activeFilter === 'facebook') return item.platform === 'facebook';
    if (activeFilter === 'mp4') return item.platform === 'mp4';
    return true;
  });

  // Carousel navigation
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Like handler
  const handleToggleLike = (reelId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReels((prev) => {
      const isCurrentlyLiked = !!prev[reelId];
      const nextLiked = !isCurrentlyLiked;
      setLikeCounts((counts) => ({
        ...counts,
        [reelId]: (counts[reelId] || 0) + (nextLiked ? 1 : -1)
      }));
      return { ...prev, [reelId]: nextLiked };
    });
  };

  // Share handler
  const handleShare = (video: ReelVideoItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = video.platform === 'mp4' ? window.location.href : video.url;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedReelId(video.id);
      setTimeout(() => setCopiedReelId(null), 2500);
    });
  };

  // File upload for Video 04
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setCustomMp4Url(blobUrl);
      setCustomMp4FileName(file.name);
      setUploadSuccessToast(language === 'hi' ? `फ़ाइल लोड हुई: ${file.name}` : `Connected: ${file.name}`);
      setTimeout(() => setUploadSuccessToast(null), 3500);
      setActiveInlinePlayer('reel-04');
      setIsMp4Playing(true);
      if (mp4VideoRef.current) {
        mp4VideoRef.current.src = blobUrl;
        mp4VideoRef.current.play().catch(() => {});
      }
    }
  };

  // URL connect for Video 04
  const handleConnectUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInputVal.trim()) return;
    setCustomMp4Url(urlInputVal.trim());
    setCustomMp4FileName('Connected Online Stream');
    setShowUrlInput(false);
    setUrlInputVal('');
    setUploadSuccessToast(language === 'hi' ? 'वीडियो URL कनेक्ट हो गया!' : 'Video URL Connected Successfully!');
    setTimeout(() => setUploadSuccessToast(null), 3500);
    setActiveInlinePlayer('reel-04');
    setIsMp4Playing(true);
    if (mp4VideoRef.current) {
      mp4VideoRef.current.src = urlInputVal.trim();
      mp4VideoRef.current.play().catch(() => {});
    }
  };

  // Reset to default sample
  const handleResetSample = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultUrl = 'https://assets.mixkit.co/videos/preview/mixkit-modern-airport-terminal-with-passengers-walking-43306-large.mp4';
    setCustomMp4Url(defaultUrl);
    setCustomMp4FileName('sample-airport-operations.mp4');
    setUploadSuccessToast(language === 'hi' ? 'डिफ़ॉल्ट सैंपल लोड हुआ' : 'Loaded Default Airport Reel');
    setTimeout(() => setUploadSuccessToast(null), 3000);
  };

  // Toggle MP4 Play/Pause
  const toggleMp4Play = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (mp4VideoRef.current) {
      if (mp4VideoRef.current.paused) {
        mp4VideoRef.current.play();
        setIsMp4Playing(true);
      } else {
        mp4VideoRef.current.pause();
        setIsMp4Playing(false);
      }
    }
  };

  // Track MP4 video time update
  const handleTimeUpdate = () => {
    if (mp4VideoRef.current && mp4VideoRef.current.duration) {
      const progress = (mp4VideoRef.current.currentTime / mp4VideoRef.current.duration) * 100;
      setMp4Progress(progress);
    }
  };

  // Lock body scroll when fullscreen modal open
  useEffect(() => {
    if (modalReel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalReel]);

  return (
    <section 
      ref={sectionRef}
      id="video-showcase" 
      className="py-20 bg-slate-900 text-white relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Decorative Mesh & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Exact User Request */}
        <div className={`text-center max-w-3xl mx-auto space-y-3 mb-10 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>{language === 'hi' ? 'वीडियो शोकेस' : 'Video Showcase'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-slate-300 font-normal">Reel Carousel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Watch Our Latest Videos
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-medium">
            Creative Ideas. Powerful Stories. Real Results.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {language === 'hi'
              ? 'STPI देवघर केंद्र में आयोजित प्रायोगिक प्रशिक्षण, साक्षात्कार सिमुलेशन एवं पूर्व छात्रों के व्यावहारिक वीडियो देखें।'
              : 'Experience immersive student transformations, mock airport drills, and real classroom highlights captured live at STPI Deoghar.'}
          </p>
        </div>

        {/* Filter Controls & Carousel Controls */}
        <div className={`flex flex-wrap items-center justify-between gap-4 mb-8 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up animation-delay-100 opacity-100' : 'opacity-0 translate-y-6'
        }`}>
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700/80 backdrop-blur-sm">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                  }`}
                >
                  {language === 'hi' ? tab.labelHi : tab.labelEn}
                </button>
              );
            })}
          </div>

          {/* Quick Sound Toggle & Carousel Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? "Unmute sound" : "Mute sound"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'hi' ? 'म्यूट' : 'Muted'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'hi' ? 'आवाज़ ऑन' : 'Sound On'}</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Toast for Link Copied / File Uploaded */}
        {copiedReelId && (
          <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>Link copied to clipboard!</span>
          </div>
        )}
        {uploadSuccessToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-fade-in-up">
            <CheckCircle2 className="w-4 h-4" />
            <span>{uploadSuccessToast}</span>
          </div>
        )}

        {/* Premium Vertical Reel-style Carousel */}
        <div 
          ref={carouselRef}
          className={`flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar ${
            displayedVideos.length <= 2 ? 'justify-start md:justify-center' : 'justify-start'
          }`}
        >
          {displayedVideos.map((video, index) => {
            const isLiked = !!likedReels[video.id];
            const currentLikes = likeCounts[video.id] || 0;
            const isPlayingInline = activeInlinePlayer === video.id;

            return (
              <div
                key={video.id}
                className="shrink-0 w-[290px] sm:w-[320px] md:w-[335px] snap-center group relative flex flex-col"
              >
                {/* Smartphone Reel Container (9:16 Aspect Ratio) */}
                <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-slate-950 border-2 border-slate-800 shadow-2xl shadow-black/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
                  
                  {/* Glowing Top Frame Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 opacity-80 z-20" />

                  {/* Top Status Bar: Card Number, Platform & Live Indicator */}
                  <div className="relative z-20 p-3.5 flex items-center justify-between text-xs bg-gradient-to-b from-black/80 via-black/40 to-transparent">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[11px] tracking-wider px-2 py-0.5 rounded-md bg-blue-600/90 text-white uppercase shadow-sm">
                        {video.cardNumber}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-200 drop-shadow">
                        {video.platformLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/80 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        REEL
                      </span>
                      <button
                        type="button"
                        onClick={() => setModalReel(video)}
                        className="p-1 rounded-md bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Expand Full Reel"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Main Video / Poster Screen Area */}
                  <div className="absolute inset-0 z-0">
                    {/* If inline playback is active */}
                    {isPlayingInline ? (
                      video.platform === 'mp4' ? (
                        <div className="w-full h-full relative bg-black">
                          <video
                            ref={mp4VideoRef}
                            src={customMp4Url}
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            onTimeUpdate={handleTimeUpdate}
                            className="w-full h-full object-cover"
                            onClick={() => toggleMp4Play()}
                          />
                          {/* Progress Scrubber */}
                          <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-800">
                            <div 
                              className="h-full bg-blue-500 transition-all"
                              style={{ width: `${mp4Progress}%` }}
                            />
                          </div>
                        </div>
                      ) : video.embedUrl ? (
                        <div className="w-full h-full bg-black relative">
                          <iframe
                            src={video.embedUrl}
                            title={video.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                          {/* Close inline embed button */}
                          <button
                            type="button"
                            onClick={() => setActiveInlinePlayer(null)}
                            className="absolute top-12 right-3 z-30 p-1.5 rounded-full bg-black/80 text-white hover:bg-red-600 transition-colors cursor-pointer shadow-lg"
                            title="Close Player"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : null
                    ) : (
                      /* Poster Image with Subtle Zoom on Hover */
                      <div className="w-full h-full relative overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-105 group-hover:scale-105 will-change-transform filter brightness-90 group-hover:brightness-95"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        
                        {/* Big Interactive Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveInlinePlayer(video.id);
                              if (video.platform === 'mp4') {
                                setIsMp4Playing(true);
                              }
                            }}
                            className="pointer-events-auto w-14 h-14 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/50 transform group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-xs ring-4 ring-white/20"
                            title="Play Reel"
                            aria-label={`Play ${video.title}`}
                          >
                            <Play className="w-6 h-6 fill-white ml-1" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right-Side Floating Reel Action Column (Reel Style) */}
                  <div className="relative z-20 self-end pr-3.5 pb-20 flex flex-col items-center gap-4">
                    {/* Like Button */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleLike(video.id, e)}
                      className="flex flex-col items-center group/btn cursor-pointer"
                      title="Like Reel"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isLiked 
                          ? 'bg-rose-600 text-white scale-110' 
                          : 'bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm'
                      }`}>
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-white text-white' : 'text-white'}`} />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1 drop-shadow">
                        {currentLikes}
                      </span>
                    </button>

                    {/* Share Button */}
                    <button
                      type="button"
                      onClick={(e) => handleShare(video, e)}
                      className="flex flex-col items-center group/btn cursor-pointer"
                      title="Share / Copy Link"
                    >
                      <div className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1 drop-shadow">
                        Share
                      </span>
                    </button>

                    {/* Direct Social Link */}
                    {video.platform !== 'mp4' && (
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group/btn cursor-pointer"
                        title={`Open on ${video.platform === 'instagram' ? 'Instagram' : 'Facebook'}`}
                      >
                        <div className="w-10 h-10 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-200 mt-1 drop-shadow">
                          {video.platform === 'instagram' ? 'Insta' : 'FB'}
                        </span>
                      </a>
                    )}

                    {/* Sound Mute Toggle for this card */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>

                  {/* Bottom Glassmorphic Overlay: User Handle, Title, Caption & Tags */}
                  <div className="relative z-20 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-6">
                    {/* User profile & Audio Ticker */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-[10px] text-white ring-2 ring-white/30">
                        VFS
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white tracking-tight drop-shadow">
                          @vfsglobal_deoghar
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-blue-400 text-slate-950" />
                      </div>
                    </div>

                    {/* Reel Headline & Subtitle */}
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow mb-1">
                      {video.subtitle}
                    </h3>

                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-2 font-normal drop-shadow-sm">
                      {video.description}
                    </p>

                    {/* Audio track indicator */}
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300 bg-white/10 rounded-full px-2.5 py-0.5 w-fit backdrop-blur-xs mb-2">
                      <Radio className="w-3 h-3 text-pink-400 animate-pulse" />
                      <span className="truncate max-w-[190px]">VFS Global Academy • Original Audio</span>
                    </div>

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1">
                      {video.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] text-blue-300 font-semibold drop-shadow">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card 4 Dedicated Upload & Connect UI Controls */}
                {video.isUploadable && (
                  <div className="mt-3 bg-slate-800/80 rounded-2xl p-3 border border-slate-700/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200 flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{language === 'hi' ? 'कस्टम वीडियो अपलोड / लिंक' : 'Upload or Connect MP4'}</span>
                      </span>
                      <button
                        type="button"
                        onClick={handleResetSample}
                        className="text-[10px] text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer font-medium"
                        title="Reload sample video"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Sample</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-snug">
                      Active: <span className="text-emerald-400 font-mono truncate">{customMp4FileName}</span>
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {/* File Upload Button */}
                      <label className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold cursor-pointer transition-colors text-center">
                        <Upload className="w-3 h-3" />
                        <span>{language === 'hi' ? 'फाइल चुनें' : 'Upload MP4'}</span>
                        <input
                          type="file"
                          accept="video/mp4,video/webm,video/quicktime"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>

                      {/* Paste URL Button */}
                      <button
                        type="button"
                        onClick={() => setShowUrlInput(!showUrlInput)}
                        className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-[11px] font-bold cursor-pointer transition-colors"
                      >
                        <LinkIcon className="w-3 h-3" />
                        <span>{language === 'hi' ? 'URL पेस्ट करें' : 'Paste URL'}</span>
                      </button>
                    </div>

                    {/* URL Input Form Drawer */}
                    {showUrlInput && (
                      <form onSubmit={handleConnectUrl} className="pt-2 flex gap-1.5">
                        <input
                          type="url"
                          placeholder="https://.../video.mp4"
                          value={urlInputVal}
                          onChange={(e) => setUrlInputVal(e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                        >
                          Connect
                        </button>
                      </form>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar & Quick Admission Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              {language === 'hi'
                ? 'सभी वीडियो वीएफएस ग्लोबल अकादमी, एसटीपीआई देवघर परिसर में प्रामाणिक रूप से फिल्माए गए हैं।'
                : 'All video reels are authentically recorded at VFS Global Academy, STPI Deoghar Campus.'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#success-stories"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>{language === 'hi' ? 'पूर्व छात्रों की सफलता गाथाएं देखें' : 'View Alumni Success Stories'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {onOpenApply && (
              <button
                type="button"
                onClick={onOpenApply}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors cursor-pointer"
              >
                {language === 'hi' ? 'प्रवेश हेतु आवेदन करें' : 'Apply For Admission'}
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Fullscreen Vertical Reel Modal (Instagram / TikTok Style) */}
      {modalReel && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 animate-fade-in-up"
          onClick={() => setModalReel(null)}
        >
          {/* Modal Close Button */}
          <button
            type="button"
            onClick={() => setModalReel(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer shadow-xl"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Vertical Player Container */}
          <div 
            className="relative w-full max-w-[420px] h-full sm:h-[88vh] rounded-none sm:rounded-3xl overflow-hidden bg-slate-950 border-0 sm:border-2 sm:border-slate-800 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="relative z-30 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white uppercase">
                  {modalReel.cardNumber}
                </span>
                <span className="text-xs font-semibold text-white">
                  {modalReel.platformLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

            {/* Video Player in Modal */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
              {modalReel.platform === 'mp4' ? (
                <video
                  ref={modalVideoRef}
                  src={customMp4Url}
                  autoPlay
                  controls
                  loop
                  muted={isMuted}
                  className="w-full h-full object-contain"
                />
              ) : modalReel.embedUrl ? (
                <iframe
                  src={modalReel.embedUrl}
                  title={modalReel.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={modalReel.thumbnail}
                    alt={modalReel.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <a
                      href={modalReel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-2xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch on {modalReel.platform === 'instagram' ? 'Instagram' : 'Facebook'}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-30 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
              <h4 className="text-base font-bold text-white mb-1">
                {modalReel.subtitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {modalReel.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {modalReel.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-blue-400 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                {modalReel.platform !== 'mp4' && (
                  <a
                    href={modalReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                  >
                    <span>Open Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
