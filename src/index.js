import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "*",
    loader: async () => {
      return redirect("/user/12");
    },
  },
  {
    path: "/user/:id",
    element: <App />,
    loader: async ({ params }) => {
      const result = (
        await Promise.all([
          fetch(`http://localhost:3001/user/${params.id}`),
          fetch(`http://localhost:3001/user/${params.id}/activity`),
          fetch(`http://localhost:3001/user/${params.id}/average-sessions`),
          fetch(`http://localhost:3001/user/${params.id}/performance`),
        ])
      ).map((r) => r.json());

      const [user, activity, average, performance] = await Promise.all(result);
      return { user, activity, average, performance };
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
