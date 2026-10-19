"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, NavIcon } from "@/components/icons";
import { navGroups } from "@/lib/navigation";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Tutup menu"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px] transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col border-r border-slate-200/80 bg-white transition-transform duration-300 ease-out lg:static lg:z-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-3 border-b border-slate-100 px-5">
          <Link href="/" className="flex items-center gap-2.5" onClick={onClose}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-sm shadow-indigo-600/30">
              CE
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-slate-900">
                CMS E-Commerce
              </span>
              <span className="block text-[11px] text-slate-500">
                Control panel
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Tutup sidebar"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
          {navGroups.map((group) => (
            <div key={group.id}>
              <p className="mb-2 px-3 text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
                {group.label}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                          active
                            ? "bg-indigo-50 text-indigo-700 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.18)]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <NavIcon
                          name={item.icon}
                          className={`h-[18px] w-[18px] ${
                            active ? "text-indigo-600" : "text-slate-400"
                          }`}
                        />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs font-medium text-slate-700">Toko Demo</p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Mode pratinjau — data dummy
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
