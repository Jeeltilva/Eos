import React, { useReducer } from 'react'
import { Router } from '@reach/router'
import { iconsReducer, eosIconsState } from './utils/EosIcons.store'
import '../node_modules/eos-icons/dist/extended/css/eos-icons-extended.css'
import './assets/scss/index.scss'


/* Pages */
import Home from './pages/Home'
import Cheatsheet from './pages/Cheatsheet'
import Docs from './pages/Docs'

/* Componets */
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import AppContext from './utils/AppContext'

const App = () => {
  const [state, dispatch] = useReducer(iconsReducer, eosIconsState)
  console.log('MAIN_BIG_STATE: ', state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Navigation />
        <div className='app-container'>
          <Router primary={false}>
            <Home path='/' />
            <Cheatsheet path='/cheatsheet' />
            <Docs path='/docs' />
            <ThankYou path='/thankyou' />
          </Router>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
