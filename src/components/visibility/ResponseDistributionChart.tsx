import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

// Chart data with color coding
const data = [
  { name: "200", value: 92.3, count: 200, color: "#10B981" },  // green
  { name: "201", value: 4.0, count: 201, color: "#06B6D4" },   // cyan
  { name: "400", value: 2.0, count: 400, color: "#F97316" },   // orange
  { name: "401", value: 1.2, count: 401, color: "#F59E0B" },   // yellow
  { name: "500", value: 0.5, count: 500, color: "#EF4444" },   // red
];

export function ResponseDistributionChart() {
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
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(1)}%)`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any, name: any, props: any) =>
                  [`${value.toFixed(1)}%`, `Status ${props.payload.name}`]
                }
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value: string) => {
                  const item = data.find((d) => d.name === value);
                  return (
                    <span style={{ color: item?.color }}>{value}</span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
