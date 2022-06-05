import React from 'react';
import './App.scss';
import { About, Skills, Work, Profile, Header, Footer} from './container'
import { Navbar} from './components'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Profile />
        <Footer />
    </div>
   
  )
}

export default App;