import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function CustomAlert() {
  return (
    <Alert
      variant="destructive"
      className="mt-8 border border-red-300 bg-red-50 text-red-800"
    >
      <AlertTriangle className="h-4 w-4 text-red-500" />
      <div className="flex flex-col gap-1">
        <AlertTitle className="text-sm font-semibold">
          2 active alerts detected
        </AlertTitle>
        <AlertDescription className="text-xs text-red-700">
          Check logs and take action immediately.
        </AlertDescription>
      </div>
    </Alert>
  );
}
