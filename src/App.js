// import './App.css';
import BasicCard from './Components/system';
import NavScrollExample from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fifthpage from './Components/fifthpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingPage from './Components/settings';
// import Mainpage from './Components/Mainpage';
import Listview from './Components/Listview';
import Gridview from './Components/Gridview';
import SpaceCard from './Components/Spacecard';
// import CustomizedDialogs from './Components/Closecreatelist';
// import Folder from './Components/Closefolder';


function App() {
  return (
    <>
      {/* <Row>
        <Col md={12}>
          <NavbarFixed />
        </Col>
      </Row>
      < ResponsiveDrawer />
      <SwipeableTemporaryDrawer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listview />} />
          {/* <Route path="Listview" element={}></Route> */}
          <Route path="Gridview" element={<Gridview />}></Route>
          {/* <Route index element={<ResponsiveDrawer  />} ></Route>*/}
          {/* <Route path="*" element={<PersistentDrawerLeft/>}> </Route> */}
          <Route path="settings" element={<SettingPage />}></Route>
          <Route path="/" element={<NavScrollExample />} />
          <Route path="blogs" element={<Fifthpage />}></Route>
          <Route path="drawer" element={<BasicCard />}></Route>
          <Route path="spacecard" element={<SpaceCard />}></Route>
          {/* <Route path="Createlist" element={<CustomizedDialogs />}></Route> */}
          {/* <Route path="Createfolder" element={<Folder />}></Route> */}
          {/* <Route path="TaskStatus" element={<TaskStatus />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;