export default function Sidebar({children, onClickCreate, onClickProject, projects}){
  return (
    <div className="bg-black mt-16 rounded-tr-lg w-48 flex flex-col items-start">
      <h1 className="mt-16 ml-4">{children}</h1>
      <button className="text-stone-400 bg-stone-700 px-4 py-2 rounded mt-10 text-xs ml-4 mb-6" onClick={onClickCreate}>
        + Add Project
      </button>
      {projects.map(project => (
      <button key={project.id} className="text-stone-300 text-left px-4 w-10/12 mt-2 ml-4 hover:bg-stone-900" onClick={()=>onClickProject(project.id)}>
        {project.title}
      </button>))}
    </div>
  );
};
