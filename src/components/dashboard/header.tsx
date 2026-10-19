"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";
import { getPageMeta } from "@/lib/navigation";

type HeaderProps = {
  onMenuClick: () => void;
};

const notifications = [
  {
    title: "Pesanan baru #10482",
    time: "2 menit lalu",
  },
  {
    title: "Stok Kaos Oversize hampir habis",
    time: "1 jam lalu",
  },
  {
    title: "Banner promo sudah tayang",
    time: "Kemarin",
  },
];

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const page = getPageMeta(pathname);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      if (notifRef.current && !notifRef.current.contains(target)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200/80 bg-white/85 px-4 backdrop-blur-md sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
        aria-label="Buka menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-semibold text-slate-900">
          {page.label}
        </p>
        <p className="hidden truncate text-xs text-slate-500 sm:block">
          {page.description}
        </p>
      </div>

      <label className="relative hidden min-w-[220px] flex-1 md:block md:max-w-sm">
        <span className="sr-only">Cari di dashboard</span>
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          placeholder="Cari produk, pesanan, atau halaman…"
          className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pr-3 pl-9 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
        />
      </label>

      <div className="relative" ref={notifRef}>
        <button
          type="button"
          onClick={() => {
            setNotifOpen((value) => !value);
            setProfileOpen(false);
          }}
          className="relative rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50"
          aria-label="Notifikasi"
        >
          <BellIcon className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        {notifOpen ? (
          <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">Notifikasi</p>
            </div>
            <ul className="divide-y divide-slate-100">
              {notifications.map((item) => (
                <li key={item.title} className="px-4 py-3">
                  <p className="text-sm font-medium text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.time}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="relative" ref={profileRef}>
        <button
          type="button"
          onClick={() => {
            setProfileOpen((value) => !value);
            setNotifOpen(false);
          }}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white py-1 pr-2 pl-1 hover:bg-slate-50"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-100 text-xs font-semibold text-indigo-700">
            AD
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-medium text-slate-800">
              Admin Toko
            </span>
            <span className="block text-[11px] text-slate-500">Pemilik</span>
          </span>
          <ChevronDownIcon className="hidden h-4 w-4 text-slate-400 sm:block" />
        </button>
        {profileOpen ? (
          <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white py-1 shadow-xl shadow-slate-200/70">
            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
            >
              Profil
            </button>
            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
            >
              Pengaturan akun
            </button>
            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-rose-600 hover:bg-rose-50"
            >
              Keluar
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
