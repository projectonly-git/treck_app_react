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
import Profile from './Pages/Profile'





const queryClient = new QueryClient()


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/booking/:treckid" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
