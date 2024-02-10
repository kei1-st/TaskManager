import { useState } from "react";

export default function Project({project}){

  const [task, setTask] = useState('');

  function addTask(){
    project.tasks.push(task);
    setTask('');
  }

  return (
    <div className='flex flex-col h-screen mt-20 mx-5'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-3xl font-extrabold text-stone-600'>{project.title}</h1>
        <button className='items-end text-stone-600'> Delete </button>
      </div>
      <p className='mt-3 text-stone-400'>{project.due}</p>
      <pre className='mt-3 text-stone-700'>{project.description}</pre>

      <hr className='h-1 my-6 rounded bg-stone-300'/>

      <h1 className='text-2xl font-extrabold text-stone-600 mb-4'>Tasks</h1>
      <div className='flex flex-row justify-between items-center'>
        <input type="text" className='bg-stone-200 rounded w-10/12' value={task} onChange={(e) => setTask(e.target.value)}/>
        <button className='text-stone-600' onClick={addTask}> Add Task </button>
      </div>
    </div>
  )
}