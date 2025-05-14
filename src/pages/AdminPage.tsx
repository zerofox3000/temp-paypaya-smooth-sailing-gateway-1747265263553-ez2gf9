
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import AdminLogin from "@/components/AdminLogin";

// This is a placeholder for merchant applications
// Will be replaced with actual Supabase data after integration
const mockApplications = [
  {
    id: "1",
    businessName: "Tech Solutions, Inc.",
    contactName: "John Smith",
    email: "john@techsolutions.com",
    phone: "(123) 456-7890",
    businessType: "SaaS",
    monthlyVolume: "$25,000",
    status: "Pending",
    submittedAt: "2025-05-12T15:30:00Z",
    referralCode: "PARTNER1",
  },
  {
    id: "2",
    businessName: "E-Shop Global",
    contactName: "Sarah Johnson",
    email: "sarah@eshopglobal.com",
    phone: "(456) 789-0123",
    businessType: "E-commerce",
    monthlyVolume: "$42,000",
    status: "Pending",
    submittedAt: "2025-05-11T10:15:00Z",
    referralCode: "",
  },
  {
    id: "3",
    businessName: "Health & Wellness Co.",
    contactName: "Michael Brown",
    email: "michael@healthwellness.com",
    phone: "(789) 012-3456",
    businessType: "Health Products",
    monthlyVolume: "$18,500",
    status: "Pending",
    submittedAt: "2025-05-10T09:45:00Z",
    referralCode: "PARTNER2",
  },
];

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem("adminAuthenticated");
    if (adminAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
  };

  const handleExportData = () => {
    // In the actual implementation, this will export data from Supabase
    // For now, we'll convert the mock data to CSV
    const headers = Object.keys(mockApplications[0]).join(",");
    const rows = mockApplications.map(app => Object.values(app).join(","));
    const csv = [headers, ...rows].join("\n");
    
    // Create a download link for the CSV
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "merchant_applications.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }
  
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage merchant applications</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleExportData} className="bg-accent hover:bg-accent/90">Export Data</Button>
            <Button onClick={handleLogout} variant="outline" className="border-accent/20 hover:bg-accent/10">Logout</Button>
          </div>
        </div>
        
        <div className="glass p-6 rounded-lg mb-8">
          <h2 className="text-xl font-medium mb-4">Merchant Applications</h2>
          <div className="space-y-4">
            {mockApplications.map((app) => (
              <Card key={app.id} className="glass-dark">
                <CardHeader>
                  <CardTitle>{app.businessName}</CardTitle>
                  <CardDescription>
                    {new Date(app.submittedAt).toLocaleDateString()} • {app.status}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Contact</p>
                      <p>{app.contactName}</p>
                      <p>{app.email}</p>
                      <p>{app.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Business Details</p>
                      <p>Type: {app.businessType}</p>
                      <p>Monthly Volume: {app.monthlyVolume}</p>
                      {app.referralCode && (
                        <p>Referral: {app.referralCode}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" className="border-accent/20 hover:bg-accent/10">Decline</Button>
                  <Button className="bg-accent hover:bg-accent/90">Approve</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
