import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50px 0 60px',
        backgroundColor:"#f4f4f4"
    },
    calendarCard:{
        backgroundColor: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        width: '100%',
        "& .react-calendar": {
            border: 0,
            width: '100%',
        }
    },
    calendar:{
        "& abbr[title]": {
            textDecoration: 'none',
        },
        "& .react-calendar__navigation__label__labelText":{
            fontSize: '20px',
            fontWeight: 'bold', 
        },
        "& .react-calendar__navigation__arrow":{
            color: '#F5AB52'
        },
        "& .react-calendar__navigation":{
            backgroundColor: '#f4f4f4',
            marginBottom: '0'
        },
        "&  .react-calendar__month-view__weekdays":{
            backgroundColor: '#f4f4f4',
        },
        "&  .react-calendar__month-view__days":{
            height: '30vh',
        },
    },
    calendarText: {
        display: 'flex',
        margin: '5px',
        fontSize: '10px',
    },
    calendarTodayIcon:{
        width: '9px',
        height: '9px'
    },

    todayMissionCard: {
        margin: '20px 10px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    todayMissionText:{
        color: '#fff',
        fontSize: '10px',
        backgroundColor: '#F5AB52',
        borderRadius: '25px',
        padding: '7px',
        width: '90%',
    },
    missionNumber:{
        fontWeight: 'bold',
        marginRight: '10px',
    },
    answerCard:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    answerText:{
        fontSize:"10px",
        width: '50%',
        background: '#fff',
        borderRadius: '10px',
        padding: '5px',
        margin: '10px 10px 0 10px',
        boxShadow: '3px 3px 3px #b2b2b2',
    },
    answerImage:{
        margin: '10px 10px 0px 10px',
        width: '70px',
        height: '50px',
        borderRadius: '15px'
    },
    horizontalLine:{
        height: '1px',
        backgroundColor:'#ffffff',
        width: '100%',
        margin: '10px 0 20px 0',
    },
    communitySection:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        width: '80%',
    },
    communityHeaderText:{
        marginBottom: "20px",
        fontSize: '14px',
    },
    communityImg:{
        width: '100%',
    },
    reactionSection:{
        display: 'flex',
        alignItems: 'center',
    },
    favoriteSection:{
        display: 'flex',
        margin : '5px',
    },
    massageSection:{
        display: 'flex',
        margin : '5px',
    },
    context:{
        fontSize: '10px',
    },
    reactText:{
        fontSize: '12px',
    }
})

function MissionDetailScreen() {

    const classes = useStyles();

    return (
    <div className = {classes.mainContainer}>
        <div className = {classes.calendarCard}>
            <Calendar  className = {classes.calendar} formatDay={(locale, date) => moment(date).format("D")}/>
            <div className = {classes.calendarText}>
                <img className = {classes.calendarTodayIcon} src= "img/dogFootIcon.svg"/>
                <p className={classes.calendarTodayText}>2022년 x월 x일</p>
            </div>
        </div>
        <div className={classes.todayMissionCard}>
            <div className = {classes.todayMissionText}><span className ={classes.missionNumber}>23.</span> 당신의 반려동물이 처음 왔을 때의 사진과 느낀점을 남겨주세요!</div>
            <div className={classes.answerCard}>
                <img className= {classes.answerImage} src = "img/missionSubmitDog.png"/>
                <p className = {classes.answerText}>크리스마스에 데려왔던 기억이 있어요 그때 정말이지.. 기분이 뛸듯이 기뻤답니다! 앞으로 잘해주자고 온 가족이 다짐했어요</p>
            </div>
        </div>

        <div className = {classes.horizontalLine}/>
        <div className = {classes.communitySection}>
            <p className = {classes.communityHeaderText}>커뮤니티</p>
            <div className = {classes.communityCard}>
                <img className = {classes.communityImg} src = "img/dummyDogCommunity.png"/>
                <div className={classes.reactionSection}>
                    <div className = {classes.favoriteSection}>
                        <FavoriteIcon sx ={{fontSize: '16px'}} />
                        <p className = {classes.reactText}>21</p>
                    </div>
                    <div className = {classes.massageSection}>
                        <MessageIcon sx ={{fontSize: '16px'}} />
                        <p className = {classes.reactText}>9</p>
                    </div>
                </div>
                <p className = {classes.context}>
                    오늘은 탄이한테 토끼 머리띄를 씌우고 산책을 다녀왔다ㅎㅎ
                    너무너무 행복했다!
                </p>
            </div>
        </div>
    </div>


    )
}

export default MissionDetailScreen