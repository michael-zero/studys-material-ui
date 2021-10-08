import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Drawer, Typography } from '@material-ui/core'

const drawerWidth = 240; 
const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    }
})
const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* app bar */}

            {/* side drawer */}
            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5'>
                        robot notes
                    </Typography>
                </div>
            </Drawer>

            <div className={classes.page}>
              {children}
            </div>
        </div>
    )
}

export default Layout