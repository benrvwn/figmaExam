import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Nav from './components/navigation/Nav'
import Welcome from './components/Welcome/Welcome'
import Top from './components/Top/Top'
import Latest from './components/Latest/Latest'
import Upcoming from './components/Upcoming/Upcoming'

function App() {

    return (
        <>
            <Nav />
            <Welcome />
            <Top />
            <Latest />
            <Upcoming />
        </>
    ) 
}

export default App
