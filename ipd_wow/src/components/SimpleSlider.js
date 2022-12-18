import React, { Component } from "react";
import Slider from "react-slick";
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
  colorDetail:{
      width: '70px',
      height:'70px',
      borderRadius:'50px',
  },
  colors:{
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      margin: '20px 0',
      overflow:'scroll',
  },
  colorDetailText:{
      color:'#747474',
      fontSize:'13px',
      margin: '5px'
  },
  colorInfo:{
      display:'flex',
      alignItems: 'center',
      flexDirection:'column',
      margin: '0 15px'
  },
  colorSection:{
    margin:'20px 0'
  }
})
function SimpleSlider() {
    const classes = useStyles();
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    }
    return (
      <div className = {classes.colorSection}>
          <Slider {...settings}>
          <div className = {classes.colorInfo}>
              <div style = {{backgroundColor:'#DBD0E7'}} className = {classes.colorDetail}/>
              <p className = {classes.colorDetailText}>#DBD0E7</p>
          </div>
          <div className = {classes.colorInfo}>
              <div style = {{backgroundColor:'#FFC7C7'}} className = {classes.colorDetail}/>
              <p className = {classes.colorDetailText}>#FFC7C7</p>
          </div>
          <div className = {classes.colorInfo}>
              <div style = {{backgroundColor:'#8AECE6'}} className = {classes.colorDetail}/>
              <p className = {classes.colorDetailText}>#8AECE6</p>
          </div>
          <div className = {classes.colorInfo}>
              <div style = {{backgroundColor:'#B9C9FF'}} className = {classes.colorDetail}/>
              <p className = {classes.colorDetailText}>#B9C9FF</p>
          </div>
          <div className = {classes.colorInfo}>
              <div style = {{backgroundColor:'#FFE791'}} className = {classes.colorDetail}/>
              <p className = {classes.colorDetailText}>#FFE791</p>
          </div>
          <div className = {classes.colorInfo}>
              <div style = {{backgroundColor:'#A9CBB9'}} className = {classes.colorDetail}/>
              <p className = {classes.colorDetailText}>#A9CBB9</p>
          </div>
        </Slider>
      </div>
    );
}

export default SimpleSlider;