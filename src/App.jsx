import {useState} from 'react';

import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import RegisterProject from './components/RegisterProject.jsx';

function App() {
  const [ isCreatePageOpen, setCreatePageOpen ] = useState(false);
  const [ pages, setPages] = useState([]);

  console.log(pages);

  function handleClick(){
    setCreatePageOpen(true);
  }

  function handleSubmit(newPage) {
    setPages(prevPages => [...prevPages, newPage]);
    setCreatePageOpen(false); // 送信後に登録ページを閉じる
  }

  return (
    <>
      <div className='flex'>
        <SideBar onClick={handleClick}>
          <p className="text-white">YOUR PROJECTS</p>
        </SideBar>
        <div className="flex-grow">
          {!isCreatePageOpen && <NoProject onClick={handleClick}/>}
          {isCreatePageOpen && <RegisterProject onCancel={() => setCreatePageOpen(false)} onSubmit={(page)=>handleSubmit(page)}/>}
        </div>
      </div>
    </>
  );
}

export default App;
