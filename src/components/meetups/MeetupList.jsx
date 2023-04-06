import React from 'react'
import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'


const MeetupList = (props) => {
  // console.log(props.meetups)
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        // console.log(meetup);
        <MeetupItem key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          description={meetup.description}
          title={meetup.title}
          address={meetup.address}
        />))
      }
  
    </ul>
  )
}

export default MeetupList