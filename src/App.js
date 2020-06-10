import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header"
import Details from "./components/Details"

function App() {
  const [isShowingPOTD, setIsShowingPOTD] = useState(false);
  const showPOTD = () => {
    // console.log("button")
    setIsShowingPOTD(true)
  }
  const [potdData, setPotdData] = useState();

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        setPotdData(response.data)
        console.log("this is my data", response.data)
      })
      .catch((error) => {
        console.log("No Bueno", error)
      })
  }, [])
  return (
    <div className="App">
      <Header showPOTD={showPOTD} />
      { isShowingPOTD &&
        <Details 
          hdurl={potdData.hdurl} 
          explanation={potdData.explanation} 
          date={potdData.date} 
          copyright={potdData.copyright} />
      }
    </div>
  );
}

export default App;
