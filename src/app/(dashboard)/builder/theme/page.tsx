import { PlaceholderPage } from "@/components/placeholder-page";

export default function ThemePage() {
  return (
    <PlaceholderPage
      title="Tema & Warna"
      description="Atur identitas visual toko: warna primer, aksen tombol, dan gaya tipografi. Preset di bawah hanya contoh."
      icon="palette"
      badge="Website Builder"
      stats={[
        { label: "Preset aktif", value: "Indigo", hint: "Default CMS" },
        { label: "Warna primer", value: "#4F46E5", hint: "Tombol & tautan" },
        { label: "Latar", value: "#F8FAFC", hint: "Halaman publik" },
        { label: "Radius", value: "16px", hint: "Kartu & input" },
      ]}
      rows={[
        { title: "Tema Indigo", meta: "Cerah, kontras tinggi", status: "Dipakai" },
        { title: "Tema Midnight", meta: "Gelap untuk brand fashion", status: "Tersedia" },
        { title: "Tema Sand", meta: "Netral hangat", status: "Tersedia" },
        { title: "Kustom toko", meta: "Belum disimpan", status: "Draft" },
      ]}
    />
  );
}
