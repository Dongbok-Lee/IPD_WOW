import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { auth, db} from '../fbase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getAuth} from "firebase/auth";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { collection, addDoc, getDocs,  query, where, serverTimestamp  } from "firebase/firestore"; 

const focusedColor = "#DD6280";

const useStyles = makeStyles({
    loginRoot: {
        position:'relative',
        backgroundColor:'#ffffff',
        zIndex:5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100vw',
    },
    logoImg: {
        marginTop:'20vh',
        width: '100px',
        height: '100px',
    },
    loginForm:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginInput:{
        marginBottom: '20px',
        borderRadius: '30px',
        width: '300px',
        height: '50px',
        "& .MuiOutlinedInput-notchedOutline":{
            borderRadius: '35px',
        },
        "& label.Mui-focused": {
        color: focusedColor
        },

        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: focusedColor
            }
        }
    },
    loginButtons:{
        marginBottom: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    oauthButton:{
        margin: '10px',
    },
    loginButton:{
        width: '300px',
        height: '40px',
        borderRadius: '30px',
        backgroundColor: '#F5AB52',
        color: '#fff',
        marginBottom: '10px',
        fontSize: '16px',
        "&:hover":{
            backgroundColor: '#F5AB52',
        },
    },
    signUpButton:{
        width: '300px',
        height: '40px',
        borderRadius: '30px',
        backgroundColor: '#7A7A7A',
        color: '#fff',
        marginBottom: '10px',
        fontSize: '16px',
        "&:hover":{
            backgroundColor: '#7A7A7A',
        },
    },
    findIdForm:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    findIdText:{
        display: 'inline-block',
        margin: '5px',
        fontSize: '11px',
        "&:hover":{
            textDecoration: 'underline'
        }
    }

});



function SignInScreen() {

    const classes = useStyles();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleClick = () => {
        setOpen(true);
    };
    const handleClick2 = () => {
        setOpen2(true);
    };
    const authLogin = async() =>{
        const auth =getAuth();
        console.log(auth.currentUser)
        const q = query(collection(db, "user"), where("email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q)
        console.log(querySnapshot.size)
        if(querySnapshot.size === 0){
            addUser();
            console.log("회원가입");
            goHomePage()
        }else{
            goHomePage()
        }
    }
    
    const addUser = async() =>{
        const auth =getAuth();
        const docRef = await addDoc(collection(db, "user"), {
            email: auth.currentUser.email,
            name:auth.currentUser.displayName,
            nickname:auth.currentUser.displayName,
            profilePicture: auth.currentUser.photoURL,
            level: 100,
            createTime: serverTimestamp()
    
        });
        console.log("Document written with ID: ", docRef.id);
    }

    const goHomePage = () =>{
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

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen2(false);
    };

    const [userData, setUserData] = useState(null);

    function handleGoogleLogin() {
      const provider = new GoogleAuthProvider(); // provider를 구글로 설정
      signInWithPopup(auth, provider) // popup을 이용한 signup
        .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data) // console로 들어온 데이터 표시
            authLogin();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const login = async() => {
        try{
            const auth = getAuth();
            console.log(email + password)
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            )
            console.log(user);
            goHomePage();
        }catch(error){
            console.log(error.message)
            handleClick2()
        }

    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <div className= {classes.loginRoot} >
                <img className = {classes.logoImg} src="img/loginLogoImg.svg"/>
                <div className = {classes.loginForm}>
                    <TextField onChange = {handleEmailChange} value = {email} className={classes.loginInput} id="outlined-basic" label="email" variant="outlined" />
                    <TextField type="password" onChange = {handlePasswordChange} value = {password} className={classes.loginInput} id="outlined-basic" label="password" variant="outlined" />
                </div>
                <div className = {classes.loginButtons}>
                    <div>
                        <img  onClick={handleGoogleLogin} className = {classes.oauthButton} src="img/google.png"/>
                        <img onClick={handleClick} className = {classes.oauthButton} src="img/facebook.png"/>
                        <img onClick={handleClick} className = {classes.oauthButton} src="img/kakao.png"/>
                        <img onClick={handleClick} className = {classes.oauthButton} src="img/naver.png"/>
                    </div>
                    <Button onClick={login} className = {classes.loginButton} variant="contained">로그인</Button>
                    <Button onClick={handleClick} className = {classes.signUpButton} variant="contained">회원가입</Button>
                    <div className = {classes.findIdForm}>
                        <a onClick={handleClick} className = {classes.findIdText}>아이디 찾기</a>
                        <a onClick={handleClick} className = {classes.findIdText}>비밀번호 찾기</a>
                    </div>
                </div>

            </div>
            <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    해당 기능은 준비중입니다!
                </Alert>
            </Snackbar>
            <Snackbar open={open2}  autoHideDuration={1000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
                    로그인에 실패했습니다. 아이디/비밀번호를 확인해주세요.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SignInScreen