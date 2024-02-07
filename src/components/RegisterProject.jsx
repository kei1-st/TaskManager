import Input from './Input.jsx';

export default function RegisterProject(){
    return(
        <form action="/submit-form" method="post" className="flex flex-col justify-center items h-screen w-10/12 space-y-4 ml-8 mr-4">
            <div className='flex flex-row justify-end'>
                <input className='m-2 text-sm' type="button" value="Cancel"/>
                <input className='bg-black text-white rounded m-2 px-4 py-1 text-sm' type="submit" value="Save"/>
            </div>
            <Input label="TITLE" id="name" type="text"/>
            <Input label="DESCRIPTION" id="description" type="text" height="h-12"/>
            <Input label="DUE DATE" id="due" type="date"/>
        </form>
    );
}