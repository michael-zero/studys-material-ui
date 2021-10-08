import React from 'react'
import {Card, CardMedia, CardHeader, CardContent, IconButton, Typography, makeStyles, Avatar} from '@material-ui/core'
import {DeleteOutlined} from '@material-ui/icons'
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category === 'work'){
               return yellow[700]
            }
            if(note.category === 'money'){
               return green[500]
            }
            if(note.category === 'todos'){
               return pink[500]
            }
            
            return blue[500]
        }
        // border: (note) => {
        //     if(note.category === 'work'){
        //         return '1px solid red'
        //     }
        // }
    }
})

const NoteCard = ({note, handleDelete}) => {
    const classes = useStyles(note)
    return (
        <div>
           <Card elevation={1} className={classes.test}>
            <CardHeader 
            avatar={<Avatar className={classes.avatar}>
                {note.category[0].toUpperCase()}
            </Avatar>} 
            title={note.title}
            subheader={note.category}
            action={<IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined/>
            </IconButton>}/>
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
           </Card>
        </div>
    )
}

export default NoteCard
