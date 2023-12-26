import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup1 from "./Components/signup_1";
import Signup2 from "./Components/signup_2";
import Login from "./Components/Login";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {
            <Route
              path='/Login'
              element={<Login />}
            />
          }
          <Route
            path='/signup_1'
            element={<Signup1 />}
          />
          {
            <Route
              path='/signup_2'
              element={<Signup2 />}
            />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
