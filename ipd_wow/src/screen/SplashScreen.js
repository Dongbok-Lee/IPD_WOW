import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    '@keyframes disappear': {
        "0%" : { opacity: 1},
        "50%": { opacity: 1},
        "100%": { opacity: 0}
    },
    disappear:{
        animation: '$disappear 2s',
        opacity: 0,
    },

    splashScreen: {
        width: '100vw',
        height: 'calc(var(--vh, 1vh) * 100)',
        background: 'linear-gradient(#DD6280, #F5AB52)',
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 99,
        animation: '$disappear 2s',
    },
    disActive:{
        display:'none'
    },
    rocketImg : {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate( -50%)',
    },
    
    splashLogo: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '500',
        overflow: 'hidden',
    },
});

function SplashScreen() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{setLoading(false)},1900);
    })

    return (
        <div className = {`${classes.splashScreen}  ${loading ? null : classes.disActive}`}>
            <img className = {classes.rocketImg} src="img/rocket.svg"/>
            <img className = {classes.splashLogo} src="img/splashLogo.svg"/>
        </div>
    )
}
export default SplashScreen