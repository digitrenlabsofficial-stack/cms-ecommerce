import { PlaceholderPage } from "@/components/placeholder-page";

export default function ProductsPage() {
  return (
    <PlaceholderPage
      title="Manajemen Produk"
      description="Tambah, ubah, dan atur ketersediaan katalog. Halaman ini masih placeholder sebelum form produk terhubung."
      icon="box"
      badge="Seller Center"
      stats={[
        { label: "Total produk", value: "128", hint: "Termasuk draft" },
        { label: "Aktif", value: "112", hint: "Tampil di toko" },
        { label: "Stok rendah", value: "5", hint: "Ambang < 10" },
        { label: "Kategori", value: "14", hint: "Fashion & aksesoris" },
      ]}
      rows={[
        { title: "Kaos Oversize Black", meta: "SKU · KAOS-BLK-01", status: "Aktif" },
        { title: "Hoodie Essential", meta: "SKU · HDE-GRY-02", status: "Aktif" },
        { title: "Tote Canvas", meta: "SKU · TTE-NAT-03", status: "Draft" },
        { title: "Topi Baseball", meta: "SKU · CAP-NVY-04", status: "Stok rendah" },
      ]}
    />
  );
}
