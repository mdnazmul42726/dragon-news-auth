import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Layouts/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./providers/AuthProvider";
import NewsDtls from "./pages/NewsDtls";
import SecureRoute from "./Routes/SecureRoute";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children: [
      { loader: () => fetch('news.json'), path: "/", element: < Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/news/:id", element: <SecureRoute><NewsDtls /></SecureRoute> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);