export default function Input({label, id, type, value, height, onChange}){
    return(
        <div className="flex flex-col">
            <label className='text-sm text-stone-600 text-bold' htmlFor={id}>{label}</label>
            <input className={`bg-stone-200 w-auto rounded px-2 ${height}`} type={type} id={id} onChange={(e)=>onChange(e)}/>
        </div>
    );
}