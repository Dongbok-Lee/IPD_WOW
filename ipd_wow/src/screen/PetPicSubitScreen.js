import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Circle from '../components/Circle';
import {Button} from "@material-ui/core";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getAuth} from "firebase/auth";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { collection, addDoc,  serverTimestamp  } from "firebase/firestore"; 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {storage, db} from "../fbase.js";

const useStyles = makeStyles({
    petInfoRoot :{
        backgroundColor:'#ffffff',
        zIndex: 5,
        position: 'relative',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100vw',
        height: '100vh'
    },
    circles:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        margin: '20px',
    },
    miniCircle:{
        margin: '5px'
    },
    margin5:{
        margin : 5,
    },

    submitButton:{
        width: '300px',
        height: '50px',
        borderRadius: '30px',
        backgroundColor: '#F5AB52',
        color: '#fff',
        margin: '30px',
        fontSize: '16px',
        "&:hover":{
            backgroundColor: '#F5AB52',
        },
    },
    uploadForm:{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    uploadIcon: {
        position:'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '240px',
        height: '240px',
        background:"linear-gradient(#DD6280, #F5AB52)",
        borderRadius: "31px",
        margin: '10px',
    },
    inputTag:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        opacity: 0,
        zIndex: '3',
    },
    uploadImage:{
        backgroundColor:'#ffffff',
        position: 'absolute',
        width: '240px',
        height: '240px',
        borderRadius: "31px",
        top: '0px',
        left: '0px',
        zIndex: '2'
    }
})

function PetPicSubitScreen() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState();
    const [open, setOpen] = React.useState(false);

    const location = useLocation();
    console.log('state', location.state)
    const classes = useStyles();
    const navigate = useNavigate();
    const goHomeScreen = () =>{
        navigate("/home");
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };


    const handlePictureChange = (e) =>{
        e.preventDefault();
        setImageUpload(e.target.files[0]);
        console.log(imageUpload);
    }
    const upload = () => {
        if (imageUpload === null){
            handleClick()
            return;
        }
        console.log(imageUpload);

        try{
            const imageRef = ref(storage, `images/${imageUpload.name}`);
            // `images === ???????????????(????????????), / ????????? ???????????? ????????? ?????????
            uploadBytesResumable(imageRef, imageUpload).then((snapshot) => {
              // ????????? ???????????? ?????? ?????????
            getDownloadURL(snapshot.ref).then((url) => {
                setImageURL(url);
                console.log(url);
            })
            // 
            });
        }catch(error){
            console.log(error.message)
            handleClick()
        }

    };

    useEffect(() => {
        saveData();
    },[imageURL])

    const saveData = async() => {
        try{
            const auth =getAuth();
            console.log({
                character: location.state.petCharacter,
                name: location.state.petName,
                picture: imageURL,
                sex: location.state.petSex,
                type : location.state.petType,
                age : location.state.petAge,
                createTime: serverTimestamp(),
                user: auth.currentUser.email
            })
            const docRef = await addDoc(collection(db, "pet"), {
                character: location.state.petCharacter,
                name: location.state.petName,
                picture: imageURL,
                sex: location.state.petSex,
                type : location.state.petType,
                age : location.state.petAge,
                createTime: serverTimestamp(),
                user: auth.currentUser.email
            });
            goHomeScreen();
    
            console.log("Document written with ID: ", docRef.id);
        }catch(error){
            console.log(error.message)
        }
        
        

    }
return (
<div className= {classes.petInfoRoot}>
    <div className = {classes.circles}>
        <Circle text={1} color={"linear-gradient(#DD6280, #F5AB52)"} size = {"20px"}/>
        <Circle className ={classes.miniCircle} size = {"3px"} color = {"#F5AB52"}/>
        <Circle className ={classes.miniCircle} size = {"3px"} color = {"#F5AB52"}/>
        <Circle text={2} color={"linear-gradient(#DD6280, #F5AB52)"} size = {"20px"}/>
        <Circle className ={classes.miniCircle} size = {"3px"} color = {"linear-gradient(#DD6280, #F5AB52)"}/>
        <Circle className ={classes.miniCircle} size = {"3px"} color = {"linear-gradient(#DD6280, #F5AB52)"}/>
        <Circle text={3} color={"linear-gradient(#DD6280, #F5AB52)"} size = {"20px"}/>
    </div>

    <div className = {classes.uploadForm}>
    
        <div className = {classes.uploadIcon}>
        {imageUpload && (<img className={classes.uploadImage}
                                alt="sample"
                                src={URL.createObjectURL(imageUpload)}
                            />)}
        <input className = {classes.inputTag} type="file" onChange = {handlePictureChange}/>  
            <AddSharpIcon
                sx = {{
                    color: '#fff',
                    width: '200px',
                    height:'200px',
                }}
            />
        </div>
        <p>????????? ???????????? ????????? ????????? ????????????!</p>
    </div>
    <div className = {classes.nextButton}>
        <Button onClick = {upload} className = {classes.submitButton}>??????</Button>
    </div>
    <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            ????????? ??????????????????. ????????? ???????????? ??????????????????!
        </Alert>
    </Snackbar>
</div>
)
}

export default PetPicSubitScreen