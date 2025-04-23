import React, { useState, useEffect, useMemo } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CodeScaffoldGenerator() {
 const [gitRepo, setGitRepo] = useState("");
  const [activeFile, setActiveFile] = useState("index.tsx");
  const [workspace, setWorkspace] = useState("");
  const [project, setProject] = useState("");
  const [iteration, setIteration] = useState("Sprint 12");
  const [feature, setFeature] = useState("");
  const [themes, setThemes] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [deliverables, setDeliverables] = useState([]);
  const storyOptions = [
    {
      value: "id_card_reset",
      label: "As a member, I want to download my ID card so I can access care easily.",
      acceptance: `- Member can see ID card download button\n- Download generates valid PDF\n- Error shown if download fails`,
      module: "idCardDownload"
    },
    {
      value: "update_home_address",
      label: "As a member, I want to update my home address.",
      acceptance: `- Address field is editable\n- Change is saved to member profile\n- Confirmation is shown to user`,
      module: "updateAddress"
    },
    {
      value: "update_email_address",
      label: "As a member I want to update email address to get communications",
      acceptance: `- Email field is editable\n- Change triggers validation and confirmation email\n- Update is logged and reflected in communication system`,
      module: "updateEmail"
    },
    {
      value: "salesforce_opportunity",
      label: "Technical Story - Create an integration with Salesforce to update Opportunity status of the campaign",
      acceptance: `- Connect to Salesforce API\n- Update opportunity record\n- Log changes and response status`,
      module: "salesforceOpportunity"
    }
  ];
  const [story, setStory] = useState(null);
  const [acceptance, setAcceptance] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [moduleNameTouched, setModuleNameTouched] = useState(false);
  const [scaffoldType, setScaffoldType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setThemes(["Digital Transformation", "Claims Modernization"]);
      setPrograms(["Channel Tooling", "User Experience", "Security"]);
      setDeliverables([
        "Member Portal Redesign",
        "Digital ID Card Delivery",
        "Claims Summary UI Overhaul",
        "Telehealth Integration"
      ]);
    }, 500);
  }, []);

  const fileContents = useMemo(() => {
    if (!story) return {};
    const files = {};
    const selectedModule = story.module;

    files["index.tsx"] = `import React, { useState } from 'react';

export default function ${selectedModule}() {
  const [form, setForm] = useState({ email: '', address: '', error: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (story.value.includes('email') && !/^[^@]+@[^.]+\..+$/.test(form.email)) {
      return setForm({ ...form, error: 'Please enter a valid email.' });
    }
    if (story.value.includes('address') && form.address.length < 5) {
      return setForm({ ...form, error: 'Address must be at least 5 characters.' });
    }
    alert('Submitted successfully');
  };

  return (
    <div className='p-4'>
      <h2 className='text-lg font-bold mb-4'>${story.label}</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {story.value.includes('email') && (
          <div>
            <label className='block text-sm mb-1'>Email</label>
            <input name='email' value={form.email} onChange={handleChange} className='w-full border p-2 rounded' required />
          </div>
        )}
        {story.value.includes('address') && (
          <div>
            <label className='block text-sm mb-1'>Address</label>
            <input name='address' value={form.address} onChange={handleChange} className='w-full border p-2 rounded' required />
          </div>
        )}
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>Submit</button>
        {form.error && <p className='text-red-500'>{form.error}</p>}
      </form>
    </div>
  );
}`;

    files["controller.js"] = `exports.handler = function(req, res) {
  const input = req.body.input;
  if (!input) {
    return res.status(400).json({ error: 'Input required' });
  }
  res.status(200).json({ message: '${selectedModule} processed: ' + input });
};`;

    files["service.js"] = `module.exports = {
  processInput: async (input) => {
    return '${selectedModule} processed: ' + input;
  }
};`;

    files["tests.spec.ts"] = `import { test, expect } from '@playwright/test';

test('${selectedModule} UI renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/${selectedModule}');
  await expect(page.locator('h2')).toContainText('${story.label}');
});`;

    return files;
  }, [story]);

  const downloadZip = async () => {
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    Object.entries(fileContents).forEach(([name, content]) => zip.file(name, content));
    const blob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${moduleName}.zip`;
    a.click();
  };

  const pushToGit = () => alert(`Push ${moduleName} to ${gitRepo}`);

  const isStep1Complete = workspace && project && iteration && feature;
  const isStep2Complete = story;
  const isStep3Complete = moduleName && scaffoldType;

  return (

    <div className="p-4 max-w-6xl mx-auto space-y-8">
          <h1 className="text-xl font-semibold">Code Scaffold Creator</h1>

      <Card className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">1. Connect to Rally</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Theme</Label>
            <select value={workspace} onChange={(e) => setWorkspace(e.target.value)} className="w-full border p-2 rounded">
              <option value="">Select a theme</option>
              {themes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <Label>Program</Label>
            <select value={project} onChange={(e) => setProject(e.target.value)} className="w-full border p-2 rounded">
              <option value="">Select a program</option>
              {programs.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <Label>Deliverable</Label>
            <select value={feature} onChange={(e) => setFeature(e.target.value)} className="w-full border p-2 rounded">
              <option value="">Select a deliverable</option>
              {deliverables.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <Label>Iteration</Label>
            <Input value={iteration} onChange={(e) => setIteration(e.target.value)} />
          </div>
        </div>
      </Card>

      {isStep1Complete && (
        <Card className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">2. User Story Details</h2>
          <div>
            <Label>User Story</Label>
            <select
              value={story?.value || ""}
              onChange={(e) => {
                const selected = storyOptions.find((s) => s.value === e.target.value);
                if (selected) {
                  setStory(selected);
                  setAcceptance(selected.acceptance);
                  if (!moduleNameTouched) setModuleName(selected.module);
                }
              }}
              className="w-full border p-2 rounded"
            >
              <option value="">Select a story</option>
              {storyOptions.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          {story && (
            <div>
              <Label>Acceptance Criteria</Label>
              <Textarea value={acceptance} rows={4} readOnly />
            </div>
          )}
        </Card>
      )}

      {isStep1Complete && isStep2Complete && (
        <Card className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">3. Scaffold Options</h2>
          <div>
            <Label>Module Name</Label>
            <Input
              value={moduleName}
              onChange={(e) => {
                setModuleName(e.target.value);
                setModuleNameTouched(true);
              }}
            />
          </div>
          <div>
            <Label>Scaffold Type</Label>
            <select
              value={scaffoldType}
              onChange={(e) => setScaffoldType(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select type</option>
              <option value="React UI Only">React UI Only</option>
              <option value="Node API Only">Node API Only</option>
              <option value="Node API + React UI">Node API + React UI</option>
            </select>
          </div>
        </Card>
      )}

      {isStep1Complete && isStep2Complete && isStep3Complete && (
        <Card className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">4. Preview & Export</h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <Input
              className="w-full md:w-96"
              placeholder="Enter Git Repository URL"
              value={gitRepo}
              onChange={(e) => setGitRepo(e.target.value)}
            />
            <Button onClick={downloadZip}>Download All</Button>
            <Button onClick={pushToGit}>Push to Git</Button>
          </div>
          <div>
            <Label>Preview File</Label>
            <select
              value={activeFile}
              onChange={(e) => setActiveFile(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {Object.keys(fileContents).map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          <Card className="p-4 whitespace-pre-wrap text-sm bg-black text-green-400 font-mono max-h-[500px] overflow-y-auto">
            {fileContents[activeFile] || "// No preview"}
          </Card>
        </Card>
      )}
    </div>
  );
}