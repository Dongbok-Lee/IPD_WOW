import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        height: 'calc(100vh - 110px )',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50px 0 60px',
        backgroundColor:"#ffffff",
        overflow: 'auto'
    },
    contestMonthSelect:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: '20px'
    },
    contestMonthText:{
        margin: '0 20px',
        fontSize: '20px',
        fontWeight:'bold'
    },
    contestEntireViewButton:{
        width: '90vw',
        display: 'flex',
        justifyContent: 'end',
        margin: '20px'
    },
    entireViewButton:{
        fontSize: '14px',
        padding: '6px',
        borderRadius: '10px',
        width: '60px',
        color:'#ffffff',
        backgroundColor: '#F5AB52',
        display: 'inline-block',
        textAlign: 'center'
    },
    contestRanking:{
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'end',
        width:'90vw',
        marginBottom: '100px',
    },
    RankingDetail:{
        display:'flex',
        flexDirection: 'column',
        width: '20vw',
        justifyContent: 'center',
        alignItems:'center',
    },
    secondProfile:{
        position:'relative',
        margin: '10px',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
    },
    secondProfileImg:{
        borderRadius:'15px',
        width: '80px',
        height: '70px',
    },
    secondPetName:{
        position: 'absolute',
        bottom: '5px',
        fontSize: '10px',
        padding : '3px',
        backgroundColor: '#ffffff',
        borderRadius:'10px',
        width: '40px',
        textAlign: 'center',
    },
    secondGraph:{
        width: '100%',
        height: '140px',
        background: 'linear-gradient(#DD6280, #F5AB52)'
    },
    secondName:{
        fontSize: '14px',
        marginTop: '5px',
    },
    firstGraph:{
        width: '100%',
        height: '190px',
        background: 'linear-gradient(#DD6280, #F5AB52)'
    },
    thirdGraph:{
        width: '100%',
        height: '90px',
        background: 'linear-gradient(#DD6280, #F5AB52)'
    },
    writeButtonForm:{
        width: '90vw',
        display: 'flex',
        justifyContent: 'end'


    }
})

function ContestDetailScreen() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    let vh = window.innerHeight * 0.01;

    return (
            <div style={{justifyContent: vh > 7.70  ? 'center' : 'none'}} className = {classes.mainContainer}>
                <div className = {classes.contestMonthSelect}>
                    <ArrowLeftIcon onClick={handleClick} sx = {{fontSize: '30px', color:'#F5AB52'}}/>
                    <p className = {classes.contestMonthText}>2022.12</p>
                    <ArrowRightIcon onClick={handleClick} sx = {{fontSize: '30px', color:'#F5AB52'}}/>
                </div>
                <div className = {classes.contestEntireViewButton}>
                    <p onClick={handleClick} className = {classes.entireViewButton}>전체보기</p>
                </div>
                <div className = {classes.contestRanking}>
                    <div className = {classes.RankingDetail}>
                        <img clasName = {classes.trophyIcon} src = "img/trophyGreen.png"/>
                        <div className = {classes.secondProfile}>
                            <img className = {classes.secondProfileImg} src = "img/contestDetailDummyDog2.png"/>
                            <p className = {classes.secondPetName}>탄이</p>
                        </div>
                        <div className = {classes.secondGraph}/>
                        <p className ={classes.secondName}>독기독</p>
                    </div>
                    <div className = {classes.RankingDetail}>
                        <img clasName = {classes.trophyIcon} src = "img/trophyPurple.png"/>
                        <div className = {classes.secondProfile}>
                            <img className = {classes.secondProfileImg} src = "img/contestDetailDummyDog1.png"/>
                            <p className = {classes.secondPetName}>아랑이</p>
                        </div>
                        <div className = {classes.firstGraph}/>
                        <p className ={classes.secondName}>허슬링</p>
                    </div>
                    <div className = {classes.RankingDetail}>
                        <img clasName = {classes.trophyIcon} src = "img/trophyRed.png"/>
                        <div className = {classes.secondProfile}>
                            <img className = {classes.secondProfileImg} src = "img/contestDetailDummyDog3.png"/>
                            <p className = {classes.secondPetName}>보리</p>
                        </div>
                        <div className = {classes.thirdGraph}/>
                        <p className ={classes.secondName}>콩이맘</p>
                    </div>
                </div>
                <div className = {classes.writeButtonForm}>
                    <AddIcon onClick={handleClick} sx = {{background: 'linear-gradient(#DD6280, #F5AB52)', borderRadius:'50px', fontSize: '80px', color: '#ffffff'}}/>
                </div>
                <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    해당 기능은 준비중입니다!
                </Alert>
            </Snackbar>
            </div>
    )
}

export default ContestDetailScreen