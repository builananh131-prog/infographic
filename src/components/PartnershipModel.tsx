import React from 'react';
import { FOUR_PILLARS } from '../data/treebankData';
import { Landmark, Globe, GraduationCap, Building, CheckCircle2, RefreshCw, Sparkles } from 'lucide-react';

export const PartnershipModel: React.FC = () => {
  const t = {
    badge: "Cơ Chế Hợp Tác Liên Kết Bền Vững",
    title: "Mô Hình 4 Nhà Đồng Hành Cùng Rừng Tre Tam Thái",
    subtitle: "Sự cộng hưởng chặt chẽ giữa Chính quyền xã - Tổ chức phát triển - Nhà khoa học - Doanh nghiệp tạo bệ phóng vững chắc cho chuỗi giá trị nông lâm nghiệp đạt chuẩn FSC.",
    chainTitle: "Chu Trình Giá Trị Tuần Hoàn Khép Kín",
    chainSubtitle: "Từ hạt mầm ban đầu đến không gian kiến trúc Phê La & chuỗi sản phẩm sinh thái",
    steps: [
      {
        step: "01",
        title: "Giống Chuẩn & Phân Bón",
        desc: "ĐH Vinh tuyển chọn hom giống mét mô gen khỏe; Đạm Phú Mỹ tài trợ phân bón hữu cơ vi sinh bón lót."
      },
      {
        step: "02",
        title: "Trao Cây & Sổ Lâm Bạ",
        desc: "Bàn giao 20.000 cây giống cho 14 bản làng; lập hồ sơ truy xuất nguồn gốc số theo tiêu chuẩn FSC."
      },
      {
        step: "03",
        title: "Chăm Sóc & Đo Sinh Khối",
        desc: "Người dân chăm sóc không hóa chất; các nhà khoa học định kỳ đo đếm sinh khối và dung lượng hấp thụ CO₂."
      },
      {
        step: "04",
        title: "Khai Thác Măng & Thân Tỉa",
        desc: "Thu hoạch măng thương phẩm vào mùa mưa và tỉa thân già trên 4 năm tuổi mà không chặt trắng."
      },
      {
        step: "05",
        title: "Bao Tiêu Chuỗi Giá Trị",
        desc: "Thân tre mét cung ứng cho Phê La làm kiến trúc không gian quán & nghiên cứu sản xuất than tre hoạt tính."
      },
      {
        step: "06",
        title: "Thu Nhập Tăng 2.5 Lần & Rừng Vĩnh Cửu",
        desc: "Tăng thu nhập bền vững cho đồng bào, tái sinh rừng liên tục 40 - 50 năm không cần trồng lại."
      }
    ]
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark": return <Landmark className="w-5 h-5 text-blue-400" />;
      case "Globe": return <Globe className="w-5 h-5 text-emerald-400" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case "Building": return <Building className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl space-y-8">
      {/* Tiêu đề phần mô hình 4 nhà */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Lưới 4 Nhà */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FOUR_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/30 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {renderIcon(pillar.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {pillar.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {pillar.role}
                    </span>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}>
                  {pillar.name}
                </span>
              </div>

              {/* Đơn vị tham gia */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {pillar.entities.map((ent, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[11px] font-medium border border-slate-800"
                  >
                    {ent}
                  </span>
                ))}
              </div>

              {/* Trách nhiệm */}
              <div className="space-y-2 pt-2 border-t border-slate-900">
                {pillar.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sơ đồ chuỗi giá trị tuần hoàn khép kín */}
      <div className="pt-6 border-t border-emerald-800/40 space-y-4">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {t.chainTitle}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {t.chainSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {t.steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition relative group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-emerald-400 font-black text-sm tracking-wider">
                  BƯỚC {st.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition">
                {st.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
