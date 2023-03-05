import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Footer } from './components/Footer'
import { MenuNav } from './components/MenuNav'
import { HomePage } from './paghes/Home'

function App() {

  return (
          <main>
            <MenuNav />
            <HomePage />
            <Footer />
          </main>
  
  )
          
}
export default App
