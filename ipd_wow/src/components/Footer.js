import React from 'react'
import CelebrationIcon from '@mui/icons-material/Celebration';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles} from '@material-ui/core/styles';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {useNavigate} from 'react-router-dom'
const useStyles = makeStyles({
    bottomTabsRoot: {
        backgroundColor:'#fff',
        padding: '0 10px',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
        width: 'calc(100vw - 20px)',
        height: '60px',
        zIndex: 1
    },
    bottomTabsButton:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '11px',
    },
    bottomTabsIcon:{
        margin: '10px  10px 0px 10px',
    }
});

function Footer() {

    const classes = useStyles();
    const navigate = useNavigate();

    const goScreen = (screen) =>{
        console.log(screen)
        navigate(screen);
    }

    return (
        <div className = {classes.bottomTabsRoot}>
            <div onClick = {() => goScreen("/home")} className = {classes.bottomTabsButton}>
                <HomeIcon className = {classes.bottomTabsIcon}
                    sx = {{
                        color: '#F5AB52', 
                        width: '35px', 
                        height: '35px'
                    }}
                />
                <p>홈</p>
            </div>
            <div onClick = {() => goScreen("/mission")}  className = {classes.bottomTabsButton}>
                <TaskIcon className = {classes.bottomTabsIcon}
                    sx = {{
                        color: '#b9b9b9', 
                        width: '30px', 
                        height: '30px'
                    }}
                />
                <p>미션</p>
            </div>
            <div onClick = {() => goScreen("/contest")}  className = {classes.bottomTabsButton}>
                <CelebrationIcon className = {classes.bottomTabsIcon}
                    sx = {{
                        color: '#b9b9b9', 
                        width: '30px', 
                        height: '30px'
                    }}
                />
                <p>콘테스트</p>
            </div>
            <div onClick = {() => goScreen("/community")} className = {classes.bottomTabsButton}>
                <PeopleIcon className = {classes.bottomTabsIcon}
                    sx = {{
                        color: '#b9b9b9', 
                        width: '30px', 
                        height: '30px'
                    }}
                />
                <p>커뮤니티</p>
            </div>
            <div onClick = {() => goScreen("/shopping")} className = {classes.bottomTabsButton}>
                <StorefrontIcon className = {classes.bottomTabsIcon}
                    sx = {{
                        color: '#b9b9b9', 
                        width: '30px', 
                        height: '30px'
                    }}
                />
                <p>쇼핑</p>
            </div>
        </div>
    )
}

export default Footer