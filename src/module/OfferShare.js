import React from 'react'
import pic from '../img/fontPic2.png'
import offerPic from '../img/offerPic.png'
import ad from '../img/ad.png'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

var l = console.log;

var offerShare = React.createClass({
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
    		<div className="checkInfoBox2 MT15">
				<span>获得斯特拉斯克莱德-视觉艺术与设计专业录取offer！</span>
    		</div>
    		<div type="text" className="myInput submitBtn W80P MT10">分享喜悦</div>
    		<div className="adImgBox"><a href="#"><img src={ad} width="100%"/></a></div>
    	</div>
    )
  }
})


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    ID: state.ID,
    name: state.name,
    offers: state.offers,
    offerIndex: state.offerIndex
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    //saveOfferIndex: (offerIndex) => dispatch({type: 'saveOfferIndex',offerIndex:offerIndex})
  }
}
//包装 OfferLists
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(offerShare);






