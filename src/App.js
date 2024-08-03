import SideBar from "./Components/SideBar";
import "./App.css";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
