import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Container } from "./components/Container/Container";

const App = () => {
  return (
    <div className="App">
      <Container>
        <LoginPage />
      </Container>
    </div>
  );
};

export default App;
