import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles({
    headerRoot:{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5AB52',
        width: '100vw',
        height: '50px',
        zIndex: '1'
    },
    headerIcon:{
        margin: '10px'
    },
    headerText:{
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 'bold'
    }
})

function Header() {

    const classes = useStyles();

    return (
        <div className={classes.headerRoot}>
            <div className={classes.headerLeftIcon}>
                <MenuIcon className = {classes.headerIcon} 
                sx = {{
                    color: '#fff', 
                    width: '20px', 
                    height: '20px'
                }}/>
            </div>
            <div className={classes.headerText}>
                MY ZOO
            </div>
            <div className={classes.headerRightIcon}>
                <NotificationsNoneIcon   className = {classes.headerIcon}  sx = {{
                    color: '#fff', 
                    width: '20px', 
                    height: '20px'
                }}/>
            </div>
        </div>
    )
}   

export default Header