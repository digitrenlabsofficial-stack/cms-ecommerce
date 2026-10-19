export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="h-36 animate-pulse rounded-3xl bg-white" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-24 animate-pulse rounded-2xl bg-white" />
        ))}
      </div>
      <div className="h-72 animate-pulse rounded-3xl bg-white" />
    </div>
  );
}
