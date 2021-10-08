import React from 'react'
import {Typography, Button, Container} from '@material-ui/core'

export default function Create() {
  return (
    <Container>
     <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
       Create a New Note
     </Typography>

     <Button type="submit"
     color="secondary"
     variant="contained">
       Submit
     </Button>
    </Container>
  )
}
