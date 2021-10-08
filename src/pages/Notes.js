import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
export default function Notes() {
  const [notes, setNotes] = React.useState([])
 
  React.useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])


  return (
    <Container>


    <Grid container>
      {
        notes.map(item => {
          return (
            <Grid item key={item.id} xs={12} md={6} lg={4}>
              <Paper>{item.title}</Paper>
            </Grid>
          )
        })
      }
      </Grid>
    </Container>
  )
}
