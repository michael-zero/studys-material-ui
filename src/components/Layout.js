import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar} from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import {format} from 'date-fns'
 

const drawerWidth = 240; 

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            backgroundColor: '#ffffff',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            backgroundColor: "#f4f4f4"
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar:{
            marginLeft: theme.spacing(2)
        }
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
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                       Today is {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        robot
                    </Typography>
                    <Avatar className={classes.avatar} src="./robot.png"/>
                </Toolbar>
            </AppBar>
            {/* side drawer */}
            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
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
                <div className={classes.toolbar}></div>
              {children}
            </div>
        </div>
    )
}

export default Layout