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

    const location = useLocation();
    console.log('state', location.state)
    const classes = useStyles();
    const navigate = useNavigate();
    const goHomeScreen = () =>{
        navigate("/home");
    }
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

    useEffect(() => {
        saveData();
    },[imageURL])

    const saveData = async() => {
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
        <p>당신의 반려동물 사진을 업로드 해주세요!</p>
    </div>
    <div className = {classes.nextButton}>
        <Button onClick = {upload} className = {classes.submitButton}>다음</Button>
    </div>
</div>
)
}

export default PetPicSubitScreen