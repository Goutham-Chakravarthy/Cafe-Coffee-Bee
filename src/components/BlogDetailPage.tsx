import React, {useState, useEffect} from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Bookmark,
  Share2,
  Compass,
  Droplets,
  CheckCircle2,
  Flower2,
} from 'lucide-react';
import {
  BlogArticle,
  LEAD_DISPATCH,
  DISPATCH_ESSAYS,
  IMAGES,
  PageId,
} from '../data/cafeData';
import {ResilientImage} from './ResilientImage';

interface BlogDetailPageProps {
  article: BlogArticle;
  onBackToBlogs: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenExperience: () => void;
  onShowToast: (message: string) => void;
}

interface FieldNote {
  id: string;
  author: string;
  date: string;
  note: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  article,
  onBackToBlogs,
  onSelectArticle,
  onOpenExperience,
  onShowToast,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);

  const [reflectionName, setReflectionName] = useState('');
  const [reflectionEmail, setReflectionEmail] = useState('');
  const [reflectionBody, setReflectionBody] = useState('');
  const [reflectionError, setReflectionError] = useState('');
  const [fieldNotes, setFieldNotes] = useState<FieldNote[]>([
    {
      id: 'fn-1',
      author: 'Dr. Kavitha Shetty · Coffee Botanist, Mysuru',
      date: 'March 22, 2025',
      note: 'Fascinating correlation between the 5:45 AM mist foraging window and linalool retention. We observed similar high trehalulose peaks in shaded Coorg estates.',
    },
  ]);

  // Reset audio and scroll to top when article changes
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setIsPlayingAudio(false);
    setAudioProgress(0);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article.id]);

  // Simulated audio progress bar when listening
  useEffect(() => {
    if (!isPlayingAudio) return;
    const timer = window.setInterval(() => {
      setAudioProgress((prev) => {
        if (prev >= 100) {
          setIsPlayingAudio(false);
          return 0;
        }
        return prev + 1;
      });
    }, 350);
    return () => window.clearInterval(timer);
  }, [isPlayingAudio]);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${article.title} ${article.titleHighlight} ${article.titleEnd}. ${article.deck} ${article.section1.paragraphs[0]}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleBookmark = () => {
    const next = !isBookmarked;
    setIsBookmarked(next);
    onShowToast(
      next
        ? `Saved "${article.title}" to your reading list`
        : 'Removed dispatch from saved list'
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(
          `${article.title} ${article.titleHighlight} ${article.titleEnd} — Cafe Coffee Bee, Kalasa`
        )
        .catch(() => {});
    }
    onShowToast('Dispatch link & citation copied to clipboard');
  };

  const handlePostReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflectionName.trim() || !reflectionBody.trim()) {
      setReflectionError('Please include your name or credential and your field note.');
      return;
    }
    setReflectionError('');
    setFieldNotes((prev) => [
      {
        id: `fn-${Date.now()}`,
        author: reflectionName.trim(),
        date: 'Just now',
        note: reflectionBody.trim(),
      },
      ...prev,
    ]);
    setReflectionName('');
    setReflectionEmail('');
    setReflectionBody('');
    onShowToast('Your field reflection has been added to the discussion');
  };

  // Build related studies (3 other articles)
  const allPool = [LEAD_DISPATCH, ...DISPATCH_ESSAYS];
  const relatedArticles = allPool
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  // Radar SVG geometry (5 axes)
  const axes = article.section3.radarAxes;
  const cx = 130;
  const cy = 122;
  const maxR = 76;

  const getPoint = (index: number, score: number) => {
    const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2;
    const r = (score / 100) * maxR;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  const polygonPoints = axes
    .map((axis, idx) => {
      const pt = getPoint(idx, axis.score);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  return (
    <div className="bg-[#F5F0E5]">
      {/* 1. SUB-HEADER BREADCRUMB BAR */}
      <div className="border-b border-[#D8C8AE] bg-[#FAF8F0]/75">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#594132]">
            <button
              type="button"
              onClick={onBackToBlogs}
              className="inline-flex items-center gap-1.5 font-semibold text-[#38291F] hover:text-[#7D5700] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Dispatches</span>
            </button>
            <span className="text-[#D8C8AE]" aria-hidden="true">
              |
            </span>
            <span className="font-medium text-[#594132]">
              {article.volume} · {article.studyTitle}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.08em] uppercase text-[#526447]">
            {article.tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {i < article.tags.length - 1 && (
                  <span className="text-[#D8C8AE]" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN EDITORIAL CONTAINER */}
      <article className="max-w-[920px] mx-auto px-4 sm:px-6 pt-10 pb-16">
        {/* Header Metadata & Title */}
        <header className="space-y-5 mb-8">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#7D5700]">
            {article.kicker} · Published {article.published}
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl leading-[1.12] tracking-tight text-[#38291F]">
            {article.title}{' '}
            <span className="italic font-normal text-[#B96D35]">
              {article.titleHighlight}
            </span>{' '}
            {article.titleEnd}
          </h1>

          <p className="text-base sm:text-lg text-[#594132] leading-relaxed">
            {article.deck}
          </p>

          {/* Author & Audio/Utility Bar */}
          <div className="pt-4 border-t border-[#D8C8AE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2 shrink-0">
                <ResilientImage
                  src={IMAGES.farmerHarvest}
                  alt="Naveen Hegde"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FAF8F0]"
                />
                <ResilientImage
                  src={IMAGES.planterApiarist}
                  alt="Chandrashekar Gowda"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FAF8F0]"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#38291F]">
                  {article.author}
                </p>
                <p className="text-[11px] text-[#594132]">{article.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`inline-flex items-center gap-2 h-9 px-3.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                  isPlayingAudio
                    ? 'bg-[#D9A441] text-[#241A15]'
                    : 'bg-[#263F2C] text-[#FAF8F0] hover:bg-[#526447]'
                }`}
              >
                {isPlayingAudio ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
                <span className="tabular-nums">
                  {isPlayingAudio
                    ? `Playing (${audioProgress}%)`
                    : `Listen to Dispatch (${article.audioDuration})`}
                </span>
              </button>

              <button
                type="button"
                onClick={handleBookmark}
                aria-label="Bookmark dispatch"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center cursor-pointer transition-colors ${
                  isBookmarked
                    ? 'bg-[#D9A441] border-[#D9A441] text-[#241A15]'
                    : 'bg-[#FAF8F0] border-[#D8C8AE] text-[#38291F] hover:bg-[#E5D3A9]/50'
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-[#241A15]' : ''}`}
                />
              </button>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share dispatch"
                className="w-9 h-9 rounded-xl border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] flex items-center justify-center cursor-pointer hover:bg-[#E5D3A9]/50 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* 3. 4-COLUMN TELEMETRY METRICS STRIP */}
        {article.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {article.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 shadow-warm"
              >
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#594132]/80">
                  {m.label}
                </p>
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#B96D35] tabular-nums mt-1">
                  {m.value}
                </p>
                <p className="text-[11px] text-[#594132] mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        )}

        {/* 4. HERO FIGURE (FIG. 1.1) */}
        <figure className="mb-12">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D8C8AE] shadow-warm bg-[#EDE8DD]">
            <ResilientImage
              src={article.image || IMAGES.coffeeBlossomsBees}
              alt={article.figure1Caption}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-[#241A15]/80 text-[#FAF8F0] text-[10px] font-bold tracking-widest uppercase backdrop-blur-xs">
              Field Study · Kalasa Plot 04
            </span>
          </div>
          <figcaption className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#594132]">
            <span>{article.figure1Caption}</span>
            <span className="text-[#594132]/75 tabular-nums shrink-0">
              {article.figure1Meta}
            </span>
          </figcaption>
        </figure>

        {/* 5. SECTION 01: PHENOLOGY + DROP CAP + CALLOUT + PULL QUOTE */}
        <section className="space-y-6 mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              {article.section1.kicker}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#38291F] mt-1">
              {article.section1.heading}
            </h2>
          </div>

          <div className="space-y-4 text-[15px] sm:text-base text-[#38291F]/90 leading-[1.75]">
            {article.section1.paragraphs.map((para, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'first-letter:float-left first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-[#263F2C]'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Botanical Advantage Callout Box */}
          <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-5 sm:p-6 flex items-start gap-4 shadow-warm">
            <span className="w-9 h-9 rounded-lg bg-[#E5D3A9]/60 text-[#7D5700] flex items-center justify-center shrink-0 mt-0.5">
              <Flower2 className="w-4 h-4" />
            </span>
            <div className="space-y-1">
              <h3 className="font-serif text-base font-semibold text-[#38291F]">
                {article.section1.calloutTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#594132] leading-relaxed">
                {article.section1.calloutText}
              </p>
            </div>
          </div>

          {/* Forest Green Pull Quote Card */}
          <blockquote className="relative bg-[#263F2C] text-[#FAF8F0] rounded-xl p-7 sm:p-9 shadow-warm overflow-hidden">
            <span
              className="absolute -bottom-6 right-5 font-serif text-[120px] leading-none text-[#FAF8F0]/10 select-none pointer-events-none"
              aria-hidden="true"
            >
              &rdquo;
            </span>
            <p className="relative font-serif italic text-lg sm:text-2xl leading-relaxed text-[#FAF8F0]">
              &ldquo;{article.section1.pullQuote}&rdquo;
            </p>
            <footer className="relative mt-4 text-xs font-medium text-[#E5D3A9]">
              — {article.section1.pullQuoteAuthor}
            </footer>
          </blockquote>
        </section>

        {/* 6. SECTION 02: BIOCHEMICAL FINGERPRINTING & COMPARATIVE TABLE */}
        <section className="space-y-6 mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              {article.section2.kicker}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#38291F] mt-1">
              {article.section2.heading}
            </h2>
          </div>

          <div className="space-y-4 text-[15px] sm:text-base text-[#38291F]/90 leading-[1.75]">
            {article.section2.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Comparative Data Table Card */}
          <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-5 sm:p-6 shadow-warm">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[#D8C8AE]">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#38291F]">
                  {article.section2.tableTitle}
                </h3>
                <p className="text-[11px] text-[#594132] mt-0.5">
                  {article.section2.tableSubtitle}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-[#263F2C] text-[#FAF8F0] text-[10px] font-bold uppercase tracking-wider">
                Lab Verified
              </span>
            </div>

            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#D8C8AE] text-[11px] uppercase tracking-wider text-[#594132]">
                    <th className="py-3 pr-4 font-semibold">Metric / Attribute</th>
                    <th className="py-3 px-3 font-semibold text-[#B96D35]">
                      {article.section2.colA}
                    </th>
                    <th className="py-3 pl-3 font-semibold">
                      {article.section2.colB}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8C8AE]/60 tabular-nums">
                  {article.section2.rows.map((row) => (
                    <tr key={row.metric}>
                      <td className="py-3.5 pr-4 font-semibold text-[#38291F]">
                        {row.metric}
                      </td>
                      <td className="py-3.5 px-3 font-semibold text-[#263F2C]">
                        {row.valueA}
                      </td>
                      <td className="py-3.5 pl-3 text-[#594132]">
                        {row.valueB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. SECTION 03: SENSORY SPECTRUM RADAR & POUR-OVER PROTOCOL */}
        <section className="space-y-6 mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              {article.section3.kicker}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#38291F] mt-1">
              {article.section3.heading}
            </h2>
          </div>

          <p className="text-[15px] sm:text-base text-[#38291F]/90 leading-[1.75]">
            {article.section3.intro}
          </p>

          {/* 2-Column Sensory Radar + Protocol Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Left: Sensory Spectrum Radar */}
            <div className="md:col-span-6 bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-5 flex flex-col justify-between shadow-warm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#594132]">
                  Sensory Spectrum
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#7D5700] tabular-nums">
                  {article.section3.lotCode}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center my-2">
                <svg
                  viewBox="0 0 260 245"
                  className="w-full max-w-[260px] h-auto overflow-visible"
                  aria-label="Cupping sensory spectrum chart"
                >
                  {/* Concentric pentagon rings */}
                  {[0.33, 0.66, 1].map((scale, ringIdx) => {
                    const pts = axes
                      .map((_, idx) => {
                        const p = getPoint(idx, scale * 100);
                        return `${p.x},${p.y}`;
                      })
                      .join(' ');
                    return (
                      <polygon
                        key={ringIdx}
                        points={pts}
                        fill="none"
                        stroke="#D8C8AE"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Spokes */}
                  {axes.map((_, idx) => {
                    const outer = getPoint(idx, 100);
                    return (
                      <line
                        key={idx}
                        x1={cx}
                        y1={cy}
                        x2={outer.x}
                        y2={outer.y}
                        stroke="#D8C8AE"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Data Polygon */}
                  <polygon
                    points={polygonPoints}
                    fill="#D9A441"
                    fillOpacity="0.32"
                    stroke="#B96D35"
                    strokeWidth="2"
                  />

                  {/* Axis Labels & Interactive Nodes */}
                  {axes.map((axis, idx) => {
                    const pt = getPoint(idx, axis.score);
                    const labelPt = getPoint(idx, 124);
                    const isHovered = hoveredAxis === idx;
                    return (
                      <g
                        key={axis.label}
                        onMouseEnter={() => setHoveredAxis(idx)}
                        onMouseLeave={() => setHoveredAxis(null)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isHovered ? 6 : 4}
                          fill={isHovered ? '#263F2C' : '#B96D35'}
                          stroke="#FAF8F0"
                          strokeWidth="1.5"
                        />
                        <text
                          x={labelPt.x}
                          y={labelPt.y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="fill-[#594132] text-[10px] font-medium"
                        >
                          {axis.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {hoveredAxis !== null ? (
                  <p className="text-[11px] font-semibold text-[#263F2C] tabular-nums -mt-1 mb-2">
                    {axes[hoveredAxis].label}: {axes[hoveredAxis].score}/100
                  </p>
                ) : (
                  <p className="text-[11px] text-[#594132]/75 -mt-1 mb-2">
                    Hover radar nodes to inspect cupping intensity
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#D8C8AE]/60">
                {article.section3.sensoryNotes.map((note) => (
                  <span
                    key={note}
                    className="px-2.5 py-1.5 rounded-lg bg-[#F5F0E5] border border-[#D8C8AE]/70 text-[11px] font-medium text-[#38291F] text-center"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Deep Forest Green Brew Protocol Card */}
            <div className="md:col-span-6 bg-[#263F2C] text-[#FAF8F0] rounded-xl p-6 flex flex-col justify-between shadow-warm">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#D9A441]">
                    Barista Cupping Recommendations
                  </p>
                  <h3 className="font-serif text-2xl text-[#FAF8F0] mt-1">
                    {article.section3.protocolTitle}
                  </h3>
                  <p className="text-xs text-[#E5D3A9]/85 mt-1 leading-relaxed">
                    {article.section3.protocolSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-3.5">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#E5D3A9]/75">
                      Water Temp
                    </p>
                    <p className="font-serif text-lg font-semibold text-[#FAF8F0] tabular-nums mt-0.5">
                      {article.section3.waterTemp}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-3.5">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#E5D3A9]/75">
                      Brew Ratio
                    </p>
                    <p className="font-serif text-lg font-semibold text-[#FAF8F0] tabular-nums mt-0.5">
                      {article.section3.brewRatio}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-3.5">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#E5D3A9]/75">
                      Grind Size
                    </p>
                    <p className="font-serif text-lg font-semibold text-[#FAF8F0] mt-0.5">
                      {article.section3.grindSize}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-3.5">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#E5D3A9]/75">
                      Target Draw
                    </p>
                    <p className="font-serif text-lg font-semibold text-[#FAF8F0] tabular-nums mt-0.5">
                      {article.section3.targetDraw}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#526447]/60 flex items-start gap-2.5 text-xs text-[#E5D3A9]">
                <Droplets className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>{article.section3.protocolNote}</span>
              </div>
            </div>
          </div>

          {/* 3-Column Cupping Spec Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 shadow-warm">
              <p className="text-[10px] font-bold tracking-wider uppercase text-[#594132]/75">
                Acidity Profile
              </p>
              <p className="font-serif text-lg font-semibold text-[#38291F] mt-1">
                {article.section3.acidityProfile}
              </p>
              <p className="text-[11px] text-[#594132] mt-1">
                {article.section3.acidityNote}
              </p>
            </div>
            <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 shadow-warm">
              <p className="text-[10px] font-bold tracking-wider uppercase text-[#594132]/75">
                Internal Bean Moisture
              </p>
              <p className="font-serif text-lg font-semibold text-[#38291F] tabular-nums mt-1">
                {article.section3.moisture}
              </p>
              <p className="text-[11px] text-[#594132] mt-1">
                {article.section3.moistureNote}
              </p>
            </div>
            <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 shadow-warm">
              <p className="text-[10px] font-bold tracking-wider uppercase text-[#594132]/75">
                SCA Cupping Score
              </p>
              <p className="font-serif text-lg font-semibold text-[#B96D35] tabular-nums mt-1">
                {article.section3.cuppingScore}
              </p>
              <p className="text-[11px] text-[#594132] mt-1">
                {article.section3.cuppingNote}
              </p>
            </div>
          </div>

          {/* Secondary Estate Figure (Fig 1.2) */}
          <figure className="pt-2">
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#D8C8AE] shadow-warm bg-[#EDE8DD]">
              <ResilientImage
                src={article.secondaryImage || IMAGES.kalasaMist}
                alt={article.figure2Caption}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-[11px] text-[#594132]">
              {article.figure2Caption}
            </figcaption>
          </figure>
        </section>

        {/* 8. FIELD STEWARDSHIP & RESEARCH STEWARDS */}
        <section className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-7 shadow-warm mb-10">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447] mb-5 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#7D5700]" />
            <span>Field Stewardship &amp; Research Stewards</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-5 border-b border-[#D8C8AE]/70">
            <div className="flex items-start gap-3.5">
              <ResilientImage
                src={IMAGES.farmerHarvest}
                alt="Naveen Hegde"
                className="w-12 h-12 rounded-full object-cover border border-[#D8C8AE] shrink-0"
              />
              <div>
                <h3 className="font-serif text-base font-semibold text-[#38291F]">
                  Naveen Hegde
                </h3>
                <p className="text-[11px] font-semibold text-[#B96D35]">
                  Senior Agro-Ecologist &amp; Q-Grader
                </p>
                <p className="text-xs text-[#594132] leading-relaxed mt-1.5">
                  Naveen has spent seventeen seasons cataloguing mycorrhizal
                  soil networks and native pollinator patterns across the
                  Kudremukha biosphere.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <ResilientImage
                src={IMAGES.planterApiarist}
                alt="Chandrashekar Gowda"
                className="w-12 h-12 rounded-full object-cover border border-[#D8C8AE] shrink-0"
              />
              <div>
                <h3 className="font-serif text-base font-semibold text-[#38291F]">
                  Chandrashekar Gowda
                </h3>
                <p className="text-[11px] font-semibold text-[#B96D35]">
                  Indigenous Apiary Custodian
                </p>
                <p className="text-xs text-[#594132] leading-relaxed mt-1.5">
                  A third-generation forest beekeeper, Chandrashekar manages the
                  estate&apos;s 42 Tetragonula sanctuaries and lectures on forest
                  honey pharmacology across Karnataka.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-[#594132]">
              Want to walk the blossom trail with our researchers?
            </p>
            <button
              type="button"
              onClick={onOpenExperience}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263F2C] hover:text-[#7D5700] cursor-pointer"
            >
              <span>Explore Plantation Masterclasses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* 9. DISCUSSION & OBSERVATIONS (SUBMIT A FIELD NOTE) */}
        <section className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-7 shadow-warm space-y-5">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Discussion &amp; Observations
            </p>
            <h2 className="font-serif text-2xl text-[#38291F] mt-1">
              Submit a Field Note or Cupping Reflection
            </h2>
            <p className="text-xs text-[#594132] mt-1">
              Have you sampled this micro-lot at Kalasa or observed stingless
              bee forage in your region?
            </p>
          </div>

          <form onSubmit={handlePostReflection} className="space-y-3" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={reflectionName}
                onChange={(e) => setReflectionName(e.target.value)}
                placeholder="Your Name or SCA Credential"
                aria-label="Your Name or SCA Credential"
                className="h-11 px-4 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-xs sm:text-sm text-[#38291F] placeholder-[#594132]/55 focus:outline-none focus:border-[#D9A441]"
              />
              <input
                type="email"
                value={reflectionEmail}
                onChange={(e) => setReflectionEmail(e.target.value)}
                placeholder="Email Address (for dispatch updates)"
                aria-label="Email Address for dispatch updates"
                className="h-11 px-4 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-xs sm:text-sm text-[#38291F] placeholder-[#594132]/55 focus:outline-none focus:border-[#D9A441]"
              />
            </div>

            <textarea
              rows={3}
              value={reflectionBody}
              onChange={(e) => setReflectionBody(e.target.value)}
              placeholder="Share your brew tasting notes, questions on Trehalulose, or field inquiries..."
              aria-label="Field note or cupping reflection"
              className="w-full p-4 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-xs sm:text-sm text-[#38291F] placeholder-[#594132]/55 focus:outline-none focus:border-[#D9A441] resize-none"
            />

            {reflectionError && (
              <p className="text-xs text-[#BA1A1A]">{reflectionError}</p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <p className="text-[11px] text-[#594132]/80">
                All field notes are peer-reviewed before archival indexing.
              </p>
              <button
                type="submit"
                className="h-10 px-5 rounded-xl bg-[#D9A441] text-[#241A15] text-xs font-semibold inline-flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#B96D35] hover:text-[#FAF8F0] transition-colors shrink-0"
              >
                <span>Post Reflection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Posted Field Notes Feed */}
          {fieldNotes.length > 0 && (
            <div className="pt-4 border-t border-[#D8C8AE]/70 space-y-3">
              {fieldNotes.map((fn) => (
                <div
                  key={fn.id}
                  className="bg-[#F5F0E5] border border-[#D8C8AE]/80 rounded-xl p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#38291F] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#263F2C]" />
                      {fn.author}
                    </span>
                    <span className="text-[11px] text-[#594132]/75">
                      {fn.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#594132] leading-relaxed">
                    {fn.note}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </article>

      {/* 10. RELATED FIELD STUDIES & CHRONICLES */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pt-6 border-t border-[#D8C8AE]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Further Reading
            </p>
            <h2 className="font-serif text-3xl text-[#38291F] mt-1">
              Related Field Studies &amp; Chronicles
            </h2>
          </div>
          <button
            type="button"
            onClick={onBackToBlogs}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38291F] hover:text-[#7D5700] cursor-pointer"
          >
            <span>View All Dispatches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle(item)}
              className="group bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 flex flex-col justify-between shadow-warm cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-[#EDE8DD]">
                  <ResilientImage
                    src={item.image || IMAGES.forestHoneyJars}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F0]/95 text-[#38291F] text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <p className="text-[11px] font-medium text-[#526447]">
                  {item.volume} · {item.readTime}
                </p>
                <h3 className="font-serif text-lg font-semibold text-[#38291F] mt-1 group-hover:text-[#7D5700] transition-colors">
                  {item.title} {item.titleHighlight}
                </h3>
                <p className="text-xs text-[#594132] leading-relaxed mt-2 line-clamp-2">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D8C8AE]/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263F2C]">
                  <span>Read Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
