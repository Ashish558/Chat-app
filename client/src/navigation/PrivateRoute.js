import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute(Component) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Route
      path="/create"
      element={
        <RequireAuth isAuthenticated={isLoggedIn}>
          <Component />
        </RequireAuth>
      }
    />
  );
}

export function RequireAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/" />;
}
