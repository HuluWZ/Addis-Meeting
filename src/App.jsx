import { useState } from 'react'
import { Route ,Routes} from 'react-router-dom'
import AllMeetupPages from './pages/AllMeetups'
import FaviouritesPage from './pages/Faviourites'
import NewMeetupPage from './pages/NewMeetup'
import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout'

function App() {
  return (

    <div>
      <Layout>
    <Routes>
      <Route path="/" Component={AllMeetupPages} />
      <Route path="/faviourites" Component={ FaviouritesPage} />
      <Route path="/new-meetup" Component={ NewMeetupPage} />
    </Routes>
          
      </Layout>
    </div>
    
  ) 
}

export default App
