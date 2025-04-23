import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function SimpleStoryCreator() {
  const [businessGoal, setBusinessGoal] = useState("");
  const [storyData, setStoryData] = useState(null);

  const handleGenerate = () => {
    const generated = {
      title: "Email-Based Password Reset",
      story: "As a user, I want to reset my password using my registered email so that I can regain account access.",
      criteria: `- Given I am on the login page\n- When I click 'Forgot Password' and enter a valid email\n- Then I should receive a reset link`,
      points: "3",
      done: `- API endpoint created\n- Email template tested\n- UI validated\n- QA approved`,
      tasks: [
        { name: "Design reset UI", description: "Develop responsive UI components using React for the password reset page, adhering to WCAG 2.1 accessibility standards. Include form validation logic, ARIA labels for screen readers, and responsive styling using Tailwind. Ensure error and success states are visually distinct.", owner: "UI/UX Designer", state: "Defined", estimate: 4, toDo: 4, actuals: 0, blocked: false, blockerReason: "", notes: "Use Figma handoff specifications. Implement input masking for email. Ensure keyboard navigation is supported." },
        { name: "Develop password reset screen for web", description: "Implement the password reset screen in the React-based web application. Use component-based architecture and hook form validation. Ensure seamless interaction with the backend reset API.", owner: "Frontend Dev", state: "Defined", estimate: 4, toDo: 4, actuals: 0, blocked: false, blockerReason: "", notes: "Use existing UI components from shared design system. Test UI with screen readers and keyboard navigation." },
        { name: "Implement password reset feature in native app", description: "Build password reset flow in the native mobile app using React Native. Ensure consistent UX with the web version. Handle navigation and deep linking from reset email.", owner: "Mobile Dev", state: "Defined", estimate: 5, toDo: 5, actuals: 0, blocked: false, blockerReason: "", notes: "Handle iOS and Android edge cases. Test on device and simulator. Leverage mobile-specific toast and spinner components." },
        { name: "Build backend reset endpoint", description: "Create secure RESTful API in Node.js using Express to initiate password resets. Implement JWT-based token generation with expiration and secure email hashing. Log all reset attempts with timestamp and IP address for audit purposes.", owner: "Backend Dev", state: "Defined", estimate: 6, toDo: 6, actuals: 0, blocked: false, blockerReason: "", notes: "Ensure 409 response for duplicate submissions. Use bcrypt for email verification hash. Add API documentation in Swagger." },
        { name: "Integrate with email service", description: "Configure SendGrid transactional email with custom dynamic templates. Handle API key rotation, connection timeout retries, and payload encryption using AES256. Validate email format server-side and test delivery in multiple clients.", owner: "Integration Dev", state: "Defined", estimate: 5, toDo: 5, actuals: 0, blocked: false, blockerReason: "", notes: "Use sandbox for testing, verify DKIM/SPF alignment, and add tracking pixel for delivery analytics." },
        { name: "Write tests", description: "Write unit tests using Jest for service layers, and integration tests with Supertest covering all API routes. Include mocks for SendGrid API. Validate 400/401/404/500 response handling and happy path completion.", owner: "QA Engineer", state: "Defined", estimate: 3, toDo: 3, actuals: 0, blocked: false, blockerReason: "", notes: "Run test coverage reports. Validate regex used in email input. Include CI pipeline test steps using GitHub Actions." },
        { name: "QA verification", description: "Conduct exploratory testing of the full reset process across Chrome, Firefox, Safari, and Edge. Validate token expiry, malformed URLs, and confirm that rate-limiting kicks in after N attempts. Ensure compliance with GDPR logging.", owner: "QA Engineer", state: "Defined", estimate: 2, toDo: 2, actuals: 0, blocked: false, blockerReason: "", notes: "Document test cases in TestRail. Use NVDA for screen reader audit. Log defects in Rally with screenshots." }
      ],
      tags: "authentication, password-reset, security",
      priority: "P2",
      persona: "End User",
      value: "Reduces support tickets and improves user retention.",
      tests: `1. Enter valid email → get link\n2. Enter invalid email → error message`,
      feature: "User Account Management"
    };
    setStoryData(generated);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Create New User Story</h1>
          <Card className="p-4 space-y-4">
            <div>
              <Label>Theme</Label>
<select className="border rounded px-2 py-1 w-full">
  <option value="">Select a theme</option>
  <option value="digital_transformation">Digital Transformation</option>
</select>
            </div>
            <div>
              <Label>Program</Label>
<select className="border rounded px-2 py-1 w-full">
  <option value="">Select a program</option>
  <option value="channel_tooling">Channel Tooling</option>
  <option value="user_experience">User Experience</option>
  <option value="security">Security</option>
</select>
            </div>
            <div>
              <Label>Deliverable</Label>
<select className="border rounded px-2 py-1 w-full">
  <option value="">Select a deliverable</option>
  <option value="member_portal">Member Portal Redesign</option>
  <option value="id_card">Digital ID Card Delivery</option>
  <option value="claims_view">Claims Summary UI Overhaul</option>
  <option value="telehealth">Telehealth Integration</option>
</select>
            </div>
            <div>
              <Label>Business Goal</Label>
              <Textarea
                placeholder="Describe the business goal or problem statement..."
                rows={4}
                value={businessGoal}
                onChange={(e) => setBusinessGoal(e.target.value)}
              />
            </div>
            <Button className="mt-4 w-full" onClick={handleGenerate}>
              Generate Story with AI
            </Button>
          </Card>
        </div>

        {storyData && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Preview: UI or API Flow</h2>
            <Card className="p-4 text-sm text-gray-600">
              <p><strong>UI View:</strong></p>
              <div className="border border-dashed rounded-md p-2 bg-white shadow-sm mb-2">
                <div className="text-center text-xs font-medium">Forgot Password Screen</div>
                <div className="flex flex-col items-center space-y-1 mt-2">
                  <input type="text" placeholder="Email" className="border px-2 py-1 text-xs rounded w-3/4" disabled />
                  <button className="bg-blue-500 text-white text-xs px-4 py-1 rounded shadow">Submit</button>
                  <span className="text-xs text-green-600">Toast: Reset link sent</span>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {storyData && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">AI-Generated Story</h2>
          <Card className="p-6 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div><Label>Story Title</Label><Input value={storyData.title} readOnly /></div>
                <div><Label>User Story</Label><Textarea value={storyData.story} readOnly rows={3} /></div>
                <div><Label>Acceptance Criteria</Label><Textarea value={storyData.criteria} readOnly rows={4} /></div>
                <div><Label>Story Points</Label><Input value={storyData.points} readOnly /></div>
                <div><Label>Definition of Done</Label><Textarea value={storyData.done} readOnly rows={4} /></div>
              </div>
              <div className="space-y-4">
                <div><Label>Tags</Label><Input value={storyData.tags} readOnly /></div>
                <div><Label>Priority</Label><Input value={storyData.priority} readOnly /></div>
                <div><Label>Persona</Label><Input value={storyData.persona} readOnly /></div>
                <div><Label>Business Value</Label><Textarea value={storyData.value} readOnly rows={3} /></div>
                <div><Label>Suggested Test Cases</Label><Textarea value={storyData.tests} readOnly rows={4} /></div>
                <div><Label>Linked Feature</Label><Input value={storyData.feature} readOnly /></div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="mt-4">Push User Story to Rally</Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-4">Task Breakdown (Rally Fields)</h3>
              {storyData.tasks.map((task, idx) => (
                <Card key={idx} className="p-4 bg-gray-50 border space-y-2">
                  <div className="flex items-center space-x-2">
  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
  <div className="text-base font-semibold">{task.name}</div>
</div>
<div className="text-sm text-gray-600 italic border-l-2 border-blue-300 pl-3 ml-1">{task.description}</div>
                  <div className="text-sm text-gray-600">Owner: {task.owner}</div>
                  <div className="text-xs text-gray-600">State: {task.state}</div>
                  <div className="text-xs text-gray-600">Estimate: {task.estimate}h</div>
                  <div className="text-xs text-gray-600">To Do: {task.toDo}h</div>
                  <div className="text-xs text-gray-600">Actuals: {task.actuals}h</div>
                  {task.blocked && (
                    <div className="text-xs text-red-500">Blocked: Yes - {task.blockerReason}</div>
                  )}
                  <div className="bg-yellow-50 border-l-4 border-yellow-300 text-sm text-gray-700 p-3 mt-2">{task.notes}</div>
                  <div className="flex justify-end">
                    <Button size="sm" variant="default" className="bg-indigo-600 text-white hover:bg-indigo-700">Push Task to Rally</Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
