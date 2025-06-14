import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <Card className="bg-white border border-gray-200 mb-6">
        <CardHeader>
          <Skeleton className="h-6 w-40 mb-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200 mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Traffic Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#6B7280" }} />
              <YAxis
                domain={[0, 260]}
                ticks={[0, 65, 130, 195, 260]}
                tick={{ fontSize: 12, fill: "#6B7280" }}
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
