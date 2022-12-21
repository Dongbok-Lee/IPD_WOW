import React,{useState,useEffect} from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import {getStorage, ref, uploadBytes, listAll, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { collection, addDoc, getDocs,  query, where, serverTimestamp  } from "firebase/firestore"; 
import {storage, db} from "../fbase.js";
import { getAuth} from "firebase/auth";

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
        "& .highlight": {
            color: 'red'
        },
        "& .react-calendar__month-view__days__day":{
            position: 'relative',
        },
        "& .react-calendar__tile--active":{
            borderRadius: '50px',
            backgroundColor: '#b2b2b2',
            "&:hover":{
                backgroundColor: '#b2b2b2'
            },
            "&:active":{
                backgroundColor: '#b2b2b2'
            },
            "&:focus":{
                backgroundColor: '#b2b2b2'
            },
            "&:enabled":{
                backgroundColor: '#b2b2b2'
            },
        },
        "& .react-calendar__tile--now":{
            backgroundColor: '#FFE3C1',
            borderRadius: '50px',
            "&:hover":{
                backgroundColor: '#FFE3C1'
            },
            "&:active":{
                backgroundColor: '#FFE3C1'
            },
            "&:focus":{
                backgroundColor: '#FFE3C1'
            },
            "&:enabled":{
                backgroundColor: '#FFE3C1'
            },
        }
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
    },
    calendarImgHighlight:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50px',
        height: '50px',
        borderRadius:'50px',
        transform: 'translate(-50%, -50%)',
        opacity: 0.6
    }
})

function MissionDetailScreen() {

    const classes = useStyles();
    const [value, onChange] = useState(new Date());
    const [missions, setMissionData] = useState([]);
    const [todayMission, setTodayMission] = useState("미션을 수행하지 않았어요");
    const [todayAnswer, settodayAnswer] = useState("미션을 수행하지 않았어요");
    const [todayImg, settodayImg] = useState();

    useEffect(() => {
        console.log(value.toLocaleDateString())
        setTodayMission("미션을 수행하지 않았어요")
        settodayAnswer("미션을 수행하지 않았어요")
        settodayImg()
        missions.forEach((mission) =>{
            console.log(mission.date + value.toLocaleDateString())
            if(mission.date === value.toLocaleDateString()){
                console.log("성공")
                setTodayMission(mission.question)
                settodayAnswer(mission.answer)
                settodayImg(mission.picture)
                return;
            }
        })
    },[value]);

    useEffect(() => {
        getMissionData();
    },[])

    const getMissionData = async() =>{
        const missions = [];
        const auth = getAuth();
        const q = query(collection(db, "mission"), where("user", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q)

        
        querySnapshot.forEach((doc) => {
            missions.push(doc.data());
            setMissionData(missions);
            console.log(missions)
        });
    }

    return (
    <div className = {classes.mainContainer}>
        <div className = {classes.calendarCard}>
            <Calendar  
                onChange={onChange}
                value={value} 
                className = {classes.calendar} 
                formatDay={(locale, date) => moment(date).format("D")}
                tileContent={({ date, view }) => {
                    let completeDate = false;
                    let imgURL = null;
                    missions.forEach((mission) =>{
                        console.log(mission.date + date.toLocaleDateString())
                        if(mission.date === date.toLocaleDateString()){
                            console.log("성공")
                            imgURL = mission.picture;
                            completeDate = true;
                        }
                    })
                    return (completeDate ? <img className = {classes.calendarImgHighlight} src = {imgURL}/> : null)
                }}
                />
            <div className = {classes.calendarText}>
                <img className = {classes.calendarTodayIcon} src= "img/dogFootIcon.svg"/>
                <p className={classes.calendarTodayText}>{value.getFullYear()}년 {value.getMonth()}월 {value.getDate()}일</p>
            </div>
        </div>
        <div className={classes.todayMissionCard}>
            <div className = {classes.todayMissionText}>{todayMission}</div>
            <div className={classes.answerCard}>
                <img className= {classes.answerImage} src = {todayImg ? todayImg :"img/missionSubmitDog.png" }/>
                <p className = {classes.answerText}>{todayAnswer}</p>
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