import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const categoryData = [
  { name: "Promotions", value: 1247, color: "#EF4444" },
  { name: "Finance", value: 523, color: "#22C55E" },
  { name: "Travel", value: 289, color: "#3B82F6" },
  { name: "Personal", value: 456, color: "#8B5CF6" },
  { name: "Work", value: 332, color: "#F59E0B" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function EmailCategoryChart() {
  return (
    <div className="dark-card">
      <div className="pb-6">
        <h3 className="text-xl font-bold text-dark-primary mb-2">Email Categories</h3>
        <p className="text-dark-secondary font-medium">
          Distribution of classified emails this week
        </p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "1px solid #374151",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                color: "#FFFFFF"
              }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: "20px",
                fontSize: "14px"
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Category Stats */}
      <div className="pt-6 border-t border-dark-border space-y-3">
        {categoryData.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm font-medium text-dark-primary">{category.name}</span>
            </div>
            <span className="text-sm font-bold text-dark-secondary">{category.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}