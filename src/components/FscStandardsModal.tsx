import React, { useState } from 'react';
import { FSC_PRINCIPLES } from '../data/treebankData';
import { Award, CheckCircle2, ShieldCheck, X, Search } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FscStandardsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const t = {
    badge: "Chứng Nhận Quốc Tế FSC",
    title: "10 Nguyên Tắc Quản Lý Rừng Bền Vững FSC Áp Dụng Tại Xã Tam Thái",
    subtitle: "Chứng chỉ FSC khẳng định vùng nguyên liệu tre mét xã Tam Thái được khai thác có trách nhiệm, bảo tồn hệ sinh thái tự nhiên và nâng cao phúc lợi người dân bản địa.",
    searchPlaceholder: "Tìm kiếm nguyên tắc (pháp luật, bản địa, môi trường, giám sát...)...",
    localActionHeader: "Thực thi tại 14 bản xã Tam Thái:",
    close: "Đóng cửa sổ"
  };

  const filteredPrinciples = FSC_PRINCIPLES.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.localAction.toLowerCase().includes(q) ||
      p.number.toString().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        {/* Tiêu đề Modal */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/30 flex-shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                {t.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tìm kiếm */}
        <div className="my-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>

        {/* Danh sách 10 nguyên tắc cuộn */}
        <div className="overflow-y-auto space-y-3 pr-2 flex-grow">
          {filteredPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 font-extrabold text-xs">
                    Nguyên tắc {principle.number}
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {principle.title}
                  </h3>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
                {principle.description}
              </p>

              <div className="bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white">{t.localActionHeader} </span>
                  <span>{principle.localAction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chân Modal */}
        <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Hội Đồng Quản Lý Rừng Bền Vững Quốc Tế (FSC)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
