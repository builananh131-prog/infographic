import { YearStageData, VillageData, FscPrinciple, StakeholderPillar } from '../types/treebank';

export const TIMELINE_STAGES: Record<number, YearStageData> = {
  1: {
    year: 1,
    stageBadge: "Giai đoạn 1: Khởi động & Xuống giống",
    yearTag: "NĂM THỨ 1",
    title: "Trao Giống Chuẩn & Tập Huấn Lâm Sinh 14 Bản",
    description: "Hơn 20.000 cây giống mét, luồng đạt chuẩn chất lượng được trao trực tiếp cho bà con 14 bản làng Tam Thái. Chuyên gia Đại học Vinh về tận nương rẫy tập huấn kỹ thuật bài bản từ đào hố, bón lót đến phòng trừ sâu bệnh sinh học.",
    actions: [
      {
        icon: "Sprout",
        text: "Xuống giống hơn 20.000 cây mét, luồng thuần chuẩn tại 14 bản làng."
      },
      {
        icon: "GraduationCap",
        text: "Tập huấn kỹ thuật: Đào hố 40x40x40cm, bón lót phân vi sinh Đạm Phú Mỹ, duy trì mật độ 400 cây/ha."
      },
      {
        icon: "BookOpenCheck",
        text: "Thiết lập sổ tay lâm bạ và ghi chép nhật ký sản xuất rừng có trách nhiệm theo tiêu chuẩn FSC."
      },
      {
        icon: "FileCheck",
        text: "Ký cam kết trách nhiệm giữa người dân và ban quản lý dự án bảo đảm tỷ lệ sống tối thiểu ≥ 85%."
      }
    ],
    metric1Label: "Chỉ số sinh học",
    metric1: "Tỷ lệ sống ≥ 85%",
    metric2Label: "Tác động sinh thái",
    metric2: "Phủ xanh đất dốc & Chống sạt lở",
    partners: "TreeBank, Quỹ RED, Phê La, MoMo, Đạm Phú Mỹ, UBND Xã Tam Thái",
    icon: "Sprout",
    visualTitle: "Năm 1: Xuống Giống & Chăm Sóc Sơ Khai",
    forestStatus: "Cây con mới xuống giống - Rễ bắt đầu bám đất sâu",
    trunkScaleY: 0.35,
    trunkScaleX: 0.6,
    canopyScale: 0.4,
    leftTreeScale: 0.3,
    rightTreeScale: 0.25,
    denseForestOpacity: 0,
    shootsOpacity: 0,
    ecoOpacity: 0,
    fscScale: 0,
    rootsScale: 1.0,
    rootsOpacity: 0.4,
    heightMeters: "1.2m - 1.8m",
    diameterCm: "2.0 - 3.0 cm",
    carbonTons: "3.2 tấn CO₂/ha"
  },
  2: {
    year: 2,
    stageBadge: "Giai đoạn 2: Chăm sóc & Phát triển",
    yearTag: "NĂM THỨ 2",
    title: "Phát Triển Tán Cây & Khảo Sát Giám Sát Cấp 2",
    description: "Bộ rễ bám sâu giữ đất mặt, thân mét luồng vươn cao mạnh mẽ. Đội ngũ kỹ thuật thực hiện các đợt khảo sát định kỳ đo đếm mẫu đại diện để thẩm định chỉ số sinh trưởng đường kính và chiều cao vươn ngọn.",
    actions: [
      {
        icon: "Ruler",
        text: "Đo đếm mẫu đại diện ngẫu nhiên đánh giá tốc độ sinh trưởng chiều cao và đường kính thân."
      },
      {
        icon: "Scissors",
        text: "Áp dụng kỹ thuật tỉa bớt nhánh chân, làm cỏ sinh học và ủ gốc giữ ẩm trong mùa nắng nóng."
      },
      {
        icon: "MountainSnow",
        text: "Gia cố bờ taluy dốc và rãnh phân thủy tự nhiên, bảo vệ đất mặt khỏi lũ quét mùa mưa lũ."
      },
      {
        icon: "ShieldAlert",
        text: "Phòng ngừa sâu bệnh tự nhiên bằng chế phẩm sinh học, nghiêm cấm thuốc diệt cỏ hóa học."
      }
    ],
    metric1Label: "Sinh trưởng sinh khối",
    metric1: "Khỏe mạnh: Cao 3.5m - 4.5m",
    metric2Label: "Tác động sinh thái",
    metric2: "Chống sạt lở bờ dốc 65%",
    partners: "UBND Xã Tam Thái, Viện Nông Nghiệp ĐH Vinh, TreeBank",
    icon: "TreePine",
    visualTitle: "Năm 2: Rễ Bám Sâu & Phát Triển Tán Cành",
    forestStatus: "Thân cây đạt chiều cao 3.5m - 4.5m, chùm rễ lan rộng bán kính 1.8m",
    trunkScaleY: 0.6,
    trunkScaleX: 0.8,
    canopyScale: 0.7,
    leftTreeScale: 0.5,
    rightTreeScale: 0.45,
    denseForestOpacity: 0.35,
    shootsOpacity: 0,
    ecoOpacity: 0.55,
    fscScale: 0,
    rootsScale: 1.15,
    rootsOpacity: 0.6,
    heightMeters: "3.5m - 4.5m",
    diameterCm: "4.5 - 6.0 cm",
    carbonTons: "8.5 tấn CO₂/ha"
  },
  3: {
    year: 3,
    stageBadge: "Giai đoạn 3: Rừng Khép Tán",
    yearTag: "NĂM THỨ 3",
    title: "Phủ Xanh Rừng & Thẩm Định Hấp Thụ Carbon",
    description: "Tán rừng khép kín 100% tạo màng chắn bảo vệ nguồn nước ngầm và đất ốc đảo. Đơn vị độc lập rà soát tính toán lượng hấp thụ khí carbon cho toàn bộ vùng nguyên liệu mét luồng xã Tam Thái.",
    actions: [
      {
        icon: "CloudRain",
        text: "Đo đếm dung lượng hấp thụ tích lũy trong sinh khối tre/mét trên mặt đất và mạng lưới rễ ngầm."
      },
      {
        icon: "Droplets",
        text: "Tạo nguồn sinh thủy dồi dào, giữ nguồn nước ngầm và nguồn nước sinh hoạt cho các bản hạ lưu."
      },
      {
        icon: "ShieldCheck",
        text: "Thiết lập đường ranh bao rừng phòng hộ, tuyệt đối không xâm lấn diện tích rừng tự nhiên xung yếu."
      },
      {
        icon: "Microscope",
        text: "Thu thập dữ liệu đo đạc sinh khối phục vụ hồ sơ giảm phát thải khí nhà kính."
      }
    ],
    metric1Label: "Độ che phủ",
    metric1: "Khép tán: 100%",
    metric2Label: "Tác động sinh thái",
    metric2: "Lưu giữ 12.000m³ nước/ha",
    partners: "TreeBank, Đơn vị kiểm định sinh thái độc lập, Quỹ RED",
    icon: "CloudSunRain",
    visualTitle: "Năm 3: Rừng Khép Tán & Giữ Nguồn Nước Ngầm",
    forestStatus: "Tán rừng khép kín hoàn toàn - Đạt độ vững chắc sinh thái",
    trunkScaleY: 0.85,
    trunkScaleX: 0.9,
    canopyScale: 0.9,
    leftTreeScale: 0.75,
    rightTreeScale: 0.7,
    denseForestOpacity: 0.7,
    shootsOpacity: 0.35,
    ecoOpacity: 1.0,
    fscScale: 0,
    rootsScale: 1.3,
    rootsOpacity: 0.8,
    heightMeters: "7.0m - 9.0m",
    diameterCm: "7.0 - 9.0 cm",
    carbonTons: "17.4 tấn CO₂/ha"
  },
  4: {
    year: 4,
    stageBadge: "Giai đoạn 4: Thu Hoạch Măng & Đánh Giá FSC",
    yearTag: "NĂM THỨ 4",
    title: "Sinh Sản Măng Thương Phẩm & Đánh Giá Chứng Chỉ FSC",
    description: "Rừng mét luồng đi vào chu kỳ sinh sản lứa măng thương phẩm đầu tiên. Chuyên gia kiểm định độc lập thẩm tra khắt khe 10 nguyên tắc quản lý rừng bền vững FSC, mở ra cơ hội kinh tế vượt bậc cho cộng đồng bản địa.",
    actions: [
      {
        icon: "ShoppingBag",
        text: "Khai thác măng thương phẩm theo chu kỳ bền vững: chừa lại măng mẹ khỏe mạnh tái sinh rừng."
      },
      {
        icon: "Award",
        text: "Đánh giá 10 nguyên tắc và 70 tiêu chí chứng nhận quản lý rừng bền vững FSC."
      },
      {
        icon: "Users",
        text: "Tổ chức các lớp nâng cao năng lực cho tổ hợp tác bảo vệ và khai thác lâm sản có trách nhiệm."
      },
      {
        icon: "TrendingUp",
        text: "Xây dựng chuỗi kết nối thương mại tiêu thụ măng sạch đặc sản Nghệ An ra thị trường cả nước."
      }
    ],
    metric1Label: "Sản lượng măng sạch",
    metric1: "3.5 - 5.0 tấn măng/ha/năm",
    metric2Label: "Chứng nhận quốc tế",
    metric2: "Đạt chuẩn 10 nguyên tắc FSC",
    partners: "Tổ chức Đánh giá FSC, UBND Xã Tam Thái, Hợp tác xã Lâm nghiệp",
    icon: "Award",
    visualTitle: "Năm 4: Cho Lứa Măng Đầu Tiên & Thẩm Định FSC",
    forestStatus: "Xuất hiện măng thương phẩm - Thân đạt chu kỳ khai thác tỉa ban đầu",
    trunkScaleY: 0.95,
    trunkScaleX: 0.95,
    canopyScale: 0.95,
    leftTreeScale: 0.85,
    rightTreeScale: 0.85,
    denseForestOpacity: 0.9,
    shootsOpacity: 1.0,
    ecoOpacity: 1.0,
    fscScale: 0.9,
    rootsScale: 1.45,
    rootsOpacity: 0.95,
    heightMeters: "10m - 12m",
    diameterCm: "9.0 - 11.5 cm",
    carbonTons: "26.8 tấn CO₂/ha"
  },
  5: {
    year: 5,
    stageBadge: "Giai đoạn 5: Chuỗi Giá Trị Bền Vững Khép Kín",
    yearTag: "NĂM THỨ 5+",
    title: "Thu Hoạch Thân Cây & Bao Tiêu Chế Biến Sâu (Phê La & Than Tre)",
    description: "Cây mét, luồng đạt độ già hóa chuẩn sinh học (trên 4 năm tuổi). Doanh nghiệp bao tiêu Phê La thu mua làm vật liệu kiến trúc thân thiện và than tre hoạt tính cao cấp, nâng thu nhập hộ dân lên gấp 2.5 lần.",
    actions: [
      {
        icon: "Truck",
        text: "Thu hoạch tỉa chọn lọc thân mét/luồng già đạt chuẩn FSC (giữ lại 65% số thân mẹ để rừng tự phục hồi)."
      },
      {
        icon: "Building2",
        text: "Cung ứng cho chuỗi Phê La xây dựng không gian kiến trúc xanh và nghiên cứu sản xuất than tre hoạt tính."
      },
      {
        icon: "Coins",
        text: "Bảo đảm đầu ra ổn định, tăng thu nhập bình quân mỗi hộ gia đình lên 65 - 80 triệu đồng/năm."
      },
      {
        icon: "Infinity",
        text: "Chu kỳ khai thác tuần hoàn liên tục 40 - 50 năm không cần chặt trắng hay tốn chi phí trồng lại."
      }
    ],
    metric1Label: "Thị trường tiêu thụ",
    metric1: "Bao tiêu chuỗi giá trị",
    metric2Label: "Lợi ích kinh tế",
    metric2: "Thu nhập tăng gấp 2.5 lần",
    partners: "Phê La, MoMo, Đạm Phú Mỹ, Các Hợp tác xã Lâm nghiệp Tam Thái, TreeBank",
    icon: "Handshake",
    visualTitle: "Năm 5: Thu Hoạch Bền Vững & Chế Biến Sâu",
    forestStatus: "Rừng nguyên liệu hoàn chỉnh - Chuỗi giá trị khép kín tuần hoàn",
    trunkScaleY: 1.0,
    trunkScaleX: 1.0,
    canopyScale: 1.0,
    leftTreeScale: 0.95,
    rightTreeScale: 0.95,
    denseForestOpacity: 1.0,
    shootsOpacity: 1.0,
    ecoOpacity: 1.0,
    fscScale: 1.0,
    rootsScale: 1.6,
    rootsOpacity: 1.0,
    heightMeters: "12m - 15m",
    diameterCm: "11.0 - 14.0 cm",
    carbonTons: "38.2 tấn CO₂/ha"
  }
};

