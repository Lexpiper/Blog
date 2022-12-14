import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import './index.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="Signup" element={<Signup/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
