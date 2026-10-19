import { PlaceholderPage } from "@/components/placeholder-page";

export default function NavigationPage() {
  return (
    <PlaceholderPage
      title="Navigasi Header/Footer"
      description="Susun menu header, tautan cepat, dan footer. Item di bawah meniru struktur toko demo."
      icon="menu"
      badge="Website Builder"
      stats={[
        { label: "Item header", value: "6", hint: "Termasuk dropdown" },
        { label: "Item footer", value: "12", hint: "3 kolom" },
        { label: "CTA header", value: "1", hint: "Belanja sekarang" },
        { label: "Menu mobile", value: "Aktif", hint: "Hamburger" },
      ]}
      rows={[
        { title: "Beranda", meta: "Header · urutan 1", status: "Tampil" },
        { title: "Katalog", meta: "Header · dropdown", status: "Tampil" },
        { title: "Tentang kami", meta: "Footer · kolom 1", status: "Tampil" },
        { title: "Kebijakan privasi", meta: "Footer · kolom 3", status: "Tampil" },
      ]}
    />
  );
}
