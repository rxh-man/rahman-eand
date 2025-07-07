
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
  // Digital Payments Tasks
  {
    id: "1",
    projectId: "Digital Payments",
    scope: "Documents Validation",
    details: "Inspection of all details mentioned in DNs",
    frequency: "Daily",
    labour: "1 QA Technician",
    equipment: "1 Laptop",
    cars: "1 car"
  },
  {
    id: "2",
    projectId: "Digital Payments",
    scope: "Performance",
    details: "Analytics for overall progress",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "3",
    projectId: "Digital Payments",
    scope: "Performance",
    details: "Analytics for Individual progress",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "4",
    projectId: "Digital Payments",
    scope: "Performance",
    details: "SLA Target And Root causes for preachment",
    frequency: "Daily/Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "5",
    projectId: "Digital Payments",
    scope: "Performance",
    details: "Merchant feedback",
    frequency: "Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "6",
    projectId: "Digital Payments",
    scope: "Performance",
    details: "Client (Bank) satisfaction survey",
    frequency: "Monthly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "7",
    projectId: "Digital Payments",
    scope: "Trackers and Documentation",
    details: "All documents including trackers, inventory files, logs, etc. to be validated",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "8",
    projectId: "Digital Payments",
    scope: "Products/Services",
    details: "Sampling Devices for defects after production",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "9",
    projectId: "Digital Payments",
    scope: "Site visits",
    details: "2 visits for warehouse Audit",
    frequency: "Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Not Required"
  },
  {
    id: "10",
    projectId: "Digital Payments",
    scope: "HSE Compliance Check",
    details: "Not required",
    frequency: "Not Required",
    labour: "Not Required",
    equipment: "Not Required",
    cars: "Not Required"
  },

  // AMI Projects Tasks
  {
    id: "11",
    projectId: "AMI Projects",
    scope: "Documents Validation",
    details: "Inspection of all details and photos mentioned in Proof Documents",
    frequency: "Daily",
    labour: "1 QA Engineer",
    equipment: "5 Laptops",
    cars: "5 cars"
  },
  {
    id: "12",
    projectId: "AMI Projects",
    scope: "Installation & Monitoring Verification",
    details: "Ensure physical set-up is done per technical layout",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "13",
    projectId: "AMI Projects",
    scope: "Performance",
    details: "Analytics for overall progress",
    frequency: "Daily",
    labour: "4 QA Technician",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "14",
    projectId: "AMI Projects",
    scope: "Performance",
    details: "Analytics for Individual progress",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "15",
    projectId: "AMI Projects",
    scope: "Performance",
    details: "SLA Target And Root causes for preachment",
    frequency: "Daily/Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "16",
    projectId: "AMI Projects",
    scope: "Performance",
    details: "Client satisfaction survey",
    frequency: "Monthly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "17",
    projectId: "AMI Projects",
    scope: "Trackers and Documentation",
    details: "All documents including trackers, inventory files, logs, etc. to be validated",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "18",
    projectId: "AMI Projects",
    scope: "Site visits",
    details: "3 visits for Site Audit / technician",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "19",
    projectId: "AMI Projects",
    scope: "Site visits",
    details: "Visual Inspection for Damage",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "20",
    projectId: "AMI Projects",
    scope: "Site visits",
    details: "2 visits for warehouse Audit",
    frequency: "Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "21",
    projectId: "AMI Projects",
    scope: "HSE Compliance Check",
    details: "Inspection of PPEs and HSE standards adherence",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "22",
    projectId: "AMI Projects",
    scope: "HSE Compliance Check",
    details: "Ensure proper signage, safe wiring, no exposure risks",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },

  // CCTV Projects Tasks
  {
    id: "23",
    projectId: "CCTV Projects",
    scope: "Documents Validation",
    details: "Inspection of all details and photos mentioned in Proof Documents",
    frequency: "Daily",
    labour: "1 QA Engineer",
    equipment: "3 Laptops",
    cars: "5 cars"
  },
  {
    id: "24",
    projectId: "CCTV Projects",
    scope: "Installation & Monitoring Verification",
    details: "Ensure physical set-up is done per technical layout",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "25",
    projectId: "CCTV Projects",
    scope: "Performance",
    details: "Analytics for overall progress",
    frequency: "Daily",
    labour: "2 QA Technician",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "26",
    projectId: "CCTV Projects",
    scope: "Performance",
    details: "Analytics for Individual progress",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "27",
    projectId: "CCTV Projects",
    scope: "Performance",
    details: "SLA Target And Root causes for preachment",
    frequency: "Daily/Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "28",
    projectId: "CCTV Projects",
    scope: "Performance",
    details: "Client satisfaction survey",
    frequency: "Monthly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "29",
    projectId: "CCTV Projects",
    scope: "Trackers and Documentation",
    details: "All documents including trackers, inventory files, logs, etc. to be validated",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "30",
    projectId: "CCTV Projects",
    scope: "Site visits",
    details: "3 visits for Site Audit / technician",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "31",
    projectId: "CCTV Projects",
    scope: "Site visits",
    details: "2 visits for warehouse Audit",
    frequency: "Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "32",
    projectId: "CCTV Projects",
    scope: "Site visits",
    details: "Visual Inspection for Damage",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "33",
    projectId: "CCTV Projects",
    scope: "HSE Compliance Check",
    details: "Inspection of PPEs and HSE standards adherence",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "34",
    projectId: "CCTV Projects",
    scope: "HSE Compliance Check",
    details: "Ensure proper signage, safe wiring, no exposure risks",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },

  // Smart Facilities Tasks
  {
    id: "35",
    projectId: "Smart Facilities",
    scope: "Documents Validation",
    details: "Inspection of all details and photos mentioned in Proof Documents",
    frequency: "Daily",
    labour: "2 QA Technician",
    equipment: "2 Laptops",
    cars: "2 cars"
  },
  {
    id: "36",
    projectId: "Smart Facilities",
    scope: "Installation & Monitoring Verification",
    details: "Ensure physical set-up is done per technical layout",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "37",
    projectId: "Smart Facilities",
    scope: "Performance",
    details: "Analytics for overall progress",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "38",
    projectId: "Smart Facilities",
    scope: "Performance",
    details: "Analytics for Individual progress",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "39",
    projectId: "Smart Facilities",
    scope: "Performance",
    details: "SLA Target And Root causes for preachment",
    frequency: "Daily/Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "40",
    projectId: "Smart Facilities",
    scope: "Performance",
    details: "Client satisfaction survey",
    frequency: "Monthly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "41",
    projectId: "Smart Facilities",
    scope: "Trackers and Documentation",
    details: "All documents including trackers, inventory files, logs, etc. to be validated",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "42",
    projectId: "Smart Facilities",
    scope: "Site visits",
    details: "3 visits for Site Audit / technician",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "43",
    projectId: "Smart Facilities",
    scope: "Site visits",
    details: "2 visits for warehouse Audit",
    frequency: "Weekly",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "44",
    projectId: "Smart Facilities",
    scope: "Site visits",
    details: "Visual Inspection for Damage",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  },
  {
    id: "45",
    projectId: "Smart Facilities",
    scope: "HSE Compliance Check",
    details: "Inspection of PPEs and HSE standards adherence",
    frequency: "Daily",
    labour: "Missing",
    equipment: "Missing",
    cars: "Missing"
  }
];
