import {createContext,useState} from 'react'

const FavioritesContext = createContext({
  faviourites: [],
  totalFaviourites: 0,
  addFaviorite: (favioriteMeetup) => { },
  removeFaviorite: (meetupId) => { },
  itemIsFavorite: (meetupId) => { }
})


export function FavioritesContextProvider(props) {
  const [userFaviorites, setUserFaviorites] = useState([])

  function addFavioriteHandler(favioriteMeetup) {
    setUserFaviorites((prevUserFaviorites) => {
      return prevUserFaviorites.concat(favioriteMeetup)
    })
    
  }
  function removeFavioriteHandler(meetupId) {
    setUserFaviorites((prevUserFaviorites) => {
      return prevUserFaviorites.filter(meetup => meetup.id !== meetupId)
    })
  }
  function isFavioriteHandler(meetupId) {
    return userFaviorites.some(meetup => meetup.id == meetupId)
   }
  const context = {
    faviorites: userFaviorites, totalFaviorites: userFaviorites.length,
    addFaviorite: addFavioriteHandler, removeFaviorite: removeFavioriteHandler,
    itemIsFavorite: isFavioriteHandler
  }
  
  return (
    <FavioritesContext.Provider value={context}>{props.children}
    </FavioritesContext.Provider>
  )
}
export default FavioritesContext