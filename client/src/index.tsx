import "reflect-metadata";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";
import "src/translations/i8n";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
