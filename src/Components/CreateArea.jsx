import React, { useState } from 'react'

function CreateArea(props) {
const [note, setNote] = useState({
    title : "",
    content : ""
})
function handleChange(event){
    const {name, value} = event.target
    setNote((prev)=>{
        return{
            ...prev,
            [name] : value
        }
    })
}
function addbtn(event){
    props.onAdd(note)
    setNote({
        title : "",
        content : ""
    })
    event.preventDefault();
}

  return (
    <div>
        <form>
            <input name='title' 
            placeholder='Title' 
            onChange={handleChange}
            value={note.title}
            />
            <textarea name="content" placeholder='Write your COntent' 
            rows= "3"
            value={note.content}
            onChange={handleChange}
            />
            <button onClick={addbtn}>Add</button>
        </form>
    </div>
  )
}

export default CreateArea