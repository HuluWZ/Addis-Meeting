import React from 'react'
import NewMeetupForm  from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';


const NewMeetupPage = () => {
  const history = useNavigate();
  const addMeetupHandler = (meetupData) => {
    // console.log(JSON.stringify(meetupData))
        
    fetch("https://addis-meetup-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {  // this is a must         
        "Content-Type": "application/json"
      }
    }).then(()=> {
      history('/')
    })
    
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler } />
    </section>
  )
}

export default NewMeetupPage