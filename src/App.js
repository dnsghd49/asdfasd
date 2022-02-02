import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { DataContext } from './context/DataContext'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  const API_url = "https://itunes.apple.com/search?term="
  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_url + search)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className='App'>
      {message}
      <DataContext.Provider value={data}>
        <Searchbar handleSearch={handleSearch} />
        <Gallery data={data} />
      </DataContext.Provider>
    </div>
  )
}

export default App
