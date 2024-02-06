export default function Sidebar({children}){
  return (
    <div className="left-0 top-0 bottom-0 bg-black mt-16 rounded-tr-lg w-48 flex flex-col items-start">
      <div className="mt-16 ml-4">{children}</div>
      <button className="text-stone-400 bg-stone-700 px-4 py-2 rounded mt-10 text-xs ml-4">
        + Add Project
      </button>
    </div>
  );
};
