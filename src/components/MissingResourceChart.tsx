
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QATask } from "@/data/mockData";
import { ChartBar } from "lucide-react";

interface MissingResourceChartProps {
  data: QATask[];
}

export const MissingResourceChart = ({ data }: MissingResourceChartProps) => {
  const scopes = [...new Set(data.map(task => task.scope))];
  
  const getMissingResourceCount = (scope: string, resourceType: "labour" | "equipment" | "cars") => {
    return data.filter(task => 
      task.scope === scope && task[resourceType] === "Missing"
    ).length;
  };

  const scopeResourceData = scopes.map(scope => {
    const labourMissing = getMissingResourceCount(scope, "labour");
    const equipmentMissing = getMissingResourceCount(scope, "equipment");
    const carsMissing = getMissingResourceCount(scope, "cars");
    const totalMissing = labourMissing + equipmentMissing + carsMissing;
    
    return {
      scope,
      labourMissing,
      equipmentMissing,
      carsMissing,
      totalMissing
    };
  }).sort((a, b) => b.totalMissing - a.totalMissing);

  const maxMissing = Math.max(...scopeResourceData.map(item => item.totalMissing));
  const totalMissingAcrossAll = scopeResourceData.reduce((sum, item) => sum + item.totalMissing, 0);

  return (
    <Card className="shadow-lg border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <ChartBar className="h-5 w-5" />
          Missing Resource Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Summary Alert */}
          {totalMissingAcrossAll > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-red-900">Resource Gap Alert</span>
              </div>
              <p className="text-sm text-red-700">
                {totalMissingAcrossAll} resource entries are missing across {scopeResourceData.filter(item => item.totalMissing > 0).length} scope types
              </p>
            </div>
          )}

          {/* Missing Resources by Scope */}
          <div className="space-y-4">
            {scopeResourceData.filter(item => item.totalMissing > 0).map((item, index) => (
              <div key={item.scope} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-red-900">{item.scope}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">
                      {item.totalMissing} missing
                    </Badge>
                  </div>
                </div>
                
                {/* Resource breakdown bars */}
                <div className="space-y-1">
                  {item.labourMissing > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-600 w-16">Labour:</span>
                      <div className="flex-1 bg-red-100 rounded h-2">
                        <div 
                          className="bg-red-500 h-2 rounded transition-all duration-500"
                          style={{ width: `${(item.labourMissing / maxMissing) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-red-700 w-4">{item.labourMissing}</span>
                    </div>
                  )}
                  
                  {item.equipmentMissing > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-600 w-16">Equipment:</span>
                      <div className="flex-1 bg-orange-100 rounded h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded transition-all duration-500"
                          style={{ width: `${(item.equipmentMissing / maxMissing) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-red-700 w-4">{item.equipmentMissing}</span>
                    </div>
                  )}
                  
                  {item.carsMissing > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-600 w-16">Cars:</span>
                      <div className="flex-1 bg-yellow-100 rounded h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded transition-all duration-500"
                          style={{ width: `${(item.carsMissing / maxMissing) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-red-700 w-4">{item.carsMissing}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {totalMissingAcrossAll === 0 && (
            <div className="text-center py-8 text-green-600">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBar className="h-8 w-8 text-green-500" />
              </div>
              <p className="font-medium">All Resources Allocated</p>
              <p className="text-sm opacity-75">No missing resource entries found</p>
            </div>
          )}

          {/* Summary Stats */}
          <div className="mt-6 pt-4 border-t border-red-100">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-lg font-bold text-red-700">
                  {scopeResourceData.reduce((sum, item) => sum + item.labourMissing, 0)}
                </div>
                <div className="text-xs text-red-600">Missing Labour</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-orange-700">
                  {scopeResourceData.reduce((sum, item) => sum + item.equipmentMissing, 0)}
                </div>
                <div className="text-xs text-orange-600">Missing Equipment</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-yellow-700">
                  {scopeResourceData.reduce((sum, item) => sum + item.carsMissing, 0)}
                </div>
                <div className="text-xs text-yellow-600">Missing Cars</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
