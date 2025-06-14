import { Card, CardContent } from "@/components/ui/card";
import {
  MoveRight,
  MoveDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoveUp,
} from "lucide-react";

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
      {/* Top row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-gray-500" />}
          <span className="text-sm text-gray-600">{label}</span>
        </div>
        <div className={`w-2 h-2 rounded-full bg-${statusColor}-500`} />
      </div>

      {/* Center - Metric Value */}
      <div className="flex-1 flex items-center justify-between">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {TrendIcon && (
          <TrendIcon
            className={`w-4 h-4 text-${trendColor}-500 self-end`}
          />
        )}
      </div>
    </CardContent>
  </Card>
);

export function MetricsCards() {
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
        trendColor="gray"
      />
    </div>
  );
}
