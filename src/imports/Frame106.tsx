import svgPaths from "./svg-pvmchjhs56";
import imgFrame2 from "figma:asset/af5d3cbe8c091eecd31899c9ce92a7161f3958b6.png";
import imgFrame3 from "figma:asset/e4d2ac7134ce221357d9367556f519f725aa0f9d.png";
import imgFrame4 from "figma:asset/d6b8af7e0b8f8d2b87dd7506baa220a040f5d5d3.png";
import imgImage1 from "figma:asset/ffb6c5694e823e7710694abfe32709ee7dcbb30f.png";

function Frame4() {
  return (
    <div className="absolute h-[60px] left-[1520px] top-[489px] w-[58px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
        <g id="Frame 6">
          <rect fill="var(--fill-0, black)" fillOpacity="0.01" height="60" rx="20" width="58" />
          <path d={svgPaths.p31f700} fill="var(--fill-0, #FFE4E4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[60px] relative w-[58px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
        <g id="Frame 7">
          <rect fill="var(--fill-0, black)" fillOpacity="0.01" height="60" rx="20" width="58" />
          <path d={svgPaths.p31f700} fill="var(--fill-0, #FFE4E4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[20.514px] relative shrink-0 w-[131px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 21">
        <g id="Frame 16">
          <path d="M10 10L121 10.5139" id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[107px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 21">
        <g id="Frame 17">
          <path d="M10 10L97 10.5" id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex items-center left-[619px] top-[934px]">
      <Frame14 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame15 key={i} />
      ))}
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">
        <span>{`LEBIH DARI 100 `}</span>RTH DKI JAKARTA
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[165px] items-start leading-[normal] not-italic relative shrink-0 text-white w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[134px] relative shrink-0 text-[55px] w-[522px]">Taman Hutan Umum DKI Jakarta</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[39px] relative shrink-0 text-[20px] w-full">
        Melayani dengan sepenuh hati untuk ketenangan abadi Layanan Kami
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#009c62] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[12px] relative rounded-[15px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Layanan Kami</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Component 1">
      <Frame9 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#ede6e6] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[12px] relative rounded-[15px] shrink-0" data-name="Component 2">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#010000] text-[25px] text-nowrap whitespace-pre">Informasi TPU</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Component />
      <Component1 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[191px] top-[253px] w-[734px]">
      <Frame17 />
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Beranda</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Tentang</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Layanan</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Kontak</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#ede6e6] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[12px] relative rounded-[15px] shrink-0" data-name="Component 2">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#010000] text-[25px] text-nowrap whitespace-pre">Buat Akun</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex gap-[40px] items-start left-[692px] rounded-[10px] top-[93px] w-[773px]">
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Component11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[1013px] overflow-clip relative shrink-0 w-[1600px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame2} />
      <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1097px] left-[-17px] top-0 w-[1708px]" />
      <Frame4 />
      <div className="absolute flex h-[60px] items-center justify-center left-[77px] top-[478px] w-[58px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame5 />
        </div>
      </div>
      <Frame16 />
      <Frame99 />
      <Frame22 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[1024px] relative shrink-0 w-[1440px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame3} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[1024px] relative shrink-0 w-[1440px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame4} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[476px] h-[1013px] items-center justify-end left-[-24px] top-[-10px] w-[5398px]">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function SlideAsset() {
  return (
    <div className="h-[1013px] overflow-clip relative shrink-0 w-full" data-name="SLIDE ASSET">
      <Frame3 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[1013px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[1013px] items-start p-[10px] relative w-full">
          <SlideAsset />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[42px] relative shrink-0 w-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <g id="Frame 32">
          <rect fill="var(--fill-0, #2FBEDB)" height="42" rx="12" width="40" />
          <path d={svgPaths.p437b580} id="Vector" stroke="var(--stroke-0, #2166DD)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[10px] pr-0 pt-[10px] relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">24+</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[20px] text-nowrap whitespace-pre">Lokasi TPU</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[262px] items-start left-[28px] rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] top-0 w-[389.005px]" data-name="Component 3">
      <Frame26 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[42px] relative shrink-0 w-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #9CF4A2)" height="42" rx="12" width="40" />
          <path d={svgPaths.pb9b6400} fill="var(--fill-0, #329638)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[10px] pr-0 pt-[10px] relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">1000+</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[20px] text-nowrap whitespace-pre">Pelayanan per Bulan</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[262px] items-start left-[459.27px] rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] top-0 w-[382.282px]" data-name="Component 4">
      <Frame28 />
      <Frame29 />
      <Frame50 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[42px] relative shrink-0 w-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #3EB045)" height="42" rx="12" width="40" />
          <path d={svgPaths.p29674200} id="Vector" stroke="var(--stroke-0, #21671C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[10px] pr-0 pt-[10px] relative shrink-0">
      <Frame62 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">100+</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[20px] text-nowrap whitespace-pre">Hektar Area Hijau</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[262px] items-start left-[890.53px] rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] top-0 w-[426.465px]" data-name="Component 5">
      <Frame67 />
      <Frame80 />
      <Frame94 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[28px] top-0">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[346px] mb-[-14px] relative shrink-0 w-[1342px]">
      <Group1 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#009c62] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Tentang Kami</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[50px] text-black w-[745px]">Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[734px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] w-[706px]">Menuju Provinsi DKI Jakarta sebagai Ibu Kota Negara dan Kota Berbasis Jasa untuk Mewujudkan Kesejahteraan Masyarakat yang Berkeadilan dan Berkelanjutan.</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] w-[684px]">Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan Terjangkau bagi warga, menyediakan urusan pemerintahan di bidang Pertamanan dan Pemakaman.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[755px]">
      <Frame41 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="h-[42px] relative shrink-0 w-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <g id="Frame 32">
          <rect fill="var(--fill-0, #2FBEDB)" height="42" rx="12" width="40" />
          <path d={svgPaths.p437b580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#055ac8] box-border content-stretch flex gap-[10px] h-[53px] items-center pl-[10px] pr-0 py-0 relative shrink-0 w-[56px]">
      <Frame96 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#055ac8] content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[13px] h-[121px] items-start not-italic relative shrink-0 w-[463px]">
      <p className="leading-[normal] relative shrink-0 text-[25px] text-white w-full">Provinsi Daerah Khusus Jakarta</p>
      <div className="leading-[normal] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.78)] w-full">
        <p className="mb-0">Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan Terjangkau bagi warga untuk mewujudkan kesejahteraan masyarakat</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[529px]">
      <Frame98 />
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-[#055ac8] h-[130px] items-center justify-between pb-0 pt-[5px] px-0 relative rounded-[10px] shrink-0 to-[#055ac8] w-full">
      <Frame39 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="h-[42px] relative shrink-0 w-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #0E9217)" height="42" rx="12" width="40" />
          <path d={svgPaths.p29674200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[10px] pr-0 pt-[10px] relative shrink-0">
      <Frame100 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[#3eb045] content-stretch flex gap-[10px] h-[53px] items-center relative shrink-0 w-[56px]">
      <Frame101 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#3eb045] content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[13px] h-[121px] items-start leading-[normal] not-italic relative shrink-0 w-[463px]">
      <p className="relative shrink-0 text-[25px] text-white w-full">Dinas Pertamanan dan Hutan Kota</p>
      <p className="relative shrink-0 text-[17px] text-[rgba(255,255,255,0.78)] w-full">Memberikan urusan pemerintahan di bidang Pertamanan dan pengelolaan Pemakaman untuk masyarakat DKI Jakarta</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[529px]">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-[#3eb045] h-[130px] items-center justify-between pb-0 pt-[5px] px-0 relative rounded-[10px] shrink-0 to-[#3eb045] w-full">
      <Frame104 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[529px]">
      <Frame105 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[1343px]">
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 20">
        <g id="Frame 53">
          <path d="M10 10H117" id="Vector 4" stroke="var(--stroke-0, #3EB045)" strokeLinecap="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 20">
        <g id="Frame 54">
          <path d="M10 10H117" id="Vector 5" stroke="var(--stroke-0, #9CF4A2)" strokeLinecap="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 20">
        <g id="Frame 55">
          <path d="M10 10H117" id="Vector 6" stroke="var(--stroke-0, #055AC8)" strokeLinecap="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame44 />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[34px] h-[448px] items-start mb-[-14px] relative shrink-0 w-[1286px]">
      <Frame48 />
      <Frame42 />
      <Frame47 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[14px] pt-0 px-0 relative shrink-0 w-[1343px]">
      <Frame30 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(217,211,211,0.25)] content-stretch flex flex-col gap-[99px] h-[2052px] items-center relative shrink-0 w-full">
      <Frame49 />
      <Frame43 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#009c62] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Layanan Kami</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[50px] text-black text-nowrap whitespace-pre">Layanan Masyarakat</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-center w-[697px]">Berbagai layanan publik yang kami sediakan untuk kemudahan dan kenyamanan masyarakat DKI Jakarta</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[717px]">
      <Frame31 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function BasilDocumentOutline() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="basil:document-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="basil:document-outline">
          <path d={svgPaths.p18a25180} fill="var(--fill-0, #7A6B6B)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p284ae880} fill="var(--fill-0, #7A6B6B)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-[#96a497] box-border content-stretch flex flex-col gap-[10px] h-[84px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[92px]">
      <BasilDocumentOutline />
    </div>
  );
}

function Frame107() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
      <Frame106 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Pelayanan Pemakaman</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">Layanan administrasi dan pengurusan pemakaman</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[10px] h-[119px] items-center justify-center relative shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]">
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Penggunaan Perpanjangan Pemakaman</span>
        </li>
        <li className="ms-[22.5px]">
          <span className="leading-[30px]">Ketersediaan Perpet Makam</span>
        </li>
      </ul>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-0">
                <div className="absolute inset-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M4 4H4.0001" id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Component 6">
      <Frame107 />
      <Frame108 />
      <Frame109 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]">
      <Component5 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="h-[84px] relative shrink-0 w-[92px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #96A497)" height="84" rx="12" width="92" />
          <path d={svgPaths.p13c95c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
      <Frame110 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Pemulasaraan Jenazah</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">Pelayanan pemulasaraan jenazah terlantar</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[10px] h-[119px] items-center justify-center relative shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[97px] leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]">
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Pelayanan Jenazah Terlantar</span>
        </li>
        <li className="ms-[22.5px]">
          <span className="leading-[30px]">Petugas Pemulasaraan Jenazah</span>
        </li>
      </ul>
    </div>
  );
}

function Frame115() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-0">
                <div className="absolute inset-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M4 4H4.0001" id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Component 7">
      <Frame111 />
      <Frame112 />
      <Frame113 />
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]">
      <Component6 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="h-[84px] relative shrink-0 w-[92px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #9CF4A2)" height="84" rx="12" width="92" />
          <path d={svgPaths.p2e826000} fill="var(--fill-0, #009C62)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
      <Frame116 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Kehutanan</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">Pengelolaan dan pemanfaatan hutan kota</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[132px] items-center justify-center pb-0 pt-[23px] px-0 relative shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[145px] leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]">
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Pemanfaatan Hutan DKI Jakarta</span>
        </li>
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Virtual Tour Kawasan Ekowisata Mangrove</span>
        </li>
        <li className="ms-[22.5px]">
          <span className="leading-[30px]">Kelompok Tani Hutan (KTH)</span>
        </li>
      </ul>
    </div>
  );
}

