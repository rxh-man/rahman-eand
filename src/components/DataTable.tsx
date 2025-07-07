
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QATask } from "@/data/mockData";
import { LayoutDashboard, ChevronUp, ChevronDown } from "lucide-react";

interface DataTableProps {
  data: QATask[];
}

export const DataTable = ({ data }: DataTableProps) => {
  const [sortField, setSortField] = useState<keyof QATask>("projectId");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof QATask) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const isResourceMissing = (task: QATask) => {
    return task.labour === "Missing" || task.equipment === "Missing" || task.cars === "Missing";
  };

  const getFrequencyBadgeColor = (frequency: string) => {
    switch (frequency.toLowerCase()) {
      case "daily": return "bg-red-500";
      case "weekly": return "bg-orange-500";
      case "monthly": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const SortableHeader = ({ field, children }: { field: keyof QATask; children: React.ReactNode }) => (
    <Button
      variant="ghost"
      className="h-auto p-2 font-semibold text-red-900 hover:bg-red-50"
      onClick={() => handleSort(field)}
    >
      <span className="flex items-center gap-1">
        {children}
        {sortField === field && (
          sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
        )}
      </span>
    </Button>
  );

  return (
    <Card className="shadow-lg border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <LayoutDashboard className="h-5 w-5" />
          QA Tasks Data Explorer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-red-50 border-b border-red-100">
              <tr>
                <th className="text-left p-3 border-r border-red-100">
                  <SortableHeader field="projectId">Project ID</SortableHeader>
                </th>
                <th className="text-left p-3 border-r border-red-100">
                  <SortableHeader field="scope">Scope</SortableHeader>
                </th>
                <th className="text-left p-3 border-r border-red-100">
                  <SortableHeader field="details">Details</SortableHeader>
                </th>
                <th className="text-left p-3 border-r border-red-100">
                  <SortableHeader field="frequency">Frequency</SortableHeader>
                </th>
                <th className="text-left p-3 border-r border-red-100">
                  <SortableHeader field="labour">Labour</SortableHeader>
                </th>
                <th className="text-left p-3 border-r border-red-100">
                  <SortableHeader field="equipment">Equipment</SortableHeader>
                </th>
                <th className="text-left p-3">
                  <SortableHeader field="cars">Cars</SortableHeader>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((task, index) => (
                <tr
                  key={task.id}
                  className={`border-b border-red-100 hover:bg-red-50 transition-colors ${
                    isResourceMissing(task) ? 'bg-red-50 border-l-4 border-l-red-500' : ''
                  } ${index % 2 === 0 ? 'bg-white' : 'bg-red-25'}`}
                >
                  <td className="p-3 border-r border-red-100">
                    <Badge variant="outline" className="border-red-200 text-red-700">
                      {task.projectId}
                    </Badge>
                  </td>
                  <td className="p-3 border-r border-red-100">
                    <span className="text-sm font-medium text-red-900">{task.scope}</span>
                  </td>
                  <td className="p-3 border-r border-red-100 max-w-md">
                    <div className="text-sm text-gray-700 leading-relaxed" title={task.details}>
                      {task.details.length > 80 ? `${task.details.substring(0, 80)}...` : task.details}
                    </div>
                  </td>
                  <td className="p-3 border-r border-red-100">
                    <Badge className={`${getFrequencyBadgeColor(task.frequency)} text-white`}>
                      {task.frequency}
                    </Badge>
                  </td>
                  <td className="p-3 border-r border-red-100">
                    <span className={`text-sm ${task.labour === "Missing" ? 'text-red-500 font-semibold' : 'text-gray-700'}`}>
                      {task.labour}
                    </span>
                  </td>
                  <td className="p-3 border-r border-red-100">
                    <span className={`text-sm ${task.equipment === "Missing" ? 'text-red-500 font-semibold' : 'text-gray-700'}`}>
                      {task.equipment}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`text-sm ${task.cars === "Missing" ? 'text-red-500 font-semibold' : 'text-gray-700'}`}>
                      {task.cars}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {sortedData.length === 0 && (
          <div className="text-center py-12 text-red-600">
            <LayoutDashboard className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No tasks match your current filters</p>
            <p className="text-sm opacity-75">Try adjusting your search criteria</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
