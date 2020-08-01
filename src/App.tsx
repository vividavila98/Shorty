import React from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Link />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
