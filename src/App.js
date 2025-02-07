import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="min-h-screen font-ysabeau transition-all duration-300 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <main className="p-8 xl:w-[70%] xl:m-auto">
         <Profile/>
          <Skills/>
          <Qualification/>
          <Services/>
        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Projects</h1>
        </section>
          <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
