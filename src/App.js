import { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  useEffect(() => {
    const API_URL = `https://itunes.apple.com/search?term=`
    if (search) {
      document.title = `${search} Music`
      const fetchData = async () => {
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        if (resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])


  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className='App'>
      {message}
      <BrowserRouter>
        
        <Route exact path="/">
          <Searchbar handleSearch={handleSearch} />
          <Gallery data={data} />
        </Route>

        <Route exact path="/album/:id">
          <AlbumView />
        </Route>

        <Route exact path="/artist/:id">
          <ArtistView />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
