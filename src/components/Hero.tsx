import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

const placeholders = [
  'Я владелец салона красоты, хочу сайт с записью клиентов...',
  'Мне нужен интернет-магазин для продажи товаров...',
  'Хочу лендинг для услуг ремонта с заявками в CRM...',
  'Нужна витрина для моей пекарни с оформлением заказов...',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    const speed = isDeleting ? 30 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPlaceholder.length) {
          setDisplayText(currentPlaceholder.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPlaceholder.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, placeholderIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 pt-20 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://s3.twcstorage.ru/feb3eacb-3370-455e-90c8-5a1ef0867ac4/mmblogpdvdrustvene.webp")',
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />

      {/* Animated blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#C8A882]/12 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#8EA8A0]/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Accent text */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/95 tracking-[0.15em] uppercase mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/30 backdrop-blur-sm drop-shadow-md">
          <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
          Бесплатный сайт для бизнеса
        </span>

        {/* Main heading */}
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8 drop-shadow-lg">
          Ваш сайт
          <br />
          <span className="text-white">
            за несколько дней
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto mb-12 drop-shadow-md font-medium">
          Опишите, какой сайт нужен вашему бизнесу. Мы разработаем дизайн, запустим его бесплатно через банк-партнер и подключим все необходимые интеграции.
        </p>

        {/* Input Section with enhanced design */}
        <div className="mx-auto max-w-2xl">
          <div className="group relative">
            {/* Input container with gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-yellow-400/20 to-orange-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-white/95 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.25)] border border-white backdrop-blur-sm p-1">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 lg:p-5">
                <div className="flex-1">
                  <p className="text-[#1A1714] text-base lg:text-lg font-medium">
                    {displayText}
                  </p>
                </div>
                <button className="group/btn shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8A882] to-[#B5956B] flex items-center justify-center hover:shadow-[0_8px_24px_rgba(200,168,130,0.4)] transition-all duration-200 hover:scale-105 active:scale-95">
                  <Send
                    size={18}
                    className="text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Social proof / Channels hint */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-white/80 font-medium">Отправим через:</span>
            <div className="flex items-center gap-3">
              {['Email', 'Telegram', 'WhatsApp'].map((channel) => (
                <button
                  key={channel}
                  className="px-5 py-2.5 text-white font-semibold border-2 border-white/60 hover:border-white rounded-lg hover:bg-white/15 transition-all duration-300 text-xs backdrop-blur-sm shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.25)]"
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-sm lg:text-base text-white/90 font-semibold tracking-wide drop-shadow-md">Прокрутите вниз</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
