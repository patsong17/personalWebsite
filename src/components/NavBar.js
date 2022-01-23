import React from 'react';
import { Link } from 'react-router-dom'

import {useState} from 'react';

function NavBar() {
    
    const navBarStyle = {
        display:'flex',
        // justifyContent:'center',
        // backgroundColor:'#24303b',
        width:'100%',
        paddingTop:'1%',
        paddingBottom:'1%',
        // borderBottom:"1px solid black"
    }

    const navBarItemStyle = {
        display:'inline-block',
        paddingLeft:'2%',
        paddingRight:'2%',
        fontSize:'22px',
        fontWeight:"bold",
    }

    const linkStyle ={ 
        textDecoration: 'none',
        color:'#093970',
    };

    return(
        <div style={navBarStyle}>
            <div style={navBarItemStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
            </div>
            <div style={navBarItemStyle}>
                <Link to="/about" style={linkStyle}>About</Link>
            </div>
            <div style={navBarItemStyle}>
                <Link to="/resume" style={linkStyle}>Resume</Link>
            </div>

        </div>
    )

}
export default NavBar;