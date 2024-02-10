export default function Textarea({label, id, type, value, height, onChange}){
    return(
        <div className="flex flex-col">
            <label className='text-sm text-stone-600 text-bold' htmlFor={id}>{label}</label>
            <textarea className={`bg-stone-200 w-auto rounded ${height}`} type={type} id={id} onChange={(e)=>onChange(e)}/>
        </div>
    );
}