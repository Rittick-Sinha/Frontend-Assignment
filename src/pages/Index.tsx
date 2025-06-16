
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Index = () => {
  return (

      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardContent />
      </div>

  );
};

export default Index;
