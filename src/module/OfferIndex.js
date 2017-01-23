import React from 'react'
import pic1 from '../img/pic1.png'
import $ from 'jquery'
var l = console.log;

export default React.createClass({


  render() {

    //查询所有offer
    $.ajax({
        type: "GET",
        url: "http://os2017.51qiantu.com/offer/getOffer",
        dataType:"jsonp",
        jsonp:"callback",
        data: {"idNum": '140427198902272915'},
        success: function(data){
            console.log(data);
        }
    });

    //查询单独offer
    /*$.ajax({
        type: "GET",
        url: "http://os2017.51qiantu.com/offer/detail/"+2,
        dataType:"jsonp",
        jsonp:"callback",
        success: function(data){
            console.log('==>');
            console.log(data);
        }
    });*/

    //提交offer修改信息
    /*$.ajax({
        type: "POST",
        url: "http://os2017.51qiantu.com/offer/generate",
        dataType:"json",
        data: {
          "reName": '孙悟空',
          "pic":'jdafoehiwohgfwewterwt',
          "watermark":1,
        },
        success: function(data){
            console.log(data);
        }
    });*/

    //提交学生信息
    $.ajax({
        type: "POST",
        url: "http://os2017.51qiantu.com/student/save",
        dataType:"json",
        data: {
          "name": "徐明",
          "mobile": "13800001111",
          "country": "中国",
          "region": "浙江",
          "degree": "博士"
        },
        success: function(data){
            console.log('==>');
            console.log(data);
        }
    });


    return (
    	<div className="page OfferIndex">
    	    <img src={pic1} width="100%"/>
    	    <p className="MT10">输入身份证号码<br/>快速查询您的offer信息</p>
    	    <div className="sanjiao MT10"></div>
    	    <input type="text" className="myInput W80P MT10"/>
    	    <div type="text" className="myInput submitBtn W80P MT10">查 询</div>
    	</div>
    )
  }
})
