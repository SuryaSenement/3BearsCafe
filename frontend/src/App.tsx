import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import CafeHome from "./pages/cafe/Cafehome";
import MenuPage from "./pages/cafe/MenuPage";
import KidsLanding from "./pages/kidz/KidsLanding";
import EventsPage from "./pages/kidz/EventDetailPage";
import WorkshopsPage from "./pages/kidz/WorkshopsPage";
import EventDetailPage from "./pages/kidz/EventDetailPage";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import { useAuth } from "./hooks/useAuth";

// Note: top-level common components are used inside `CafeHome` and other pages.

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Routes>
          {/* Public */}
          <Route path="/" element={<CafeHome />} />
          <Route path="/menu" element={<MenuPage />} />

          {/* support both /kids and /kidz (some links use one or the other) */}
          <Route path="/kids" element={<KidsLanding />} />
          <Route path="/kidz" element={<KidsLanding />} />

          {/* events & workshops - support both spellings */}
          <Route path="/kids/events" element={<EventsPage />} />
          <Route path="/kids/workshops" element={<WorkshopsPage />} />
          <Route path="/kidz/events" element={<EventsPage />} />
          <Route path="/kidz/workshops" element={<WorkshopsPage />} />

          <Route path="/event/:id" element={<EventDetailPage />} />

          {/* Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
