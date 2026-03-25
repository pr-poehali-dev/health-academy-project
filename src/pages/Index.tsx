import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0826e624-b74a-490d-b150-fc542ba5dad2/files/8fa4c9a3-e493-4b8c-bd75-3e4c8545485c.jpg";

const programs = [
  {
    id: 1,
    emoji: "🩺",
    title: "Школа сахарного диабета",
    desc: "Узнайте всё о контроле уровня сахара, питании и образе жизни при диабете. Практические занятия с врачом-эндокринологом.",
    day: "Понедельник",
    time: "16:00 — 18:00",
    gradient: "gradient-card-1",
    accent: "#059669",
    badge: "Эндокринология",
  },
  {
    id: 2,
    emoji: "❤️",
    title: "Школа здорового сердца",
    desc: "Профилактика сердечно-сосудистых заболеваний, кардиологические рекомендации и здоровый образ жизни.",
    day: "Среда",
    time: "16:00 — 18:00",
    gradient: "gradient-card-2",
    accent: "#2563eb",
    badge: "Кардиология",
  },
  {
    id: 3,
    emoji: "🦴",
    title: "Школа здорового сустава",
    desc: "Лечебная физкультура, методы защиты суставов и рекомендации по питанию от врача-ревматолога.",
    day: "Четверг",
    time: "16:00 — 18:00",
    gradient: "gradient-card-3",
    accent: "#7c3aed",
    badge: "Ревматология",
  },
  {
    id: 4,
    emoji: "⚖️",
    title: "Школа коррекции веса",
    desc: "Научный подход к снижению веса: диетология, психология питания и физическая активность.",
    day: "Пятница",
    time: "13:00 — 15:00",
    gradient: "gradient-card-4",
    accent: "#ea580c",
    badge: "Диетология",
  },
];

