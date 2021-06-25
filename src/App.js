import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Header from "./components/Header";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container className="main">
		  <Switch>
          <Route path="/" component={Home} exact />
		  <Route path="/quiz" component={Quiz} exact />
		  <Route path="/results" component={Results} exact />
          <Route component={NotFound} />
		  </Switch>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
