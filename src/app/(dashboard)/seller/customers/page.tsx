import { PlaceholderPage } from "@/components/placeholder-page";

export default function CustomersPage() {
  return (
    <PlaceholderPage
      title="Pelanggan"
      description="Ringkasan pelanggan toko. Nantinya bisa difilter berdasarkan lokasi, nilai belanja, dan status membership."
      icon="users"
      badge="Seller Center"
      stats={[
        { label: "Total pelanggan", value: "864", hint: "Akun terdaftar" },
        { label: "Pelanggan baru", value: "42", hint: "30 hari terakhir" },
        { label: "Repeat order", value: "31%", hint: "Rasio pembelian ulang" },
        { label: "Nilai rata-rata", value: "Rp 187 rb", hint: "Per pesanan" },
      ]}
      rows={[
        { title: "Sari Wulandari", meta: "12 pesanan · Jakarta", status: "VIP" },
        { title: "Budi Pratama", meta: "5 pesanan · Bandung", status: "Aktif" },
        { title: "Lina Hartati", meta: "3 pesanan · Surabaya", status: "Aktif" },
        { title: "Andi Wijaya", meta: "1 pesanan · Yogyakarta", status: "Baru" },
      ]}
    />
  );
}
