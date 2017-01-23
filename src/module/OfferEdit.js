import React from 'react'
import pic from '../img/fontPic2.png'
import offerPic from '../img/offerPic.png'

export default React.createClass({
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
