import { PlaceholderPage } from "@/components/placeholder-page";

export default function HomepageLayoutPage() {
  return (
    <PlaceholderPage
      title="Layout Homepage"
      description="Atur urutan section beranda: hero, kategori, produk unggulan, dan testimoni. Ini pratinjau struktur, belum editor drag-and-drop."
      icon="layout"
      badge="Website Builder"
      stats={[
        { label: "Section aktif", value: "6", hint: "Dari 8 template" },
        { label: "Hero", value: "1", hint: "Full width" },
        { label: "Grid produk", value: "2", hint: "Unggulan + baru" },
        { label: "CTA", value: "1", hint: "Newsletter" },
      ]}
      rows={[
        { title: "Hero banner", meta: "Urutan 1", status: "Aktif" },
        { title: "Kategori populer", meta: "Urutan 2", status: "Aktif" },
        { title: "Produk unggulan", meta: "Urutan 3", status: "Aktif" },
        { title: "Testimoni pelanggan", meta: "Urutan 4", status: "Disembunyikan" },
      ]}
    />
  );
}
