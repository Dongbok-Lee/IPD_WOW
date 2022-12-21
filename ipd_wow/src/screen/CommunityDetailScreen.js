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
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test1.png",
                        content : "오늘 귀여운 우리 누룽지랑 집에서 같이 뒹굴뒹굴 했어요!!"
                    }
                    })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test1.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test2.png",
                        content : "오레오랑 오랜만에 같이 산책하는 날!!"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test2.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail", {
                    state: {
                        img :  "img/test3.png",
                        content : "우리 강아지 촬영하는 날~"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test3.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail", {
                    state: {
                        img :  "img/test4.png",
                        content : "피곤한지 누워있는 우리 강아지"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test4.png"/>
                </div>
                <div className = {classes.communityDetailBox}>
                    <div style ={{backgroundColor: 'skyblue', width: '100%', height: 'calc(100vw/3)'}}>피곤한데 자꾸 강아지가 놀아달라고 한다.. 어떻게 하지..</div>
                </div>     
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test5.png",
                        content : "ㅎㅎ"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test5.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test6.png",
                        content : "우리 강아지 훈련하는중!"
                    }            
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test6.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test7.png",
                        content : "즐거운 하루 되세요~"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test7.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test8.png",
                        content : "귀여운 우리 애기 보고 가세요"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test8.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test9.png",
                        content : "ㅋㅋㅋ 재밌는 촬영시간"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test9.png"/>
                </div>
                <div className = {classes.communityDetailBox}>
                    <div style ={{backgroundColor: 'pink', width: '100%', height: 'calc(100vw/3)'}}>오늘 강아지와 산책을 나왔더니 기분이 너무 좋다!</div>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test10.png",
                        content : "지루했는데 우리 불독이랑 신나게 놀아야지"
                    }
                })} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test10.png"/>
                </div>
                <div onClick = {()=>navigate("/communityDetail",{
                    state: {
                        img :  "img/test11.png",
                        content : "뭘해도 멋진 우리 찹쌀떡"
                    }
                }
                )} className = {classes.communityDetailBox}>
                    <img className = {classes.boxImage} src = "img/test11.png"/>
                </div>
     
            </div>
        </div>
    )
}

export default CommunityDetailScreen