import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Link />
    </Provider>
  );
}

export default App;
