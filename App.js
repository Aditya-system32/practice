import ReactDOM from "react-dom/client";
import "/index.css";
import Headers from "./src/Headers";
import Footer from "./src/Footer";
import MainBody from "./src/MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Headers />
      <MainBody />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
