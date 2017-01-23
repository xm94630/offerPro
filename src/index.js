import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import $ from 'jquery'
import './index.css'

import OfferIndex from './module/OfferIndex'
import OfferLists from './module/OfferLists'
import OfferEdit from './module/OfferEdit'
import OfferShare from './module/OfferShare'
import Loading from './module/Loading'

var l = console.log;

render((
  <Router history={browserHistory}>
    <Route path="/" component={OfferIndex}></Route>
    <Route path="/OfferLists" component={OfferLists}></Route>
    <Route path="/OfferEdit" component={OfferEdit}></Route>
    <Route path="/OfferShare" component={OfferShare}></Route>
  </Router>
), document.getElementById('app'))

render((
	<Loading/>
), document.getElementById('loading'))


//base64数据格式
/*$(function(){
	var canvas=document.getElementById('myCanvas');  
	var ctx=canvas.getContext('2d');  
	ctx.fillStyle='#FF0000';  
	ctx.fillRect(0,0,100,100); 
	var imageData =  canvas.toDataURL('image/png');  
	//document.getElementById('myimage').src = imageData;
	var data=imageData.substr(22);    
	l(data);  
})*/
















/*$.ajax({
  method: "POST",
  url: "http://10.149.0.84/offer/getOffer",
  dataType: "json",
  data: {"idNum": '110110110110110110'}
}).done(function(data){
    l(data);
});*/


/*render((
  <div><OfferIndex /></div>
), document.getElementById('root'))



var mousePressed = false;
var lastX, lastY;
var ctx;
 
function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");

	var w = $(window).width()

	$('#myCanvas').attr("width",w).attr("height",w) 

	var img = new Image();         
    img.src = "http://avatar.csdn.net/F/7/7/1_itpinpai.jpg";  
    img.onload = function() {  
      ctx.drawImage(img, 0, 0,w,w);  
    } 

	$('#myCanvas').on('touchstart',function(e){
		e.preventDefault();
		mousePressed = true;
		Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);    
	})


 
    $('#myCanvas').on('touchmove',function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });
 
    $('#myCanvas').on('touchend',function (e) {
        mousePressed = false;
    });
}
 
function Draw(x, y, isDown) {
    if (isDown) {
 
        ctx.beginPath();
        ctx.strokeStyle = '#333';
		ctx.filter = "blur(5px)"; //模糊效果
		//ctx.globalAlpha=1

        ctx.lineWidth = 20;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();


    }
    lastX = x; lastY = y;
}
     
function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}         

$(function(){
	InitThis();
})     */                  








