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
    }


})

function MissionScreen() {
    const [answer, setAnswer] = useState();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState();
    const [todayCompleted, setTodayCompleted] = useState(false);
    const [missionIndex, setMissionIndex] = useState(0);
    const [missionData, setMissionData] = useState([]);
    const classes = useStyles();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const  today = new Date();

    useEffect(() => {
        getMissionData()
    },[])

    useEffect(() => {
        if(todayCompleted){

        }
    },[todayCompleted])

    const handlePictureChange = (e) =>{
        e.preventDefault();
        setImageUpload(e.target.files[0]);
        console.log(imageUpload);
    }
    const upload = () => {
        if (imageUpload === null) return;
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
            question: mission[0],
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
                    <p className = {classes.missionText}>{mission[0]}</p>
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
                <Calendar className = {classes.calendar} formatDay={(locale, date) => moment(date).format("D")}/>
            </div>
            <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    성공적으로 등록되었습니다!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MissionScreen;