export type NavItem = {
  href: string;
  label: string;
  description: string;
  icon: IconName;
};

export type NavGroup = {
  id: "overview" | "seller" | "builder";
  label: string;
  items: NavItem[];
};

export type IconName =
  | "home"
  | "box"
  | "cart"
  | "users"
  | "chart"
  | "layout"
  | "image"
  | "palette"
  | "menu";

export const navGroups: NavGroup[] = [
  {
    id: "overview",
    label: "Utama",
    items: [
      {
        href: "/",
        label: "Ringkasan",
        description: "Ikhtisar performa toko dan aktivitas terbaru.",
        icon: "home",
      },
    ],
  },
  {
    id: "seller",
    label: "Seller Center",
    items: [
      {
        href: "/seller/products",
        label: "Manajemen Produk",
        description: "Kelola katalog, stok, harga, dan varian produk.",
        icon: "box",
      },
      {
        href: "/seller/orders",
        label: "Pesanan",
        description: "Pantau status pesanan dari pembayaran hingga pengiriman.",
        icon: "cart",
      },
      {
        href: "/seller/customers",
        label: "Pelanggan",
        description: "Lihat data pelanggan, riwayat belanja, dan segmentasi.",
        icon: "users",
      },
      {
        href: "/seller/reports",
        label: "Laporan Keuangan",
        description: "Ringkasan pendapatan, pengeluaran, dan laba toko.",
        icon: "chart",
      },
    ],
  },
  {
    id: "builder",
    label: "Website Builder",
    items: [
      {
        href: "/builder/homepage",
        label: "Layout Homepage",
        description: "Atur susunan section dan blok konten beranda.",
        icon: "layout",
      },
      {
        href: "/builder/banners",
        label: "Banner Slider",
        description: "Kelola banner hero, urutan, dan tautan kampanye.",
        icon: "image",
      },
      {
        href: "/builder/theme",
        label: "Tema & Warna",
        description: "Sesuaikan palet warna, tipografi, dan gaya toko.",
        icon: "palette",
      },
      {
        href: "/builder/navigation",
        label: "Navigasi Header/Footer",
        description: "Atur menu header, tautan footer, dan struktur situs.",
        icon: "menu",
      },
    ],
  },
];

export const allNavItems = navGroups.flatMap((group) => group.items);

export function getPageMeta(pathname: string) {
  const exact = allNavItems.find((item) => item.href === pathname);
  if (exact) return exact;

  const nested = allNavItems.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href),
  );
  return nested ?? allNavItems[0];
}