function Frame121() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-0">
                <div className="absolute inset-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M4 4H4.0001" id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Component 8">
      <Frame117 />
      <Frame118 />
      <Frame119 />
      <Frame120 />
      <Frame121 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]">
      <Component7 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="h-[84px] relative shrink-0 w-[92px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #009C62)" height="84" rx="12" width="92" />
          <path d={svgPaths.p298af000} fill="var(--fill-0, #9CF4A2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
      <Frame122 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Pertamanan</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">Pengelolaan taman dan ruang terbuka hijau</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[132px] items-center justify-center pb-0 pt-[23px] px-0 relative shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[145px] leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]">
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Data Pengurusan Taman</span>
        </li>
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Sambutan Pohon Tumbang</span>
        </li>
        <li className="ms-[22.5px]">
          <span className="leading-[30px]">Permohonan Izin Lokasi Taman</span>
        </li>
      </ul>
    </div>
  );
}

function Frame127() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-0">
                <div className="absolute inset-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M4 4H4.0001" id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Component 9">
      <Frame123 />
      <Frame124 />
      <Frame125 />
      <Frame126 />
      <Frame127 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]">
      <Component8 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="h-[84px] relative shrink-0 w-[92px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #2FBEDB)" height="84" rx="12" width="92" />
          <path d={svgPaths.pf4dd840} fill="var(--fill-0, #96EAFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Jalur Hijau</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">Pengelolaan jalur hijau kota</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[132px] items-center justify-center pb-0 pt-[23px] px-0 relative shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[145px] leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]">
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Data dan Informasi Jalur Hijau</span>
        </li>
        <li className="ms-[22.5px]">
          <span className="leading-[30px]">Permohonan Pemanfaatan Jalur Hijau</span>
        </li>
      </ul>
    </div>
  );
}

