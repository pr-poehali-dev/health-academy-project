import Icon from "@/components/ui/icon";
import { announcement } from "@/data/announcement";

export default function AnnouncementSection() {
  return (
    <section className="py-24 px-6 bg-amber-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-amber-200 rounded-3xl shadow-sm overflow-hidden">
          {/* Шапка */}
          <div className="bg-amber-500 px-10 py-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <Icon name="FileText" size={24} className="text-white" />
            </div>
            <div>
              <div className="text-amber-100 text-xs font-semibold uppercase tracking-widest mb-0.5">
                {announcement.badge}
              </div>
              <h2 className="font-display text-3xl font-bold text-white">
                {announcement.title}
              </h2>
            </div>
          </div>

          {/* Текст объявления */}
          <div className="px-10 py-10 flex flex-col gap-5">
            {announcement.paragraphs.map((text, i) => (
              <p key={i} className="text-slate-700 text-xl leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* Подвал */}
          <div className="border-t border-amber-100 bg-amber-50 px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-slate-600 text-xl font-medium italic">
              {announcement.closing}
            </p>
            <a
              href={announcement.phoneHref}
              className="inline-flex items-center gap-3 bg-white border border-amber-300 hover:border-amber-500 hover:bg-amber-100 transition-all rounded-2xl px-7 py-4 shrink-0"
            >
              <Icon name="Phone" size={20} className="text-amber-600" />
              <div>
                <div className="font-bold text-slate-800 text-lg">{announcement.phone}</div>
                <div className="text-slate-500 text-sm">Call-центр</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}