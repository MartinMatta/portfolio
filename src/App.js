import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40" >
      <section className="min-h-screen">
        <NavBar />
        <Home />
      </section>
      <section>
        <Services />
        <Experience />
      </section>
      <section className="py-10">
        <Portofolio />
      </section>
      <Contact />
    </div>
  );
}

export default App;
