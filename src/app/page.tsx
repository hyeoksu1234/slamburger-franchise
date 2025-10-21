import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import FaqList from "@/components/faq-list";
import MenuCarousel from "@/components/menu-carousel";

export default function Home() {
  const navItems = [
    { label: "브랜드", href: "#brand" },
    { label: "시그니처 메뉴", href: "#menu" },
    { label: "경쟁력", href: "#advantages" },
    { label: "가맹 조건", href: "#persona" },
    { label: "창업 상담", href: "#contact" },
  ];

  const brandValues = [
    {
      label: "든든한 한 끼",
      keyword: "양",
      description: "풍미와 양의 균형을 갖춘 포만감으로 한 끼의 만족을 완성합니다.",
      icon: "⚖️",
    },
    {
      label: "강력한 맛",
      keyword: "맛",
      description: "한 입에 전해지는 임팩트 있는 풍미로 기억에 남는 경험을 제공합니다.",
      icon: "🔥",
    },
    {
      label: "환대의 에너지",
      keyword: "에너지",
      description: "고객을 환영하고 정성을 담은 서비스 에너지로 브랜드 가치를 전합니다.",
      icon: "🤝",
    },
  ];

  const advantages = [
  {
    title: "SLAMBURGER를 성공으로 이끄는 3가지 시스템",
    intro: "운영 효율부터 데이터 기반 상권 분석까지, SLAMBURGER는 초보 창업자도 안정적으로 수익을 낼 수 있는 구조를 제공합니다.",
    closingQuote: "SLAMBURGER는 단순한 햄버거 브랜드가 아닙니다. AI와 데이터로 창업의 성공 확률을 높이는 ‘스마트 프랜차이즈 플랫폼’입니다.",
    systems: [
      {
        name: "1. 로우 프렙 조리 시스템",
        headline: "누구나, 단 하루 만에 ‘맛의 일관성’을 완성합니다.",
        description: "최소한의 공정으로 최고의 맛을 구현합니다. 외식업 초보자도 매뉴얼만 따라 하면 ‘맛의 일관성’을 유지할 수 있습니다.",
        bullets: [
          "Low Prep 시스템: 복잡한 전처리 없이 누구나 쉽게 조리",
          "운영 효율성 200%↑: 공정 최소화로 피로도 ↓, 인력 교체도 부담 無",
          "매뉴얼 완전 자동화: 1주 교육만으로 매장 오픈 가능",
        ],
        quote: "조리사가 아닌 사장님이 되는 가장 빠른 길, SLAMBURGER.",
      },
      {
        name: "2. 압도적인 수익성 극대화",
        headline: "같은 매출이라도, 남는 돈은 다릅니다.",
        description: "HACCP 인증 육가공 공장을 직접 운영해 원가율 35% 이하, 경쟁 대비 월 순수익 +500만 원을 목표로 설계되었습니다.",
        bullets: [
          "자체 생산 + 물류 일원화: 안정적 공급과 원가 절감",
          "AI 솔루션 ‘레스토지니’로 불필요한 마케팅 비용 절감",
          "실시간 수익 분석 대시보드로 매출과 손익을 즉시 확인",
        ],
        quote: "데이터가 관리하는 매장, SLAMBURGER는 수익을 설계합니다.",
      },
      {
        name: "3. 체계적 교육 & AI 운영 관리",
        headline: "초보 창업자도 전문가로 성장하는 시스템.",
        description: "SLAMBURGER는 단순한 브랜드가 아니라 ‘성공 점주를 만들어내는 교육 플랫폼’입니다.",
        bullets: [
          "4~8주 실전 트레이닝: 조리·서비스·발주 전 과정을 체험",
          "AI 기반 경영 트레이닝: 리더십·노무·HR 관리까지 완성",
          "오픈 전후 밀착 코칭: 본사 운영팀의 상시 컨설팅 지원",
        ],
        quote: "혼자가 아닙니다. 당신의 첫 매장을 함께 키웁니다.",
      },
    ],
  },
];

  const menuItems = [
    {
      name: "SLAM BEEF BURGER",
      image: "/img/menu/SLAM BEEF BURGER.png",
      badge: "Best",
    },
    {
      name: "SLAM CHICKEN BURGER",
      image: "/img/menu/SLAM CHICKEN BURGER (2).png",
      badge: "Best",
    },
    {
      name: "SLAM GALBI BURGER",
      image: "/img/menu/SLAM GALBI BURGER (1).png",
      badge: "Signature",
    },
    {
      name: "THE BEEF BURGER",
      image: "/img/menu/THE BEEF BURGER (1).png",
    },
    {
      name: "THE CHICKEN BURGER",
      image: "/img/menu/THE CHICKEN BURGER (3).png",
    },
    {
      name: "THE CRISPY GALBI BURGER",
      image: "/img/menu/THE CRISPY GALBI BURGER.png",
    },
    {
      name: "SLAM CHICKEN & GALBI RICE",
      image: "/img/menu/SLAM CHICKEN & GALBI RICE.png",
    },
    {
      name: "CHICKEN GALBI RICE",
      image: "/img/menu/CHICKEN GALBI RICE (2).png",
    },
    {
      name: "CRISPY GALBI RICE",
      image: "/img/menu/CRISPY GALBI RICE (1).png",
    },
    {
      name: "CRISPY GALBI",
      image: "/img/menu/CRISPY GALBI.png",
    },
    {
      name: "CRISPY CHICKEN THIGH",
      image: "/img/menu/CRISPY CHICKEN THIGH CHICKEN.png",
    },
    {
      name: "GOLDEN FRIES",
      image: "/img/menu/FRENCH FRIES (1).png",
    },
    {
      name: "Signature Set 001",
      image: "/img/menu/KakaoTalk_Photo_2025-10-15-17-25-38 001.png",
      badge: "SET",
    },
    {
      name: "Signature Set 002",
      image: "/img/menu/KakaoTalk_Photo_2025-10-15-17-25-39 002.png",
      badge: "SET",
    },
    {
      name: "Signature Set 003",
      image: "/img/menu/KakaoTalk_Photo_2025-10-15-17-25-39 003.png",
      badge: "SET",
    },
    {
      name: "Signature Set 004",
      image: "/img/menu/KakaoTalk_Photo_2025-10-15-17-25-39 004.png",
      badge: "SET",
    },
    {
      name: "Signature Set 005",
      image: "/img/menu/KakaoTalk_Photo_2025-10-15-17-25-40 005.png",
      badge: "SET",
    },
    {
      name: "Signature Set 006",
      image: "/img/menu/KakaoTalk_Photo_2025-10-15-17-25-41 006.png",
      badge: "SET",
    },
  ];

  const costMatrix = [
    {
      size: "20평",
      franchise: "1,000만 원",
      training: "500만 원",
      interior: "3,800만 원",
      kitchen: "2,500만 원",
      furniture: "800만 원",
      promo: "300만 원",
      total: "8,900만 원",
    },
    {
      size: "25평",
      franchise: "1,000만 원",
      training: "500만 원",
      interior: "4,750만 원",
      kitchen: "2,500만 원",
      furniture: "850만 원",
      promo: "350만 원",
      total: "9,900만 원",
    },
    {
      size: "30평",
      franchise: "1,000만 원",
      training: "500만 원",
      interior: "5,700만 원",
      kitchen: "2,500만 원",
      furniture: "900만 원",
      promo: "400만 원",
      total: "1억 900만 원",
    },
    {
      size: "40평",
      franchise: "1,000만 원",
      training: "500만 원",
      interior: "7,600만 원",
      kitchen: "2,500만 원",
      furniture: "1,000만 원",
      promo: "500만 원",
      total: "1억 2900만 원",
    },
  ];

  const faqItems = [
    {
      question: "교육은 얼마나 걸리나요?",
      answer:
        "4~8주 집중 교육 프로그램을 통해 매뉴얼 기반 운영을 완벽히 익힐 수 있도록 지원하며, 오픈 전·후 현장 코칭이 포함됩니다.",
    },
    {
      question: "운영 경험이 없어도 가능할까요?",
      answer:
        "로우 프렙 시스템과 AI 솔루션을 통해 초보 창업자도 손쉽게 운영할 수 있도록 설계되어 있으며, 본사에서 지속적인 멘토링을 제공합니다.",
    },
    {
      question: "본사에서는 어떤 지원을 하나요?",
      answer:
        "상권 분석, 교육, 오픈 준비, 마케팅, 운영 컨설팅, 물류 공급까지 전 과정에 대한 지원 체계를 구축하고 있습니다.",
    },
    {
      question: "AI 상권 분석은 어떻게 활용되나요?",
      answer:
        "희망 지역을 입력하면 상권 집객력, 유동인구, 경쟁도, 접근성을 분석해 적합도 점수를 제안하고, 점주와 함께 데이터 기반 입지 전략을 도출합니다.",
    },
    {
      question: "초기 투자금은 어느 정도 필요할까요?",
      answer:
        "평형에 따라 8,900만 원에서 1억 2,900만 원 수준으로 예상되며, 별도 공사비는 현장 상황에 따라 추가 발생할 수 있습니다.",
    },
  ];

  return (
    <div id="top" className="bg-white text-[#111111]">
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/fullsize.jpeg"
            alt="SLAMBURGER 매장 조감"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* 주황색 틴트/블러 오버레이 제거 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-black/20 blur-2xl" />
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-white/20 blur-2xl" />
        </div>
        <div className="relative z-20 mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-10 desktop:px-10 desktop:pt-14">
          <nav className="flex flex-col gap-4 rounded-3xl bg-black/20 p-4 text-sm backdrop-blur desktop:flex-row desktop:items-center desktop:justify-between desktop:rounded-full desktop:px-6 desktop:py-3 desktop:text-base">
            <div className="flex items-center justify-between gap-4">
              <Link href="#hero" className="flex items-center gap-3">
                <Image
                  src="/img/logo7.png"
                  alt="SLAMBURGER 로고"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden items-center gap-4 desktop:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 font-semibold transition hover:bg-white/20"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 desktop:hidden">
              {navItems.map((item) => (
                <Link
                  key={`${item.href}-mobile`}
                  href={item.href}
                  className="whitespace-nowrap rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <section
            id="hero"
            className="relative overflow-hidden rounded-[48px] bg-[#FF4400]/70 shadow-[0_0_60px_rgba(0,0,0,0.12)] backdrop-blur-md"
          >
            <div className="relative z-20 flex flex-col gap-6 p-6 desktop:max-w-[55%] desktop:p-10">
              <Image
                src="/img/slogun.png"
                alt="BURGER & RICE, THE ULTIMATE BITES"
                width={360}
                height={60}
                sizes="(min-width: 768px) 30vw, 70vw"
                className="h-auto w-full max-w-[360px] filter brightness-0 invert"
                priority
              />
              <h1 className="text-4xl font-extrabold leading-tight desktop:text-5xl lg:text-6xl">
                강력한 한 입의 경험.
                <br />
                SLAMBURGER.
              </h1>
              <p className="text-lg text-white/85 desktop:text-xl">
                조화로운 맛, 강력한 맛, 환대의 에너지를 전하는 <br /> 프리미엄 K-버거
                브랜드와 함께 당신의 창업 여정을 시작하세요.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3 text-base font-semibold text-[#FF6600] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#FFE7D0]"
                >
                  가맹 문의하기
                </Link>
                {/* <Link
                  href="#ai"
                  className="rounded-full border border-white/40 px-6 py-3 text-base font-semibold transition hover:bg-white/10"
                >
                  내 상권 적합도 보기
                </Link> */}
              </div>
            </div>
            <div className="relative mt-8 h-[320px] overflow-hidden rounded-[32px] desktop:hidden">
              <Image
                src="/img/close3.png"
                alt="SLAMBURGER 대표 메뉴 클로즈업"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden rounded-l-[120px] desktop:block">
              <Image
                src="/img/close3.png"
                alt="SLAMBURGER 대표 메뉴 클로즈업"
                fill
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 60vw, 70vw"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </section>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 pb-32 desktop:px-10 desktop:py-24 desktop:pb-24">
        <section id="brand" className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#FF6600]">
              BRAND ESSENCE
            </p>
            <h2 className="text-3xl font-bold desktop:text-4xl">
              한국형 버거의 새로운 모델, SLAMBURGER
            </h2>
            <p className="max-w-3xl text-lg text-black/70">
              한국의 식사 가치를 현대적 기술과 경험으로 재해석한 프리미엄
              버거 브랜드입니다. 든든한 한 끼, 강력한 맛, 환대의 에너지라는
              3가지 핵심 가치로 예비 가맹주와 고객 모두에게 강력한 브랜드
              경험을 제공합니다.
            </p>
          </div>

          <div className="grid gap-6 desktop:grid-cols-3">
            {brandValues.map((value) => (
              <div
                key={value.label}
                className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-xl shadow-black/5"
              >
                <span className="text-4xl">{value.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[#FF6600]">
                    {value.keyword}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">{value.label}</h3>
                  <p className="mt-3 text-base text-black/70">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="menu" className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-tondu text-xs uppercase tracking-[0.6em] text-[#FF6600]">
              SLAMBURGER MENU
            </p>
            <h2 className="text-3xl font-bold desktop:text-4xl">
              버거 &amp; 시그니처 메뉴 라인업
            </h2>
            {/* <p className="max-w-3xl text-base text-black/60">
              심플한 화이트 스테이지 위에 모든 메뉴를 동일한 품질감으로
              노출해 브랜드 이미지를 강조합니다. 좌우 버튼 또는 스와이프 제스처로 전 메뉴를 확인하세요.
            </p> */}
          </div>
          <MenuCarousel items={menuItems} />
        </section>

        {advantages.map((advantage, index) => {
          const sectionId = index === 0 ? "advantages" : undefined;
          return (
            <section
              key={advantage.title}
              id={sectionId}
              className="flex flex-col gap-10"
            >
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#FF6600]">
                COMPETITIVE EDGE
              </p>
              <h2 className="text-3xl font-bold desktop:text-4xl">
                {advantage.title}
              </h2>
              <p className="max-w-3xl text-lg text-black/70">
                {advantage.intro}
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {advantage.systems.map((system) => (
                <article
                  key={system.name}
                  className="flex flex-col gap-6 rounded-[32px] bg-white p-8 shadow-lg shadow-black/10 transition hover:-translate-y-1"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6600]/70">
                    {system.name}
                  </p>
                  <h3 className="text-2xl font-bold text-[#FF6600]">
                    {system.headline}
                  </h3>
                  <p className="text-base text-black/70">{system.description}</p>
                  <ul className="mt-2 flex flex-col gap-2 text-sm text-black/60">
                    {system.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#FF6600]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-4 border-[#FF6600] bg-[#FF6600]/5 p-4 text-base font-semibold text-[#FF6600]">
                    “{system.quote}”
                  </blockquote>
                </article>
              ))}
            </div>
            {advantage.closingQuote ? (
              <blockquote className="rounded-[32px] border border-[#FF6600]/20 bg-[#FF6600]/10 p-6 text-base font-semibold text-[#FF6600]">
                “{advantage.closingQuote}”
              </blockquote>
            ) : null}
            </section>
          );
        })}

        <section
          id="persona"
          className="grid gap-10 rounded-[40px] bg-[#111111] px-8 py-12 text-white desktop:grid-cols-[1.1fr_0.9fr] desktop:items-center desktop:px-12 desktop:py-16"
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#FF6600]">
              IDEAL FRANCHISEE
            </p>
            <h2 className="text-3xl font-bold desktop:text-4xl">
              당신과 함께 성장할 SLAMBURGER 파트너
            </h2>
            <p className="text-lg text-white/80">
              SLAMBURGER는 브랜드 철학에 공감하고 데이터 기반 운영에 익숙한
              파트너형 예비 창업주를 기다립니다.
            </p>
            <dl className="grid gap-4 text-base text-white/80 sm:grid-cols-2">
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/50">
                  연령대
                </dt>
                <dd className="text-lg font-semibold">30~40대 초반</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/50">
                  프로필
                </dt>
                <dd className="text-lg font-semibold">
                  직장 경험이 있는 초보 창업자
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/50">
                  운영 방식
                </dt>
                <dd className="text-lg font-semibold">
                  6개월~1년 직접 운영 필수
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/50">
                  기술 역량
                </dt>
                <dd className="text-lg font-semibold">
                  AI 솔루션·디지털 운영에 친숙
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/50">
                  마인드
                </dt>
                <dd className="text-lg font-semibold">
                  브랜드와 함께 성장하는 파트너형
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/50">
                  투자 여력
                </dt>
                <dd className="text-lg font-semibold">
                  초기 자본 1억~2억 원 수준
                </dd>
              </div>
            </dl>
            <blockquote className="rounded-3xl border border-white/20 bg-white/5 p-6 text-lg font-semibold text-white">
              “SLAMBURGER는 단순한 음식 브랜드가 아니라, AI와 환대가 결합된
              창업 파트너십 모델입니다.”
            </blockquote>
          </div>

          <div className="flex h-full flex-col justify-between gap-6 rounded-[32px] bg-[#FF6600] p-8 text-black">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-black/70">
                당신 같은 창업자를 기다립니다
              </p>
              <h3 className="text-2xl font-bold leading-snug">
                디지털 친화력과 환대를 겸비한 파트너를 찾고 있습니다.
              </h3>
              <p className="text-base text-black/70">
                AI 솔루션과 로우 프렙 시스템을 적극 활용하여 고객에게 강력한
                브랜드 경험을 전하고자 하는 예비 점주에게 최적화된 브랜드입니다.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              지금 상담 신청하기
            </Link>
          </div>
        </section>

        <section id="costs" className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#FF6600]">
              INVESTMENT SNAPSHOT
            </p>
            <h2 className="text-3xl font-bold desktop:text-4xl">창업 비용 요약</h2>
            <p className="max-w-3xl text-lg text-black/70">
              평형대별 예상 비용을 손쉽게 비교하고, 내 상권 기준 견적을
              상담받을 수 있습니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-lg shadow-black/10">
            <table className="w-full min-w-[720px] table-fixed text-left">
              <thead className="bg-[#F60000] text-white">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold">항목</th>
                  {costMatrix.map((row) => (
                    <th
                      key={row.size}
                      className="px-6 py-4 text-sm font-semibold text-right"
                    >
                      {row.size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm text-black/70">
                <tr className="border-b border-black/5">
                  <td className="px-6 py-4 font-semibold text-black">가맹비</td>
                  {costMatrix.map((row) => (
                    <td key={`${row.size}-franchise`} className="px-6 py-4 text-right">
                      {row.franchise}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <td className="px-6 py-4 font-semibold text-black">교육비</td>
                  {costMatrix.map((row) => (
                    <td key={`${row.size}-training`} className="px-6 py-4 text-right">
                      {row.training}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-black/5">
                  <td className="px-6 py-4 font-semibold text-black">인테리어</td>
                  {costMatrix.map((row) => (
                    <td key={`${row.size}-interior`} className="px-6 py-4 text-right">
                      {row.interior}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <td className="px-6 py-4 font-semibold text-black">주방기기</td>
                  {costMatrix.map((row) => (
                    <td key={`${row.size}-kitchen`} className="px-6 py-4 text-right">
                      {row.kitchen}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-black/5">
                  <td className="px-6 py-4 font-semibold text-black">가구류</td>
                  {costMatrix.map((row) => (
                    <td key={`${row.size}-furniture`} className="px-6 py-4 text-right">
                      {row.furniture}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <td className="px-6 py-4 font-semibold text-black">
                    디피/홍보물
                  </td>
                  {costMatrix.map((row) => (
                    <td key={`${row.size}-promo`} className="px-6 py-4 text-right">
                      {row.promo}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#FF6600]">
                    총합계
                  </td>
                  {costMatrix.map((row) => (
                    <td
                      key={`${row.size}-total`}
                      className="px-6 py-4 text-right font-semibold text-[#FF6600]"
                    >
                      {row.total}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-black/60">
            ※ 별도 공사비(철거, 전기·가스, 냉난방기, 화장실, 소방, CCTV, 정화조
            등)는 현장 상황에 따라 추가 발생할 수 있습니다.
          </p>
          <Link
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#FF6600] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6600]/40 transition hover:-translate-y-0.5 hover:bg-[#FF7E33]"
          >
            내 지역 기준 견적 받기
          </Link>
        </section>

        <section id="faq" className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#FF6600]">
              FAQ
            </p>
            <h2 className="text-3xl font-bold desktop:text-4xl">
              자주 묻는 질문
            </h2>
            <p className="max-w-3xl text-lg text-black/70">
              예비 가맹주가 가장 많이 묻는 질문에 대한 답변을 통해 SLAMBURGER
              창업 준비를 도와드립니다.
            </p>
          </div>

          <FaqList items={faqItems} />
        </section>

        <section
          id="contact"
          className="flex flex-col gap-10 rounded-[40px] bg-[#111111] px-8 py-14 text-white desktop:px-12"
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#FF6600]">
              FRANCHISE INQUIRY
            </p>
            <h2 className="text-3xl font-bold desktop:text-4xl">
              지금 SLAMBURGER와 함께할 준비가 되셨나요?
            </h2>
            <p className="max-w-2xl text-lg text-white/80">
              아래 정보를 남겨주시면 담당 창업 컨설턴트가 24시간 이내에 연락을
              드립니다. 상권 분석 리포트와 맞춤 견적을 함께 준비해드립니다.
            </p>
          </div>

          <ContactForm />
        </section>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FF6600] px-6 py-4 shadow-[0_-8px_24px_rgba(0,0,0,0.25)] desktop:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 text-black">
          <div className="flex flex-col text-xs font-semibold uppercase tracking-[0.2em]">
            <span>지금 바로 상담 가능</span>
            <span className="text-black/70">SLAMBURGER FRANCHISE</span>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            가맹 문의
          </Link>
        </div>
      </div>
      <Link
        href="#top"
        className="fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white shadow-lg transition hover:-translate-y-1 hover:bg-black/80 desktop:bottom-12 desktop:right-10"
        aria-label="맨 위로 이동"
      >
        ↑
      </Link>
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 desktop:flex-row desktop:items-center desktop:justify-between desktop:px-10">
          <div className="space-y-2 text-sm text-white/70">
            <p className="font-semibold text-white">(주)컨트롤엠</p>
            <p>대표이사: 원종관</p>
            <p>사업자등록번호: 794-87-03025</p>
          </div>
          <p className="text-sm text-white/40">
            © 2025, Slamburger ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
