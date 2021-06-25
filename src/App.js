import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
//import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container className="main">
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
