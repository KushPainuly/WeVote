import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Component/Home";
import VoteForm from "./Component/VoteForm";
import About from "./Component/About";
import Howitworks from "./Component/Howitworks";
import VoteForm1 from "./Component/VoteForm1";
import VoteForm3 from "./Component/VoteForm3";
import Helpline from "./Component/Helpline";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import Search from "./Component/Search";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/voteform" element={<VoteForm />} />
        <Route path="/voteform1" element={<VoteForm1 />} />
        <Route path="/voteform3" element={<VoteForm3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
