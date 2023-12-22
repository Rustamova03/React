import "./app.css";
import Button from "./components/button";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HomePage from "./pages/home-page";

export function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
