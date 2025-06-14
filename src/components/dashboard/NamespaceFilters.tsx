import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

export function NamespaceFilters() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh logic (replace with actual fetch)
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <Card className="p-4 mb-6 bg-white border border-gray-200">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Left: Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Namespaces" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">✓ All Namespaces</SelectItem>
              <SelectItem value="default">default</SelectItem>
              <SelectItem value="istio-system">istio-system</SelectItem>
              <SelectItem value="monitoring">monitoring</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">✓ All Services</SelectItem>
              <SelectItem value="frontend">productpage</SelectItem>
              <SelectItem value="backend">reviews</SelectItem>
              <SelectItem value="database">ratings</SelectItem>
              <SelectItem value="database">details</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Workloads" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">✓ All Workloads</SelectItem>
              <SelectItem value="deployment">productpage v1</SelectItem>
              <SelectItem value="statefulset">reviews v1</SelectItem>
              <SelectItem value="daemonset">reviews v2</SelectItem>
              <SelectItem value="daemonset">reviews v3</SelectItem>
              <SelectItem value="daemonset">ratings v1</SelectItem>
              <SelectItem value="daemonset">details v1</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Right: Refresh button */}
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100 text-gray-600 transition-colors"
          title="Refresh"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
        </button>
      </div>
    </Card>
  );
}
