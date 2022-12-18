import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
    circle:{
        fontSize: '12px',
        lineHeight: '18px',
        borderRadius: '50px',
        textAlign: 'center',
        backgroundColor: '#CBCBCB',
        color: 'white',
        width: '10px',
        height: '10px',
        margin: '3px'
    },
});

function Circle({text, color, size}) {

    const classes = useStyles();

    return (
        <>
            <div className={classes.circle} style={{
                background: color,
                width: size,
                height: size,
            }}>{text}</div>
        </>
    )
}

export default Circle;