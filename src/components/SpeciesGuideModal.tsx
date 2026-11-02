import React from 'react';
import { SPECIES_SPECS } from '../data/treebankData';
import { Trees, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeciesGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const t = {
    badge: "Hồ Sơ Lâm Sinh & Sinh Học",
    title: "Loài Tre Mét & Luồng Bản Địa Xã Tam Thái",
    subtitle: "Hai loài thực vật lâm sản ngoài gỗ có giá trị sinh thái và kinh tế cao nhất tại vùng xã Tam Thái, tỉnh Nghệ An.",
    close: "Đóng cửa sổ",
    metricHeight: "Chiều cao vươn ngọn:",
    metricDiameter: "Đường kính thân gốc:",
    metricDensity: "Mật độ trồng tối ưu:",
    metricCulms: "Năng suất thân già khai thác:",
    metricShoots: "Sản lượng măng sạch:",
    metricCarbon: "Dung lượng hấp thụ CO₂:",
    metricRhizome: "Đặc tính bộ rễ (Rễ chùm giữ đất):",
    metricUses: "Ứng dụng chuỗi giá trị (Phê La & Thủ công):"
  };

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        {/* Tiêu đề Modal */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
              <Trees className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
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

        {/* Nội dung loài cây */}
        <div className="overflow-y-auto space-y-6 my-4 pr-2 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPECIES_SPECS.map((sp, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase">
                      Loài {idx === 0 ? 'Mét bản địa' : 'Luồng khổng lồ'}
                    </span>
                    <span className="text-[11px] italic text-slate-400 font-mono">
                      {sp.scientificName}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-3">
                    {sp.name}
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">{t.metricHeight}</span>
                      <strong className="text-emerald-400">{sp.culmHeight}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">{t.metricDiameter}</span>
                      <strong className="text-emerald-400">{sp.culmDiameter}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">{t.metricDensity}</span>
                      <strong className="text-white">{sp.densityPerHa}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">{t.metricCulms}</span>
                      <strong className="text-amber-300">{sp.culmYield}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">{t.metricShoots}</span>
                      <strong className="text-amber-300">{sp.shootYield}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">{t.metricCarbon}</span>
                      <strong className="text-teal-300">{sp.carbonAbsorption}</strong>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-400 block mb-1">{t.metricRhizome}</span>
                      <p className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-[11px] leading-relaxed text-slate-300">
                        {sp.rhizomeType}
                      </p>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-400 block mb-1">{t.metricUses}</span>
                      <p className="bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-500/20 text-[11px] leading-relaxed text-emerald-200">
                        {sp.keyUses}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chân Modal */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Nguồn: Viện Nông Nghiệp & Tài Nguyên - Đại Học Vinh
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
