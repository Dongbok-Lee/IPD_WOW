import React, {useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate, useLocation} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddBoxIcon from '@mui/icons-material/AddBox';

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
        width: '70vw',
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
    useEffect(()=>{
        switch(location.pathname){
            case "/home":
                setHeaderText("MY ZOO")
                setIsDetailPage(false)
                break;
            case "/customSpace":
                setHeaderText("커스텀")
                setIsDetailPage(true)
                break;
            case "/mission":
                setHeaderText("미션")
                setIsDetailPage(false)
                break;
            case "/missionDetail":
                setHeaderText("내 달력")
                setIsDetailPage(true)
                break;
            case "/contest":
                setHeaderText("콘테스트")
                setIsDetailPage(false)
                break;
            case "/ContestDetail":
                setHeaderText("콘테스트")
                setIsDetailPage(true)
                break;
            case "/community":
                setHeaderText("커뮤니티")
                setIsDetailPage(false)
                break;
            case "/communityDetail":
                setHeaderText("커뮤니티")
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
                {(location.pathname == "/community" || location.pathname == "/communityDetail") && <AddBoxIcon   className = {classes.headerIcon}  sx = {{
                        color: '#fff', 
                        width: '20px', 
                        height: '20px'
                    }}/>}
                <NotificationsNoneIcon   className = {classes.headerIcon}  sx = {{
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
                    <div className = {classes.menuText}>
                        <p>회원정보 수정</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div className = {classes.menuText}>
                        <p>내 활동</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div className = {classes.menuText}>
                        <p>공지사항</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div className = {classes.menuText}>
                        <p>알림 설정</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div className = {classes.menuText}>
                        <p>고객 센터</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
                <div className={classes.hrLine}/>
                <div className = {classes.menuList}>
                    <div className = {classes.menuText}>
                        <p>앱 정보</p>
                        <NavigateNextIcon sx = {{color: '#F5AB52'}}/>
                    </div>
                </div>
            </div>
        <div onClick = {() => setMenuOn(false)} className = {`${menuOn ? classes.disableContainer:null}`}/>
        </>
    )
}   

export default Header