export const VILLAGES_TAM_THAI: VillageData[] = [
  {
    id: "canh",
    name: "Bản Canh",
    households: 42,
    treesPlanted: 1850,
    areaHa: 4.6,
    survivalRate: 91,
    species: "Mét bản địa",
    status: "certified",
    leadContact: "Lương Văn Thắng",
    description: "Bản tiên phong triển khai trồng mét ven suối, đạt tỷ lệ sống trên 91% nhờ áp dụng nghiêm ngặt kỹ thuật ủ phân vi sinh."
  },
  {
    id: "lung",
    name: "Bản Lũng",
    households: 38,
    treesPlanted: 1600,
    areaHa: 4.0,
    survivalRate: 88,
    species: "Luồng & Mét",
    status: "certified",
    leadContact: "Vi Văn Hùng",
    description: "Đất dốc độ nghiêng 25 độ, mô hình rừng tre giúp giữ vững triền đồi chống sạt lở vào mùa mưa lũ."
  },
  {
    id: "vang",
    name: "Bản Văng",
    households: 35,
    treesPlanted: 1520,
    areaHa: 3.8,
    survivalRate: 89,
    species: "Mét",
    status: "certified",
    leadContact: "Kha Thị Mai",
    description: "Tổ hợp tác phụ nữ bản Văng dẫn đầu phong trào ghi nhật ký lâm bạ FSC bằng sổ tay số hóa."
  },
  {
    id: "huoi-cang",
    name: "Bản Huồi Cáng",
    households: 40,
    treesPlanted: 1750,
    areaHa: 4.4,
    survivalRate: 87,
    species: "Luồng",
    status: "active",
    leadContact: "Lô Văn Nam",
    description: "Khu vực thượng nguồn suối Huồi Cáng, giữ nguồn nước sinh hoạt quanh năm cho hạ du."
  },
  {
    id: "cua-rao",
    name: "Bản Cửa Rào",
    households: 45,
    treesPlanted: 2000,
    areaHa: 5.0,
    survivalRate: 92,
    species: "Mét & Luồng",
    status: "certified",
    leadContact: "Ngân Văn Bình",
    description: "Ngã ba sông Cửa Rào lịch sử, rừng tre tạo dải đệm xanh sinh thái thu hút du lịch cộng đồng trải nghiệm."
  },
  {
    id: "xoong",
    name: "Bản Xoóng",
    households: 32,
    treesPlanted: 1400,
    areaHa: 3.5,
    survivalRate: 86,
    species: "Mét",
    status: "active",
    leadContact: "Vi Thị Lan",
    description: "Bản có truyền thống đan lát thủ công, nguyên liệu mét FSC giúp tăng giá trị sản phẩm tiêu thụ."
  },
  {
    id: "ca-con",
    name: "Bản Cà Con",
    households: 36,
    treesPlanted: 1550,
    areaHa: 3.9,
    survivalRate: 88,
    species: "Luồng",
    status: "active",
    leadContact: "Lô Văn Chiến",
    description: "Độ che phủ tăng nhanh chóng sau 2 năm, chim rừng và thảm thực vật bản địa phục hồi rõ rệt."
  },
  {
    id: "la",
    name: "Bản Lạ",
    households: 30,
    treesPlanted: 1300,
    areaHa: 3.3,
    survivalRate: 90,
    species: "Mét",
    status: "certified",
    leadContact: "Kha Văn Toàn",
    description: "Áp dụng kỹ thuật bón lót phân vi sinh Đạm Phú Mỹ, đường kính gốc tre tăng trưởng vượt 20% so với dự kiến."
  },
  {
    id: "khooc",
    name: "Bản Khoọc",
    households: 28,
    treesPlanted: 1250,
    areaHa: 3.1,
    survivalRate: 86,
    species: "Mét & Luồng",
    status: "active",
    leadContact: "Nguyễn Văn Tuấn",
    description: "Khu vực giáp ranh đồi trọc cũ, nay đã được phủ kín màu xanh tươi mát với hệ thống rễ đan chặt giữ đất."
  },
  {
    id: "chan",
    name: "Bản Chắn",
    households: 34,
    treesPlanted: 1450,
    areaHa: 3.6,
    survivalRate: 87,
    species: "Mét",
    status: "active",
    leadContact: "Lương Văn Đức",
    description: "Thử nghiệm thu hoạch măng vụ sớm, sản lượng đạt trên 4 tấn/ha mang lại thu nhập tiền mặt tức thì."
  },
  {
    id: "na-mat",
    name: "Bản Na Mạt",
    households: 31,
    treesPlanted: 1350,
    areaHa: 3.4,
    survivalRate: 89,
    species: "Luồng",
    status: "active",
    leadContact: "Vi Văn Quyết",
    description: "Điểm tập huấn thực địa thường xuyên của các giảng viên Viện Nông nghiệp Đại học Vinh."
  },
  {
    id: "ve",
    name: "Bản Vẽ",
    households: 29,
    treesPlanted: 1280,
    areaHa: 3.2,
    survivalRate: 85,
    species: "Mét",
    status: "active",
    leadContact: "Kha Thị Thủy",
    description: "Khu vực lòng hồ Bản Vẽ, dải tre phòng hộ bảo vệ nguồn nước và giảm bồi lắng lòng hồ thủy điện."
  },
  {
    id: "khe-mat",
    name: "Bản Khe Mạt",
    households: 27,
    treesPlanted: 1180,
    areaHa: 2.9,
    survivalRate: 87,
    species: "Mét",
    status: "expanding",
    leadContact: "Lô Văn Trọng",
    description: "Bản đang mở rộng diện tích trồng thêm trong đợt xuống giống tiếp theo của dự án TreeBank."
  },
  {
    id: "son-ha",
    name: "Bản Sơn Hà",
    households: 25,
    treesPlanted: 1120,
    areaHa: 2.8,
    survivalRate: 88,
    species: "Mét & Luồng",
    status: "expanding",
    leadContact: "Lương Thị Huệ",
    description: "Bản vùng cao có điều kiện đất đai lý tưởng, cây mét phát triển ngọn khỏe với lóng dài, thẳng đẹp."
  }
];

