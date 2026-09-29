import React, { useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import axios from 'axios';
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import { Link } from 'react-router-dom';

const Card = ({ title, id, getAll }) => {
    const [delModal, setDelModal] = useState(false)
    const [todoToDel, setTodoToDel] = useState(null)

    function handleDelModal(id) {
        setDelModal(true)
        setTodoToDel(id)
    }

    function cancelDel() {
        setDelModal(false)
        setTodoToDel(null)
    }

    async function confirmDel() {
        const api = await axios.delete(`http://localhost:8001/todo/delete/${todoToDel}`)
        console.log(api)
        setDelModal(false)
        setTodoToDel(null)
        toast.success(api.data.message)
        getAll()
    }

    return (
        <div className=' my-1 flex justify-center items-center gap-2 w-[25%] m-auto'
        >
            <div className='w-[70%] bg-rose-200 text-xl p-2'>{title}</div>
            <div className='w-[25%] p-2'>
               <Link to={`/update/${id}`}>
                <button className='text-xl p-2 bg-green-200 me-2'><LuNotebookPen /></button></Link>
                <button className='text-xl p-2 bg-red-300' onClick={() => handleDelModal(id)}><RiDeleteBin7Fill /></button>
                {delModal && <DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />}
            </div>
        </div>
    )
}

export default Card