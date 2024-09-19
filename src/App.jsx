import { useState } from 'react'
import './App.css'
import Tile from './components/Tile.jsx';
import Header from './components/Header.jsx';
import FilterBar from './components/FilterBar.jsx';
import data from './components/projectsData.jsx'

function App() {

  const [projectList, setProjectList] = useState(data);

  return (
    <>
      <Header />
      <FilterBar
        projectList={projectList}
        setProjectList={setProjectList} />
      <Tile
        projectList={projectList} />
      <br />
      <footer>&copy;2024 Lori Phillips</footer>
    </>
  )
}

export default App
