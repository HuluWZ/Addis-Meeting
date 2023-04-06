import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {

  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const title = titleInputRef.current.value
    const image = imageInputRef.current.value
    const address = addressInputRef.current.value
    const description = descriptionInputRef.current.value

    const newMeetup = { title, image, description, address }
    // console.log(newMeetup);
    props.onAddMeetup(newMeetup)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required  id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={ imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef } />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea required id="description" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.action}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm