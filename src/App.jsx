import { GlobalStyle } from "./styles/globalStyles.js";

import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar/>
      <Outlet/>
    </>
  );
}

export default App;
