import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./Components/PersonalInfo";
import MyCardsSection from "./Components/MyCardsSection";
import CardUser from "./Pages/CardUser";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/MyCardsSection" element={<MyCardsSection />} />
        <Route path="/carduser" element={<CardUser />} />
      </Routes>
    </Router>
  );
}

export default App;
