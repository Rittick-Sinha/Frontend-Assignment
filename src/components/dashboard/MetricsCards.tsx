import { Card, CardContent } from "@/components/ui/card";
import {
  MoveRight,
  MoveDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoveUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";

const MetricCard = ({
  label,
  value,
  icon: Icon,
  trendIcon: TrendIcon,
  statusColor = "gray",
  trendColor = "gray",
}) => (
  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 h-full">
    <CardContent className="p-0 flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-gray-500" />}
          <span className="text-sm font-semibold text-gray-600">{label}</span>
        </div>
        <div
          className={clsx("w-2 h-2 rounded-full", {
            "bg-gray-500": statusColor === "gray",
            "bg-yellow-500": statusColor === "yellow",
            "bg-green-500": statusColor === "green",
            "bg-red-500": statusColor === "red",
            "bg-blue-500": statusColor === "blue",
          })}
        />
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {TrendIcon && (
          <TrendIcon
            className={clsx("w-4 h-4 self-end", {
              "text-gray-500": trendColor === "gray",
              "text-yellow-500": trendColor === "yellow",
              "text-green-500": trendColor === "green",
              "text-red-500": trendColor === "red",
              "text-blue-500": trendColor === "blue",
            })}
          />
        )}
      </div>
    </CardContent>
  </Card>
);

export function MetricsCards() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 h-32"
          >
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-6 w-32 mb-1" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
      <MetricCard
        label="Service Health"
        value="4/5"
        icon={CheckCircle}
        trendIcon={MoveRight}
        statusColor="yellow"
        trendColor="gray"
      />
      <MetricCard
        label="Error Rate"
        value="1.20%"
        icon={AlertTriangle}
        trendIcon={MoveDown}
        statusColor="green"
        trendColor="red"
      />
      <MetricCard
        label="Latency (p95)"
        value="180.50ms"
        icon={Clock}
        trendIcon={MoveUp}
        statusColor="yellow"
        trendColor="green"
      />
    </div>
  );
}
