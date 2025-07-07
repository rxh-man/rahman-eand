
export interface QATask {
  id: string;
  projectId: string;
  scope: string;
  details: string;
  frequency: string;
  labour: string;
  equipment: string;
  cars: string;
}

export const mockData: QATask[] = [
  {
    id: "1",
    projectId: "Digital Payments",
    scope: "Site visits",
    details: "Conduct quarterly assessment of digital payment terminal installations and verify merchant compliance",
    frequency: "Monthly",
    labour: "2 QA Technicians",
    equipment: "Laptop, Testing Kit",
    cars: "1 Vehicle"
  },
  {
    id: "2",
    projectId: "Digital Payments",
    scope: "Performance tracking",
    details: "Monitor transaction success rates and system uptime across all payment gateways",
    frequency: "Daily",
    labour: "1 Performance Analyst",
    equipment: "Monitoring Dashboard",
    cars: "Not Required"
  },
  {
    id: "3",
    projectId: "AMI Projects",
    scope: "Documents Validation",
    details: "Review and validate smart meter deployment documentation and compliance certificates",
    frequency: "Weekly",
    labour: "1 Documentation Specialist",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "4",
    projectId: "AMI Projects",
    scope: "Site visits",
    details: "Physical inspection of AMI infrastructure and data collection units",
    frequency: "Monthly",
    labour: "3 Field Engineers",
    equipment: "Tablet, Measurement Tools",
    cars: "2 Vehicles"
  },
  {
    id: "5",
    projectId: "CCTV Projects",
    scope: "HSE Compliance Check",
    details: "Ensure all CCTV installations meet health, safety, and environmental standards",
    frequency: "Weekly",
    labour: "2 HSE Inspectors",
    equipment: "Safety Equipment, Checklist",
    cars: "1 Vehicle"
  },
  {
    id: "6",
    projectId: "CCTV Projects",
    scope: "Performance tracking",
    details: "Monitor camera uptime, image quality, and recording system performance",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Monitoring System",
    cars: "Not Required"
  },
  {
    id: "7",
    projectId: "Smart Facilities",
    scope: "Site visits",
    details: "Inspect smart building automation systems and IoT sensor networks",
    frequency: "Monthly",
    labour: "2 IoT Specialists",
    equipment: "Diagnostic Tools, Laptop",
    cars: "1 Vehicle"
  },
  {
    id: "8",
    projectId: "Smart Facilities",
    scope: "Documents Validation",
    details: "Validate energy efficiency reports and system configuration documentation",
    frequency: "Monthly",
    labour: "1 Technical Reviewer",
    equipment: "Missing",
    cars: "Not Required"
  },
  {
    id: "9",
    projectId: "Digital Payments",
    scope: "HSE Compliance Check",
    details: "Safety audit of payment processing centers and server facilities",
    frequency: "Monthly",
    labour: "1 Safety Auditor",
    equipment: "Safety Checklist, PPE",
    cars: "Missing"
  },
  {
    id: "10",
    projectId: "AMI Projects",
    scope: "Performance tracking",
    details: "Analyze meter reading accuracy and data transmission reliability",
    frequency: "Weekly",
    labour: "2 Data Analysts",
    equipment: "Analytics Software",
    cars: "Not Required"
  },
  {
    id: "11",
    projectId: "CCTV Projects",
    scope: "Documents Validation",
    details: "Review installation certificates and maintenance schedules",
    frequency: "Weekly",
    labour: "Missing",
    equipment: "Document Scanner",
    cars: "Not Required"
  },
  {
    id: "12",
    projectId: "Smart Facilities",
    scope: "HSE Compliance Check",
    details: "Environmental impact assessment of smart facility installations",
    frequency: "Monthly",
    labour: "1 Environmental Specialist",
    equipment: "Environmental Sensors",
    cars: "1 Vehicle"
  }
];
