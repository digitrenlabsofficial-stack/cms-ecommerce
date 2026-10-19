import { PlaceholderPage } from "@/components/placeholder-page";

export default function OrdersPage() {
  return (
    <PlaceholderPage
      title="Pesanan"
      description="Daftar pesanan dummy untuk melihat alur status: dibayar, dikemas, dikirim, dan selesai."
      icon="cart"
      badge="Seller Center"
      stats={[
        { label: "Hari ini", value: "19", hint: "Pesanan masuk" },
        { label: "Perlu dikirim", value: "8", hint: "Sudah dibayar" },
        { label: "Dalam pengiriman", value: "21", hint: "Resi aktif" },
        { label: "Dibatalkan", value: "2", hint: "7 hari terakhir" },
      ]}
      rows={[
        { title: "#10482 · Sari Wulandari", meta: "Rp 289.000 · Transfer", status: "Dikemas" },
        { title: "#10481 · Budi Pratama", meta: "Rp 154.000 · QRIS", status: "Dibayar" },
        { title: "#10477 · Lina Hartati", meta: "Rp 420.000 · COD", status: "Dikirim" },
        { title: "#10470 · Andi Wijaya", meta: "Rp 98.000 · E-wallet", status: "Selesai" },
      ]}
    />
  );
}
