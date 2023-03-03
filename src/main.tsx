import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./assets/styles/index.scss";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.VITE_BASE}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
