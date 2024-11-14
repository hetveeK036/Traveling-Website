import "react";
import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/header";
import Memories from "./Components/Memories/Memories";

const App = () => {
  return (
    <div className="main">
      <Nav />
      <Header />
      <Memories />
    </div>
  );
};

export default App;
