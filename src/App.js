import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CHANGE_LOGIN_STATUS } from "./redux/actions/actionType";
import { LoginPage, RegisterPage, HomePage } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isLoginPersist = localStorage.getItem("isLogin");
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (isLoginPersist === "true") {
        dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
      } else {
        dispatch({ type: CHANGE_LOGIN_STATUS, payload: false });
      }
    },
    // eslint-disable-next-line
    []
  );

  return (
    <Switch>
      <ProtectedRoute path="/home" redirectTo="/" exact>
        <HomePage />
      </ProtectedRoute>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default App;
