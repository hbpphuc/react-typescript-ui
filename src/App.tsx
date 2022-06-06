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
import Dashboard from "./pages/dashboard/Dashboard";
import Device from "./pages/device/Device";
import Service from "./pages/service/Service";
import Report from "./pages/report/Report";
import Number from "./pages/number/Number";
import CreateDevice from "./pages/device/createdevice/CreateDevice";
import ListDevice from "./pages/device/listdevice/ListDevice";
import EditDevice from "./pages/device/editdevice/EditDevice";
import DetailDevice from "./pages/device/detaildevice/DetailDevice";
import ListService from "./pages/service/listservice/ListService";
import CreateService from "./pages/service/createservice/CreateService";
import DetailService from "./pages/service/detailservice/DetailService";
import EditService from "./pages/service/editservice/EditService";
import ListNumber from "./pages/number/listnumber/ListNumber";
import CreateNumber from "./pages/number/createnumber/CreateNumber";
import DetailNumber from "./pages/number/detailnumber/DetailNumber";
import Role from "./pages/system/role/Role";
import ListRole from "./pages/system/role/listrole/ListRole";
import CreateRole from "./pages/system/role/createrole/CreateRole";
import EditRole from "./pages/system/role/editrole/EditRole";
import Account from "./pages/system/account/Account";
import ListAccount from "./pages/system/account/listaccount/ListAccount";
import CreateAccount from "./pages/system/account/createaccount/CreateAccount";
import History from "./pages/system/history/History";
import ListHistory from "./pages/system/history/listaccount/ListHistory";

function App() {
  return (
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>

        <Routes>
          <Route path="/admin" element={<Admin />} >
          
            <Route path="infomation" element={<Infomation />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="device" element={<Device />} >
              <Route path="" element={<ListDevice />} />
              <Route path="create" element={<CreateDevice />} />
              <Route path="detail" element={<DetailDevice />} />
              <Route path="edit" element={<EditDevice />} />
            </Route>

            <Route path="service" element={<Service />} >
              <Route path="" element={<ListService />} />
              <Route path="create" element={<CreateService />} />
              <Route path="detail" element={<DetailService />} />
              <Route path="edit" element={<EditService />} />
            </Route>

            <Route path="number" element={<Number />} >
              <Route path="" element={<ListNumber/>} />
              <Route path="create" element={<CreateNumber/>} />
              <Route path="detail" element={<DetailNumber />} />
            </Route>

            <Route path="report" element={<Report />} />

            <Route path="role" element={<Role />} >
              <Route path="" element={<ListRole/>} />
              <Route path="create" element={<CreateRole/>} />
              <Route path="edit" element={<EditRole />} />
            </Route>

            <Route path="account" element={<Account />} >
              <Route path="" element={<ListAccount/>} />
              <Route path="create" element={<CreateAccount/>} />
              <Route path="edit" element={<ListAccount/>} />
            </Route>

            <Route path="history" element={<History />} >
              <Route path="" element={<ListHistory/>} />
            </Route>

          </Route>
        </Routes>

      </Router> 
  );
}

export default App;
