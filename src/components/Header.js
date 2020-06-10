import React from "react";

export default function Header(props) {
    return (
        <div>
            <h1>Picture of the Day!</h1>
            <button onClick={props.showPOTD}>Click for POTD!</button>
        </div>
    )
   
}