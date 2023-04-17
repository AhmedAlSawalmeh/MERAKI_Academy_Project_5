import "./App.css";
import Register from "./components/Register/Register";
import Err404 from "./components/Error/Err404";
import MapContainer from "./components/Map/Map";
import { Routes, Route } from "react-router-dom";
import School from "./components/School/School";
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import Conversation from "./components/conversation/Conversation";
import Admin from "./components/Admin/Admin";
import Users from "./components/Admin/Users";
import Schools from "./components/Admin/Schools";
import Basic from "./components/Admin/Basic";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MapContainer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/school/:id" element={<School />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages/:user_id/:connection_id" element={<Conversation />}>
          {/* <Route path=":connection_id" element={<Messages />} /> */}
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Basic />} />
          <Route path="users" element={<Users />} />
          <Route path="schools" element={<Schools />} />
        </Route>

        <Route path="*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;
