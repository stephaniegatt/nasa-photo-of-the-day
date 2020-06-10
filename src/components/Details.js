import React, { useEffect } from "react";


export default function Details(props) {
    return (
        <div>
            <h2>Todays Image</h2>
            <img src={props.hdurl} />
            <div>
                <h2>Image Details</h2>
                <p>Caption: {props.explanation}</p>
                <p>Date: {props.date}</p>
                <p>Photographer: {props.copyright}</p>
            </div>
        </div>
    )
}