import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({

    mainContainer:{
        // background: 'rgba(0, 0, 0, 0.8)',
        backgroundColor: '#ffffff',
        display: 'grid',
        gridTemplateRows: '8fr 14fr 37fr',
        height: 'calc(100vh - 110px )',
        padding: '50px 0 60px',
        overflow: 'hidden',
        position: 'relative',

    },
    userInfo:{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F7C992',
        height: '100%',
    },
    userImage:{
        width: '60px',
        height: '60px',
        borderRadius: '50px',
        margin: '10px 10px 10px 5vw'
    },
    userProfile:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        flexDirection: 'column',
        height: '100%',
    },
    userName:{
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px'
    },
    userProfileCard:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px'
    },
    userLevelText:{
        fontSize: '12px',
        fontWeight: 'bold',
    },
    graphOutline:{
        height: '4px',
        width: '100px',
        backgroundColor:'#ffffff',
        borderRadius: '15px',
    },
    graphInline:{
        height: '4px',
        width: '80px',
        backgroundColor:'#F5AB52',
        borderRadius: '15px',
    },
    trophyBar:{
        left: '5vw',
        position: 'absolute',
        backgroundColor:'#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px 0 0 50px',
        height: '100%',
        width: '100vw',
        boxShadow: '5px 5px 5px grey',
    },
    noTrophyBar:{
        left: '80vw',
        position: 'absolute',
        backgroundColor:'#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px 0 0 50px',
        height: '100%',
        width: '100vw',
        boxShadow: '5px 5px 5px grey',
    },
    trophyButton:{
        borderRadius: '50px',
        marginLeft: '5px',
        padding: '5px',
        border: '2px solid #F5AB52'
    },
    trophyText:{
        fontSize: '10px'
    },
    trophyListInfo:{
        height: '80vw',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        height: '90%',
    },
    trophyListImg:{
        width: '30px',
        height: '30px',
        margin: '3px'
    },
    petSpace:{
        overflow: 'hidden',
        position: 'relative',
    },
    spaceImage:{
        width: '100%',
        height: '100%',
    },
    petInfo:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
        padding: '20px'
    },
    petInfoMainText:{
        display: 'flex',
        justifyContent:'left',
        alignItems: 'center',
    },
    petCard:{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
    },
    petInfoLine:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    petPicAndName:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    petInfoText:{
        fontWeight: 'bold',
    },
    petInfoFirst:{
        color: '#F5AB52',
        margin: '2px 10px',
        fontSize: '10px',
    },
    petInfoLast:{
        fontSize: '10px'
    },
    petPicture:{
        borderRadius: '20px',
        width: '70px',
        height: '70px',
    },
    petName:{
        color: '#79470A',
        fontSize: '11px',
        margin : '5px',
        fontWeight: 'bold',
    },
    modifyIcon:{
        
        width: '25px',
        height: '25px',
    },
    modifyButton:{
        top: '20px',
        right: '20px',
        borderRadius: '50px',
        padding: '10px',
        position: 'absolute',
        background: 'linear-gradient(#DD6280, #F5AB52)'
    },
    dogImage:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    dogText:{
        fontSize: '10px',
        textAlign: 'center',
        width: '60px',
        backgroundColor:'#ffffff',
        borderRadius: '10px',
        padding: '3px',
        fontWeight: 'bold',
    },
    hamburgerMenu:{
        display:'none',
        position: 'absolute',
        // display: 'flex',
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
        zIndex: '2'
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
    }
});


function MainScreen() {
    const classes = useStyles();
    const navigate = useNavigate();
return (
    <div className={classes.mainContainer}>
        <div className = {classes.hamburgerMenu}>
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
        <div className= {classes.userInfo}>
            <div className = {classes.trophyBar}>
                <div className= {classes.trophyButton}>
                    <img src="img/trophyYellow.png"/>
                </div>
                <div className= {classes.trophyListInfo}>
                    <p className={classes.trophyText}>※ 미션과 커뮤니티를 통해 레벨 업을 할 수 있어요!</p>
                    <div className={classes.trophyList}>
                        <img className={classes.trophyListImg} src="img/trophyWhite.png"/>
                        <img className={classes.trophyListImg} src="img/trophyYellow.png"/>
                        <img className={classes.trophyListImg} src="img/trophyGreen.png"/>
                        <img className={classes.trophyListImg} src="img/trophyBlue.png"/>
                        <img className={classes.trophyListImg} src="img/trophyPurple.png"/>
                        <img className={classes.trophyListImg} src="img/trophyRed.png"/>
                        <img className={classes.trophyListImg} src="img/trophyBlack.png"/>
                    </div>
                </div>
            </div>
            <div className= {classes.userProfileCard}>
                <div className= {classes.userPicture}>
                    <img className = {classes.userImage} src='img/profileDummy.png' />
                </div>
                <div className= {classes.userProfile}>
                    <div className = {classes.userName}>
                        큐티뽀리
                    </div>
                    <div className = {classes.userLevel}>
                        <div className = {classes.userLevelText}>LV.12</div>
                        <div className= {classes.userLevelGraph}>
                            <div className = {classes.graphOutline}>
                                <div className = {classes.graphInline}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className ={classes.petInfo}>
            <div className ={classes.petInfoMainText}>
                <div className ={classes.petInfoText}>
                    나의 반려동물
                </div>
                <AddCircleIcon sx = {{
                    color:"#F5AB52",
                    margin: '5px'
                }}/>
            </div>
            <div className = {classes.petCard}>
                <div className = {classes.petPicAndName}>
                    <img className = {classes.petPicture} src = "img/dummyDogProfile.png"/>
                    <p className = {classes.petName}>탄이</p>
                </div>
                <div className = {classes.petInfoList}>
                    <div className = {classes.petInfoLine}>
                        <p className = {classes.petInfoFirst}>견/묘 종</p>
                        <p className = {classes.petInfoLast}>믹스</p>
                    </div>
                    <div className = {classes.petInfoLine}>
                        <p className = {classes.petInfoFirst}>성별</p>
                        <p className = {classes.petInfoLast}>믹스</p>
                    </div>
                    <div className = {classes.petInfoLine}>
                        <p className = {classes.petInfoFirst}>나이</p>
                        <p className = {classes.petInfoLast}>믹스</p>
                    </div>
                    <div className = {classes.petInfoLine}>
                        <p className = {classes.petInfoFirst}>성격</p>
                        <p className = {classes.petInfoLast}>믹스</p>
                    </div>
                </div>
            </div>
        </div>
        <div className= {classes.petSpace}>
            <img className = {classes.spaceImage} src = "img/background2.png"/>
            <a onClick = {() => navigate("/CustomSpace")} className = {classes.modifyButton}>
            <img className = {classes.modifyIcon} src = "img/modifyIcon.svg"/>
            </a>
            <div className={classes.dogImage}>
            <img  src="img/dog1.png"/>
            <p className ={classes.dogText}>탄이</p>
            </div>
        </div>
    </div>
)
}

export default MainScreen