import { useSelector } from "react-redux";
import AlatSpin from "./components/ALATSpin/AlatSpin";
// import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import SpinForm from "./components/ALATSpinForm/SpinForm";

function App() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <>
      {!isAuth && <SpinForm />}
      {isAuth && <AlatSpin />}
    </>
  );
}

export default App;
