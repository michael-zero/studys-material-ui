import React from 'react'
import {Typography, Button, Container, makeStyles} from '@material-ui/core'
import {KeyboardArrowRight} from '@material-ui/icons';


const useStyles = makeStyles({
  btn: {
    fontSize: '60px',
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: '20px'
  }
})

export default function Create() {
  
  const classes = useStyles()

  return (
    <Container>
     <Typography className={classes.title} variant="h6" component="h2" color="textSecondary" gutterBottom>
       Create a New Note
     </Typography>

     <Button type="submit"
     className={classes.btn}
     color="secondary"
     variant="contained"
     endIcon={<KeyboardArrowRight/>}
     >
       Submit
     </Button>
    </Container>
  )
}
