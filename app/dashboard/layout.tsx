import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/dashboard/admin-sidebar";
import AdminHeader from "@/components/dashboard/admin-header";

// This layout is used for all routes under /dashboard
// This layout html renders only once, and the children are rendered inside it. This is useful for things like navigation bars that should persist across all dashboard pages.
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      {/* 1. Admin Sidebar Section */}
      <AdminSidebar />

      {/* 2. Main Section */}
      <div className="flex flex-col w-full">
        {/* 3. Admin Header */}
        <AdminHeader />

        {/* 4. Main Content */}
        <SidebarInset>
          <div className="flex-1 p-4 md:p-8">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
