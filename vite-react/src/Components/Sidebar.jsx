import React from "react";

export default function Sidebar(){
    const style ={
        color1 :"#F7542E",
        color2 : "#090F31",
    };

    return(
        <div className="sidebar-container">
            <h4 style={{ color: style.color2 }}>
                <span style={{ color: style.color1 }}>Dev</span>challenges.io
            </h4>

            <h3>Colors</h3>
            <h3>Typography</h3>
            <h3>Spaces</h3>
            <h3>Buttons</h3>
            <h3>Inputs</h3>
            <h3>Grid</h3>
        </div>
    );

}