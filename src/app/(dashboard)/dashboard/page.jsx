"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const PASSWORD = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD;
const COLORS = ["#6366f1", "#22c55e", "#facc15", "#f97316", "#06b6d4"];

export default function Dashboard() {
  const router = useRouter();
  const [passwordInput, setPasswordInput] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pass");
    if (stored === PASSWORD) setHasAccess(true);
  }, []);

  useEffect(() => {
    if (!hasAccess) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/visitor");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [hasAccess]);

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      localStorage.setItem("pass", PASSWORD);
      setHasAccess(true);
    } else {
      alert("Incorrect password");
      router.push("/");
    }
  };

  const dailyVisitors = useMemo(() => {
    const map = {};
    data?.visitors?.forEach((v) => {
      const date = new Date(v.createdAt).toLocaleDateString();
      map[date] = (map[date] || 0) + 1;
    });
    return Object.entries(map).map(([date, count]) => ({ date, count }));
  }, [data]);

  const locationData = useMemo(() => {
    const map = {};
    data?.visitors?.forEach((v) => {
      map[v.location] = (map[v.location] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [data]);

  const returningVsNew = useMemo(() => {
    let newUsers = 0;
    let returning = 0;
    data?.visitors?.forEach((v) => {
      if (v.viewCount > 1) returning++;
      else newUsers++;
    });
    return [
      { name: "New", value: newUsers },
      { name: "Returning", value: returning },
    ];
  }, [data]);

  if (!hasAccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h2 className="text-2xl font-semibold mb-4">
          Enter Dashboard Password
        </h2>
        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="border border-gray-300 p-3 rounded mb-4 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="••••••••"
        />
        <button
          onClick={handleLogin}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
        >
          Login
        </button>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
        Loading dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Visitor Dashboard</h1>
        <Link
          href="/"
          className="text-indigo-600 underline hover:text-indigo-800"
        >
          Home
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SummaryCard title="Total Visits" value={data.totalVisits} />
        <SummaryCard title="Unique Visitors" value={data.totalVisitors} />
        <SummaryCard
          title="Top Visitor"
          value={data.topVisitor?.ip}
          subtitle={`Views: ${data.topVisitor?.viewCount}`}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
        <ChartCard title="Visitors Per Day" className="xl:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyVisitors}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Visitors by Location">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={locationData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {locationData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="New vs Returning Visitors">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={returningVsNew}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Visitor List */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Visitor Details
      </h2>
      <div className="max-h-[400px] overflow-y-auto space-y-4">
        {data.visitors
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .map((v) => (
            <div
              key={v._id}
              className="bg-white p-4 rounded-lg shadow border border-gray-200 text-sm"
            >
              <p>
                <strong>IP:</strong> {v.ip}
              </p>
              <p>
                <strong>Location:</strong> {v.location}
              </p>
              <p>
                <strong>User Agent:</strong> {v.userAgent}
              </p>
              <p>
                <strong>First Visit:</strong>{" "}
                {new Date(v.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Last Visit:</strong>{" "}
                {new Date(v.updatedAt).toLocaleString()}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-indigo-600 text-white rounded-full">
                Views: {v.viewCount}
              </span>
            </div>
          ))}
      </div>
    </main>
  );
}

function SummaryCard({ title, value, subtitle }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold text-gray-900">{value || "—"}</h2>
      {subtitle && <p className="text-gray-400 mt-1 text-sm">{subtitle}</p>}
    </div>
  );
}

function ChartCard({ title, children, className = "" }) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow border border-gray-200 ${className}`}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      {children}
    </div>
  );
}
