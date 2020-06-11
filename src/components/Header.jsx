import React from "react";
import Button from "./Button"
import Title from "./Header-styled"

export default function Header(props) {
    return (
        <div>
            <Title>Picture of the Day!</Title>
            <Button scream onClick={props.showPOTD}>Click for POTD!</Button>
        </div>
    )
   
}