export default function Project({project}){
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.due}</p>
      <p>{project.description}</p>
    </div>
  )
}