import { NavIcon } from "@/components/icons";
import type { IconName } from "@/lib/navigation";

type Stat = {
  label: string;
  value: string;
  hint: string;
};

type PlaceholderPageProps = {
  title: string;
  description: string;
  icon: IconName;
  badge: string;
  stats: Stat[];
  rows: { title: string; meta: string; status: string }[];
};

export function PlaceholderPage({
  title,
  description,
  icon,
  badge,
  stats,
  rows,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
              <NavIcon name={icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                {badge}
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                {title}
              </h1>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Halaman dummy
          </span>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50"
          >
            <p className="text-xs font-medium text-slate-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-slate-400">{stat.hint}</p>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-900">
            Pratinjau data
          </h2>
          <span className="text-xs text-slate-400">Tidak tersambung ke API</span>
        </div>
        <ul className="divide-y divide-slate-100">
          {rows.map((row) => (
            <li
              key={row.title}
              className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5"
            >
              <div>
                <p className="text-sm font-medium text-slate-800">{row.title}</p>
                <p className="text-xs text-slate-500">{row.meta}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
