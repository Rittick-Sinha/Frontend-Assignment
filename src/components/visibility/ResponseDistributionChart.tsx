// ✅ Full Code with Skeletons for All Charts Including ResponseDistributionChart
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity,
  CircleX,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
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

const servicesData = [
  {
    service: "frontend",
    path: "/api/v1/frontend",
    requests: "450,000",
    errors: 225,
    latency: "120ms",
  },
  {
    service: "auth",
    path: "/api/v1/auth",
    requests: "350,000",
    errors: 175,
    latency: "150ms",
  },
  {
    service: "products",
    path: "/api/v1/products",
    requests: "250,000",
    errors: 125,
    latency: "130ms",
  },
  {
    service: "cart",
    path: "/api/v1/cart",
    requests: "150,000",
    errors: 75,
    latency: "140ms",
  },
  {
    service: "checkout",
    path: "/api/v1/checkout",
    requests: "50,000",
    errors: 25,
    latency: "160ms",
  },
];

const responseData = [
  { name: "200", value: 92.3, count: 200, color: "#10B981" },
  { name: "201", value: 4.0, count: 201, color: "#06B6D4" },
  { name: "400", value: 2.0, count: 400, color: "#F97316" },
  { name: "401", value: 1.2, count: 401, color: "#F59E0B" },
  { name: "500", value: 0.5, count: 500, color: "#EF4444" },
];

export function ResponseDistributionChart() {
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
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Response Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={responseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
              >
                {responseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [`${value.toFixed(1)}%`, `Status ${props.payload.name}`]}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value) => {
                  const item = responseData.find((d) => d.name === value);
                  return <span style={{ color: item?.color }}>{value}</span>;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
