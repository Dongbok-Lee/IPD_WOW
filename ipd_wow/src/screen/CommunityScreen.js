import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useLocation} from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50px 0 60px',
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
        fontSize: '15px',
    },
    reactText:{
        fontSize: '12px',
    },
    communityHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo:{
        display: 'flex',
        alignItems: 'center',
        margin: '10px'
    },
    userImage:{
        width: '32px',
        height: '32px',
        borderRadius: '30px'
    },
    userName:{
        fontSize: '12px',
        margin: '5px',
        fontWeight: 'bold'
    },
    communityDay:{
        fontSize: '10px',
        color: '#8D8D8D',
        margin: '30px 0',
    }
})

function CommunityScreen() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const location = useLocation();
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

    return (
        <div className={classes.mainContainer}>
            <div className = {classes.communitySection}>
                <div className = {classes.communityHeader}>
                    <div className = {classes.userInfo}>
                        <img className = {classes.userImage} src= "img/communityUserProfile.png"/>
                        <p className = {classes.userName}>큐티블리</p>
                    </div>
                    <MoreHorizIcon onClick={handleClick}/>
                </div>
                <div className = {classes.communityCard}>
                    <img className = {classes.communityImg} src = {location.state.img}/>
                    <div className={classes.reactionSection}>
                        <div className = {classes.favoriteSection}>
                            <FavoriteIcon onClick={handleClick} sx ={{fontSize: '16px'}} />
                            <p className = {classes.reactText}>11</p>
                        </div>
                        <div className = {classes.massageSection}>
                            <MessageIcon onClick={handleClick} sx ={{fontSize: '16px'}} />
                            <p className = {classes.reactText}>7</p>
                        </div>
                    </div>
                    <p className = {classes.context}>
                        {location.state.content}
                    </p>
                    <p  className = {classes.communityDay}>하루 전</p>
                </div>
            </div>
            <div className = {classes.communitySection}>
                <div className = {classes.communityHeader}>
                    <div className = {classes.userInfo}>
                        <img className = {classes.userImage} src= "img/communityUserProfile.png"/>
                        <p className = {classes.userName}>큐티블리</p>
                    </div>
                    <MoreHorizIcon onClick={handleClick}/>
                </div>
                <div className = {classes.communityCard}>
                    <img className = {classes.communityImg} src = "img/dummyDogCommunity.png"/>
                    <div className={classes.reactionSection}>
                        <div className = {classes.favoriteSection}>
                            <FavoriteIcon onClick={handleClick} sx ={{fontSize: '16px'}} />
                            <p className = {classes.reactText}>21</p>
                        </div>
                        <div className = {classes.massageSection}>
                            <MessageIcon onClick={handleClick} sx ={{fontSize: '16px'}} />
                            <p className = {classes.reactText}>9</p>
                        </div>
                    </div>
                    <p className = {classes.context}>
                        오늘은 탄이한테 토끼 머리띄를 씌우고 산책을 다녀왔다ㅎㅎ
                        너무너무 행복했다!
                    </p>
                    <p  className = {classes.communityDay}>하루 전</p>
                </div>
                
            </div>
            <div className = {classes.communitySection}>
                <div className = {classes.communityHeader}>
                    <div className = {classes.userInfo}>
                        <img className = {classes.userImage} src= "img/profileDummy2.png"/>
                        <p className = {classes.userName}>티티</p>
                    </div>
                    <MoreHorizIcon onClick={handleClick}/>
                </div>
                <div className = {classes.communityCard}>
                    <img className = {classes.communityImg} src = "img/test12.png"/>
                    <div className={classes.reactionSection}>
                        <div className = {classes.favoriteSection}>
                            <FavoriteIcon onClick={handleClick} sx ={{fontSize: '16px'}} />
                            <p className = {classes.reactText}>2</p>
                        </div>
                        <div className = {classes.massageSection}>
                            <MessageIcon onClick={handleClick} sx ={{fontSize: '16px'}} />
                            <p className = {classes.reactText}>5</p>
                        </div>
                    </div>
                    <p className = {classes.context}>
                        오늘은 탄이한테 토끼 머리띄를 씌우고 산책을 다녀왔다ㅎㅎ
                        너무너무 행복했다!
                    </p>
                    <p  className = {classes.communityDay}>하루 전</p>
                </div>
                
            </div>
            <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    해당 기능은 준비중입니다!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CommunityScreen