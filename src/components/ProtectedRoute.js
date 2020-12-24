import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const isLogin = useSelector((store) => store.user.isLogin);
  return (
    <Route {...props}>
      {isLogin ? (
        props.children
      ) : (
        <Redirect to={{ pathname: props.redirectTo }} />
      )}
    </Route>
  );
};

export default ProtectedRoute;
