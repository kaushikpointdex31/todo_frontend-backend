import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import toast from 'react-hot-toast'

const Home = () => {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")
    const [flag, setFlag] = useState(false)

    async function getAll() {
        const api = await axios.get("http://localhost:8001/todo/getAll")
        setTodo(api.data.data)
        console.log(api)
    }

    async function addTodo() {
        try {
            const data = {
                title: input
            }

            setFlag(false)

            const api = await axios.post(
                "http://localhost:8001/todo/create",
                data
            )

            if (!api.data.success) {
                throw new Error(api.data.message)
            }

            toast.success(api.data.message)
            setInput("")
            setFlag(true)

        } catch (error) {
            toast.error("Kindly enter atleast 3 Characters")
            setFlag(true)
        }
    }


    useEffect(() => {
        getAll()
    }, [flag])

    return (
        <>
            <Header />
            <div className='text-center my-10'>
                <input className='p-3 rounded w-64 bg-gray-200 me-2' type="text" value={input} placeholder='enter task'
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") addTodo() }} />
                <button className='p-2 bg-green-500 text-xl text-white rounded' onClick={addTodo}>Add</button>
            </div>
            <MainSection todo={todo} getAll={getAll} />
            <Footer />
        </>
    )
}

export default Home