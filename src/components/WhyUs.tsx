import { useEffect, useRef, useState } from 'react';
import { Zap, LayoutGrid, MessageSquare, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    tag: '01',
    title: 'Быстрый запуск',
    description:
      'Запускаем сайт без долгого согласования и сложной разработки. От заявки до готового сайта — в разы быстрее, чем в традиционных агентствах.',
    image: 'https://s3.twcstorage.ru/feb3eacb-3370-455e-90c8-5a1ef0867ac4/s2w8179rtpyn2hbdlk9ko82xqyg0td1d.webp',
    stat: '7 дней',
    statLabel: 'средний срок запуска',
    accent: '#C8A882',
  },
  {
    icon: LayoutGrid,
    tag: '02',
    title: 'Разные форматы сайтов',
    description:
      'Делаем лендинги, многостраничные сайты и интернет-магазины. Каждый проект получает уникальный дизайн под характер бизнеса.',
    image: 'https://s3.twcstorage.ru/feb3eacb-3370-455e-90c8-5a1ef0867ac4/q6c15xaojko0gmv7tno14aipbp6bmx0w_1.webp',
    stat: '10+',
    statLabel: 'форматов сайтов',
    accent: '#8EA8A0',
  },
  {
    icon: MessageSquare,
    tag: '03',
    title: 'Заявки сразу в удобный канал',
    description:
      'Подключаем CRM, Email, Telegram или WhatsApp. Ни одна заявка не потеряется — всё приходит туда, где удобно работать именно вам.',
    image: 'https://s3.twcstorage.ru/feb3eacb-3370-455e-90c8-5a1ef0867ac4/Equipo-humano-Boadas.webp',
    stat: '100%',
    statLabel: 'заявок доходят до вас',
    accent: '#B5956B',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function ReasonCard({
  reason,
  index,
  reversed,
}: {
  reason: (typeof reasons)[0];
  index: number;
  reversed: boolean;
}) {
  const { ref, visible } = useInView();
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.12)] transition-all duration-700 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image side */}
      <div className={`relative overflow-hidden ${reversed ? 'lg:order-2' : ''} h-72 lg:h-auto min-h-[360px]`}>
        <img
          src={reason.image}
          alt={reason.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay gradient - darker on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-500" />
        {/* Stat badge with animation */}
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.2)] border border-white/50">
            <p className="text-3xl font-bold text-[#1A1714] leading-none">{reason.stat}</p>
            <p className="text-xs text-[#7A7570] mt-1 font-semibold">{reason.statLabel}</p>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div
        className={`bg-gradient-to-br from-white to-[#FAFAF8] flex flex-col justify-center px-10 py-12 lg:px-14 ${reversed ? 'lg:order-1' : ''}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border"
            style={{ background: `${reason.accent}15`, color: reason.accent, borderColor: `${reason.accent}30` }}
          >
            {reason.tag}
          </span>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: `${reason.accent}12` }}
          >
            <Icon size={20} style={{ color: reason.accent }} strokeWidth={1.5} />
          </div>
        </div>

        <h3 className="text-3xl lg:text-4xl font-semibold text-[#1A1714] leading-[1.2] mb-5 tracking-tight">
          {reason.title}
        </h3>
        <p className="text-[#5C5550] text-base leading-[1.7] mb-8 max-w-sm">
          {reason.description}
        </p>

        <button
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1A1714] hover:gap-3 transition-all duration-200"
        >
          Узнать подробнее
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200"
            style={{ background: reason.accent }}
          >
            <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2);

  return (
    <section className="bg-gradient-to-b from-[#F5F2EE] to-[#FAF8F4] py-24 px-5 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-[#C8A882]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-[#8EA8A0]/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A882] mb-4 block inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8A882]/8 rounded-full border border-[#C8A882]/20">
                <span className="w-2 h-2 rounded-full bg-[#C8A882]" />
                Почему выбирают нас
              </span>
              <h2 className="text-5xl lg:text-6xl font-semibold text-[#1A1714] leading-[1.1] tracking-tight mt-6">
                Три причины <br className="hidden lg:block" />
                <span className="text-transparent bg-gradient-to-r from-[#C8A882] via-[#8EA8A0] to-[#B5956B] bg-clip-text">оставить заявку</span>
              </h2>
            </div>

            <div className="lg:pt-2">
              <div className="bg-white backdrop-blur-sm border border-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-7 space-y-5">
                <div>
                  <p className="text-xs font-bold text-[#C8A882] tracking-widest uppercase mb-3">Процесс</p>
                  <p className="text-[#1A1714] text-base font-semibold leading-relaxed">
                    От первого звонка до запуска — всё прозрачно и без скрытых платежей
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-[#C8A882]/40 via-[#8EA8A0]/20 to-transparent" />
                <div>
                  <p className="text-xs font-bold text-[#8EA8A0] tracking-widest uppercase mb-3">Условие</p>
                  <p className="text-[#1A1714] text-base font-semibold leading-relaxed">
                    Сайт бесплатно при условии сотрудничества с одним из наших банков-партнеров
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-12 h-px bg-gradient-to-r from-[#C8A882]/40 via-[#8EA8A0]/30 to-transparent" />
        </div>

        {/* Cards with stagger effect */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.tag}
              reason={reason}
              index={index}
              reversed={index === 1}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <BottomCta />
      </div>
    </section>
  );
}

function BottomCta() {
  const { ref, visible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`mt-16 lg:mt-20 relative group rounded-3xl overflow-hidden transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C8A882] via-[#8EA8A0] to-[#B5956B] rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />

      <div className="relative bg-gradient-to-br from-[#1A1714] to-[#2A251F] px-10 py-10 lg:px-16 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-3xl">
        {/* Decorative grid background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, #C8A882 1px, transparent 1px), linear-gradient(#C8A882 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10">
          <p className="text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-md">
            Готовы запустить <span className="text-transparent bg-gradient-to-r from-[#C8A882] to-[#8EA8A0] bg-clip-text">сайт для вашего бизнеса?</span>
          </p>
          <p className="text-[#9A8A7A] text-sm mt-3 font-medium">
            Опишите задачу — мы посчитаем стоимость и покажем, как получить сайт бесплатно через банк-партнер
          </p>
        </div>

        <button className="relative shrink-0 group/btn inline-flex items-center gap-3 bg-gradient-to-br from-[#C8A882] to-[#B5956B] hover:from-[#B5956B] hover:to-[#A37D53] text-[#1A1714] font-semibold text-sm px-7 py-4 rounded-2xl transition-all duration-200 hover:shadow-[0_12px_32px_rgba(200,168,130,0.5)] active:scale-95 overflow-hidden">
          <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 bg-white transition-opacity duration-200" />
          <span className="relative">Оставить заявку</span>
          <ArrowRight size={16} strokeWidth={2.5} className="relative group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}
