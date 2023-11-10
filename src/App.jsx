import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import appStore from "./Store/appStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
