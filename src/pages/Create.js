import React from 'react'
import {Typography, Button, Container, makeStyles} from '@material-ui/core'
import {KeyboardArrowRight} from '@material-ui/icons';


const useStyles = makeStyles({
 
})

export default function Create() {
  
  const classes = useStyles()

  return (
    <Container>
     <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
       Create a New Note
     </Typography>

     <Button type="submit"
     color="secondary"
     variant="contained"
     endIcon={<KeyboardArrowRight/>}
     >
       Submit
     </Button>
    </Container>
  )
}
