import React, {useState, useEffect, useCallback} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import {db} from '../fbase';
import { getAuth} from "firebase/auth";
import { collection, addDoc, getDocs,  query, where, serverTimestamp  } from "firebase/firestore"; 
import PetCard from '../components/PetCard';
import Box from '../components/Box'
import { ItemTypes } from '../components/ItemTypes.js'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'

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
        margin: '3px'
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
        transition: 'all 1s'
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
        transition: 'all 1s'
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

});


function MainScreen() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [trophyBar, setTrophyBar] = useState(false);
    const [userData, setUserData] = useState([
        {
            name : "user",
            email : "user@example.com",
            userPicture : "",
            level : 0,
        }
    ]);
    
    useEffect(() => {
        getUserData()
        getPetData()
    },[])

    useEffect(() => {
        console.log(userData[0]);
        console.log(pets)
    },[userData,pets])

    const getUserData = async() =>{
        const user = [];
        const auth = getAuth();
        const q = query(collection(db, "user"), where("email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            user.push(doc.data());
            setUserData(user);
            console.log(user)
        });
    }

    const getPetData = async() =>{
        const pet = [];
        const auth = getAuth();
        const q = query(collection(db, "pet"), where("user", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            pet.push(doc.data());
            setPets(pet);
        });
    }

    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
      })
      const moveBox = useCallback(
        (id, left, top) => {
          setBoxes(
            update(boxes, {
              [id]: {
                $merge: { left, top },
              },
            }),
          )
        },
        [boxes, setBoxes],
      )
      const [, drop] = useDrop(
        () => ({
          accept: ItemTypes.BOX,
          drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            const left = Math.round(item.left + delta.x)
            const top = Math.round(item.top + delta.y)
            moveBox(item.id, left, top)
            return undefined
          },
        }),
        [moveBox],
      )

return (
    <div className={classes.mainContainer}>

        <div className= {classes.userInfo}>
            <div className = {`${trophyBar ? classes.trophyBar : classes.noTrophyBar}`}>
                <div onClick = {()=> setTrophyBar(!trophyBar)} className= {classes.trophyButton}>
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
                    <img className = {classes.userImage} src= {userData[0].profilePicture} />
                </div>
                <div className= {classes.userProfile}>
                    <div className = {classes.userName}>
                        {userData[0].name}
                    </div>
                    <div className = {classes.userLevel}>
                        <div className = {classes.userLevelText}>LV. {userData[0].level/100}</div>
                        <div className= {classes.userLevelGraph}>
                            <div className = {classes.graphOutline}>
                                <div style = {{width: userData[0].level%100}} className = {classes.graphInline}/>
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
                <AddCircleIcon onClick = {()=> navigate("/submit/petInfo")} sx = {{
                    color:"#F5AB52",
                    margin: '5px'
                }}/>
            </div>
            {pets.map((pet)=>(<PetCard petInfo = {pet}/>))}
        </div>
        <div ref={drop} className= {classes.petSpace}>
            <img className = {classes.spaceImage} src = "img/background2.png"/>
            <a onClick = {() => navigate("/customSpace")} className = {classes.modifyButton}>
            <img className = {classes.modifyIcon} src = "img/modifyIcon.svg"/>
            </a>
            <div className={classes.dogImage}>
            <img  src="img/dog1.png"/>
            <p className ={classes.dogText}>탄이</p>
            {Object.keys(boxes).map((key) => {
            const { left, top, title } = boxes[key]
            return (
            <Box
                key={key}
                id={key}
                left={left}
                top={top}
                hideSourceOnDrag={true}
            >
            {title}
          </Box>
        )
      })}
            </div>
        </div>
    </div>
)
}

export default MainScreen