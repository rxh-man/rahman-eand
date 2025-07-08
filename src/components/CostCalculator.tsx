
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QATask } from "@/data/mockData";
import { Calculator, DollarSign, TrendingUp, PieChart, Users } from "lucide-react";

interface CostCalculatorProps {
  data: QATask[];
  selectedProject: string;
}

// Cost data based on the exact data provided - matching your calculations
const costData = {
  "Digital Payments": {
    siteVisitsPerQA: 1,
    warehouseVisitsPerQA: 1,
    yearlyWorkload: 12,
    rationalGroupSize: 2,
    requiredSiteVisits: 2,
    qaEngineerActual: 1,
    qaEngineerRounded: 1,
    qaSupervisorRequired: 0,
    hseOfficerRequired: 0,
    qaEngineerCost: 72000,
    hseOfficerCost: 0,
    qaSupervisorCost: 0,
    assetsOneTime: 3200,
    carFuelDataAllowance: 31200,
    total: 106400
  },
  "AMI Projects": {
    siteVisitsPerQA: 1056,
    warehouseVisitsPerQA: 96,
    yearlyWorkload: 50000,
    rationalGroupSize: 25,
    requiredSiteVisits: 2000,
    qaEngineerActual: 1.89,
    qaEngineerRounded: 2,
    qaSupervisorRequired: 1,
    hseOfficerRequired: 2,
    qaEngineerCost: 144000,
    hseOfficerCost: 120000,
    qaSupervisorCost: 84000,
    assetsOneTime: 18500,
    carFuelDataAllowance: 156000,
    total: 520500
  },
  "CCTV Projects": {
    siteVisitsPerQA: 1056,
    warehouseVisitsPerQA: 96,
    yearlyWorkload: 660,
    rationalGroupSize: 3,
    requiredSiteVisits: 220,
    qaEngineerActual: 0.21,
    qaEngineerRounded: 2,
    qaSupervisorRequired: 1,
    hseOfficerRequired: 1,
    qaEngineerCost: 144000,
    hseOfficerCost: 60000,
    qaSupervisorCost: 84000,
    assetsOneTime: 13800,
    carFuelDataAllowance: 124800,
    total: 426600
  },
  "Smart Facilities": {
    siteVisitsPerQA: 1056,
    warehouseVisitsPerQA: 96,
    yearlyWorkload: 2100,
    rationalGroupSize: 10,
    requiredSiteVisits: 210,
    qaEngineerActual: 0.70,
    qaEngineerRounded: 1,
    qaSupervisorRequired: 1,
    hseOfficerRequired: 1,
    qaEngineerCost: 72000,
    hseOfficerCost: 60000,
    qaSupervisorCost: 84000,
    assetsOneTime: 10250,
    carFuelDataAllowance: 93600,
    total: 319850
  }
};

export const CostCalculator = ({ data, selectedProject }: CostCalculatorProps) => {
  // Only show cost for specific project, not "all"
  if (selectedProject === "all") {
    return (
      <Card className="shadow-lg border-red-100">
        <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Cost Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center py-12 text-red-600">
            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Please select a specific project to view cost details</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Map CCTV Projects to Security Systems Projects for data lookup
  const projectKey = selectedProject === "CCTV Projects" ? "CCTV Projects" : selectedProject;
  const project = costData[projectKey as keyof typeof costData];

  if (!project) {
    return (
      <Card className="shadow-lg border-red-100">
        <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Cost Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center py-12 text-red-600">
            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No cost data available for selected project</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Cost Calculator - {selectedProject}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Cost */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-700 font-medium">Total Cost</span>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-900">
              {project.total.toLocaleString()} AED
            </div>
          </div>

          {/* Labour Cost (Staff) */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-700 font-medium">Staff Cost</span>
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {(project.qaEngineerCost + project.hseOfficerCost + project.qaSupervisorCost).toLocaleString()} AED
            </div>
          </div>

          {/* Assets Cost (One-time) */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-700 font-medium">Assets (One-time)</span>
              <PieChart className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-900">
              {project.assetsOneTime.toLocaleString()} AED
            </div>
          </div>

          {/* Car + Fuel + Data */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-orange-700 font-medium">Car + Fuel + Data</span>
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-900">
              {project.carFuelDataAllowance.toLocaleString()} AED
            </div>
          </div>
        </div>

        {/* Resource Breakdown */}
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4">Resource Allocation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{project.qaEngineerRounded}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">QA Engineers</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{project.qaSupervisorRequired}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">QA Supervisors</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{project.hseOfficerRequired}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">HSE Officers</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{project.yearlyWorkload.toLocaleString()}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">Yearly Workload</Badge>
            </div>
          </div>
        </div>

        {/* Workload Details */}
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Workload Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Site Visits/QA/Year:</span>
              <div className="font-semibold">{project.siteVisitsPerQA.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-gray-600">Warehouse Visits/QA/Year:</span>
              <div className="font-semibold">{project.warehouseVisitsPerQA}</div>
            </div>
            <div>
              <span className="text-gray-600">Required Site Visits/Year:</span>
              <div className="font-semibold">{project.requiredSiteVisits.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
