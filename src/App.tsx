import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Loader from "../components/Loader";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
