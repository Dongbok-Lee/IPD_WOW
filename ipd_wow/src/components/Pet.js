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
        fontSize: '10px',
        textAlign: 'center',
        width: '60px',
        backgroundColor:'#ffffff',
        borderRadius: '10px',
        padding: '3px',
        fontWeight: 'bold',
    },
    catText:{
        fontSize: '10px',
        textAlign: 'center',
        width: '60px',
        backgroundColor:'#ffffff',
        borderRadius: '10px',
        padding: '3px',
        fontWeight: 'bold',
    },
    petImage:{
        width: '70px',
        height:'128px'
    },
    petImage2:{
        width: '128px',
        height:'128px'
    }
})

function Pet({index, type, name}) {
    console.log(index == 0)
    const classes = useStyles();
    return (
        <div className={`${ index == 0 ? classes.dogImage : classes.dogImage2}`}>
        { (type == "강아지") && <img className = {classes.petImage} src="img/dog1.png"/>}
        { (type == "고양이") && <img className = {classes.petImage2} src="img/cat.png"/>}
        { (type == "강아지") && <p className ={classes.dogText}>{name}</p>}
        { (type == "고양이") && <p className ={classes.catText}>{name}</p>}
        </div>
    )
}

export default Pet