
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QATask } from "@/data/mockData";
import { LayoutDashboard, ArrowUp, ArrowDown } from "lucide-react";

interface KPICardsProps {
  data: QATask[];
}

export const KPICards = ({ data }: KPICardsProps) => {
  const totalTasks = data.length;
  
  const totalLabour = data.reduce((acc, item) => {
    if (item.labour && item.labour !== "Missing" && item.labour !== "Not Required") {
      const match = item.labour.match(/(\d+)/);
      return acc + (match ? parseInt(match[1]) : 1);
    }
    return acc;
  }, 0);

  const totalEquipment = data.filter(item => 
    item.equipment && item.equipment !== "Missing" && item.equipment !== "Not Required"
  ).length;

  const totalCars = data.reduce((acc, item) => {
    if (item.cars && item.cars !== "Missing" && item.cars !== "Not Required") {
      const match = item.cars.match(/(\d+)/);
      return acc + (match ? parseInt(match[1]) : 0);
    }
    return acc;
  }, 0);

  const missingResourceTasks = data.filter(item =>
    !item.labour || !item.equipment || !item.cars ||
    item.labour === "Missing" || item.equipment === "Missing" || item.cars === "Missing"
  ).length;

  const missingResourcePercentage = totalTasks > 0 ? Math.round((missingResourceTasks / totalTasks) * 100) : 0;

  const kpis = [
    {
      title: "Total QA Tasks",
      value: totalTasks.toString(),
      icon: LayoutDashboard,
      trend: totalTasks > 10 ? "up" : "down",
      trendValue: "12%",
      color: "bg-blue-500"
    },
    {
      title: "Total Labour Required",
      value: totalLabour.toString(),
      icon: ArrowUp,
      trend: "up",
      trendValue: "8%",
      color: "bg-green-500",
      unit: "Personnel"
    },
    {
      title: "Total Equipment Required",
      value: totalEquipment.toString(),
      icon: LayoutDashboard,
      trend: "stable",
      trendValue: "0%",
      color: "bg-purple-500",
      unit: "Items"
    },
    {
      title: "Total Cars Required",
      value: totalCars.toString(),
      icon: ArrowUp,
      trend: "up",
      trendValue: "5%",
      color: "bg-orange-500",
      unit: "Vehicles"
    },
    {
      title: "Missing Resource Allocation",
      value: `${missingResourcePercentage}%`,
      icon: ArrowDown,
      trend: missingResourcePercentage > 20 ? "down" : "up",
      trendValue: `${missingResourceTasks} tasks`,
      color: missingResourcePercentage > 20 ? "bg-red-500" : "bg-yellow-500",
      isAlert: missingResourcePercentage > 20
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {kpis.map((kpi, index) => (
        <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${kpi.isAlert ? 'border-red-300 bg-red-50' : 'border-red-100'}`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-700 flex items-center justify-between">
              {kpi.title}
              <div className={`p-2 rounded-full ${kpi.color} text-white`}>
                <kpi.icon className="h-4 w-4" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-red-900">{kpi.value}</span>
                {kpi.unit && <span className="text-sm text-red-600 mb-1">{kpi.unit}</span>}
              </div>
              <div className="flex items-center gap-1">
                <Badge 
                  variant={kpi.trend === "up" ? "default" : kpi.trend === "down" ? "destructive" : "secondary"}
                  className="text-xs"
                >
                  {kpi.trend === "up" && <ArrowUp className="h-3 w-3 mr-1" />}
                  {kpi.trend === "down" && <ArrowDown className="h-3 w-3 mr-1" />}
                  {kpi.trendValue}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
