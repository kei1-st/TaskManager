export default function NoProject({onClick}) {
  return (
    <div className="flex flex-col items-center mt-40 mx-5 h-screen space-y-4">
      <img className="w-20 h-20" src="./public/logo.png" alt="Icon Image" />
      <h3 className="font-gothic text-2xl font-bold text-stone-600">
        No Project Selected
      </h3>
      <p className="text-stone-400 text-large text-bold">
        Select a project in the left sidebar to get started.
      </p>
      <div>
        <button className="rounded text-stone-300 bg-stone-700 hover:text-stone-100 hover:bg-stone-600 px-4 py-2 mt-10" onClick={onClick}>
          Create new project
        </button>
      </div>
    </div>
  );
}
