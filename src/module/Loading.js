import React from 'react'
import loading from '../img/triangle.gif'
import Mask from './Mask.js'

export default React.createClass({
  render() {
  	if(this.props.isShow) {
  	    return (       
  	    	<div className="loadingBox">
            	<Mask />
            	<img src={loading}/>
        	</div>
        )
  	} else {
		return null;
	}
  }
})