function Frame133() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-0">
                <div className="absolute inset-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M4 4H4.0001" id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Component 10">
      <Frame129 />
      <Frame130 />
      <Frame131 />
      <Frame132 />
      <Frame133 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]">
      <Component9 />
    </div>
  );
}

function PhPlant() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ph:plant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ph:plant">
          <path d={svgPaths.p24e08b80} fill="var(--fill-0, #889E4C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#dcfb6a] box-border content-stretch flex flex-col gap-[10px] h-[84px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[92px]">
      <PhPlant />
    </div>
  );
}

function Frame135() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[15px] pr-0 pt-[15px] relative shrink-0">
      <Frame134 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Tanaman Penghijauan</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[10px] px-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#614d4d] text-[17px] text-nowrap whitespace-pre">Program penghijauan dan bibit tanaman</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[132px] items-center justify-center pb-0 pt-[23px] px-0 relative shrink-0">
      <ul className="block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[145px] leading-[0] not-italic relative shrink-0 text-[#614d4d] text-[15px] w-[283px]">
        <li className="mb-0 ms-[22.5px]">
          <span className="leading-[30px]">Permintaan Bibit Tanaman</span>
        </li>
        <li className="ms-[22.5px]">
          <span className="leading-[30px]">Kesehatan Pohon Terintegrasi</span>
        </li>
      </ul>
    </div>
  );
}

