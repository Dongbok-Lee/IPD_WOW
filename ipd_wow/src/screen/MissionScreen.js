import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Calendar from 'react-calendar';
import moment from 'moment';
import { getAuth} from "firebase/auth";
import {storage, db} from "../fbase.js";
import {useNavigate} from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import {mission} from '../components/Mission';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {getStorage, ref, uploadBytes, listAll, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { collection, addDoc, getDocs,  query, where, serverTimestamp  } from "firebase/firestore"; 

const useStyles = makeStyles({
    mainContainer:{
        display: 'grid',
        gridTemplateRows: '5fr 8fr',
        height: 'calc(100vh - 110px )',
        padding: '50px 0 60px',
        overflow: 'hidden',
        position: 'relative',
    },
    missionCard:{
        display: 'grid',
        gridTemplateRows: '1fr 4fr',
    },
    missionHeader: {
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'end',
    },
    missionHeaderText: {
        fontSize: '14px',
        margin : '10px',
    },
    missionContents: {
        padding: '10px',
        backgroundColor: '#F5AB52',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 3,
    },
    missionText:{
        fontSize: '16px',
        color: '#fff',
    },
    missionImg: {
        margin : '20px',
        height: '100px',
        width: '100px',
        borderRadius: '20px'
    },
    missionForm:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90vw'
    },
    answerInput: {
        height:'26px',
        borderRadius: '25px',
        border: 'none',
        width: '80%',
        margin: '0 5px',
    },
    completedAnswer:{
        padding: '10px',
        borderRadius: '25px',
        width: '80%',
        border: 'none',
        margin: '0 5px',
        backgroundColor: '#D2D2D2',
    },
    inputTag:{
        position: 'absolute',
        top:'0',
        left:'0',
        width: '100%',
        height: '100%',
        opacity: '0'
    },
    submitIcon:{
        position: 'relative',
        width: '36px',
        height: '36px',
        overflow:'hidden'
    },
    calendarCard:{
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
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

function MissionScreen() {
    const [answer, setAnswer] = useState();
    const [missions, setMissionData] = useState([]);
    const [value, onChange] = useState(new Date());
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState();
    const [todayCompleted, setTodayCompleted] = useState(false);
    const [missionIndex, setMissionIndex] = useState(0);
    const classes = useStyles();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClick2 = () => {
        setOpen2(true);
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen2(false);
    };
    const  today = new Date();

    useEffect(() => {
        getMissionData()
    },[])
    useEffect(()=>{
        setMissionIndex(missions.length)
    },[missions])
    useEffect(()=>{
        getMissionData()
    },[todayCompleted])

    const handlePictureChange = (e) =>{
        e.preventDefault();
        setImageUpload(e.target.files[0]);
        console.log(imageUpload);
    }
    const upload = () => {
        if (imageUpload === null){
            handleClick2()
            return;
        } 
        console.log(imageUpload);
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
        uploadBytesResumable(imageRef, imageUpload).then((snapshot) => {
          // 업로드 되자마자 뜨게 만들기
        getDownloadURL(snapshot.ref).then((url) => {
            setImageURL(url);
            console.log(url);
        })
        // 
        });
    };

    const getMissionData = async() =>{
        const missions = [];
        const auth = getAuth();
        const q = query(collection(db, "mission"), where("user", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            missions.push(doc.data());
            setMissionData(missions);
            console.log(missions)
            
            if(doc.data().date == today.toLocaleDateString()){
                setMissionIndex(missions.index-1)
                setTodayCompleted(true);
                console.log("오늘미션완료")
                setImageUpload(doc.data().picture);
                setAnswer(doc.data().answer);
            }
        });
    }

    const saveData = async() => {
        const auth = getAuth();
        console.log({
            answer: answer,
            question: mission[0],
            picture: imageURL,
            createTime: serverTimestamp(),
            user: auth.currentUser.email,
            date : today.toLocaleDateString(),
        })
        const docRef = await addDoc(collection(db, "mission"), {
            answer: answer,
            question: mission[missionIndex],
            picture: imageURL,
            createTime: serverTimestamp(),
            user: auth.currentUser.email,
            date : today.toLocaleDateString(),
        });
        console.log("Document written with ID: ", docRef.id);
        handleClick()
        setTodayCompleted(true);
        setImageUpload(URL.createObjectURL(imageUpload))
    }

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    useEffect(() => {
        saveData();
    },[imageURL])
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    return (
        <div className= {classes.mainContainer}>
            <div className = {classes.missionCard}>
                <div className = {classes.missionHeader}>
                    <p className = {classes.missionHeaderText}>오늘의 미션</p>
                </div>
                <div className = {classes.missionContents}>
                    <p className = {classes.missionText}>{mission[missionIndex]}</p>
                    {todayCompleted ? 
                    <img className = {classes.missionImg} src = {imageUpload}/>
                    : <img className = {classes.missionImg} src = {imageUpload ? URL.createObjectURL(imageUpload) : "img/dummyImage.png"}/>}
                    <div className = {classes.missionForm}> 
                        {!todayCompleted && <div className = {classes.submitIcon}>
                            <input className = {classes.inputTag} type="file" onChange = {handlePictureChange}/>  
                            <AddIcon sx = {{color: '#fff', fontSize: 36}}  />
                        </div>}
                        {todayCompleted ? <p  className= {classes.completedAnswer}>{answer}</p> :
                        <input onChange = {handleAnswerChange} type="text" className= {classes.answerInput} name="mission"/>}
                        {!todayCompleted && <CheckCircleIcon onClick = {upload}  sx = {{color: '#fff', fontSize: 36}} />}
                    </div>
                </div>
            </div>
            <div onClick = {() => navigate("/missionDetail")} className = {classes.calendarCard}>
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
            </div>
            <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    성공적으로 등록되었습니다!
                </Alert>
            </Snackbar>
            <Snackbar open={open2}  autoHideDuration={1000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
                    등록에 실패했습니다. 입력값을 다시 확인해주세요!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MissionScreen;