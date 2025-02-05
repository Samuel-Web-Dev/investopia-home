import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  History,
  Users,
  UserCog,
  LogOut,
  HeadphonesIcon,
  TrendingUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import WithdrawModal from "@/components/WithdrawModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Dashboard = () => {
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const { id: investorId } = useParams();
  const { t } = useLanguage();
  const isAdmin = true; // Replace with actual admin check logic
  
  const userData = {
    username: "JohnDoe",
    balance: "$5,000.00",
    earnedToday: "$250.00",
    registrationDate: "2024-01-15",
    totalInvestors: "1,234",
    activeInvestments: "3",
    recentDeposit: { amount: "$1,000", date: "2024-03-18" },
    recentWithdrawal: { amount: "$500", date: "2024-03-17" },
    recentInvestment: { amount: "$2,500", date: "2024-03-16" },
  };

  const earningsData = [
    { name: "Jan", amount: 2400 },
    { name: "Feb", amount: 1398 },
    { name: "Mar", amount: 9800 },
    { name: "Apr", amount: 3908 },
    { name: "May", amount: 4800 },
    { name: "Jun", amount: 3800 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2 md:pb-0">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-primary hover:text-primary/80 whitespace-nowrap"
              >
                <Home className="w-5 h-5" />
                <span>{t('nav.home')}</span>
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 whitespace-nowrap"
                >
                  <Users className="w-5 h-5" />
                  <span>{t('nav.admin')}</span>
                </Link>
              )}
              <Link
                to="/account-settings"
                className="flex items-center space-x-2 text-primary hover:text-primary/80 whitespace-nowrap"
              >
                <UserCog className="w-5 h-5" />
                <span>{t('nav.settings')}</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-2 text-primary hover:text-primary/80 whitespace-nowrap"
              >
                <HeadphonesIcon className="w-5 h-5" />
                <span>{t('nav.contact')}</span>
              </Link>
            </div>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10 whitespace-nowrap"
              onClick={() => {
                console.log("Logout clicked");
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
            {investorId ? `Managing ${userData.username}'s Account` : `Welcome back, ${userData.username}! 👋`}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what's happening with your investments today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Balance
              </CardTitle>
              <Wallet className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.balance}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Available for withdrawal
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Investments
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.activeInvestments}</div>
              <p className="text-xs text-green-500 mt-1">
                Total value: {userData.balance}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Registration Date
              </CardTitle>
              <History className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.registrationDate}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Member since
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Earnings Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={earningsData}>
                    <XAxis 
                      dataKey="name" 
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">Recent Deposit</p>
                  <p className="text-sm text-gray-500">{userData.recentDeposit.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-500">
                    +{userData.recentDeposit.amount}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">Recent Withdrawal</p>
                  <p className="text-sm text-gray-500">{userData.recentWithdrawal.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-500">
                    -{userData.recentWithdrawal.amount}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">Recent Investment</p>
                  <p className="text-sm text-gray-500">{userData.recentInvestment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-500">
                    {userData.recentInvestment.amount}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <Link to="/deposit-plans">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <ArrowUpRight className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Make Deposit</h3>
                    <p className="text-sm text-muted-foreground">
                      Add funds to your account
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Card 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setWithdrawModalOpen(true)}
          >
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <ArrowDownRight className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="font-semibold">Withdraw Funds</h3>
                  <p className="text-sm text-muted-foreground">
                    Request a withdrawal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <WithdrawModal 
        open={withdrawModalOpen}
        onOpenChange={setWithdrawModalOpen}
      />
    </div>
  );
};

export default Dashboard;