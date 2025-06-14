
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrafficOverview } from "./TrafficOverview";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VisibilityContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Visibility</h1>
              <p className="text-gray-600">Monitor and analyze your service mesh through various perspectives</p>
            </div>
          </div>
          {/* <Button variant="outline" size="sm" className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button> */}
        </div>

        <Tabs defaultValue="traffic-overview" className="space-y-6">
          <TabsList className="grid w-fit grid-cols-3">
            <TabsTrigger value="traffic-overview">Traffic Overview</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
            <TabsTrigger value="mesh-topology">Mesh Topology</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic-overview" className="space-y-6">
            <TrafficOverview />
          </TabsContent>

          <TabsContent value="errors" className="space-y-6">
            <div className="text-center py-12 text-gray-500">
              Error analysis view coming soon...
            </div>
          </TabsContent>

          <TabsContent value="mesh-topology" className="space-y-6">
            <div className="text-center py-12 text-gray-500">
              Mesh topology view coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
