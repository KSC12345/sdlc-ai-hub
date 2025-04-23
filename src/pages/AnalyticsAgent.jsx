import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function AnalyticsAgent() {
  const [deliverable, setDeliverable] = useState("Member Portal Redesign");
  const [feature, setFeature] = useState("Secure Login");
  const [iteration, setIteration] = useState("Iteration 12");

  const deliverables = [
    "Member Portal Redesign",
    "Digital ID Card Delivery",
    "Claims Summary UI Overhaul",
    "Telehealth Integration"
  ];

  const features = [
    "Secure Login",
    "Benefits Overview",
    "Message Center",
    "Prescription Tracker"
  ];

  const productivity = feature === "Secure Login" ? [
    {
      name: "Alice",
      stories: 7,
      defects: 2,
      commits: 18,
      summary: [
        "Refactored authentication module",
        "Fixed issue with password reset logic",
        "Improved performance of login endpoint"
      ]
    },
    {
      name: "Bob",
      stories: 5,
      defects: 1,
      commits: 13,
      summary: [
        "Updated UI components for member dashboard",
        "Resolved layout bugs on Safari",
        "Integrated claims API endpoint"
      ]
    },
    {
      name: "Carlos",
      stories: 6,
      defects: 0,
      commits: 16,
      summary: [
        "Created reusable hooks for notifications",
        "Implemented unit tests for claims logic",
        "Refactored error handling middleware"
      ]
    }
  ] : [
    {
      name: "Dana",
      stories: 8,
      defects: 3,
      commits: 20,
      summary: [
        "Developed feature for virtual visit scheduling",
        "Fixed accessibility issues in dashboard",
        "Enhanced telehealth API integration"
      ]
    },
    {
      name: "Evan",
      stories: 6,
      defects: 1,
      commits: 15,
      summary: [
        "Optimized claim rendering logic",
        "Updated RX tracker filters",
        "Resolved issue in appointment module"
      ]
    }
  ];

  const projectSummary = {
    totalStories: deliverable === "Claims Summary UI Overhaul" ? 30 : 24,
    completed: deliverable === "Claims Summary UI Overhaul" ? 25 : 18,
    pending: deliverable === "Claims Summary UI Overhaul" ? 5 : 6,
    bugsRaised: feature === "Benefits Overview" ? 8 : 5,
    velocity: iteration === "Iteration 12" ? 21 : 19,
    plannedVsCompleted: deliverable === "Digital ID Card Delivery" ? "22/28" : "18/24",
    avgCycleTime: "3.2 days",
    avgLeadTime: "5.4 days",
    reopenedDefects: 2,
    blockerIssues: 1,
  };

  const iterationCompare = [
    { name: "Iteration 10", velocity: 18 },
    { name: "Iteration 11", velocity: 22 },
    { name: "Iteration 12", velocity: 21 }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">SDLC Analytics Agent</h1>

      <Card className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Select Deliverable</Label>
            <select value={deliverable} onChange={(e) => setDeliverable(e.target.value)} className="w-full border px-2 py-1 rounded">
  {deliverables.map((d) => (
    <option key={d} value={d}>{d}</option>
  ))}
</select>
          </div>
          <div>
            <Label>Select Feature</Label>
            <select value={feature} onChange={(e) => setFeature(e.target.value)} className="w-full border px-2 py-1 rounded">
  {features.map((f) => (
    <option key={f} value={f}>{f}</option>
  ))}
</select>
          </div>
          <div>
            <Label>Select Iteration</Label>
            <select value={iteration} onChange={(e) => setIteration(e.target.value)} className="w-full border px-2 py-1 rounded">
  {iterationCompare.map((iter) => (
    <option key={iter.name} value={iter.name}>{iter.name}</option>
  ))}
</select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(projectSummary).map(([key, value]) => (
            <Card key={key} className="p-4 text-center">
              <div className="text-sm text-gray-500">{key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())}</div>
              <div className="text-xl font-bold">{value}</div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Developer Productivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productivity.map((dev) => (
            <Card key={dev.name} className="p-4 space-y-3">
              <h3 className="text-md font-bold text-gray-800">{dev.name}</h3>
              <p className="text-sm text-gray-600">✅ Stories Completed: <strong>{dev.stories}</strong></p>
              <p className="text-sm text-gray-600">🐞 Defects Resolved: <strong>{dev.defects}</strong></p>
              <p className="text-sm text-gray-600">📦 Git Commits: <strong>{dev.commits}</strong></p>
              <p className="text-sm text-gray-500 italic">Efficiency Score: <strong>{((dev.stories + dev.defects) / dev.commits).toFixed(2)}</strong></p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">🧾 Summary of Work:</span>
                <ul className="list-disc list-inside text-xs mt-1 space-y-1">
                  {dev.summary.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Velocity Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={iterationCompare}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="velocity" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
