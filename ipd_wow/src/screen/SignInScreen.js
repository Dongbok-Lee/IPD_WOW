import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

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

    const goSubmitInfoPage = () =>{
        navigate("/submit/petInfo");
    }
    return (
        <div>
            <div className= {classes.loginRoot} >
                <img className = {classes.logoImg} src="img/loginLogoImg.svg"/>
                <div className = {classes.loginForm}>
                    <TextField className={classes.loginInput} id="outlined-basic" label="email" variant="outlined" />
                    <TextField className={classes.loginInput} id="outlined-basic" label="password" variant="outlined" />
                </div>
                <div className = {classes.loginButtons}>
                    <div>
                        <img className = {classes.oauthButton} src="img/google.png"/>
                        <img className = {classes.oauthButton} src="img/facebook.png"/>
                        <img className = {classes.oauthButton} src="img/kakao.png"/>
                        <img className = {classes.oauthButton} src="img/naver.png"/>
                    </div>
                    <Button  onClick = {goSubmitInfoPage} className = {classes.loginButton} variant="contained">로그인</Button>
                    <Button  className = {classes.signUpButton} variant="contained">회원가입</Button>
                    <div className = {classes.findIdForm}>
                        <a className = {classes.findIdText}>아이디 찾기</a>
                        <a className = {classes.findIdText}>비밀번호 찾기</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignInScreen