import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import Circle from '../components/Circle';
import { TextField, Button} from "@material-ui/core";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import {useNavigate} from 'react-router-dom';

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    uploadIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '240px',
        height: '240px',
        background:"linear-gradient(#DD6280, #F5AB52)",
        borderRadius: "31px",
        margin: '10px',
    }
})

function PetPicSubitScreen() {
    const classes = useStyles();
    const navigate = useNavigate();
    const goHomeScreen = () =>{
        navigate("/home");
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
        <Button onClick = {goHomeScreen}className = {classes.submitButton}>다음</Button>
    </div>
</div>
)
}

export default PetPicSubitScreen