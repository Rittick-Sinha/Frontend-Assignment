
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
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

export function TrafficTrendChart() {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Traffic Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="time" 
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                domain={[0, 1800]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                domain={[0, 200]} // Adjust domain as needed for latency
              />
              <Tooltip />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
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
