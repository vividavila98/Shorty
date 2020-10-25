import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Header />
      <Link />
      <Boost />
      <Footer />
    </Provider>
  );
}

export default App;
