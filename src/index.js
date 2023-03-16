import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(
  "%c Hey There!!",
  // "font-weight: bold; font-size: 50px;color: rgb(48, 30, 103); text-shadow: 3px 3px 0 rgb(76, 53, 117) , 6px 6px 0 rgb(91, 75, 138) , 9px 9px 0 rgb(120, 88, 166)"
  // "font-weight: bold; font-size: 50px;color: #149414; text-shadow: 3px 3px 0 #0e6b0e , 6px 6px 0 #649568 , 9px 9px 0 #9ccc9c, 12px 12px 0  #2b5329"
  "font-weight: bold; font-size: 50px;color: #00FF00; text-shadow: 3px 3px 0 #0e6b0e , 6px 6px 0 #649568 , 9px 9px 0 #9ccc9c, 12px 12px 0  #2b5329"
)
console.log(
  "%c< >Welcome to the Dev's Multiverse.  Having reached this point indicates curiosity.</ >  Lets Connect . . .",
  "color: #00FF00; font-family:serif; font-size: 20px"
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
