import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ResumePage from './components/ResumePage'


function App(){

    const style = {
        // textAlign:'center',
        // backgroundColor:'#f1ddd6',
        // backgroundColor:'#3F5263',
        backgroundColor:"#eedad1",
        height:'100vh',
        fontFamily:'Avant Garde Gothic ITC',
        color:'#093970',


    }

    return(
        <div style={style}>
            <BrowserRouter>
                <NavBar/>   
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                    <Route exact path="/resume" element={<ResumePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App