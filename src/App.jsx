
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import {Outlet} from "react-router-dom"
import Hero from './Components/Hero'

function App() {

  return (
    <div >
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
