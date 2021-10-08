import React from 'react'
import {Card, CardMedia, CardHeader, CardContent, IconButton, Typography} from '@material-ui/core'
import {DeleteOutlined} from '@material-ui/icons'
const NoteCard = ({note, handleDelete}) => {
    return (
        <div>
           <Card elevation={1}>
            <CardHeader 
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
