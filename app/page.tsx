import FrontPage from "./component/frontPage";
import Header from "./component/header";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <FrontPage />
      <Footer />
    </div>
  );
}
