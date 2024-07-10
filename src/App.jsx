import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Nav from './components/navigation/Nav'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Top from './components/Top/Top'
import Latest from './components/Latest/Latest'
import Upcoming from './components/Upcoming/Upcoming'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <>
            <Nav />
            <Header />
            <Welcome />
            <Top />
            <Latest />
            <Upcoming />
            <Footer />
        </>
    ) 
}

export default App
