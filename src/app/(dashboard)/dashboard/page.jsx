"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  FiActivity,
  FiArrowLeft,
  FiClock,
  FiEye,
  FiLock,
  FiLogOut,
  FiRefreshCw,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const STORAGE_KEY = "portfolio_dashboard_token";
const COLORS = ["#57e6c8", "#ffb457", "#ff6a3d", "#8bd5ff", "#f6f7fb"];

export default function Dashboard() {
  const [tokenInput, setTokenInput] = useState("");
  const [token, setToken] = useState("");
  const [authStatus, setAuthStatus] = useState("checking");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDashboard = useCallback(async (accessToken) => {
    const cleanToken = accessToken.trim();
    if (!cleanToken) {
      setAuthStatus("locked");
      setError("Enter the dashboard password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/visitor", {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      });

      if (!res.ok) {
        const result = await res.json().catch(() => null);
        throw new Error(result?.message || "Dashboard authentication failed.");
      }

      const result = await res.json();
      setData(result);
      setToken(cleanToken);
      setAuthStatus("open");
      window.localStorage.setItem(STORAGE_KEY, cleanToken);
    } catch (err) {
      window.localStorage.removeItem(STORAGE_KEY);
      setToken("");
      setData(null);
      setAuthStatus("locked");
      setError(
        err.message === "Unauthorized"
          ? "That password does not match."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedToken = window.localStorage.getItem(STORAGE_KEY);
      if (savedToken) {
        setTokenInput(savedToken);
        fetchDashboard(savedToken);
        return;
      }
      setAuthStatus("locked");
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchDashboard]);

  const sortedVisitors = useMemo(() => {
    return [...(data?.visitors || [])].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }, [data]);

  const dailyVisitors = useMemo(() => {
    const map = {};
    sortedVisitors.forEach((visitor) => {
      const key = new Date(visitor.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map).map(([date, count]) => ({ date, count }));
  }, [sortedVisitors]);

  const locationData = useMemo(() => {
    const map = {};
    sortedVisitors.forEach((visitor) => {
      const location = visitor.location || "Unknown";
      map[location] = (map[location] || 0) + 1;
    });
    return Object.entries(map)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }, [sortedVisitors]);

  const returningStats = useMemo(() => {
    const returning = sortedVisitors.filter((visitor) => visitor.viewCount > 1);
    const newVisitors = sortedVisitors.length - returning.length;
    return [
      { name: "New", value: newVisitors },
      { name: "Returning", value: returning.length },
    ];
  }, [sortedVisitors]);

  const dashboardMetrics = useMemo(() => {
    const totalVisitors = data?.totalVisitors || 0;
    const totalVisits = data?.totalVisits || 0;
    const returning = sortedVisitors.filter((visitor) => visitor.viewCount > 1)
      .length;
    const returningRate = totalVisitors
      ? `${Math.round((returning / totalVisitors) * 100)}%`
      : "0%";
    const avgViews = totalVisitors
      ? (totalVisits / totalVisitors).toFixed(1)
      : "0.0";
    const lastSeen = sortedVisitors[0]?.updatedAt
      ? new Date(sortedVisitors[0].updatedAt).toLocaleString()
      : "No visits yet";

    return { totalVisitors, totalVisits, returningRate, avgViews, lastSeen };
  }, [data, sortedVisitors]);

  const handleLogin = (event) => {
    event.preventDefault();
    fetchDashboard(tokenInput);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setAuthStatus("locked");
    setToken("");
    setData(null);
    setTokenInput("");
    setError("");
  };

  if (authStatus === "checking") {
    return (
      <DashboardShell>
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/70">
            <FiRefreshCw className="animate-spin text-designColor" />
            Checking dashboard access
          </div>
        </div>
      </DashboardShell>
    );
  }

  if (authStatus === "locked") {
    return (
      <DashboardShell>
        <main className="min-h-screen px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center">
            <section className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
                >
                  <FiArrowLeft aria-hidden="true" />
                  Portfolio
                </Link>

                <div className="space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-designColor">
                    <FiShield aria-hidden="true" />
                    Private Analytics
                  </span>
                  <h1 className="max-w-3xl font-titleFont text-4xl font-semibold leading-tight text-white sm:text-6xl">
                    Visitor intelligence for the portfolio.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-white/62">
                    Sign in with the value configured to review visitor traffic, returning interest, and recent
                    activity.
                  </p>
                </div>

                <div className="grid gap-3 text-sm text-white/58 sm:grid-cols-3">
                  {["No indexing", "Server checked", "Local session"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              <form
                onSubmit={handleLogin}
                className="relative overflow-hidden rounded-lg border border-white/10 bg-[#101820]/80 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.36)] backdrop-blur md:p-8"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#57e6c8]/60 to-transparent" />
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-2xl text-designColor">
                  <FiLock aria-hidden="true" />
                </div>
                <h2 className="font-titleFont text-2xl font-semibold text-white">
                  Dashboard Login
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  The password is validated by the API before the dashboard
                  opens.
                </p>

                <label
                  htmlFor="dashboard-token"
                  className="mt-8 block text-xs uppercase tracking-[0.18em] text-white/45"
                >
                  Access password
                </label>
                <input
                  id="dashboard-token"
                  type="password"
                  value={tokenInput}
                  onChange={(event) => setTokenInput(event.target.value)}
                  className="mt-3 h-14 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#57e6c8]/55"
                  placeholder="Enter password"
                  aria-label="Dashboard access password"
                  autoComplete="current-password"
                />

                {error && (
                  <p className="mt-4 rounded-lg border border-[#ff6a3d]/30 bg-[#ff6a3d]/10 px-4 py-3 text-sm text-[#ffb199]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-designColor px-5 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <FiRefreshCw className="animate-spin" aria-hidden="true" />
                  ) : (
                    <FiShield aria-hidden="true" />
                  )}
                  {loading ? "Checking" : "Unlock Dashboard"}
                </button>
              </form>
            </section>
          </div>
        </main>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <main className="min-h-screen px-5 py-7 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <header className="flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link
                href="/"
                className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/48 transition hover:text-white"
              >
                <FiArrowLeft aria-hidden="true" />
                Portfolio
              </Link>
              <p className="text-xs uppercase tracking-[0.22em] text-designColor">
                Visitor Dashboard
              </p>
              <h1 className="mt-2 font-titleFont text-4xl font-semibold text-white sm:text-5xl">
                Analytics Command Center
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
                Live portfolio visitor signals, grouped for quick reads and
                operational follow-up.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => fetchDashboard(token)}
                disabled={loading}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white/75 transition hover:border-[#57e6c8]/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiRefreshCw
                  className={loading ? "animate-spin" : ""}
                  aria-hidden="true"
                />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white/75 transition hover:border-[#ff6a3d]/45 hover:text-white"
              >
                <FiLogOut aria-hidden="true" />
                Logout
              </button>
            </div>
          </header>

          {error && (
            <p className="rounded-lg border border-[#ff6a3d]/30 bg-[#ff6a3d]/10 px-4 py-3 text-sm text-[#ffb199]">
              {error}
            </p>
          )}

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              icon={<FiEye />}
              label="Total Visits"
              value={dashboardMetrics.totalVisits}
              helper={`${dashboardMetrics.avgViews} views per visitor`}
            />
            <MetricCard
              icon={<FiUsers />}
              label="Unique Visitors"
              value={dashboardMetrics.totalVisitors}
              helper={`${dashboardMetrics.returningRate} returning`}
            />
            <MetricCard
              icon={<FiTrendingUp />}
              label="Top Location"
              value={data?.topVisitor?.location || "No data"}
              helper={`${data?.topVisitor?.viewCount || 0} tracked views`}
            />
            <MetricCard
              icon={<FiClock />}
              label="Latest Activity"
              value={dashboardMetrics.lastSeen}
              helper="Most recent visit"
            />
          </section>

          <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            <ChartPanel title="Visits by Day" className="xl:col-span-2">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={dailyVisitors}>
                  <defs>
                    <linearGradient id="visitFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#57e6c8" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#57e6c8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.45)" tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} allowDecimals={false} />
                  <Tooltip content={<DashboardTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#57e6c8"
                    strokeWidth={3}
                    fill="url(#visitFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartPanel>

            <ChartPanel title="New vs Returning">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={returningStats}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.45)" tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} allowDecimals={false} />
                  <Tooltip content={<DashboardTooltip />} />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {returningStats.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartPanel>

            <ChartPanel title="Top Locations" className="xl:col-span-1">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={locationData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={72}
                    outerRadius={110}
                    paddingAngle={4}
                  >
                    {locationData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<DashboardTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid gap-2">
                {locationData.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/65"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      {item.name}
                    </span>
                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </ChartPanel>

            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] xl:col-span-2">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-designColor">
                    Recent Visitors
                  </p>
                  <h2 className="mt-1 font-titleFont text-2xl font-semibold text-white">
                    Activity Feed
                  </h2>
                </div>
                <p className="text-sm text-white/45">
                  Showing {sortedVisitors.length} visitor records
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-white/10">
                <div className="max-h-[470px] overflow-y-auto">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead className="sticky top-0 z-10 bg-[#111921] text-xs uppercase tracking-[0.16em] text-white/45">
                      <tr>
                        <th className="px-4 py-4 font-medium">Location</th>
                        <th className="px-4 py-4 font-medium">Views</th>
                        <th className="px-4 py-4 font-medium">First Visit</th>
                        <th className="px-4 py-4 font-medium">Last Visit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {sortedVisitors.map((visitor) => (
                        <tr
                          key={visitor._id}
                          className="bg-white/[0.015] text-white/68 transition hover:bg-white/[0.045]"
                        >
                          <td className="px-4 py-4 text-white">
                            {visitor.location || "Unknown"}
                          </td>
                          <td className="px-4 py-4">
                            <span className="inline-flex rounded-lg bg-[#57e6c8]/10 px-3 py-1 text-[#9ef7e7]">
                              {visitor.viewCount}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            {new Date(visitor.createdAt).toLocaleString()}
                          </td>
                          <td className="px-4 py-4">
                            {new Date(visitor.updatedAt).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-designColor">
                  <FiActivity aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-designColor">
                    Signal Quality
                  </p>
                  <h2 className="font-titleFont text-xl font-semibold text-white">
                    Tracking Health
                  </h2>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/62">
                <HealthRow label="Auth" value="Server token verified" />
                <HealthRow label="Dataset" value={`${sortedVisitors.length} records`} />
                <HealthRow label="Mode" value="No-cache dashboard fetch" />
                <HealthRow label="Storage" value="Token stored locally" />
              </div>
            </section>
          </section>
        </div>
      </main>
    </DashboardShell>
  );
}

function DashboardShell({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(135deg,rgba(87,230,200,0.08)_0_1px,transparent_1px_22px)] opacity-70" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(87,230,200,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,106,61,0.16),transparent_28%),linear-gradient(180deg,#0b0f12_0%,#101820_100%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function MetricCard({ icon, label, value, helper }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.22)]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-lg text-designColor">
          {icon}
        </span>
      </div>
      <h2 className="break-words font-titleFont text-3xl font-semibold leading-tight text-white">
        {value || "0"}
      </h2>
      <p className="mt-2 text-sm text-white/48">{helper}</p>
    </article>
  );
}

function ChartPanel({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${className}`}
    >
      <h2 className="mb-5 font-titleFont text-2xl font-semibold text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DashboardTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-white/10 bg-[#101820] px-4 py-3 text-sm shadow-2xl">
      {label && <p className="mb-1 text-white/60">{label}</p>}
      {payload.map((item) => (
        <p key={item.name} className="text-white">
          {item.name}: {item.value}
        </p>
      ))}
    </div>
  );
}

function HealthRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-3">
      <span className="text-white/42">{label}</span>
      <span className="text-right text-white/78">{value}</span>
    </div>
  );
}
