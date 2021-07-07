import React, { useEffect } from "react";
import Image from "./Image"
import H2 from "./H2"
import P from "./Paragraph"
import Div from "./Div"

export default function Details(props) {
    return (
        <div>
            <H2>Todays Image</H2>
            <Image src={props.hdurl} />
            <Div color="#d9d9d9">
                <H2>Image Details</H2>
                <P><strong>Caption:</strong> {props.explanation}</P>
                <P><strong>Date:</strong> {props.date}</P>
                <P><strong>Photographer:</strong> {props.copyright}</P>
            </Div>
        </div>
    )
}