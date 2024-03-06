import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./ui/Home/Home";
import Yuklama from "./features/yuklama/Yuklama";
import Kumakchi from "./features/kumakchi/Kumakchi";
import Boglovchi from "./features/boglovchi/Boglovchi";
import Boglanish from "./features/boglanish/Boglanish";
import BizHaqimizda from "./features/biz-haqimizda/BizHaqimizda";
import DasturHaqida from "./features/dastur-haqida/DasturHaqida";
import AppLayOut from "./ui/AppLayOut";
import Error from "./ui/Error";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="yuklama" element={<Yuklama />} errorElement={<Error />} />
            <Route path="kumakchi" element={<Kumakchi />} errorElement={<Error />} />
            <Route path="boglovchi" element={<Boglovchi />} errorElement={<Error />} />
            <Route path="biz-haqimizda" element={<BizHaqimizda />} />
            <Route path="dastur-haqida" element={<DasturHaqida />} />
            <Route path="boglanish" element={<Boglanish />} errorElement={<Error />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
