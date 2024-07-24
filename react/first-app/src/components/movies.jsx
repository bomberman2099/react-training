import React, { Component, useState } from 'react';
import NewMovie from './newmovie'
const Movies = () =>{
    const [showEvent, SetShowEvent] = useState(false);
    
    const [events, SetEvent] = useState([
        {id:0, title: 'free guy'},
        {id:1, title: 'batman'},
        {id:2, title: 'spiderman'},
        {id:3, title: 'avengers'},
        {id:4, title: 'mokhtarname'},
        {id:5, title: 'paitakht'}
    ]);

    const DeleteMovie = (id) =>{
        SetEvent((prevEvents)=>{
            return prevEvents.filter((event) => {
                return id !== event.id
            })
        })
    }

    return(
        <div style={{textAlign: 'center', margin: '40px 0'}}>
            
            {
                showEvent 
                ? (<button onClick={() => {SetShowEvent(false)  }}>hide</button>) // condition is true
                : (<button onClick={() => { SetShowEvent(true)  }}>show</button>)  // condition is false 
            }
            {
            showEvent && events.map((event, index)=> (
                <div key={index}>
                    <h3>
                        {index}- {event.title}
                    </h3>
                    <button onClick={()=> DeleteMovie(event.id)}>batman</button>
                </div>
            ))
            }
            <NewMovie />
        </div>
    )
}

export default Movies;