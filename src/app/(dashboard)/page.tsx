import { PlaceholderPage } from "@/components/placeholder-page";

export default function OverviewPage() {
  return (
    <PlaceholderPage
      title="Ringkasan toko"
      description="Pantau penjualan, pesanan aktif, dan status website dari satu tempat. Menu di sidebar memisahkan Seller Center dan Website Builder."
      icon="home"
      badge="Utama"
      stats={[
        { label: "Penjualan hari ini", value: "Rp 4,8 jt", hint: "+12% vs kemarin" },
        { label: "Pesanan aktif", value: "37", hint: "8 menunggu dikirim" },
        { label: "Produk live", value: "128", hint: "5 stok menipis" },
        { label: "Pengunjung", value: "1.204", hint: "Beranda + katalog" },
      ]}
      rows={[
        { title: "Pesanan #10482 dibayar", meta: "2 menit lalu", status: "Baru" },
        { title: "Banner promo lebaran", meta: "Website Builder", status: "Tayang" },
        { title: "Kaos Oversize Black", meta: "Stok tersisa 4", status: "Peringatan" },
        { title: "Laporan minggu ini", meta: "Seller Center", status: "Siap unduh" },
      ]}
    />
  );
}
