import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./ui/Home/Home";
import Yuklama, { loader as loaderYuklama } from "./features/yuklama/Yuklama";
import Kumakchi, { loader as loaderKumakchi } from "./features/kumakchi/Kumakchi";
import Boglovchi, { loader as loaderBoglovchi } from "./features/boglovchi/Boglovchi";
import Boglanish from "./features/boglanish/Boglanish";
import BizHaqimizda from "./features/biz-haqimizda/BizHaqimizda";
import DasturHaqida from "./features/dastur-haqida/DasturHaqida";
import AppLayOut from "./ui/AppLayOut";
import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/yuklama",
        element: <Yuklama />,
        loader: loaderYuklama,
      },
      {
        path: "/kumakchi",
        element: <Kumakchi />,
        loader: loaderKumakchi,
      },
      {
        path: "/boglovchi",
        element: <Boglovchi />,
        loader: loaderBoglovchi,
      },
      {
        path: "/boglanish",
        element: <Boglanish />,
      },
      {
        path: "/biz-haqimizda",
        element: <BizHaqimizda />,
      },
      {
        path: "/dastur-haqida",
        element: <DasturHaqida />,
      },
      {
        path: "/boglanish",
        element: <Boglanish />,
      },
    ],
  },
]);
export default function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
