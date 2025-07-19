import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

// "homepage" : "https://waghpavan.github.io/portfolio/",
function App() {
  return (
    <div className="min-h-screen font-ysabeau transition-all duration-300 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <main className="p-8 xl:w-[70%] xl:m-auto">
         <Profile/>
          <Skills/>
          <Qualification/>
          <Services/>
          <Projects/>
          <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
