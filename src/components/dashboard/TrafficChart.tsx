
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { time: "0:00", traffic: 195 },
  { time: "2:30", traffic: 210 },
  { time: "5:00", traffic: 220 },
  { time: "7:30", traffic: 235 },
  { time: "10:00", traffic: 240 },
  { time: "10:15", traffic: 245 },
  { time: "10:30", traffic: 250 },
  { time: "10:45", traffic: 255 },
  { time: "11:00", traffic: 260 },
];

export function TrafficChart() {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Traffic Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
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
                domain={[0, 260]}
                ticks={[0, 65, 130, 195, 260]}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="traffic" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#3B82F6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
