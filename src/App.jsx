import {useState} from 'react';

import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import RegisterProject from './components/RegisterProject.jsx';

function App() {
  const [ isCreatePageOpen, setCreatePageOpen ] = useState(false);

  function handleClick(){
    setCreatePageOpen(true);
  }

  return (
    <>
      <div className='flex'>
        <SideBar onClick={handleClick}>
          <p className="text-white">YOUR PROJECTS</p>
        </SideBar>
        <div className="flex-grow">
          {isCreatePageOpen && <NoProject onClick={handleClick}/>}
          {!isCreatePageOpen && <RegisterProject/>}
        </div>
      </div>
    </>
  );
}

export default App;
