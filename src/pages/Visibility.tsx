
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { VisibilityContent } from "@/components/visibility/VisibilityContent";

const Visibility = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        <VisibilityContent />
      </div>
    </SidebarProvider>
  );
};

export default Visibility;
