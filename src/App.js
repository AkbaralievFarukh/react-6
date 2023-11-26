import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/search' element={ <SearchPage /> } />
      </Routes>
    </>
  );
}

export default App;
