export default function Input({label, id, type, height}){
    return(
        <div className="flex flex-col">
            <label className='text-sm text-stone-600 text-bold' for={id}>{label}</label>
            <input className={`bg-stone-200 w-auto rounded ${height}`} type={type} id={id}/>
        </div>
    );
}