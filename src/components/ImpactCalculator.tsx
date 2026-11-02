import React, { useState, useId } from 'react';
import { Calculator, Trees, Wind, Droplets, Sparkles, Sliders } from 'lucide-react';

export const ImpactCalculator: React.FC = () => {
  const [areaHa, setAreaHa] = useState<number>(45);
  const [forestAge, setForestAge] = useState<number>(5);
  const [survivalRate, setSurvivalRate] = useState<number>(88);
  const [density, setDensity] = useState<number>(450);

  const areaHaInputId = useId();
  const forestAgeInputId = useId();
  const survivalRateInputId = useId();
  const densityInputId = useId();

  // Công thức tính toán dựa trên dữ liệu lâm sinh Đại học Vinh & định mức FSC
  const effectiveClumps = Math.round(areaHa * density * (survivalRate / 100));

  // Hấp thụ CO2: rừng non ~4.5 t/ha, rừng trưởng thành đạt chuẩn FSC ~36.5 t/ha/năm
  const carbonRatePerHa = forestAge === 1 ? 4.5 : forestAge === 2 ? 10.5 : forestAge === 3 ? 18.5 : forestAge === 4 ? 28.0 : 36.5;
  const annualCarbonTons = Math.round(areaHa * carbonRatePerHa);
  const cumulativeCarbonTons = Math.round(annualCarbonTons * (forestAge * 0.75 + 0.25));

  // Măng sạch thương phẩm: bắt đầu cho lứa từ năm 3 (~1.8 t/ha), năm 5+ đạt ~4.6 t/ha
  const shootYieldTons = forestAge < 3 ? 0 : forestAge === 3 ? Math.round(areaHa * 1.8) : forestAge === 4 ? Math.round(areaHa * 3.8) : Math.round(areaHa * 4.6);
  const shootRevenueMillionVND = Math.round(shootYieldTons * 18); // 18.000 đồng/kg = 18 triệu đồng/tấn

  // Thân mét khai thác tỉa chọn lọc từ năm 4 (~450 thân/ha), năm 5+ (~920 thân/ha)
  const culmsPerHa = forestAge < 4 ? 0 : forestAge === 4 ? 450 : 920;
  const totalCulmsYield = Math.round(areaHa * culmsPerHa * (survivalRate / 100));
  const culmRevenueMillionVND = Math.round((totalCulmsYield * 75000) / 1000000); // 75.000 đồng/thân chuẩn tiêu thụ

  // Tổng doanh thu lâm nghiệp hàng năm
  const totalRevenueMillionVND = shootRevenueMillionVND + culmRevenueMillionVND;
  const avgHouseholds = Math.max(1, Math.round(areaHa * 8.5));
  const incomePerHouseholdMillion = Math.round(totalRevenueMillionVND / avgHouseholds);

  // Chỉ số sinh thái
  const groundwaterM3 = Math.round(areaHa * (forestAge * 2200 + 3500));
  const erosionMitigationPercent = Math.min(96, Math.round(35 + forestAge * 12 * (survivalRate / 100)));

  const t = {
    badge: "Công Cụ Đo Lường Hiệu Quả Đầu Tư Xanh",
    title: "Bộ Tính Toán Tác Động Sinh Thái & Doanh Thu FSC",
    subtitle: "Mô phỏng dựa trên công thức lâm sinh Đại học Vinh và dữ liệu bao tiêu chuỗi giá trị tại xã Tam Thái, Nghệ An.",
    presets: "Mô hình nhanh:",
    preset1: "1 Bản điển hình (5 ha)",
    preset2: "Toàn xã Tam Thái (45 ha)",
    preset3: "Vùng mở rộng (120 ha)",
    paramsTitle: "Tham Số Đầu Vào",
    areaLabel: "Diện tích trồng mét / luồng:",
    ageLabel: "Tuổi rừng hiện tại:",
    years: "năm",
    survivalLabel: "Tỷ lệ sống thành rừng:",
    densityLabel: "Mật độ trồng ban đầu:",
    clumpsPerHa: "bụi / ha",
    resultsTitle: "Kết Quả Tác Động Dự Kiến",
    carbonBoxTitle: "Hấp Thụ Khí Nhà Kính CO₂",
    carbonAnnual: "tấn CO₂ / năm",
    carbonCumul: "tấn CO₂ tích lũy",
    shootBoxTitle: "Măng Sạch Thương Phẩm",
    shootTons: "tấn măng / năm",
    shootRev: "triệu đồng thu từ măng",
    culmBoxTitle: "Thân Mét Khai Thác Chuẩn FSC",
    culmCount: "thân tre đạt chuẩn / năm",
    culmRev: "triệu đồng tiêu thụ thân",
    totalRevenueTitle: "Tổng Doanh Thu Lâm Nghiệp Hàng Năm",
    millionVnd: "Triệu đồng / năm",
    perHousehold: "Thu nhập ước tính:",
    perHouseholdUnit: "triệu đồng / hộ gia đình / năm (cao gấp 2.5 lần so với trồng keo truyền thống)",
    waterTitle: "Bảo Tồn Nguồn Nước Ngầm",
    waterUnit: "m³ nước lưu giữ / năm",
    erosionTitle: "Chống Xói Mòn Đất Dốc",
    erosionUnit: "độ ổn định tầng đất mặt",
    note: "* Lưu ý: Số liệu tính toán dựa trên chu kỳ khai thác tỉa bền vững 30-35% trữ lượng rừng, duy trì độ che phủ liên tục 40-50 năm không cần chặt trắng."
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl space-y-6">
      {/* Tiêu đề công cụ tính toán */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-emerald-800/40 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Các nút mẫu nhanh */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">{t.presets}</span>
          <button
            onClick={() => { setAreaHa(5); setForestAge(4); setSurvivalRate(90); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              areaHa === 5 ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            {t.preset1}
          </button>
          <button
            onClick={() => { setAreaHa(45); setForestAge(5); setSurvivalRate(88); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              areaHa === 45 ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            {t.preset2}
          </button>
          <button
            onClick={() => { setAreaHa(120); setForestAge(5); setSurvivalRate(92); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              areaHa === 120 ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            {t.preset3}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Cột trái: Thanh trượt tham số */}
        <div className="lg:col-span-5 bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-5">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 uppercase tracking-wider pb-2 border-b border-slate-800">
            <Sliders className="w-4 h-4" />
            <span>{t.paramsTitle}</span>
          </div>

          {/* Thanh trượt diện tích */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor={areaHaInputId} className="text-slate-300 font-medium">{t.areaLabel}</label>
              <span className="text-emerald-400 font-bold text-sm">{areaHa} ha</span>
            </div>
            <input
              id={areaHaInputId}
              type="range"
              min="1"
              max="200"
              step="1"
              value={areaHa}
              onChange={(e) => setAreaHa(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              aria-label={t.areaLabel}
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>1 ha</span>
              <span>100 ha</span>
              <span>200 ha</span>
            </div>
          </div>

          {/* Thanh trượt tuổi rừng */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor={forestAgeInputId} className="text-slate-300 font-medium">{t.ageLabel}</label>
              <span className="text-amber-400 font-bold text-sm">{forestAge} {t.years}</span>
            </div>
            <input
              id={forestAgeInputId}
              type="range"
              min="1"
              max="10"
              step="1"
              value={forestAge}
              onChange={(e) => setForestAge(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              aria-label={t.ageLabel}
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>1 {t.years} (Xuống giống)</span>
              <span>5 {t.years} (Trưởng thành)</span>
              <span>10 {t.years}</span>
            </div>
          </div>

          {/* Thanh trượt tỷ lệ sống */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor={survivalRateInputId} className="text-slate-300 font-medium">{t.survivalLabel}</label>
              <span className="text-teal-400 font-bold text-sm">{survivalRate}%</span>
            </div>
            <input
              id={survivalRateInputId}
              type="range"
              min="70"
              max="98"
              step="1"
              value={survivalRate}
              onChange={(e) => setSurvivalRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
              aria-label={t.survivalLabel}
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>70% (Tối thiểu)</span>
              <span>85% (Chuẩn hợp đồng)</span>
              <span>98%</span>
            </div>
          </div>

          {/* Thanh trượt mật độ trồng */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor={densityInputId} className="text-slate-300 font-medium">{t.densityLabel}</label>
              <span className="text-emerald-300 font-bold text-sm">{density} {t.clumpsPerHa}</span>
            </div>
            <input
              id={densityInputId}
              type="range"
              min="350"
              max="550"
              step="25"
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              aria-label={t.densityLabel}
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>350 bụi/ha</span>
              <span>450 (Tiêu chuẩn)</span>
              <span>550 bụi/ha</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Tổng số bụi mét thành rừng:</span>
            <span className="font-bold text-white text-sm">{effectiveClumps.toLocaleString()} bụi</span>
          </div>
        </div>

        {/* Cột phải: Các chỉ số hiệu quả được tính toán */}
        <div className="lg:col-span-7 space-y-4">
          {/* Tổng doanh thu */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {t.totalRevenueTitle}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                  {totalRevenueMillionVND.toLocaleString()} <span className="text-emerald-400 text-xl font-bold">{t.millionVnd}</span>
                </div>
              </div>
              <div className="bg-emerald-500/20 px-3.5 py-2 rounded-xl border border-emerald-500/40 text-right">
                <div className="text-[11px] text-slate-300 font-medium">{t.perHousehold}</div>
                <div className="text-xl font-black text-amber-300">
                  ~{incomePerHouseholdMillion.toLocaleString()} triệu / hộ
                </div>
              </div>
            </div>
            <div className="text-xs text-emerald-300/80 mt-2 font-medium">
              ✓ {t.perHouseholdUnit}
            </div>
          </div>

          {/* Lưới 4 chỉ số tác động */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Khí Carbon */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-teal-500/30 transition">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase mb-2">
                <Wind className="w-4 h-4" />
                <span>{t.carbonBoxTitle}</span>
              </div>
              <div className="text-2xl font-black text-white">
                {annualCarbonTons.toLocaleString()} <span className="text-xs font-normal text-slate-400">{t.carbonAnnual}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Tích lũy {forestAge} năm: <strong className="text-teal-300">{cumulativeCarbonTons.toLocaleString()} {t.carbonCumul}</strong>
              </div>
            </div>

            {/* Măng sạch */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-amber-500/30 transition">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.shootBoxTitle}</span>
              </div>
              <div className="text-2xl font-black text-white">
                {shootYieldTons.toLocaleString()} <span className="text-xs font-normal text-slate-400">{t.shootTons}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Doanh thu măng: <strong className="text-amber-300">~{shootRevenueMillionVND.toLocaleString()} {t.shootRev}</strong>
              </div>
            </div>

            {/* Thân tre khai thác */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-2">
                <Trees className="w-4 h-4" />
                <span>{t.culmBoxTitle}</span>
              </div>
              <div className="text-2xl font-black text-white">
                {totalCulmsYield.toLocaleString()} <span className="text-xs font-normal text-slate-400">{t.culmCount}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Doanh thu thân tre: <strong className="text-emerald-300">~{culmRevenueMillionVND.toLocaleString()} {t.culmRev}</strong>
              </div>
            </div>

            {/* Giữ nước & Chống xói mòn */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-blue-500/30 transition">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase mb-2">
                <Droplets className="w-4 h-4" />
                <span>{t.waterTitle}</span>
              </div>
              <div className="text-2xl font-black text-white">
                {groundwaterM3.toLocaleString()} <span className="text-xs font-normal text-slate-400">{t.waterUnit}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Chống trượt sạt lở bờ dốc: <strong className="text-blue-300">+{erosionMitigationPercent}% {t.erosionUnit}</strong>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 italic">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
};
