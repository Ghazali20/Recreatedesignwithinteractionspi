import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "./imports/svg-pvmchjhs56";
import imgFrame2 from "figma:asset/af5d3cbe8c091eecd31899c9ce92a7161f3958b6.png";
import imgFrame3 from "figma:asset/e4d2ac7134ce221357d9367556f519f725aa0f9d.png";
import imgFrame4 from "figma:asset/d6b8af7e0b8f8d2b87dd7506baa220a040f5d5d3.png";
import imgImage1 from "figma:asset/ffb6c5694e823e7710694abfe32709ee7dcbb30f.png";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'layanan' | 'informasi'>('layanan');

  const slides = [
    { id: 0, img: imgFrame2 },
    { id: 1, img: imgFrame3 },
    { id: 2, img: imgFrame4 },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="content-stretch flex flex-col gap-[134px] items-start relative size-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="content-stretch flex flex-col gap-[94px] items-start relative shrink-0 w-full">
        <div className="bg-[rgba(217,211,211,0.25)] content-stretch flex flex-col gap-[99px] h-[2052px] items-center relative shrink-0 w-full">
          {/* Carousel Section */}
          <div className="h-[1013px] relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] h-[1013px] items-start relative w-full">
                <div className="h-[1013px] overflow-clip relative shrink-0 w-full">
                  {/* Background Images Container - Slide Animation */}
                  <div className="h-[1013px] overflow-hidden relative shrink-0 w-full">
                    <AnimatePresence initial={false} custom={currentSlide}>
                      <motion.div
                        key={currentSlide}
                        custom={currentSlide}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ 
                          type: "tween",
                          ease: "easeInOut",
                          duration: 0.8
                        }}
                        className="absolute inset-0"
                      >
                        <img 
                          alt="" 
                          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                          src={slides[currentSlide].img} 
                        />
                        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Static Content Layer - Always Visible on Top */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    {/* Right Arrow */}
                    <motion.div 
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextSlide}
                      transition={{ duration: 0.2 }}
                      className="absolute h-[60px] left-[1520px] top-[489px] w-[58px] cursor-pointer pointer-events-auto"
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
                        <g id="Frame 6">
                          <rect fill="black" fillOpacity="0.01" height="60" rx="20" width="58" />
                          <motion.path 
                            d={svgPaths.p31f700} 
                            fill="#FFE4E4" 
                            id="Vector"
                            whileHover={{ fill: "#fff" }}
                            transition={{ duration: 0.2 }}
                          />
                        </g>
                      </svg>
                    </motion.div>

                    {/* Left Arrow */}
                    <motion.div 
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevSlide}
                      transition={{ duration: 0.2 }}
                      className="absolute flex h-[60px] items-center justify-center left-[77px] top-[478px] w-[58px] cursor-pointer pointer-events-auto"
                    >
                      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                        <div className="h-[60px] relative w-[58px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
                            <g id="Frame 7">
                              <rect fill="black" fillOpacity="0.01" height="60" rx="20" width="58" />
                              <motion.path 
                                d={svgPaths.p31f700} 
                                fill="#FFE4E4" 
                                id="Vector"
                                whileHover={{ fill: "#fff" }}
                                transition={{ duration: 0.2 }}
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Slide Indicators */}
                    <div className="absolute content-stretch flex items-center left-[619px] top-[934px] gap-2 pointer-events-auto">
                      {slides.map((_, index) => (
                        <motion.div
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className="cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="h-[20.514px] relative shrink-0 w-[107px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 21">
                              <g id="Frame 17">
                                <motion.path 
                                  d="M10 10L97 10.5" 
                                  id="Vector 2" 
                                  stroke={index === currentSlide ? "white" : "rgba(255,255,255,0.5)"} 
                                  strokeLinecap="round" 
                                  strokeWidth="10"
                                  animate={{ 
                                    stroke: index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
                                    strokeWidth: index === currentSlide ? 10 : 8
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              </g>
                            </svg>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hero Content */}
                    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[191px] top-[253px] w-[734px] pointer-events-auto">
                      <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">
                          <span>{`LEBIH DARI 100 `}</span>RTH DKI JAKARTA
                        </p>
                      </div>

                      <div className="content-stretch flex flex-col h-[165px] items-start leading-[normal] not-italic relative shrink-0 text-white w-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[134px] relative shrink-0 text-[55px] w-[522px]">Taman Hutan Umum DKI Jakarta</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium h-[39px] relative shrink-0 text-[20px] w-full">
                          Melayani dengan sepenuh hati untuk ketenangan abadi Layanan Kami
                        </p>
                      </div>

                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                        <motion.div 
                          whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0,156,98,0.25)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveTab('layanan')}
                          transition={{ duration: 0.2 }}
                          className="bg-[#009c62] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[12px] relative rounded-[15px] shrink-0 cursor-pointer"
                        >
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Layanan Kami</p>
                        </motion.div>

                        <motion.div 
                          whileHover={{ scale: 1.05, backgroundColor: "#d4caca" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveTab('informasi')}
                          transition={{ duration: 0.2 }}
                          className="bg-[#ede6e6] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[12px] relative rounded-[15px] shrink-0 cursor-pointer"
                        >
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#010000] text-[25px] text-nowrap whitespace-pre">Informasi TPU</p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex gap-[40px] items-start left-[692px] rounded-[10px] top-[93px] w-[773px] pointer-events-auto">
                      {['Beranda', 'Tentang', 'Layanan', 'Kontak'].map((item, index) => (
                        <motion.div 
                          key={item}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 cursor-pointer"
                        >
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">{item}</p>
                        </motion.div>
                      ))}

                      <motion.div 
                        whileHover={{ scale: 1.05, backgroundColor: "#d4caca" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#ede6e6] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[12px] relative rounded-[15px] shrink-0 cursor-pointer"
                      >
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#010000] text-[25px] text-nowrap whitespace-pre">Buat Akun</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="box-border content-stretch flex flex-col items-center pb-[14px] pt-0 px-0 relative shrink-0 w-[1343px]"
          >
            <div className="h-[346px] mb-[-14px] relative shrink-0 w-[1342px]">
              <div className="absolute contents left-[28px] top-0">
                {/* Statistics Cards */}
                {[
                  { icon: svgPaths.p437b580, bg: '#2FBEDB', iconBg: '#2166DD', number: '24+', label: 'Lokasi TPU', left: 28, width: 389.005 },
                  { icon: svgPaths.pb9b6400, bg: '#9CF4A2', iconBg: '#329638', number: '1000+', label: 'Pelayanan per Bulan', left: 459.27, width: 382.282 },
                  { icon: svgPaths.p29674200, bg: '#3EB045', iconBg: '#21671C', number: '100+', label: 'Hektar Area Hijau', left: 890.53, width: 426.465 },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: "0px 15px 30px rgba(0,0,0,0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`absolute bg-white box-border content-stretch flex flex-col h-[262px] items-start left-[${card.left}px] rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] top-0 w-[${card.width}px] cursor-pointer`}
                    style={{ left: `${card.left}px`, width: `${card.width}px` }}
                  >
                    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[10px] pr-0 pt-[10px] relative shrink-0">
                      <motion.div 
                        animate={{ 
                          rotate: hoveredCard === index ? 360 : 0,
                          scale: hoveredCard === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.6 }}
                        className="h-[42px] relative shrink-0 w-[40px]"
                      >
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
                          <g>
                            <rect fill={card.bg} height="42" rx="12" width="40" />
                            {index === 0 && <path d={card.icon} stroke={card.iconBg} strokeLinecap="round" strokeWidth="1.5" />}
                            {index === 1 && <path d={card.icon} fill={card.iconBg} />}
                            {index === 2 && <path d={card.icon} stroke={card.iconBg} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />}
                          </g>
                        </svg>
                      </motion.div>
                    </div>
                    <motion.div 
                      animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0"
                    >
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">{card.number}</p>
                    </motion.div>
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[20px] text-nowrap whitespace-pre">{card.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="box-border content-stretch flex flex-col gap-[34px] h-[448px] items-start mb-[-14px] relative shrink-0 w-[1286px]"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-[#009c62] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Tentang Kami</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="content-stretch flex items-end relative shrink-0 w-[1343px]"
              >
                <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[755px]">
                  <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[50px] text-black w-[745px]">Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta</p>
                        </div>
                      </div>
                    </div>

                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[734px]">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] w-[706px]">Menuju Provinsi DKI Jakarta sebagai Ibu Kota Negara dan Kota Berbasis Jasa untuk Mewujudkan Kesejahteraan Masyarakat yang Berkeadilan dan Berkelanjutan.</p>
                    </div>

                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] w-[684px]">Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan Terjangkau bagi warga, menyediakan urusan pemerintahan di bidang Pertamanan dan Pemakaman.</p>
                    </div>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[529px]"
                >
                  {/* Info Cards */}
                  {[
                    { bg: 'from-[#055ac8] to-[#055ac8]', iconBg: '#2FBEDB', icon: svgPaths.p437b580, title: 'Provinsi Daerah Khusus Jakarta', desc: 'Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan Terjangkau bagi warga untuk mewujudkan kesejahteraan masyarakat' },
                    { bg: 'from-[#3eb045] to-[#3eb045]', iconBg: '#0E9217', icon: svgPaths.p29674200, title: 'Dinas Pertamanan dan Hutan Kota', desc: 'Memberikan urusan pemerintahan di bidang Pertamanan dan pengelolaan Pemakaman untuk masyarakat DKI Jakarta' }
                  ].map((info, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-gradient-to-r box-border content-stretch flex ${info.bg} h-[130px] items-center justify-between pb-0 pt-[5px] px-0 relative rounded-[10px] shrink-0 w-full cursor-pointer`}
                    >
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[529px]">
                        <div className={`box-border content-stretch flex gap-[10px] h-[53px] items-center pl-[10px] pr-0 py-0 relative shrink-0 w-[56px]`} style={{ backgroundColor: info.bg.split(' ')[0].split('[')[1].split(']')[0] }}>
                          <div className="h-[42px] relative shrink-0 w-[40px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
                              <g>
                                <rect fill={info.iconBg} height="42" rx="12" width="40" />
                                <path d={info.icon} stroke="white" strokeLinecap="round" strokeLinejoin={index === 1 ? "round" : undefined} strokeWidth="1.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className={`content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[13px] h-[121px] items-start leading-[normal] not-italic relative shrink-0 w-[463px]`} style={{ backgroundColor: info.bg.split(' ')[0].split('[')[1].split(']')[0] }}>
                          <p className="relative shrink-0 text-[25px] text-white w-full">{info.title}</p>
                          <p className="relative shrink-0 text-[17px] text-[rgba(255,255,255,0.78)] w-full">{info.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                {[svgPaths, svgPaths, svgPaths].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="h-[20px] relative shrink-0 w-[127px]"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 20">
                      <g>
                        <path d="M10 10H117" stroke={i === 0 ? "#3EB045" : i === 1 ? "#9CF4A2" : "#055AC8"} strokeLinecap="round" strokeWidth="8" />
                      </g>
                    </svg>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="content-stretch flex flex-col gap-[90px] h-[1156px] items-center relative shrink-0 w-full"
        >
          <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[717px]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#009c62] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0"
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Layanan Kami</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0"
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[50px] text-black text-nowrap whitespace-pre">Layanan Masyarakat</p>
            </motion.div>

            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-center w-[697px]">Berbagai layanan publik yang kami sediakan untuk kemudahan dan kenyamanan masyarakat DKI Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-center flex flex-wrap gap-[8px] h-[824px] items-center justify-center relative shrink-0 w-[1450px]">
            {/* Service Cards */}
            {[
              { bg: '#96a497', icon: 'document', title: 'Pelayanan Pemakaman', desc: 'Layanan administrasi dan pengurusan pemakaman', items: ['Penggunaan Perpanjangan Pemakaman', 'Ketersediaan Perpet Makam'] },
              { bg: '#96A497', icon: 'user', title: 'Pemulasaraan Jenazah', desc: 'Pelayanan pemulasaraan jenazah terlantar', items: ['Pelayanan Jenazah Terlantar', 'Petugas Pemulasaraan Jenazah'] },
              { bg: '#9CF4A2', icon: 'tree', title: 'Kehutanan', desc: 'Pengelolaan dan pemanfaatan hutan kota', items: ['Pemanfaatan Hutan DKI Jakarta', 'Virtual Tour Kawasan Ekowisata Mangrove', 'Kelompok Tani Hutan (KTH)'] },
              { bg: '#009C62', icon: 'park', title: 'Pertamanan', desc: 'Pengelolaan taman dan ruang terbuka hijau', items: ['Data Pengurusan Taman', 'Sambutan Pohon Tumbang', 'Permohonan Izin Lokasi Taman'] },
              { bg: '#2FBEDB', icon: 'road', title: 'Jalur Hijau', desc: 'Pengelolaan jalur hijau kota', items: ['Data dan Informasi Jalur Hijau', 'Permohonan Pemanfaatan Jalur Hijau'] },
              { bg: '#dcfb6a', icon: 'plant', title: 'Tanaman Penghijauan', desc: 'Program penghijauan dan bibit tanaman', items: ['Permintaan Bibit Tanaman', 'Kesehatan Pohon Terintegrasi'] }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
                className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]"
              >
                <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`box-border content-stretch flex flex-col gap-[10px] h-[84px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[92px]`}
                      style={{ backgroundColor: service.bg }}
                    >
                      <div className="relative shrink-0 size-[50px]">
                        {service.icon === 'document' && (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                            <g>
                              <path d={svgPaths.p18a25180} fill="#7A6B6B" />
                              <path clipRule="evenodd" d={svgPaths.p284ae880} fill="#7A6B6B" fillRule="evenodd" />
                            </g>
                          </svg>
                        )}
                        {service.icon === 'user' && (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                            <g>
                              <rect fill={service.bg} height="84" rx="12" width="92" />
                              <path d={svgPaths.p13c95c00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                          </svg>
                        )}
                        {service.icon === 'tree' && (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                            <g>
                              <rect fill={service.bg} height="84" rx="12" width="92" />
                              <path d={svgPaths.p2e826000} fill="#009C62" />
                            </g>
                          </svg>
                        )}
                        {service.icon === 'park' && (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                            <g>
                              <rect fill={service.bg} height="84" rx="12" width="92" />
                              <path d={svgPaths.p298af000} fill="#9CF4A2" />
                            </g>
                          </svg>
                        )}
                        {service.icon === 'road' && (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                            <g>
                              <rect fill={service.bg} height="84" rx="12" width="92" />
                              <path d={svgPaths.pf4dd840} fill="#96EAFF" />
                            </g>
                          </svg>
                        )}
                        {service.icon === 'plant' && (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                            <g>
                              <path d={svgPaths.p24e08b80} fill="#889E4C" />
                            </g>
                          </svg>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">{service.title}</p>
                  </div>

                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">{service.desc}</p>
                  </div>

                  <div className={`box-border content-stretch flex gap-[10px] items-center justify-center pb-0 ${service.items.length > 2 ? 'pt-[23px]' : ''} px-0 relative shrink-0 ${service.items.length > 2 ? 'h-[132px]' : 'h-[119px]'}`}>
                    <ul className={`block font-['Inter:Semi_Bold',sans-serif] font-semibold ${service.items.length > 2 ? 'h-[145px]' : 'h-[97px]'} leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]`}>
                      {service.items.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className={`${i === service.items.length - 1 ? 'ms-[22.5px]' : 'mb-0 ms-[22.5px]'}`}
                        >
                          <span className="leading-[30px]">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none rotate-[180deg]">
                            <div className="relative size-0">
                              <div className="absolute inset-[-4px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                  <path d="M4 4H4.0001" stroke="white" strokeLinecap="round" strokeWidth="8" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact & Footer Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-[rgba(217,211,211,0.25)] box-border content-stretch flex flex-col gap-[111px] h-[1053px] items-center pb-0 pt-[50px] px-0 relative shrink-0 w-full"
      >
        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-[#21671c] from-[0.481%] gap-x-[160px] gap-y-[15px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[auto_auto_auto_auto] h-auto pb-[30px] pt-0 px-[30px] relative rounded-[20px] shrink-0 to-[#009c62] to-[84.135%] w-[1247px]"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="[grid-area:1_/_1_/_2_/_3] bg-[rgba(39,135,100,0.2)] box-border content-stretch flex gap-[10px] items-start pb-0 pl-[30px] pr-[10px] pt-[30px] relative rounded-[20px] shrink-0"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[50px] text-nowrap text-white whitespace-pre">Hubungi Kami</p>
          </motion.div>

          {/* Email */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="[grid-area:2_/_1] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-center pl-[10px] pr-[10px] py-[5px] relative rounded-[10px] shrink-0 cursor-pointer"
          >
            <div className="bg-[#9cf4a2] box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[70px]">
              <div className="relative shrink-0 size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                  <g>
                    <path d={svgPaths.pa2b7100} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3px] items-start leading-[normal] not-italic relative shrink-0">
              <p className="relative text-[#9cf4a2] text-[15px]">Email</p>
              <p className="relative text-[14px] text-white">dktamandki@jakarta.go.id</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="[grid-area:3_/_1] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-center pl-[10px] pr-[10px] py-[5px] relative rounded-[10px] shrink-0 cursor-pointer"
          >
            <div className="bg-[#9cf4a2] box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[70px]">
              <div className="relative shrink-0 size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                  <g>
                    <path d={svgPaths.p32a61280} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start leading-[normal] not-italic relative shrink-0">
              <p className="relative text-[#9cf4a2] text-[15px]">Telepon</p>
              <p className="relative text-[14px] text-white">+(021) 832 8464</p>
              <p className="relative text-[14px] text-white">+(021) 832 8454</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="[grid-area:4_/_1] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-center pl-[10px] pr-[10px] py-[5px] relative rounded-[10px] shrink-0 cursor-pointer"
          >
            <div className="bg-[#9cf4a2] box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[70px]">
              <div className="relative shrink-0 size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                  <g>
                    <path d={svgPaths.p17e3f270} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start leading-[normal] not-italic relative shrink-0">
              <p className="relative text-[#9cf4a2] text-[15px]">Jam Operasional</p>
              <p className="relative text-[13px] text-white">Senin - Jumat: 08:00 - 16:00 WIB</p>
              <p className="relative text-[#9cf4a2] text-[11px]">Sabtu - Minggu: Tutup</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="[grid-area:2_/_2] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-start pl-[10px] pr-[10px] py-[5px] relative rounded-[10px] shrink-0 cursor-pointer"
          >
            <div className="bg-[#9cf4a2] box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[70px]">
              <div className="relative shrink-0 size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
                  <g>
                    <path d={svgPaths.pd706800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p2424f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3px] items-start leading-[normal] not-italic relative flex-1">
              <p className="relative text-[#9cf4a2] text-[15px]">Alamat</p>
              <p className="relative text-[13px] text-white leading-[1.4]">Jl. ARIDA KS. TUBUN No.1 Kel. Petamburan, Kec. Tanah Abang, Kota Jakarta Pusat, DKI Jakarta, Indonesia</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="[grid-area:3_/_2_/_5_/_3] bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[11px] items-start pl-[10px] pr-0 py-0 relative rounded-[20px] shrink-0"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Ikuti Kami</p>
            </div>
            <div className="content-stretch flex gap-[23px] items-start relative shrink-0 w-full">
              {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((social, i) => (
                <motion.div 
                  key={social}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative shrink-0 size-[35px] cursor-pointer"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                    <g>
                      <rect fill="black" fillOpacity="0.01" height="35" rx="5" width="35" />
                      {i === 0 && <path clipRule="evenodd" d={svgPaths.p38923180} fill="white" fillRule="evenodd" />}
                      {i === 1 && (
                        <g>
                          <g></g>
                          <path clipRule="evenodd" d={svgPaths.p1afa5880} fill="white" fillRule="evenodd" />
                        </g>
                      )}
                      {i === 2 && (
                        <>
                          <path d={svgPaths.p3fce8600} fill="white" />
                          <path d={svgPaths.p25cd88f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </>
                      )}
                      {i === 3 && (
                        <g>
                          <g></g>
                          <path clipRule="evenodd" d={svgPaths.p21edcc00} fill="white" fillRule="evenodd" />
                        </g>
                      )}
                    </g>
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full"
        >
          <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[1400px]">
            <div className="flex-none rotate-[359.836deg]">
              <div className="h-0 relative w-[1400.01px]">
                <div className="absolute inset-[-1px_-0.07%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 2">
                    <motion.path 
                      d="M1 1H1401.01" 
                      stroke="#96A497" 
                      strokeLinecap="round" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="content-stretch flex gap-[36px] items-start relative shrink-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
                <div className="h-[79px] relative shrink-0 w-[70px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black w-[182px]">Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta</p>
              </div>
            </div>

            {/* Footer Links */}
            {[
              { title: 'Layanan', items: ['Pelayanan Pemakaman', 'Pemulasaraan Jenazah', 'Kehutanan', 'Pertamanan'] },
              { title: 'Informasi', items: ['Pelayanan Pemakaman', 'Pemulasaraan Jenazah', 'Kehutanan', 'Pertamanan'] },
            ].map((section, index) => (
              <div key={index} className="content-stretch flex flex-col items-start relative shrink-0 w-[194px]">
                <div className={`box-border content-stretch flex gap-[10px] items-center justify-center ${index === 0 ? 'pl-px' : 'pl-0'} pr-[10px] py-[10px] relative shrink-0`}>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">{section.title}</p>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className={`box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] ${index === 0 ? 'pl-px' : 'pl-0'} pr-[10px] pt-0 relative w-full`}>
                      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px] whitespace-pre">
                        {section.items.map((item, i) => (
                          <motion.p 
                            key={i}
                            whileHover={{ x: 5, color: "#009c62" }}
                            className={i === section.items.length - 1 ? 'cursor-pointer' : 'mb-0 cursor-pointer'}
                          >
                            {item}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="content-stretch flex flex-col h-[135px] items-start relative shrink-0 w-[259px]">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-[10px] py-[10px] relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Newsletter</p>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pl-0 pr-[10px] pt-0 relative w-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] w-[247px]">Dapatkan informasi terbaru dari kami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[1400px]">
            <div className="flex-none rotate-[359.836deg]">
              <div className="h-0 relative w-[1400.01px]">
                <div className="absolute inset-[-1px_-0.07%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 2">
                    <motion.path 
                      d="M1 1H1401.01" 
                      stroke="#96A497" 
                      strokeLinecap="round" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[15px] text-black text-center w-[min-content]">Copyright © 2019-2025 TPU DKI Jakarta. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}