import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
