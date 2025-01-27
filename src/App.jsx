import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimeDetail from "./components/pages/AnimeDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/anime/:id" Component={AnimeDetail} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