const schedule = [
  { day: "Понедельник", program: "Школа сахарного диабета", time: "16:00 – 18:00", emoji: "🩺", color: "#059669" },
  { day: "Среда", program: "Школа здорового сердца", time: "16:00 – 18:00", emoji: "❤️", color: "#2563eb" },
  { day: "Четверг", program: "Школа здорового сустава", time: "16:00 – 18:00", emoji: "🦴", color: "#7c3aed" },
  { day: "Пятница", program: "Школа коррекции веса", time: "13:00 – 15:00", emoji: "⚖️", color: "#ea580c" },
];

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const weekSchedule: Record<string, { emoji: string; color: string; short: string } | null> = {
  "Пн": { emoji: "🩺", color: "#059669", short: "Диабет" },
  "Вт": null,
  "Ср": { emoji: "❤️", color: "#2563eb", short: "Сердце" },
  "Чт": { emoji: "🦴", color: "#7c3aed", short: "Сустав" },
  "Пт": { emoji: "⚖️", color: "#ea580c", short: "Вес" },
  "Сб": null,
  "Вс": null,
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "programs", "schedule", "contacts"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-body">

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg shadow-teal-100/50 py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
            <img
              src="https://cdn.poehali.dev/projects/0826e624-b74a-490d-b150-fc542ba5dad2/bucket/b3b9574d-fdd0-4a1a-873c-b550983f5c5d.jpg"
              alt="ЦГКБ №3"
              className="h-11 w-11 object-contain rounded-xl group-hover:scale-105 transition-transform"
            />
            <div className="w-px h-8 bg-slate-200" />
            <div className="leading-none">
              <div className="font-display text-lg font-bold text-slate-800">Академия здоровья</div>
              <div className="text-[10px] font-semibold text-teal-600 tracking-widest uppercase">ЦГКБ №3 · Екатеринбург</div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Главная" },
              { id: "programs", label: "Программы" },
              { id: "schedule", label: "Расписание" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm font-semibold transition-colors pb-1 ${
                  activeSection === item.id ? "text-teal-600" : "text-slate-600 hover:text-teal-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contacts")}
            className="gradient-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-teal-300/50 hover:scale-105 transition-all duration-300"
          >
            Записаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-teal-100/60 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-100/40 rounded-full blur-2xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(14,165,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,160,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
                <span className="pulse-dot w-2 h-2 bg-green-500 rounded-full inline-block" />
                <span className="text-teal-700 text-sm font-semibold">Приём записей открыт</span>
              </div>

              <h1 className="animate-fade-up-delay-1 font-display text-6xl md:text-7xl lg:text-7xl font-bold text-slate-800 leading-[0.95] mb-6">
                Академия
                <br />
                <span className="gradient-text">Здоровья</span>
              </h1>

              <p className="animate-fade-up-delay-2 text-slate-600 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
                Уважаемые пациенты, приглашаем Вас посетить уникальный образовательный проект на базе нашей поликлиники.
              </p>
              <p className="animate-fade-up-delay-2 text-slate-400 text-base mb-10 max-w-xl">
                4 программы обучения · Очный формат · Именной сертификат по итогам
              </p>

              <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("programs")}
                  className="gradient-primary text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-teal-300/50 hover:scale-105 transition-all duration-300 text-base"
                >
                  Выбрать программу
                </button>
                <button
                  onClick={() => scrollTo("schedule")}
                  className="bg-white border border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-2xl hover:border-teal-300 hover:text-teal-700 transition-all duration-300 text-base shadow-sm"
                >
                  Расписание →
                </button>
              </div>

              <div className="animate-fade-up-delay-4 mt-12 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { num: "4", label: "Направления" },
                  { num: "2 ч", label: "Каждое занятие" },
                  { num: "🎓", label: "Сертификат" },
                ].map((s) => (
                  <div key={s.label} className="text-center bg-white border border-slate-100 rounded-2xl py-4 px-3 shadow-sm">
                    <div className="font-display text-3xl font-bold gradient-text">{s.num}</div>
                    <div className="text-slate-500 text-xs mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-5 justify-center">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl">✅</div>
                  <div className="font-bold text-slate-800">Обучение бесплатно</div>
                </div>
                <div className="text-slate-500 text-sm">Все программы доступны пациентам поликлиники без дополнительной оплаты</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="MapPin" size={20} className="text-teal-600" />
                  <div className="font-bold text-slate-800">ул. Братьев Быковых, 16</div>
                </div>
                <div className="text-teal-600 font-semibold text-sm ml-8">4 этаж поликлиники</div>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 flex items-center gap-4">
                <Icon name="Phone" size={22} className="text-indigo-600 shrink-0" />
                <div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Call-центр</div>
                  <a href="tel:83432722795" className="font-bold text-slate-800 text-lg hover:text-indigo-600 transition-colors">8-343-272-27-95</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-400 text-xs tracking-widest uppercase">Листайте</span>
          <Icon name="ChevronDown" size={20} className="text-slate-400" />
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-teal-600 text-sm font-semibold">Наши программы</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              4 школы <span className="gradient-text">здоровья</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Каждая программа разработана профильными специалистами и адаптирована для пациентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.id} className={`${p.gradient} rounded-3xl p-8 card-hover border border-white shadow-sm`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{p.emoji}</div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: p.accent }}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-800 mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.desc}</p>

                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: p.accent + "20" }}>
                    <Icon name="Clock" size={16} style={{ color: p.accent }} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{p.day}</div>
                    <div className="text-slate-500 text-xs">{p.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 gradient-primary rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 text-white">
            <div className="text-6xl">🎓</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-3xl font-bold mb-2">Именной сертификат</h3>
              <p className="text-white/80 text-base">По итогу прохождения обучения каждый участник получает именной сертификат, подтверждающий освоение программы</p>
            </div>
            <div className="flex-shrink-0 bg-white/20 border border-white/30 rounded-2xl px-6 py-4 text-center">
              <div className="font-display text-4xl font-bold">100%</div>
              <div className="text-white/70 text-sm">очный формат</div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-indigo-600 text-sm font-semibold">Расписание занятий</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Когда <span className="gradient-text">приходить</span>
            </h2>
            <p className="text-slate-500 text-lg">Занятия проводятся еженедельно в очном формате</p>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-10">
            {weekDays.map((day) => {
              const info = weekSchedule[day];
              return (
                <div
                  key={day}
                  className={`rounded-2xl p-3 text-center transition-all ${info ? "shadow-md border-2" : "bg-slate-50 border border-slate-100"}`}
                  style={info ? { borderColor: info.color + "40", backgroundColor: info.color + "08" } : {}}
                >
                  <div className="text-xs font-bold text-slate-500 mb-2">{day}</div>
                  {info ? (
                    <>
                      <div className="text-2xl mb-1">{info.emoji}</div>
                      <div className="text-xs font-semibold" style={{ color: info.color }}>{info.short}</div>
                    </>
                  ) : (
                    <div className="text-2xl text-slate-200">—</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-md group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: item.color + "15", border: `1px solid ${item.color}30` }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-800 text-base group-hover:text-teal-700 transition-colors">{item.program}</div>
                  <div className="text-slate-500 text-sm">{item.day}</div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="font-bold text-slate-800 text-lg">{item.time}</div>
                  <div className="text-xs text-slate-400">каждую неделю</div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color + "15" }}>
                  <Icon name="ChevronRight" size={16} style={{ color: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-teal-600 text-sm font-semibold">Как записаться</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Приходите <span className="gradient-text">к нам</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Для записи обращайтесь лично в кабинеты поликлиники
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Верхняя строка — адрес + время + телефон */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-start gap-4 p-8">
                <div className="w-11 h-11 gradient-primary rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Адрес</div>
                  <div className="font-bold text-slate-800">ул. Братьев Быковых, 16</div>
                  <div className="text-slate-500 text-sm mt-0.5">Поликлиника №2, 4 этаж</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-8">
                <div className="w-11 h-11 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Clock" size={20} className="text-teal-600" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Время работы</div>
                  <div className="font-bold text-slate-800">8:00 — 20:00</div>
                  <div className="text-slate-500 text-sm mt-0.5">Понедельник — пятница</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-8">
                <div className="w-11 h-11 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Phone" size={20} className="text-indigo-600" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Call-центр</div>
                  <a href="tel:83432722795" className="font-bold text-slate-800 hover:text-indigo-600 transition-colors">8-343-272-27-95</a>
                  <div className="text-slate-500 text-sm mt-0.5">Запись по телефону</div>
                </div>
              </div>
            </div>

            {/* Нижняя строка — кабинеты + бесплатно */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <Icon name="DoorOpen" size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Кабинеты для записи</div>
                    <div className="text-slate-500 text-sm">Обращайтесь лично в любой кабинет</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {["215", "221", "227", "224"].map((num) => (
                    <div key={num} className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-3 text-center">
                      <div className="font-display text-3xl font-bold gradient-text">{num}</div>
                      <div className="text-slate-500 text-xs mt-1">кабинет</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 flex items-center">
                <div className="gradient-primary rounded-2xl p-6 text-white flex items-center gap-4 w-full">
                  <div className="text-3xl">✨</div>
                  <div>
                    <div className="font-bold text-lg mb-1">Обучение бесплатное</div>
                    <div className="text-white/75 text-sm">Все программы доступны пациентам поликлиники</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БОЛЬНИЧНЫЙ ЛИСТ */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-700 text-sm font-semibold uppercase tracking-wider rounded-full px-5 py-2 mb-5">
              <Icon name="FileText" size={15} className="text-amber-600" />
              Важная информация
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800">
              Больничный <span className="text-amber-500">лист</span>
            </h2>
          </div>

          <div className="bg-white border border-amber-200 rounded-3xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-amber-100">
              <div className="p-10 md:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="UserCheck" size={20} className="text-amber-600" />
                  </div>
                  <div className="font-bold text-slate-800 text-lg">Вопросы по больничному</div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Уважаемые пациенты! Если у Вас есть вопросы по поводу закрытия или продления больничного листа, пожалуйста, обратитесь к Вашему лечащему врачу или позвоните в Call-центр — мы быстро решим проблему.
                </p>
              </div>

              <div className="p-10 md:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Info" size={20} className="text-amber-600" />
                  </div>
                  <div className="font-bold text-slate-800 text-lg">Портал «Госуслуги»</div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Портал «Госуслуги» не связан с рабочей программой поликлиники, в связи с этим вся информация по Вашему больничному листу может приходить с опозданием.
                </p>
              </div>
            </div>

            <div className="border-t border-amber-100 bg-amber-50 px-10 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-slate-600 text-lg font-medium">Спасибо за Ваше внимание и понимание!</p>
              <a
                href="tel:83432722795"
                className="inline-flex items-center gap-3 bg-white border border-amber-300 hover:border-amber-500 hover:bg-amber-100 transition-all rounded-2xl px-7 py-4 shrink-0"
              >
                <Icon name="Phone" size={20} className="text-amber-600" />
                <div>
                  <div className="font-bold text-slate-800 text-lg">8-343-272-27-95</div>
                  <div className="text-slate-500 text-sm">Call-центр</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-xl">🏥</span>
            </div>
            <div>
              <div className="font-display text-xl font-bold">Академия здоровья</div>
              <div className="text-slate-400 text-xs">Поликлиника №2 · ул. Братьев Быковых, 16</div>
            </div>
          </div>

          <div className="flex gap-6 text-slate-400 text-sm">
            {["Главная", "Программы", "Расписание", "Контакты"].map((label, i) => {
              const ids = ["home", "programs", "schedule", "contacts"];
              return (
                <button key={label} onClick={() => scrollTo(ids[i])} className="hover:text-white transition-colors">
                  {label}
                </button>
              );
            })}
          </div>

          <div className="text-slate-500 text-xs">© 2026 Академия здоровья</div>
        </div>
      </footer>
    </div>
  );
}