import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

export default function Page(){
    return(
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))