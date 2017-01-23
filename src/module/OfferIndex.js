import React from 'react'
import pic1 from '../img/pic1.png'
import $ from 'jquery'
var l = console.log;

export default React.createClass({
  render() {


    /*$.ajax({
      method: "GET",
      url: "http://os2017.51qiantu.com/offer/getOffer",
      dataType: "jsonp",
      jsonp: "callback",
      data: {"idNum": '140427198902272915'}
    }).done(function(data){
        l(data);
    });*/

    /*$.ajax({
        type: "GET",
        url: "http://os2017.51qiantu.com/offer/getOffer",
        dataType:"json",
        //jsonp:"callback",
        success: function(data){
            console.log(data);
        }
    });*/


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
