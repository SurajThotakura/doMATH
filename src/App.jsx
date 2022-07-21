import './App.css'
import AppHeader from './Components/Header/appHeader'
import DifficultyContextProvider, { DifficultyContext } from './Contexts/difficultyContext'
import StartPage from './Pages/StartPage/startPage'
import HelpPage from './Pages/HelpPage/helpPage'
import GamePage from './Pages/GamePage/gamePage'
import ResultsPage from './Pages/ResultsPage/resultsPage'
import PizzaPage from './Pages/AboutPage/aboutPage'
import useQuestionGen from './Hooks/mathQuestionHook'
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

function App() {
  return (
    <div className="App">
      <DifficultyContextProvider>
        <AppHeader/>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/help' element={<HelpPage/>}/>
          <Route path='/game' element={<GamePage/>}/>
          <Route path='/about' element={<PizzaPage/>}/>
          <Route path='/results' element={<ResultsPage/>}/>
        </Routes>
      </DifficultyContextProvider>
    </div>
  )
}

export default App
