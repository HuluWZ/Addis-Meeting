import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavioritesContext from '../../store/FavioritesContext'

const MainNavigation = () => {
  const favioritesCtx= useContext(FavioritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Addis Meetups</div>
      <nav>
        <ul>
          <li><Link to="/">All Meetups</Link>
          </li>
          <li><Link to="/new-meetup">All  New Meetups</Link>
          </li>
          <li><Link to="/faviourites">
            My Faviourites
            <span className={classes.badge}>
              {favioritesCtx.totalFaviorites}
          </span>
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation