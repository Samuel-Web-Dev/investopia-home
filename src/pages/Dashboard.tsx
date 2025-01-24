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
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const Dashboard = () => {
  // Mock data - replace with actual data from your backend
  const userData = {
    username: "JohnDoe",
    balance: "$5,000.00",
    earnedToday: "$250.00",
    registrationDate: "2024-01-15",
    lastAccess: "2024-03-19 14:30",
  };

  // Mock data for charts
  const earningsData = [
    { name: "Jan", amount: 2400 },
    { name: "Feb", amount: 1398 },
    { name: "Mar", amount: 9800 },
    { name: "Apr", amount: 3908 },
    { name: "May", amount: 4800 },
    { name: "Jun", amount: 3800 },
  ];

  const depositData = [
    { name: "Mon", value: 1200 },
    { name: "Tue", value: 900 },
    { name: "Wed", value: 1600 },
    { name: "Thu", value: 1700 },
    { name: "Fri", value: 1400 },
    { name: "Sat", value: 1200 },
    { name: "Sun", value: 800 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dashboard Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-primary hover:text-primary/80"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
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
                // Add logout logic here
                console.log("Logout clicked");
              }}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome back, {userData.username}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Account Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Balance
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
                Earned Today
              </CardTitle>
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.earnedToday}</div>
              <p className="text-xs text-green-500 mt-1">+12.5% from yesterday</p>
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
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Last Access
              </CardTitle>
              <History className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{userData.lastAccess}</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Earnings Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={earningsData}>
                    <XAxis dataKey="name" />
                    <YAxis />
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
              <CardTitle className="text-lg">Weekly Deposits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={depositData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/deposit">
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
          <Link to="/withdraw">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
          </Link>
          <Link to="/referral">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Referral Program</h3>
                    <p className="text-sm text-muted-foreground">
                      Invite friends & earn
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Additional Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/deposit-history">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <History className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium">Deposit History</h3>
              </CardContent>
            </Card>
          </Link>
          <Link to="/withdraw-history">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <History className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium">Withdraw History</h3>
              </CardContent>
            </Card>
          </Link>
          <Link to="/earnings-history">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <History className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium">Earnings History</h3>
              </CardContent>
            </Card>
          </Link>
          <Link to="/edit-account">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <UserCog className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium">Edit Account</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;