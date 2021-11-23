import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Content from "./component/Content";
import FeaturedWriters from "./component/FeaturedWriters";

import "./component/Style.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <FeaturedWriters />
    </>
  );
}

export default App;
