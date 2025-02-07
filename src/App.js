import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen font-ysabeau transition-all duration-300 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <main className="p-8">
        <section id="profile" className="h-screen flex items-center justify-center">
          <Profile/>
        </section>
        <section id="skills" className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Skills</h1>
        </section>
        <section id="qualification" className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Qualification</h1>
        </section>
        <section id="services" className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Services</h1>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Projects</h1>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Contact</h1>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
