
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Search,
  Sparkles,
  Bot,
  Bug,
  Code,
  BookOpen,
  Cpu,
  LayoutDashboard,
  Layers,
  Database,
  BarChart
} from "lucide-react";

export default function SDLC_AI_Hub() {
  const user = {
    name: "Deepak",
    role: "Solution Architect",
    avatarUrl: "https://ui-avatars.com/api/?name=Deepak&background=0D8ABC&color=fff"
  };

  const tools = [
    { title: "User Story Creator", description: "Generate user stories and epics from business goals. Integrated to Rally.", icon: Bot, href: "/tools/user-story-creator" },
    { title: "Test Case Generator", description: "Create unit, integration, and End to end tests from stories or APIs.", icon: Bug, href: "/tools/test-case-generator" },
    { title: "Code Scaffold Generator", description: "Bootstrap code structure from framework and architecture inputs.", icon: Code, href: "/tools/code-scaffold-generator" },
    { title: "Knowledge Hub", description: "Q&A + embedded lessons for Development, Architecture and Operational Support", icon: BookOpen, href: "/tools/knowledge-hub" },
    { title: "Release Notes Composer", description: "Auto-create release summaries from commits and tickets for each releases.", icon: Cpu, href: "/tools/release-notes" },
    { title: "Incident Learning Companion", description: "Explore past incidents, RCAs, and suggested improvements. This helps with issue management team.", icon: LayoutDashboard, href: "/tools/incident-learning" },
    { title: "Architecture Designer", description: "Build component diagrams and data flows from specs for Architects", icon: Layers, href: "/tools/architecture-creator" },
    { title: "TDD Generator", description: "Generated the technical design document from Rally features and Git hub.", icon: Database, href: "/tools/analytics" },
    { title: "SDLC Analytics Agent", description: "Track team metrics like cycle time, bug density, test coverage. This also helps measure productivity.", icon: BarChart, href: "/tools/analytics" }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-1">Welcome back, {user.name}</h1>
            <p className="text-lg text-gray-600">
              Your personalized SDLC AI workspace — tailored for your role: <span className="font-medium text-black">{user.role}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon"><Bell className="w-5 h-5" /></Button>
            <Avatar>
              <AvatarImage src={user.avatarUrl} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="mb-6 max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <Input placeholder="Ask anything or search tools…" className="flex-1" />
            <Button variant="secondary">
              <Search className="w-4 h-4 mr-2" /> Search
            </Button>
          </div>
          <div className="mt-2 text-sm text-gray-500 text-center">
            Try: <em>"Generate test cases for payment workflow"</em> or <em>"Show my recent architecture drafts"</em>
          </div>
        </div>

        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4" />
            Context-aware suggestions enabled based on your recent projects.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow border border-gray-300">
              <CardContent className="p-5 flex flex-col items-start gap-3">
                <div className="flex items-center gap-3 text-blue-600">
                  <tool.icon className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{tool.description}</p>
                <Button className="mt-auto w-full" onClick={() => window.location.href = tool.href}>Open</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
