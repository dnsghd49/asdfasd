import { useState, useRef } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import SearchBar from './components/Searchbar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_url = "https://itunes.apple.com/search?term="

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      const response = await fetch(API_url + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        return setData(resData.results)
      } else {
        return setMessage('Not Found.')
      }
    }
    fetchData()
  }

  return (
    <div className='App'>
      <SearchContext.Provider value={{ term: searchInput, handleSearch: handleSearch }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery data={data} />
      </DataContext.Provider>
    </div>
  )
}

export default App
