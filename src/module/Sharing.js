import React from 'react'
import Mask from './Mask.js'
import shareImg from '../img/shareImg2.png'

export default React.createClass({
  clickFun(){
    this.myDiv.remove();
  },

  render() {
    return (       
    	<div className="shareBox" ref="lala" ref={(div) => { this.myDiv = div; }}>
        	<Mask />
          <img src={shareImg} onClick={this.clickFun}/>
    	</div>
    )
  }
})
