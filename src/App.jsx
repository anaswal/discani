import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;
