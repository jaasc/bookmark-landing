import React from "react"
import Contact from "./components/Contact"
import Extensions from "./components/Extensions"
import Faqs from "./components/Faqs"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="font-rubik">
      <div className="lg:h-screen lg:max-h-[800px] flex flex-col">
        <Header/>
        <Hero/>
      </div>
      <Features/>
      <Extensions/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
