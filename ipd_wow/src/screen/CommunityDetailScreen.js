import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '100px 0 60px',
    },
    searchSection:{
        top: '50px',
        position:'fixed',
        width: "100%",
        height: '50px',
        backgroundColor: '#F5AB52',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBox:{
        border: 0,
        borderRadius: '25px',
        width: '90vw',
        height: '33px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    searchInput:{
        border: 0,
        borderRadius: '25px',
        width: '90vw',
        height: '30px',
        "&:focus":{
            outline:'none'
        }
    },
    gridContainer:{
        marginTop: '10px',
        width: '100%',
        gap: '2px',
        display: 'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
    },
    boxImage:{
        width:'100%',
        height: 'calc(100vw/3)',
    }
})

function CommunityDetailScreen() {

    const classes = useStyles();
    const navigate = useNavigate();
    let vw = window.innerWidth;

    return (
        <div className = {classes.mainContainer}>
            <div className = {classes.searchSection}>
                <div className = {classes.searchBox}>
                    <SearchIcon sx ={{ color: '#F5AB52'}}/>
                    <input className = {classes.searchInput} placeholder = "검색" />
                </div>
            </div>
            <div className = {classes.gridContainer}>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test1.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test2.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test3.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test4.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test2.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test3.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test2.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test3.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test4.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <div style ={{backgroundColor: 'pink', width: '100%', height: 'calc(100vw/3)'}}>테스트 입니다.</div>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test3.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test4.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail")} className = {classes.communityDetailBox}>
                    <div style ={{backgroundColor: 'skyblue', width: '100%', height: 'calc(100vw/3)'}}>테스트 입니다.</div>
                </div>          
            </div>
        </div>
    )
}

export default CommunityDetailScreen