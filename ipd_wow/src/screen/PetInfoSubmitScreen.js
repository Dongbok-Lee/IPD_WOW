import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Circle from '../components/Circle';
import {  Button} from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useNavigate, useLocation} from 'react-router-dom'

const useStyles = makeStyles({
    petInfoRoot :{
        position: 'relative',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100vw',
        height: '100vh',
        backgroundColor:'#ffffff',
        zIndex: 5,
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
    petInputList:{
        width: '80vw',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'start',
    },
    petInputText:{
        fontSize: '16px',
        fontWeight: 'bold',
    },
    selectSexButton:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
    },
    petInfoFirst: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'start',
    },
    margin5:{
        margin : 5,
    },
    nameInput:{
        width: '40vw',
        height: '35px',
        borderRadius: '30px',
        border: ' 2px solid #F5AB52',
        fontSize: '16px',
        margin: '5px',
        boxSizing: 'border-box'
    },
    ageInput:{
        width: '80px',
        height: '35px',
        borderRadius: '30px',
        border: ' 2px solid #F5AB52',
        fontSize: '16px',
        margin: '5px',
        boxSizing: 'border-box'
    },    
    typeSelect:{
        width: '40vw',
        height: '35px',
        borderRadius: '30px',
        fontSize: '16px',
        margin: '5px',
        "& .MuiSelect-icon":{
            color: '#F5AB52'
        },
        "& .MuiOutlinedInput-notchedOutline":{
            borderRadius: '30px',
            border: ' 2px solid #F5AB52',
            "&:hover":{
                border: ' 2px solid #F5AB52',
            }
        },
        
    },
    characterSelect:{
        width: '80px',
        height: '35px',
        fontSize: '16px',
        margin: '5px',
        "& .MuiSelect-icon":{
            color: '#F5AB52'
        },
        "& .MuiOutlinedInput-notchedOutline":{
            borderRadius: '30px',
            border: ' 2px solid #F5AB52',
            "&:hover":{
                border: ' 2px solid #F5AB52',
            }
        },
    },
    typeInputs:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIcon:{
        padding: '5px',
        margin : '5px',
        borderRadius: '50px',
        backgroundColor: '#F5AB52',
    },
    disActiveIcon:{
        margin : '5px',
        padding: '3px',
        border: '2px solid #F5AB52',
        borderRadius: '50px',
        backgroundColor: '#ffffff',
        "& .MuiSvgIcon-root":{
            color : '#b4b4b4'
        }
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
})

function PetInfoSubmit() {
    const [petSex, setPetSex] = useState("남아");
    const [petType, setPetType] = React.useState("강아지");
    const [petCharacter, setPetCharacter] = useState("활발");
    const [petName, setPetName] = useState("");
    const [petAge, setPetAge] = useState();
    const classes = useStyles();
    const navigate = useNavigate();
    const goSubmitPicPage = () =>{
        navigate("/submit/petPic", {
            state: {
                petSex : petSex,
                petType : petType,
                petCharacter : petCharacter,
                petName : petName,
                petAge : petAge,
            }
        });
    }

    const handleTypeChange = (event) => {
        setPetType(event.target.value);
    };

    const handleCharacterChange = (event) => {
        setPetCharacter(event.target.value);
    };

    const handleAgeChange = (event) => {
        setPetAge(event.target.value);
    };

    const handleNameChange = (event) => {
        setPetName(event.target.value);
    };

    const selectMale = () =>{
        setPetSex("남아");
    }

    const selectFemale = () =>{
        setPetSex("여아");
    }

    return (
        <div className= {classes.petInfoRoot}>
            <div className = {classes.circles}>
                <Circle text={1} color={"linear-gradient(#DD6280, #F5AB52)"} size = {"20px"}/>
                <Circle className ={classes.miniCircle} size = {"3px"} color = {"#F5AB52"}/>
                <Circle className ={classes.miniCircle} size = {"3px"} color = {"#F5AB52"}/>
                <Circle text={2} color={"linear-gradient(#DD6280, #F5AB52)"} size = {"20px"}/>
                <Circle className ={classes.miniCircle} size = {"3px"} color = {"#CBCBCB"}/>
                <Circle className ={classes.miniCircle} size = {"3px"} color = {"#CBCBCB"}/>
                <Circle text={3} color={"#CBCBCB"} size = {"20px"}/>
            </div>
            <div className = {classes.petInputList}>
                <div className = {classes.petInfoFirst}>
                    <div>
                        <p className = {`${classes.petInputText} ${classes.margin5}`}>반려동물 종류</p>
                        <Select className = {classes.typeSelect} value = {petType} onChange = {handleTypeChange} >
                            <MenuItem value={"강아지"}>강아지</MenuItem>
                            <MenuItem value={"고양이"}>고양이</MenuItem>
                            <MenuItem value={"기타"}>기타</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <div>
                            <p className = {`${classes.petInputText} ${classes.margin5}`}>성별</p>
                        </div>
                        <div className = {classes.selectSexButton}>
                            <div onClick = {selectMale} className ={`${petSex == "남아" ?  classes.activeIcon : classes.disActiveIcon }`}>
                                <MaleIcon sx = {{
                                color: '#fff',
                                width: '35px',
                                height:'35px',
                                }}/>
                            </div>
                            <div onClick = {selectFemale} className = {`${petSex == "여아" ?  classes.activeIcon : classes.disActiveIcon }`}>
                                <FemaleIcon sx = {{
                                color: '#fff',
                                width: '35px',
                                height:'35px',
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className = {`${classes.petInputText} ${classes.margin5}`}>반려동물 이름</p>
                    <input onChange = {handleNameChange} value = {petName} type="text" className= {classes.nameInput} name="name"/>
                </div>
                <div>
                    <p className = {`${classes.petInputText} ${classes.margin5}`}>나이</p>
                    <input onChange={handleAgeChange} value={petAge} type="number" className= {classes.ageInput} name="age" />
                </div>
                <div>
                    <p className = {`${classes.petInputText} ${classes.margin5}`}>성격</p>
                    <div className = {classes.typeInputs}>
                        <Select value = {petCharacter} onChange = {handleCharacterChange}  className = {classes.characterSelect}>
                                <MenuItem value={"활발"}>활발</MenuItem>
                                <MenuItem value={"온순"}>온순</MenuItem>
                                <MenuItem value={"예민"}>예민</MenuItem>
                                <MenuItem value={"난폭"}>난폭</MenuItem>
                                <MenuItem value={"소심"}>소심</MenuItem>
                        </Select>
                        {/* <AddCircleIcon sx = {{
                            color: '#F5AB52',
                            width: '30px',
                            height:'30px',
                        }}/> */}
                    </div>
                </div>
            </div>
            <div className = {classes.nextButton}>
                <Button onClick = {goSubmitPicPage} className = {classes.submitButton}>다음</Button>
            </div>
        </div>
    )
}

export default PetInfoSubmit;