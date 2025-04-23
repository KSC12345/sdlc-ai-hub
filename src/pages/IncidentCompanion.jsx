import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function IncidentCompanion() {
  const [incidentId, setIncidentId] = useState("");
  const [summary, setSummary] = useState("");
  const [rootCause, setRootCause] = useState("");
  const [resolution, setResolution] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [similarIncidents, setSimilarIncidents] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleGenerate = () => {
    setSummary("High latency in claims service due to DB connection pool exhaustion.");
    setRootCause("Insufficient DB connection pool size in production.");
    setResolution("Increased pool size, restarted DB pods, and applied auto-scaling policy.");
    setRecommendation("Implement monitoring alert when pool usage > 80%. Document in runbook.");
    setSimilarIncidents([
      "INC245783 - DB latency in pharmacy module",
      "INC238912 - Claims timeouts from connection overflow",
      "INC230001 - Under-scaled app tier caused backlog"
    ]);
  };

  const handleChat = () => {
    setChatResponse("For similar DB latency incidents, the root cause has commonly been related to misconfigured pool settings or sudden traffic spikes. It's recommended to implement alerting when connection usage exceeds 75%.");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">📘 Incident Learning Companion</h1>

      <Card className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Incident ID</Label>
            <Input value={incidentId} onChange={(e) => setIncidentId(e.target.value)} placeholder="INC1234567" />
          </div>
          <div className="flex items-end">
            <Button onClick={handleGenerate} className="w-full">Generate AI Insights</Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <div>
          <Label>🧾 AI-Generated Summary</Label>
          <Textarea rows={2} value={summary} readOnly className="bg-gray-100" />
        </div>
        <div>
          <Label>🔍 Root Cause Analysis</Label>
          <Textarea rows={2} value={rootCause} readOnly className="bg-gray-100" />
        </div>
        <div>
          <Label>🛠 Resolution</Label>
          <Textarea rows={2} value={resolution} readOnly className="bg-gray-100" />
        </div>
        <div>
          <Label>💡 Recommendations</Label>
          <Textarea rows={2} value={recommendation} readOnly className="bg-gray-100" />
        </div>
      </Card>

      <Card className="p-6 space-y-2">
        <h2 className="text-lg font-semibold mb-2">📂 Similar Past Incidents (AI Matched)</h2>
        <ul className="text-sm list-disc ml-6">
          {similarIncidents.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">🕒 Incident Timeline</h2>
        <div className="space-y-4">
          {[ 
            { time: "08:42 AM", text: "Alert triggered: DB latency spike", source: "Splunk" },
            { time: "08:45 AM", text: "SRE notified via PagerDuty", source: "PagerDuty" },
            { time: "08:50 AM", text: "Initial investigation into DB connections", source: "Remedy" },
            { time: "09:05 AM", text: "DB pool size confirmed as bottleneck", source: "Dynatrace" },
            { time: "09:10 AM", text: "Pool size increased, pods restarted", source: "Kubernetes Logs" },
            { time: "09:25 AM", text: "Latency metrics normalized", source: "Splunk" },
            { time: "09:40 AM", text: "Post-mortem draft initiated", source: "Confluence" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-3 h-3 mt-1 rounded-full bg-blue-600"></div>
              <div className="text-sm">
                <span className="font-semibold text-gray-800">{item.time}</span>
                <span className="ml-2 text-gray-700">{item.text}</span> <span className="ml-2 text-xs text-gray-500 italic">[{item.source}]</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">💬 Ask the Companion</h2>
        <div className="space-y-2">
          <Input
            placeholder="e.g. What was the fix for DB latency?"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <Button onClick={handleChat}>Ask</Button>
          {chatResponse && <div className="mt-2 p-3 bg-gray-100 rounded-md text-sm">{chatResponse}</div>}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">📊 AI Insights Summary</h2>
        <ul className="text-sm list-disc ml-6 space-y-1">
          <li>🔥 Confidence Score: 92%</li>
          <li>🧠 AI Model Attribution: Based on 3 recent incident patterns</li>
          <li>🕵️‍♀️ Causal Chain: Alert spike → DB pool exhaustion → Latency → Timeout → Restart</li>
          <li>📈 Potential Impact: 12,000 members could not access claim status</li>
        </ul>
      </Card>
    </div>
  );
}
