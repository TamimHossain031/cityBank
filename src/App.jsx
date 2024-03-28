import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Page from './components/Login/Page';
import HomePage from './components/HomePage/HomePage'
import Payment from "./components/Payment/Payment";
function App() {
  return (
    <section className="mx-auto max-w-[982px] ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path='/Pay' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
