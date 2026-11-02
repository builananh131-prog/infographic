import React from 'react';
import { YearStageData } from '../types/treebank';
import {
  Sprout,
  GraduationCap,
  BookOpenCheck,
  FileCheck,
  Ruler,
  Scissors,
  MountainSnow,
  ShieldAlert,
  CloudRain,
  Droplets,
  ShieldCheck,
  Microscope,
  ShoppingBag,
  Award,
  Users,
  TrendingUp,
  Truck,
  Building2,
  Coins,
  Infinity,
  CheckCircle2,
  Handshake,
  ExternalLink
} from 'lucide-react';

interface Props {
  data: YearStageData;
  onOpenFscModal: () => void;
  onOpenStakeholdersModal: () => void;
}

export const StageDetailCard: React.FC<Props> = ({
  data,
  onOpenFscModal,
  onOpenStakeholdersModal
}) => {
  const t = {
    actionHeader: "Các hoạt động trọng tâm giai đoạn này:",
    partnersHeader: "Đơn vị & đối tác đồng hành:",
    learnFsc: "Xem 10 Tiêu chuẩn FSC",
    viewPartners: "Mô hình liên kết 4 nhà"
  };

  // Helper to render lucide icon dynamically
  const renderIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" };
    switch (iconName) {
      case "Sprout": return <Sprout {...props} />;
      case "GraduationCap": return <GraduationCap {...props} />;
      case "BookOpenCheck": return <BookOpenCheck {...props} />;
      case "FileCheck": return <FileCheck {...props} />;
      case "Ruler": return <Ruler {...props} />;
      case "Scissors": return <Scissors {...props} />;
      case "MountainSnow": return <MountainSnow {...props} />;
      case "ShieldAlert": return <ShieldAlert {...props} />;
      case "CloudRain": return <CloudRain {...props} />;
      case "Droplets": return <Droplets {...props} />;
      case "ShieldCheck": return <ShieldCheck {...props} />;
      case "Microscope": return <Microscope {...props} />;
      case "ShoppingBag": return <ShoppingBag {...props} />;
      case "Award": return <Award {...props} />;
      case "Users": return <Users {...props} />;
      case "TrendingUp": return <TrendingUp {...props} />;
      case "Truck": return <Truck {...props} />;
      case "Building2": return <Building2 {...props} />;
      case "Coins": return <Coins {...props} />;
      case "Infinity": return <Infinity {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 border border-emerald-500/30 flex-grow flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-300">
      {/* Decorative Large Background Watermark Icon */}
      <div className="absolute -right-8 -bottom-8 text-emerald-500/5 pointer-events-none select-none">
        {data.year === 1 && <Sprout className="w-64 h-64" />}
        {data.year === 2 && <Ruler className="w-64 h-64" />}
        {data.year === 3 && <CloudRain className="w-64 h-64" />}
        {data.year === 4 && <Award className="w-64 h-64" />}
        {data.year === 5 && <Handshake className="w-64 h-64" />}
      </div>

      <div className="relative z-10">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-bold uppercase tracking-wider">
            {data.stageBadge}
          </span>
          <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/30 tracking-wider">
            {data.yearTag}
          </span>
        </div>

        {/* Title & Description */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">
          {data.title}
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {data.description}
        </p>

        {/* Action List */}
        <div className="space-y-2.5 my-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            {t.actionHeader}
          </div>
          <div className="space-y-2">
            {data.actions.map((act, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/40 p-2 rounded-lg border border-slate-800/80 hover:border-emerald-500/30 transition"
              >
                {renderIcon(act.icon)}
                <span className="leading-snug">
                  {act.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics & Footer */}
      <div className="pt-4 border-t border-emerald-800/40 mt-4 relative z-10">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
            <div className="text-[11px] text-slate-400">
              {data.metric1Label}
            </div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5 truncate">
              {data.metric1}
            </div>
          </div>
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
            <div className="text-[11px] text-slate-400">
              {data.metric2Label}
            </div>
            <div className="text-sm font-bold text-teal-300 mt-0.5 truncate">
              {data.metric2}
            </div>
          </div>
        </div>

        {/* Partners Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 pt-1 gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400">{t.partnersHeader}</span>
            <span className="font-semibold text-emerald-300">
              {data.partners}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            {data.year >= 4 && (
              <button
                onClick={onOpenFscModal}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline cursor-pointer"
              >
                <span>{t.learnFsc}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={onOpenStakeholdersModal}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
            >
              <span>{t.viewPartners}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
