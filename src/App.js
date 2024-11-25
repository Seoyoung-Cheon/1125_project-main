import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Event_schedule from "./components/Event_schedule";
import Header from "./components/Header";
import Search from "./components/Search";
import GoogleMapContainer from "../src/components/GoogleMapContainer";
import Sidebar from "../src/components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Event_schedule" element={<Event_schedule />} />
        </Routes>

        {/* <Footer /> */}
        <Sidebar />
        <GoogleMapContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
