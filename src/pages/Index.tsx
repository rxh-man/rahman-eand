import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { KPICards } from "@/components/KPICards";
import { DataTable } from "@/components/DataTable";
import { ResourceHeatmap } from "@/components/ResourceHeatmap";
import { ScopeDistribution } from "@/components/ScopeDistribution";
import { FrequencyChart } from "@/components/FrequencyChart";
import { MissingResourceChart } from "@/components/MissingResourceChart";
import { CostCalculator } from "@/components/CostCalculator";
import { mockData, type QATask } from "@/data/mockData";
import { Filter, Download, RotateCcw } from "lucide-react";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<string>("all");
  const [selectedScope, setSelectedScope] = useState<string>("all");
  const [selectedFrequency, setSelectedFrequency] = useState<string>("all");
  const [selectedResourceFilter, setSelectedResourceFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Get unique values for filters
  const uniqueProjects = [...new Set(mockData.map(item => item.projectId))];
  const uniqueScopes = [...new Set(mockData.map(item => item.scope))];
  const uniqueFrequencies = [...new Set(mockData.map(item => item.frequency))];

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    let filtered = mockData;

    if (selectedProject !== "all") {
      filtered = filtered.filter(item => item.projectId === selectedProject);
    }

    if (selectedScope !== "all") {
      filtered = filtered.filter(item => item.scope === selectedScope);
    }

    if (selectedFrequency !== "all") {
      filtered = filtered.filter(item => item.frequency === selectedFrequency);
    }

    if (selectedResourceFilter === "missing") {
      filtered = filtered.filter(item => 
        !item.labour || !item.equipment || !item.cars ||
        item.labour === "Missing" || item.equipment === "Missing" || item.cars === "Missing"
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.projectId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.scope.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedProject, selectedScope, selectedFrequency, selectedResourceFilter, searchTerm, mockData]);

  const resetFilters = () => {
    setSelectedProject("all");
    setSelectedScope("all");
    setSelectedFrequency("all");
    setSelectedResourceFilter("all");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <div className="bg-red-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <img 
              src="/lovable-uploads/784dc15f-9c14-4254-94d4-cbc874804c85.png" 
              alt="e& enterprise logo" 
              className="h-12 w-auto"
            />
            <h1 className="text-3xl font-bold">Field Operations Governance Dashboard</h1>
          </div>
          <p className="text-red-100 text-lg">QA Scope and Resource Insights</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Filters Section */}
        <Card className="shadow-lg border-red-100">
          <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Dynamic Filters & Slicers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-red-900 mb-2 block">Project ID</label>
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger className="border-red-200 focus:border-red-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                    {uniqueProjects.map(project => (
                      <SelectItem key={project} value={project}>{project}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-red-900 mb-2 block">Scope</label>
                <Select value={selectedScope} onValueChange={setSelectedScope}>
                  <SelectTrigger className="border-red-200 focus:border-red-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Scopes</SelectItem>
                    {uniqueScopes.map(scope => (
                      <SelectItem key={scope} value={scope}>{scope}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-red-900 mb-2 block">Frequency</label>
                <Select value={selectedFrequency} onValueChange={setSelectedFrequency}>
                  <SelectTrigger className="border-red-200 focus:border-red-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Frequencies</SelectItem>
                    {uniqueFrequencies.map(frequency => (
                      <SelectItem key={frequency} value={frequency}>{frequency}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-red-900 mb-2 block">Resource Status</label>
                <Select value={selectedResourceFilter} onValueChange={setSelectedResourceFilter}>
                  <SelectTrigger className="border-red-200 focus:border-red-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Resources</SelectItem>
                    <SelectItem value="missing">Missing Resources</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-red-900 mb-2 block">Search</label>
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-red-200 focus:border-red-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={resetFilters}
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Filters
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>

              <div className="ml-auto text-sm text-red-700">
                Showing {filteredData.length} of {mockData.length} tasks
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Summary Cards */}
        <KPICards data={filteredData} />

        {/* Cost Calculator Section */}
        <CostCalculator data={filteredData} selectedProject={selectedProject} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ResourceHeatmap data={filteredData} />
          <ScopeDistribution data={filteredData} />
          <FrequencyChart data={filteredData} />
        </div>

        {/* Data Table */}
        <DataTable data={filteredData} />
      </div>
    </div>
  );
};

export default Index;
