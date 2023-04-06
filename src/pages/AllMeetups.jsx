import React, { useState,useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupPages = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups,setLoadedMeetups] = useState([])
  useEffect(() => {
    setIsLoading(true)
    fetch('https://addis-meetup-default-rtdb.firebaseio.com/meetups.json').then((response) => { return response.json() }).then((data) => {
      const meetups = []
      for (const key in data) { 
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setLoadedMeetups(meetups)
      setIsLoading(false)
    })
  }, []);
  
  if (isLoading) {
    return (<section><p>Loading...</p></section>)
  }else{
        return (<section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
        </section>)
      }
  
}

export default AllMeetupPages