import { useState } from 'react';

import Input from './Input.jsx';

export default function RegisterProject({onCancel, onSubmit}){
    const [data, setData] = useState({title: '' , description: '', due: ''});

    const handleChange = (id, value) => {
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleCancel = () => {
        setData({title: '' , description: '', due: ''});
        onCancel();
    };

    console.log(data);

    return(
        <form className="flex flex-col justify-center items h-screen w-10/12 space-y-4 ml-8 mr-4">
            <div className='flex flex-row justify-end'>
                <button className='m-2 text-sm' onClick={handleCancel}> Cancel </button>
                <button className='bg-black text-white rounded m-2 px-4 py-2 text-sm' onClick={() => onSubmit(data)}> Submit </button>
            </div>
            <Input label="TITLE" id="title" type="text" value={data.title} onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <Input label="DESCRIPTION" id="description" type="text" value={data.description} height="h-12" onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <Input label="DUE DATE" id="due" type="date" value={data.due} onChange={(e) => handleChange(e.target.id, e.target.value)}/>
        </form>
    );
}