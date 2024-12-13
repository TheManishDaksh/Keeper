
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {

  return (
    <div className='bg-slate-200 '>
      <header>
      <Header/>
      </header>
   
      <main className='min-h-screen bg-slate-200'>
        <Hero />
      </main>

      <footer>
      <Footer/>
      </footer>
      
    </div>
  )
}

export default App
