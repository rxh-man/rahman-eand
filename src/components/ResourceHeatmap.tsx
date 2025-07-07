
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QATask } from "@/data/mockData";
import { LayoutDashboard } from "lucide-react";

interface ResourceHeatmapProps {
  data: QATask[];
}

export const ResourceHeatmap = ({ data }: ResourceHeatmapProps) => {
  const projects = [...new Set(data.map(item => item.projectId))];
  const resourceTypes = ["Labour", "Equipment", "Cars"];

  const getResourceCount = (projectId: string, resourceType: string) => {
    const projectTasks = data.filter(task => task.projectId === projectId);
    
    switch (resourceType) {
      case "Labour":
        return projectTasks.reduce((acc, task) => {
          if (task.labour && task.labour !== "Missing" && task.labour !== "Not Required") {
            const match = task.labour.match(/(\d+)/);
            return acc + (match ? parseInt(match[1]) : 1);
          }
          return acc;
        }, 0);
      
      case "Equipment":
        return projectTasks.filter(task => 
          task.equipment && task.equipment !== "Missing" && task.equipment !== "Not Required"
        ).length;
      
      case "Cars":
        return projectTasks.reduce((acc, task) => {
          if (task.cars && task.cars !== "Missing" && task.cars !== "Not Required") {
            const match = task.cars.match(/(\d+)/);
            return acc + (match ? parseInt(match[1]) : 0);
          }
          return acc;
        }, 0);
      
      default:
        return 0;
    }
  };

  const maxCount = Math.max(
    ...projects.flatMap(project =>
      resourceTypes.map(resource => getResourceCount(project, resource))
    )
  );

  const getIntensityColor = (count: number) => {
    if (count === 0) return "bg-gray-100";
    const intensity = count / maxCount;
    
    if (intensity <= 0.25) return "bg-red-200";
    if (intensity <= 0.5) return "bg-red-300";
    if (intensity <= 0.75) return "bg-red-500";
    return "bg-red-700";
  };

  const getTextColor = (count: number) => {
    const intensity = count / maxCount;
    return intensity > 0.5 ? "text-white" : "text-red-900";
  };

  return (
    <Card className="shadow-lg border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <LayoutDashboard className="h-5 w-5" />
          Resource Allocation Heatmap
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-2 text-sm font-medium text-red-900">
            <div></div>
            {resourceTypes.map(resource => (
              <div key={resource} className="text-center p-2 bg-red-50 rounded">
                {resource}
              </div>
            ))}
          </div>
          
          {projects.map(project => (
            <div key={project} className="grid grid-cols-4 gap-2 items-center">
              <div className="text-sm font-medium text-red-900 p-2 bg-red-50 rounded">
                {project}
              </div>
              {resourceTypes.map(resource => {
                const count = getResourceCount(project, resource);
                return (
                  <div
                    key={`${project}-${resource}`}
                    className={`p-4 rounded text-center font-semibold transition-all hover:scale-105 cursor-pointer ${getIntensityColor(count)} ${getTextColor(count)}`}
                    title={`${project} - ${resource}: ${count}`}
                  >
                    {count}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-red-100">
          <div className="flex items-center justify-between text-xs text-red-600">
            <span>Lower resource allocation</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-gray-100 rounded"></div>
              <div className="w-4 h-4 bg-red-200 rounded"></div>
              <div className="w-4 h-4 bg-red-300 rounded"></div>
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <div className="w-4 h-4 bg-red-700 rounded"></div>
            </div>
            <span>Higher resource allocation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
