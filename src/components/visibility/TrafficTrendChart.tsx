// ✅ Updated VisibilityMetricsCards.tsx and TrafficTrendChart with Skeleton
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity,
  CircleX,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const trafficData = [
  { time: "9:00", requests: 1200, errors: 50, latency: 145 },
  { time: "9:15", requests: 1350, errors: 45, latency: 142 },
  { time: "9:30", requests: 1480, errors: 52, latency: 148 },
  { time: "9:45", requests: 1520, errors: 48, latency: 144 },
  { time: "10:00", requests: 1580, errors: 55, latency: 150 },
  { time: "10:15", requests: 1620, errors: 51, latency: 147 },
  { time: "10:30", requests: 1650, errors: 49, latency: 145 },
  { time: "10:45", requests: 1680, errors: 53, latency: 149 },
  { time: "11:00", requests: 1700, errors: 47, latency: 143 },
];

export function VisibilityMetricsCards() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-8 w-24 mb-1" />
              <Skeleton className="h-3 w-36" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-semibold text-gray-600">Total Requests</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">1,245,789</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">Total requests processed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm  font-semibold text-gray-600">Success Rate</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">99.2%</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">Successful requests</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CircleX className="w-4 h-4 text-red-500" />
                <span className="text-sm font-semibold text-gray-600">Error Rate</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">0.8%</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">Failed requests</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-semibold text-gray-600">Avg. Latency</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">145.3ms</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">Average response time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function TrafficTrendChart() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <Skeleton className="h-6 w-48 mb-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-80 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Traffic Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
              <XAxis
                dataKey="time"
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <YAxis
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                domain={[0, 1800]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                domain={[0, 200]}
              />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
              <Line
                type="monotone"
                dataKey="requests"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
                name="Requests"
              />
              <Line
                type="monotone"
                dataKey="errors"
                stroke="#EF4444"
                strokeWidth={2}
                dot={false}
                name="Errors"
              />
              <Line
                type="monotone"
                dataKey="latency"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
                name="Latency (ms)"
                yAxisId="right"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
