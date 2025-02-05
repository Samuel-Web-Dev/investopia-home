import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Home, Users, LogOut, HeadphonesIcon, Search, Edit, Save, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface Investor {
  id: number;
  username: string;
  email: string;
  balance: string;
  registrationDate: string;
  activeInvestments: string;
  totalValue: string;
  recentDeposit: { amount: string; date: string };
  recentWithdrawal: { amount: string; date: string };
  recentInvestment: { amount: string; date: string };
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [investors, setInvestors] = useState<Investor[]>([
    {
      id: 1,
      username: "JohnDoe",
      email: "john@example.com",
      balance: "$5,000.00",
      registrationDate: "2024-01-15",
      activeInvestments: "3",
      totalValue: "$15,000.00",
      recentDeposit: { amount: "$1,000", date: "2024-03-18" },
      recentWithdrawal: { amount: "$500", date: "2024-03-17" },
      recentInvestment: { amount: "$2,500", date: "2024-03-16" },
    },
    {
      id: 2,
      username: "JaneSmith",
      email: "jane@example.com",
      balance: "$7,500.00",
      registrationDate: "2024-02-01",
      activeInvestments: "2",
      totalValue: "$10,000.00",
      recentDeposit: { amount: "$2,000", date: "2024-03-19" },
      recentWithdrawal: { amount: "$300", date: "2024-03-18" },
      recentInvestment: { amount: "$1,500", date: "2024-03-17" },
    },
  ]);

  const [editingInvestor, setEditingInvestor] = useState<Investor | null>(null);

  const handleEdit = (investor: Investor) => {
    setEditingId(investor.id);
    setEditingInvestor({ ...investor });
  };

  const handleSave = (id: number) => {
    if (!editingInvestor) return;
    setInvestors(investors.map(inv => inv.id === id ? editingInvestor : inv));
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

  const handleChange = (field: keyof Investor | 'recentDeposit.amount' | 'recentWithdrawal.amount' | 'recentInvestment.amount', value: string) => {
    if (!editingInvestor) return;
    
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setEditingInvestor({
        ...editingInvestor,
        [parent]: {
          ...editingInvestor[parent as keyof Investor],
          [child]: value,
        },
      });
    } else {
      setEditingInvestor({ ...editingInvestor, [field]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/admin" className="flex items-center space-x-2 text-primary hover:text-primary/80">
                <Home className="w-5 h-5" />
                <span>{t('nav.admin')}</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 text-primary hover:text-primary/80">
                <HeadphonesIcon className="w-5 h-5" />
                <span>{t('nav.contact')}</span>
              </Link>
            </div>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10"
              onClick={() => console.log("Admin Logout clicked")}
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
            {t('nav.admin')} 🔐
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
            .filter(investor => 
              investor.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
              investor.email.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((investor) => (
              <Card key={investor.id} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center space-x-4">
                        <Users className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">{investor.username}</h3>
                          <p className="text-sm text-muted-foreground">{investor.email}</p>
                        </div>
                      </div>

                      {editingId === investor.id ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">{t('dashboard.totalBalance')}</label>
                            <Input
                              value={editingInvestor?.balance}
                              onChange={(e) => handleChange('balance', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t('dashboard.activeInvestments')}</label>
                            <Input
                              value={editingInvestor?.activeInvestments}
                              onChange={(e) => handleChange('activeInvestments', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t('dashboard.totalValue')}</label>
                            <Input
                              value={editingInvestor?.totalValue}
                              onChange={(e) => handleChange('totalValue', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t('dashboard.recentDeposit')}</label>
                            <Input
                              value={editingInvestor?.recentDeposit.amount}
                              onChange={(e) => handleChange('recentDeposit.amount', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t('dashboard.recentWithdrawal')}</label>
                            <Input
                              value={editingInvestor?.recentWithdrawal.amount}
                              onChange={(e) => handleChange('recentWithdrawal.amount', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t('dashboard.recentInvestment')}</label>
                            <Input
                              value={editingInvestor?.recentInvestment.amount}
                              onChange={(e) => handleChange('recentInvestment.amount', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.totalBalance')}</p>
                            <p className="text-lg">{investor.balance}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.activeInvestments')}</p>
                            <p className="text-lg">{investor.activeInvestments}</p>
                            <p className="text-sm text-muted-foreground">{t('dashboard.totalValue')}: {investor.totalValue}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.recentDeposit')}</p>
                            <p className="text-lg text-green-500">+{investor.recentDeposit.amount}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.recentWithdrawal')}</p>
                            <p className="text-lg text-red-500">-{investor.recentWithdrawal.amount}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('dashboard.recentInvestment')}</p>
                            <p className="text-lg text-blue-500">{investor.recentInvestment.amount}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      {editingId === investor.id ? (
                        <>
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
                        </>
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
