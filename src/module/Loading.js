import React from 'react'
import loading from '../img/triangle.gif'

export default React.createClass({
  render() {
  	if(this.props.isShow) {
  	    return (       
  	    	<div className="loadingBox">
            	<div className="mask"></div>
            	<img src={loading}/>
        	</div>
        )
  	} else {
		return null;
	}
  }
})
