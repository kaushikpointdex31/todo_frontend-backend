import React from 'react'
import Card from './Card'


const MainSection = ({ todo, getAll }) => {
    return (
        <div>
            {
                todo.map((val) =><Card key={val._id} title={val.title}
                 id={val._id} getAll={getAll}/>)
            }
        </div>
    )
}

export default MainSection