import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className='flex'>
        <SideBar>
          <p className="text-white">YOUR PROJECTS</p>
        </SideBar>
        <div className="flex-grow">
          <NoProject />
        </div>
      </div>
    </>
  );
}

export default App;
