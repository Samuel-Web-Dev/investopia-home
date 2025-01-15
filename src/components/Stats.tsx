export const Stats = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "$2.5B+", label: "Assets Under Management" },
            { number: "100K+", label: "Active Investors" },
            { number: "15+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="text-4xl font-bold text-primary-dark mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};