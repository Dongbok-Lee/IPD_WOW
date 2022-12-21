import React from 'react'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    dogImage:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    dogImage2:{
        position: 'absolute',
        bottom: '30%',
        left: '30%',
    },
    dogText:{
        fontSize: '16px',
        textAlign: 'center',
        width: '60px',
        backgroundColor:'#ffffff',
        borderRadius: '10px',
        padding: '1vw',
        fontWeight: 'bold',
    },
    catText:{
        fontSize: '16px',
        textAlign: 'center',
        width: '60px',
        backgroundColor:'#ffffff',
        borderRadius: '10px',
        padding: '1vw',
        fontWeight: 'bold',
    },
    petImage:{
        width: '25vw',
        height:'44vw'
    },
    petImage2:{
        width: '30vw',
        height:'30vw'
    }
})

function CustomPet({index, type, name}) {
    console.log(index == 0)
    const classes = useStyles();
    return (
        <div className={`${ index == 0 ? classes.dogImage : classes.dogImage2}`}>
        { (type == "강아지") && <img className = {classes.petImage} src="img/dog1.svg"/>}
        { (type == "고양이") && <img className = {classes.petImage2} src="img/cat.png"/>}
        { (type == "강아지") && <p className ={classes.dogText}>{name}</p>}
        { (type == "고양이") && <p className ={classes.catText}>{name}</p>}
        </div>
    )
}

export default CustomPet;