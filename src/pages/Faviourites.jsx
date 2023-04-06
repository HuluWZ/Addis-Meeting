import React,{useContext} from 'react'
import FavioritesContext from '../store/FavioritesContext';
import MeetupList from '../components/meetups/MeetupList';

const FaviouritesPage = (props) => {
  const favioriteCtx = useContext(FavioritesContext)
  // console.log(favioriteCtx.faviourites)
  let content;
  if (favioriteCtx.totalFaviourites === 0) {
    content = <p>You got no faviorites yet. Start adding some?</p>
  
  } else {
    content = <MeetupList meetups={favioriteCtx.faviorites} />
  }
    
  return (
    <section>
        <h3>My Favorites</h3>
              {content}
    </section>)

  // nsole.log(favorites)
}

export default FaviouritesPage