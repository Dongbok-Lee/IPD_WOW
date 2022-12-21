import React from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
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
})

function PetCard({petInfo}) {
    const classes = useStyles();
    return (
        <div className = {classes.petCard}>
            <div className = {classes.petPicAndName}>
                <img className = {classes.petPicture} src = {petInfo.picture}/>
                <p className = {classes.petName}>{petInfo.name}</p>
            </div>
            <div className = {classes.petInfoList}>
                <div className = {classes.petInfoLine}>
                    <p className = {classes.petInfoFirst}>견/묘 종</p>
                    <p className = {classes.petInfoLast}>{petInfo.type}</p>
                </div>
                <div className = {classes.petInfoLine}>
                    <p className = {classes.petInfoFirst}>성별</p>
                    <p className = {classes.petInfoLast}>{petInfo.sex}</p>
                </div>
                <div className = {classes.petInfoLine}>
                    <p className = {classes.petInfoFirst}>나이</p>
                    <p className = {classes.petInfoLast}>{petInfo.age}</p>
                </div>
                <div className = {classes.petInfoLine}>
                    <p className = {classes.petInfoFirst}>성격</p>
                    <p className = {classes.petInfoLast}>{petInfo.character}</p>
                </div>
            </div>
        </div>
    )
}

export default PetCard