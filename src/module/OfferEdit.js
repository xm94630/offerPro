import React from 'react'
import pic from '../img/fontPic2.png'
import offerPic from '../img/offerPic.png'
import $ from 'jquery'
var l = console.log;

export default React.createClass({
  componentDidMount() {
    
    var mousePressed = false;
    var lastX, lastY;
    var ctx; 
    
    function InitThis() {
        ctx = document.getElementById('myCanvas').getContext("2d");
        var w = $(window).width()
        $('#myCanvas').attr("width",w).attr("height",w); 
        var img = new Image();         
        img.src = "http://avatar.csdn.net/F/7/7/1_itpinpai.jpg";  
        //img.crossOrigin="anonymous";
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

    function getPng(){
        var canvas=document.getElementById('myCanvas');  
        var imageData =  canvas.toDataURL('image/png');  
        var data=imageData.substr(22);    
        return data;
    }

    //初始化canvas：内容、事件绑定等
    InitThis();
    //获取base64格式的图片
    var data = getPng();
    //l(data)

    $.ajax({
        type: "POST",
        url: "http://os2017.51qiantu.com/offer/generate",
        dataType:"json",
        data: {
          "reName": '孙悟空',
          "pic":data,
          "watermark":1,
        },
        success: function(data){
            console.log('+>');
            console.log(data);
        }
    });


  },

  render() {
    return (
    	<div className="page OfferEdit">
    		<div className="picBox">
	    		<img src={pic} width="100%"/>
	    		<span className="studentName2">令狐冲</span>
    		</div>
    		<div className="canvasBox">
    			<canvas id="myCanvas" width="100" height="100"></canvas>
    		</div>	
    		<div type="text" className="myInput submitBtn W80P MT10">
    			<div className="wrapper">
    		        <div className="box1">编辑姓名</div>
    		        <div className="box2">马赛克</div>
    		        <div className="box3">撤销</div>
    		    </div>
    		</div>
    		<div className="checkInfoBox MT15">
    			<input type="checkBox"/>
				<span>我同意添加新东方前途出国水印</span>
    		</div>
    		<div type="text" className="myInput submitBtn W80P MT10">生 成</div>
    	</div>
    )
  }
})
