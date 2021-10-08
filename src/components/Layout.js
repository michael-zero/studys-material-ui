import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AddCircleOutlined, AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240; 
const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    page: {
        backgroundColor: '#ffffff',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    active: {
        backgroundColor: "#f4f4f4"
    }
})
const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
    {text: 'My notes', icon: <SubjectOutlined color="secondary"/>, path: "/"},
    {text: 'Create notes', icon: <AddCircleOutlineOutlined color="secondary"/>, path: "/create"},
]
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

                {/* List / Links  */}
                <List>
                    {menuItems.map(item => {
                        return (
                        <ListItem key={item.text} button
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>)
                    })}
                </List>
            </Drawer>

            <div className={classes.page}>
              {children}
            </div>
        </div>
    )
}

export default Layout