
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Note from './Components/Note'
import CreateArea from "./Components/CreateArea"
import { useState } from 'react'

function App() {
 const [notes, setNote] = useState([])

 function addNote(newNote){
  setNote((prev)=>{
    return[...prev, newNote]
  })
 }

 function deleteNote(id){
  setNote((prev)=>{
    return prev.filter((noteItem, index)=>{
      return id !== index
    })
  })
 }
 
 return (
  <div>
    <Header />
    <CreateArea onAdd={addNote} />
    {notes.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      );
    })}
    <Footer />
  </div>
);
}
export default App
