import React,{useContext} from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavioritesContext from '../../store/FavioritesContext'

const MeetupItem = (props) => {
  const favioriteCtx = useContext(FavioritesContext)
  const itemIsFavorite = favioriteCtx.itemIsFavorite(props.id);
  const toggleFavioriteHandler = () => {
      // console.log(props.id)
    if (itemIsFavorite) {
        // console.log("remove ",props.id)
      favioriteCtx.removeFaviorite(props.id)
    } else {
      // console.log("add ", props.id)
      const newMeetup = {
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      }
      favioriteCtx.addFaviorite(newMeetup)
    }
  }
  return (
    <li className={classes.item} id={props.id}>
      <Card >
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
          <button onClick={toggleFavioriteHandler}>{ itemIsFavorite?"Remove  from Favorites":"To Favorites"}</button>
        </div>
        </Card>
    </li>
  );
}

export default MeetupItem;