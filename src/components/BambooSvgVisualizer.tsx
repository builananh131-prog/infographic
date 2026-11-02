import React, { useState } from 'react';
import { YearStageData } from '../types/treebank';
import { RotateCcw, Info, Sparkles, Wind, Award, Trees, Droplet } from 'lucide-react';

interface Props {
  data: YearStageData;
  year: number;
  onYearChange: (year: number) => void;
  onReset: () => void;
}

export const BambooSvgVisualizer: React.FC<Props> = ({
  data,
  year,
  onYearChange,
  onReset
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<{
    title: string;
    description: string;
    icon: string;
  } | null>(null);

  const t = {
    statusLabel: "Trạng thái rừng mét/luồng:",
    reset: "Đặt lại về Năm 1",
    hotspotNotice: "Nhấp vào các điểm trên đồ họa (Rễ cây, Thân tre, Măng non, Chứng chỉ FSC, CO₂) để khám phá",
    close: "Đóng cửa sổ",
    soilShield: "Giữ Đất & Chống Sạt Lở",
    carbonBadge: "Hấp Thụ Carbon",
    fscCert: "CHỨNG CHỈ FSC",
    fscSub: "QUẢN LÝ BỀN VỮNG",
    newShoot: "Măng non mới",
    year: "Năm"
  };

  const handleHotspotClick = (type: string) => {
    if (type === 'roots') {
      setSelectedHotspot({
        title: 'Mạng Lưới Rễ Chùm (Bộ Rễ Giữ Đất)',
        description: `Ở năm thứ ${year}, mạng lưới rễ mét/luồng đan kết chằng chịt trong tầng đất sâu 0.5m - 1.2m, liên kết các tầng đất dốc và tăng khả năng giữ nước lên đến ${year * 2500 + 2000} m³/ha. Giúp giảm nguy cơ trượt lở đất đến ${Math.min(95, 45 + year * 11)}%.`,
        icon: 'roots'
      });
    } else if (type === 'fsc') {
      setSelectedHotspot({
        title: 'Tiêu Chuẩn Rừng Bền Vững FSC Quốc Tế',
        description: 'Chứng nhận đảm bảo rừng được quản lý có trách nhiệm với môi trường, tôn trọng quyền lợi xã hội của người dân bản địa và mang lại giá trị kinh tế lâu dài. 100% thân mét thu hoạch được dán mã truy xuất nguồn gốc.',
        icon: 'fsc'
      });
    } else if (type === 'co2') {
      setSelectedHotspot({
        title: 'Hấp Thụ & Lưu Trữ Khí Carbon Sinh Khối',
        description: `Rừng mét hấp thụ carbon nhanh gấp 1.4 lần so với rừng keo lá tràm. Ở giai đoạn năm thứ ${year}, sinh khối tích lũy đạt khoảng ${data.carbonTons}, góp phần chống biến đổi khí hậu và tích lũy tín chỉ giảm phát thải.`,
        icon: 'co2'
      });
    } else if (type === 'shoots') {
      setSelectedHotspot({
        title: 'Măng Mét & Luồng Thương Phẩm',
        description: 'Măng mét Tam Thái nổi tiếng ngọt giòn tự nhiên. Vào mùa mưa từ tháng 6 đến tháng 9, mỗi bụi sinh ra từ 8 đến 15 măng non. Người dân thu hái tỉa 60% măng thương phẩm và giữ lại 40% măng mập làm thân mẹ tái sinh.',
        icon: 'shoots'
      });
    } else if (type === 'tree') {
      setSelectedHotspot({
        title: 'Thân Cây Mét Chuẩn Kỹ Thuật (Phê La)',
        description: `Chiều cao thân hiện tại: ${data.heightMeters}, đường kính gốc: ${data.diameterCm}. Khi bước sang năm thứ 5, thân tre hóa gỗ cứng cáp, chịu lực uốn cao, thích hợp làm kết cấu vòm không gian quán cà phê Phê La và than hoạt tính cao cấp.`,
        icon: 'tree'
      });
    }
  };

  return (
    <div className="flex flex-col bg-slate-900/90 rounded-2xl border border-emerald-800/40 overflow-hidden shadow-2xl relative">
      {/* Top Overlay Badge & Reset Button */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
        <div className="bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-2 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{data.visualTitle}</span>
        </div>
        <button
          onClick={onReset}
          className="pointer-events-auto bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white p-2 rounded-lg text-xs font-medium border border-slate-700 transition shadow flex items-center gap-1.5 cursor-pointer"
          title={t.reset}
        >
          <RotateCcw className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">{t.reset}</span>
        </button>
      </div>

      {/* Main SVG Graphics Canvas */}
      <div className="w-full h-[360px] sm:h-[430px] bg-gradient-to-b from-sky-950/60 via-teal-950/40 to-emerald-950/90 relative flex items-end justify-center overflow-hidden">
        {/* Sky, Sun & Floating Elements Background Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 450" preserveAspectRatio="none">
          {/* Sun Glow */}
          <circle cx="680" cy="85" r="75" fill="#fef08a" opacity="0.12" />
          <circle cx="680" cy="85" r="140" fill="#fef08a" opacity="0.04" />

          {/* Animated Clouds */}
          <g className="cloud-anim-1" opacity="0.25">
            <path d="M 40 85 Q 55 65 75 75 Q 95 55 120 70 Q 140 65 150 85 Z" fill="#ffffff" />
            <path d="M 320 55 Q 335 35 355 45 Q 375 25 400 40 Q 420 35 430 55 Z" fill="#ffffff" />
          </g>
          <g className="cloud-anim-2" opacity="0.2">
            <path d="M 520 100 Q 535 80 555 90 Q 575 70 600 85 Q 620 80 630 100 Z" fill="#ffffff" />
          </g>

          {/* Distant Mountain Silhouettes */}
          <path d="M 0 310 Q 180 200 380 250 T 800 230 L 800 450 L 0 450 Z" fill="#064e3b" opacity="0.55" />
          <path d="M -50 340 Q 230 270 480 300 T 850 280 L 850 450 L -50 450 Z" fill="#047857" opacity="0.75" />

          {/* Birds in sky */}
          <g className="bird-anim" opacity="0.55">
            <path d="M0,0 Q5,-8 10,0 Q15,-8 20,0" stroke="#cbd5e1" strokeWidth="2" fill="none" transform="translate(160, 65)" />
            <path d="M0,0 Q4,-6 8,0 Q12,-6 16,0" stroke="#cbd5e1" strokeWidth="1.5" fill="none" transform="translate(195, 78)" />
          </g>
        </svg>

        {/* Foreground Interactive SVG */}
        <svg
          id="bamboo-stage-svg"
          className="w-full h-full relative z-10"
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
            <linearGradient id="hillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="35%" stopColor="#451a03" />
              <stop offset="100%" stopColor="#290f02" />
            </linearGradient>
            <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="45%" stopColor="#34d399" />
              <stop offset="85%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="bambooMatureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            <linearGradient id="shootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
            <linearGradient id="fscGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>

          {/* Rolling Foreground Green Hill Slope */}
          <path d="M -50 365 Q 260 295 510 330 T 850 310 L 850 450 L -50 450 Z" fill="url(#hillGrad2)" />

          {/* Dense Grove Background (Appears progressively in Years 3-5) */}
          <g
            id="dense-forest"
            style={{
              opacity: data.denseForestOpacity,
              transition: 'opacity 0.8s ease'
            }}
          >
            {/* Distant bamboo stems in fog */}
            <rect x="90" y="150" width="8" height="220" rx="2" fill="#047857" opacity="0.45" />
            <rect x="140" y="130" width="9" height="240" rx="2" fill="#065f46" opacity="0.55" />
            <rect x="190" y="120" width="10" height="250" rx="2" fill="#047857" opacity="0.6" />
            <rect x="310" y="140" width="9" height="230" rx="2" fill="#065f46" opacity="0.5" />
            <rect x="345" y="125" width="10" height="245" rx="2" fill="#047857" opacity="0.55" />
            <rect x="460" y="115" width="11" height="255" rx="2" fill="#065f46" opacity="0.6" />
            <rect x="500" y="130" width="10" height="240" rx="2" fill="#047857" opacity="0.5" />
            <rect x="620" y="145" width="9" height="225" rx="2" fill="#065f46" opacity="0.5" />
            <rect x="660" y="160" width="8" height="210" rx="2" fill="#047857" opacity="0.45" />
          </g>

          {/* Soil & Ground Cutaway */}
          <path d="M 0 375 Q 400 370 800 375 L 800 450 L 0 450 Z" fill="url(#soilGrad)" />

          {/* Soil Granules & Stones */}
          <g opacity="0.3">
            <circle cx="80" cy="410" r="3" fill="#a16207" />
            <circle cx="160" cy="430" r="4" fill="#78350f" />
            <circle cx="280" cy="405" r="3.5" fill="#92400e" />
            <circle cx="430" cy="435" r="4" fill="#a16207" />
            <circle cx="590" cy="415" r="3" fill="#78350f" />
            <circle cx="720" cy="430" r="4.5" fill="#92400e" />
          </g>

          {/* Organic Rhizome Root System (Clickable Hotspot) */}
          <g
            id="roots-group"
            className="cursor-pointer transition-all duration-700"
            style={{
              opacity: data.rootsOpacity,
              transform: `scale(${data.rootsScale})`,
              transformOrigin: "400px 375px"
            }}
            onClick={() => handleHotspotClick('roots')}
          >
            {/* Center Main Clump Rhizomes */}
            <path
              d="M 400 375 Q 375 398 340 415 M 400 375 Q 425 402 470 422 M 400 380 Q 395 420 388 445"
              stroke="#f59e0b"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 370 405 Q 330 420 300 435 M 430 410 Q 470 428 510 440"
              stroke="#d97706"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Left Tree Rhizomes */}
            <path
              d="M 250 378 Q 225 395 200 412 M 250 378 Q 275 402 295 424"
              stroke="#f59e0b"
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Right Tree Rhizomes */}
            <path
              d="M 550 378 Q 525 400 495 418 M 550 378 Q 575 402 615 420"
              stroke="#f59e0b"
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Fine root hairs */}
            <path
              d="M 345 412 Q 335 425 320 435 M 465 420 Q 480 435 495 442 M 205 410 Q 190 425 175 432"
              stroke="#b45309"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>

          {/* Left Supporting Bamboo Tree */}
          <g
            id="left-tree"
            className="transition-transform duration-700 cursor-pointer"
            style={{
              transform: `translate(250px, 378px) scale(${data.leftTreeScale})`,
              transformOrigin: "bottom center"
            }}
            onClick={() => handleHotspotClick('tree')}
          >
            <rect x="-8" y="-270" width="16" height="270" rx="3" fill="url(#bambooMatureGrad)" />
            <line x1="-10" y1="-70" x2="10" y2="-70" stroke="#047857" strokeWidth="2.5" />
            <line x1="-9" y1="-140" x2="9" y2="-140" stroke="#047857" strokeWidth="2.5" />
            <line x1="-8" y1="-205" x2="8" y2="-205" stroke="#047857" strokeWidth="2.5" />
            <g className="transition-transform duration-500">
              <path d="M -6 -180 Q -50 -205 -80 -185 Q -40 -165 -6 -180" fill="#10b981" />
              <path d="M 6 -220 Q 60 -245 90 -225 Q 50 -205 6 -220" fill="#34d399" />
              <path d="M -5 -250 Q -45 -275 -70 -260 Q -35 -245 -5 -250" fill="#6ee7b7" />
              <path d="M 0 -270 Q 25 -300 0 -320 Q -25 -300 0 -270" fill="#059669" />
            </g>
          </g>

          {/* Right Supporting Bamboo Tree */}
          <g
            id="right-tree"
            className="transition-transform duration-700 cursor-pointer"
            style={{
              transform: `translate(550px, 378px) scale(${data.rightTreeScale})`,
              transformOrigin: "bottom center"
            }}
            onClick={() => handleHotspotClick('tree')}
          >
            <rect x="-8" y="-270" width="16" height="270" rx="3" fill="url(#bambooMatureGrad)" />
            <line x1="-10" y1="-70" x2="10" y2="-70" stroke="#047857" strokeWidth="2.5" />
            <line x1="-9" y1="-140" x2="9" y2="-140" stroke="#047857" strokeWidth="2.5" />
            <line x1="-8" y1="-205" x2="8" y2="-205" stroke="#047857" strokeWidth="2.5" />
            <g className="transition-transform duration-500">
              <path d="M -6 -200 Q -60 -225 -90 -205 Q -50 -185 -6 -200" fill="#34d399" />
              <path d="M 6 -175 Q 50 -195 80 -175 Q 40 -155 6 -175" fill="#10b981" />
              <path d="M 5 -245 Q 45 -270 70 -255 Q 35 -240 5 -245" fill="#6ee7b7" />
              <path d="M 0 -270 Q -25 -300 0 -320 Q 25 -300 0 -270" fill="#047857" />
            </g>
          </g>

          {/* MAIN CENTER SPECIMEN BAMBOO */}
          <g
            id="center-tree"
            className="cursor-pointer transition-transform duration-700"
            style={{
              transform: `translate(400px, 375px) scale(${data.trunkScaleX}, ${data.trunkScaleY})`,
              transformOrigin: "bottom center"
            }}
            onClick={() => handleHotspotClick('tree')}
          >
            {/* Trunk Segments */}
            <g id="trunk-segments">
              <rect x="-11" y="-85" width="22" height="85" rx="3.5" fill="url(#bambooGrad)" />
              <line x1="-13" y1="-85" x2="13" y2="-85" stroke="#047857" strokeWidth="3.5" />

              <rect x="-10" y="-170" width="20" height="83" rx="3.5" fill="url(#bambooGrad)" />
              <line x1="-12" y1="-170" x2="12" y2="-170" stroke="#047857" strokeWidth="3.5" />

              <rect x="-9" y="-250" width="18" height="78" rx="3.5" fill="url(#bambooGrad)" />
              <line x1="-11" y1="-250" x2="11" y2="-250" stroke="#047857" strokeWidth="3" />

              <rect x="-7.5" y="-325" width="15" height="73" rx="2.5" fill="url(#bambooGrad)" />
              <line x1="-9" y1="-325" x2="9" y2="-325" stroke="#047857" strokeWidth="2.5" />

              <rect x="-6" y="-390" width="12" height="63" rx="2" fill="url(#bambooGrad)" />
            </g>

            {/* Dynamic Foliage Canopy */}
            <g
              id="canopy-center"
              style={{
                transform: `scale(${data.canopyScale})`,
                transformOrigin: "0 -280px",
                transition: "transform 0.6s ease"
              }}
            >
              <path d="M -9 -220 Q -45 -245 -70 -230 Q -40 -210 -9 -220" fill="#34d399" />
              <path d="M 9 -230 Q 55 -255 80 -238 Q 45 -215 9 -230" fill="#10b981" />
              <path d="M -8 -285 Q -55 -315 -90 -295 Q -45 -275 -8 -285" fill="#34d399" />
              <path d="M 8 -295 Q 65 -325 100 -305 Q 50 -285 8 -295" fill="#059669" />
              <path d="M -7 -340 Q -45 -375 -75 -360 Q -35 -345 -7 -340" fill="#6ee7b7" />
              <path d="M 7 -350 Q 50 -385 85 -370 Q 40 -355 7 -350" fill="#10b981" />
              <path d="M 0 -390 Q -35 -435 0 -455 Q 35 -435 0 -390" fill="#6ee7b7" />
            </g>
          </g>

          {/* BAMBOO SHOOTS */}
          <g
            id="bamboo-shoots"
            className="cursor-pointer transition-opacity duration-700"
            style={{
              opacity: data.shootsOpacity,
              transition: 'opacity 0.7s ease'
            }}
            onClick={() => handleHotspotClick('shoots')}
          >
            {/* Shoot 1 */}
            <g transform="translate(345, 375)">
              <path d="M -15 0 C -15 0 -10 -45 0 -60 C 10 -45 15 0 15 0 Z" fill="url(#shootGrad)" />
              <path d="M -8 -15 L 0 -58 L 8 -15" stroke="#78350f" strokeWidth="1.2" fill="none" />
              <path d="M -12 -5 Q 0 -18 12 -5" stroke="#92400e" strokeWidth="1.2" fill="none" />
              <path d="M -10 -25 Q 0 -36 10 -25" stroke="#92400e" strokeWidth="1.2" fill="none" />
              <rect x="-26" y="-76" width="52" height="15" rx="4" fill="#0f172a" fillOpacity="0.8" stroke="#ca8a04" strokeWidth="0.8" />
              <text x="0" y="-66" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle">
                {t.newShoot}
              </text>
            </g>

            {/* Shoot 2 */}
            <g transform="translate(455, 375)">
              <path d="M -13 0 C -13 0 -8 -40 0 -52 C 8 -40 13 0 13 0 Z" fill="url(#shootGrad)" />
              <path d="M -7 -12 L 0 -50 L 7 -12" stroke="#78350f" strokeWidth="1" fill="none" />
              <path d="M -10 -8 Q 0 -16 10 -8" stroke="#92400e" strokeWidth="1" fill="none" />
            </g>
          </g>

          {/* ECO INDICATORS: Anti-erosion shield and Carbon Capture badge */}
          <g
            id="eco-indicators"
            className="cursor-pointer transition-all duration-700"
            style={{ opacity: data.ecoOpacity }}
          >
            {/* Soil Protection Shield Hotspot */}
            <g
              transform="translate(140, 260)"
              onClick={() => handleHotspotClick('roots')}
              className="hover:scale-110 transition-transform"
            >
              <circle cx="0" cy="0" r="24" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" />
              <path d="M-7 -5 L0 -12 L7 -5 L7 4 C7 9 0 12 0 12 C0 12 -7 9 -7 4 Z" fill="#34d399" />
              <rect x="-65" y="16" width="130" height="20" rx="6" fill="#022c22" fillOpacity="0.9" stroke="#10b981" strokeWidth="1" />
              <text x="0" y="30" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                {t.soilShield}
              </text>
            </g>

            {/* Carbon Absorption Badge Hotspot */}
            <g
              transform="translate(660, 220)"
              onClick={() => handleHotspotClick('co2')}
              className="hover:scale-110 transition-transform"
            >
              <circle cx="0" cy="0" r="25" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
              <text x="0" y="6" fill="#5eead4" fontSize="14" fontWeight="800" textAnchor="middle">CO₂</text>
              <rect x="-60" y="18" width="120" height="20" rx="6" fill="#022c22" fillOpacity="0.9" stroke="#34d399" strokeWidth="1" />
              <text x="0" y="32" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                {t.carbonBadge}
              </text>
            </g>
          </g>

          {/* FSC GOLD CERTIFICATION STAMP */}
          <g
            id="fsc-badge"
            className="cursor-pointer transition-all duration-700 glow-fsc"
            style={{
              transform: `translate(685px, 90px) scale(${data.fscScale})`,
              transformOrigin: "center",
              display: data.fscScale > 0 ? "block" : "none"
            }}
            onClick={() => handleHotspotClick('fsc')}
          >
            <circle cx="0" cy="0" r="42" fill="#064e3b" stroke="url(#fscGold)" strokeWidth="3.5" />
            <circle cx="0" cy="0" r="37" fill="#022c22" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M-10 10 L-10 -15 L10 -15 M-10 -2 L5 -2" stroke="#facc15" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M-2 10 L8 -6 L14 10" stroke="#34d399" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <text x="0" y="24" fill="#facc15" fontSize="9.5" fontWeight="900" textAnchor="middle" letterSpacing="0.5">
              {t.fscCert}
            </text>
            <text x="0" y="34" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle">
              {t.fscSub}
            </text>
          </g>
        </svg>

        {/* Dynamic Interactive Bottom Bar in Visualizer */}
        <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 z-30 shadow-xl">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm flex-shrink-0">
              <Trees className="w-4 h-4 text-emerald-400" />
            </span>
            <div className="min-w-0">
              <div className="text-[11px] text-slate-400">{t.statusLabel}</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-300 truncate">
                {data.forestStatus}
              </div>
            </div>
          </div>

          {/* Quick Slider Control */}
          <div className="w-full sm:w-1/2 flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">{t.year} 1</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={year}
              onChange={(e) => onYearChange(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              aria-label="Thanh trượt năm phát triển của rừng"
            />
            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">{t.year} 5+</span>
          </div>
        </div>
      </div>

      {/* Info hotspot guide notification */}
      <div className="px-4 py-2 bg-slate-950/70 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 truncate">
          <Info className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="truncate">{t.hotspotNotice}</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-emerald-400 font-semibold">{data.heightMeters}</span>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-semibold">{data.carbonTons}</span>
        </div>
      </div>

      {/* Hotspot Insight Dialog/Popup */}
      {selectedHotspot && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-40 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300">
                  {selectedHotspot.icon === 'fsc' && <Award className="w-6 h-6 text-amber-400" />}
                  {selectedHotspot.icon === 'roots' && <Droplet className="w-6 h-6 text-emerald-400" />}
                  {selectedHotspot.icon === 'co2' && <Wind className="w-6 h-6 text-teal-400" />}
                  {selectedHotspot.icon === 'shoots' && <Sparkles className="w-6 h-6 text-amber-300" />}
                  {selectedHotspot.icon === 'tree' && <Trees className="w-6 h-6 text-emerald-400" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{selectedHotspot.title}</h3>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Thông tin sinh thái Năm {year}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {selectedHotspot.description}
            </p>

            <button
              onClick={() => setSelectedHotspot(null)}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition text-sm shadow cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
