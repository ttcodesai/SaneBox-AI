import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const unsubscribeData = [
  { date: "Mon", count: 8, blocked: 3 },
  { date: "Tue", count: 12, blocked: 5 },
  { date: "Wed", count: 6, blocked: 2 },
  { date: "Thu", count: 15, blocked: 7 },
  { date: "Fri", count: 9, blocked: 4 },
  { date: "Sat", count: 4, blocked: 1 },
  { date: "Sun", count: 7, blocked: 3 },
];

export function UnsubscribeStats() {
  return (
    <div className="dark-card">
      <div className="pb-6">
        <h3 className="text-xl font-bold text-dark-primary mb-2">Unsubscribe Activity</h3>
        <p className="text-dark-secondary font-medium">
          Weekly unsubscribe and block actions
        </p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={unsubscribeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" 
              stroke="#94A3B8"
              fontSize={12}
              fontWeight={500}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#94A3B8"
              fontSize={12}
              fontWeight={500}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "1px solid #374151",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                fontWeight: 500,
                color: "#FFFFFF"
              }}
            />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="#EF4444" 
              strokeWidth={3}
              dot={{ fill: "#EF4444", strokeWidth: 0, r: 5 }}
              activeDot={{ r: 7, stroke: "#EF4444", strokeWidth: 2, fill: "#1E293B" }}
              name="Unsubscribed"
            />
            <Line 
              type="monotone" 
              dataKey="blocked" 
              stroke="#F59E0B" 
              strokeWidth={3}
              dot={{ fill: "#F59E0B", strokeWidth: 0, r: 5 }}
              activeDot={{ r: 7, stroke: "#F59E0B", strokeWidth: 2, fill: "#1E293B" }}
              name="Blocked"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Summary Stats */}
      <div className="pt-6 border-t border-dark-border grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-400 mb-1">61</div>
          <div className="text-sm text-dark-secondary">Total Unsubscribed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400 mb-1">25</div>
          <div className="text-sm text-dark-secondary">Total Blocked</div>
        </div>
      </div>
    </div>
  );
}