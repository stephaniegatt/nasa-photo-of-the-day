import React from "react";
import Button from "./Button"
import Title from "./Header-styled"
import Div from "./Div"

export default function Header(props) {
    return (
        <Div color="#d9d9d9">
            <Title>Picture of the Day!</Title>
            <Button scream onClick={props.showPOTD}>Click for POTD!</Button>
        </Div>
    )
   
}