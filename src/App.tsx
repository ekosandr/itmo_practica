// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { DetailPage } from "./pages/Detail/Detail";
import { MainPage } from "./pages/Main/Main";
import { Layout } from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout title="Главная страница">
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/:id",
    element: (
      <Layout title="Детальная страница">
        <DetailPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
