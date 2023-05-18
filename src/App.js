import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";


import Home from './Pages/Home'
import Login from './Components/Logreg/Login'
import Register from './Components/Logreg/Register'
import Userupcomingevents from './Pages/Userupcomingevents'


// +++++++ pages imports +++++++++++++++
import Adminhome from './Pages/Adminhome'
import Userview from './Pages/Userupcomingevents'
import Booking from './Pages/Booking'
import Checkout from './Pages/Checkout'





const queryClient = new QueryClient()


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminhome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
