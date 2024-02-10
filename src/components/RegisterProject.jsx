import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';

export default function RegisterProject({onCancel, onSave}){
    const [data, setData] = useState({id: null, title: '' , description: '', due: ''});

    const handleChange = (id, value) => {
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleCancel = () => {
        setData({id: null, title: '' , description: '', due: ''});
        onCancel();
    };

    const handleClickSave = () => {
        data.id = uuidv4();
        onSave(data);
        setData({id: null, title: '' , description: '', due: ''});
    }

    console.log(data);

    return(
        <form className="flex flex-col justify-center items h-screen w-10/12 space-y-4 ml-8 mr-4">
            <div className='flex flex-row justify-end'>
                <button className='m-2 text-sm' onClick={handleCancel}> Cancel </button>
                <button className='bg-black text-white rounded m-2 px-4 py-2 text-sm' onClick={handleClickSave}> Save </button>
            </div>
            <Input label="TITLE" id="title" type="text" value={data.title} onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <Textarea label="DESCRIPTION" id="description" type="text" value={data.description} height="h-12" onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <Input label="DUE DATE" id="due" type="date" value={data.due} onChange={(e) => handleChange(e.target.id, e.target.value)}/>
        </form>
    );
}