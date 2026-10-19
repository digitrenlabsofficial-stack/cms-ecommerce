import { ViewTransition } from "react";
import { DashboardShell } from "@/components/dashboard/shell";

export default function DashboardLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <DashboardShell>
      <ViewTransition>
        <div className="dashboard-page">{children}</div>
      </ViewTransition>
    </DashboardShell>
  );
}