function Frame139() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[229px] pr-[10px] py-[10px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-0">
                <div className="absolute inset-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M4 4H4.0001" id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[347px] items-start relative rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Component 11">
      <Frame135 />
      <Frame136 />
      <Frame137 />
      <Frame138 />
      <Frame139 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[477px]">
      <Component10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] h-[824px] items-center justify-center relative shrink-0 w-[1450px]">
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[90px] h-[1156px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[94px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame140 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(39,135,100,0.2)] box-border content-stretch flex gap-[10px] items-start pb-0 pl-[30px] pr-[10px] pt-[30px] relative rounded-[20px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[50px] text-nowrap text-white whitespace-pre">Hubungi Kami</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="h-[84px] relative shrink-0 w-[92px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
        <g id="Frame 75">
          <rect fill="var(--fill-0, #9CF4A2)" height="84" rx="12" width="92" />
          <path d={svgPaths.pa2b7100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9cf4a2] text-[15px] text-nowrap whitespace-pre">Email</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[40px]">
      <Frame69 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center mb-[-7px] p-[10px] relative shrink-0">
      <Frame70 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">dktamandki@jakarta.go.id</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[192px]">
      <Frame142 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="mb-[-7px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pt-0 px-[10px] relative w-full">
          <Frame143 />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0 w-[212px]">
      <Frame141 />
      <Frame68 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="[grid-area:2_/_1] bg-[rgba(0,0,0,0)] box-border content-stretch flex h-[88px] items-center pl-[10px] pr-0 py-0 relative rounded-[10px] shrink-0 w-[513px]">
      <Frame66 />
      <Frame71 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="h-[84px] relative shrink-0 w-[92px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 84">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #9CF4A2)" height="84" rx="12" width="92" />
          <path d={svgPaths.p32a61280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pl-0 pr-[10px] pt-0 relative w-full">
          <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] leading-[normal] not-italic relative shrink-0 text-[15px] text-white w-[125px]">
            <p className="mb-0">+(021) 832 8464</p>
            <p className="mb-0">+(021) 832 8454</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[145px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9cf4a2] text-[15px] w-full">Telepon</p>
      <Frame64 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="[grid-area:3_/_1] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[10px] h-[84px] items-end pl-[10px] pr-0 py-0 relative rounded-[10px] shrink-0 w-[513px]">
      <Frame144 />
      <Frame65 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[25px] text-nowrap text-white whitespace-pre">Ikuti Kami</p>
    </div>
  );
}

function BasilFacebookOutline() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="basil:facebook-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="basil:facebook-outline">
          <rect fill="var(--fill-0, black)" fillOpacity="0.01" height="35" rx="5" width="35" />
          <path clipRule="evenodd" d={svgPaths.p38923180} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.76%_8.33%_-2.79%_4.76%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p1afa5880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteInstagramLine() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative rounded-[5px] shrink-0 size-[35px]" data-name="mingcute:instagram-line">
      <Group />
    </div>
  );
}

function LineMdYoutube() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="line-md:youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="line-md:youtube">
          <rect fill="var(--fill-0, black)" fillOpacity="0.01" height="35" rx="5" width="35" />
          <path d={svgPaths.p3fce8600} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p25cd88f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16.67%_8.33%_0.78%_12.51%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 29">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p21edcc00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteTwitterLine() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative rounded-[5px] shrink-0 size-[35px]" data-name="mingcute:twitter-line">
      <Group2 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[23px] items-start relative shrink-0 w-full">
      <BasilFacebookOutline />
      <MingcuteInstagramLine />
      <LineMdYoutube />
      <MingcuteTwitterLine />
    </div>
  );
}

