
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ReleaseNotes() {
  const [version, setVersion] = useState("2.4.1");
  const [changes, setChanges] = useState(`- Introduced dynamic provider search filters
- Improved claim summary visualization
- Added audit logging to member profile changes`);
  const [bugsFixed, setBugsFixed] = useState(`- Resolved 500 error on member detail view
- Fixed overlapping UI in Firefox
- Corrected incorrect status display in claims`);
  const [highlights, setHighlights] = useState("Major improvements in provider search performance and stability fixes across core components.");
  const [notes, setNotes] = useState(null);

  const handleGenerate = () => {
    const composed = `📝 Release Notes - v${version}

🔹 Highlights:
${highlights}

✅ Features & Enhancements:
${changes}

🐞 Bug Fixes:
${bugsFixed}

📌 Version: ${version}
📅 Generated on: ${new Date().toLocaleDateString()}`;

    setNotes(composed);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Release Note Composer</h1>
      <Card className="p-6 space-y-4">
        <div>
          <Label>Release Version</Label>
          <Input value={version} onChange={(e) => setVersion(e.target.value)} placeholder="e.g. 2.3.1" />
        </div>
        <div>
          <Label>Release Highlights</Label>
          <Textarea rows={2} value={highlights} onChange={(e) => setHighlights(e.target.value)} placeholder="Key features to spotlight..." />
        </div>
        <div>
          <Label>Features & Enhancements</Label>
          <Textarea rows={4} value={changes} onChange={(e) => setChanges(e.target.value)} placeholder="- Added new filters\n- Improved load time..." />
        </div>
        <div>
          <Label>Bug Fixes</Label>
          <Textarea rows={3} value={bugsFixed} onChange={(e) => setBugsFixed(e.target.value)} placeholder="- Fixed 404 on dashboard\n- Resolved broken links..." />
        </div>
        <Button className="w-full" onClick={handleGenerate}>Generate Notes</Button>
      </Card>

      {notes && (
        <Card className="p-6 mt-6 whitespace-pre-wrap bg-gray-50 border">
          <h2 className="text-lg font-semibold mb-2">Generated Release Notes</h2>
          <pre className="text-sm">{notes}</pre>
        </Card>
      )}
    </div>
  );
}
