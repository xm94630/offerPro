import React from 'react'
import pic1 from '../img/pic1.png'
import $ from 'jquery'
var l = console.log;

export default React.createClass({

  componentDidMount() {
    $('.submitBtn').click(function(){
      alert(123);
    });
  },
  handleClick(){
    alert(222);
  },
  render() {
    return (
    	<div className="page OfferIndex">
    	    <img src={pic1} width="100%"/>
    	    <p className="MT10">输入身份证号码<br/>快速查询您的offer信息</p>
    	    <div className="sanjiao MT10"></div>
    	    <input type="text" className="myInput W80P MT10"/>
    	    <div type="text" className="myInput submitBtn W80P MT10" onClick={this.handleClick} >查 询</div>
    	</div>
    )
  }
})