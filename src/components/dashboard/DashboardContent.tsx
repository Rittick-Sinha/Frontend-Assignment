
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MetricsCards } from "./MetricsCards";
import { TrafficChart } from "./TrafficChart";
import { NamespaceFilters } from "./NamespaceFilters";
import DashboardTabs from "./DashboardTabs";
import AlertComponent from "./AlertComponent";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Service Mesh Dashboard</h1>
              <p className="text-gray-600">Real-time overview of your service mesh health and performance</p>
            </div>
          </div>
          {/* <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button> */}
        </div>

        <NamespaceFilters />
        <DashboardTabs/>
        <MetricsCards />
        <TrafficChart />
        <AlertComponent />
      </div>
    </main>
  );
}
