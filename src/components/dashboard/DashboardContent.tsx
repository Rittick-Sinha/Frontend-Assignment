
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MetricsCards } from "./MetricsCards";
import { TrafficChart } from "./TrafficChart";
import { NamespaceFilters } from "./NamespaceFilters";
import DashboardTabs from "./DashboardTabs";
import AlertComponent from "./AlertComponent";

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
