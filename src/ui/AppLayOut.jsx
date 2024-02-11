import Header from "./Header/Header";
import Footer from "./Footer/FooterBar";
import Loading from "./spinner";
import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayOut() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
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
