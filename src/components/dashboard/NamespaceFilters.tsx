import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { RefreshCw, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const options = {
  namespaces: [
    { value: "all", label: "All Namespaces" },
    { value: "default", label: "default" },
    { value: "istio-system", label: "istio-system" },
    { value: "monitoring", label: "monitoring" },
  ],
  services: [
    { value: "all", label: "All Services" },
    { value: "frontend", label: "productpage" },
    { value: "backend", label: "reviews" },
    { value: "database", label: "ratings" },
    { value: "database2", label: "details" },
  ],
  workloads: [
    { value: "all", label: "All Workloads" },
    { value: "deployment", label: "productpage v1" },
    { value: "statefulset", label: "reviews v1" },
    { value: "daemonset1", label: "reviews v2" },
    { value: "daemonset2", label: "reviews v3" },
    { value: "daemonset3", label: "ratings v1" },
    { value: "daemonset4", label: "details v1" },
  ],
};

export function NamespaceFilters() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedNamespace, setSelectedNamespace] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [selectedWorkload, setSelectedWorkload] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const getSelectedLabel = (
    list: { value: string; label: string }[],
    selected: string
  ) => list.find((item) => item.value === selected)?.label || "";

  const TriggerContent = ({ label }: { label: string }) => (
    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );

  const triggerClass =
    "w-52 h-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ";

  return (
    <Card className="p-4 mb-6 border border-gray-200 shadow-sm">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {loading
            ? [1, 2, 3].map((_, i) => (
                <Skeleton key={i} className="w-52 h-10 rounded-md" />
              ))
            : (
              <>
                <Select value={selectedNamespace} onValueChange={setSelectedNamespace}>
                  <SelectTrigger className={triggerClass}>
                    <SelectValue>
                      <TriggerContent
                        label={getSelectedLabel(options.namespaces, selectedNamespace)}
                      />
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {options.namespaces.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className={triggerClass}>
                    <SelectValue>
                      <TriggerContent
                        label={getSelectedLabel(options.services, selectedService)}
                      />
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {options.services.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedWorkload} onValueChange={setSelectedWorkload}>
                  <SelectTrigger className={triggerClass}>
                    <SelectValue>
                      <TriggerContent
                        label={getSelectedLabel(options.workloads, selectedWorkload)}
                      />
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {options.workloads.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}
        </div>

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
