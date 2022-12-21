import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom'

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
    productList:{
        marginTop: '5px',
        width: '90vw',
        gap: '2px',
        display: 'grid',
        gridTemplateColumns:'1fr 1fr',
    },
    productName:{
        fontSize: '12px',
        margin: '2px'
    },
    productImage:{
        width: '100%',
        height: 'calc(90vw/2 *4/3 )'
    },
    productPrice:{
        fontSize: '10px',
        color: '#5C5C5C',
    },
    shoppingHeaderText:{
        marginTop: '20px',
        color:'#8B8B8B',
        fontSize: '10px',
    },
    customButton:{
        width: '80%',
        background:'#000',
        opacity: 0.7,
        position: 'absolute',
        height: '50px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customText:{
        color: "#F5AB52",
        fontSize: '12px',
    },
    customImage:{
        position: 'relative',
    }
})

function ShoppingScreen() {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.mainContainer}>
            <div className = {classes.searchSection}>
                <div className = {classes.searchBox}>
                    <SearchIcon sx ={{ color: '#F5AB52'}}/>
                    <input className = {classes.searchInput} placeholder = "검색" />
                </div>
            </div>
            <div className = {classes.shoppingSection}>
                <p className = {classes.shoppingHeaderText}>MCM ZOO COLLECTION</p>
                <div className = {classes.productList}>
                    <div onClick={() => navigate("/shoppingDetail")} className = {classes.productCard}>
                        <div className = {classes.customImage}>
                            <div className = {classes.customButton}>
                                <p className = {classes.customText}>CUSTOM</p>
                            </div>
                            <img className = {classes.productImage} src = "img/product1.png"/>
                        </div>
                        <p className = {classes.productName}>비세토스 레빗</p>
                        <p className = {classes.productPrice}> &#8361; 450,000</p>
                    </div>
                    <div onClick={() => navigate("/shoppingDetail")} className = {classes.productCard}>
                        <img className = {classes.productImage} src = "img/product2.png"/>
                        <p className = {classes.productName}>비세토스 레빗</p>
                        <p className = {classes.productPrice}> &#8361; 450,000</p>
                    </div>
                    <div onClick={() => navigate("/shoppingDetail")} className = {classes.productCard}>
                        <img className = {classes.productImage} src = "img/product3.png"/>
                        <p className = {classes.productName}>비세토스 레빗</p>
                        <p className = {classes.productPrice}> &#8361; 450,000</p>
                    </div>
                    <div onClick={() => navigate("/shoppingDetail")} className = {classes.productCard}>
                        <img className = {classes.productImage} src = "img/product2.png"/>
                        <p className = {classes.productName}>비세토스 레빗</p>
                        <p className = {classes.productPrice}> &#8361; 450,000</p>
                    </div>
                    <div onClick={() => navigate("/shoppingDetail")} className = {classes.productCard}>
                        <img className = {classes.productImage} src = "img/product3.png"/>
                        <p className = {classes.productName}>비세토스 레빗</p>
                        <p className = {classes.productPrice}> &#8361; 450,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingScreen