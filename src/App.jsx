import { useState } from "react";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductPage from "./Components/ProductPage";
import appStore from "./Store/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <ProductPage />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
