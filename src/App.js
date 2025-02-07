import NavBar from "./components/Navbar";
function App() {
  return (
    <div className="bg-white">
      <NavBar />

      <div className="h-96 bg-gray-100 dark:bg-gray-900">
        <div id="home" className="h-screen m-36 flex items-center bg-gray-100 z-10 justify-center dark:bg-gray-900">
          <h1 className="text-3xl">Home Section</h1>
        </div>

        <div id="skills" className="h-screen flex items-center justify-center dark:bg-gray-800">
          <h1 className="text-3xl">Skills Section</h1>
        </div>

        <div id="qualification" className="h-screen flex items-center justify-center dark:bg-gray-700">
          <h1 className="text-3xl">Qualification Section</h1>
        </div>

        <div id="services" className="h-screen flex items-center justify-center dark:bg-gray-700">
          <h1 className="text-3xl">Service Section</h1>
        </div>

        <div id="projects" className="h-screen flex items-center justify-center dark:bg-gray-600">
          <h1 className="text-3xl">Projects Section</h1>
        </div>

        <div id="contact" className="h-screen flex items-center justify-center dark:bg-gray-500">
          <h1 className="text-3xl">Contact Section</h1>
        </div>

        Hii
      </div>
    </div>
  );
}

export default App;


// :root {
//   --header-height: 3.5rem;

//   /*========== Colors ==========*/
//   /*Color mode HSL(hue, saturation, lightness)*/
//   --first-color: hsl(207, 65%, 65%);
//   --title-color: hsl(207, 4%, 16%);
//   --text-color: hsl(207, 4%, 28%);
//   --text-color-light: hsl(207, 4%, 56%);
//   --body-color: hsl(207, 4%, 99%);
//   --container-color: hsl(207, 4%, 95%);
// }  