import * as React from 'react';
import { Reset } from 'styled-reset'
import SplashScreen from './screen/SplashScreen';
import SignInScreen from './screen/SignInScreen';
import PetInfoSubmitScreen from './screen/PetInfoSubmitScreen';
import  {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Circle from './components/Circle';
import PetPicSubitScreen from './screen/PetPicSubitScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import MainScreen from './screen/MainScreen';
import CustomSpaceScreen from './screen/CustomSpaceScreen';
import  './static/font.css'
import MissionScreen   from './screen/MissionScreen';
import MissionDetailScreen from './screen/MissionDetailScreen';
import ContestScreen from './screen/ContestScreen';
import ContestDetailScreen from './screen/ContestDetailScreen';
import CommunityScreen from './screen/CommunityScreen';
import CommunityDetailScreen from './screen/CommunityDetailScreen';
import ShoppingScreen from './screen/ShoppingScreen';
import ShoppingDetailScreen from './screen/ShoppingDetailScreen';
import SimpleSlider from './components/SimpleSlider';
import PrivateRoute from './components/PrivateRoute';

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}

window.addEventListener('resize', () => setScreenSize());

const App = () => {

    document.getElementById('root').style.fontFamily = 'NotoSansKRR';
    return(
        <React.Fragment>
            <SplashScreen/>
            <div className="App">
            <Header/>
            

            <Footer/>
            <Reset/>
            <Routes>
            <Route path="/" element={<SignInScreen/>}/>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/submit/petInfo" element={<PetInfoSubmitScreen/>}/>
                <Route path="/submit/petPic" element={<PetPicSubitScreen/>}/>

                <Route path="/home" element={<MainScreen/>}/>
                <Route path="/customSpace" element={<CustomSpaceScreen/>}/>

                <Route path="/mission" element={<MissionScreen/>}/>
                <Route path="/missionDetail" element={<MissionDetailScreen/>}/>

                <Route path="/contest" element={<ContestScreen/>}/>
                <Route path="/ContestDetail" element={<ContestDetailScreen/>}/>

                <Route path="/community" element={<CommunityDetailScreen/>}/>
                <Route path="/communityDetail" element={<CommunityScreen/>}/>
                
                <Route path="/shopping" element={<ShoppingScreen/>}/>
                <Route path="/shoppingDetail" element={<ShoppingDetailScreen/>}/>
            </Route>
            </Routes>
            </div>
        </React.Fragment>
    )
}

export default App;