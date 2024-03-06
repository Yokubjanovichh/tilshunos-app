import Header from "./Header/Header";
import Footer from "./Footer/FooterBar";
import Loading from "./spinner";
import { Outlet, useLocation } from "react-router-dom";

export default function AppLayOut() {
  const location = useLocation();
  const isLoading = location.state === "loading";
  return (
    <div>
      {isLoading && <Loading />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
