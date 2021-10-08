import React from 'react'
import {Typography, Button, Container, makeStyles, TextField} from '@material-ui/core'
import {KeyboardArrowRight} from '@material-ui/icons';


const useStyles = makeStyles({
  field: {
    marginBottom: 20, 
    marginTop: 20,
    display: 'block'
  }
})



export default function Create() {
  
  const classes = useStyles()
  const [title, setTitle] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [titleError, setTitleError] = React.useState(false)
  const [detailsError, setDetailsError] = React.useState(false)
  
  const [error, setError] = React.useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    //Pra sair o erro quando já tiver algo digitado
    setTitleError(false)
    setDetailsError(false)

    if(titleError === ''){
      setTitleError(true)
    }

    if(detailsError === ''){
      setDetailsError(true)
    }

    if(title && details){
      console.log(title, details)
    }
  }

  React.useEffect(() => {
    verifica()
  }, [title, details])

  const verifica = () => {
    if(title && details){
      setError(false)
    }else{
      setError(true)
    }
  }

  return (
    <Container>
     <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
       Create a New Note
     </Typography>

    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField error={titleError} onChange={(e) => setTitle(e.target.value)} fullWidth className={classes.field} required label='Note Title' variant="outlined" color="secondary"/>
      <TextField error={detailsError} onChange={(e) => setDetails(e.target.value)} multiline rows={4}  fullWidth className={classes.field} required label='Details' variant="outlined" color="secondary"/>
      
      <Typography>
        {error ? 'true':'false'}
      </Typography>
      
      <Button type="submit"
        disabled={error}
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight/>}
        >
       Submit
      </Button>
    </form>


    </Container>
  )
}
