import React, {useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate, useLocation} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
    },
    hamburgerMenu:{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'start',
        textAlign:'center',
        flexDirection: 'column',
        width: '50vw',
        height: '70vh',
        top: 0,
        left: 0,
        backgroundColor:'#ffffff',
        borderRadius: '0 20px 20px 0',
        margin: '0 0 60px',
        zIndex: '100',
        transition: 'all 1s'
    },
    noHamburgerMenu:{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'start',
        textAlign:'center',
        flexDirection: 'column',
        width: '70vw',
        height: '70vh',
        top: 0,
        left: '-70vw',
        backgroundColor:'#ffffff',
        borderRadius: '0 20px 20px 0',
        margin: '0 0 60px',
        zIndex: '100',
        transition: 'all 1s'
    },
    manuHeader:{
        backgroundColor:'#F5AB52',
        borderRadius: '0 20px 0 0',
        height: '15vh',
        display: 'flex',
        justifyContent: 'right'
    },
    menuList:{
        width: '100%',
        display: 'flex',
        margin: '10px',
        fontWeight: "bold",
        fontSize: '15px'
    },
    menuText:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30px',
        width: '95%'
    },
    hrLine:{
        height: '0.5px',
        width: '100%',
        backgroundColor: '#d9d9d9'
    },
    disableContainer:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position:'fixed',
        top : '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: 90,
        transition: 'all 1s'
    }
})

function Header() {

    const classes = useStyles();
    const location = useLocation();
    const [menuOn, setMenuOn] = useState(false);
    const [headerText, setHeaderText] = useState("MY ZOO");
    const [isDetailPage, setIsDetailPage] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    useEffect(()=>{
        switch(location.pathname){
            case "/home":
                setHeaderText("MY ZOO")
                setIsDetailPage(false)
                break;
            case "/customSpace":
                setHeaderText("?????????")
                setIsDetailPage(true)
                break;
            case "/mission":
                setHeaderText("??????")
                setIsDetailPage(false)
                break;
            case "/missionDetail":
                setHeaderText("??? ??????")
                setIsDetailPage(true)
                break;
            case "/contest":
                setHeaderText("????????????")
                setIsDetailPage(false)
                break;
            case "/ContestDetail":
                setHeaderText("????????????")
                setIsDetailPage(true)
                break;
            case "/community":
                setHeaderText("????????????")
                setIsDetailPage(false)
                break;
            case "/communityDetail":
                setHeaderText("????????????")
                setIsDetailPage(true)
                break;
            case "/shopping":
                setHeaderText("MCM")
                setIsDetailPage(false)
                break;
            case "/shoppingDetail":
                setHeaderText("MCM")
                setIsDetailPage(true)
                break;
            
        }
    },[location])

    return (
        <>
        <div className={classes.headerRoot}>
            <div className={classes.headerLeftIcon}>
                {!isDetailPage && <MenuIcon onClick ={()=>setMenuOn(true)} className = {classes.headerIcon} 
                    sx = {{
                        color: '#fff', 
                        width: '20px', 
                        height: '20px'
                    }}/>}
                {isDetailPage && <ArrowBackIcon  sx = {{color:'#ffffff'}} onClick={() => navigate(-1)} className = {classes.headerIcon} />}
            </div>
            <div className={classes.headerText}>
                {headerText}
            </div>
            <div className={classes.headerRightIcon}>
                {(location.pathname == "/community" || location.pathname == "/communityDetail") && <AddBoxIcon onClick={handleClick} className = {classes.headerIcon}  sx = {{
                        color: '#fff', 
                        width: '20px', 
                        height: '20px'
                    }}/>}
                <NotificationsNoneIcon onClick={handleClick}  className = {classes.headerIcon}  sx = {{
                    color: '#fff', 
                    width: '20px', 
                    height: '20px'
                }}/>
            </div>
        </div>
        <div onClick ={() => setMenuOn(true)} className = {`${menuOn ? classes.hamburgerMenu:classes.noHamburgerMenu}`}>
                <div className = {classes.manuHeader}>
                    <SettingsIcon sx = {{color:'#ffffff' ,width: '33px', height: '33px', margin : '5px'}}/>
                </div>
                <div className = {classes.menuList}>
                    <div onClick={handleClick} className = {classes.menuText}>
                        <p>???????????? ??????</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div  className={classes.hrLine}/>
                <div  className = {classes.menuList}>
                    <div onClick={handleClick} className = {classes.menuText}>
                        <p>??? ??????</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div onClick={handleClick} className = {classes.menuText}>
                        <p>????????????</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div onClick={handleClick} className = {classes.menuText}>
                        <p>?????? ??????</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div onClick={handleClick} className = {classes.menuText}>
                        <p>?????? ??????</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div onClick={handleClick} className = {classes.menuText}>
                        <p>??? ??????</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
            </div>
        <div onClick = {() => setMenuOn(false)} className = {`${menuOn ? classes.disableContainer:null}`}/>
        <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    ?????? ????????? ??????????????????!
                </Alert>
        </Snackbar>
        </>
    )
}   

export default Header