import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {useNavigate} from 'react-router-dom';
const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50px 0 60px',
        backgroundColor:"#ffffff"
    },
    contestCard:{
        width: '80vw',
        display: 'flex',
        flexDirection: 'column',
        margin: '30px  0 0 10px',
    },
    contestImageCard:{
        position: 'relative',
        width: '100%',
    },
    contestImg:{
        width: '100%',
        height: '20vh',
        borderRadius: '20px',
    },
    contestTitle:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '25%',
        background: 'linear-gradient(#DD6280, #F5AB52)',
        borderRadius: '20px 20px 0 0',
        color: '#ffffff',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contestDescription:{
        fontSize: '11px',
    },
    contestCommingSoonCard : {
        width: '100%',
        height: '25vh',
        borderRadius: '30px',
        background: 'linear-gradient(#DD6280, #F5AB52)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection: 'column',
        color: '#ffffff',
        fontSize: '16px',
        marginBottom:'20px'
    }
});

function ContestScreen() {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className = {classes.mainContainer}>
            <div className = {classes.contestCard}>
                <div onClick = {() => navigate("/ContestDetail")} className = {classes.contestImageCard}>
                    <img src="img/contestDummy1.png" className = {classes.contestImg}/>
                    <div  className = {classes.contestTitle}>
                        <p>?????? ?????? ????????????</p>
                    </div>
                </div>
                <p className = {classes.contestDescription}>??????????????? ?????? ????????? ??????????????????!</p>
            </div>
            <div className = {classes.contestCard}>
                <div onClick = {() => navigate("/ContestDetail")} className = {classes.contestImageCard}>
                    <img src="img/contestDummy2.png" className = {classes.contestImg}/>
                    <div  className = {classes.contestTitle}>
                        <p>????????? ?????? ????????????</p>
                    </div>
                </div>
                <p className = {classes.contestDescription}>??????????????? ????????? ????????? ????????? ????????? ???????????????!</p>
            </div>
            <div className = {classes.contestCard}>
                <div className = {classes.contestCommingSoonCard}>
                        <p>Comming Soon</p>
                        <QuestionMarkIcon sx = {{fontSize: '130px', color:'#ffffff'}}/>
                </div>
            </div>
        </div>
    )
}

export default ContestScreen