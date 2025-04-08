<<<<<<< HEAD
import { useState, useEffect } from "react";
=======

import { useState } from "react";
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
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
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

const AdminDashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()
  const { toast } = useToast();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingInvestor, setEditingInvestor] = useState<any>(null);
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        const response = await fetch("https://investpro-h8qu.onrender.com/admin/dashboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the request
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
        setInvestors(data.users);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setEditingId]);

  const handleEdit = async (investor: any) => {

    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    const response = await fetch(`https://investpro-h8qu.onrender.com/admin/dashboard/${investor._id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the request
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const investorData = await response.json();
   
    console.log(investorData)

    setEditingId(investorData.user._id);
    setEditingInvestor({ ...investorData.user });
  };

  const handleSave = async (id: number) => {
    if (!editingInvestor) return;

    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(`https://investpro-h8qu.onrender.com/admin/dashboard/update/${id}`, {
        method: "PUT", // or POST depending on how your API works
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...editingInvestor, // send updated data
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to update investor");
      }
  
      // If backend update succeeded, update local state
      setInvestors(
        investors.map((inv) => (inv._id === id ? editingInvestor : inv))
      );
      setEditingId(null);
      setEditingInvestor(null);
  
      toast({
        title: "Success",
        description: "Investor information updated successfully",
      });
  
    } catch (error) {
      console.error("Error updating investor:", error);
      toast({
        title: "Error",
        description: "Failed to update investor",
        variant: "destructive",
      });
    }
  };
  

  const handleCancel = () => {
    setEditingId(null);
    setEditingInvestor(null);
  };

  const handleChange = (field: string, value: any) => {
    if (!editingInvestor) return;

    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setEditingInvestor({
        ...editingInvestor,
        [parent]: {
          ...editingInvestor[parent],
          [child]: value,
        },
      });
    } else if (field === "earningsData") {
      setEditingInvestor({
        ...editingInvestor,
        earningsData: value,
      });
    } else {
      setEditingInvestor({ ...editingInvestor, [field]: value });
    }
  };


    // ✅ Logout Function
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("expiryDate");
      setIsAuthenticated(false)
      navigate("/login"); 
    };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/dashboard"
                className="flex items-center space-x-2 text-primary hover:text-primary/80">
                <Home className="w-5 h-5" />
                <span>{t("nav.admin")}</span>
              </Link>
            </div>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10"
              onClick={handleLogout}>
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t("nav.admin")} 🔐
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
          {investors
            .filter(
              (investor) =>
                investor.firstName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                investor.email.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((investor) => {
              console.log('Rendering investor:', investor._id);
              return (
                <Card
                key={investor._id}
                className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="space-y-4 flex-1 w-full">
                      <div className="flex items-center space-x-4">
                        <Users className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">
                            {investor.firstName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {investor.email}
                          </p>
                        </div>
                      </div>

                      {editingId === investor._id ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">
                              {t("dashboard.totalBalance")}
                            </label>
                            <Input
                              value={editingInvestor?.accBalance}
                              onChange={(e) =>
                                handleChange("accBalance", e.target.value)
                              }
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              {t("dashboard.activeInvestments")}
                            </label>
                            <Input
                              value={editingInvestor?.activeInvestments}
                              onChange={(e) =>
                                handleChange(
                                  "activeInvestments",
                                  e.target.value
                                )
                              }
                              className="mt-1"
                            />
                            <Input
                              value={editingInvestor?.accBalance}
                              onChange={(e) =>
                                handleChange("accBalance", e.target.value)
                              }
                              className="mt-1"
                              placeholder="Total Value"
                            />
                          </div>
                          <div>
<<<<<<< HEAD
                            <label className="text-sm font-medium">
                              {t("dashboard.recentDeposit")}
                            </label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">
                                  Amount:
                                </span>
                                <Input
                                  value={editingInvestor?.recentDeposit.amount}
                                  onChange={(e) =>
                                    handleChange(
                                      "recentDeposit.amount",
                                      e.target.value
                                    )
                                  }
=======
                            <label className="text-sm font-medium">{t('dashboard.recentDeposit')}</label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">Amount:</span>
                                <Input
                                  value={editingInvestor?.recentDeposit.amount}
                                  onChange={(e) => handleChange('recentDeposit.amount', e.target.value)}
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                                  className="flex-1"
                                />
                              </div>
                              <div className="flex items-center gap-2">
<<<<<<< HEAD
                                <span className="text-xs text-gray-500">
                                  Date:
                                </span>
                                <Input
                                  value={editingInvestor?.recentDeposit.date}
                                  onChange={(e) =>
                                    handleChange(
                                      "recentDeposit.date",
                                      e.target.value
                                    )
                                  }
=======
                                <span className="text-xs text-gray-500">Date:</span>
                                <Input
                                  value={editingInvestor?.recentDeposit.date}
                                  onChange={(e) => handleChange('recentDeposit.date', e.target.value)}
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                                  className="flex-1"
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
<<<<<<< HEAD
                            <label className="text-sm font-medium">
                              {t("dashboard.recentWithdrawal")}
                            </label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">
                                  Amount:
                                </span>
                                <Input
                                  value={
                                    editingInvestor?.recentWithdrawal.amount
                                  }
                                  onChange={(e) =>
                                    handleChange(
                                      "recentWithdrawal.amount",
                                      e.target.value
                                    )
                                  }
=======
                            <label className="text-sm font-medium">{t('dashboard.recentWithdrawal')}</label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">Amount:</span>
                                <Input
                                  value={editingInvestor?.recentWithdrawal.amount}
                                  onChange={(e) => handleChange('recentWithdrawal.amount', e.target.value)}
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                                  className="flex-1"
                                />
                              </div>
                              <div className="flex items-center gap-2">
<<<<<<< HEAD
                                <span className="text-xs text-gray-500">
                                  Date:
                                </span>
                                <Input
                                  value={editingInvestor?.recentWithdrawal.date}
                                  onChange={(e) =>
                                    handleChange(
                                      "recentWithdrawal.date",
                                      e.target.value
                                    )
                                  }
=======
                                <span className="text-xs text-gray-500">Date:</span>
                                <Input
                                  value={editingInvestor?.recentWithdrawal.date}
                                  onChange={(e) => handleChange('recentWithdrawal.date', e.target.value)}
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                                  className="flex-1"
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
<<<<<<< HEAD
                            <label className="text-sm font-medium">
                              {t("dashboard.recentInvestment")}
                            </label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">
                                  Amount:
                                </span>
                                <Input
                                  value={
                                    editingInvestor?.recentInvestment.amount
                                  }
                                  onChange={(e) =>
                                    handleChange(
                                      "recentInvestment.amount",
                                      e.target.value
                                    )
                                  }
=======
                            <label className="text-sm font-medium">{t('dashboard.recentInvestment')}</label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">Amount:</span>
                                <Input
                                  value={editingInvestor?.recentInvestment.amount}
                                  onChange={(e) => handleChange('recentInvestment.amount', e.target.value)}
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                                  className="flex-1"
                                />
                              </div>
                              <div className="flex items-center gap-2">
<<<<<<< HEAD
                                <span className="text-xs text-gray-500">
                                  Date:
                                </span>
                                <Input
                                  value={editingInvestor?.recentInvestment.date}
                                  onChange={(e) =>
                                    handleChange(
                                      "recentInvestment.date",
                                      e.target.value
                                    )
                                  }
=======
                                <span className="text-xs text-gray-500">Date:</span>
                                <Input
                                  value={editingInvestor?.recentInvestment.date}
                                  onChange={(e) => handleChange('recentInvestment.date', e.target.value)}
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                                  className="flex-1"
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label className="text-sm font-medium">
                              {t("dashboard.earningsOverview")}
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {editingInvestor?.earningsOverview.map(
                                (data: any, index: number) => (
                                  <div key={index} className="flex gap-2">
                                    <Input
                                      value={data.name}
                                      onChange={(e) => {
                                        const newData = [
                                          ...editingInvestor.earningsOverview,
                                        ];
                                        newData[index] = {
                                          ...data,
                                          name: e.target.value,
                                        };
                                        handleChange("earningsOverview", newData);
                                      }}
                                      placeholder="Month"
                                    />
                                    <Input
                                      type="number"
                                      value={data.amount}
                                      onChange={(e) => {
                                        const newData = [
                                          ...editingInvestor.earningsOverview,
                                        ];
                                        newData[index] = {
                                          ...data,
                                          amount: parseInt(e.target.value),
                                        };
                                        handleChange("earningsOverview", newData);
                                      }}
                                      placeholder="Amount"
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium">
                              {t("dashboard.totalBalance")}
                            </p>
                            <p className="text-lg">{investor.accBalance}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {t("dashboard.activeInvestments")}
                            </p>
                            <p className="text-lg">
                              {investor.activeInvestments}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {t("dashboard.totalValue")}: {investor.accBalance}
                            </p>
                          </div>
                          <div>
<<<<<<< HEAD
                            <p className="text-sm font-medium">
                              {t("dashboard.recentDeposit")}
                            </p>
                            <p className="text-lg text-green-500">
                              +{investor.recentDeposit.amount}
                            </p>
                            <p className="text-xs text-gray-500">
                              Date: {investor.recentDeposit.date}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {t("dashboard.recentWithdrawal")}
                            </p>
                            <p className="text-lg text-red-500">
                              -{investor.recentWithdrawal.amount}
                            </p>
                            <p className="text-xs text-gray-500">
                              Date: {investor.recentWithdrawal.date}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {t("dashboard.recentInvestment")}
                            </p>
                            <p className="text-lg text-blue-500">
                              {investor.recentInvestment.amount}
                            </p>
                            <p className="text-xs text-gray-500">
                              Date: {investor.recentInvestment.date}
                            </p>
=======
                            <p className="text-sm font-medium">{t('dashboard.recentDeposit')}</p>
                            <p className="text-lg text-green-500">+{investor.recentDeposit.amount}</p>
                            <p className="text-xs text-gray-500">Date: {investor.recentDeposit.date}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.recentWithdrawal')}</p>
                            <p className="text-lg text-red-500">-{investor.recentWithdrawal.amount}</p>
                            <p className="text-xs text-gray-500">Date: {investor.recentWithdrawal.date}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.recentInvestment')}</p>
                            <p className="text-lg text-blue-500">{investor.recentInvestment.amount}</p>
                            <p className="text-xs text-gray-500">Date: {investor.recentInvestment.date}</p>
>>>>>>> 90336d053bea9f3069e44123ba6419be4792cc68
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      {editingId === investor._id ? (
                        <>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleSave(investor._id)}
                            className="text-green-600">
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={handleCancel}
                            className="text-red-600">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            handleEdit(investor);
                          }}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              )
              
})}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