export const FSC_PRINCIPLES: FscPrinciple[] = [
  {
    number: 1,
    title: "Tuân thủ pháp luật",
    description: "Quản lý rừng phải tôn trọng toàn bộ luật pháp quốc gia hiện hành và các công ước quốc tế mà Việt Nam tham gia.",
    localAction: "Xác thực 100% giấy chứng nhận quyền sử dụng đất lâm nghiệp (Sổ đỏ) cho từng hộ gia đình tại Tam Thái.",
    icon: "Scale"
  },
  {
    number: 2,
    title: "Quyền của người lao động & Điều kiện làm việc",
    description: "Duy trì hoặc nâng cao đời sống xã hội và kinh tế của người lao động trong rừng.",
    localAction: "Trang bị bảo hộ lao động đạt chuẩn, đào tạo an toàn khai thác tre tỉa và bảo hiểm tai nạn lao động nông nghiệp.",
    icon: "HardHat"
  },
  {
    number: 3,
    title: "Quyền của người bản địa",
    description: "Xác định và tôn trọng quyền hợp pháp, quyền tập quán của người bản địa trong sở hữu, sử dụng và quản lý đất.",
    localAction: "Tôn trọng tập quán đồng bào dân tộc thiểu số, bảo vệ khu rừng thiêng, đền miếu và khu vực sinh hoạt văn hóa truyền thống.",
    icon: "HeartHandshake"
  },
  {
    number: 4,
    title: "Quan hệ cộng đồng",
    description: "Duy trì hoặc nâng cao đời sống kinh tế và xã hội của các cộng đồng địa phương lâu dài.",
    localAction: "Ưu tiên tuyển dụng và đào tạo kỹ thuật viên bản địa tại 14 bản làng, công khai tài chính quỹ dự án minh bạch.",
    icon: "Users"
  },
  {
    number: 5,
    title: "Lợi ích từ rừng",
    description: "Khuyến khích sử dụng hiệu quả nhiều loại sản phẩm và dịch vụ của rừng để tăng cường tính khả thi kinh tế.",
    localAction: "Khai thác kép: Thu hoạch măng thương phẩm vào mùa mưa và thu hoạch thân mét luồng già vào mùa khô cho Phê La.",
    icon: "Coins"
  },
  {
    number: 6,
    title: "Giá trị và tác động môi trường",
    description: "Duy trì, bảo tồn hoặc phục hồi các dịch vụ hệ sinh thái và các giá trị môi trường của rừng.",
    localAction: "Nghiêm cấm chặt trắng, duy trì mô hình khai thác tỉa 30-35% thân già; không dùng thuốc trừ cỏ hóa học.",
    icon: "Leaf"
  },
  {
    number: 7,
    title: "Kế hoạch quản lý",
    description: "Có kế hoạch quản lý phù hợp với quy mô, cường độ và rủi ro của các hoạt động quản lý.",
    localAction: "Bản đồ phân lô rừng chi tiết cho từng hộ, kế hoạch khai thác luân phiên theo chu kỳ 5 năm.",
    icon: "Compass"
  },
  {
    number: 8,
    title: "Giám sát và đánh giá",
    description: "Theo dõi và đánh giá tiến độ đạt được các mục tiêu quản lý, tác động và tình trạng rừng.",
    localAction: "Đội ngũ chuyên gia ĐH Vinh định kỳ đo kiểm mẫu ô tiêu chuẩn 500m² mỗi 6 tháng để theo dõi tỷ lệ sống & sinh khối.",
    icon: "ClipboardCheck"
  },
  {
    number: 9,
    title: "Rừng có giá trị bảo tồn cao",
    description: "Duy trì hoặc nâng cao các Giá trị Bảo tồn Cao trong khu rừng được quản lý.",
    localAction: "Lập vành đai vùng đệm cách ly 50m quanh suối tự nhiên và các khu vực có nguy cơ sạt lở cao.",
    icon: "ShieldAlert"
  },
  {
    number: 10,
    title: "Thực hiện các hoạt động quản lý",
    description: "Các hoạt động quản lý rừng phải được thực hiện phù hợp với các mục tiêu kinh tế, môi trường và xã hội.",
    localAction: "Bàn giao kỹ thuật ươm dặm mầm xanh, lưu trữ nhật ký thu mua minh bạch từ nương rẫy đến nhà máy chế biến Phê La.",
    icon: "CheckCircle2"
  }
];

