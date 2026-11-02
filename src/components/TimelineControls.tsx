import React from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentYear: number;
  onYearChange: (year: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const TimelineControls: React.FC<Props> = ({
  currentYear,
  onYearChange,
  isPlaying,
  onTogglePlay
}) => {
  const years = [1, 2, 3, 4, 5];

  const t = {
    play: "Tự động phát hành trình 5 năm",
    pause: "Tạm dừng mô phỏng",
    prev: "Năm trước",
    next: "Năm kế tiếp",
    year: "Năm",
    labels: [
      "Năm 1: Xuống giống",
      "Năm 2: Rễ bám sâu",
      "Năm 3: Khép tán CO₂",
      "Năm 4: Thu măng FSC",
      "Năm 5+: Chuỗi Phê La"
    ]
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Các nút chọn năm */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 p-1.5 bg-slate-950/80 rounded-xl border border-slate-800">
        {years.map((yr, idx) => {
          const isActive = yr === currentYear;
          return (
            <button
              key={yr}
              onClick={() => onYearChange(yr)}
              className={`px-2 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition flex flex-col items-center justify-center cursor-pointer ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 ring-2 ring-emerald-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <span className="leading-tight">{t.year} {yr}{yr === 5 ? '+' : ''}</span>
              <span className="hidden md:inline text-[10px] font-normal opacity-80 mt-0.5 truncate max-w-full">
                {t.labels[idx].split(':')[1]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Điều khiển tự động phát và chuyển bước */}
      <div className="flex items-center justify-between gap-2 px-1 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onYearChange(Math.max(1, currentYear - 1))}
            disabled={currentYear <= 1}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 hover:text-white transition cursor-pointer"
            title={t.prev}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onTogglePlay}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer border ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{t.pause}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t.play}</span>
              </>
            )}
          </button>
          <button
            onClick={() => onYearChange(Math.min(5, currentYear + 1))}
            disabled={currentYear >= 5}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 hover:text-white transition cursor-pointer"
            title={t.next}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-400">
            Tiến độ chu trình:
          </span>
          <div className="w-20 bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
              style={{ width: `${(currentYear / 5) * 100}%` }}
            />
          </div>
          <span className="font-bold text-emerald-400 text-[11px]">
            {Math.round((currentYear / 5) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};
