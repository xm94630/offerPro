import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import $ from 'jquery'

var l = console.log;









/*$.ajax({
  method: "POST",
  url: "http://10.149.0.84/offer/getOffer",
  dataType: "json",
  data: {"idNum": '110110110110110110'}
}).done(function(data){
    l(data);
});*/


/*render((
  <div>offer</div>
), document.getElementById('root'))



var mousePressed = false;
var lastX, lastY;
var ctx;
 
function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");
 
    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });
 
    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });
 
    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
        $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}
 
function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
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
})   */                    








