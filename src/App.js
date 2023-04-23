import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./Styles/App.css";

import "./Styles/sb-admin-2.min.css";
import Dashboard from "./Components/Dashboard";
import Userlist from "./Components/Lister";
import Login from "./Components/Login";
import Portal from "./Components/Portal";
import Createuser from "./Components/CreateUser";
import UserView from "./Components/ViewUser";
import UserEdit from "./Components/EditUser";
import { UserProvider } from "./Components/SetUsrContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userlist" element={<Userlist />} />
            <Route path="create-user" element={<Createuser />} />
            <Route path="user-view/:id" element={<UserView />} />
            <Route path="user-edit/:id" element={<UserEdit />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