export const FOUR_PILLARS: StakeholderPillar[] = [
  {
    id: "chinh-quyen",
    name: "Chính Quyền Xã",
    role: "Định hướng & Pháp lý địa phương",
    entities: ["UBND Xã Tam Thái", "Trạm Khuyến Nông - Lâm Nghiệp Xã Tam Thái", "Tổ Quản Lý Rừng Xã Tam Thái"],
    responsibilities: [
      "Quy hoạch đất lâm nghiệp sản xuất và bảo vệ rừng phòng hộ xung yếu tại xã Tam Thái.",
      "Cấp và thẩm định hồ sơ đất đai (sổ đỏ) minh bạch cho từng hộ đồng bào tại các bản.",
      "Tuyên truyền vận động nhân dân chuyển đổi từ nương rẫy thoái hóa sang trồng rừng tre mét FSC.",
      "Bảo đảm an ninh rừng và phối hợp kiểm tra nghiệm thu tỷ lệ sống hàng năm."
    ],
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    icon: "Landmark"
  },
  {
    id: "to-chuc-phat-trien",
    name: "Tổ Chức Phát Triển & Quỹ",
    role: "Điều phối Nguồn lực & Nền tảng",
    entities: ["TreeBank", "Quỹ RED (Nghiên cứu & Phát triển Xã hội)", "MoMo (Ví Nhân Ái)"],
    responsibilities: [
      "Cung cấp nền tảng số hóa theo dõi và quản lý dữ liệu cây trồng Infographic Treebank.",
      "Huy động nguồn lực tài trợ cộng đồng, kết nối nguồn vốn xã hội hóa cho cây giống.",
      "Điều phối cấp phát giống, giám sát giải ngân và thẩm định tỷ lệ sống độc lập.",
      "Tổ chức chiến dịch truyền thông lan tỏa giá trị sinh thái rừng tre Việt Nam."
    ],
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    icon: "Globe"
  },
  {
    id: "nha-khoa-hoc",
    name: "Nhà Khoa Học & Viện Đào Tạo",
    role: "Nghiên cứu & Chuyển giao Kỹ thuật",
    entities: ["Viện Nông Nghiệp & Tài Nguyên - Đại Học Vinh", "Trung tâm Nghiên cứu Lâm sinh"],
    responsibilities: [
      "Tuyển chọn hom giống mét, luồng mô gen khỏe mạnh bản địa thích nghi khí hậu Nghệ An.",
      "Biên soạn giáo trình và trực tiếp tập huấn kỹ thuật lâm sinh xuống nương rẫy 14 bản.",
      "Thiết lập ô tiêu chuẩn định vị GPS để theo dõi sinh khối, đường kính và hấp thụ carbon.",
      "Tư vấn giải pháp quản lý dịch bệnh sinh học không dùng hóa chất bảo đảm tiêu chuẩn FSC."
    ],
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    icon: "GraduationCap"
  },
  {
    id: "doanh-nghiep",
    name: "Doanh Nghiệp & Đối Tác Bao Tiêu",
    role: "Bao tiêu Đầu ra & Tài trợ Phân bón",
    entities: ["Phê La (Cà phê Đậm Vị Nguyên Bản)", "Tổng Công ty Phân bón Đạm Phú Mỹ (Phân bón Phú Mỹ)"],
    responsibilities: [
      "Phê La ký cam kết bao tiêu 100% thân tre mét đạt chuẩn FSC làm vật liệu kiến trúc không gian quán.",
      "Đầu tư nghiên cứu chế biến sâu bột than tre hoạt tính và các sản phẩm mỹ nghệ thủ công.",
      "Đạm Phú Mỹ tài trợ phân bón hữu cơ vi sinh chuyên dụng bón lót cây con ban đầu.",
      "Đảm bảo giá thu mua cao hơn 20-30% so với thị trường tự do, ổn định thu nhập dài hạn cho bà con."
    ],
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    icon: "Building"
  }
];

