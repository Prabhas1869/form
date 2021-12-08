import "./App.css";
import SignUp from "./Components/Pages/Sign-up";
import LogIn from "./Components/Pages/Log_in";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Pages/Error";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
