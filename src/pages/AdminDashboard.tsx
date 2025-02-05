import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Home,
  Users,
  LogOut,
  HeadphonesIcon,
  Search,
  Edit,
  Save,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Investor {
  id: number;
  username: string;
  email: string;
  balance: string;
  registrationDate: string;
  lastAccess: string;
  status: string;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [investors, setInvestors] = useState<Investor[]>([
    {
      id: 1,
      username: "JohnDoe",
      email: "john@example.com",
      balance: "$5,000.00",
      registrationDate: "2024-01-15",
      lastAccess: "2024-03-19 14:30",
      status: "active",
    },
    {
      id: 2,
      username: "JaneSmith",
      email: "jane@example.com",
      balance: "$7,500.00",
      registrationDate: "2024-02-01",
      lastAccess: "2024-03-19 15:45",
      status: "active",
    },
  ]);

  const [editingInvestor, setEditingInvestor] = useState<Investor | null>(null);

  const handleEdit = (investor: Investor) => {
    setEditingId(investor.id);
    setEditingInvestor({ ...investor });
  };

  const handleSave = (id: number) => {
    if (!editingInvestor) return;

    setInvestors(investors.map(inv => 
      inv.id === id ? editingInvestor : inv
    ));
    setEditingId(null);
    setEditingInvestor(null);
    
    toast({
      title: "Success",
      description: "Investor information updated successfully",
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingInvestor(null);
  };

  const handleChange = (field: keyof Investor, value: string) => {
    if (!editingInvestor) return;
    setEditingInvestor({ ...editingInvestor, [field]: value });
  };

  const filteredInvestors = investors.filter(investor => 
    investor.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/admin"
                className="flex items-center space-x-2 text-primary hover:text-primary/80"
              >
                <Home className="w-5 h-5" />
                <span>Admin Dashboard</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-2 text-primary hover:text-primary/80"
              >
                <HeadphonesIcon className="w-5 h-5" />
                <span>Support</span>
              </Link>
            </div>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10"
              onClick={() => {
                console.log("Admin Logout clicked");
              }}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Admin Dashboard 🔐
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage all investors and their accounts
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by username or email..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {filteredInvestors.map((investor) => (
            <Card key={investor.id} className="hover:shadow-lg transition-all">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div className="grid gap-1">
                    {editingId === investor.id ? (
                      <>
                        <Input
                          value={editingInvestor?.username}
                          onChange={(e) => handleChange('username', e.target.value)}
                          className="w-48"
                        />
                        <Input
                          value={editingInvestor?.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="w-48"
                        />
                        <Input
                          value={editingInvestor?.balance}
                          onChange={(e) => handleChange('balance', e.target.value)}
                          className="w-48"
                        />
                        <Input
                          value={editingInvestor?.status}
                          onChange={(e) => handleChange('status', e.target.value)}
                          className="w-48"
                        />
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold">{investor.username}</h3>
                        <p className="text-sm text-muted-foreground">{investor.email}</p>
                        <p className="text-sm text-muted-foreground">Balance: {investor.balance}</p>
                        <p className="text-sm text-muted-foreground">Status: {investor.status}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Registered: {investor.registrationDate}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Last Access: {investor.lastAccess}
                    </p>
                  </div>
                  {editingId === investor.id ? (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSave(investor.id)}
                        className="text-green-600"
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCancel}
                        className="text-red-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(investor)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;