export const SPECIES_SPECS = [
  {
    name: "Cây Mét Bản Địa (Dendrocalamus patellaris Gamble)",
    scientificName: "Dendrocalamus patellaris Gamble",
    culmHeight: "10 - 15 mét",
    culmDiameter: "6 - 12 cm",
    densityPerHa: "400 - 500 bụi/ha",
    culmYield: "800 - 1.200 cây già/ha/năm",
    shootYield: "3 - 5 tấn/ha/năm",
    carbonAbsorption: "25 - 38 tấn CO₂/ha/năm",
    rhizomeType: "Cụm hợp trục - Rễ chùm đan dày giữ đất tầng nông, chống sạt lở đồi dốc",
    keyUses: "Vật liệu kiến trúc nội thất xanh cao cấp (Phê La), than tre hoạt tính lọc nước/khí, đan lát thủ công mỹ nghệ, măng ăn giòn ngọt tự nhiên."
  },
  {
    name: "Cây Luồng Khổng Lồ (Dendrocalamus barbatus)",
    scientificName: "Dendrocalamus barbatus",
    culmHeight: "14 - 20 mét",
    culmDiameter: "10 - 16 cm",
    densityPerHa: "350 - 450 bụi/ha",
    culmYield: "600 - 900 cây già/ha/năm",
    shootYield: "4 - 6 tấn/ha/năm",
    carbonAbsorption: "30 - 42 tấn CO₂/ha/năm",
    rhizomeType: "Cụm hợp trục chịu lực cao - Thân dày, độ bền uốn vượt trội",
    keyUses: "Ván ghép thanh, cấu kiện xây dựng chịu lực cao, dầm giàn kiến trúc sinh thái, măng luồng chế biến đóng hộp."
  }
];
