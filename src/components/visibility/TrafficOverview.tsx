
import { VisibilityMetricsCards } from "./VisibilityMetricsCards";
import { TrafficTrendChart } from "./TrafficTrendChart";
import { TopServicesTable } from "./TopServicesTable";
import { ResponseDistributionChart } from "./ResponseDistributionChart";

export function TrafficOverview() {
  return (
    <div className="space-y-6">
      <VisibilityMetricsCards />
      <TrafficTrendChart />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopServicesTable />
        <ResponseDistributionChart />
      </div>
    </div>
  );
}
