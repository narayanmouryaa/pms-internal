import BasicCard from './Components/system';
// import NavScrollExample from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingPage from './Components/settings';
import Listview from './Components/Listview';
import Gridview from './Components/Gridview';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="Listview" element={<Listview />} />
          <Route path="ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="Gridview" element={<Gridview />}></Route>
          <Route path="settings" element={<SettingPage />}></Route>
          <Route path="drawer" element={<BasicCard />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;