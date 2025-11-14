import React from "react"
import Navbar from "./Component/Navbar/Navbar"
import About from "./Component/About/About"
import Skill from "./Component/Skill/Skill"
import Experience from "./Component/Experience/Experience"
import Contect from "./Component/Contact/Contect"
import Work from "./Component/Work/Work"
import Education from "./Component/Education/Education"
import Footer from "./Component/Footer/Footer"
import BlurBlob from "./Component/BlurBlob"
function App() {

  return (
    <div className="bg-[#050414]">

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(tobottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">

      </div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skill/>
        <Experience/>
        <Contect/>
        <Work/>
        <Education/>
        <Footer/>

      </div>

    </div>
  )
}

export default App
