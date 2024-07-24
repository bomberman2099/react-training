import React ,{useState} from 'react'

function NewMovie() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
     
    return (
        <form>
            <br/><br/>
            <label>
                <span>Movie Title:</span>
                <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
            </label>
            <label>
                <span>Movie Date:</span>
                <input type="date"  onChange={(e)=> setDate(e.target.value)}/>
            </label>
            <p>title: {title}</p>
            <p>date: {date}</p>
        </form>
    )
}

export default NewMovie;