import { PlaceholderPage } from "@/components/placeholder-page";

export default function BannersPage() {
  return (
    <PlaceholderPage
      title="Banner Slider"
      description="Kelola slide hero: gambar, judul, tautan, dan durasi tampil. Data di bawah masih contoh."
      icon="image"
      badge="Website Builder"
      stats={[
        { label: "Slide aktif", value: "3", hint: "Rotasi 5 detik" },
        { label: "Draft", value: "1", hint: "Belum dijadwalkan" },
        { label: "Klik 7 hari", value: "1.482", hint: "Semua slide" },
        { label: "CTR", value: "3,1%", hint: "Rata-rata" },
      ]}
      rows={[
        { title: "Promo akhir pekan", meta: "/koleksi/weekend", status: "Tayang" },
        { title: "Koleksi hoodie baru", meta: "/kategori/hoodie", status: "Tayang" },
        { title: "Gratis ongkir 20rb", meta: "/promo/ongkir", status: "Tayang" },
        { title: "Flash sale 11.11", meta: "/event/1111", status: "Draft" },
      ]}
    />
  );
}
