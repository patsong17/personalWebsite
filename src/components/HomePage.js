import React from 'react'

function HomePage(props){

    const homePageStyle = {

        textAlign:"center",
    }

    const titleNameStyle = {
        letterSpacing:"10px",
        fontSize:"60px",
        marginBottom:"0px",
    }

    const subTextStyle = {
        fontSize:"25px",
        topMargin:"0px"
    }

    return(
        <div style={homePageStyle}>
            <p style={titleNameStyle}>Patrick Song</p>
            <p style= {subTextStyle}> Software Engineer </p>
        </div>
    )

}
export default HomePage