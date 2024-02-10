import {useState} from 'react';

import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import RegisterProject from './components/RegisterProject.jsx';

function App() {
  const [ isCreatePageOpen, setCreatePageOpen ] = useState(false);
  const [ projects, setProjects] = useState([]);

  function handleClickCreate(){
    setCreatePageOpen(true);
  }

  function handleSubmit(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject]);
    setCreatePageOpen(false); // 送信後に登録ページを閉じる
  }

  return (
    <>
      <div className='flex'>
        <SideBar onClick={handleClickCreate} projects={projects}>
          <p className="text-white">YOUR PROJECTS</p>
        </SideBar>
        <div className="flex-grow">
          {!isCreatePageOpen && <NoProject onClick={handleClickCreate}/>}
          {isCreatePageOpen && <RegisterProject onCancel={() => setCreatePageOpen(false)} onSave={(project)=>handleSubmit(project)}/>}
        </div>
      </div>
    </>
  );
}

export default App;
