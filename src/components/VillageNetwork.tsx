import React, { useState } from 'react';
import { VILLAGES_TAM_THAI } from '../data/treebankData';
import { VillageData } from '../types/treebank';
import { MapPin, Search, ArrowUpRight } from 'lucide-react';

export const VillageNetwork: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedVillage, setSelectedVillage] = useState<VillageData | null>(null);

  const t = {
    badge: "Mạng Lưới Cộng Đồng Cơ Sở",
    title: "14 Bản Làng Triển Khai Rừng Tre Mét Xã Tam Thái",
    subtitle: "Bà con đồng bào dân tộc Thái, Khơ Mú tại 14 bản xã Tam Thái, tỉnh Nghệ An trực tiếp làm chủ rừng và hưởng lợi từ chuỗi giá trị.",
    searchPlaceholder: "Tìm kiếm bản làng (Canh, Lũng, Văng, Cửa Rào...)...",
    filterAll: "Tất cả 14 bản",
    filterCertified: "Đã đạt chuẩn FSC",
    filterActive: "Đang chăm sóc",
    filterExpanding: "Đang mở rộng",
    households: "hộ dân",
    trees: "cây giống",
    area: "ha",
    survivalRate: "Tỷ lệ sống:",
    lead: "Đại diện phụ trách:",
    species: "Loài giống:",
    totalHouseholds: "Tổng số hộ tham gia",
    totalTrees: "Tổng cây đã trồng",
    totalArea: "Tổng diện tích",
    avgSurvival: "Tỷ lệ sống bình quân",
    detailTitle: "Chi tiết bản làng lâm nghiệp",
    close: "Đóng cửa sổ"
  };

  // Tính tổng
  const totalHH = VILLAGES_TAM_THAI.reduce((acc, v) => acc + v.households, 0);
  const totalTreesCount = VILLAGES_TAM_THAI.reduce((acc, v) => acc + v.treesPlanted, 0);
  const totalAreaHa = VILLAGES_TAM_THAI.reduce((acc, v) => acc + v.areaHa, 0).toFixed(1);
  const avgSurvivalRate = Math.round(
    VILLAGES_TAM_THAI.reduce((acc, v) => acc + v.survivalRate, 0) / VILLAGES_TAM_THAI.length
  );

  const filteredVillages = VILLAGES_TAM_THAI.filter((v) => {
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.leadContact.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || v.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl space-y-6">
      {/* Tiêu đề & Tổng quan */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-emerald-800/40 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Các chỉ số tổng hợp toàn xã Tam Thái */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase">{t.totalHouseholds}</div>
            <div className="text-base font-bold text-white">{totalHH}</div>
          </div>
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase">{t.totalTrees}</div>
            <div className="text-base font-bold text-emerald-400">{totalTreesCount.toLocaleString()}+</div>
          </div>
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase">{t.totalArea}</div>
            <div className="text-base font-bold text-teal-300">{totalAreaHa} ha</div>
          </div>
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase">{t.avgSurvival}</div>
            <div className="text-base font-bold text-amber-300">{avgSurvivalRate}%</div>
          </div>
        </div>
      </div>

      {/* Thanh lọc và tìm kiếm bản làng */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-grow max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setFilterStatus('certified')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              filterStatus === 'certified'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {t.filterCertified}
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              filterStatus === 'active'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {t.filterActive}
          </button>
          <button
            onClick={() => setFilterStatus('expanding')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              filterStatus === 'expanding'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {t.filterExpanding}
          </button>
        </div>
      </div>

      {/* Lưới các bản làng */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVillages.map((village) => (
          <div
            key={village.id}
            onClick={() => setSelectedVillage(village)}
            className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-950/80 transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                    {village.name}
                  </h3>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    village.status === 'certified'
                      ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                      : village.status === 'active'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                  }`}
                >
                  {village.status === 'certified' ? 'FSC' : village.status === 'active' ? 'Chăm sóc' : 'Mở rộng'}
                </span>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
                {village.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-900 space-y-2">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-900/60 p-1.5 rounded-lg">
                  <div className="text-[10px] text-slate-500">Hộ dân</div>
                  <div className="font-bold text-white">{village.households}</div>
                </div>
                <div className="bg-slate-900/60 p-1.5 rounded-lg">
                  <div className="text-[10px] text-slate-500">Cây trồng</div>
                  <div className="font-bold text-emerald-400">{village.treesPlanted.toLocaleString()}</div>
                </div>
                <div className="bg-slate-900/60 p-1.5 rounded-lg">
                  <div className="text-[10px] text-slate-500">Diện tích</div>
                  <div className="font-bold text-teal-300">{village.areaHa} ha</div>
                </div>
              </div>

              {/* Thanh tiến trình tỷ lệ sống */}
              <div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span>{t.survivalRate}</span>
                  <span className="font-bold text-emerald-400">{village.survivalRate}%</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all"
                    style={{ width: `${village.survivalRate}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>{t.lead} <strong className="text-slate-300">{village.leadContact}</strong></span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cửa sổ chi tiết bản làng */}
      {selectedVillage && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-200 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>Xã Tam Thái, Tỉnh Nghệ An</span>
                </div>
                <h3 className="text-xl font-bold text-white">{selectedVillage.name}</h3>
              </div>
              <button
                onClick={() => setSelectedVillage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedVillage.description}
            </p>

            <div className="grid grid-cols-2 gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400">Số hộ tham gia:</span>
                <div className="font-bold text-white text-sm">{selectedVillage.households} hộ gia đình</div>
              </div>
              <div>
                <span className="text-slate-400">Số lượng cây giống:</span>
                <div className="font-bold text-emerald-400 text-sm">{selectedVillage.treesPlanted.toLocaleString()} cây</div>
              </div>
              <div>
                <span className="text-slate-400">Diện tích rừng:</span>
                <div className="font-bold text-teal-300 text-sm">{selectedVillage.areaHa} ha</div>
              </div>
              <div>
                <span className="text-slate-400">Tỷ lệ cây sống nghiệm thu:</span>
                <div className="font-bold text-amber-300 text-sm">{selectedVillage.survivalRate}%</div>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-800">
                <span className="text-slate-400">Loài cây chính:</span>
                <div className="font-semibold text-emerald-300">{selectedVillage.species}</div>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400">Trưởng bản / Phụ trách:</span>
                <div className="font-semibold text-white">{selectedVillage.leadContact}</div>
              </div>
            </div>

            <button
              onClick={() => setSelectedVillage(null)}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition text-sm cursor-pointer shadow"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
