import { Routes, Route } from "react-router-dom";
import SDLC_AI_Hub from "./pages/SDLC_AI_Hub";
import UserStoryCreator from "./pages/UserStoryCreator";
import SidebarLayout from './layout/SidebarLayout';
import TestCaseGenerator from './pages/TestCaseGenerator';
import ArchitectureDesigner from './pages/ArchitectureDesigner';
import ReleaseNotes from './pages/ReleaseNotes';
import IncidentCompanion from './pages/IncidentCompanion';
import AnalyticsAgent from './pages/AnalyticsAgent';
import KnowledgeHub from './pages/KnowledgeHub';
import CodeScaffoldGenerator from './pages/CodeScaffoldGenerator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SDLC_AI_Hub />} />
      <Route path="/tools/user-story-creator" element={<UserStoryCreator />} />
      <Route path="/tools/test-case-generator" element={<TestCaseGenerator />} />
      <Route path="/tools/architecture-creator" element={<ArchitectureDesigner />} />
      <Route path="/tools/release-notes" element={<ReleaseNotes />} />
      <Route path="/tools/incident-learning" element={<IncidentCompanion />} />
      <Route path="/tools/analytics" element={<AnalyticsAgent />} />
      <Route path="/tools/knowledge-hub" element={<KnowledgeHub />} />      
      <Route path="/tools/code-scaffold-generator" element={<CodeScaffoldGenerator />} />
    </Routes>
  );
}

export default App;

