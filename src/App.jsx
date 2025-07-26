import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import {routes} from "./pages/routes.js";

function App() {
  return (
    <div className="app">
      <Navbar />
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
    </div>
  );
}

export default App;
