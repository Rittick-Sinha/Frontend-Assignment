import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Activity,
  CircleX,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
