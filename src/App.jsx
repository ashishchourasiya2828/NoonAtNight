import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PageTwo from "./components/PageTwo"
import PageFour from './components/PageFour'
import PageFive from './components/PageFive'
import PageSix from './components/PageSix'
import PageSeven from './components/PageSeven'
import PageEight from './components/PageEight'
import PageNine from './components/PageNine'
import PageTen from './components/PageTen'
import PageEleven from './components/PageEleven'
import ThreePage from './components/ThreePage'
const App = () => {
  return (
    <div>
        <Header/>
        <PageTwo/>
        <ThreePage/>
        <PageFour/>
        <PageFive/>
        <PageSix/>
        <PageSeven/>
        <PageEight/>
        <PageNine/>
        <PageTen/>
        <PageEleven/>
    </div>
  )
}

export default App