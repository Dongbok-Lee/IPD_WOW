import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../components/SimpleSlider';
import {Button} from "@material-ui/core";
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const useStyles = makeStyles({
    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '90px 0 60px',
    },
    searchSection:{
        top: '50px',
        position:'fixed',
        width: "100%",
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        backgroundColor: '#fff',
        zIndex: 2
    },
    searchBox:{
        border: 0,
        borderRadius: '25px',
        width: '90vw',
        height: '33px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0'
    },
    searchInput:{
        border: 0,
        borderRadius: '25px',
        width: '90vw',
        height: '30px',
        backgroundColor: '#F0F0F0',
        "&:focus":{
            outline:'none'
        }
    },
    shoppingHeaderText:{
        marginTop: '20px',
        color:'#8B8B8B',
        fontSize: '10px',
    },
    shoppingImage:{
        width: "100%",
    },
    shoppingSection:{
        width: "90vw",
    },
    productName:{
        fontSize: '12px',
        margin: '2px 0'
    },
    productPrice:{
        fontSize: '10px',
        color: '#5C5C5C',
        margin: '10px 0px',
    },
    colorText:{
        marginTop: '30px',
        fontSize: '16px',
        background:'linear-gradient(#DD6280, #F5AB52)',
        color: '#FFFFFF',
        borderRadius:'20px',
        width: '50px',
        textAlign:'center',
        padding: '3px',
        marginLeft: '5vw'
    },
    otherOption:{
        display: 'flex',
        alignItems: 'start',
        width: '90vw'
    },
    optionButtons:{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection:'column',
    },
    optionButton:{
        padding:'5px',
        borderRadius:'20px',
        border: '2px solid #F5AB52',
        backgroundColor: '#ffffff',
        margin: '5px',
        fontSize: '16px',
        width: '120px'
    },
    activeOptionButton:{
        padding:'5px',
        borderRadius:'20px',
        border: '2px solid #F5AB52',
        backgroundColor: '#F5AB52',
        color: '#ffffff',
        margin: '5px',
        fontSize: '16px',
        width: '120px'
    },
    optionInput:{
        fontSize: '16px',
        border: '0',
        borderBottom: '1px solid #666666',
        width: '150px'
    },
    colorSection:{
        width:'100vw',
        overflow: 'hidden',
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

function ShoppingDetailScreen({price, image, name}) {
    const classes = useStyles();
    const location = useLocation();
    const [neckLace, setNeckLace] = useState(true);
    const [body, setBody] = useState(false);
    const [backSpace, setbackSpace] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    console.log('state', location.state)
    return (
        <div className = {classes.mainContainer}>
            <div className = {classes.searchSection}>
                <div className = {classes.searchBox}>
                    <SearchIcon sx ={{ color: '#F5AB52'}}/>
                    <input className = {classes.searchInput} placeholder = "??????" />
                </div>
            </div>
            <div className = {classes.shoppingSection}>
                <p className = {classes.shoppingHeaderText}>MCM ZOO COLLECTION</p>
                <img className = {classes.shoppingImage} src = {location.state.img}/>
                <p className = {classes.productName}>{location.state.name}</p>
                <p className = {classes.productPrice}> &#8361; {location.state.price}</p>
            </div>
            <div className ={classes.colorSection}>
                    <p className = {classes.colorText}>color</p>
                    <SimpleSlider />
            </div>
            <div className = {classes.otherOption}>
                <div className = {classes.optionButtons}>
                    <div className ={classes.optionSelect}>
                        <button onClick = {()=>setNeckLace(!neckLace)} className = {`${ neckLace ? classes.activeOptionButton : classes.optionButton}`}>
                            ?????? ?????????
                        </button>
                        <input className =  {classes.optionInput} placeholder = "???????????? ???????????????"/>
                    </div>
                    <button onClick = {()=>setBody(!body)} className = {`${ body ? classes.activeOptionButton : classes.optionButton}`}>
                        ?????? ??????
                    </button>
                    <button onClick = {()=>setbackSpace(!backSpace)} className = {`${ backSpace ? classes.activeOptionButton : classes.optionButton}`}>
                        ??? ?????? ??????
                    </button>
                </div>
                
            </div>
            <div className = {classes.nextButton}>
                <Button onClick={handleClick} className = {classes.submitButton}>??????</Button>
            </div>
            <Snackbar open={open}  autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    ?????? ?????? ????????? ????????????!
                </Alert>
            </Snackbar>
        </div>


    )
}

export default ShoppingDetailScreen