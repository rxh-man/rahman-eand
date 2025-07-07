
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QATask } from "@/data/mockData";
import { ChartPie } from "lucide-react";

interface FrequencyChartProps {
  data: QATask[];
}

export const FrequencyChart = ({ data }: FrequencyChartProps) => {
  const frequencyData = data.reduce((acc, task) => {
    if (task.frequency !== "Not required") {
      acc[task.frequency] = (acc[task.frequency] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const sortedFrequencies = Object.entries(frequencyData)
    .sort(([, a], [, b]) => b - a);

  const total = Object.values(frequencyData).reduce((sum, count) => sum + count, 0);

  const getFrequencyColor = (frequency: string) => {
    switch (frequency.toLowerCase()) {
      case "daily": return { bg: "bg-red-500", border: "border-red-500" };
      case "weekly": return { bg: "bg-orange-500", border: "border-orange-500" };
      case "monthly": return { bg: "bg-green-500", border: "border-green-500" };
      default: return { bg: "bg-gray-500", border: "border-gray-500" };
    }
  };

  // Simple pie chart calculation
  let accumulatedAngle = 0;
  const pieSegments = sortedFrequencies.map(([frequency, count]) => {
    const percentage = (count / total) * 100;
    const angle = (count / total) * 360;
    const segment = {
      frequency,
      count,
      percentage,
      startAngle: accumulatedAngle,
      endAngle: accumulatedAngle + angle,
      color: getFrequencyColor(frequency)
    };
    accumulatedAngle += angle;
    return segment;
  });

  return (
    <Card className="shadow-lg border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <ChartPie className="h-5 w-5" />
          Task Frequency Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-center space-x-8">
          {/* Simple donut chart representation */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-8 border-red-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-900">{total}</div>
                <div className="text-xs text-red-600">Total Tasks</div>
              </div>
            </div>
            {/* Visual segments around the circle */}
            {pieSegments.map((segment, index) => (
              <div
                key={segment.frequency}
                className={`absolute top-0 left-0 w-32 h-32 rounded-full border-4 ${segment.color.border}`}
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((segment.endAngle * Math.PI) / 180)}% ${50 - 50 * Math.cos((segment.endAngle * Math.PI) / 180)}%, 50% 50%)`
                }}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {sortedFrequencies.map(([frequency, count]) => {
              const percentage = (count / total) * 100;
              const colors = getFrequencyColor(frequency);
              
              return (
                <div key={frequency} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${colors.bg}`}></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-red-900">{frequency}</div>
                    <div className="text-xs text-red-600">
                      {count} tasks ({percentage.toFixed(1)}%)
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {data.length === 0 && (
          <div className="text-center py-8 text-red-400">
            <ChartPie className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No frequency data to display</p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-red-100">
          <div className="grid grid-cols-3 gap-4 text-center">
            {sortedFrequencies.map(([frequency, count]) => (
              <div key={frequency} className="space-y-1">
                <div className="text-lg font-bold text-red-900">{count}</div>
                <div className="text-xs text-red-600 capitalize">{frequency}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