function Frame83() {
  return (
    <div className="[grid-area:3_/_2] bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[11px] h-[140px] items-start pl-[15px] pr-0 py-0 relative rounded-[20px] shrink-0 w-[520px]">
      <Frame82 />
      <Frame81 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.78%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 46">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p17e3f270} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteTimeLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[50px]" data-name="mingcute:time-line">
      <Group3 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#9cf4a2] box-border content-stretch flex flex-col gap-[10px] h-[84px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[92px]">
      <MingcuteTimeLine />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-px items-start leading-[normal] not-italic relative shrink-0 w-[242px]">
      <p className="relative shrink-0 text-[#9cf4a2] text-[15px] w-full">Jam Operasional</p>
      <p className="relative shrink-0 text-[14px] text-white w-full">Senin - Jumat: 08:00 - 16:00 WIB</p>
      <p className="relative shrink-0 text-[#9cf4a2] text-[10px] w-full">Sabtu - Minggu: Tutup</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="[grid-area:4_/_1] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[8px] h-[84px] items-center pl-[14px] pr-0 py-0 relative rounded-[10px] shrink-0 w-[513px]">
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Group">
      <div className="absolute inset-[-1.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <g id="Group">
            <path d={svgPaths.pd706800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2424f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#9cf4a2] box-border content-stretch flex flex-col gap-[10px] h-[84px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[92px]">
      <Group4 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[5px] items-start not-italic relative shrink-0 text-[15px] w-[212px]">
      <p className="leading-[normal] relative shrink-0 text-[#9cf4a2] w-full">Email</p>
      <div className="leading-[normal] relative shrink-0 text-white w-full">
        <p className="mb-0">Jl. ARIDA KS. TUBUN No.1 Kel. Petamburan, Kec. Tanah Abang, Kota Jakarta Pusat, DKI Jakarta, Indonesia</p>
        <p className="text-[15px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="[grid-area:2_/_2] bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[18px] items-center pl-[10px] pr-0 py-0 relative rounded-[10px] shrink-0 w-[520px]">
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-gradient-to-b from-[#21671c] from-[0.481%] gap-[160px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(4,_minmax(0px,_1fr))] h-[525px] relative rounded-[20px] shrink-0 to-[#009c62] to-[84.135%] w-[1247px]">
      <Frame63 />
      <Frame78 />
      <Frame77 />
      <Frame83 />
      <Frame79 />
      <Frame76 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <div className="h-[79px] relative shrink-0 w-[70px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black w-[182px]">Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame85 />
      <Frame84 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-px pr-[10px] py-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Layanan</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pl-px pr-[10px] pt-0 relative w-full">
          <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px] whitespace-pre">
            <p className="mb-0">Pelayanan Pemakaman</p>
            <p className="mb-0">Pemulasaraan Jenazah</p>
            <p className="mb-0">Kehutanan</p>
            <p>Pertamanan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[194px]">
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-[10px] py-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Informasi</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pl-0 pr-[10px] pt-0 relative w-full">
          <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px] whitespace-pre">
            <p className="mb-0">Pelayanan Pemakaman</p>
            <p className="mb-0">Pemulasaraan Jenazah</p>
            <p className="mb-0">Kehutanan</p>
            <p>Pertamanan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[194px]">
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-[10px] py-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Newsletter</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pl-0 pr-[10px] pt-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] w-[247px]">Dapatkan informasi terbaru dari kami</p>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col h-[135px] items-start relative shrink-0 w-[259px]">
      <Frame147 />
      <Frame148 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0">
      <Frame86 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
      <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[1400px]" style={{ "--transform-inner-width": "1400", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.836deg]">
          <div className="h-0 relative w-[1400.01px]">
            <div className="absolute inset-[-1px_-0.07%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 2">
                <path d="M1 1H1401.01" id="Vector 8" stroke="var(--stroke-0, #96A497)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame92 />
      <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[1400px]" style={{ "--transform-inner-width": "1400", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.836deg]">
          <div className="h-0 relative w-[1400.01px]">
            <div className="absolute inset-[-1px_-0.07%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 2">
                <path d="M1 1H1401.01" id="Vector 8" stroke="var(--stroke-0, #96A497)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[15px] text-black text-center w-[min-content]">Copyright © 2019-2025 TPU DKI Jakarta. All rights reserved.</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[rgba(217,211,211,0.25)] box-border content-stretch flex flex-col gap-[111px] h-[1053px] items-center pb-0 pt-[50px] px-0 relative shrink-0 w-full">
      <Frame13 />
      <Frame93 />
    </div>
  );
}

export default function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[134px] items-start relative size-full">
      <Frame61 />
      <Frame95 />
    </div>
  );
}