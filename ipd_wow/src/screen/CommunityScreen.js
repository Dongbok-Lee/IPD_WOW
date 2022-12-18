import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
        fontSize: '10px',
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
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className = {classes.communitySection}>
                <div className = {classes.communityHeader}>
                    <div className = {classes.userInfo}>
                        <img className = {classes.userImage} src= "img/communityUserProfile.png"/>
                        <p className = {classes.userName}>큐티블리</p>
                    </div>
                    <MoreHorizIcon/>
                </div>
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
                    <p  className = {classes.communityDay}>하루 전</p>
                </div>
            </div>
            <div className = {classes.communitySection}>
                <div className = {classes.communityHeader}>
                    <div className = {classes.userInfo}>
                        <img className = {classes.userImage} src= "img/communityUserProfile.png"/>
                        <p className = {classes.userName}>큐티블리</p>
                    </div>
                    <MoreHorizIcon/>
                </div>
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
                    <p  className = {classes.communityDay}>하루 전</p>
                </div>
            </div>
        </div>
    )
}

export default CommunityScreen