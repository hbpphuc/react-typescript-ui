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

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router> 
  );
}

export default App;
