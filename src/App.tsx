import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/login/Login';
import VerifyEmail from './components/forgotpassword/VerifyEmail';
import NewPassword from './components/forgotpassword/NewPassword';
import Admin from "./pages/admin/Admin";
import Infomation from "./components/infomation/Infomation";
import Menubar from "./components/menubar/Menubar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const user = true;
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/infomation" element={<Infomation />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Router> 
  );
}

export default App;
