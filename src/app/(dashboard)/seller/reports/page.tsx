import { PlaceholderPage } from "@/components/placeholder-page";

export default function ReportsPage() {
  return (
    <PlaceholderPage
      title="Laporan Keuangan"
      description="Ikhtisar pendapatan, biaya, dan laba. Grafik dan ekspor laporan akan ditambahkan pada tahap berikutnya."
      icon="chart"
      badge="Seller Center"
      stats={[
        { label: "Omzet bulan ini", value: "Rp 86,4 jt", hint: "+8,4% vs bulan lalu" },
        { label: "Biaya operasional", value: "Rp 12,1 jt", hint: "Iklan + logistik" },
        { label: "Laba kotor", value: "Rp 41,7 jt", hint: "Margin 48%" },
        { label: "Pencairan tertunda", value: "Rp 6,2 jt", hint: "3 batch" },
      ]}
      rows={[
        { title: "Penjualan produk", meta: "1–19 Okt 2026", status: "Rp 72,8 jt" },
        { title: "Biaya iklan", meta: "Meta + Google", status: "Rp 4,3 jt" },
        { title: "Ongkir disubsidi", meta: "Kampanye gratis ongkir", status: "Rp 1,9 jt" },
        { title: "Pajak estimasi", meta: "Belum dikunci", status: "Rp 3,1 jt" },
      ]}
    />
  );
}
