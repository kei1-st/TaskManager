import { useState } from "react";

export default function Project({project, onDelete, onAddTask, onClearTask}){

  const [taskContent, setTaskContent] = useState('');

  function addTask() {
    onAddTask(project, taskContent);
    setTaskContent(''); // タスク追加後は入力フィールドをクリア
  }

  function DeleteProject(){
    onDelete(project.id);
  }

  return (
    <div className='flex flex-col h-screen mt-20 mx-5'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-3xl font-extrabold text-stone-600'>{project.title}</h1>
        <button className='items-end text-stone-600 mr-10 hover:text-red-600' onClick={DeleteProject}> Delete </button>
      </div>
      <p className='mt-3 text-stone-400'>{project.due}</p>
      <pre className='mt-3 text-stone-700'>{project.description}</pre>

      <hr className='h-1 my-6 rounded bg-stone-300'/>

      <h1 className='text-2xl font-extrabold text-stone-600 mb-4'>Tasks</h1>
      <div className='flex flex-row justify-between items-center'>
        <input type="text" className='bg-stone-200 rounded w-10/12 px-2' value={taskContent} onChange={(e) => setTaskContent(e.target.value)}/>
        <button className='text-stone-600 mr-8 hover:text-stone-800' onClick={addTask}> Add Task </button>
      </div>
      {project.tasks.length > 0 && <div className='flex flex-col mt-4 bg-stone-100 py-4 space-y-6'>
        {project.tasks.map(task => {return(
          <div key={task.id} className='flex flex-row justify-between mx-3'>
            <p>{task.content}</p>
            <button className='mr-8 hover:text-red-600' onClick={() => onClearTask(project, task.id)}>Clear</button>
          </div>
          );})}
      </div>}
    </div>
  )
}