import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="bg-gray-100 p-1 rounded-md">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4">
        {/* Overview Content */}
      </TabsContent>
      <TabsContent value="performance" className="mt-4">
        {/* Performance Content */}
      </TabsContent>
      <TabsContent value="security" className="mt-4">
        {/* Security Content */}
      </TabsContent>
      <TabsContent value="resources" className="mt-4">
        {/* Resources Content */}
      </TabsContent>
    </Tabs>
  );
}
