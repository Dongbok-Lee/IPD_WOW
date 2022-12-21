import React,{useState, useEffect} from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getAuth} from "firebase/auth";
import { collection, addDoc, getDocs,  query, where, serverTimestamp  } from "firebase/firestore"; 
import Pet from '../components/Pet';
import {db} from '../fbase';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }

const useStyles = makeStyles({
    mainContainer:{
        // background: 'rgba(0, 0, 0, 0.8)',
        backgroundColor: '#ffffff',
        display: 'grid',
        gridTemplateRows: '6fr 2fr',
        height: 'calc(100vh - 110px )',
        padding: '50px 0 60px',
        overflow: 'hidden',
        position: 'relative',
    },
    customSpaceContainer:{
        backgroundColor: '#F2E1C3',
        position: 'relative',
    },
    customDog:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    dogText:{
        fontSize: '10px',
        textAlign: 'center',
        width: '60px',
        backgroundColor:'#ffffff',
        borderRadius: '10px',
        padding: '3px',
        fontWeight: 'bold',
        marginTop: '20px'
    },
    backgroundContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', 
        padding: 0,
        "& img":{
            width: '100%',
            height: '100%',
        }
    },
    tabs:{
        "& .Mui-selected":{
            color: '#F5AB52 !important'
        }
    },
    tabPanel:{
        "& .MuiBox-root":{
            padding: '0'
        }
    }
})

function CustomSpaceScreen() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

    const classes = useStyles();
    const [pets, setPets] = useState([]);
    const getPetData = async() =>{
        const pet = [];
        const auth = getAuth();
        const q = query(collection(db, "pet"), where("user", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            pet.push(doc.data());
            setPets(pet);
        });
    }

    useEffect(()=>{
        getPetData();
    },[])

    return (
        <div className = {classes.mainContainer}>
            <div className = {classes.customSpaceContainer}>
                <Pet index = {0} type = {pets[0].type} name = {pets[0].name}/>
            </div>
            <div>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: {  background: "#F5AB52" } }}>
                        <Tab label="배경" {...a11yProps(0)} />
                        <Tab label="악세서리" {...a11yProps(1)} />
                        <Tab label="패턴" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel className= {classes.tabPanel} value={value} index={0}>
                    <div className = {classes.backgroundContainer}>
                        <img src = 'img/backgroundList1.png' />
                        <img src = 'img/backgroundList2.png' />
                        <img src = 'img/backgroundList3.png' />
                        <img src = 'img/backgroundList4.png' />
                        <img src = 'img/backgroundList5.png' />
                        <img src = 'img/backgroundList6.png' />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                컨텐츠를 준비 중 입니다.
                </TabPanel>
                <TabPanel value={value} index={2}>
                컨텐츠를 준비 중 입니다.
                </TabPanel>
            </div>
        </div>
    )
}

export default CustomSpaceScreen