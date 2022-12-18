import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Calendar from 'react-calendar';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

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
    },
    missionText:{
        fontSize: '16px',
        color: '#fff',
    },
    missionImg: {
        margin : '20px'
    },
    missionForm:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90vw'
    },
    answerInput: {
        height:'26px',
        borderRadius: '25px',
        border: 'none',
        width: '80%',
        margin: '0 5px'
    },
    submitIcon:{
        width: '36px',
        height: '36px',
    },
    calendarCard:{
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    }


})

function MissionScreen() {

    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div className= {classes.mainContainer}>
            <div className = {classes.missionCard}>
                <div className = {classes.missionHeader}>
                    <p className = {classes.missionHeaderText}>오늘의 미션</p>
                </div>
                <div className = {classes.missionContents}>
                    <p className = {classes.missionText}>23. 당신의 반려동물이 처음 왔을 때의 사진과 느낀 점
                    을 남겨주세요!</p>
                    <img className = {classes.missionImg} src = "img/missionDog.png"/>
                    <div className = {classes.missionForm}> 
                        <AddIcon sx = {{color: '#fff', fontSize: 36}} className = {classes.submitIcon} />
                        <input type="text" className= {classes.answerInput} name="mission"/>
                        <CheckCircleIcon sx = {{color: '#fff', fontSize: 36}} />
                    </div>
                </div>
            </div>
            <div onClick = {() => navigate("/missionDetail")} className = {classes.calendarCard}>
                <Calendar className = {classes.calendar} formatDay={(locale, date) => moment(date).format("D")}/>
            </div>
        </div>
    )
}

export default MissionScreen