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
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden bg-white">
      {/* Hero Carousel Section - Full Width */}
      <div className="w-full h-[1013px] relative bg-[rgba(217,211,211,0.25)]">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background Images Container */}
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
                className="w-full h-full object-cover" 
                src={slides[currentSlide].img} 
              />
              <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay - Centered with max-width */}
          <div className="absolute inset-0 z-10">
            <div className="relative w-full h-full max-w-[1600px] mx-auto px-20">
              {/* Navigation Menu - Top Right */}
              <div className="absolute top-[93px] right-8 flex gap-[40px] items-center">
                {['Beranda', 'Tentang', 'Layanan', 'Kontak'].map((item) => (
                  <motion.div 
                    key={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer p-[10px]"
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[25px] text-white">{item}</p>
                  </motion.div>
                ))}
                <motion.div 
                  whileHover={{ scale: 1.05, backgroundColor: "#d4caca" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#ede6e6] px-[10px] py-[12px] rounded-[15px] cursor-pointer"
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#010000] text-[25px]">Buat Akun</p>
                </motion.div>
              </div>

              {/* Hero Content - Center Left */}
              <div className="absolute left-8 top-[253px] max-w-[734px] flex flex-col gap-[8px]">
                <div className="bg-[rgba(0,0,0,0)] p-[10px] rounded-[20px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[25px] text-white">
                    <span>LEBIH DARI 100 </span>RTH DKI JAKARTA
                  </p>
                </div>

                <div className="flex flex-col text-white">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[55px] leading-tight">Taman Hutan Umum DKI Jakarta</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] mt-4">
                    Melayani dengan sepenuh hati untuk ketenangan abadi Layanan Kami
                  </p>
                </div>

                <div className="flex gap-[16px] items-center mt-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0,156,98,0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab('layanan')}
                    transition={{ duration: 0.2 }}
                    className="bg-[#009c62] px-[10px] py-[12px] rounded-[15px] cursor-pointer"
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[25px] text-white">Layanan Kami</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.05, backgroundColor: "#d4caca" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab('informasi')}
                    transition={{ duration: 0.2 }}
                    className="bg-[#ede6e6] px-[10px] py-[12px] rounded-[15px] cursor-pointer"
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#010000] text-[25px]">Informasi TPU</p>
                  </motion.div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <motion.div 
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                transition={{ duration: 0.2 }}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-[58px] h-[60px] cursor-pointer"
              >
                <div className="rotate-[180deg] scale-y-[-100%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
                    <g>
                      <rect fill="black" fillOpacity="0.01" height="60" rx="20" width="58" />
                      <motion.path 
                        d={svgPaths.p31f700} 
                        fill="#FFE4E4" 
                        whileHover={{ fill: "#fff" }}
                        transition={{ duration: 0.2 }}
                      />
                    </g>
                  </svg>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                transition={{ duration: 0.2 }}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-[58px] h-[60px] cursor-pointer"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
                  <g>
                    <rect fill="black" fillOpacity="0.01" height="60" rx="20" width="58" />
                    <motion.path 
                      d={svgPaths.p31f700} 
                      fill="#FFE4E4" 
                      whileHover={{ fill: "#fff" }}
                      transition={{ duration: 0.2 }}
                    />
                  </g>
                </svg>
              </motion.div>

              {/* Slide Indicators */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[79px] flex items-center gap-2">
                {slides.map((_, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="block w-[107px] h-[20.514px]" fill="none" preserveAspectRatio="none" viewBox="0 0 107 21">
                      <g>
                        <motion.path 
                          d="M10 10L97 10.5" 
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered with max-width */}
      <div className="w-full bg-[rgba(217,211,211,0.25)] flex flex-col items-center py-[99px] gap-[99px]">
        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1343px] px-8"
        >
          <div className="flex gap-[42px] justify-center flex-wrap mb-[100px]">
            {/* Statistics Cards */}
            {[
              { icon: svgPaths.p437b580, bg: '#2FBEDB', iconBg: '#2166DD', number: '24+', label: 'Lokasi TPU' },
              { icon: svgPaths.pb9b6400, bg: '#9CF4A2', iconBg: '#329638', number: '1000+', label: 'Pelayanan per Bulan' },
              { icon: svgPaths.p29674200, bg: '#3EB045', iconBg: '#21671C', number: '100+', label: 'Hektar Area Hijau' },
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
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] p-4 w-[380px] cursor-pointer"
              >
                <div className="p-[10px]">
                  <motion.div 
                    animate={{ 
                      rotate: hoveredCard === index ? 360 : 0,
                      scale: hoveredCard === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-[40px] h-[42px]"
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
                  className="p-[10px]"
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[40px] text-black">{card.number}</p>
                </motion.div>
                <div className="p-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#614d4d] text-[20px]">{card.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-[34px]"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#009c62] p-[10px] rounded-[10px] inline-block self-start"
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-white">Tentang Kami</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex gap-[60px] items-start flex-wrap lg:flex-nowrap"
            >
              <div className="flex flex-col gap-[25px] flex-1 min-w-[400px]">
                <div className="p-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[50px] text-black">Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta</p>
                </div>

                <div className="p-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#614d4d] text-[17px]">Menuju Provinsi DKI Jakarta sebagai Ibu Kota Negara dan Kota Berbasis Jasa untuk Mewujudkan Kesejahteraan Masyarakat yang Berkeadilan dan Berkelanjutan.</p>
                </div>

                <div className="p-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#614d4d] text-[17px]">Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan Terjangkau bagi warga, menyediakan urusan pemerintahan di bidang Pertamanan dan Pemakaman.</p>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-[28px] w-[529px]"
              >
                {/* Info Cards */}
                {[
                  { bg: '#055ac8', iconBg: '#2FBEDB', icon: svgPaths.p437b580, title: 'Provinsi Daerah Khusus Jakarta', desc: 'Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan Terjangkau bagi warga untuk mewujudkan kesejahteraan masyarakat' },
                  { bg: '#3eb045', iconBg: '#0E9217', icon: svgPaths.p29674200, title: 'Dinas Pertamanan dan Hutan Kota', desc: 'Memberikan urusan pemerintahan di bidang Pertamanan dan pengelolaan Pemakaman untuk masyarakat DKI Jakarta' }
                ].map((info, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r flex h-[130px] items-center justify-between rounded-[10px] w-full cursor-pointer"
                    style={{ backgroundColor: info.bg }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-[10px] h-[53px] items-center pl-[10px] w-[56px]" style={{ backgroundColor: info.bg }}>
                        <div className="w-[40px] h-[42px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
                            <g>
                              <rect fill={info.iconBg} height="42" rx="12" width="40" />
                              <path d={info.icon} stroke="white" strokeLinecap="round" strokeLinejoin={index === 1 ? "round" : undefined} strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[13px] h-[121px] items-start flex-1 pr-4" style={{ backgroundColor: info.bg }}>
                        <p className="text-[25px] text-white">{info.title}</p>
                        <p className="text-[17px] text-[rgba(255,255,255,0.78)]">{info.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="flex gap-[6px] items-center">
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="w-[127px] h-[20px]"
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
        className="w-full flex flex-col gap-[90px] items-center py-[50px] bg-white"
      >
        <div className="flex flex-col gap-[4px] items-center max-w-[717px] px-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-[#009c62] p-[10px] rounded-[10px]"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-white">Layanan Kami</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-[10px]"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[50px] text-black">Layanan Masyarakat</p>
          </motion.div>

          <div className="p-[10px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#614d4d] text-[17px] text-center">Berbagai layanan publik yang kami sediakan untuk kemudahan dan kenyamanan masyarakat DKI Jakarta</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[8px] max-w-[1500px]">
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
              className="p-[10px] w-[477px]"
            >
              <div className="bg-white rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] h-[347px] flex flex-col">
                <div className="flex gap-[10px] items-center pl-[15px] pt-[15px]">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-[10px] h-[84px] items-center justify-center p-[10px] rounded-[12px] w-[92px]"
                    style={{ backgroundColor: service.bg }}
                  >
                    <div className="size-[50px]">
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

                <div className="p-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[30px] text-black">{service.title}</p>
                </div>

                <div className="px-[10px] pt-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#614d4d] text-[17px]">{service.desc}</p>
                </div>

                <div className={`flex items-center justify-center ${service.items.length > 2 ? 'pt-[23px] h-[132px]' : 'h-[119px]'}`}>
                  <ul className={`block font-['Inter:Semi_Bold',sans-serif] font-semibold ${service.items.length > 2 ? 'h-[145px]' : 'h-[97px]'} leading-[0] text-[#614d4d] text-[15px] w-[283px]`}>
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact & Footer Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-[rgba(217,211,211,0.25)] w-full flex flex-col gap-[111px] items-center py-[50px]"
      >
        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-[#21671c] to-[#009c62] gap-x-[160px] gap-y-[15px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_auto_auto_auto] pb-[30px] pt-0 px-[30px] rounded-[20px] w-full max-w-[1247px] mx-8"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-[rgba(39,135,100,0.2)] flex gap-[10px] items-start pl-[30px] pr-[10px] pt-[30px] rounded-[20px]"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[50px] text-white">Hubungi Kami</p>
          </motion.div>

          {/* Email */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="flex gap-[10px] items-center pl-[10px] pr-[10px] py-[5px] rounded-[10px] cursor-pointer"
          >
            <div className="bg-[#9cf4a2] flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] rounded-[12px] w-[70px] shrink-0">
              <div className="size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                  <g>
                    <path d={svgPaths.pa2b7100} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3px] items-start">
              <p className="text-[#9cf4a2] text-[15px]">Email</p>
              <p className="text-[14px] text-white">dktamandki@jakarta.go.id</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="flex gap-[10px] items-center pl-[10px] pr-[10px] py-[5px] rounded-[10px] cursor-pointer"
          >
            <div className="bg-[#9cf4a2] flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] rounded-[12px] w-[70px] shrink-0">
              <div className="size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
                  <g>
                    <path d={svgPaths.p32a61280} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start">
              <p className="text-[#9cf4a2] text-[15px]">Telepon</p>
              <p className="text-[14px] text-white">+(021) 832 8464</p>
              <p className="text-[14px] text-white">+(021) 832 8454</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="flex gap-[10px] items-center pl-[10px] pr-[10px] py-[5px] rounded-[10px] cursor-pointer"
          >
            <div className="bg-[#9cf4a2] flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] rounded-[12px] w-[70px] shrink-0">
              <div className="size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                  <g>
                    <path d={svgPaths.p17e3f270} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start">
              <p className="text-[#9cf4a2] text-[15px]">Jam Operasional</p>
              <p className="text-[13px] text-white">Senin - Jumat: 08:00 - 16:00 WIB</p>
              <p className="text-[#9cf4a2] text-[11px]">Sabtu - Minggu: Tutup</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div 
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.3 }}
            className="flex gap-[10px] items-start pl-[10px] pr-[10px] py-[5px] rounded-[10px] cursor-pointer"
          >
            <div className="bg-[#9cf4a2] flex flex-col gap-[10px] h-[70px] items-center justify-center p-[8px] rounded-[12px] w-[70px] shrink-0">
              <div className="size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
                  <g>
                    <path d={svgPaths.pd706800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p2424f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3px] items-start flex-1">
              <p className="text-[#9cf4a2] text-[15px]">Alamat</p>
              <p className="text-[13px] text-white leading-[1.4]">Jl. ARIDA KS. TUBUN No.1 Kel. Petamburan, Kec. Tanah Abang, Kota Jakarta Pusat, DKI Jakarta, Indonesia</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 lg:row-start-4 flex flex-col gap-[11px] items-start pl-[10px]"
          >
            <div className="flex gap-[10px] items-center justify-center p-[10px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[25px] text-white">Ikuti Kami</p>
            </div>
            <div className="flex gap-[23px] items-start">
              {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((social, i) => (
                <motion.div 
                  key={social}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-[35px] cursor-pointer"
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
          className="flex flex-col gap-[64px] items-center w-full max-w-[1400px] px-8"
        >
          <div className="flex h-[4px] items-center justify-center w-full">
            <svg className="block w-full h-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 2">
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

          <div className="flex gap-[36px] items-start flex-wrap justify-center">
            <div className="flex items-center">
              <div className="flex gap-[10px] items-center p-[10px]">
                <div className="h-[79px] w-[70px]">
                  <img alt="" className="w-full h-full object-cover" src={imgImage1} />
                </div>
              </div>
              <div className="flex gap-[10px] items-center justify-center p-[10px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black w-[182px]">Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta</p>
              </div>
            </div>

            {/* Footer Links */}
            {[
              { title: 'Layanan', items: ['Pelayanan Pemakaman', 'Pemulasaraan Jenazah', 'Kehutanan', 'Pertamanan'] },
              { title: 'Informasi', items: ['Pelayanan Pemakaman', 'Pemulasaraan Jenazah', 'Kehutanan', 'Pertamanan'] },
            ].map((section, index) => (
              <div key={index} className="flex flex-col items-start w-[194px]">
                <div className="flex gap-[10px] items-center justify-center p-[10px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black">{section.title}</p>
                </div>
                <div className="w-full">
                  <div className="flex gap-[10px] items-center justify-center pb-[10px] px-[10px] w-full">
                    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-black tracking-[0.28px]">
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
            ))}

            <div className="flex flex-col h-[135px] items-start w-[259px]">
              <div className="flex gap-[10px] items-center justify-center pr-[10px] py-[10px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black">Newsletter</p>
              </div>
              <div className="w-full">
                <div className="flex gap-[10px] items-center justify-center pb-[10px] pr-[10px] w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-black tracking-[0.28px] w-[247px]">Dapatkan informasi terbaru dari kami</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[4px] items-center justify-center w-full">
            <svg className="block w-full h-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 2">
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

          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black text-center w-full">Copyright © 2019-2025 TPU DKI Jakarta. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}