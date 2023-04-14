import "./App.css";
import Layout from "./components/Layout";
import { AllPokemon, Home } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/all' element={<AllPokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
