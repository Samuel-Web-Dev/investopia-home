import { useState, useEffect, useCallback } from "react";
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
  Settings,
  Menu,
  Phone
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import WithdrawModal from "@/components/WithdrawModal";

// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

const Dashboard = ({ setIsAuthenticated }) => {
  
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [earningsData, setEarningsData] = useState([]);


  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    setIsAuthenticated(false)
    navigate("/login"); // Redirect to login
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        const response = await fetch("https://investpro-h8qu.onrender.com/investor/dashboard", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Add the token to the request
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const data = await response.json();
        console.log(data)
        
        setUserData(data.userData[0]);
        setEarningsData(data.userData[0].earningsOverview);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


   const handleScroll = useCallback(() => {
      setScrolled(window.scrollY > 20);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);


    if (loading) {
      return <Loader />;
    }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className={`fixed w-full top-0 left-0 right-0 z-50 bg-primary-dark/95 text-white py-4 px-6 transition-all duration-300 ease-in-out ${scrolled ? 'shadow-lg backdrop-blur-sm' : ''}`}>
  <div className="container mx-auto flex justify-between items-center">
    <Link to='/' className="text-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105 duration-300">
      <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center animate-pulse">
        <span className="text-white font-bold text-xl">S</span>
      </div>
      <span className="animate-fadeIn delay-100">Simplex</span>
    </Link>

    <div className="hidden md:flex items-center gap-6">
        <>
          <Link to="/investor/dashboard" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
            <Menu className="w-4 h-4" />
            Dashboard
          </Link>
          <Link to={`/investor/dashboard/account-settings`} state={{ name: userData.firstName, email: userData.email, userId: userData._id }} className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
            <Settings className="w-4 h-4" />
            Settings
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
            <HeadphonesIcon className="w-4 h-4" />
            Contact
          </Link>
          <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 transition-all duration-300">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </>
    </div>

    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-primary-dark text-white">
          <div className="flex flex-col gap-4 pt-10">
              <>
              <Link to="/investor/dashboard" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
            <Menu className="w-4 h-4" />
            Dashboard
          </Link>
                <Link to="/contact" className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" /> Contact
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</nav>


      <div className="container mx-auto px-4 py-12 pt-28">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            { `Welcome back, ${userData.firstName}! 👋`}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what's happening with your investments today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Balance
              </CardTitle>
              <Wallet className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{`$${userData.accBalance}` }</div>
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
                Total value: {`$${userData.accBalance}`}
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
              <div className="text-2xl font-bold">{userData.registerDate}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Member since
              </p>
            </CardContent>
          </Card>

          <Link to={`/investor/dashboard/account-settings`} state={{ name: userData.firstName, email: userData.email, userId: userData._id }}>
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Account Settings
                </CardTitle>
                <UserCog className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-medium">Edit Profile</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Update your account information
                </p>
              </CardContent>
            </Card>
          </Link>
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
                    +{`$${userData.recentDeposit.amount}`}
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
                    -{`$${userData.recentWithdrawal.amount}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">Recent Investment</p>
                  <p className="text-sm text-gray-500">{`$${userData.recentInvestment.date}`}</p>
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
          <Link to="/investor/dashboard/deposit-plans">
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
