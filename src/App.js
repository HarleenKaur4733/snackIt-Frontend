import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/common/Navbar";
import ErrorDisplay from "./components/common/ErrorDisplay";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ErrorDisplay /> */}
      <Footer />
    </div>
  );
}

export default App;
