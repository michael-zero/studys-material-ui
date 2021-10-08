import React from 'react'

export default function Notes() {
  const [notes, setNotes] = React.useState([])
 
  React.useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])


  return (
    <div>
      {
        notes.map(item => {
          return (
            <p key={item.id}>{item.title}</p>
          )
        })
      }
    </div>
  )
}
