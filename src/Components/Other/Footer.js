import React from "react";
import '../../App.css'

export default function Footer(){
    return(
        <div className='Footer'>
            &copy; {new Date().getFullYear()} Copyright: HyperNova Cars
        </div>
    )
}