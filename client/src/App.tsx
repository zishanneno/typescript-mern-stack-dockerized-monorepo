import React from "react";
import Container from "typedi";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AppRoutes } from "src/common/routes";
import Loader from "src/components/Loader";

const App = (props: any) => {
  const routesInstance = Container.get(AppRoutes);

  const { user: currentUser } = useSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          {routesInstance.getRoutes(currentUser ? true : false).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route
            index
            element={
              currentUser ? (
                <Navigate replace to="/home" />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
