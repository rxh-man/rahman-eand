
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QATask } from "@/data/mockData";
import { Calculator, DollarSign, TrendingUp, PieChart } from "lucide-react";

interface CostCalculatorProps {
  data: QATask[];
  selectedProject: string;
}

// Cost data based on the uploaded image
const costData = {
  "Digital Payments": {
    qaEngineerRate: 65000, // AED per year
    qaEngineerCount: 1,
    qaTechnicianRate: 45000, // AED per year
    qaTechnicianCount: 0,
    laptopCost: 8000, // AED per unit
    carCost: 120000, // AED per year per car
    siteCost: 13800, // AED
    totalWorkload: 25000,
    nationalGovernmentCost: 124800
  },
  "AMI Projects": {
    qaEngineerRate: 65000,
    qaEngineerCount: 1,
    qaTechnicianRate: 45000,
    qaTechnicianCount: 4,
    laptopCost: 8000,
    carCost: 120000,
    siteCost: 13800,
    totalWorkload: 25000,
    nationalGovernmentCost: 383000
  },
  "CCTV Projects": {
    qaEngineerRate: 65000,
    qaEngineerCount: 1,
    qaTechnicianRate: 45000,
    qaTechnicianCount: 2,
    laptopCost: 8000,
    carCost: 120000,
    siteCost: 13800,
    totalWorkload: 25000,
    nationalGovernmentCost: 293000
  },
  "Smart Facilities": {
    qaEngineerRate: 65000,
    qaEngineerCount: 0,
    qaTechnicianRate: 45000,
    qaTechnicianCount: 2,
    laptopCost: 8000,
    carCost: 120000,
    siteCost: 13800,
    totalWorkload: 25000,
    nationalGovernmentCost: 233000
  }
};

export const CostCalculator = ({ data, selectedProject }: CostCalculatorProps) => {
  // Calculate costs for selected project or all projects
  const calculateCosts = () => {
    if (selectedProject === "all") {
      // Calculate total for all projects
      let totalCost = 0;
      let totalQAEngineers = 0;
      let totalQATechnicians = 0;
      let totalLaptops = 0;
      let totalCars = 0;

      Object.values(costData).forEach(project => {
        totalCost += project.nationalGovernmentCost;
        totalQAEngineers += project.qaEngineerCount;
        totalQATechnicians += project.qaTechnicianCount;
        totalLaptops += (project.qaEngineerCount + project.qaTechnicianCount);
        totalCars += 5; // Assuming 5 cars per project based on data
      });

      return {
        totalCost,
        breakdown: {
          qaEngineers: totalQAEngineers,
          qaTechnicians: totalQATechnicians,
          laptops: totalLaptops,
          cars: totalCars,
          labourCost: (totalQAEngineers * 65000) + (totalQATechnicians * 45000),
          equipmentCost: totalLaptops * 8000,
          carCost: totalCars * 120000
        }
      };
    } else {
      // Calculate for specific project
      const project = costData[selectedProject as keyof typeof costData];
      if (!project) return null;

      const laptops = project.qaEngineerCount + project.qaTechnicianCount;
      const cars = selectedProject === "Digital Payments" ? 1 : 5;

      return {
        totalCost: project.nationalGovernmentCost,
        breakdown: {
          qaEngineers: project.qaEngineerCount,
          qaTechnicians: project.qaTechnicianCount,
          laptops,
          cars,
          labourCost: (project.qaEngineerCount * project.qaEngineerRate) + (project.qaTechnicianCount * project.qaTechnicianRate),
          equipmentCost: laptops * project.laptopCost,
          carCost: cars * project.carCost
        }
      };
    }
  };

  const costs = calculateCosts();

  if (!costs) {
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
          Cost Calculator - {selectedProject === "all" ? "All Projects" : selectedProject}
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
              {costs.totalCost.toLocaleString()} AED
            </div>
          </div>

          {/* Labour Cost */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-700 font-medium">Labour Cost</span>
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {costs.breakdown.labourCost.toLocaleString()} AED
            </div>
          </div>

          {/* Equipment Cost */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-700 font-medium">Equipment Cost</span>
              <PieChart className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-900">
              {costs.breakdown.equipmentCost.toLocaleString()} AED
            </div>
          </div>

          {/* Car Cost */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-orange-700 font-medium">Car Cost</span>
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-900">
              {costs.breakdown.carCost.toLocaleString()} AED
            </div>
          </div>
        </div>

        {/* Resource Breakdown */}
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4">Resource Allocation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{costs.breakdown.qaEngineers}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">QA Engineers</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{costs.breakdown.qaTechnicians}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">QA Technicians</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{costs.breakdown.laptops}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">Laptops</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{costs.breakdown.cars}</div>
              <Badge variant="outline" className="border-red-300 text-red-700">Cars</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
