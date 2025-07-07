
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QATask } from "@/data/mockData";
import { ChartBar } from "lucide-react";

interface ScopeDistributionProps {
  data: QATask[];
}

export const ScopeDistribution = ({ data }: ScopeDistributionProps) => {
  const scopeData = data.reduce((acc, task) => {
    acc[task.scope] = (acc[task.scope] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedScopes = Object.entries(scopeData)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6); // Show top 6 scopes

  const maxCount = Math.max(...Object.values(scopeData));

  const colors = [
    "bg-red-500",
    "bg-red-400", 
    "bg-red-600",
    "bg-red-300",
    "bg-red-700",
    "bg-red-800"
  ];

  return (
    <Card className="shadow-lg border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <ChartBar className="h-5 w-5" />
          Scope Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {sortedScopes.map(([scope, count], index) => {
            const percentage = (count / data.length) * 100;
            const barWidth = (count / maxCount) * 100;
            
            return (
              <div key={scope} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-red-900">{scope}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-red-600">{count} tasks</span>
                    <span className="text-xs text-red-500">({percentage.toFixed(1)}%)</span>
                  </div>
                </div>
                <div className="w-full bg-red-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${colors[index % colors.length]} transition-all duration-500 ease-out rounded-full flex items-center justify-end pr-2`}
                    style={{ width: `${barWidth}%` }}
                  >
                    {barWidth > 20 && (
                      <span className="text-xs text-white font-medium">{count}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {data.length === 0 && (
          <div className="text-center py-8 text-red-400">
            <ChartBar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No data to display</p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-red-100">
          <div className="text-xs text-red-600 text-center">
            Total Activities: {data.length} across {Object.keys(scopeData).length} scope types
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
