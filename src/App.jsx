import './App.css'
import AppHeader from './Components/Header/appHeader'
import DifficultyContextProvider from './Contexts/difficultyContext'
import GameStatsContextProvider from './Contexts/gameStatsContext'
import StartPage from './Pages/StartPage/startPage'
import HelpPage from './Pages/HelpPage/helpPage'
import GamePage from './Pages/GamePage/gamePage'
import ResultsPage from './Pages/ResultsPage/resultsPage'
import PizzaPage from './Pages/AboutPage/aboutPage'
import { Route, Routes } from 'react-router-dom';
import AppFooter from './Components/Footer/appFooter'

function App() {
  return (
    <div className="App">
      <DifficultyContextProvider>
      <GameStatsContextProvider>
        <AppHeader/>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/help' element={<HelpPage/>}/>
          <Route path='/about' element={<PizzaPage/>}/>
          <Route path='/game' element={<GamePage/>}/>
          <Route path='/results' element={<ResultsPage/>}/>
        </Routes>
        <AppFooter/>
      </GameStatsContextProvider>
      </DifficultyContextProvider>
    </div>
  )
}

export default App
