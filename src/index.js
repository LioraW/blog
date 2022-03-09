import React from 'react'
import ReactDOM from 'react-dom'

import AboutMe from './containers/AboutMe'
import Home from './containers/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar  from './components/NavBar'
import './containers/App.css'

const AppContainer = () => {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar style={{ marginBottom: '10px' }}/>
          <Routes>
            <Route element={<Home/>} exact path='/'/>
            <Route element={<AboutMe/>} exact path='/aboutme/*'/>
          </Routes>
        </BrowserRouter>       
      </div>
    )
}
ReactDOM.render(<AppContainer/>, document.querySelector('#root'))

