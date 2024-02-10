import {useState} from 'react';

import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import RegisterProject from './components/RegisterProject.jsx';
import Project from './components/Project.jsx';

function App() {
  const [ isCreatePageOpen, setCreatePageOpen ] = useState(false);
  const [ isProjectPageOpen, setProjectPageOpen ] = useState('');

  const [ projects, setProjects] = useState([]);

  function handleClickCreate(){
    setProjectPageOpen('');
    setCreatePageOpen(true);
  }

  function handleClickProject(uuid){
    setCreatePageOpen(false);
    setProjectPageOpen(uuid);
  }

  function handleSubmit(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject]);
    setCreatePageOpen(false); // 送信後に登録ページを閉じる
  }

  return (
    <>
      <div className='flex'>
        <SideBar onClickCreate={handleClickCreate} onClickProject={handleClickProject} projects={projects}>
          <p className="text-white">YOUR PROJECTS</p>
        </SideBar>
        <div className="flex-grow">
          {!isCreatePageOpen && (isProjectPageOpen == '') && <NoProject onClick={handleClickCreate}/>}
          {isCreatePageOpen && (isProjectPageOpen == '') && <RegisterProject onCancel={() => setCreatePageOpen(false)} onSave={(project)=>handleSubmit(project)}/>}
          {!isCreatePageOpen && (isProjectPageOpen != '') && <Project project={projects.find(project => project.id === isProjectPageOpen)}/>}
        </div>
      </div>
    </>
  );
}

export default App;
