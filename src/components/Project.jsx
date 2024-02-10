export default function Project({project}){
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
        <input className='my-4' type="text" className='bg-stone-200 rounded w-10/12'/>
        <button className='text-stone-600'> Add Task </button>
      </div>
      {/*<TaskList tasks={project.tasks}/>*/}
    </div>
  )
}